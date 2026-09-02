import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
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

// The first hidden role, shown cut off behind a fade when the timeline is
// collapsed. This is the part that actually does the persuading: a list that
// ends cleanly reads as finished, and a list you can see continuing does not.
// It is inert on purpose, hidden from assistive tech and from the tab order,
// because the button underneath is the real control and announces the count.
function PeekEntry({ entry }: { entry: EntryProps['entry'] }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none relative -mt-4 h-[68px] select-none overflow-hidden [mask-image:linear-gradient(to_bottom,black_0%,black_25%,transparent_92%)]"
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-1 opacity-55 md:grid-cols-[170px_1fr]">
        <span className="pt-0.5 font-mono text-xs uppercase tracking-wide text-muted">
          {entry.period}
        </span>
        <div>
          <h3 className="text-lg font-semibold leading-snug text-ink">{entry.title}</h3>
          {entry.org && <p className="mt-0.5 text-sm text-accent-soft">{entry.org}</p>}
          <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-muted">{entry.note}</p>
        </div>
      </div>
    </div>
  )
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

  // Collapsed, the timeline shows the five roles Mo picked out. Those five are
  // already in newest-to-oldest order, so this is a chronological SUBSET rather
  // than a re-ranking: expanding slots the other nine into place between them
  // instead of shuffling anything the reader has already looked at.
  const [expanded, setExpanded] = useState(false)
  const all = t.experience.entries
  const featured = all.filter((entry) => entry.featured)
  const shown = expanded || featured.length === 0 ? all : featured
  const hiddenCount = all.length - featured.length
  const canExpand = hiddenCount > 0 && featured.length > 0

  // The peek has to be the entry that genuinely FOLLOWS the last visible one,
  // not simply the first hidden one in the array. Taking the first hidden entry
  // put "Chef, Dec 2024" directly beneath "Jan 2021 to Mar 2022", which reads as
  // a bug rather than as a continuation.
  const lastFeaturedIndex = all.findLastIndex((entry) => entry.featured)
  const peek = all.slice(lastFeaturedIndex + 1).find((entry) => !entry.featured)

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
        <div ref={railRef} id="experience-timeline" className="relative mt-20 pl-8 md:pl-12">
          {/* The rail carries on above the newest entry and ends in an arrowhead,
              because the top role is still running and a rail that simply stopped
              there would read as "and then nothing". The expander at the other end
              is the same idea pointing backwards: the collapsed list is five roles,
              not the whole record. */}
          <span
            aria-hidden
            className="absolute left-[6px] -top-8 h-8 w-px bg-gradient-to-t from-accent to-transparent"
          />
          <svg
            aria-hidden
            viewBox="0 0 12 9"
            className="absolute -top-[38px] left-[1px] h-[9px] w-3 fill-accent"
          >
            <path d="M6 0 12 9 0 9Z" />
          </svg>
          <span className="sr-only">Timeline continues to the present.</span>
          <span aria-hidden className="absolute left-[6px] top-3 bottom-3 w-px bg-line" />
          <motion.span
            aria-hidden
            className="absolute left-[6px] top-3 bottom-3 w-px origin-top bg-gradient-to-b from-accent to-accent-soft"
            style={reduced ? { scaleY: 1 } : { scaleY: scrollYProgress }}
          />
          {shown.map((entry, i) => (
            <TimelineEntry
              key={`${entry.title}-${entry.org}`}
              entry={entry}
              index={i}
              total={shown.length}
              progress={scrollYProgress}
              reduced={reduced}
            />
          ))}

          {/* Collapsed, the next role is shown cut off behind a fade, so the list
              visibly continues instead of ending tidily. */}
          {canExpand && !expanded && peek && <PeekEntry entry={peek} />}

          {/* The control is the circle PLUS its label, as one target. The circle
              alone had the affordance but no signifier: it sat at the same weight
              as the decorative dots and said nothing about what it would do. The
              label carries the count so the reader knows what is behind it, and
              the whole row is clickable so the target is a comfortable size. */}
          {canExpand && (
            <motion.button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              aria-controls="experience-timeline"
              whileHover={reduced ? undefined : { x: 2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              className="group/exp relative -my-3 flex w-full cursor-pointer items-center py-3 text-left focus-visible:outline-none"
            >
              <span
                aria-hidden
                // Centred on the rail, derived from the dots rather than guessed:
                // a dot is 13px wide at -left-8 (-left-12 at md), so its centre is
                // 6.5px in, and a 26px circle has to start a further 6.5px left.
                className="absolute -left-[39px] flex h-[26px] w-[26px] items-center justify-center rounded-full border border-muted/40 bg-surface text-muted transition-all duration-300 group-hover/exp:border-accent group-hover/exp:text-accent group-hover/exp:shadow-[0_6px_18px_-6px_rgba(244,96,42,0.45)] group-focus-visible/exp:border-accent group-focus-visible/exp:text-accent md:-left-[55px]"
              >
                <motion.span
                  className="flex"
                  animate={{ rotate: expanded ? 180 : 0 }}
                  transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 300, damping: 24 }}
                >
                  <ChevronDown size={15} strokeWidth={2.5} />
                </motion.span>
              </span>
              <span className="font-mono text-xs uppercase tracking-wide text-muted underline decoration-line underline-offset-4 transition-colors duration-300 group-hover/exp:text-accent group-hover/exp:decoration-accent group-focus-visible/exp:text-accent">
                {expanded
                  ? t.experience.showLess
                  : t.experience.showMore.replace('{n}', String(hiddenCount))}
              </span>
            </motion.button>
          )}
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
