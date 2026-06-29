# Digital Hall of Fame — Vercel / Next.js Project

This is the **Next.js 15 + Tailwind v4** frontend for digitalhalloffame.com, deployed on Vercel.
It lives alongside the WordPress build (`../wp-content/`) and is the path to a full headless or standalone migration.

## Quick facts

| Detail | Value |
|---|---|
| Local path | `C:\Users\vasil\Studio\digital-hall-of-fame\vercel-dhof\` (rename from `mockup` once) |
| GitHub repo | `https://github.com/VKostidis/dhof-vercel` (private) |
| Production URL | `https://mockup-eta-weld.vercel.app` |
| Vercel project name | `mockup` (rename in dashboard once) |
| Vercel team | `vks-projects-ccae4743` |
| Deploy method | `git push origin main` → auto-deploy via GitHub integration |
| CLI deploy (manual) | `vercel --prod` (requires `vercel whoami` first) |

## Tech stack

- **Next.js 16.x** (App Router, TypeScript, `output: "export"` static export)
- **Tailwind CSS v4** — uses `@import "tailwindcss"` and `@theme { }` (NOT v3 syntax)
- **`vercel.json`** — `outputDirectory: "out"`, `buildCommand: "npm run build"`, `cleanUrls: true`
- **Images**: all via plain `<img>` tags (NOT `next/image`) — avoids static-export height-class conflicts
- **Fonts**: `next/font/google` → Inter 400–900, self-hosted at build time, variable `--font-inter`

## Critical Tailwind v4 rules

- Import: `@import "tailwindcss";` — NOT `@tailwind base/components/utilities`
- Custom tokens: defined in `@theme { }` block in `globals.css`
- Color names (`--color-accent`, `--color-ink`, etc.) map to Tailwind utilities: `bg-accent`, `text-ink`
- No `tailwind.config.js` — all config is in CSS
- Arbitrary values like `h-[100px]` work BUT are unreliable on `<img>` elements — use inline `style` instead

## Why plain `<img>` not `next/image`

`next/image` injects `style="color:transparent"` which takes precedence in static export mode, silently overriding Tailwind height classes. For logos and any image where CSS sizing is critical, use:
```tsx
<img src="..." alt="..." style={{ height: 100, width: 'auto', display: 'block' }} />
```

## Project structure

```
vercel-dhof/
├── app/
│   ├── globals.css       ← brand tokens (@theme), animations, base reset
│   ├── layout.tsx        ← Inter font, site metadata, Header + Footer wrappers
│   └── page.tsx          ← homepage: all sections + JSON-LD schema
├── components/
│   ├── Header.tsx        ← 'use client', sticky scroll state, services dropdown, mobile drawer
│   ├── Footer.tsx        ← 4-col dark footer, social icons, legal links
│   ├── Hero.tsx          ← dark hero, sparkles, CTAs, proof badges
│   ├── Marquee.tsx       ← yellow scrolling ticker (CSS animation)
│   ├── TrustedBy.tsx     ← client logo strip (7 logos from digitalhalloffame.com)
│   ├── Stats.tsx         ← 4-col dark stats band
│   ├── QuickAnswer.tsx   ← "First Principle" AEO band
│   ├── WhyDhof.tsx       ← 5 numbered feature rows
│   ├── Manifesto.tsx     ← yellow quote band
│   ├── Services.tsx      ← 6-card dark grid
│   ├── Compare.tsx       ← 7-row comparison table (off-white bg)
│   ├── Industries.tsx    ← 14-card grid linking to WP industry pages
│   ├── Process.tsx       ← 4-step process + "7 days" callout
│   ├── CaseStudies.tsx   ← 'use client', prev/next carousel
│   ├── NotForEveryone.tsx ← yes/no two-col list (dark bg)
│   ├── CtaBand.tsx       ← reusable CTA band (ink | accent variants)
│   ├── Faq.tsx           ← native <details>/<summary> accordion
│   └── Blog.tsx          ← 3-col post grid
├── public/               ← static assets (SVG icons only — no images stored here)
├── next.config.ts        ← output: 'export', images.unoptimized: true
├── vercel.json           ← outputDirectory: 'out', cleanUrls: true
├── tsconfig.json
└── package.json
```

## Design tokens (from globals.css @theme)

| Token | Value | Tailwind utility |
|---|---|---|
| `--color-paper` | `#FFFFFF` | `bg-paper`, `text-paper` |
| `--color-ink` | `#0A0A0A` | `bg-ink`, `text-ink` |
| `--color-ink-soft` | `#1F1F1F` | `bg-ink-soft` |
| `--color-off-white` | `#F4F4EE` | `bg-off-white` |
| `--color-accent` | `#FFE600` | `bg-accent`, `text-accent` |
| `--color-accent-dk` | `#E6CF00` | `bg-accent-dk` |
| `--color-ink-mute` | `#6B6B6B` | `text-ink-mute` |
| `--color-line` | `#E5E5E0` | `border-line` |

## Image sources

All images load from the live WP site:
```
https://www.digitalhalloffame.com/wp-content/themes/digital-hall-of-fame/assets/img/
```
Logo: `.../logo.webp` — Client logos: `.../clients/[name].[ext]`

All links point to `https://www.digitalhalloffame.com/[path]` — the Next.js site has no internal routing (homepage only for now).

## Deploy workflow

```bash
# Auto-deploy (preferred)
git add . && git commit -m "..." && git push origin main

# Manual prod deploy
vercel --prod

# Clear Vercel build cache (if stale)
vercel --prod --force
```

## Known gotchas

- **Framework preset**: Vercel project is set to "Other" — `vercel.json` overrides this correctly via `outputDirectory: "out"`. Do NOT change framework to "Next.js" in Vercel dashboard — it will break the static export approach.
- **Multiple lockfiles**: Next.js warns about detecting `C:\Users\vasil\package-lock.json` as workspace root. Harmless — add `turbopack.root` to `next.config.ts` if it becomes an issue.
- **`next/image` in static export**: Only use for logos/images where you do NOT need Tailwind CSS sizing. For sized images (logos), use plain `<img>` with inline `style`.
- **`'use client'`**: Required on `Header.tsx` (scroll state, drawer) and `CaseStudies.tsx` (scroll ref). Everything else is server components.

## Available Skills

When working in this directory, load these skills:

| Skill | When |
|---|---|
| Main project: `.claude/skills/design-system.md` | Brand tokens, colour, component patterns |
| Main project: `.claude/skills/content.md` | Copywriting, voice, on-brand phrases |
| Main project: `.claude/skills/seo.md` | Metadata, JSON-LD, canonical URLs |
