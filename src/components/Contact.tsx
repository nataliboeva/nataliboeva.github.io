import { profile } from '../data'
import { GitHubIcon, LinkedInIcon, OrcidIcon } from './icons'
import { Section } from './Section'

const channels = [
  { label: 'LinkedIn', href: profile.links.linkedin, Icon: LinkedInIcon, hint: 'Best way to reach me' },
  { label: 'GitHub', href: profile.links.github, Icon: GitHubIcon, hint: 'Code and projects' },
  { label: 'ORCID', href: profile.links.orcid, Icon: OrcidIcon, hint: 'Academic profile' },
]

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl leading-relaxed text-muted">
        Happy to talk about .NET, React or an interesting engineering problem. Send me a message on LinkedIn.
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-3">
        {channels.map(({ label, href, Icon, hint }) => (
          <li key={label}>
            <a
              href={href}
              className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 transition hover:border-accent"
            >
              <Icon className="size-5 text-accent" />
              <span>
                <span className="block font-medium">{label}</span>
                <span className="block text-xs text-muted">{hint}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
