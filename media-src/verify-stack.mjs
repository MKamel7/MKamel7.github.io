// Geometry check for the Projects sticky stack. Run against `npm run dev`:
//   node media-src/verify-stack.mjs [out.png]      VW/VH env override the viewport.
// Prints, at five scroll depths, each visible card's scale and viewport top, plus
// `clipped`, the cards whose bottom falls past the fold. A PINNED card in `clipped`
// is a bug: its bottom cannot be scrolled to. A card still sliding in from below is
// expected there. This is what caught the stack collapsing at thirteen projects.
import { chromium } from 'playwright-core'

const OUT = process.argv[2]
const browser = await chromium.launch({ channel: 'chrome' })
const page = await browser.newPage({ viewport: { width: Number(process.env.VW||1440), height: Number(process.env.VH||900) } })
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' })
await page.addStyleTag({ content: 'html{scroll-behavior:auto !important}' })

const geom = await page.evaluate(() => {
  const s = document.querySelector('#projects')
  return { secTop: s.offsetTop, secH: s.offsetHeight, n: s.querySelectorAll('.sticky').length }
})

const read = async () =>
  page.evaluate(() => {
    const cards = [...document.querySelectorAll('#projects .sticky')]
    return {
      y: Math.round(scrollY),
      vis: cards
        .map((el, i) => {
          const m = el.firstElementChild
          const r = m.getBoundingClientRect()
          return {
            i,
            top: Math.round(r.top),
            bot: Math.round(r.bottom),
            scale: +new DOMMatrix(getComputedStyle(m).transform).a.toFixed(3),
          }
        })
        .filter((c) => c.bot > 0 && c.top < innerHeight),
      clipped: cards
        .map((el, i) => {
          const r = el.firstElementChild.getBoundingClientRect()
          return r.top >= 0 && r.top < innerHeight && r.bottom > innerHeight ? i : -1
        })
        .filter((i) => i >= 0),
    }
  })

const samples = []
for (const frac of [0.1, 0.3, 0.5, 0.7, 0.9]) {
  await page.evaluate((y) => window.scrollTo(0, y), Math.round(geom.secTop + geom.secH * frac))
  await page.waitForTimeout(500)
  samples.push({ frac, ...(await read()) })
}

for (const s of samples) {
  console.log(
    `frac ${s.frac}  y=${s.y}  clipped=[${s.clipped}]  ` +
      s.vis.map((c) => `${c.i}:${c.scale}@${c.top}`).join(' '),
  )
}

if (OUT) {
  await page.evaluate((y) => window.scrollTo(0, y), Math.round(geom.secTop + geom.secH * 0.62))
  await page.waitForTimeout(700)
  await page.screenshot({ path: OUT })
}
await browser.close()
