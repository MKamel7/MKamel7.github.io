import { LanguageProvider } from './i18n'
import { Nav } from './sections/Nav'
import { Hero } from './sections/Hero'
import { Marquee } from './sections/Marquee'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Experience } from './sections/Experience'
import { Contact } from './sections/Contact'

function App() {
  return (
    <LanguageProvider>
      <Nav />
      <Hero />
      <Marquee />
      <main>
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </LanguageProvider>
  )
}

export default App
