# Daniel Kcomt — portfolio

Static personal site. Astro builds one HTML page, Tailwind v4 styles it, and the only JavaScript is a small inline module for the dictation replay and lazy video playback.

## Run it

Node.js 22 or newer, and pnpm 10 (Corepack ships it).

Windows (PowerShell or Command Prompt), macOS, and Linux use the same commands:

```powershell
corepack enable
corepack prepare pnpm@10.33.4 --activate
pnpm install
pnpm dev
```

`pnpm dev` serves the site at http://localhost:4321.

```powershell
pnpm build
pnpm preview
```

`pnpm build` writes the static site to `dist/`. `pnpm preview` serves that folder. Vercel builds this with the Astro preset; no adapter is required.

## What’s in the page

The copy, project order (WhisperAround first), contact links, and the files in `public/assets` are the existing portfolio. The page itself uses lighter derivatives in `public/media`: looping muted WebM/MP4 with a WebP poster for each project, and WebP/AVIF stills for the photographs. Boska is self-hosted and subset in `public/fonts`.
