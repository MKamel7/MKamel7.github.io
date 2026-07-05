import { FadeIn } from '../components/motion/FadeIn'
import { useLang } from '../i18n'
import { content } from '../content'

export function Hero() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <header className="relative flex min-h-[100dvh] flex-col justify-end px-6 pb-10 md:px-10 md:pb-14">
      <FadeIn delay={0.1}>
        <span className="inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {t.hero.chip}
        </span>
      </FadeIn>
      <FadeIn delay={0.2}>
        <h1 className="display-gradient mt-4 whitespace-nowrap font-black uppercase leading-[0.9] tracking-[-0.04em] text-[clamp(4rem,15vw,13rem)]">
          {t.hero.headline}
        </h1>
      </FadeIn>
      <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <FadeIn delay={0.35}>
          <p className="max-w-md text-lg leading-snug text-muted md:text-xl">{t.hero.subline}</p>
        </FadeIn>
        <FadeIn delay={0.5}>
          <a
            href="#projects"
            className="rounded-full bg-accent px-7 py-3 text-[15px] font-semibold text-[#0B0C0E] transition hover:bg-accent-soft active:scale-[0.98]"
          >
            {t.hero.cta}
          </a>
        </FadeIn>
      </div>
    </header>
  )
}
