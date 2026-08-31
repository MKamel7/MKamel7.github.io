# Mo Kamel · Portfolio

Source for my portfolio at [mkamel7.github.io](https://mkamel7.github.io).

I am a Mechatronics Engineer and M.Eng. student in Mechatronic & Cyber-Physical Systems at TH Deggendorf, based in Regensburg. The site presents my work across robotics, industrial automation, embedded systems, functional safety, and engineering software in English and German.

## Stack

React, TypeScript, Vite, Tailwind CSS v4, Motion. No i18n library; both languages live in `src/content.ts`.

## Performance budget

`npm run budget` measures `dist/` and fails the build past a stated limit. It runs in CI after the tests, because a site does not get slow in one commit, it gets slow over a year of commits that each looked fine.

**The weight is not where you would guess.** Code is 143 KB of a 17 MB `dist`; the rest is media. A single total budget would be dominated by video and would happily absorb the JS bundle tripling, so the categories are budgeted separately:

| metric | measured | limit | what it catches |
|---|---|---|---|
| `firstLoadKb` | 406.6 | 480 | **the only one a visitor waits for.** Code plus every font subset; `MediaSlot` lazy-loads video and images, so nothing else is on the critical path |
| `codeTransferKb` | 142.7 | 175 | JS, CSS and HTML gzipped. The number a heavy new dependency moves first |
| `fontsKb` | 263.9 | 300 | every shipped subset. Over-counts what one visitor fetches, which makes it a ceiling rather than an estimate |
| `videoKb` | 10968.8 | 12500 | two thirds of the repository's weight, and the thing most likely to grow unnoticed |
| `imageKb` | 5327.8 | 6000 | usually means a PNG got committed where a WebP belonged |
| `totalKb` | 16999.5 | 19000 | bandwidth and clone weight, not a user-facing number |
| `largestAssetKb` | 2150.6 | 2500 | one unoptimised export, which a total-size budget absorbs without complaining |

Every limit is set from a real measurement, and `budget.json` records the measured value beside each limit so the headroom is auditable rather than a number somebody picked. The headroom itself is not quoted here on purpose: it changes with every legitimate commit, and a figure in prose that nothing checks is exactly the kind that goes quietly wrong. `npm run budget` prints the current one.

**The gate was verified by breaking it**, three ways: a stray 3 MB video export trips `totalKb` and `largestAssetKb`, a JS bundle doubling trips `codeTransferKb` and `firstLoadKb`, and a 900 KB PNG trips `imageKb`. Exit 1 on a breach, 2 on a missing build, 0 clean.

**There is deliberately no `--update` flag.** A budget you can raise by running a command is a report, not a gate: the one time it matters is the time somebody is in a hurry, and that is exactly when it would be raised. Changing a limit is a commit, with a reason.

## Roadmap

- **Untrack `media-src/`, then rewrite history.** 577 files and 113 MB of raw frames are still tracked and Vite never ships them. Untracking stops the growth; only a history rewrite takes them out of a clone, and that is the one destructive step here.

## Run locally

```bash
npm install
npm run dev
```

Deployed to GitHub Pages via Actions on every push to `main`.
