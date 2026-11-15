---
name: Ahorrar
description: A monthly budget told as labeled paper envelopes; every spend comes out of one and you see what is left inside.
colors:
  paper: "#fafaf9"
  surface: "#ffffff"
  ink: "#0b0b0f"
  neutral-50: "#f4f3f1"
  neutral-100: "#eceae7"
  neutral-200: "#dedbd7"
  neutral-300: "#c9c5c0"
  neutral-400: "#9d9892"
  neutral-500: "#75706a"
  neutral-600: "#57534e"
  neutral-700: "#3d3a36"
  neutral-800: "#26241f"
  brand: "#ff5a1f"
  brand-strong: "#b23b0b"
  brand-soft: "#ffe2d4"
  brand-tint: "#fff4ee"
  envelope-fill: "#ffd2bd"
  envelope-hatch: "rgb(178 59 11 / 0.26)"
  accent: "#2f6feb"
  accent-strong: "#1d56c4"
  accent-soft: "#e4ecfd"
typography:
  display:
    fontFamily: "Funnel Display Variable, Geist Variable, ui-sans-serif, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Funnel Display Variable, Geist Variable, ui-sans-serif, sans-serif"
    fontSize: "clamp(2.25rem, 4.4vw, 3.75rem)"
    fontWeight: 680
    lineHeight: 1
    letterSpacing: "-0.028em"
  statement:
    fontFamily: "Funnel Display Variable, Geist Variable, ui-sans-serif, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Funnel Display Variable, Geist Variable, ui-sans-serif, sans-serif"
    fontSize: "clamp(1.25rem, 1.6vw, 1.5rem)"
    fontWeight: 680
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  amount:
    fontFamily: "Funnel Display Variable, Geist Variable, ui-sans-serif, sans-serif"
    fontWeight: 760
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "\"tnum\""
  lead:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.2vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "\"ss01\""
  label:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  tag: "0.375rem"
  control: "0.875rem"
  panel: "2rem"
  pill: "9999px"
spacing:
  gutter: "clamp(1rem, 4vw, 2.5rem)"
  section: "clamp(5rem, 9vw, 8.5rem)"
  nav: "4.5rem"
  page: "77.5rem"
  prose: "40rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 1.125rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.neutral-800}"
    textColor: "{colors.paper}"
  button-on-ink:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "3rem"
  button-on-ink-hover:
    backgroundColor: "{colors.brand-soft}"
    textColor: "{colors.ink}"
  store-badge:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1.5rem 0.5rem 1.125rem"
    height: "3.5rem"
  envelope-tag:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
  chip-positive:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent-strong}"
    rounded: "{rounded.pill}"
    padding: "0.375rem 0.75rem"
  flag-low:
    backgroundColor: "{colors.brand-soft}"
    textColor: "{colors.brand-strong}"
    rounded: "{rounded.pill}"
  card-tile:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.panel}"
    padding: "clamp(1.25rem, 2.5vw, 2rem)"
  card-plan-highlighted:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.panel}"
---

# Design System: Ahorrar

## Overview

**Creative North Star: "Sobres del mes"**

The month's money lives in labeled paper envelopes. Every surface in this system is a sheet of paper on a luminous near-white desk: flat white or warm-tinted planes, a 1px translucent ink edge, a soft layered shadow that lifts them a few millimetres. The one signature object is the open envelope itself, a pocket with a single triangular flap, an ink label tag with the category name in small caps, and an orange fill whose height is what is left inside. Money is always set in heavy, tight, tabular display numerals because the number is the point.

Color is disciplined: one saturated envelope orange carries brand, balance and emphasis; one crisp blue appears only where money comes in or grows. Everything else is ink on paper with a warm neutral ramp. Type pairs Funnel Display, tight and heavy, for headlines and amounts, with Geist for reading. Motion is calm and physical: things rise and settle on an expo-out curve, envelopes drain, a phone floats; nothing bounces.

Density is generous on the page (wide section rhythm, large display headlines) and dense only inside the envelope and the phone screens, where the product's own UI is shown at work.

**Key Characteristics:**
- Near-white paper ground, ink text, one orange, one blue, never blended together.
- Paper planes with 1px translucent ink edges and layered soft shadows.
- The open envelope (flap, ink tag, fill-as-height) is the reusable signature.
- Heavy, tight Funnel Display for headlines and every money figure; Geist for body.
- Ink pills for every primary action.
- Expo-out motion, transform and opacity only, with a full reduced-motion path.

## Colors

Ink on warm paper, with a single envelope orange and a single positive blue held strictly apart.

### Primary
- **Envelope Orange** (brand): the brand voice. Fills, marks and graphic emphasis: the top edge of an envelope's balance, bills peeking from the pocket, rating stars, progress bars, the highlighted plan's action on ink, the hero glow. Never used for text on light grounds.
- **Burnt Envelope** (brand-strong): every piece of orange text and orange iconography on light grounds (low-balance flag text, plan check marks), and the global focus ring. Passes AA on paper and surface.
- **Envelope Blush** (brand-soft): selection highlight, low-state flag ground, the back bill in an envelope, hover state of the orange button on ink.
- **Envelope Tint** (brand-tint): tinted paper. Alternate envelope tone, proof-metric highlight ground, testimonial and final-call panels.
- **Balance Fill** (envelope-fill): the solid fill inside a pocket that shows remaining balance as height.
- **Low Hatch** (envelope-hatch): the diagonal hatch laid over the balance fill when an envelope runs low.

### Secondary
- **Income Blue** (accent): bars and marks for positive progress (savings goals, income).
- **Income Blue Deep** (accent-strong): text on positive chips and blue-toned avatars.
- **Income Wash** (accent-soft): ground of positive chips ("+ income", goal reached).

### Neutral
- **Paper** (paper): the page ground and the in-phone screen ground; text on ink.
- **Sheet White** (surface): raised planes: cards, envelope pockets, band sections (proof, pricing).
- **Ink** (ink): all headline and body text on light grounds, primary buttons, envelope tags, the phone frame, the footer and highlighted plan grounds.
- **Warm Neutral ramp** (neutral-50 to neutral-800): 50 is the envelope flap; 100 is track and hover ground; 200 to 300 are muted text on ink; 400 is footer column labels on ink and the scrollbar thumb; 600 is the default muted text on paper (AA); 700 is nav link text; 800 is the ink-button hover.

### Named Rules
**The Two Inks Never Mix Rule.** Orange and blue never share a gradient, a fill or a single mark. Orange is the envelope; blue is money coming in.

**The Orange Text Rule.** Raw brand orange is a fill and a mark, never text on paper or white. Orange text uses brand-strong; on ink or orange grounds the text is ink or paper.

**The Never Color Alone Rule.** A state is never carried by color alone: a low envelope gets the hatch and a flag word with an alert icon, not just a different tint.

## Typography

**Display Font:** Funnel Display Variable (with Geist Variable, ui-sans-serif)
**Body Font:** Geist Variable (with ui-sans-serif, system-ui), stylistic set ss01 on

**Character:** A heavy, tightly tracked display face that makes headlines and money figures feel like printed labels, against a calm, neutral sans for everything you read.

### Hierarchy
- **Display** (700, clamp(2.75rem, 6vw, 5.25rem), 0.96): the hero headline only.
- **Headline** (680, clamp(2.25rem, 4.4vw, 3.75rem), 1): section headings and the final call.
- **Statement** (500, clamp(1.5rem, 3vw, 2.5rem), 1.35): the proof sentence with inline metrics, set in muted neutral with ink highlighted figures.
- **Title** (600 to 680, clamp(1.25rem, 1.6vw, 1.5rem), 1.2): card, tile and plan names.
- **Amount** (740 to 760, -0.03em to -0.04em, 1, tabular): every money figure: envelope balances, plan prices, in-app totals. Size is set by context.
- **Lead** (400, clamp(1.0625rem, 1.2vw, 1.25rem), 1.55): section intros and hero subcopy, max 34rem / prose 40rem.
- **Body** (400, 0.9375rem, relaxed): card copy, plan lists, nav links.
- **Label** (600, 0.6875rem, 0.08em, uppercase): envelope tags, plan badges, rule chips, footer column heads.

### Named Rules
**The Money Is Tabular Rule.** Every currency figure uses tabular numerals, and every prominent one uses the Amount style in the display face.

**The Label Is A Tag Rule.** Uppercase small-caps text appears only as a physical label: on an ink envelope tag, a badge or a chip, or as a column head. It never floats above a heading as a decorative line.

## Layout

A centered page container (77.5rem max, fluid gutter clamp(1rem, 4vw, 2.5rem)) holds every section. Sections breathe on a fluid vertical rhythm (clamp(5rem, 9vw, 8.5rem)). The fixed nav is 4.5rem tall and scroll targets are padded by it.

The hero is a 12-column grid at large widths, copy in the left 6, a stage in the right 6 where the phone and three fanned envelopes sit at different depths. Below 64rem it stacks to one column, copy first. Features use a bento of tiles; a tile may switch to a copy-and-demo row layout from 48rem. Pricing is three columns from 64rem with the highlighted plan taller. Intros cap at prose width (40rem); section headers cap at about 48rem.

Envelope and phone are container-query components: their internals size in `cqi` (and the phone screens in `em` from the phone's own width) so they scale as one object at any size.

## Elevation & Depth

A layered, lifted system. Paper planes sit on the ground with soft, stacked, ink-tinted shadows; depth always combines a short offset with a long blur, never a hard edge. Edges come from a 1px translucent ink line (color-mix of ink at 6 to 16%) rather than a solid gray border. Interactive cards lift 4px and gain the medium shadow on hover. The phone carries the deepest shadow, with a warm orange tail so it reads as floating over the envelope glow.

### Shadow Vocabulary
- **Rest** (shadow-sm): tiles, store badges, in-phone cards, the money label inside an envelope.
- **Lift** (shadow-md): envelope pockets, hovered cards and badges, the open mobile menu.
- **Feature** (shadow-lg): the highlighted plan and the final-call panel.
- **Phone** (shadow-phone): the phone mockup only.

### Named Rules
**The Soft Stack Rule.** Every shadow is a stack of offset plus blur tinted with ink; no zero-blur offset shadows.

**The Hairline Edge Rule.** Planes are defined by a 1px translucent ink edge plus shadow, not by solid gray borders.

## Shapes

Gently to generously rounded paper. Small tags use a 6px corner (tag); controls and avatars 14px (control); tiles, plans and panels 32px (panel), with the final-call panel at 1.25x panel. Every action, chip, badge and flag is a full pill. Envelope geometry is fixed: a single triangular flap over a pocket of roughly 1.6:1 with faint diagonal fold lines, internals in proportional container units. The phone is a 9:19.5 ink frame with a pill island.

## Components

### Buttons
Ink pills: confident, quiet, unmistakable.
- **Shape:** full pill (9999px).
- **Primary:** ink ground, paper text, weight 600; 2.5rem tall in the nav, 3rem in plans, 3.5rem as store badges.
- **Hover / Focus:** ground eases to neutral-800 with a 1.02 to 1.03 scale on the expo-out curve (200ms color, 400ms transform); pressed scales to 0.98. Focus is a 2.5px brand-strong ring offset 3px, rounded to the pill.
- **On ink:** inside an ink ground (the highlighted plan) the action flips to orange ground with ink text; hover goes to brand-soft.
- **Text link:** ink, weight 600, with a 1px underline that retracts on hover (or reveals on hover in the nav).

### Store Badges
The primary conversion control: an ink pill with the store glyph, a small neutral-200 caption and the store name in the display face (680, 1.1875rem). Always shown as a pair.

### Chips
- **Positive:** accent-soft ground, accent-strong text, pill, for income and goals.
- **Low flag:** brand-soft ground, brand-strong text, pill, with an alert icon and a word.
- **Rule / badge:** label style on ink or orange.

### Cards / Containers
- **Corner Style:** panel (32px).
- **Background:** surface on paper bands, paper on surface bands; the highlighted plan is ink.
- **Shadow Strategy:** rest shadow, lifts to Lift on hover (see Elevation).
- **Border:** 1px ink at 8 to 9%.
- **Internal Padding:** clamp(1.25rem, 2.5vw, 2rem) for tiles, clamp(1.5rem, 3vw, 2.25rem) for plans.

### Navigation
Fixed bar on 94% paper with a 1px translucent bottom edge; logo left, Geist 0.9375rem medium links in neutral-700 that darken to ink with a reveal underline, an ink pill call to action right. Below 48rem the links collapse into a toggle that opens a paper sheet of large display-face links separated by hairlines.

### Envelope (signature)
An open paper envelope: neutral-50 (or brand-tint) triangular flap with a translucent ink stroke; a surface (or paper) pocket with the Lift shadow; two bills peeking out whose rise follows the balance; an ink tag with the category in Label style and its number in brand-soft; and the balance as a solid envelope-fill level with a 2px orange top edge. The remaining amount sits on its own small opaque white label so the fill line never strikes through text. Low state adds the hatch and the flag. When given a starting amount it drains on load (900ms expo-out) while its counter ticks down and a "spent" pill rises and fades; reduced motion shows the final state.

### Phone Mockup
An ink frame with the phone shadow, a paper screen and a pill island, rendering the product's real UI in HTML (ink pills, white cards, pill chips with an ink selected state, orange balance bars). Tilted about -6deg and floating slowly when used as a hero object.

## Do's and Don'ts

### Do:
- **Do** put every currency figure in tabular numerals, and prominent ones in the display face at 740 to 760.
- **Do** use the envelope (flap, ink tag, fill-as-height) whenever a budget category is shown.
- **Do** make primary actions ink pills; flip to orange with ink text only on an ink ground.
- **Do** set orange text in brand-strong (#b23b0b) and keep raw brand (#ff5a1f) for fills and marks.
- **Do** define planes with a 1px translucent ink edge plus a layered soft shadow.
- **Do** animate only transform and opacity on the expo-out curve (cubic-bezier(0.22, 1, 0.36, 1)), 200 to 700ms, with content visible by default and a reduced-motion path.

### Don't:
- **Don't** blend the envelope orange and the income blue in one gradient or mark.
- **Don't** use blue for anything but money coming in or growing.
- **Don't** signal a state with color alone; pair it with a hatch, an icon and a word.
- **Don't** use zero-blur offset shadows or solid gray borders.
- **Don't** set uppercase label text as a floating line above a heading; it lives on tags, badges and chips.
