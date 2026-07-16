import { Fragment, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import type { MotionValue } from 'motion/react'

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

  const words = text.split(' ')

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
        {words.map((w, i) => (
          <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
            {i < words.length - 1 ? `${w} ` : w}
          </Word>
        ))}
      </Fragment>
    </p>
  )
}
