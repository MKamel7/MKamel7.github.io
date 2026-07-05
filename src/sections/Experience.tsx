import { FadeIn } from '../components/motion/FadeIn'
import { useLang } from '../i18n'
import { content } from '../content'

export function Experience() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <section id="experience" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <h2 className="display-gradient font-black uppercase tracking-[-0.03em] leading-[0.95] text-[clamp(2.75rem,8vw,7rem)]">
            {t.experience.heading}
          </h2>
        </FadeIn>
        <div className="mt-12">
          {t.experience.entries.map((entry, i) => (
            <FadeIn
              key={`${entry.title}-${entry.org}`}
              delay={i * 0.06}
              className="grid grid-cols-1 gap-x-8 gap-y-1 border-t border-line py-7 md:grid-cols-[160px_1fr]"
            >
              <span className="font-mono text-xs text-muted pt-1">{entry.period}</span>
              <div>
                <h3 className="text-lg font-semibold leading-snug">{entry.title}</h3>
                <p className="mt-0.5 text-sm text-muted">{entry.org}</p>
                <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-muted">{entry.note}</p>
              </div>
            </FadeIn>
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
