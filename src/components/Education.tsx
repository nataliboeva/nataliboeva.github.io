import { BadgeCheck, GraduationCap } from 'lucide-react'
import { certificates, education } from '../data'
import { Section } from './Section'

export function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="grid gap-5 sm:grid-cols-2">
        {education.map((item) => (
          <li key={item.school} className="flex gap-4 rounded-xl border border-border bg-surface p-5">
            <GraduationCap className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
            <div>
              <h3 className="font-semibold">{item.school}</h3>
              <p className="text-sm text-muted">{item.degree}</p>
              <p className="mt-1 font-mono text-xs text-muted">{item.period}</p>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="mt-12 mb-5 text-sm font-semibold uppercase tracking-wider text-muted">
        Certificates · SoftUni
      </h3>
      <ul className="grid gap-x-8 sm:grid-cols-2">
        {certificates.map((cert) => (
          <li key={cert.title} className="border-b border-border">
            <a
              href={cert.url}
              className="group flex items-center justify-between gap-4 py-3 text-sm"
              aria-label={`${cert.title}, issued ${cert.issued}. Verify on softuni.bg`}
            >
              <span className="flex items-center gap-2">
                <BadgeCheck className="size-4 text-accent" aria-hidden="true" />
                <span className="group-hover:text-accent">{cert.title}</span>
              </span>
              <span className="font-mono text-xs text-muted">{cert.issued}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
