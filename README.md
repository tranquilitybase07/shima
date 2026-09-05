# Arushi Portfolio

A neo-brutalist / playful designer portfolio, rebuilt as an
[Astro](https://astro.build) site from a single Design-Canvas (`.dc.html`)
landing page. Styling uses **Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:4327
```

```bash
npm run build    # static output in ./dist
npm run preview  # preview the production build
```

## Deployment

The site is a fully static Astro build and is ready for Vercel's Astro preset.
Set `SITE_URL` to the production origin before building; it controls canonical
URLs, sitemap entries, social metadata, and `robots.txt`.

```bash
SITE_URL=https://arushima.vercel.app npm run build
```

Vercel should use Node.js 22.12 or newer, run `npm run build`, and publish
`dist/`. No server adapter is required.

## Project structure

```
src/
├── data/
│   └── portfolio.ts        # Single source of truth (name, skills, projects…)
│                           # ported from the original DC component's renderVals()
├── components/
│   ├── Nav.astro           # Sticky top navigation
│   ├── Hero.astro          # Name, tagline + floating sticker badges
│   ├── About.astro         # Intro, polaroids, skill chips
│   ├── FeaturedIntro.astro # "Featured Works" heading
│   ├── Projects.astro      # Sticky-stacked project cards
│   ├── LetsTalk.astro      # Mascot + blurb
│   ├── Contact.astro       # Comment card + CTA panel
│   └── ImageSlot.astro     # Static stand-in for the DC <image-slot> element
├── layouts/
│   └── Layout.astro        # SEO metadata, structured data, and Google Fonts
├── scripts/
│   └── floaters.ts         # Cursor-repel drift animation for the badges
├── styles/
│   └── global.css          # Tailwind brand tokens & helpers
└── pages/
    └── index.astro         # Composes the page
```

## Conversion notes

The source was a Claude Design "Design Canvas" file built on a small React
runtime (`support.js`) with custom elements (`<x-dc>`, `<sc-for>`,
`<image-slot>`) and `{{ }}` interpolation. That runtime was **not** carried
over. Instead:

- **Data & logic** (`renderVals()`, the skill palette, the project list) →
  `src/data/portfolio.ts`.
- **`<sc-for>` loops** → Astro `.map()` in the components.
- **The pointer-repel float animation** → `src/scripts/floaters.ts`
  (respects `prefers-reduced-motion`).
- **`<image-slot>`** → `ImageSlot.astro`, which shows a styled placeholder and
  accepts an optional `src`. Drop real images in and pass `src` to fill them.
- **Brand colors & fonts** are Tailwind theme tokens in `global.css`
  (`bg-blue`, `bg-pink`, `font-pixel`, `font-display`, …).
