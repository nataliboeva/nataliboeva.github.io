import { coreStack, skills } from '../data'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I use">
      <ul className="reveal grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
        {coreStack.map((tech) => (
          <li
            key={tech.name}
            className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface px-3 py-5 shadow-sm transition hover:border-accent/50"
          >
            <img src={`/icons/${tech.icon}.svg`} alt="" className="size-9" loading="lazy" />
            <span className="text-center text-xs font-medium sm:text-sm">{tech.name}</span>
          </li>
        ))}
      </ul>

      <dl className="reveal mt-10 grid gap-6 sm:grid-cols-3">
        {skills.map(({ group, items }) => (
          <div key={group}>
            <dt className="font-mono text-xs tracking-[0.15em] text-muted uppercase">{group}</dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="rounded-lg border border-border bg-surface px-2.5 py-1 text-sm">
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
