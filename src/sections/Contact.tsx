import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { FadeIn } from '../components/motion/FadeIn'
import { useLang } from '../i18n'
import { content, links } from '../content'

export function Contact() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <section id="contact" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <h2 className="display-gradient font-black uppercase tracking-[-0.03em] leading-[0.95] text-[clamp(2.75rem,8vw,7rem)]">
            {t.contact.heading}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-6 max-w-md leading-relaxed text-muted">{t.contact.body}</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <a
            href={`mailto:${links.email}`}
            className="mt-10 block break-all text-[clamp(1.5rem,4.5vw,3rem)] font-black tracking-tight text-ink transition-colors hover:text-accent"
          >
            {links.email}
          </a>
        </FadeIn>
        <FadeIn delay={0.3} className="mt-10 flex gap-6">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            GitHub
            <ArrowUpRight size={14} />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            LinkedIn
            <ArrowUpRight size={14} />
          </a>
        </FadeIn>
        <div className="mt-24 flex items-center justify-between border-t border-line py-8 text-xs text-muted">
          <span>{t.footer}</span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 hover:text-ink"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </section>
  )
}
