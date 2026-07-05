import { useRef } from 'react'
import type { MotionValue } from 'motion/react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

interface AnimatedTextProps {
  text: string
  className?: string
}

interface CharProps {
  progress: MotionValue<number>
  range: [number, number]
  char: string
}

function Char({ progress, range, char }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1])
  return (
    <motion.span style={{ opacity, whiteSpace: 'pre' }}>{char}</motion.span>
  )
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.35'],
  })

  if (shouldReduceMotion) {
    return <p className={className}>{text}</p>
  }

  const chars = text.split('')

  return (
    <p ref={ref} className={className}>
      {chars.map((char, i) => {
        const start = i / chars.length
        const end = (i + 1) / chars.length
        return (
          <Char key={i} progress={scrollYProgress} range={[start, end]} char={char} />
        )
      })}
    </p>
  )
}
