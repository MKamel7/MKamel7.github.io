import { motion, useReducedMotion } from 'motion/react'
import type { Variants } from 'motion/react'
import { FadeIn } from '../components/motion/FadeIn'
import { useLang } from '../i18n'
import { content } from '../content'
import { partitionSkillGroups } from '../portfolioContent'

export function Skills() {
  const { lang } = useLang()
  const t = content[lang]
  const reduced = useReducedMotion() ?? false
  const skillSections = partitionSkillGroups(t.skills.groups)

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.035 } },
  }
  const chip: Variants = reduced
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }

  return (
    <section className="px-6 py-28 md:px-10 md:py-40" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <h2 id="skills-heading" className="display-gradient font-black uppercase tracking-[-0.03em] leading-[0.95] text-[clamp(2rem,5vw,3.5rem)]">
            {t.skills.heading}
          </h2>
        </FadeIn>
        <div className="mt-12 space-y-16 md:space-y-20">
          {([
            { heading: t.skills.coreHeading, groups: skillSections.core },
            { heading: t.skills.additionalHeading, groups: skillSections.additional },
          ] as const).map((section, sectionIndex) => (
            <div key={section.heading}>
              <FadeIn>
                <h3 className="mb-3 text-xl font-bold tracking-[-0.02em] text-ink md:text-2xl">
                  {section.heading}
                </h3>
              </FadeIn>
              <div>
                {section.groups.map((group, groupIndex) => (
                  <FadeIn
                    key={group.label}
                    delay={(sectionIndex * section.groups.length + groupIndex) * 0.04}
                    className="grid grid-cols-1 gap-4 border-t border-line py-7 md:grid-cols-[minmax(220px,280px)_1fr] md:gap-8"
                  >
                    <h4 className="font-semibold text-ink">{group.label}</h4>
                    <motion.ul
                      className="flex list-none flex-wrap gap-2.5 p-0"
                      variants={container}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      aria-label={group.label}
                    >
                      {group.items.map((item) => (
                        <motion.li
                          key={item}
                          variants={chip}
                          whileHover={reduced ? undefined : { y: -3 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                          className="cursor-default rounded-full border border-line bg-surface px-3.5 py-1.5 text-[15px] text-muted transition-colors duration-300 hover:border-accent hover:text-ink hover:shadow-[0_6px_18px_-6px_rgba(244,96,42,0.45)]"
                        >
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
