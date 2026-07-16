import { useRef } from 'react'
import type { MotionValue } from 'motion/react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { FadeIn } from '../components/motion/FadeIn'
import { MediaSlot } from '../components/MediaSlot'
import { projects } from '../data/projects'
import { useLang } from '../i18n'
import { content } from '../content'
import type { Project } from '../types'
import type { Lang } from '../i18n'

interface StackedCardProps {
  project: Project
  index: number
  count: number
  progress: MotionValue<number>
  lang: Lang
  repoLabel: string
  demoSoon: string
}

function StackedCard({ project, index, count, progress, lang, repoLabel, demoSoon }: StackedCardProps) {
  const shouldReduceMotion = useReducedMotion()
  const segmentStart = index / count
  const segmentEnd = (index + 1) / count
  const targetScale = 1 - (count - 1 - index) * 0.04
  const scale = useTransform(progress, [segmentStart, segmentEnd], [1, targetScale])

  const cardBody = (
    <div className="grid items-start gap-8 rounded-[20px] border border-line bg-surface p-6 md:grid-cols-2 md:p-10">
      <div>
        <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, '0')}</span>
        <h3 className="mt-2 text-3xl font-black leading-none tracking-tight md:text-[2.75rem]">
          {project.title}
        </h3>
        <p className="mt-5 max-w-[60ch] leading-relaxed text-muted">{project.desc[lang]}</p>
        <div className="mt-7 flex flex-wrap gap-x-10 gap-y-4">
          {project.metrics.map((metric) => (
            <div key={metric.label[lang]} className="border-l-2 border-accent pl-3">
              <div className="font-mono text-xl text-ink md:text-2xl">{metric.value}</div>
              <div className="mt-1 text-xs text-muted">{metric.label[lang]}</div>
            </div>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-soft"
          >
            {repoLabel}
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>
      <div className="aspect-[4/3] overflow-hidden rounded-[20px] border border-line">
        <MediaSlot media={project.media} poster={project.poster} title={project.title} label={demoSoon} />
      </div>
    </div>
  )

  return (
    <div className="sticky mb-10 last:mb-0" style={{ top: `calc(5rem + ${index * 22}px)` }}>
      {shouldReduceMotion ? cardBody : <motion.div style={{ scale }}>{cardBody}</motion.div>}
    </div>
  )
}

export function Projects() {
  const { lang } = useLang()
  const t = content[lang]
  const containerRef = useRef<HTMLDivElement>(null)

  const featured = projects.filter((p) => p.category === 'featured')
  const pipeline = projects.filter((p) => p.category === 'pipeline')

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section id="projects" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <h2 className="display-gradient font-black uppercase tracking-[-0.03em] leading-[0.95] text-[clamp(2.75rem,8vw,7rem)]">
            {t.projects.heading}
          </h2>
        </FadeIn>
        <div ref={containerRef} className="mt-14">
          {featured.map((project, i) => (
            <StackedCard
              key={project.id}
              project={project}
              index={i}
              count={featured.length}
              progress={scrollYProgress}
              lang={lang}
              repoLabel={t.projects.repoLabel}
              demoSoon={t.projects.demoSoon}
            />
          ))}
        </div>
        <div className="mt-24">
          <h3 className="text-xl font-bold tracking-tight">{t.projects.pipelineHeading}</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {pipeline.map((project, i) => (
              <FadeIn key={project.id} delay={i * 0.08} className="rounded-[20px] border border-line p-6">
                {project.status && (
                  <span className="font-mono text-xs text-accent">{project.status[lang]}</span>
                )}
                <p className="mt-3 text-lg font-bold leading-snug">{project.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{project.desc[lang]}</p>
                <p className="mt-4 text-xs text-muted">{project.tags.join(' / ')}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
