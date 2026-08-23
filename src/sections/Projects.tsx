import { useLayoutEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'
import type { MotionValue } from 'motion/react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { FadeIn } from '../components/motion/FadeIn'
import { MediaSlot } from '../components/MediaSlot'
import { ProjectVideo } from '../components/ProjectVideo'
import { projects } from '../data/projects'
import { useLang } from '../i18n'
import { content } from '../content'
import { displayMetricValue } from '../portfolioContent'
import type { Project } from '../types'
import type { Lang } from '../i18n'

// How many cards deep the receding stack goes. Everything further back rests at
// the same scale and lift as the deepest visible one, so the stack reads the
// same with six projects as with sixteen. Without a cap the recede was measured
// from the LAST card rather than from the active one: at thirteen projects the
// first card sat at 0.52 scale from the moment it appeared, and seven cards were
// crushed into a 60px band with their text, metrics and repo links clipped.
const DEPTH = 4
const SCALE_STEP = 0.03
const LIFT_STEP = 12 // px each receding card rises, so its top edge stays visible
const BASE_TOP = 80 // px the active card sits below the viewport top
const BOTTOM_GAP = 16

// A sticky element taller than the viewport keeps its bottom permanently out of
// reach: it pins at `top` and the overflow can never be scrolled to. On a
// 1280x800 laptop three cards were long enough for that to happen, so their
// tags and repository links were unreachable. Pinning the bottom instead of the
// top for those cards costs the header a few pixels while pinned, which you
// have already read on the way in, and gives back the rest.
function useStickyTop(cardRef: RefObject<HTMLDivElement | null>) {
  const [top, setTop] = useState(BASE_TOP)

  useLayoutEffect(() => {
    const el = cardRef.current
    if (!el) return
    // offsetHeight, not getBoundingClientRect: the card carries a scale
    // transform and we need the layout height, not the painted one.
    const measure = () => setTop(Math.min(BASE_TOP, window.innerHeight - el.offsetHeight - BOTTOM_GAP))
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [cardRef])

  return top
}

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
  const cardRef = useRef<HTMLDivElement>(null)
  const top = useStickyTop(cardRef)
  // Full size for its own segment, then one step back for each card that passes
  // over it, up to DEPTH steps. useTransform clamps at both ends, so a card that
  // has dropped out of the visible stack simply stops receding. recedeEnd is
  // deliberately allowed past 1: for the last cards the range runs off the end
  // of the scroll, which is what holds them at full size. Clamping it to 1 would
  // collapse the final card's range to [1, 1].
  const recedeStart = (index + 1) / count
  const recedeEnd = (index + 1 + DEPTH) / count
  const scale = useTransform(progress, [recedeStart, recedeEnd], [1, 1 - DEPTH * SCALE_STEP])
  const lift = useTransform(progress, [recedeStart, recedeEnd], [0, -DEPTH * LIFT_STEP])

  const cardBody = (
    <div ref={cardRef} className="grid items-start gap-8 rounded-[20px] border border-line bg-surface p-6 md:grid-cols-2 md:p-10">
      <div>
        <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, '0')}</span>
        <h3 className="mt-2 text-3xl font-black leading-none tracking-tight md:text-[2.75rem]">
          {project.title}
        </h3>
        <p className="mt-5 max-w-[60ch] leading-relaxed text-muted">{project.desc[lang]}</p>
        <div className="mt-7 flex flex-wrap gap-x-10 gap-y-4">
          {project.metrics.map((metric) => (
            <div
              key={metric.label[lang]}
              className="rounded-lg border border-line bg-bg/40 px-4 py-3"
            >
              <div className="font-mono text-xl text-accent md:text-2xl">
                {displayMetricValue(metric.value, lang)}
              </div>
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
        {project.media || project.shots?.length ? (
          <ProjectVideo media={project.media} poster={project.poster} title={project.title}
            shots={project.shots} lang={lang} />
        ) : (
          <MediaSlot media={project.media} poster={project.poster} title={project.title} label={demoSoon} />
        )}
      </div>
    </div>
  )

  // One sticky offset for every card. The stagger comes from `lift`, which is
  // capped, rather than from index, which is not: a per-index offset pushed the
  // thirteenth card 264px down the viewport and cut its bottom off.
  return (
    <div className="sticky mb-10 last:mb-0" style={{ top }}>
      {shouldReduceMotion ? cardBody : <motion.div style={{ scale, y: lift }}>{cardBody}</motion.div>}
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
        {/* Rendered only when something is actually in the pipeline. Everything
            shipped, so the heading would otherwise sit above nothing. */}
        {pipeline.length > 0 && (
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
        )}
      </div>
    </section>
  )
}
