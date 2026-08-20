import { chromium } from 'playwright-core'

// Scroll-performance check for the hero-to-About band, with an isolation
// breakdown so you can tell WHICH element is costing frames.
//   node media-src/verify-scroll-perf.mjs        (URL env overrides the target)
// Three things make the number trustworthy, and it is worthless without them:
// the page is warmed by one discarded scroll pass, because a cold pass measures
// first-paint image decode rather than scrolling; the CPU is throttled, because
// a dev machine hides jank a laptop will not; and every condition runs REPS
// times and reports a median of medians, because single passes disagree with
// each other by more than the effects being measured.
const THROTTLE = Number(process.env.THROTTLE || 4)
const REPS = Number(process.env.REPS || 5)
const b = await chromium.launch({ channel: 'chrome' })

const med = (xs) => [...xs].sort((a, c) => a - c)[(xs.length * 0.5) | 0]
const pct = (xs, q) => [...xs].sort((a, c) => a - c)[Math.min(xs.length - 1, (xs.length * q) | 0)]

async function pass(page, to) {
  return page.evaluate(
    (to) =>
      new Promise((res) => {
        const g = []
        let last = performance.now()
        let y = 0
        const step = to / 90
        function f() {
          const n = performance.now()
          g.push(n - last)
          last = n
          y += step
          window.scrollTo(0, y)
          if (y < to) requestAnimationFrame(f)
          else res(g.slice(3))
        }
        window.scrollTo(0, 0)
        requestAnimationFrame(f)
      }),
    to,
  )
}

async function run(label, url, hide) {
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } })
  const cdp = await p.context().newCDPSession(p)
  await p.goto(url, { waitUntil: 'networkidle' })
  await p.addStyleTag({ content: 'html{scroll-behavior:auto !important}' })
  if (hide) await p.addStyleTag({ content: `${hide}{display:none !important}` })
  const to = await p.evaluate(() => document.querySelector('#about').offsetTop)

  await pass(p, to) // warm-up, discarded: decodes every image once
  await p.waitForTimeout(500)
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: THROTTLE })

  const p50s = [], p95s = [], jank = []
  for (let i = 0; i < REPS; i++) {
    await p.evaluate(() => window.scrollTo(0, 0))
    await p.waitForTimeout(350)
    const g = await pass(p, to)
    p50s.push(med(g))
    p95s.push(pct(g, 0.95))
    jank.push(g.filter((x) => x > 32).length)
  }
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 1 })
  await p.close()
  console.log(
    `${label.padEnd(34)} p50=${med(p50s).toFixed(1)}ms  p95=${med(p95s).toFixed(1)}ms  janky=${med(jank)}/87`,
  )
  return med(p50s)
}

const OLD = 'http://127.0.0.1:8081/'
const NEW = 'http://127.0.0.1:8082/'
console.log(`hero-to-about scroll, ${THROTTLE}x CPU throttle, ${REPS} reps, warmed\n`)
const o = await run('OLD marquee', OLD, null)
const n = await run('NEW marquee', NEW, null)
await run('NEW, marquee hidden', NEW, 'div.overflow-hidden.py-10')
await run('NEW, canvas hidden', NEW, 'canvas')
await run('NEW, both hidden', NEW, 'div.overflow-hidden.py-10, canvas')
console.log(`\nmarquee change: ${(((o - n) / o) * 100).toFixed(0)}% faster median frame`)
await b.close()
