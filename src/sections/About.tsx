import { FadeIn } from '../components/motion/FadeIn'
import { AnimatedText } from '../components/motion/AnimatedText'
import { useLang } from '../i18n'
import { content } from '../content'

export function About() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <section id="about" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <h2 className="display-gradient font-black uppercase tracking-[-0.03em] leading-[0.95] text-[clamp(2rem,5vw,3.5rem)]">
            {t.about.heading}
          </h2>
        </FadeIn>
        <AnimatedText
          text={t.about.paragraph}
          className="mt-10 max-w-3xl text-[clamp(1.25rem,2.4vw,1.9rem)] font-medium leading-relaxed text-ink"
        />
        <FadeIn className="mt-10">
          <span className="font-mono text-xs uppercase tracking-wider text-accent">
            {t.about.languagesLabel}
          </span>
          <p className="mt-2 text-sm text-muted">{t.about.languages}</p>
        </FadeIn>
      </div>
    </section>
  )
}
