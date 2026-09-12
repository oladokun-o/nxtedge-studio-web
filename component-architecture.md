# Nxtedge Studio Website — Component Architecture (Phase 2.5)

**Status:** Planning only. No components created, no folders scaffolded, no code changed. This is the reusable-building-block inventory that Phase 3 (Homepage) and every later page-building phase compose from, so that no page introduces a bespoke one-off section when an existing primitive would do.

**Builds on:** `website-audit.md` (current component inventory, §5), `design-system-audit.md` (tokens, buttons, cards, motion — Phase 2), `site-map.md` / `page-purpose.md` (every route this library has to serve — Phase 1), `cms-review.md` (the CMS types components will consume), and `decisions.md` (approved tokens, Tailwind, motion stack, dynamic routing).

**Principle:** every page in `site-map.md` should be assembled from the components below, in different combinations, with different CMS data. If a page needs a section that isn't in this catalog, that's a signal to either add a new reusable primitive here (if it'll recur) or reconsider the page (if it won't) — not to hand-roll markup inline the way every current component does.

---

## 1. Folder Structure

```
src/lib/components/
├── layout/
│   ├── Container.svelte        — max-width + horizontal padding wrapper, the one place page-width is defined
│   ├── Section.svelte           — vertical rhythm wrapper (padding-block token, optional bg/surface variant, optional id for anchor/breadcrumb targets)
│   ├── Grid.svelte              — CSS grid wrapper, column-count + gap driven by props/tokens
│   ├── Stack.svelte              — flex column wrapper for consistent vertical spacing between children
│   └── PageHeader.svelte         — the "top of an inner page" block: eyebrow, title, description, optional breadcrumbs slot
│
├── navigation/
│   ├── Navbar.svelte             — top bar shell (logo, primary links, CTA) — replaces current Navbar.svelte's top-bar half
│   ├── MegaMenu.svelte           — Solutions/Products dropdown panel, data-driven from lib/config/navigation.ts (per navigation-plan.md §2)
│   ├── MobileNav.svelte          — off-canvas menu — replaces current Navbar.svelte's off-canvas half
│   ├── Breadcrumbs.svelte        — per navigation-plan.md §5, used on every detail page
│   └── Footer.svelte             — real replacement for the currently-dead Footer.svelte / the footer markup embedded in Contact.svelte
│
├── hero/
│   ├── Hero.svelte               — standard centered/split hero, CMS-driven heading+bio, used on Home and most pillar overview pages
│   ├── HeroSplit.svelte          — two-column hero variant (copy + visual/screenshot), for Products/Nxtflo and case-study detail
│   └── HeroProduct.svelte        — product-specific hero with a status badge (e.g. "Flagship Product"), screenshot/mockup slot — Nxtflo and future products
│
├── ui/
│   ├── Button.svelte             — formalizes the existing `.butn` family (bord/bg/rounded/md modifiers) as one component with variant props
│   ├── Badge.svelte              — small pill/tag — category labels, "Flagship", industry tags, insight categories
│   ├── Card.svelte                — base card primitive (currently **does not exist anywhere** per design-system-audit.md §2) — surface, border, padding, optional hover state; every *Card below composes this
│   ├── Icon.svelte                — single icon component wrapping the icon set decided in design-system-audit.md §6 (replaces the split Font Awesome kit + ad hoc inline-SVG pattern)
│   ├── Avatar.svelte              — team member / testimonial author image, consistent sizing/fallback-initials
│   └── Accordion.svelte           — generic expand/collapse primitive; FAQ.svelte (below) is built on this, not a copy of it
│
├── marketing/
│   ├── SectionHeader.svelte      — eyebrow + heading + optional description + optional CTA link, used at the top of nearly every section (replaces the `.sec-head` pattern repeated inline in Portfolio.svelte/Services.svelte today)
│   ├── LogoCloud.svelte           — "Trusted by" / partner logos strip, consumes the new `partner` collection
│   ├── Stats.svelte                — the numbers row (today hardcoded "98% / 25+" in Hero.svelte) — made CMS-drivable, reused wherever credibility numbers appear
│   ├── CTA.svelte                  — full-width call-to-action band, used at the bottom of most pillar/detail pages and the homepage
│   ├── FeatureGrid.svelte         — icon + title + description grid, generic enough for Solutions capabilities, Product features, and About values
│   ├── BentoGrid.svelte            — asymmetric grid layout for homepage "Featured Solutions"/"Featured Products" per the homepage philosophy in the approval message
│   ├── Testimonial.svelte          — replaces the fully-static Testimonials.svelte, now consumes the new `testimonial` collection
│   ├── Timeline.svelte             — process steps ("How we work") and product roadmap, one component reused for both
│   ├── FAQ.svelte                  — built on ui/Accordion.svelte, consumes the new `faq` collection
│   ├── Pricing.svelte              — placeholder shell per the Products roadmap ("Pricing (future)" in the brief) — built now as a component contract, populated later
│   ├── ContactCTA.svelte           — the "Start a Project / Book a Call / Explore Products / Partnerships / Support" journey picker from page-purpose.md's Contact hub
│   └── Newsletter.svelte           — the subscribe form, rebuilt with a real submit handler (today's is decorative markup with no handler — see website-audit.md §5/§14)
│
├── solutions/
│   ├── SolutionCard.svelte        — single solution summary card (built on ui/Card.svelte), consumes `solution`
│   ├── SolutionGrid.svelte         — grid of SolutionCard, used on `/solutions` and homepage "Featured Solutions"
│   ├── CapabilityList.svelte       — checklist-style capability breakdown, used on `/solutions/[slug]`
│   └── TechStackRow.svelte          — row of technology badges, consumes `technology`, used on solution + case-study detail pages
│
├── products/
│   ├── ProductCard.svelte          — summary card for the Products overview grid, consumes `product`
│   ├── ProductHighlight.svelte      — larger feature-callout block for the homepage "Featured Products" section (Nxtflo gets top billing here)
│   ├── ScreenshotGallery.svelte     — product screenshots, used on `/products/[slug]`
│   └── RoadmapTimeline.svelte        — thin wrapper around marketing/Timeline.svelte scoped to product roadmap data
│
├── case-studies/
│   ├── CaseStudyCard.svelte         — summary card (built on ui/Card.svelte), consumes `caseStudy` — replaces Portfolio.svelte's inline swiper-slide markup
│   ├── CaseStudyGrid.svelte          — grid/carousel of CaseStudyCard, used on the Work/Case-Studies listing and homepage "Case Studies" section
│   ├── ChallengeSolutionBlock.svelte  — the challenge → solution narrative block on `/work/[slug]`
│   └── ResultsStats.svelte            — outcome metrics block, thin wrapper around marketing/Stats.svelte scoped to case-study results
│
└── shared/
    ├── SEO.svelte                   — kept as-is (already a clean, reusable primitive per website-audit.md §15) — moves here for folder consistency, no logic change
    ├── ScrollReveal.svelte (or a Svelte action) — the one sanctioned wrapper around GSAP ScrollTrigger post motion-consolidation (Decision 3), so scroll-in effects are applied declaratively instead of ad hoc jQuery selectors
    └── PortableTextRenderer.svelte   — thin wrapper around `@portabletext/svelte`'s `<PortableText>`, currently inlined directly in About.svelte — centralized so every CMS rich-text field renders consistently
```

---

## 2. Composition Rules

1. **Every component takes typed props via `$props()`**, matching the existing (correct) pattern already used throughout `src/lib/components/`. No new pattern introduced here — just applied consistently, including to primitives that don't exist yet.
2. **Fallback content is centralized, not duplicated.** Today, six components each own an inline `settings?.field ?? 'hardcoded copy'` pattern (per `website-audit.md` §5). Going forward, default/placeholder copy lives in one `src/lib/content/defaults.ts`-style module per section, and components consume `data ?? defaults.x` from a single place — so "what do we show before Sanity has real content" is auditable in one file, not six.
3. **No component reaches into global CSS classes from the legacy template.** Every new component under this tree is styled via Tailwind + the Decision-1 token set. Legacy `.butn`/`.sec-head`/etc. classes are superseded by `ui/Button.svelte`, `marketing/SectionHeader.svelte`, etc. — not extended.
4. **Cards are never bespoke.** `ui/Card.svelte` is the base primitive; `SolutionCard`, `ProductCard`, `CaseStudyCard` all compose it rather than each defining their own border/shadow/padding rules. This directly closes the "cards don't exist as a primitive" gap flagged in `design-system-audit.md` §2.
5. **One icon system.** Every component that needs an icon goes through `ui/Icon.svelte`, closing the split Font-Awesome-kit-plus-inline-SVG pattern flagged in `design-system-audit.md` §6.
6. **Motion is opt-in via `shared/ScrollReveal`, never a global selector.** Per Decision 3, nothing in this new component tree touches jQuery or a global class like `.js-title`/`.js-splittext-lines` the way `common_scripts.js` does today — scroll-triggered animation is a wrapper a component explicitly opts into.
7. **Section-level components own their own `<Section>` wrapper**; page files (`+page.svelte` per route) become thin composition lists — a sequence of section components with data passed in — not a place where markup is written directly. This is the mechanism that makes `page-purpose.md`'s "what should this page contain" answerable by reading the page file top-to-bottom.

---

## 3. Page → Component Composition Map

Cross-referencing every route in `site-map.md`:

| Route | Composed from |
|---|---|
| `/` (Home) | `hero/Hero`, `marketing/LogoCloud`, `marketing/BentoGrid` (Featured Solutions), `marketing/BentoGrid` or `products/ProductHighlight` (Featured Products), `marketing/FeatureGrid` (Why Nxtedge), `case-studies/CaseStudyGrid`, industry strip (new: reuse `solutions/SolutionGrid` pattern generically or a thin `industries/IndustryGrid`), `marketing/Timeline` (Process), `insights teaser` (reuse `case-studies/CaseStudyGrid`'s grid pattern generically — see open question below), `marketing/CTA` |
| `/solutions`, `/solutions/[slug]` | `layout/PageHeader`, `solutions/SolutionGrid` (overview) or `solutions/CapabilityList` + `solutions/TechStackRow` + `case-studies/CaseStudyGrid` (related) + `products/ProductCard` (related) (detail), `marketing/CTA` |
| `/products`, `/products/[slug]` | `layout/PageHeader`, `products/ProductCard` grid (overview) or `hero/HeroProduct` + `marketing/FeatureGrid` + `marketing/Stats` (benefits) + `products/ScreenshotGallery` + `products/RoadmapTimeline` + `marketing/Pricing` (detail) |
| `/work` (or `/case-studies`), `/work/[slug]` | `layout/PageHeader`, `case-studies/CaseStudyGrid` (listing) or `hero/HeroSplit` + `case-studies/ChallengeSolutionBlock` + `solutions/TechStackRow` + `case-studies/ResultsStats` + `marketing/Testimonial` + related `solutions/SolutionCard`/`products/ProductCard` (detail) |
| `/industries`, `/industries/[slug]` | `layout/PageHeader`, industry grid (thin, reuses `ui/Card`) (listing) or narrative block + `solutions/SolutionGrid` (filtered) + `case-studies/CaseStudyGrid` (filtered) (detail) |
| `/insights`, `/insights/[slug]` | `layout/PageHeader`, insight card grid (thin, reuses `ui/Card`) + category filter (listing) or `shared/PortableTextRenderer` article body + author `ui/Avatar` (detail) |
| `/about` | `layout/PageHeader`, `marketing/SectionHeader` × (Mission/Vision/Story), team grid (reuses `ui/Card` + `ui/Avatar`), `marketing/FeatureGrid` (Values), `marketing/Timeline` (Culture/Technology narrative if applicable) |
| `/contact`, `/contact/*` | `layout/PageHeader`, `marketing/ContactCTA` (journey picker), `marketing/Newsletter` |
| Global (every route via `+layout.svelte`) | `navigation/Navbar`, `navigation/MegaMenu`, `navigation/MobileNav`, `navigation/Footer`, `navigation/Breadcrumbs` (detail routes only) |

**Open question surfaced by this exercise:** three listing pages (Industries, Insights) don't yet have a dedicated `*Card`/`*Grid` component pair the way Solutions/Products/Case-Studies do — I've noted "thin, reuses `ui/Card`" above rather than inventing `IndustryCard.svelte`/`InsightCard.svelte` prematurely. Recommend deciding this when those two collections' fields are finalized (post `cms-review.md` §2.4/§2.7), since a generic `ui/Card` + slot may genuinely be enough and a dedicated component would be the "unnecessary abstraction" the brief explicitly warns against.

---

## 4. Migration Plan — Existing Components

| Current file | Disposition |
|---|---|
| `Footer.svelte` | **Delete.** Dead file, never imported (per `website-audit.md` §5). |
| `Navbar.svelte` | **Split** into `navigation/Navbar.svelte` + `navigation/MegaMenu.svelte` + `navigation/MobileNav.svelte`. Closes the duplicated logo/social markup between top-bar and off-canvas (audit §5 finding #1) since both will read from the same `navigation.ts` config instead of each hardcoding the link list. |
| `Hero.svelte` | **Becomes** `hero/Hero.svelte`, rebuilt on `layout/Section` + `marketing/Stats` instead of inline markup; the hardcoded "98%/25+" numbers move into CMS-or-defaults data consumed by `marketing/Stats`. |
| `About.svelte` | **Decomposed** — its USP row becomes `marketing/FeatureGrid`, its founder/body copy becomes `hero/HeroSplit` or a plain `marketing/SectionHeader` + `shared/PortableTextRenderer`, its "brand/award logos" block becomes `marketing/LogoCloud` fed by the new `partner` collection instead of the four hardcoded placeholder logos flagged in audit §5. |
| `Portfolio.svelte` | **Becomes** `case-studies/CaseStudyGrid` + `case-studies/CaseStudyCard`, consuming the new `caseStudy` collection instead of `project`; the duplicated "real data / placeholder" branches (audit §5 finding #2) collapse into one component with a single fallback array. |
| `Services.svelte` | **Becomes** `solutions/SolutionGrid` + `solutions/SolutionCard`, consuming `solution` instead of `studioService`; fixes the relative-path icon bug (audit §5, `../common/imgs/...`) as a side effect of routing icons through `ui/Icon.svelte`. |
| `Testimonials.svelte` | **Becomes** `marketing/Testimonial.svelte`, wired to the new `testimonial` collection instead of being fully static. |
| `Contact.svelte` | **Decomposed** into `navigation/Footer.svelte` (site-wide footer chrome) + `marketing/ContactCTA.svelte` (journey picker) + `marketing/Newsletter.svelte` (rebuilt with a real submit handler — today's posts nowhere functional, per audit §5/§14). |
| `SEO.svelte` | **Unchanged**, relocated to `shared/SEO.svelte`. |

---

## 5. Explicit Non-Goals (this phase)

- No component in this catalog is being built yet — this is the contract/inventory, not the implementation.
- No decision is made here about exact visual design (spacing values, card shadows, hover states) — that's Phase 3 execution against Decision 1/2's tokens, informed by the Aeline reference per the brand-direction brief.
- `Pricing.svelte` is scoped as an empty/placeholder-data contract only, matching the brief's "Pricing (future)" note for Products.
- Industries/Insights card components are deliberately left as an open decision (§3) rather than speculatively built.

---

## 6. Open Questions for Review

1. Does the Industries/Insights "thin `ui/Card` reuse" call in §3 match your intent, or do you want dedicated `IndustryCard`/`InsightCard` components scoped now instead of deferred?
2. `marketing/Pricing.svelte` — build the shell now (empty state, no real pricing data) or leave it out of Phase 2.5 entirely and add it only when Products pricing is actually defined?
3. ~~Confirm the `case-studies/` folder name vs. route naming~~ — **resolved.** The route is confirmed as `/work` (`decisions.md` Decision 5). The `case-studies/` component folder name is kept as-is since it maps to the `caseStudy` CMS type (per `cms-review.md`), not the URL — the two don't need to match, and this document already noted that possibility.

---

**Once reviewed, Phase 3 (Homepage) can begin — composing the homepage entirely from this catalog, per the homepage philosophy (8 questions, in order) from the approval message.**
