import { motion, useReducedMotion } from 'motion/react'
import type { Variants } from 'motion/react'
import { FadeIn } from '../components/motion/FadeIn'
import { useLang } from '../i18n'
import { content } from '../content'

export function Skills() {
  const { lang } = useLang()
  const t = content[lang]
  const reduced = useReducedMotion() ?? false

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.035 } },
  }
  const chip: Variants = reduced
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }

  return (
    <section className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <h2 className="display-gradient font-black uppercase tracking-[-0.03em] leading-[0.95] text-[clamp(2rem,5vw,3.5rem)]">
            {t.skills.heading}
          </h2>
        </FadeIn>
        <div className="mt-12">
          {t.skills.groups.map((group, i) => (
            <FadeIn
              key={group.label}
              delay={i * 0.06}
              className="grid grid-cols-1 gap-4 border-t border-line py-7 md:grid-cols-[240px_1fr]"
            >
              <span className="font-semibold text-ink">{group.label}</span>
              <motion.div
                className="flex flex-wrap gap-2.5"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={chip}
                    whileHover={reduced ? undefined : { y: -3 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                    className="cursor-default rounded-full border border-line bg-surface px-3.5 py-1.5 text-[15px] text-muted transition-colors duration-300 hover:border-accent hover:text-ink hover:shadow-[0_6px_18px_-6px_rgba(244,96,42,0.45)]"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
