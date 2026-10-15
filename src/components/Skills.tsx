import { skills } from '../data'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="grid gap-5 sm:grid-cols-2">
        {skills.map(({ group, items }) => (
          <div key={group} className="rounded-xl border border-border bg-surface p-5">
            <dt className="text-sm font-semibold">{group}</dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="rounded-md border border-border px-2.5 py-1 text-sm text-muted">
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
