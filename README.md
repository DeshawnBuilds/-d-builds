# D BUILDS

The home of D BUILDS — Building Myself. Building Things. Building My Future.

V1 of the D BUILDS website: a static Next.js (App Router) site with no
environment variables, databases or external services.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npm run lint    # type-check
```

Requires Node.js 20.9+.

## Structure

```
app/                         routes
  page.tsx                   homepage
  myself/  things/  future/  the three builds
  things/awakened-creators/  Awakened Creators portal
  writing/                   archive + writing/[slug] article shells
  about/  follow/
  globals.css                the whole design system (tokens at the top)
components/                  Navigation, MobileMenu, Hero, BuildPillar,
                             LatestBuilds, ACUPortal, Newsletter, Footer, …
data/site.ts                 all content: pillars, latest builds, projects,
                             articles, films, social links
```

## Editing content

Almost everything lives in `data/site.ts`.

- **New essay:** add an entry to `articles`. It gets a page at
  `/writing/<slug>` and shows in the archive with an "in development" note
  until a body is added.
- **Social links:** add `{ label, href }` items to `socialLinks`. They appear
  in the footer and on `/follow`. The list is empty until real URLs exist.
- **Imagery:** the art plates in `components/BuildArt.tsx` and
  `components/PortalVisual.tsx` are abstract CSS stand-ins, to be swapped for
  real, optimized assets.

## Not yet connected

- **Newsletter:** the form is UI only. Submitting shows a local
  "connection coming next" message. Nothing is sent or stored.
- **Placeholders:** sections marked "In development" are honest placeholders,
  not unfinished content passed off as finished.

## Deployment

Deployed on Vercel from `main`. No configuration required.
