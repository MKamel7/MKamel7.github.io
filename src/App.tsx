import { LangToggle, LanguageProvider } from './i18n'

function App() {
  return (
    <LanguageProvider>
      <header className="flex items-center justify-end p-6">
        <LangToggle />
      </header>
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
