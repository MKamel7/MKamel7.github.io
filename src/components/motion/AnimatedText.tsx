import { Fragment, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import type { MotionValue } from 'motion/react'

// Words per animated span. 1 is one unit per word and is what this used to do.
// 4 cuts a 95-word paragraph from 95 units to 24 while the sweep still reads as
// continuous, because the groups are narrower than the eye's fixation.
const WORDS_PER_GROUP = 4

interface AnimatedTextProps {
  text: string
  className?: string
}

interface WordProps {
  progress: MotionValue<number>
  range: [number, number]
  children: string
}

function Word({ progress, range, children }: WordProps) {
  const opacity = useTransform(progress, range, [0.15, 1])
  return <motion.span style={{ opacity }}>{children}</motion.span>
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const reduced = useReducedMotion() ?? false
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.55'],
  })

  if (reduced) {
    return <p className={className}>{text}</p>
  }

  // Reveal in small groups rather than one span per word. Each animated unit is
  // a scroll-linked MotionValue that writes a style every frame, so the cost is
  // linear in the number of units and it runs while the marquee above is still
  // on screen: this paragraph's scroll range opens at "start 0.85".
  //
  // At one span per word a 95-word paragraph cost 18 of the 27 dropped frames
  // measured on the hero-to-About scroll at 8x CPU throttle, more than the
  // background canvas and the marquee combined. Grouping is the cheap fix that
  // keeps the effect: the eye reads the sweep, not the individual word steps.
  const groups: string[] = []
  const parts = text.split(' ')
  for (let i = 0; i < parts.length; i += WORDS_PER_GROUP) {
    groups.push(parts.slice(i, i + WORDS_PER_GROUP).join(' '))
  }

  return (
    // Opacity is driven live by scroll position, so words brighten as you scroll
    // through and dim again scrolling back up. Because it is not a one-time
    // animation it can never get stuck; a language change just re-maps the new
    // words to the current scroll position. Plain inline spans with real spaces
    // wrap normally (no white-space:pre), so the paragraph fits the screen.
    <p ref={ref} className={className}>
      {/* Keyed by text: a language change atomically replaces the whole word
          subtree, so stale word spans can never be left behind to overlap. The
          scroll ref stays on the stable <p>, so scroll tracking is unaffected. */}
      <Fragment key={text}>
        {groups.map((g, i) => (
          <Word key={i} progress={scrollYProgress} range={[i / groups.length, (i + 1) / groups.length]}>
            {i < groups.length - 1 ? `${g} ` : g}
          </Word>
        ))}
      </Fragment>
    </p>
  )
}
