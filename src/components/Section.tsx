import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  children: ReactNode
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-16 sm:py-20">
      <h2 id={`${id}-title`} className="mb-8 flex items-center gap-3 text-2xl font-semibold tracking-tight">
        <span className="h-px w-6 bg-accent" aria-hidden="true" />
        {title}
      </h2>
      {children}
    </section>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return <li className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-xs text-accent">{children}</li>
}
