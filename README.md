# Sochark Technologies — Website

Marketing site for Sochark Technologies, a software, AI & cloud studio. Built with
Next.js (App Router), Tailwind CSS v4, and Framer Motion. Dark editorial design
with oversized display typography, scroll-reveal animations, marquee strips,
and an interactive services accordion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/page.tsx` — single-page composition of all sections
- `app/layout.tsx` — fonts (Space Grotesk + Inter), SEO metadata
- `app/globals.css` — design tokens (colors, accent, marquee keyframes, grain)
- `components/` — Navbar, Hero, Marquee, Services, Stats, Process, CTA, Footer
- `lib/data.ts` — all site content: services, stats, process steps, marquee items

## Editing content

All copy lives in `lib/data.ts` — edit services, taglines, stats, and process
steps there without touching components. The accent color and theme are CSS
variables at the top of `app/globals.css`. The contact email appears in
`components/CTA.tsx` and `components/Footer.tsx`.

## Build

```bash
npm run build
npm start
```
