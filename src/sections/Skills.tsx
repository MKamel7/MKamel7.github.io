import { FadeIn } from '../components/motion/FadeIn'
import { useLang } from '../i18n'
import { content } from '../content'

export function Skills() {
  const { lang } = useLang()
  const t = content[lang]

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
              <div className="flex flex-wrap gap-x-7 gap-y-2">
                {group.items.map((item) => (
                  <span key={item} className="text-[15px] text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
