import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

export type Lang = 'en' | 'de'

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
}

const LangContext = createContext<LangContextValue | undefined>(undefined)

const STORAGE_KEY = 'lang'

function readStoredLang(): Lang {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'de' ? 'de' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => readStoredLang())

  useEffect(() => {
    document.documentElement.lang = lang
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const setLang = (l: Lang) => setLangState(l)

  const value = useMemo(() => ({ lang, setLang }), [lang])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}

export function LangToggle() {
  const { lang, setLang } = useLang()

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-line p-1 text-xs font-medium">
      <button
        type="button"
        onClick={() => setLang('en')}
        className={
          lang === 'en'
            ? 'rounded-full bg-accent px-3 py-1 text-bg'
            : 'rounded-full px-3 py-1 text-muted hover:text-ink'
        }
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang('de')}
        className={
          lang === 'de'
            ? 'rounded-full bg-accent px-3 py-1 text-bg'
            : 'rounded-full px-3 py-1 text-muted hover:text-ink'
        }
      >
        DE
      </button>
    </div>
  )
}
