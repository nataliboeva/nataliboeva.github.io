import { ArrowUpRight, MapPin } from 'lucide-react'
import { profile } from '../data'
import { GitHubIcon, LinkedInIcon } from './icons'

const summary = [
  ['role', `"${profile.role}"`],
  ['company', '"Infonetica"'],
  ['stack', '[".NET", "React", "TypeScript"]'],
  ['studying', '"Software Engineering"'],
  ['basedIn', '"Plovdiv, BG"'],
] as const

export function Hero() {
  return (
    <section id="top" className="grid items-center gap-12 pt-16 pb-12 sm:pt-24 lg:grid-cols-[1.3fr_1fr]">
      <div>
        <p className="mb-4 flex items-center gap-1.5 font-mono text-sm text-muted">
          <MapPin className="size-4" aria-hidden="true" />
          {profile.location}
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{profile.name}</h1>
        <p className="mt-3 text-xl font-medium text-accent sm:text-2xl">{profile.headline}</p>
        <p className="mt-6 max-w-xl leading-relaxed text-muted">{profile.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90 dark:text-bg"
          >
            View projects
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href={profile.links.github}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium transition hover:border-accent"
          >
            <GitHubIcon /> GitHub
          </a>
          <a
            href={profile.links.linkedin}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium transition hover:border-accent"
          >
            <LinkedInIcon /> LinkedIn
          </a>
        </div>
      </div>

      <figure
        aria-label="Profile summary as JSON"
        className="overflow-hidden rounded-xl border border-border bg-surface font-mono text-[13px] shadow-sm"
      >
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="ml-2 text-xs text-muted">natali.json</span>
        </div>
        <pre className="overflow-x-auto p-4 leading-6">
          <code>
            {'{\n'}
            {summary.map(([key, value], i) => (
              <span key={key}>
                {'  '}
                <span className="text-accent">&quot;{key}&quot;</span>: <span className="text-muted">{value}</span>
                {i < summary.length - 1 ? ',' : ''}
                {'\n'}
              </span>
            ))}
            {'}'}
          </code>
        </pre>
      </figure>
    </section>
  )
}
