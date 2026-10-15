import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '../data'
import { GitHubIcon } from './icons'
import { Section, Tag } from './Section'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-surface p-6 transition hover:border-accent/60">
      <p className="font-mono text-xs uppercase tracking-wider text-accent">{project.tagline}</p>
      <h3 className="mt-1 text-lg font-semibold">{project.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </ul>
      <div className="mt-5 flex gap-4 text-sm font-medium">
        <a
          href={project.repo}
          aria-label={`Code for ${project.name}`}
          className="inline-flex items-center gap-1.5 hover:text-accent"
        >
          <GitHubIcon /> Code
        </a>
        {project.demo && (
          <a
            href={project.demo}
            aria-label={`Live demo of ${project.name}`}
            className="inline-flex items-center gap-1 hover:text-accent"
          >
            Live demo
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const earlier = projects.filter((p) => !p.featured)

  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-5 md:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      <h3 className="mt-12 mb-5 text-sm font-semibold uppercase tracking-wider text-muted">Earlier projects</h3>
      <div className="grid gap-5 md:grid-cols-3">
        {earlier.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  )
}
