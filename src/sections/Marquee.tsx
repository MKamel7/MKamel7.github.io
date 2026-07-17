import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { projects } from '../data/projects'

// Only finished projects (those with a rendered demo) appear in the marquee,
// and as lightweight static poster images — the autoplaying mp4s live in the
// Projects section below, so the top strip stays smooth.
const finished = projects.filter((p) => p.poster)
const half = Math.ceil(finished.length / 2)
const rowA = [...finished.slice(0, half), ...finished.slice(0, half), ...finished.slice(0, half)]
const rowB = [...finished.slice(half), ...finished.slice(half), ...finished.slice(half)]

function Card({ src, title }: { src: string; title: string }) {
  return (
    <div className="h-[200px] w-[320px] shrink-0 overflow-hidden rounded-[20px] border border-line md:h-[240px] md:w-[400px]">
      <img src={src} alt={title} loading="lazy" decoding="async" className="h-full w-full object-cover" />
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
        <motion.div
          className="flex w-max gap-3"
          style={shouldReduceMotion ? undefined : { x: row1X, willChange: 'transform' }}
        >
          {rowA.map((project, i) => (
            <Card key={`${project.id}-a-${i}`} src={project.poster!} title={project.title} />
          ))}
        </motion.div>
        <motion.div
          className="flex w-max gap-3"
          style={shouldReduceMotion ? undefined : { x: row2X, willChange: 'transform' }}
        >
          {rowB.map((project, i) => (
            <Card key={`${project.id}-b-${i}`} src={project.poster!} title={project.title} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
