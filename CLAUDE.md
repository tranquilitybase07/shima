# CLAUDE.md

Guidance for working in this repository.

## What this is

A playful, neo-brutalist **designer portfolio** for "Arushima", built with
**Astro 5** (static output) + **Tailwind CSS v4** + **Preline UI**. It was
recreated from a Claude Design "Design Canvas" (`.dc.html`) file; the original
React runtime was **not** carried over — only its data and behavior were ported.

## Commands

```bash
npm install        # install deps
npm run dev        # dev server → http://localhost:4327
npm run build      # static build → ./dist
npm run preview    # preview the production build
```

There is no test suite and no linter configured. "Verifying" means
`npm run build` passes and the page looks right in the browser.

## Deployment

The repo is linked to **Vercel**. Deploys are automatic on push:

```bash
git add -A && git commit -m "..." && git push
```

Vercel auto-detects Astro (framework preset), runs `astro build`, and serves
`dist/`. **No Vercel adapter is needed** — the site is fully static
(`output: "static"`, the default). Do not add `@astrojs/vercel` unless the site
gains SSR/server routes. There is no `vercel.json`; the preset is enough.

## Architecture

Content is **data-driven**: each page reads plain data modules from `src/data/`
and maps over them in components. To change copy, edit the data — not the markup.

```
src/
├── data/
│   ├── portfolio.ts     # home: name, tagline, skills, featured projects
│   ├── about.ts         # about: bio, story principles, work history
│   └── casestudy.ts     # case study: Wayline meta, sections, stats, more-projects
├── pages/
│   ├── index.astro      # home  (background="grid")
│   ├── about.astro      # /about  (background="ruled")
│   └── case-study.astro # /case-study  (background="ruled")
├── layouts/
│   └── Layout.astro     # <head>, fonts, Preline bootstrap; `background` prop
├── components/
│   ├── Nav.astro        # shared; `active` prop highlights current page
│   ├── Footer.astro     # shared
│   ├── ImageSlot.astro  # placeholder image box; pass `src` to fill it
│   ├── SectionTag.astro # tilted sticker label (MAIN BIO / STORY / WORK)
│   ├── Hero/About/Projects/Contact/LetsTalk/FeaturedIntro.astro  # home sections
│   ├── about/           # MainBio, Story, Work, AboutTalk, AboutContact
│   └── casestudy/       # CaseHeader, CaseSection, ResultStats, MoreProjects
├── scripts/
│   └── floaters.ts      # cursor-repel drift on the hero sticker badges
└── styles/
    └── global.css       # Tailwind + Preline import, theme tokens, helpers
```

## Conventions

- **Styling** is Tailwind utility classes, matching the original design 1:1.
  Exact pixel values use **arbitrary values** (`border-[1.5px]`, `top-[84px]`,
  `bg-[#e8e8e8]`).
- **`clamp()` font sizes and per-item colors** (from data) are set with an
  **inline `style`** attribute, because commas in `clamp(...)` and dynamic
  color values don't fit cleanly in Tailwind class names. This is intentional —
  keep doing it for those two cases.
- **Brand tokens** live in `@theme` in `global.css`: colors (`bg-blue`,
  `bg-pink`, `bg-yellow`, `bg-green`, `bg-purple`, `text-mint`, `bg-ink`,
  `bg-paper`) and fonts (`font-body` Poppins, `font-display` Bungee,
  `font-pixel` Pixelify Sans, `font-script` Caveat, `font-mono` Space Mono).
  Fonts load from Google Fonts in `Layout.astro`.
- **Hard offset shadows** use helper classes `.shadow-hard-2..6` (e.g.
  `shadow-hard-3` = `3px 3px 0 #111`). Backgrounds: `.grid-paper` (home) and
  `.ruled-paper` (about/case-study), chosen via the Layout `background` prop.
- **Shared Nav/Footer**: nav items carry a per-item `accent` color used when
  that page is `active` (HOME→blue, ABOUT→yellow, CASE STUDY→green). Pass
  `active` from each page.
- **Images** are placeholders via `ImageSlot`. To show a real photo, put it in
  `public/` and pass `src="/your-image.jpg"` to the slot.

## Common tasks

- **Edit page copy** → the matching file in `src/data/`.
- **Add a home project** → append to `projects` in `portfolio.ts` (give it a
  unique `slot`, `top`, and palette `bg`/`fg`). All home cards currently link to
  `/case-study`.
- **Add a page** → new file in `src/pages/`, wrap in `<Layout>`, include
  `<Nav active="..." />` and `<Footer />`. Add the route to the Nav/Footer link
  lists if it should appear in navigation.
- **New nav accent / active state** → `links` array in `Nav.astro`.

## Known follow-ups (not yet done)

- `PLAYGROUND` nav link is a placeholder (`/#top`); no page exists yet.
- All four home project cards link to the single `/case-study` page. A dynamic
  `src/pages/case-study/[slug].astro` template (one per project) is the natural
  next step.
- Portrait, project, and case-study photos are all placeholders.
