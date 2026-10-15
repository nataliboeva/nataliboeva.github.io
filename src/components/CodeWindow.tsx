import type { ReactNode } from 'react'

type CodeWindowProps = {
  title: string
  label?: string
  children: ReactNode
  className?: string
}

export function CodeWindow({ title, label, children, className = '' }: CodeWindowProps) {
  return (
    <figure
      aria-label={label}
      className={`overflow-hidden rounded-2xl border border-border bg-surface shadow-xl shadow-accent/5 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-muted">{title}</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6 text-text">
        <code>{children}</code>
      </pre>
    </figure>
  )
}

export const Kw = ({ children }: { children: ReactNode }) => <span className="text-code-keyword">{children}</span>
export const Ty = ({ children }: { children: ReactNode }) => <span className="text-code-type">{children}</span>
export const Str = ({ children }: { children: ReactNode }) => <span className="text-code-string">{children}</span>
export const Cm = ({ children }: { children: ReactNode }) => <span className="text-code-comment">{children}</span>
