import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

export type Lang = 'en' | 'de'

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
}

const LangContext = createContext<LangContextValue | undefined>(undefined)

const STORAGE_KEY = 'lang'

// A stored choice wins; otherwise a German browser gets the German page, since
// most of the people reading this are German recruiters. Storage is wrapped
// because it throws outright when site data is blocked, and a throw here, inside
// a useState initialiser, blanks the whole app.
function readStoredLang(): Lang {
  if (typeof window === 'undefined') return 'en'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'de' || stored === 'en') return stored
  } catch {
    // fall through to the browser language
  }
  return navigator.language?.toLowerCase().startsWith('de') ? 'de' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => readStoredLang())

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // not remembered across visits, which is fine
    }
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
  const options = [
    { value: 'en', label: 'EN', name: 'English' },
    { value: 'de', label: 'DE', name: 'Deutsch' },
  ] as const

  // The visible pill stays small; each button's hit area is the full 44px the
  // nav bar allows, so the toggle is tappable one-handed on a phone.
  return (
    <div role="group" aria-label={lang === 'de' ? 'Sprache' : 'Language'} className="flex items-center">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setLang(option.value)}
          aria-pressed={lang === option.value}
          aria-label={option.name}
          lang={option.value}
          className="group grid h-11 w-10 place-items-center"
        >
          <span
            className={
              lang === option.value
                ? 'rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-bg'
                : 'rounded-full px-2.5 py-1 text-xs font-medium text-muted transition-colors group-hover:text-ink'
            }
          >
            {option.label}
          </span>
        </button>
      ))}
    </div>
  )
}
