import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const nav = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-border/60 bg-bg/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="grid size-8 place-items-center rounded-lg bg-accent font-mono text-xs font-medium text-white dark:text-bg">
            NB
          </span>
          Natali Boeva
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-1 text-sm text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="rounded-md px-3 py-2 transition hover:bg-surface-2 hover:text-text">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="grid size-9 place-items-center rounded-lg border border-border text-muted md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-border/60 md:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-muted hover:text-text"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
