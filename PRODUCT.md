# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, in this order of importance for every surface:

1. **Visitors of the landing (the fictional app's prospects):** people who have never kept track of their money — or tried and gave up because spreadsheets and finance apps felt like work. They land on the page, often from a phone, and need to understand in under 5 seconds what the app does and decide whether to download it.
2. **Template buyers:** developers, studios and founders evaluating this landing as a sellable template. They judge whether it looks like a finished, real product (not a wireframe) and whether it is easy to rebrand.

## Product Purpose

AhorrAr is a **fictional** personal-finance mobile app (iOS + Android) used as sample content. The site is a static marketing landing page whose success is measured by App Store / Google Play badge clicks, and — as a template — by how convincingly it presents a polished product and how cheaply it can be rebranded.

## Positioning

**Simple budgeting for people who never kept their accounts.** Logging an expense takes two taps, categories are assigned automatically, and there is one clear monthly budget instead of dashboards full of charts. The promise is clarity with minimal effort — not investing, not bank aggregation, not shared finances.

## Operating Context

- Visitors arrive mostly on mobile; the decision ends in a store badge tap.
- Template buyers browse on desktop, inspect responsiveness, performance (Lighthouse) and code structure.

## Capabilities and Constraints

- Fictional app capabilities to present (sample, consistent with positioning): quick expense logging, automatic categorization, monthly budget, simple overview of where the money goes, savings goals. Anything beyond "simple budgeting" should not be claimed.
- Static site, no backend. All copy and brand data live in `src/content/site.ts`; rebranding must not require touching components.
- Inferred (not confirmed): copy language is Spanish for Argentina (`es-AR`), prices in ARS, given the brand name.

## Brand Commitments

- Name: **AhorrAr** (fictional). No logo yet.
- Design rules in `CLAUDE.md` are binding; visual references live in `/referencias` (match feel, never copy content, logos or brands).

## Evidence on Hand

None real. Testimonials, metrics, user counts, ratings and pricing plans are **invented sample content** by explicit decision: credible and coherent, fictional names, no photos of people. They are kept in `site.ts` so a buyer replaces them. Do not present them as verifiable facts beyond the landing itself (no fake press logos of real outlets, no real company names).

## Product Principles

1. Understandable in five seconds: the value proposition beats every other element.
2. Effortless over powerful: every claim reinforces "simple", never "advanced".
3. Finished, not sketched: every section must read as a real shipped product.
4. Rebrandable by design: content and tokens are data, components are generic.

## Accessibility & Inclusion

WCAG 2.1 AA (contrast, visible focus, alt text, accessible accordion and mobile menu); respect `prefers-reduced-motion`. Lighthouse ≥ 95 in all categories.
