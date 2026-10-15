import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'
import { projects } from './data'

describe('App', () => {
  it('renders every main section', () => {
    render(<App />)
    for (const name of ['Where I work', "Things I've built", 'Tools I use', 'Always learning', "Let's talk"]) {
      expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument()
    }
  })

  it('links every project to its GitHub repository', () => {
    render(<App />)
    for (const project of projects) {
      const link = screen.getByRole('link', { name: `Code for ${project.name}` })
      expect(link).toHaveAttribute('href', project.repo)
    }
  })
})
