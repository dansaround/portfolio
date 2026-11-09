# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev           # Dev server (localhost:3000)
pnpm build         # Production build
pnpm start         # Preview production build locally
```

## Architecture

Single-page portfolio built with **Next.js 15** (App Router) + **React 19** + **TypeScript** + **Tailwind CSS v3**. No state management library — only `useState` where needed.

```bash
pnpm lint          # ESLint 9 (flat config in eslint.config.mjs)
```

### Page structure

`src/app/layout.tsx` renders Nav globally and holds the metadata; `src/app/page.tsx` composes all sections:

```
Header → Work (Moddo, WhisperAround, freelance, earlier projects) → About → Experience → Stack → Testimonials → Contact → Footer
```

`src/app/opengraph-image.tsx` generates the 1200×630 Open Graph image at build time; `src/app/icon.svg` is the favicon.

### Content

All copy lives in `src/data/content.ts` (profile, links, Moddo, WhisperAround, freelance, experience, stack). Edit text there, not in the components. Only use figures that appear in the CV or the GitHub profile README, and do not name schools or clients under NDA.

### Component conventions

- Each section lives in `src/components/<section>/<Section>.tsx`, styled with Tailwind utility classes
- Client Components: `Nav.tsx` (`useState`) and `Testimonials.tsx` (Swiper) — both marked with `"use client"`
- Theme colors (`bg`, `bg-variant`, `primary`) and breakpoints (`sm` 600px, `md` 1024px) are in `tailwind.config.js`; shared classes (`.container`, `.btn`, `.section-kicker`) in `src/app/globals.css`
- Font: Poppins loaded via `next/font/google` in layout.tsx, applied as `--font-poppins` CSS variable
- Images use `next/image` with static imports

### Assets

- `public/media/`: photos (WebP), WhisperAround demo video (MP4 + poster), background texture
- `public/cv/Daniel-Kcomt-CV.pdf`: the downloadable CV (replace the file to update it)

### Dependencies of note

- `react-icons` — used across all components
- `swiper` v12 — used in Testimonials; modules imported from `"swiper/modules"`
- `pnpm.overrides` in package.json pins patched versions of vulnerable transitive deps; re-check with `pnpm audit` after upgrades
