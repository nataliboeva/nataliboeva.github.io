import { ArrowUpRight, GraduationCap } from 'lucide-react'
import { certificates, education } from '../data'
import { Section } from './Section'

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Always learning">
      <ul className="grid gap-6 sm:grid-cols-2">
        {education.map((item) => (
          <li key={item.school} className="reveal flex gap-4 rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
              <GraduationCap className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-semibold tracking-tight">{item.school}</h3>
              <p className="mt-0.5 text-muted">{item.degree}</p>
              <p className="mt-2 font-mono text-xs text-muted">{item.period}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="reveal mt-10 rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-semibold tracking-tight">SoftUni certificates</h3>
          <a
            href="https://github.com/nataliboeva/softuni-courses"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
          >
            Course exercises on GitHub
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        </div>
        <ul className="mt-5 grid gap-x-10 sm:grid-cols-2">
          {certificates.map((cert) => (
            <li key={cert.title} className="border-t border-border first:border-t-0 sm:[&:nth-child(2)]:border-t-0">
              <a
                href={cert.url}
                className="group flex items-center justify-between gap-4 py-3 text-sm"
                aria-label={`${cert.title}, issued ${cert.issued}. Verify on softuni.bg`}
              >
                <span className="transition group-hover:text-accent">{cert.title}</span>
                <span className="flex items-center gap-1 font-mono text-xs text-muted">
                  {cert.issued}
                  <ArrowUpRight className="size-3.5 opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
