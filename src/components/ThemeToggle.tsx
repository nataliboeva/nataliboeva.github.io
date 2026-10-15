import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  function toggle() {
    const next = !dark
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
    setDark(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="grid size-9 place-items-center rounded-lg border border-border text-muted transition hover:text-text"
    >
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  )
}
