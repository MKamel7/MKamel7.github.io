import { motion, useReducedMotion } from 'motion/react'
import type { ElementType, ReactNode } from 'react'

interface FadeInProps {
  delay?: number
  duration?: number
  x?: number
  y?: number
  as?: ElementType
  className?: string
  children: ReactNode
}

export function FadeIn({
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 24,
  as = 'div',
  className,
  children,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    const Static = as
    return <Static className={className}>{children}</Static>
  }

  const MotionTag = motion.create(as)

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  )
}
