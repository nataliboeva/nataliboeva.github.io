import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { GitHubIcon, LinkedInIcon } from './components/icons'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { profile } from './data'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-30 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Natali Boeva</p>
          <div className="flex items-center gap-5">
            <a href={profile.links.github} aria-label="GitHub" className="transition hover:text-text">
              <GitHubIcon />
            </a>
            <a href={profile.links.linkedin} aria-label="LinkedIn" className="transition hover:text-text">
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/nataliboeva/nataliboeva.github.io"
              className="font-mono text-xs transition hover:text-text"
            >
              source
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
