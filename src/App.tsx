import { LanguageProvider } from './i18n'
import { Nav } from './sections/Nav'
import { Hero } from './sections/Hero'
import { Marquee } from './sections/Marquee'

function App() {
  return (
    <LanguageProvider>
      <Nav />
      <Hero />
      <Marquee />
      <main>
        <section id="about" />
        <section id="projects" />
        <section id="experience" />
        <section id="contact" />
      </main>
    </LanguageProvider>
  )
}

export default App
