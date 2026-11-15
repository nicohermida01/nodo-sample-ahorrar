# AhorrAr — Mobile App Landing Page Template

A static, animated landing page for a mobile app, built with Astro and Tailwind CSS v4. It ships with a complete sample brand — **AhorrAr**, a fictional budgeting app — so you can see every section finished, then swap in your own product by editing **one content file and one token block**.

## Quick start

Requires Node.js ≥ 22.23.4.

```sh
npm install
npm run dev        # http://localhost:4321
```

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start the dev server                      |
| `npm run build`   | Build the static site into `dist/`        |
| `npm run preview` | Serve the built site locally              |
| `npx astro check` | Type-check the project                    |

Deploy `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages…).

## Rebrand in four steps

| Step | Where | What to change |
| ---- | ----- | -------------- |
| 1. Copy and data | `src/content/site.ts` | Brand name, headlines, features, steps, testimonials, pricing, FAQ, footer, store links. Components contain no copy. |
| 2. Colors, type, spacing | `src/styles/global.css` → `@theme` | Design tokens. Components never use raw colors. |
| 3. Site URL | `astro.config.mjs` → `site` and `site.ts` → `url` | Your production domain (used for canonical/OG URLs). Keep both in sync. |
| 4. Logo and favicon | `src/components/ui/Logo.astro`, `public/favicon.svg` | Replace the envelope mark with yours. |

### Step 1 — Content (`site.ts`)

Everything the visitor reads lives here, fully typed, so the editor tells you when something is missing.

- **Locale and currency:** `locale` (e.g. `es-AR`, `en-US`) drives number formatting and `<html lang>`; `currencySymbol` prefixes every amount. Amounts are plain numbers — formatting happens in `src/lib/format.ts`.
- **Store links:** `stores.appStore` and `stores.googlePlay` (currently `#`).
- **Theme color:** `themeColor` must match `--color-paper` in `global.css`.
- **Placeholder links:** footer links marked `placeholder: true` render muted with a "Pronto" tag and are not focusable. Give them a real `href` and remove the flag.
- **Sample content:** metrics, ratings, testimonials and prices are invented. Replace them with real data, then delete or edit `footer.disclaimer`.

### Step 2 — Design tokens (`global.css`)

The `@theme static` block is the whole visual system. Change values, not names.

| Token family | Examples | Notes |
| ------------ | -------- | ----- |
| Grounds and ink | `--color-paper`, `--color-surface`, `--color-ink` | Light, high-contrast base. |
| Brand | `--color-brand`, `--color-brand-strong`, `--color-brand-soft`, `--color-envelope-fill` | Use `-strong` for any brand-colored **text** so it passes WCAG AA. |
| Accent | `--color-accent`, `--color-accent-strong`, `--color-accent-soft` | Reserved for positive values (income, goals). |
| Neutrals | `--color-neutral-50` … `-800` | `600` and darker pass AA on paper. |
| Type | `--font-display`, `--font-sans`, `--text-display`, `--text-title`… | Fluid `clamp()` scale. |
| Shape and depth | `--radius-*`, `--shadow-*` | Layered soft shadows. |
| Motion | `--ease-out-expo`, `--duration-*` | Shared by every animation. |

**Swapping fonts:** install the Fontsource package (`npm i @fontsource-variable/<font>`), replace the two `@import` lines at the top of `global.css`, and update `--font-display` / `--font-sans`.

### Using real app screenshots

The phone mockups render HTML screens by default. To use a real screenshot, put the image in `src/assets/mockups/` and pass it to `PhoneMockup`:

```astro
---
import PhoneMockup from '../ui/PhoneMockup.astro';
import home from '../../assets/mockups/home.png';
---
<PhoneMockup screenshot={home} alt="Monthly overview screen" />
```

It is rendered with Astro's `<Picture />` (AVIF + WebP, lazy-loaded; pass `priority` for above-the-fold images).

## Project structure

```text
src/
├── content/site.ts          # All copy and brand data
├── styles/
│   ├── global.css           # Tokens (@theme), base styles, reveal animations
│   └── screens.css          # Styles for the in-phone app screens
├── layouts/BaseLayout.astro # <head>, meta tags, skip link
├── pages/index.astro        # Composes the sections in order
├── components/
│   ├── sections/            # Navbar, Hero, ProofStrip, Features, HowItWorks,
│   │                        # Testimonials, Pricing, Faq, FinalCta, Footer
│   └── ui/                  # Envelope, PhoneMockup, StoreBadges, BentoTile, Logo…
│       └── screens/         # HTML app screens shown inside the phone mockups
├── lib/format.ts            # Number and money formatting
└── assets/{mockups,icons}/  # Your screenshots and custom icons
```

To reorder or remove a section, edit `src/pages/index.astro`.

## What's built in

- **Zero JS where it isn't needed.** Only four small inline scripts: mobile menu, hero demo counter, animated metrics, and the scroll-reveal fallback. No UI framework.
- **Motion:** scroll-driven reveal animations with an IntersectionObserver fallback, a floating hero mockup with light parallax, and a one-time "log an expense in two taps" demo. Everything respects `prefers-reduced-motion`, and content stays visible when animations are unsupported.
- **Accessibility:** semantic landmarks, one `h1`, skip link, visible focus styles, an accessible hamburger menu (Escape closes it), and a native `<details>` FAQ accordion.
- **Icons:** Lucide via `astro-icon` (one consistent stroke set); store glyphs from Simple Icons.
- **Responsive:** mobile-first. The bento grid collapses to one column and the hero mockup moves below the headline.

## Design documentation

| File | Purpose |
| ---- | ------- |
| `DESIGN.md` | The visual system: tokens, type ramp, component rules. |
| `PRODUCT.md` | Product context the design was built for. |
| `CLAUDE.md` | Design and code rules for AI-assisted editing. |
| `referencias/` | Visual references used for direction (not published). |

## Before you launch

- [ ] Brand, copy and store links updated in `site.ts`
- [ ] Sample metrics, testimonials and prices replaced, disclaimer removed
- [ ] Placeholder footer links pointed at real pages
- [ ] Tokens, logo and favicon updated
- [ ] Domain set in `astro.config.mjs` (`site`) and `site.ts` (`url`)
- [ ] `npx astro check` and `npm run build` pass
