---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Surface: Home landing (src/pages/index.astro)

Mode: Persuade. Audience: people who never kept their accounts, mostly on mobile; secondary: template buyers judging finish and rebrandability. Action: tap App Store / Google Play badge. Proof: the app at work (two-tap logging, envelope balances), invented-but-credible sample metrics, testimonials and ARS pricing from site.ts, labeled as sample in PRODUCT.md. Constraints: CLAUDE.md is binding (structure, tokens, motion, a11y, Lighthouse ≥95).

## Direction contract

THESIS: The monthly budget is a set of labeled envelopes; every expense comes out of one and you see what is left inside. Refuses the category default of a generic phone + floating stat cards + abstract gradient blob.

OWN-WORLD: Luminous near-white #FAFAF9 ground, ink #0B0B0F, one saturated envelope orange (brand) and a crisp blue secondary (used for "income/positive" and links), never blended into a gradient together. Envelopes are flat white or tinted paper planes with a single triangular flap, 1px translucent edge, layered soft shadow, a small label tag (category name in caps + number). Bills/fill inside each envelope show the remaining balance as height. Funnel Display tight and heavy for headlines, Geist for body, tabular numerals for money.

STORY: In five seconds the visitor reads "budget in envelopes, log a spend in two taps", sees the phone doing it, and taps a store badge. Below, proof (metrics), what it does (bento of envelope features), how (3 steps with screens), people, price, doubts, close.

FIRST VIEWPORT: Left 6/12: headline at clamp(2.75rem, 6vw, 5.25rem) in Funnel Display, subcopy, App Store + Google Play badges (primary) and a text link, with the rating line BELOW the badges (adaptation: a pill above the headline would be the banned kicker). Right 6/12: phone tilted ~-6deg floating, three open envelopes (Súper, Transporte, Salidas) fanned behind it at different depths with label tags and remaining amounts; soft radial orange glow behind. Mobile: phone and envelopes stack under the badges.

FORM: Grounded candidate 1 of 7 (Sobres del mes), chosen by the user as IMPECCABLE'S PICK over the assigned roll. seed:6c6bcb07370e1544. Signature interaction: on load the phone logs "Café · $2.800" in two taps (category chip, confirm) and the Salidas envelope's fill drops with its counter; reduced motion shows the final state. Motion grammar: cubic-bezier(0.22,1,0.36,1), 200-700ms, transform/opacity only, scroll-driven reveals with IO fallback, slow mockup float, light envelope parallax.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved
- Copy language es-AR and ARS pricing inferred from brand name, not confirmed.
