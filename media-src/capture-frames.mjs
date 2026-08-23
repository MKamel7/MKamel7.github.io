import { chromium } from 'playwright-core';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const slug = process.argv[2] || 'digital-twin';
const W = parseInt(process.argv[3] || '1280', 10);
const H = parseInt(process.argv[4] || '960', 10);
const LOOP = parseInt(process.argv[5] || '8200', 10);
const FPS = 30;
const N = Math.round((LOOP / 1000) * FPS);

const url = 'file:///' + path.join(__dirname, slug, 'index.html').replace(/\\/g, '/') + '?t=0';
const fdir = path.join(__dirname, slug, 'frames');
fs.rmSync(fdir, { recursive: true, force: true });
fs.mkdirSync(fdir, { recursive: true });

const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(500); // webfonts

for (let i = 0; i < N; i++) {
  const t = Math.round((i / FPS) * 1000);
  await page.evaluate((tt) => window.setFrame(tt), t);
  await page.screenshot({ path: path.join(fdir, `f${String(i).padStart(4, '0')}.png`) });
}
await browser.close();
console.log('FRAMES:' + N + ' -> ' + fdir);
