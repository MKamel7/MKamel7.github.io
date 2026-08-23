import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { FadeIn } from '../components/motion/FadeIn'
import { LangToggle, useLang } from '../i18n'
import { content } from '../content'

export function Nav() {
  const { lang } = useLang()
  const t = content[lang]
  const [open, setOpen] = useState(false)

  const items = [
    { href: '#about', label: t.nav.about },
    { href: '#projects', label: t.nav.projects },
    { href: '#experience', label: t.nav.experience },
    { href: '#education', label: t.nav.education },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <FadeIn
      as="nav"
      y={-12}
      className="fixed top-0 z-40 w-full border-b border-line bg-[color:var(--color-bg)]/95 pt-[env(safe-area-inset-top)] md:bg-[color:var(--color-bg)]/70 md:backdrop-blur-md pl-[max(1.5rem,env(safe-area-inset-left))] pr-[max(1.5rem,env(safe-area-inset-right))] md:pl-[max(2.5rem,env(safe-area-inset-left))] md:pr-[max(2.5rem,env(safe-area-inset-right))]"
    >
      <div className="flex h-16 items-center justify-between">
        <a href="#top" className="text-lg font-black tracking-tight text-ink" aria-label="Mo Kamel, top of page">
          MK
        </a>
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden items-center gap-6 md:flex">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] font-medium text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </div>
          <LangToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="-mr-1 flex h-11 w-11 items-center justify-center text-ink md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 pb-4 pt-1">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-base font-medium text-muted transition-colors hover:bg-surface hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </FadeIn>
  )
}
