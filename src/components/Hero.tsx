import { ArrowDown, MapPin } from 'lucide-react'
import { profile } from '../data'
import { CodeWindow, Cm, Kw, Str, Ty } from './CodeWindow'
import { GitHubIcon, LinkedInIcon } from './icons'

export function Hero() {
  return (
    <section id="top" className="relative isolate">
      <div className="hero-grid absolute inset-x-0 top-0 -z-10 h-[640px]" aria-hidden="true" />
      <div className="hero-glow absolute top-[-180px] left-1/2 -z-10 size-[720px] -translate-x-1/2" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pt-20 pb-24 sm:px-6 sm:pt-28 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-sm text-muted shadow-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-positive opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-positive" />
            </span>
            {profile.role} at {profile.company}
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">{profile.name}</h1>
          <p className="text-gradient mt-3 text-2xl font-medium tracking-tight sm:text-3xl">{profile.headline}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.intro}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-text px-5 py-2.5 text-sm font-medium text-bg shadow-sm transition hover:opacity-90"
            >
              View my work
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href={profile.links.github}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium shadow-sm transition hover:border-accent/60"
            >
              <GitHubIcon /> GitHub
            </a>
            <a
              href={profile.links.linkedin}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium shadow-sm transition hover:border-accent/60"
            >
              <LinkedInIcon /> LinkedIn
            </a>
          </div>

          <p className="mt-8 flex items-center gap-1.5 text-sm text-muted">
            <MapPin className="size-4" aria-hidden="true" />
            {profile.location}
          </p>
        </div>

        <CodeWindow title="Program.cs" label="Profile summary written as C# code" className="reveal">
          <Kw>var</Kw> natali = <Kw>new</Kw> <Ty>Engineer</Ty>({'\n'}
          {'    '}Name: <Str>"Natali Boeva"</Str>,{'\n'}
          {'    '}Role: <Str>"Junior Software Engineer"</Str>,{'\n'}
          {'    '}Company: <Str>"Infonetica"</Str>,{'\n'}
          {'    '}Stack: [<Str>".NET"</Str>, <Str>"React"</Str>, <Str>"TypeScript"</Str>],{'\n'}
          {'    '}Studying: <Str>"Software Engineering"</Str>,{'\n'}
          {'    '}BasedIn: <Str>"Plovdiv, BG"</Str>);{'\n\n'}
          <Kw>await</Kw> natali.<Ty>BuildAsync</Ty>(<Str>"something useful"</Str>);{'\n'}
          <Cm>// Tests: passed ✓</Cm>
        </CodeWindow>
      </div>
    </section>
  )
}
