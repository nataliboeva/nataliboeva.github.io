import { ArrowUpRight, Check } from 'lucide-react'
import { projects, type Project } from '../data'
import { GitHubIcon } from './icons'
import { ProjectPreview } from './ProjectPreview'
import { Section, Tag } from './Section'

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3 text-sm font-medium">
      <a
        href={project.repo}
        aria-label={`Code for ${project.name}`}
        className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3.5 py-2 transition hover:border-accent/60"
      >
        <GitHubIcon /> Code
      </a>
      {project.demo && (
        <a
          href={project.demo}
          aria-label={`Live demo of ${project.name}`}
          className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-accent transition hover:bg-accent-soft"
        >
          Live demo
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      )}
    </div>
  )
}

function FeaturedProject({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <article className="reveal group grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <div
        className={`aspect-[16/11] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-accent-soft via-surface-2 to-surface ${flip ? 'lg:order-2' : ''}`}
      >
        <ProjectPreview preview={project.preview} />
      </div>
      <div>
        <p className="font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase">{project.tagline}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{project.name}</h3>
        <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
        {project.highlights && (
          <ul className="mt-5 space-y-2 text-sm">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-2.5">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        )}
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </ul>
        <div className="mt-7">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="reveal group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5">
      <div className="aspect-[16/9] overflow-hidden border-b border-border bg-gradient-to-br from-accent-soft via-surface-2 to-surface">
        <ProjectPreview preview={project.preview} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs tracking-[0.15em] text-accent uppercase">{project.tagline}</p>
        <h3 className="mt-1.5 text-lg font-semibold tracking-tight">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </ul>
        <div className="mt-5">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const earlier = projects.filter((p) => !p.featured)

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      intro="Recent projects that show how I work today, followed by earlier ones from university and SoftUni."
    >
      <div className="space-y-20 sm:space-y-28">
        {featured.map((project, i) => (
          <FeaturedProject key={project.name} project={project} flip={i % 2 === 1} />
        ))}
      </div>

      <h3 className="reveal mt-24 mb-8 text-xl font-semibold tracking-tight">Earlier projects</h3>
      <div className="grid gap-6 sm:grid-cols-2">
        {earlier.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  )
}
