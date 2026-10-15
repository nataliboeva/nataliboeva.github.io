import { experience } from '../data'
import { Section, Tag } from './Section'

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-8">
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}`} className="rounded-xl border border-border bg-surface p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">
                {job.role} ·{' '}
                {job.companyUrl ? (
                  <a href={job.companyUrl} className="text-accent hover:underline">
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
              </h3>
              <p className="font-mono text-sm text-muted">{job.period}</p>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted marker:text-accent">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
              {job.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
