# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Small and mid-sized business owners, startup founders, and teams in Ukraine, Europe, and worldwide who need a website or a web system built turnkey. A secondary audience is technical evaluators (CTOs, hiring managers) who check stack fit on the Technical Profile page.

## Product Purpose

Bilingual (EN / UA) portfolio and lead-generation site for Oleh Fedkiv, a full-stack web developer. It explains what can be built (website formats, MVPs, booking systems, CRM/API integrations), proves it with shipped case studies, and routes visitors into a four-step project brief at `/inquiry`. Success means a qualified brief submitted.

## Positioning

One developer delivering outcome-focused websites and web systems end to end — from goal definition through build to launch and iteration — with real shipped products as proof rather than agency claims.

## Operating Context

- Routes: home (`/`, `/ua`), technical profile, service detail pages (`/services/[slug]`), project case studies (`/projects/[slug]`), inquiry brief, privacy policy, terms of service.
- The inquiry form saves progress automatically; services pass a preconfigured feature set into it via query params.
- Next.js 16 (App Router, Turbopack), Tailwind CSS v4, `motion`, deployed on Vercel.

## Capabilities and Constraints

- Every page exists in English and Ukrainian; any typeface must cover Cyrillic.
- Inquiry budget bands are `$0–1k`, `$1–5k`, `$5–10k`, or "need an estimate".
- No pricing is published on the site (packages block removed by the owner, 2026-10-10).

## Brand Commitments

- Name: Oleh Fedkiv / Олег Федьків. Logo mark at `public/logo.webp`.
- Visual direction pinned by the owner (2026-10-10): the "Wen Launch" Framer template look — charcoal surfaces, silver gradient, `#A9A9A9` grey, white, a single `#4F8CFF` blue accent, uppercase grotesk headlines mixed with a thin display face, pill outline buttons, large rounded work cards.

## Evidence on Hand

- Four case studies with screenshots in `public/projects/` (sea-travel, qwiktwik, mevdev-frontend, night-light-configurator); two are live.
- Experience timeline in `app/constants/experience.ts`; CV at `public/cv.pdf`.
- No testimonials, client logos, or published prices exist — do not fabricate them.

## Product Principles

1. Proof over claims: shipped work and concrete scope carry the persuasion.
2. Every path ends at the project brief.
3. Parity between English and Ukrainian.
4. Honest scope: no invented metrics, turnaround times, or prices.
