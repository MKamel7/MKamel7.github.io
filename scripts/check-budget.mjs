// Performance budget gate. Reads budget.json, measures dist/, fails on a breach.
//
// WHY A GATE AND NOT A REPORT. A site does not get slow in one commit, it gets
// slow over a year of commits that each looked fine. A number printed in a log
// nobody reads cannot stop that; a build that goes red can. This is the same
// reasoning as the coverage gate in the other repositories here.
//
// WHAT IT MEASURES, and why these categories rather than one total. The weight
// of this site is not where the roadmap assumed it was: code is 143 kB of a
// 17 MB dist, and the rest is media. A single total would be dominated by
// video and would happily absorb the JS bundle tripling. So the categories are
// budgeted separately, and firstLoadKb is broken out because it is the only
// one a visitor actually waits for: MediaSlot lazy-loads video and images, so
// a first paint costs code plus fonts and nothing else.
//
// There is deliberately no --update flag. See budget.json.

import { gzipSync } from "node:zlib";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const DIST = join(ROOT, "dist");

const FONT = new Set([".woff", ".woff2", ".ttf", ".otf"]);
const VIDEO = new Set([".mp4", ".webm"]);
const IMAGE = new Set([".webp", ".jpg", ".jpeg", ".png", ".gif", ".svg", ".ico"]);
// Only these are worth gzipping: the server compresses text and serves media
// as it is, so gzipping a video here would report a transfer size no browser
// will ever see.
const COMPRESSED = new Set([".js", ".css", ".html", ".json", ".svg"]);

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function categorise(file) {
  const ext = extname(file).toLowerCase();
  if (ext === ".js") return "js";
  if (ext === ".css") return "css";
  if (ext === ".html") return "html";
  if (FONT.has(ext)) return "font";
  if (VIDEO.has(ext)) return "video";
  if (IMAGE.has(ext)) return "image";
  return "other";
}

function measure() {
  let files;
  try {
    files = walk(DIST);
  } catch {
    console.error("No dist/ to measure. Run `npm run build` first.");
    process.exit(2);
  }
  if (files.length === 0) {
    console.error("dist/ is empty, so a passing budget would mean nothing.");
    process.exit(2);
  }

  const bytes = { js: 0, css: 0, html: 0, font: 0, video: 0, image: 0, other: 0 };
  let total = 0;
  let largest = { size: 0, file: "" };

  for (const file of files) {
    const buffer = readFileSync(file);
    const kind = categorise(file);
    const transfer = COMPRESSED.has(extname(file).toLowerCase())
      ? gzipSync(buffer).length
      : buffer.length;

    bytes[kind] += transfer;
    total += statSync(file).size;
    if (statSync(file).size > largest.size) {
      largest = { size: statSync(file).size, file: relative(ROOT, file) };
    }
  }

  const kb = (n) => n / 1024;
  const code = bytes.js + bytes.css + bytes.html;

  return {
    metrics: {
      codeTransferKb: kb(code),
      fontsKb: kb(bytes.font),
      firstLoadKb: kb(code + bytes.font),
      videoKb: kb(bytes.video),
      imageKb: kb(bytes.image),
      totalKb: kb(total),
      largestAssetKb: kb(largest.size),
    },
    largest,
    fileCount: files.length,
  };
}

const budget = JSON.parse(readFileSync(join(ROOT, "budget.json"), "utf8"));
const { metrics, largest, fileCount } = measure();

const rows = [];
const breaches = [];

for (const [name, spec] of Object.entries(budget)) {
  if (name.startsWith("_")) continue;
  const used = metrics[name];
  if (used === undefined) {
    console.error(`budget.json names "${name}", which nothing measures.`);
    process.exit(2);
  }
  const headroom = ((spec.limit - used) / spec.limit) * 100;
  rows.push({ name, used, limit: spec.limit, headroom });
  if (used > spec.limit) breaches.push({ name, used, spec });
}

// A metric with no budget is a metric nobody is watching, which is the failure
// this whole file exists to prevent, so it is an error rather than a note.
const unbudgeted = Object.keys(metrics).filter((m) => !(m in budget));
if (unbudgeted.length) {
  console.error(`measured but not budgeted: ${unbudgeted.join(", ")}`);
  process.exit(2);
}

const pad = (s, n) => String(s).padEnd(n);
const num = (v) => v.toFixed(1).padStart(9);

console.log(`\nPerformance budget  ${fileCount} files in dist/\n`);
console.log(`${pad("metric", 18)}${"used".padStart(9)}${"limit".padStart(9)}   headroom`);
console.log("-".repeat(52));
for (const r of rows) {
  const flag = r.used > r.limit ? "  OVER" : "";
  console.log(
    `${pad(r.name, 18)}${num(r.used)}${num(r.limit)}   ${r.headroom.toFixed(0).padStart(4)}%${flag}`,
  );
}
console.log(`\nlargest asset: ${largest.file} at ${(largest.size / 1024).toFixed(1)} KB`);

if (breaches.length) {
  console.error(`\n${breaches.length} budget${breaches.length > 1 ? "s" : ""} exceeded:\n`);
  for (const { name, used, spec } of breaches) {
    console.error(`  ${name}: ${used.toFixed(1)} KB against a limit of ${spec.limit} KB`);
    console.error(`    ${spec.why}`);
  }
  console.error(
    "\nEither make it smaller, or raise the limit in budget.json in a commit " +
      "that says why. Do not raise it to make this message go away.",
  );
  process.exit(1);
}

console.log("\nEvery budget met.");
