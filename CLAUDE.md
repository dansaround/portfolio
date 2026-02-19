# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev           # Dev server (localhost:3000)
pnpm build         # Production build
pnpm start         # Preview production build locally
```

## Architecture

Single-page portfolio built with **Next.js 14** (App Router) + **TypeScript**. No state management library — only `useState` where needed.

### Page structure

`src/app/layout.tsx` renders Nav globally; `src/app/page.tsx` composes all sections:

```
Header → Portfolio → About → Experience → Services → Testimonials → Contact → Footer
```

### Component conventions

- Each section lives in `src/components/<section>/` as `<Section>.tsx` + `<section>.css` (co-located, lowercase CSS)
- Client Components: `Nav.tsx` (`useState`) and `Testimonials.tsx` (Swiper) — both marked with `"use client"`
- CSS uses **custom properties** (defined in `src/app/globals.css`) — always use `var(--color-primary)` etc.
- Font: Poppins loaded via `next/font/google` in layout.tsx, applied as `--font-poppins` CSS variable
- Responsive breakpoints: `1024px` (medium) and `600px` (small)

### Adding portfolio projects

Projects are a static array `portfolioItems` inside `src/components/portfolio/Portfolio.tsx`. Add a new object with `{ id, image, title, github, demo, description }` — `image` is a public path like `/assets/portfolio/myproject.gif`. Drop the GIF in `public/assets/portfolio/`. The array is spread+`.reverse()`'d on render, so newer items (higher index) appear first.

### Assets

- All static files served from `public/` (Next.js standard)
- Profile photo, about photo, CV PDF, background images: `public/assets/`
- Portfolio preview GIFs: `public/assets/portfolio/`

### Dependencies of note

- `react-icons` — used across all components (import from `ai`, `bi`, `bs`, `ri`, `fa`, `fi`, `io`, `md`, `vsc` sub-packages)
- `swiper` v12 — used in Testimonials; modules imported from `"swiper/modules"`
