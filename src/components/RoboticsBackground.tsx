import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'motion/react'

// A robot "perception field": a drifting point cloud joined by proximity links
// (a sensor mesh), swept by a LIDAR scan bar that ignites nodes and links in the
// accent colour as it passes, over a faint blueprint grid. Pure canvas 2D, no deps.

const ACCENT = [244, 96, 42] // --color-accent

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  i: number // scan intensity 0..1
}

export function RoboticsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = useReducedMotion() ?? false

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')!

    const isMobile = window.matchMedia('(max-width: 767px), (pointer: coarse)').matches
    const frameInterval = isMobile ? 1000 / 30 : 0 // throttle to ~30fps on mobile

    let w = 0
    let h = 0
    let dpr = 1
    let nodes: Node[] = []
    const LINK_DIST = isMobile ? 128 : 150
    const BAND = 110 // half-width of the scan influence
    const GRID = 52

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 }

    function seed() {
      const density = isMobile ? 34000 : 20000
      const cap = isMobile ? 30 : 90
      const floor = isMobile ? 16 : 28
      const target = Math.min(cap, Math.max(floor, Math.floor((w * h) / density)))
      nodes = Array.from({ length: target }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 10,
        vy: (Math.random() - 0.5) * 10,
        i: 0,
      }))
    }

    let lastW = -1
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // Only reseed the field when the width actually changes. On mobile the
      // address bar hiding/showing fires resize with a height-only change, and
      // reseeding there would make the whole point cloud jump while scrolling.
      if (nodes.length === 0 || Math.abs(w - lastW) > 1) {
        lastW = w
        seed()
      }
    }

    function grid(ox: number, oy: number) {
      ctx.strokeStyle = 'rgba(255,255,255,0.025)'
      ctx.lineWidth = 1
      ctx.beginPath()
      for (let x = (ox % GRID) - GRID; x < w; x += GRID) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, h)
      }
      for (let y = (oy % GRID) - GRID; y < h; y += GRID) {
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
      }
      ctx.stroke()
    }

    let scanX = 0
    const SCAN_SPEED = 90 // px per second

    function draw(dt: number) {
      // ease cursor for a soft parallax offset
      mouse.x += (mouse.tx - mouse.x) * 0.06
      mouse.y += (mouse.ty - mouse.y) * 0.06
      const ox = (mouse.x - w / 2) * 0.012
      const oy = (mouse.y - h / 2) * 0.012

      ctx.clearRect(0, 0, w, h)
      grid(ox, oy)

      // advance scan
      scanX += SCAN_SPEED * dt
      if (scanX > w + BAND) scanX = -BAND

      // move nodes + compute scan intensity
      for (const n of nodes) {
        n.x += n.vx * dt
        n.y += n.vy * dt
        if (n.x < -20) n.x = w + 20
        if (n.x > w + 20) n.x = -20
        if (n.y < -20) n.y = h + 20
        if (n.y > h + 20) n.y = -20
        const d = Math.abs(n.x - scanX)
        n.i = d < BAND ? Math.pow(1 - d / BAND, 1.5) : 0
      }

      // proximity links
      for (let a = 0; a < nodes.length; a++) {
        const na = nodes[a]
        for (let b = a + 1; b < nodes.length; b++) {
          const nb = nodes[b]
          const dx = na.x - nb.x
          const dy = na.y - nb.y
          const dist = Math.hypot(dx, dy)
          if (dist > LINK_DIST) continue
          const prox = 1 - dist / LINK_DIST
          const hot = Math.max(na.i, nb.i)
          const white = 0.1 * prox
          const alpha = white + hot * 0.5 * prox
          if (hot > 0.02) {
            ctx.strokeStyle = `rgba(${ACCENT[0]},${ACCENT[1]},${ACCENT[2]},${alpha})`
          } else {
            ctx.strokeStyle = `rgba(255,255,255,${white})`
          }
          ctx.lineWidth = 1 + hot * 0.8
          ctx.beginPath()
          ctx.moveTo(na.x + ox, na.y + oy)
          ctx.lineTo(nb.x + ox, nb.y + oy)
          ctx.stroke()
        }
      }

      // nodes (glow drawn as a cheap second circle, not shadowBlur which is
      // very expensive on mobile GPUs)
      for (const n of nodes) {
        const r = 1.4 + n.i * 2.6
        if (n.i > 0.02) {
          ctx.fillStyle = `rgba(${ACCENT[0]},${ACCENT[1]},${ACCENT[2]},${0.14 * n.i})`
          ctx.beginPath()
          ctx.arc(n.x + ox, n.y + oy, r * 3.2, 0, Math.PI * 2)
          ctx.fill()
          ctx.fillStyle = `rgba(${ACCENT[0]},${ACCENT[1]},${ACCENT[2]},${0.5 + n.i * 0.5})`
        } else {
          ctx.fillStyle = `rgba(220,228,238,${0.28 + n.i * 0.1})`
        }
        ctx.beginPath()
        ctx.arc(n.x + ox, n.y + oy, r, 0, Math.PI * 2)
        ctx.fill()
      }

      // scan bar
      const g = ctx.createLinearGradient(scanX - BAND, 0, scanX + BAND, 0)
      g.addColorStop(0, 'rgba(244,96,42,0)')
      g.addColorStop(0.5, 'rgba(244,96,42,0.06)')
      g.addColorStop(1, 'rgba(244,96,42,0)')
      ctx.fillStyle = g
      ctx.fillRect(scanX - BAND, 0, BAND * 2, h)
      ctx.strokeStyle = 'rgba(244,96,42,0.14)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(scanX, 0)
      ctx.lineTo(scanX, h)
      ctx.stroke()
    }

    // static single frame for reduced motion
    function drawStatic() {
      ctx.clearRect(0, 0, w, h)
      grid(0, 0)
      for (let a = 0; a < nodes.length; a++) {
        const na = nodes[a]
        for (let b = a + 1; b < nodes.length; b++) {
          const nb = nodes[b]
          const dist = Math.hypot(na.x - nb.x, na.y - nb.y)
          if (dist > LINK_DIST) continue
          ctx.strokeStyle = `rgba(255,255,255,${0.08 * (1 - dist / LINK_DIST)})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(na.x, na.y)
          ctx.lineTo(nb.x, nb.y)
          ctx.stroke()
        }
      }
      ctx.fillStyle = 'rgba(220,228,238,0.28)'
      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    let raf = 0
    let lastDraw = performance.now()
    let running = true

    function loop(now: number) {
      if (!running) return
      raf = requestAnimationFrame(loop)
      if (now - lastDraw < frameInterval) return
      const dt = Math.min((now - lastDraw) / 1000, 0.05)
      lastDraw = now
      draw(dt)
    }

    function onVisibility() {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(raf)
      } else if (!reduced) {
        running = true
        lastDraw = performance.now()
        raf = requestAnimationFrame(loop)
      }
    }

    function onMove(e: MouseEvent) {
      mouse.tx = e.clientX
      mouse.ty = e.clientY
    }

    resize()
    mouse.x = mouse.tx = w / 2
    mouse.y = mouse.ty = h / 2

    if (reduced) {
      drawStatic()
    } else {
      raf = requestAnimationFrame(loop)
      window.addEventListener('mousemove', onMove)
      document.addEventListener('visibilitychange', onVisibility)
    }
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      running = false
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [reduced])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
    />
  )
}
