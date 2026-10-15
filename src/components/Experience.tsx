import { experience } from '../data'
import { Section, Tag } from './Section'

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I work">
      <ol className="relative space-y-10 border-l border-border pl-8 sm:pl-10">
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}`} className="reveal relative">
            <span
              className="absolute top-1.5 -left-[37px] grid size-4 place-items-center rounded-full border border-accent/40 bg-bg sm:-left-[45px]"
              aria-hidden="true"
            >
              <span className="size-2 rounded-full bg-accent" />
            </span>

            <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{job.role}</h3>
                  <p className="mt-1 text-muted">
                    {job.companyUrl ? (
                      <a href={job.companyUrl} className="font-medium text-accent hover:underline">
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}{' '}
                    · {job.summary}
                  </p>
                </div>
                <p className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent">{job.period}</p>
              </div>
              <ul className="mt-5 space-y-2.5 text-muted">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                {job.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
