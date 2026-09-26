import { useLang } from '../i18n'
import { content } from '../content'

// No entrance animation. A recruiter decides in the first seconds, and a hero
// that fades its name in over half a second spends those seconds on an empty
// canvas. The background carries the motion; the words are simply there.
export function Hero() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <header id="top" className="relative flex min-h-screen flex-col justify-end px-6 pb-[calc(2.5rem+env(safe-area-inset-bottom))] [min-height:100svh] md:px-10 md:pb-[calc(3.5rem+env(safe-area-inset-bottom))]">
      <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-line bg-surface/60 px-5 py-2.5 text-[15px] font-medium text-ink md:text-base">
        <span aria-hidden className="h-2 w-2 rounded-full bg-signal" />
        {t.hero.chip}
      </span>
      <h1 className="display-gradient mt-4 whitespace-nowrap font-black uppercase leading-[0.9] tracking-[-0.04em] text-[clamp(2.5rem,14vw,13rem)]">
        {t.hero.headline}
      </h1>
      <div className="mt-6 flex flex-col gap-7 md:flex-row md:items-end md:justify-between md:gap-10">
        <p className="max-w-[34ch] text-balance text-[clamp(1.35rem,2.4vw,2.1rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-ink">
          {t.hero.subline}
        </p>
        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-accent px-7 py-3 text-[15px] font-semibold text-[#0B0C0E] transition hover:bg-accent-soft active:scale-[0.98]"
          >
            {t.hero.cta}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-ink/25 px-7 py-3 text-[15px] font-semibold text-ink transition hover:border-accent hover:text-accent active:scale-[0.98]"
          >
            {t.hero.contactCta}
          </a>
        </div>
      </div>
    </header>
  )
}
