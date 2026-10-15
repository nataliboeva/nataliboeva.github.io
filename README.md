# nataliboeva.github.io

[![Build and deploy](https://github.com/nataliboeva/nataliboeva.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/nataliboeva/nataliboeva.github.io/actions/workflows/deploy.yml)

My personal portfolio: **[nataliboeva.github.io](https://nataliboeva.github.io)**

A single-page site with my experience, projects, skills and education. It's intentionally small: no UI kit, a single data file, and a light/dark theme that follows the system setting.

## Tech

- React 19 + TypeScript, built with Vite
- Tailwind CSS v4 with theme tokens as CSS variables
- Vitest + Testing Library
- GitHub Actions: lint, test and build on every push, deploy to GitHub Pages from `main`

## Run locally

```bash
pnpm install
pnpm dev
```

Other scripts: `pnpm lint`, `pnpm test`, `pnpm build`, `pnpm preview`.

## Updating content

All content lives in [`src/data.ts`](src/data.ts). Adding a project or a certificate means adding an object there; the components only handle layout.
