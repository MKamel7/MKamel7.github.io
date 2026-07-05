import { FadeIn } from '../components/motion/FadeIn'
import { LangToggle, useLang } from '../i18n'
import { content } from '../content'

export function Nav() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <FadeIn as="nav" y={-12} className="fixed top-0 z-40 flex h-16 w-full items-center justify-between border-b border-line bg-[color:var(--color-bg)]/70 px-6 backdrop-blur-md md:px-10">
      <span className="text-lg font-black tracking-tight text-ink">MK</span>
      <div className="flex items-center gap-6">
        <div className="hidden items-center gap-6 md:flex">
          <a href="#about" className="text-[13px] font-medium text-muted transition-colors hover:text-ink">
            {t.nav.about}
          </a>
          <a href="#projects" className="text-[13px] font-medium text-muted transition-colors hover:text-ink">
            {t.nav.projects}
          </a>
          <a href="#experience" className="text-[13px] font-medium text-muted transition-colors hover:text-ink">
            {t.nav.experience}
          </a>
          <a href="#contact" className="text-[13px] font-medium text-muted transition-colors hover:text-ink">
            {t.nav.contact}
          </a>
        </div>
        <LangToggle />
      </div>
    </FadeIn>
  )
}
