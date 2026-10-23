# Daniel Kcomt — portfolio

Static personal site. Astro builds one HTML page, Tailwind v4 styles it, and the only JavaScript is a small inline module for the dictation replay and lazy video playback.

## Run it

Node.js 22 or newer, and pnpm 11 (this repo pins 11.5.2). Windows, macOS, and Linux use the same commands:

```powershell
pnpm install
pnpm dev
```

If pnpm 11 is not on your PATH yet, Corepack can activate the pinned version:

```powershell
corepack enable
corepack prepare pnpm@11.5.2 --activate
```

`pnpm dev` serves the site at http://localhost:4321.

```powershell
pnpm build
pnpm preview
```

`pnpm build` writes the static site to `dist/`. `pnpm preview` serves that folder. Preview deploys read `vercel.json` (Astro, output `dist`, pnpm 11.5.2) so the Next.js settings on the existing Vercel project stay in place for `main`. No adapter is required.

## What’s in the page

The copy, project order (WhisperAround first), contact links, and the files in `public/assets` are the existing portfolio. The page itself uses lighter derivatives in `public/media`: looping muted WebM/MP4 with a WebP poster for each project, and WebP/AVIF stills for the photographs. Boska is self-hosted and subset in `public/fonts`.
