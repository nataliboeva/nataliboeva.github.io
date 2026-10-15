import { profile } from '../data'
import { GitHubIcon, LinkedInIcon, OrcidIcon } from './icons'

const channels = [
  { label: 'LinkedIn', href: profile.links.linkedin, Icon: LinkedInIcon },
  { label: 'GitHub', href: profile.links.github, Icon: GitHubIcon },
  { label: 'ORCID', href: profile.links.orcid, Icon: OrcidIcon },
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <div className="reveal relative isolate overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 text-center shadow-sm sm:px-12 sm:py-20">
        <div className="hero-glow absolute -top-48 left-1/2 -z-10 size-[560px] -translate-x-1/2" aria-hidden="true" />
        <p className="font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase">Contact</p>
        <h2 id="contact-title" className="mx-auto mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s talk
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-muted">
          I&apos;m always happy to talk about .NET, React or an interesting engineering problem. LinkedIn is the
          quickest way to reach me.
        </p>
        <ul className="mt-9 flex flex-wrap justify-center gap-3">
          {channels.map(({ label, href, Icon }, i) => (
            <li key={label}>
              <a
                href={href}
                className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium shadow-sm transition ${
                  i === 0
                    ? 'bg-text text-bg hover:opacity-90'
                    : 'border border-border bg-surface hover:border-accent/60'
                }`}
              >
                <Icon className="size-4" /> {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
