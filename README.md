# Mo Kamel · Portfolio

Source for my portfolio at [mkamel7.github.io](https://mkamel7.github.io).

I am a Mechatronics Engineer and M.Eng. student in Mechatronic & Cyber-Physical Systems at TH Deggendorf, based in Regensburg. The site presents my work across robotics, industrial automation, embedded systems, functional safety, and engineering software in English and German.

## Stack

React, TypeScript, Vite, Tailwind CSS v4, Motion. No i18n library; both languages live in `src/content.ts`.

## Roadmap

- **A performance budget in CI** — a bundle-size or Lighthouse check that fails past a threshold. The JS bundle is 390 kB raw and 126 kB gzipped today, which is fine, and a budget is what keeps it fine.
- **Untrack `media-src/`, then rewrite history.** 577 files and 113 MB of raw frames are still tracked and Vite never ships them. Untracking stops the growth; only a history rewrite takes them out of a clone, and that is the one destructive step here.

## Run locally

```bash
npm install
npm run dev
```

Deployed to GitHub Pages via Actions on every push to `main`.
