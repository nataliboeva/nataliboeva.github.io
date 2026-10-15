import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-20 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="mx-auto max-w-5xl px-4 sm:px-6">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} Natali Boeva · Built with React, TypeScript and Tailwind CSS ·{' '}
        <a href="https://github.com/nataliboeva/nataliboeva.github.io" className="underline hover:text-accent">
          Source
        </a>
      </footer>
    </>
  )
}
