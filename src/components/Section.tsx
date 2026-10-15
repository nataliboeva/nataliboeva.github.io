import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  intro?: string
  children: ReactNode
}

export function Section({ id, eyebrow, title, intro, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <div className="reveal mb-12 max-w-2xl">
        <p className="font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase">{eyebrow}</p>
        <h2 id={`${id}-title`} className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
      </div>
      {children}
    </section>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-border bg-surface-2 px-2.5 py-0.5 font-mono text-xs text-muted">
      {children}
    </li>
  )
}
