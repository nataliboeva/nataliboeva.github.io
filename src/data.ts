export const profile = {
  name: 'Natali Boeva',
  role: 'Junior Software Engineer',
  headline: 'I build full-stack web applications with .NET and React/TypeScript.',
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
  points: string[]
  tags: string[]
}

export const experience: Experience[] = [
  {
    role: 'Junior Software Engineer',
    company: 'Infonetica',
    companyUrl: 'https://www.infonetica.net',
    period: 'Feb 2026 – Present',
    points: [
      'Build features across a .NET backend and a React + TypeScript frontend for a SaaS platform used by research institutions.',
      'Work in a team with code review, CI pipelines and automated tests on every change.',
    ],
    tags: ['C#', 'ASP.NET Core', 'React', 'TypeScript', 'TanStack Query', 'Azure'],
  },
]

export type Project = {
  name: string
  tagline: string
  description: string
  tags: string[]
  repo: string
  demo?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'Splitly',
    tagline: 'Shared expenses, settled fairly',
    description:
      'Full-stack app for splitting group expenses. Splits always add up to the cent, and a debt-simplification algorithm reduces "who owes whom" to the fewest possible transfers.',
    tags: ['ASP.NET Core 10', 'EF Core', 'PostgreSQL', 'React 19', 'TypeScript', 'TanStack Query', 'Docker'],
    repo: 'https://github.com/nataliboeva/splitly',
    featured: true,
  },
  {
    name: 'MatchDay',
    tagline: 'Cloud-native football ticketing',
    description:
      'Distributed ticketing system orchestrated with .NET Aspire. Seats are held in Redis, bookings are confirmed idempotently, and e-tickets are delivered over RabbitMQ, all visible as one end-to-end trace.',
    tags: ['.NET Aspire', 'Redis', 'RabbitMQ', 'PostgreSQL', 'OpenTelemetry'],
    repo: 'https://github.com/nataliboeva/matchday',
    featured: true,
  },
  {
    name: 'BgIdentifiers',
    tagline: 'Open-source NuGet package',
    description:
      'Fast, allocation-free validation and parsing of EGN, LNCh, EIK/BULSTAT, VAT and IBAN numbers, with FluentValidation and DataAnnotations support and property-based tests.',
    tags: ['.NET 8 / 10', 'NuGet', 'xUnit', 'BenchmarkDotNet', 'GitHub Actions'],
    repo: 'https://github.com/nataliboeva/bg-identifiers',
    featured: true,
  },
  {
    name: 'Travellark',
    tagline: 'Personal travel journal',
    description:
      'Track visited and wishlist destinations on an interactive map, with live search, filtering and a statistics dashboard.',
    tags: ['ASP.NET Core 8 MVC', 'EF Core', 'Leaflet', 'Identity'],
    repo: 'https://github.com/nataliboeva/Travellark',
  },
  {
    name: 'EthicaFlow',
    tagline: 'Ethics review workflow',
    description:
      'Role-based workflow for research ethics applications: researchers submit, reviewers assess and request revisions, admins assign and oversee.',
    tags: ['ASP.NET Core MVC', 'EF Core', 'Identity', 'SQL Server'],
    repo: 'https://github.com/nataliboeva/EthicaFlow',
  },
  {
    name: 'EduCode',
    tagline: 'Learn-to-code platform',
    description:
      'Beginner courses in HTML, CSS, JavaScript, C++ and C# with video lessons and progress tracking. Defended at university with an A.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    repo: 'https://github.com/nataliboeva/EduCode',
    demo: 'https://educode-bx5z.onrender.com',
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Backend', items: ['C#', '.NET / ASP.NET Core', 'Entity Framework Core', 'REST APIs', '.NET Aspire'] },
  { group: 'Frontend', items: ['React', 'TypeScript', 'TanStack Query', 'React Hook Form + Zod', 'Tailwind CSS', 'Vite'] },
  { group: 'Data', items: ['SQL Server', 'PostgreSQL', 'Redis', 'RabbitMQ'] },
  { group: 'Quality & delivery', items: ['xUnit', 'Vitest', 'Testcontainers', 'Docker', 'GitHub Actions', 'Azure', 'Git'] },
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
