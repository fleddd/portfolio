---
name: Oleh Fedkiv Portfolio
description: A developer's portfolio staged like a studio launch site — charcoal stage, brushed silver, one blue signal.
colors:
  canvas: "#0d0d0d"
  surface: "#141414"
  raised: "#1b1b1b"
  line: "#272727"
  mute: "#a9a9a9"
  ink: "#ffffff"
  signal-blue: "#4f8cff"
  silver-dark: "#8d8d8d"
  silver-light: "#f4f4f4"
typography:
  display:
    fontFamily: "Geologica, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 6.6vw, 6rem)"
    fontWeight: 300
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  display-accent:
    fontFamily: "Cormorant, ui-serif, Georgia, serif"
    fontSize: "1.12em"
    fontWeight: 300
    lineHeight: 0.95
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Geologica, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 4.75rem)"
    fontWeight: 300
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Geologica, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Geologica, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  body-sm:
    fontFamily: "Geologica, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Geologica, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.4
  numeral:
    fontFamily: "Martian Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "1.875rem"
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: "-0.04em"
  mono-meta:
    fontFamily: "Martian Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.33
rounded:
  pill: "9999px"
  caption: "14px"
  card: "18px"
  plate: "20px"
  shell: "28px"
spacing:
  band-gap: "6px"
  plate-gap: "12px"
  card-pad: "24px"
  card-pad-lg: "28px"
  gutter: "24px"
  gutter-lg: "48px"
  section-y: "80px"
  section-y-md: "112px"
  section-y-lg: "128px"
  container: "90rem"
components:
  button-primary:
    backgroundColor: "{colors.silver-light}"
    textColor: "{colors.canvas}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 28px"
    height: "44px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 28px"
    height: "44px"
  icon-badge:
    backgroundColor: "{colors.line}"
    textColor: "{colors.signal-blue}"
    rounded: "{rounded.pill}"
    size: "36px"
  card-step:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  work-plate:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plate}"
  tech-chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  nav-bar-scrolled:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    height: "64px"
---

# Design System: Oleh Fedkiv Portfolio

## Overview

**Creative North Star: "The Studio Launch Stage"**

The site is staged, not laid out. A spotlit charcoal floor (radial `#3b3b3b → #1f1f1f → canvas` with a 7% film grain) carries uppercase grotesk statements that break mid-line into a thin, high-contrast display voice. Proof arrives as large rounded work plates with a frosted caption bar; everything else is quiet charcoal, hairlines, and grey copy. The world was pinned by the owner from the "Wen Launch" Framer template; its display face (Gallery Modern) is substituted by Cormorant because every page ships in English and Ukrainian and every face must cover Cyrillic.

Material is the point. There are exactly three: charcoal (the stage, in three tonal steps), brushed silver (the one solid CTA, a 115° multi-stop metal gradient), and a single `signal-blue` used only at signal scale. Density is low and generous — sections breathe at 80–128px vertical rhythm inside a 90rem stage — and the page reads as a sequence of set pieces: hero, roadmap band, format grid, work plates, accordion ledger, marquee, footer wordmark.

It explicitly refuses the cyan-glow developer-portfolio template: no neon, no glassmorphism cards, no gradient headings, no terminal cosplay.

**Key Characteristics:**
- Charcoal tonal stage (canvas / surface / raised) separated by `#272727` hairlines, not shadows.
- Two-voice headlines only at the bookends (hero, page openers, closing CTA): Geologica 300 uppercase statement + Cormorant 300 continuation. Section headings are one voice.
- Brushed-silver pill is the only solid button; everything else is a hairline outline pill.
- Blue is a signal, never a surface: icon glyphs, checks, dots, focus ring, selection.
- Heavy square-capped north-east arrow (`ArrowNE`) as the world's signature glyph.
- Martian Mono for measurements only: prices, periods, counters, ring text.

## Colors

A near-monochrome charcoal stage with a metal material and one blue signal.

### Primary
- **Brushed Silver** (gradient from Silver Shadow `#8d8d8d` through Silver Highlight `#f4f4f4`, full stops `#8d8d8d 0% → #dcdcdc 38% → #f4f4f4 48% → #a9a9a9 62% → #cfcfcf 100%` at 115°): the fill of the primary CTA pill and the mobile "Hire me" button, with canvas-coloured text. A sibling text gradient (`text-silver`, 100°, `#9a9a9a → #ededed → #ffffff → #a9a9a9 → #d6d6d6`) exists for the Contact marquee only.

### Secondary
- **Signal Blue** (`signal-blue`): the single chromatic voice. Icon-badge glyphs, check icons in service features, the active-nav dot, experience highlight dashes, selected-option dots and markers, the intake progress bar, the focus outline, `::selection`, the caret, and the footer heart.

### Neutral
- **Stage Black** (`canvas`): page background, nav when scrolled (at 85% with blur), text on silver.
- **Charcoal Plate** (`surface`): roadmap and skill cards, work-plate backing, alternate sections.
- **Lifted Charcoal** (`raised`): floating layers only — listbox popovers and dialogs in the intake form.
- **Hairline** (`line`): every divider, grid rule, accordion rule, icon-badge disc, scroll-badge ring, chip border.
- **Ash Grey** (`mute`): secondary copy, descriptions, inactive nav, meta text.
- **Ink White** (`ink`): headlines, titles, active states. Outline pills use white at 25% opacity, rising to 70% on hover; plate borders use white at 10–15%.

### Named Rules
**The Signal Not Surface Rule.** Blue appears only at signal scale — a glyph, a 4–8px dot, a 1px dash, a check, a focus ring, a selected marker. It is never a button fill, a card fill, or a hover fill. If blue covers more than an icon's footprint, it is wrong.

**The One Metal Rule.** Brushed silver is reserved for the primary CTA. One silver pill per view region; every other action is an outline pill.

**The Marquee-Only Gradient Rule.** Gradient text (`text-silver`) exists for the Contact marquee and nowhere else. Headlines are solid ink.

## Typography

**Display Font:** Geologica (with ui-sans-serif, system-ui)
**Accent Display Font:** Cormorant 300/400 (with ui-serif, Georgia)
**Label/Mono Font:** Martian Mono (with ui-monospace, SFMono-Regular)

**Character:** A wide geometric grotesk set light and uppercase does the talking; a thin, high-contrast serif interrupts it as a second voice, like a launch-site title card. Martian Mono is a measuring instrument, not a voice. All three load Latin + Cyrillic subsets.

### Hierarchy
- **Display** (Geologica 300, `clamp(2.4rem, 6.6vw, 6rem)`, line-height 0.94, -0.04em, uppercase): hero statement only, centred, entering with `hero-rise`.
- **Display Accent** (Cormorant 300, 1.12em of the surrounding headline, +0.01em): the continuation half of a two-voice bookend headline (`DisplayAccent`, via `SectionHeader display`). In the hero it stands alone at `clamp(2.7rem, 5.2vw, 4.5rem)`, uppercase; also the 404 numeral and the 6%-white footer wordmark.
- **Display Headline** (Geologica 300 + Cormorant accent, `clamp(2.5rem, 6vw, 4.75rem)`, line-height 0.95, -0.035em): `SectionHeader display` — Technical page opener and the closing Contact CTA only.
- **Headline** (Geologica 300, one voice, `clamp(2rem, 3.6vw, 3.25rem)`, line-height 1, -0.03em, uppercase, balanced, max 48rem): every other section heading via `SectionHeader`. Inner pages use 36–60px with -0.03em, same weight and case.
- **Lead** (Geologica 400, 17px, line-height 1.625, `mute`, max 36rem): the section description, always directly under its heading (20px gap).
- **Title** (Geologica 400, 20px, line-height 1.25, -0.02em): card and step titles; accordion company names scale to 24–30px.
- **Body** (Geologica 400, 16px, line-height 1.625, `mute`): hero description and running copy.
- **Body Small** (Geologica 400, 13px, line-height 1.625, `mute`): card descriptions.
- **Label** (Geologica 400–500, 13–14px): nav links, buttons (14px medium, -0.01em), meta.
- **Mono Meta** (Martian Mono, 12px): experience periods, stat figures, scroll-badge ring text.

### Named Rules
**The Two-Voice Rule.** The Cormorant second voice is reserved for bookends — the hero, a page opener, the closing CTA — so it stays a signal. Middle sections speak in one voice; when every heading is two-voice, every heading competes with the hero and the page loses its hierarchy. Never set a whole headline in Cormorant, never set the accent in a heavier weight.

**The One-Axis Rule.** Middle sections share one left reading axis: heading, then its lead directly beneath, then content. Only the bookends (hero, closing CTA) are centred. Never float a section description away from its heading.

**The Light-Caps Rule.** Headlines are weight 300 uppercase with negative tracking. No bold display type anywhere.

**The Mono-Measures Rule.** Martian Mono only for things you could measure: prices, dates, counts. Never for prose or headings.

## Layout

A centred 90rem stage (`max-w-[90rem]`) with safe-area-aware gutters of 24px, widening to 48px at ≥1024px (`safe-area-x`). Sections use `Section`: 80px vertical padding, 112px at md, 128px at lg; headers sit 48–64px above content.

Recurring compositions:
- **Stacked header:** headline then lead, left-aligned — About, Solutions, Projects, Experience, Skills.
- **Centred header:** Contact only (the closing bookend).
- **Hairline grid:** the format cards are a borderless-gap grid ruled by `line` (border-left/top on the container, border-right/bottom on cells), 1 → 2 → 4 columns.
- **Card band:** roadmap and skill cards on a 6px gap, 1 → 2 → 3/4 columns.
- **Plate rhythm:** work plates alternate wide / half / half (every third index spans two columns) on a 12px gap; wide plates 16:7.5, halves 5:4.4, all 4:3 on mobile.
- **Navigation:** fixed, 64px (80px at xl), three-column split with the wordmark centred at xl; links left, profile/lang/hire right.

Responsive: below xl the nav collapses to wordmark + "Menu" text toggle with a full-width drop panel of 24px uppercase rows. `scroll-padding-top` matches the nav (65px / 81px).

## Elevation & Depth

The home world is flat. Depth comes from tonal steps (canvas → surface → raised), 1px hairlines, the hero's radial spotlight, film grain, and one frosted layer: the work-plate caption bar (`black/40`, `backdrop-blur-xl`, white/10 border) and the scrolled nav (`canvas/85` + blur). The single home shadow is the floating back-to-top button.

### Shadow Vocabulary
- **Float** (`box-shadow: 0 10px 30px -10px rgba(0,0,0,0.6)`): fixed floating controls (back-to-top) only.
- **Popover** (`shadow-2xl` tinted `black/40–50`): intake listbox and dialog on `raised`. Overlay layers only.

### Named Rules
**The Flat Stage Rule.** Cards, plates and sections sit flat; separation is tonal or a hairline. Shadow is reserved for things that genuinely float above the page (fixed controls, popovers, dialogs).

## Shapes

Two families: full pills for every interactive control (buttons, chips, nav CTA, icon badges, accordion toggles, scroll badge, back-to-top) and generous soft rectangles for containers — 18px cards, 20px work plates, 14px caption bar inset inside a plate. Form fields inside the intake flow use 12px. Hairline grids have square corners. The signature silhouette is the `ArrowNE` glyph: two 3.4-stroke square-capped strokes forming a heavy north-east arrow.

## Components

### Buttons
Calm, metallic, and rare.
- **Shape:** full pill (9999px), min height 44px (48–56px for hero-scale CTAs), 12px × 28px padding, 14px medium, -0.01em.
- **Primary:** Brushed Silver fill with canvas text. Hover `brightness(1.1)`, active `brightness(0.95)`, 300ms `ease-out-expo`.
- **Secondary:** transparent with a white/25 1px border and ink text; hover border white/70, active fill white/5. Used for GitHub link, nav "Hire me", back buttons.
- **Focus:** global 2px `signal-blue` outline at 3px offset.

### Icon Badge
36px `line`-coloured disc holding a 16px Lucide line icon (stroke 1.75) in Signal Blue. Opens roadmap cards, format cards, and skill cards.

### Cards / Containers
- **Roadmap / skill card:** `surface`, 18px radius, 24–28px padding, icon badge top, title + 13px description bottom. Min height 224–288px.
- **Format card ("What I can build"):** a cell in the hairline grid, 24px padding, icon badge + `ArrowNE` top, title + description bottom.
- **Shadow strategy:** none (see Elevation).

### Work Plate (signature)
Full-bleed screenshot in a 20px `surface` plate, bottom-half black/60 fade, and an inset frosted caption bar (14px radius) reading "**Title** / category" with an arrow that nudges 4px right on hover over 500ms. Focus ring is blue with a canvas offset.

### Chips
Tech chips: transparent pill, `line` border, 4px × 12px, 12px ink/85 text. Appear only inside expanded experience rows.

### Inputs / Fields
Intake form: `canvas` field, white/10 border, 12px radius, 16px × 12px padding. Focus shifts the border to signal-blue/70 with a blue/20 2px ring. Selected option cards take a blue/10 wash with a blue/70 border and a solid blue check disc — selection markers are the one place blue fills a small control.

### Navigation
Transparent over the hero, `canvas/85` + blur + `line` bottom border after 50px scroll. Links 13px `mute` → `ink`; the active section gets a 4px Signal Blue dot before the label. Right cluster: profile switch with up-right arrow, language switch, outline "Hire me" pill. Mobile: "Menu"/"Close" text toggle with two-line morphing icon; panel rows are 56px uppercase 24px type over hairlines, ending in an outline language pill and a silver "Hire me" pill.

### Experience Ledger
Accordion over hairlines: mono period (13rem column), 24–30px company title + role, 44px outline pill toggle with a plus that rotates 45° and fills white when open. Panels expand with height + opacity over 500ms `ease-out-expo`; highlights are prefixed with a 12px blue dash.

### Hero Scroll Badge & Marquee
A 112px badge of mono ring text rotating every 22s around a 44px down-arrow disc, bottom-centre of the hero. The Contact section opens with a 38s infinite marquee of silver-gradient uppercase phrases at `clamp(3.5rem, 11vw, 10rem)` separated by ash-grey bars.

### Motion
One easing for the world: `ease-out-expo` (`cubic-bezier(0.16, 1, 0.3, 1)`). Hero lines rise 0.35em from 10px blur over 1.1s (accent line delayed 140ms). Hovers are 300ms; reveals and expansions 500ms. All motion collapses under `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** build section headings with `SectionHeader` in one voice; use `display` (two-voice) only for page openers and the closing CTA.
- **Do** make the Brushed Silver pill the primary CTA and keep it to one per view region; use the white/25 outline pill for everything else.
- **Do** keep blue to signal scale: icon-badge glyphs, checks, the active-nav dot, selected markers, the focus ring, and selection.
- **Do** separate surfaces with `canvas`/`surface`/`raised` steps and `#272727` hairlines instead of shadows.
- **Do** use `ArrowNE` as the world's directional glyph and `ease-out-expo` for every transition.
- **Do** set prices, periods and counters in Martian Mono.
- **Do** confirm every new face covers Cyrillic before using it.

### Don't:
- **Don't** fill a button, card, or hover state with solid blue; blue is never a CTA colour.
- **Don't** put eyebrow or kicker labels above headings.
- **Don't** number unordered lists with catalog indices (01 / 08).
- **Don't** add hover effects to the "What I can build" format cards beyond the smooth `ArrowNE` reveal (fade + 4px rise, 500ms); no lift, fill, border change or scale.
- **Don't** use gradient text anywhere except the Contact marquee.
- **Don't** set display type bold, or set an entire headline in Cormorant.
- **Don't** drift toward the cyan-glow developer-portfolio look: no neon accents, no glow shadows, no terminal styling.
- **Don't** invent prices, testimonials, client logos, or metrics to fill a layout.
