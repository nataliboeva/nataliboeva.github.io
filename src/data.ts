export const profile = {
  name: 'Natali Boeva',
  role: 'Junior Software Engineer',
  company: 'Infonetica',
  headline: 'Full-stack engineer building with .NET and React.',
  intro:
    'I work across the whole stack, from ASP.NET Core APIs and EF Core data models to typed React frontends. I care about the parts that make software trustworthy: tests, clear domain logic and code the next person can read.',
  location: 'Plovdiv, Bulgaria',
  links: {
    github: 'https://github.com/nataliboeva',
    linkedin: 'https://www.linkedin.com/in/natali-boeva-8b0a762b8/',
    orcid: 'https://orcid.org/0009-0008-3348-1273',
  },
}

export type Experience = {
  role: string
  company: string
  companyUrl?: string
  period: string
  summary: string
  points: string[]
  tags: string[]
}

export const experience: Experience[] = [
  {
    role: 'Junior Software Engineer',
    company: 'Infonetica',
    companyUrl: 'https://www.infonetica.net',
    period: 'Feb 2026 – Present',
    summary: 'SaaS software for research institutions.',
    points: [
      'Build features across a .NET backend and a React + TypeScript frontend.',
      'Work in a team with code review, CI pipelines and automated tests on every change.',
    ],
    tags: ['C#', 'ASP.NET Core', 'React', 'TypeScript', 'TanStack Query', 'Azure'],
  },
]

export type Preview =
  | { type: 'image'; src: string; alt: string }
  | { type: 'illustration'; id: 'splitly' | 'matchday' | 'bg-identifiers' | 'ethicaflow' }

export type Project = {
  name: string
  tagline: string
  description: string
  highlights?: string[]
  tags: string[]
  repo: string
  demo?: string
  featured?: boolean
  preview: Preview
}

export const projects: Project[] = [
  {
    name: 'Splitly',
    tagline: 'Shared expenses, settled fairly',
    description:
      'A full-stack app for splitting group expenses: trips, flat bills, dinners. Every split adds up to the cent, and the app works out the fewest transfers needed to settle everyone up.',
    highlights: [
      'Debt-simplification algorithm, covered by property-based tests',
      'Equal, exact, percentage and share-based splits with deterministic rounding',
      'Typed React client with TanStack Query, one-command Docker setup',
    ],
    tags: ['ASP.NET Core 10', 'EF Core', 'PostgreSQL', 'React 19', 'TypeScript', 'Docker'],
    repo: 'https://github.com/nataliboeva/splitly',
    featured: true,
    preview: { type: 'illustration', id: 'splitly' },
  },
  {
    name: 'MatchDay',
    tagline: 'Cloud-native football ticketing',
    description:
      'A distributed ticketing platform orchestrated with .NET Aspire. Seats are held in Redis, bookings are confirmed idempotently and e-tickets are delivered over RabbitMQ.',
    highlights: [
      'One end-to-end trace across HTTP calls and message queues',
      'Race-free seat holds with expiry, idempotent booking confirmation',
      'Integration tests that start the whole system with Aspire',
    ],
    tags: ['.NET Aspire', 'Redis', 'RabbitMQ', 'PostgreSQL', 'OpenTelemetry'],
    repo: 'https://github.com/nataliboeva/matchday',
    featured: true,
    preview: { type: 'illustration', id: 'matchday' },
  },
  {
    name: 'BgIdentifiers',
    tagline: 'Open-source NuGet package',
    description:
      'A small, fast library that validates and parses Bulgarian identifiers: EGN, LNCh, EIK/BULSTAT, VAT and IBAN numbers, ready for ASP.NET Core validation.',
    highlights: [
      'Allocation-free validation on ReadOnlySpan<char>',
      'FluentValidation rules and DataAnnotations attributes',
      'Property-based tests, benchmarks and automated releases to NuGet',
    ],
    tags: ['.NET 8 / 10', 'NuGet', 'xUnit', 'BenchmarkDotNet', 'GitHub Actions'],
    repo: 'https://github.com/nataliboeva/bg-identifiers',
    featured: true,
    preview: { type: 'illustration', id: 'bg-identifiers' },
  },
  {
    name: 'Travellark',
    tagline: 'Personal travel journal',
    description:
      'Track visited and wishlist destinations on an interactive map, with live search, filtering and a statistics dashboard.',
    tags: ['ASP.NET Core 8 MVC', 'EF Core', 'Leaflet'],
    repo: 'https://github.com/nataliboeva/Travellark',
    preview: { type: 'image', src: '/projects/travellark.webp', alt: 'Travellark world map with visited and wishlist pins' },
  },
  {
    name: 'EthicaFlow',
    tagline: 'Ethics review workflow',
    description:
      'Role-based workflow for research ethics applications: researchers submit, reviewers assess and request revisions, admins assign and oversee.',
    tags: ['ASP.NET Core MVC', 'EF Core', 'Identity'],
    repo: 'https://github.com/nataliboeva/EthicaFlow',
    preview: { type: 'illustration', id: 'ethicaflow' },
  },
  {
    name: 'Fitessa',
    tagline: 'Workout planner',
    description:
      'Browse exercises, build personal workout plans and manage content from an admin area. My SoftUni project defense.',
    tags: ['ASP.NET Core MVC', 'EF Core', 'SQL Server'],
    repo: 'https://github.com/nataliboeva/Fitessa',
    preview: { type: 'image', src: '/projects/fitessa.webp', alt: 'Fitessa landing page' },
  },
  {
    name: 'EduCode',
    tagline: 'Learn-to-code platform',
    description:
      'Beginner courses in HTML, CSS, JavaScript, C++ and C# with video lessons and progress tracking. Defended at university with an A.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    repo: 'https://github.com/nataliboeva/EduCode',
    demo: 'https://educode-bx5z.onrender.com',
    preview: { type: 'image', src: '/projects/educode.webp', alt: 'EduCode home page' },
  },
]

export const coreStack = [
  { name: 'C#', icon: 'csharp' },
  { name: '.NET', icon: 'dotnetcore' },
  { name: 'React', icon: 'react' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'SQL Server', icon: 'microsoftsqlserver' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'Redis', icon: 'redis' },
  { name: 'RabbitMQ', icon: 'rabbitmq' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Azure', icon: 'azure' },
  { name: 'GitHub Actions', icon: 'githubactions' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Backend', items: ['ASP.NET Core', 'Minimal APIs', 'Entity Framework Core', '.NET Aspire', 'REST', 'OpenTelemetry'] },
  { group: 'Frontend', items: ['React', 'TypeScript', 'TanStack Query', 'React Hook Form', 'Zod', 'Vite'] },
  { group: 'Testing & delivery', items: ['xUnit', 'Vitest', 'Testing Library', 'Testcontainers', 'GitHub Actions', 'Git'] },
]

export const education = [
  {
    school: 'University of Plovdiv "Paisii Hilendarski"',
    degree: 'BSc, Software Engineering',
    period: '2025 – 2029',
  },
  {
    school: 'Software University (SoftUni)',
    degree: 'C# Web Developer track',
    period: '2023 – 2026',
  },
]

export const certificates = [
  { title: 'ASP.NET Advanced', issued: 'Aug 2025', url: 'https://softuni.bg/certificates/details/248513/a614d504' },
  { title: 'ASP.NET Fundamentals', issued: 'May 2025', url: 'https://softuni.bg/certificates/details/245725/349cc484' },
  { title: 'Entity Framework Core', issued: 'Mar 2025', url: 'https://softuni.bg/certificates/details/239802/89f82b6f' },
  { title: 'Microsoft SQL Server', issued: 'Feb 2025', url: 'https://softuni.bg/certificates/details/235764/e54f26cb' },
  { title: 'JS Front-End', issued: 'Dec 2024', url: 'https://softuni.bg/certificates/details/232331/65aed1a8' },
  { title: 'HTML & CSS', issued: 'Nov 2024', url: 'https://softuni.bg/certificates/details/228593/c5abbf20' },
  { title: 'C# OOP', issued: 'Jun 2024', url: 'https://softuni.bg/certificates/details/222743/8310d54f' },
  { title: 'C# Advanced', issued: 'May 2024', url: 'https://softuni.bg/certificates/details/217485/4d84a532' },
  { title: 'Programming Fundamentals with C#', issued: 'Apr 2024', url: 'https://softuni.bg/certificates/details/209224/a40606fa' },
  { title: 'Programming Basics with C#', issued: 'Feb 2023', url: 'https://softuni.bg/certificates/details/158359/4051b6c9' },
]
