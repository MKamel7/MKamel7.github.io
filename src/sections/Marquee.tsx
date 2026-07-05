import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { MediaSlot } from '../components/MediaSlot'
import { projects } from '../data/projects'
import { useLang } from '../i18n'
import { content } from '../content'

const row1 = [...projects.slice(0, 4), ...projects.slice(0, 4), ...projects.slice(0, 4)]
const row2 = [...projects.slice(4), ...projects.slice(4), ...projects.slice(4)]

export function Marquee() {
  const { lang } = useLang()
  const t = content[lang]
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
          {row1.map((project, i) => (
            <div
              key={`${project.id}-${i}`}
              className="h-[200px] w-[320px] shrink-0 overflow-hidden rounded-[20px] border border-line md:h-[240px] md:w-[400px]"
            >
              <MediaSlot
                media={project.media}
                poster={project.poster}
                title={project.title}
                label={t.projects.demoSoon}
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          className="flex w-max gap-3"
          style={shouldReduceMotion ? undefined : { x: row2X, willChange: 'transform' }}
        >
          {row2.map((project, i) => (
            <div
              key={`${project.id}-${i}`}
              className="h-[200px] w-[320px] shrink-0 overflow-hidden rounded-[20px] border border-line md:h-[240px] md:w-[400px]"
            >
              <MediaSlot
                media={project.media}
                poster={project.poster}
                title={project.title}
                label={t.projects.demoSoon}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
