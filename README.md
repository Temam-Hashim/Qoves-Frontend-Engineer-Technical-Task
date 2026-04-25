## Qoves landing page (Frontend technical task)

Modern Next.js landing page built as a Frontend Engineer technical task.

## Tech stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **UI**: React
- **Styling**: Sass (`.module.scss`)
- **Animation**: GSAP
- **Linting**: ESLint (Next.js config)

## Getting started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
# production build
npm run build

# run production build locally
npm run start

# lint
npm run lint
```

## Project structure

- **App entry**: `src/app/layout.tsx`, `src/app/page.tsx`
- **Global styles / fonts**: `src/app/globals.scss`
- **Sections**: `src/components/*`
- **Static assets**: `public/images/*`, `public/fonts/*`

## Deployment

- **Vercel**: import the repo and deploy the `web/` project.
- **Self-host**:

```bash
npm run build
npm run start
```

## Notes

- No environment variables are required for local development.
