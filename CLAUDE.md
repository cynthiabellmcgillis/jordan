# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important: Next.js Version Warning

This project uses **Next.js 16.2.0** — a version with breaking changes from older releases. APIs, conventions, and file structure may differ from training data. Before writing any code, read the relevant guide in `node_modules/next/dist/docs/` and heed deprecation notices.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm start        # Run production server
npm run lint     # Run ESLint
```

## Stack

- **Next.js 16.2.0** with App Router
- **React 19.2.4** / **TypeScript 5**
- **Tailwind CSS 4** (configured via `@tailwindcss/postcss` in `postcss.config.mjs` — not the v3 `tailwind.config.js` pattern)

## Architecture

Uses the **App Router** pattern (not Pages Router):
- `app/layout.tsx` — root layout with Geist fonts and metadata
- `app/page.tsx` — home page
- `app/globals.css` — global styles with Tailwind and CSS custom properties for theming

**Path aliases**: `@/*` resolves to the project root (configured in `tsconfig.json`).

**Theming**: Light/dark mode via CSS custom properties (`--background`, `--foreground`) in `globals.css`, switching on `prefers-color-scheme`.

**Tailwind CSS 4** uses a different configuration format than v3 — no `tailwind.config.js`, all config lives in CSS via `@import "tailwindcss"` and `@theme` blocks.

## Design System

See `design.md` for the full design specification before writing any UI code. It covers the color palette and surface hierarchy, typography rules, elevation/depth approach, component patterns (buttons, cards, chips, inputs), and explicit do's and don'ts.
