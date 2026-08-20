import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { FadeIn } from '../components/motion/FadeIn'
import { useLang } from '../i18n'
import { content } from '../content'
import type { MotionValue } from 'motion/react'

interface EntryProps {
  entry: { title: string; org: string; period: string; note: string }
  index: number
  total: number
  progress: MotionValue<number>
  reduced: boolean
}

function TimelineEntry({ entry, index, total, progress, reduced }: EntryProps) {
  // Each dot lights up as the scroll-driven fill line reaches its position on the rail.
  const at = total > 1 ? index / (total - 1) : 0
  const bg = useTransform(progress, [at - 0.06, at], ['rgba(11,12,14,1)', 'rgba(244,96,42,1)'])
  const glow = useTransform(
    progress,
    [at - 0.06, at],
    ['0 0 0 0 rgba(244,96,42,0)', '0 0 0 4px rgba(244,96,42,0.18)'],
  )

  return (
    <FadeIn delay={index * 0.05} className="group relative pb-12 last:pb-0">
      <span
        aria-hidden
        className="absolute -left-8 top-[6px] flex h-[13px] w-[13px] items-center justify-center md:-left-12"
      >
        <motion.span
          className="h-[13px] w-[13px] rounded-full border-2 border-accent transition-transform duration-300 group-hover:scale-125"
          style={reduced ? { backgroundColor: 'var(--color-accent)' } : { backgroundColor: bg, boxShadow: glow }}
        />
      </span>
      <div className="grid grid-cols-1 gap-x-8 gap-y-1 transition-transform duration-300 group-hover:translate-x-1 md:grid-cols-[170px_1fr]">
        <span className="pt-0.5 font-mono text-xs uppercase tracking-wide text-muted transition-colors duration-300 group-hover:text-accent-soft">
          {entry.period}
        </span>
        <div>
          <h3 className="text-lg font-semibold leading-snug text-ink">{entry.title}</h3>
          {entry.org && <p className="mt-0.5 text-sm text-accent-soft">{entry.org}</p>}
          <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-muted">{entry.note}</p>
        </div>
      </div>
    </FadeIn>
  )
}

export function Experience() {
  const { lang } = useLang()
  const t = content[lang]
  const reduced = useReducedMotion() ?? false
  const railRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 0.8', 'end 0.55'],
  })

  return (
    <section id="experience" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <h2 className="display-gradient font-black uppercase tracking-[-0.03em] leading-[0.95] text-[clamp(2.75rem,8vw,7rem)]">
            {t.experience.heading}
          </h2>
        </FadeIn>

        {/* Timeline: most recent at the top. The accent line fills as the section scrolls past,
            and each milestone dot ignites in turn. */}
        <div ref={railRef} className="relative mt-14 pl-8 md:pl-12">
          <span aria-hidden className="absolute left-[6px] top-3 bottom-3 w-px bg-line" />
          <motion.span
            aria-hidden
            className="absolute left-[6px] top-3 bottom-3 w-px origin-top bg-gradient-to-b from-accent to-accent-soft"
            style={reduced ? { scaleY: 1 } : { scaleY: scrollYProgress }}
          />
          {t.experience.entries.map((entry, i) => (
            <TimelineEntry
              key={`${entry.title}-${entry.org}`}
              entry={entry}
              index={i}
              total={t.experience.entries.length}
              progress={scrollYProgress}
              reduced={reduced}
            />
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-xl font-bold tracking-tight">{t.experience.awardsHeading}</h3>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {t.experience.awards.map((award, i) => (
              <FadeIn key={award.title} delay={i * 0.08} className="border-t-2 border-accent pt-4">
                <p className="font-semibold">{award.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{award.detail}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
