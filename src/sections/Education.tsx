import { FadeIn } from '../components/motion/FadeIn'
import { useLang } from '../i18n'
import { content } from '../content'

export function Education() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <section id="education" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <h2 className="display-gradient font-black uppercase tracking-[-0.03em] leading-[0.95] text-[clamp(2rem,5vw,3.5rem)]">
            {t.education.heading}
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.education.entries.map((entry, i) => (
            <FadeIn
              key={entry.institution}
              delay={i * 0.08}
              className="flex flex-col rounded-xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent/40"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs uppercase tracking-wide text-muted">{entry.period}</span>
                {entry.status && (
                  <span className="rounded-full border border-accent/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent-soft">
                    {entry.status}
                  </span>
                )}
              </div>
              <h3 className="mt-5 text-lg font-semibold leading-snug text-ink">{entry.degree}</h3>
              <p className="mt-1 text-sm text-accent-soft">{entry.institution}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{entry.focus}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
