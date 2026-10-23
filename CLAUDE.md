# CLAUDE.md

## Commands

```bash
pnpm dev      # Astro dev server, localhost:4321
pnpm build    # Static build to dist/
pnpm preview  # Serve dist/
pnpm check    # astro check
```

## Architecture

One static page. Astro 5 (`output: "static"`) with Tailwind v4 via `@tailwindcss/vite`. No React, no Svelte runtime. The only client script is the inline module in `src/layouts/Base.astro` (dictation replay and lazy video play).

`src/pages/index.astro` is the page. `src/data/site.ts` holds the copy, links, and project list (display order, WhisperAround first). `src/styles/global.css` is the styling. Photographs and project footage used by the page live in `public/media`. Original GIFs and photos stay in `public/assets`.

Fonts: self-hosted Boska subsets in `public/fonts` (weights 400, 400 italic, 500).
