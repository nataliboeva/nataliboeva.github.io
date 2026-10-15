import { ThemeToggle } from './ThemeToggle'

const nav = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border/70 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="font-semibold tracking-tight">
          Natali Boeva
        </a>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-6 text-sm text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition hover:text-text">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
