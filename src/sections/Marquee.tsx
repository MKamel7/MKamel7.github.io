import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { projects } from '../data/projects'

// Only finished projects (those with a rendered demo) appear in the marquee,
// and as static images, so the top strip stays smooth while the autoplaying
// mp4s live in the Projects section below.
const finished = projects.filter((p) => p.poster)
const half = Math.ceil(finished.length / 2)

// The rows do not loop: they slide by TRAVEL of their own width as you scroll
// past, and stop. So a row only needs to be wide enough that its right edge is
// still off screen at the end of the slide, which is `viewport / (1 - TRAVEL)`.
// Two passes over the set gives about 5800px, covering displays past 5000px
// wide. It used to be three passes, which put 39 images and a 8640px composited
// layer on screen to animate a strip that never moves more than ~1000px.
const COPIES = 2
const repeat = <T,>(xs: T[]) => Array.from({ length: COPIES }, () => xs).flat()
const rowA = repeat(finished.slice(0, half))
const rowB = repeat(finished.slice(half))

// The card is 400x240 at most, so the 1280x960 poster was ten times the pixels
// the browser paints and it had to downscale every one of them on every frame.
// `<name>-thumb.jpg` is the same frame pre-cropped to 800x480, which is the 2x
// retina size of the box. Generated for every poster; the fallback exists so a
// project added without one degrades to a heavy image rather than a broken one.
const thumbOf = (poster: string) => poster.replace(/-poster\.jpg$/, '-thumb.jpg')

function Card({ poster, title }: { poster: string; title: string }) {
  return (
    <div className="h-[200px] w-[320px] shrink-0 overflow-hidden rounded-[20px] border border-line md:h-[240px] md:w-[400px]">
      <img
        src={thumbOf(poster)}
        onError={(e) => {
          if (e.currentTarget.src !== poster) e.currentTarget.src = poster
        }}
        alt={title}
        width={800}
        height={480}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />
    </div>
  )
}

export function Marquee() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const row1X = useTransform(scrollYProgress, [0, 1], ['-2%', '-14%'])
  const row2X = useTransform(scrollYProgress, [0, 1], ['-14%', '-2%'])

  return (
    <div ref={sectionRef} className="overflow-hidden py-10">
      <div className="flex flex-col gap-3">
        {/* No will-change. Motion promotes an element while it animates anyway,
            and declaring it here pinned two multi-megabyte layers for the whole
            page even though the strip is only on screen at the very top. */}
        <motion.div className="flex w-max gap-3" style={shouldReduceMotion ? undefined : { x: row1X }}>
          {rowA.map((project, i) => (
            <Card key={`${project.id}-a-${i}`} poster={project.poster!} title={project.title} />
          ))}
        </motion.div>
        <motion.div className="flex w-max gap-3" style={shouldReduceMotion ? undefined : { x: row2X }}>
          {rowB.map((project, i) => (
            <Card key={`${project.id}-b-${i}`} poster={project.poster!} title={project.title} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
