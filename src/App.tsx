import { LanguageProvider, useLang } from './i18n'
import { content } from './content'
import { RoboticsBackground } from './components/RoboticsBackground'
import { Nav } from './sections/Nav'
import { Hero } from './sections/Hero'
import { Marquee } from './sections/Marquee'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Experience } from './sections/Experience'
import { Education } from './sections/Education'
import { Contact } from './sections/Contact'

// First tab stop on the page. Hidden until focused, then it sits above the nav,
// so a keyboard user can skip the hero and the image strip in one keypress.
function SkipLink() {
  const { lang } = useLang()
  return (
    <a
      href="#main"
      className="fixed left-4 top-3 z-50 -translate-y-24 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-transform focus-visible:translate-y-0"
    >
      {content[lang].skipLink}
    </a>
  )
}

function App() {
  return (
    <LanguageProvider>
      <SkipLink />
      <RoboticsBackground />
      <Nav />
      <Hero />
      <Marquee />
      <main id="main" tabIndex={-1} className="outline-none">
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
    </LanguageProvider>
  )
}

export default App
