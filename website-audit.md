# Nxtedge Studio Website — Architectural Audit (Phase 0)

**Date:** 2026-07-16
**Scope:** Full repository inspection — no code changes made. This document is the deliverable for Phase 0 of the "Digital Agency → Technology Company" transformation.

---

## 1. Executive Summary

The current site is a **single-page SvelteKit application** wrapped around a **third-party HTML/CSS/JS agency template** ("NxtEdge Studio" theme by Uithemez, ThemeForest). SvelteKit owns routing, data-loading, and component composition; the template owns almost everything visual — layout, typography, spacing, color, motion — via global CSS and jQuery/GSAP scripts loaded directly in `app.html`.

This is a legitimate and common way to ship a v1 agency site fast. It is **not** a foundation that can absorb the roadmap in the transformation brief (Solutions, Products, Work, Industries, Insights, About, Contact as first-class routed sections; a Products/Nxtflo detail page; case studies; industry pages; a content hub) without significant structural change. The template is built for **one page** and a handful of static inner pages (`_legacy/*.html`) that were never ported to Svelte. There is currently no multi-route architecture, no design token system, no component variant system, and no CMS schema for anything beyond `studioSettings`, `studioService`, and `project`.

The good news: the CMS-integration seam (`$lib/sanity`) and the component decomposition (`Hero`, `About`, `Portfolio`, `Services`, `Contact`, etc.) are clean enough to extend rather than throw away. The bad news: the visual system underneath them is a monolithic, unmodifiable third-party stylesheet, which is the single biggest constraint on Phase 2 (Design System) and everything after it.

---

## 2. Folder Structure

```
src/
  app.css                  — intentionally empty (styling lives in /static)
  app.html                 — hardcodes ALL <link>/<script> tags for the template + fonts
  lib/
    components/            — 8 flat Svelte components, no subfolders, no variants
    sanity/                — client.ts, image.ts, queries.ts
    types/                 — sanity.ts (hand-written types, no generated schema)
  routes/
    +layout.svelte         — imports app.css only, renders {@render children()}
    +page.server.ts        — single load function, 3 parallel Sanity fetches
    +page.svelte           — the entire site, one route

static/                    — served as-is; duplicate of _legacy/assets + _legacy/common (27MB)
_legacy/                   — original ThemeForest template, untouched, 11 HTML pages
```

**Observations**

- **One route.** `src/routes/` has exactly one page (`+page.svelte`). There is no `routes/solutions/`, `routes/products/`, `routes/work/`, etc. Every "page" in the current site is an anchor-scrolled `<section id="...">` within the single page (`#about`, `#work`, `#services`, `#contact`). This is the single biggest structural gap relative to the proposed sitemap (Phase 1), which requires real routes with their own SEO metadata, layouts, and data loads.
- **`_legacy/` is 100% duplicated inside `static/`.** Every file in `_legacy/assets/`, `_legacy/common/`, and the CSS/JS therein has a byte-identical copy under `static/assets/` and `static/common/`. `_legacy/` also contains 10 full HTML pages (`about.html`, `services.html`, `portfolio.html`, `pricing.html`, `faqs.html`, `contact.html`, `blog-*.html`, `project-details.html`, `service-details.html`) that are **not used anywhere** in the SvelteKit app — dead reference material that inflates the repo and could confuse future contributors about what's "live."
- **No component subfolders.** `src/lib/components/` is flat: `About`, `Contact`, `Footer.svelte` (dead — see §5), `Hero`, `Navbar`, `Portfolio`, `SEO`, `Services`, `Testimonials`. There's no `ui/` primitives folder (Button, Card, Badge, Container), so every component reimplements markup/classes from the template ad hoc rather than composing shared primitives.
- **No `lib/config` or `lib/content` layer.** Nav links, fallback copy, and icon maps are hardcoded inline in each component (e.g., `Navbar.svelte:10-15`, `Services.svelte:9-20`). There's no single source of truth for site navigation, which matters a lot once navigation grows from 4 anchor links to a multi-level Solutions/Products mega-menu.

---

## 3. Routing

- **Framework:** SvelteKit 2 with `@sveltejs/adapter-netlify` (`edge: false, split: false` — standard Netlify Functions SSR, not edge).
- **Current routes:** `/` only. `+page.server.ts` runs one `load` that fires three GROQ queries in parallel via `Promise.all` and returns `{ settings, services, projects }` to `+page.svelte`.
- **No dynamic routes, no route groups, no nested layouts.** There's a single root `+layout.svelte` that does nothing but import global CSS and render children — it doesn't carry shared chrome (e.g., Navbar/Footer aren't in the layout; they're rendered inside `+page.svelte` itself, meaning if a second route is added today, it would render with no nav/footer at all).
- **No error page (`+error.svelte`), no loading state, no 404 handling beyond SvelteKit defaults.**

**Implication for Phase 1:** Moving to a real sitemap (`/solutions`, `/products/nxtflo`, `/work/[slug]`, `/industries/[slug]`, `/insights/[slug]`, `/about`, `/contact`) requires: promoting Navbar/Footer into `+layout.svelte`, converting anchor-scroll nav links into real `href`s, and building a route per top-level pillar plus dynamic `[slug]` routes for Work/Insights/Industries detail pages. This is the correct SvelteKit-idiomatic path and is low-risk — it doesn't require touching the visual system, just restructuring where components render.

---

## 4. Layouts

- `+layout.svelte` is minimal by design (9 lines) — it's not doing layout work at all right now, just CSS import + slot.
- Global chrome (loader overlay, custom cursor, scroll-progress button, `#smooth-wrapper`/`#smooth-content` GSAP ScrollSmoother scaffolding) lives directly in `+page.svelte` (lines 26–52, 57–58, 96–97), not in the layout. This is template markup that GSAP's `ScrollSmoother.create()` (in `common_scripts.js:139-142`) expects to find by ID on every page — if it isn't present on a new route, smooth scroll silently breaks for that route.
- **This is the most important single fix before adding routes**: the loader/cursor/progress-button/smooth-scroll wrapper markup needs to move into `+layout.svelte` so every future route gets it automatically, instead of being copy-pasted per page.

---

## 5. Reusable Components — Inventory & Issues

| Component | Purpose | Notes |
|---|---|---|
| `SEO.svelte` | `<svelte:head>` title/description/OG tags | Good pattern, reusable. Currently only invoked once from `+page.svelte`; will need per-route usage once routes exist. No `twitter:image`, no canonical URL, no JSON-LD. |
| `Navbar.svelte` | Nav + off-canvas mobile menu | Nav links hardcoded array of 4 anchors (`Home/Studio/Works/Services`). Renders the logo/social markup **twice** (top nav + off-canvas duplicate, lines 24-29 and 88-93) — same data, two independent templates. |
| `Hero.svelte` | Header/hero section | Uses `{@html settings.heroHeading}` (line 17) — raw HTML injection from CMS. Not currently a security issue since only trusted editors write to Sanity, but worth flagging as technical debt once the CMS is opened to more contributors. |
| `About.svelte` | "Intro" section: USPs, founder blurb, brand/award logos | Founder image (`/assets/imgs/intro/f1.jpg`) and all 4 "brand/award" logos + captions (Goodfirms, Clutch, Upwork, Behance ratings) are **fully hardcoded placeholder content**, not CMS-driven, and don't reflect Nxtedge Studio's actual credentials. |
| `Portfolio.svelte` | Work/projects swiper | Only component using Sanity images with `.width()/.height()` + `loading="lazy"`. Well-built relative to its siblings. Placeholder branch ("Coming Soon") duplicates ~15 lines of near-identical markup from the data branch — could be one loop over `projects.length ? projects : [placeholder]`. |
| `Services.svelte` | Services list | Fallback array + `iconMap` hardcoded in-component. Icon paths are relative (`../common/imgs/...`) while everywhere else in the codebase uses root-absolute (`/common/imgs/...`) — **this is a live bug**: relative to the compiled route the icons will 404 (works from `/` by accident, would break under any nested route). |
| `Testimonials.svelte` | Testimonial carousel | **Zero props, zero CMS wiring** — 100% static single testimonial ("Satisfied Client", generic quote). Not connected to `$lib/sanity` at all despite a `studioService`/`studioProject`-style query being trivial to add. |
| `Contact.svelte` | Footer + contact/newsletter | Newsletter form has no `action`/`on:submit` handler — it's decorative HTML only. `common_scripts.js:384-407` wires `#contact-form` to POST to `contact.php`, a PHP endpoint that **cannot exist** on a Netlify/SvelteKit deployment — this handler is dead/broken code carried over from the template. |
| `Footer.svelte` | **Unused dead file** — `Contact.svelte` implements the real `<footer>`. `Footer.svelte` is never imported anywhere in `src/`. | Delete or repurpose. |

**Duplicated components / patterns**

1. Logo + social icon markup duplicated between `Navbar`'s top bar and its off-canvas menu (same conditional logic, copy-pasted).
2. Portfolio's "real data" and "placeholder" swiper markup are duplicated instead of unified behind one data array.
3. Every component repeats the same `settings?.field ?? 'hardcoded fallback'` pattern inline. There's no shared `withFallback()` helper or centralized default-content object — six components each own their own copy of "what to show when Sanity is empty."
4. Icon references are split between two conventions (`iconMap` object in `Services.svelte` vs. inline `<img src="/common/imgs/icons/...">` everywhere else) with no shared `Icon.svelte` component.

**Unnecessary abstractions:** None found that are *over*-engineered — if anything the codebase is under-abstracted (see above). No premature generalization to walk back.

---

## 6. Design System

- **No design tokens.** Grepped `static/common/css/common_style.css` and `static/assets/css/home2-style.css` for `:root` / CSS custom properties — **zero matches**. Every color, spacing value, and font-size is a hardcoded literal scattered across ~3,350 lines of CSS (`common_style.css`: 2,481 lines, `home2-style.css`: 874 lines) plus another 2,112 lines in `inner_pages.css` (currently unused by the live site but still shipped to `static/`).
- **No Tailwind usage despite being a dependency.** `package.json` lists `tailwindcss` and `@tailwindcss/vite` as devDependencies and `svelte.config.js`/`vite.config.ts` don't wire up any Tailwind plugin usage in components — `src/app.css` is literally two comment lines saying styling is deferred to the template CSS. Tailwind is installed but **not actually used**, which is either leftover scaffolding from an earlier direction or an unfinished migration.
- **Typography:** Two families — `"Playfair Display", serif` (used for accent/display text via `.play-font`, headings) and `"Inter", sans-serif` (body, loaded from Google Fonts in `app.html:15-16`). No documented type scale; font-sizes are set ad hoc throughout the CSS rather than via a small number of heading/body utility classes.
- **Buttons:** `.butn` family with modifiers (`.butn-bord`, `.butn-bg`, `.butn-rounded`, `.butn-md`) — this is the closest thing to a real design-system primitive in the codebase and is reasonably consistent across components. Good candidate to formalize into a `Button.svelte` component in Phase 2.
- **Color:** No palette defined anywhere as tokens — colors are embedded per-selector in the CSS. Cannot currently answer "what is our brand blue" without grepping hex codes.
- **Icons:** Font Awesome (`fontawesome-all.min.css`, full kit) is loaded globally for a handful of glyphs (chevrons, social icons), plus a handful of one-off inline SVGs (`common/imgs/icons/*.svg`) for service icons. Two icon systems for a handful of icons is redundant.
- **Motion:** GSAP (`ScrollSmoother`, `ScrollTrigger`, `SplitText`) + Swiper (carousels) + WOW.js (scroll-reveal via CSS classes) + a hand-rolled custom-cursor script — **four separate animation systems** loaded as global jQuery-era scripts, none of it Svelte-idiomatic (no Svelte transitions/actions used anywhere in `src/`). This is the largest "unnecessary abstraction / redundant tooling" finding in the audit: WOW.js and GSAP's ScrollTrigger solve overlapping "animate on scroll" problems simultaneously.

**Design system verdict:** There isn't one yet — there's a template stylesheet. Phase 2 will effectively be "extract tokens from 3,350 lines of legacy CSS and decide what survives," not "audit an existing system."

---

## 7. Spacing

No spacing scale exists as tokens or utility classes with semantic names (e.g., no `--space-4`, no Tailwind `p-4`). Spacing is expressed via one-off classes baked into the template (`.mt-40`, `.mb-70`, `.pt-100`, `.section-padding`) which *look* like a scale (multiples of 10) but are defined as literal pixel/rem rules per class in the CSS rather than derived from a single spacing unit. Functionally usable today, but not a real system — renaming or rebalancing spacing means editing raw CSS everywhere it's used.

---

## 8. Animations

Covered in detail in §6/Motion. Summary of what's live today, in `common_scripts.js` (515 lines) and `scripts.js` (73 lines):

- Preloader SVG wipe + timeline on load (`common_scripts.js:471-514`)
- Custom cursor follow + hover-distort effect (`common_scripts.js:279-339`)
- `ScrollSmoother` global smooth-scroll wrapper (`common_scripts.js:132-187`) — **critical dependency**: relies on `#smooth-wrapper`/`#smooth-content` DOM IDs existing in `+page.svelte`, not the layout (see §4).
- `SplitText`-based character/line reveal animations tied to `.js-title` / `.js-splittext-lines` classes
- Swiper carousels for testimonials and portfolio (2 separate instantiations, `common_scripts.js` + `scripts.js`, slightly different config — another small duplication)
- Scroll-to-top progress ring (`common_scripts.js:418-451`)
- WOW.js init for `.animated`/`wow` classes (largely redundant with ScrollTrigger, per above)

None of this is Svelte-aware — it's DOM-selector-based jQuery targeting classes that Svelte components happen to render. This works today because there's one page and it fully re-renders on load, but it will not survive SvelteKit client-side navigation between routes (GSAP/Swiper instances won't re-initialize on route change without explicit teardown/reinit logic, which doesn't exist). **This is a real architectural risk for Phase 1** — the moment there's more than one route with client-side navigation, this entire animation layer needs a lifecycle strategy (Svelte actions, `afterNavigate` hooks, or a full replacement with Svelte-native motion).

---

## 9. Navigation

- Current nav (`Navbar.svelte:10-15`) is 4 hardcoded anchor links (`Home #`, `Studio #about`, `Works #work`, `Services #services`) plus a `Contact Us` link only present in the off-canvas menu, not the top bar — inconsistent between the two nav surfaces.
- CTA button ("Start Project") links to `calendarLink` → `mailto:` → `#contact` in a fallback chain (`Navbar.svelte:43-46`) — reasonable defensive pattern, worth keeping.
- No mega-menu capability, no dropdown component exists in Svelte (the template's underlying CSS *does* have dropdown styles from the original multi-page theme — `common_scripts.js:39-49` handles `.dropdown`/`.dropdown-item` hover — but nothing in `src/` currently uses them). This is actually good news for Phase 1: the CSS/JS scaffolding for a dropdown-based Solutions/Products mega-menu likely already exists in the legacy template and can be adapted rather than built from scratch.

---

## 10. CMS (Sanity)

**What exists today** (`src/lib/sanity/queries.ts`, `src/lib/types/sanity.ts`):

| Document type | Fields |
|---|---|
| `studioSettings` (singleton) | siteTitle, tagline, heroHeading, heroBio, aboutHeading, aboutBody (Portable Text), email, phone, linkedIn, instagram, calendarLink, logo, ogImage, metaTitle, metaDescription |
| `studioService` | title, description, icon, tags, order |
| `project` (filtered `builtAtStudio == true`) | title, slug, summary, coverImage, tags, client, liveUrl, order |

**Key facts:**

- The Sanity **project is shared with `oladokun.me`** (per the code comment in `queries.ts:2` and `.env`/`.env.example`) — this is not a dedicated Nxtedge Studio Sanity project. `project` documents are filtered by a `builtAtStudio` boolean flag to distinguish studio work from personal portfolio work in the same dataset. **This is an important constraint for Phase 1/CMS Review**: adding new collections (Solutions, Products, Case Studies, Industries, Insights, Testimonials, Team, Partners, FAQs) means writing schema into a Studio Studio that isn't in this repo at all — there is no `sanity.config.ts`/schema folder anywhere in this codebase, meaning **schema authoring happens in a separate, currently-uninspected repository or Studio deployment.** The audit cannot assess CMS schema quality/relationships beyond what's inferable from these three GROQ queries, because the schema source isn't here. This should be explicitly flagged to the user before Phase 1 CMS design begins — either the Studio repo needs to be made available for inspection, or schema changes will be designed here and manually ported.
- `Testimonials.svelte` has no query at all despite `studioSettings`-style content being trivial to model — testimonials are currently 100% hardcoded.
- No `caseStudy`, `industry`, `technology`, `author`, `insight`, `faq`, `teamMember`, or `partner` types exist yet, confirming the CMS Review phase is a from-scratch schema design exercise, not a refactor.
- Image pipeline (`$lib/sanity/image.ts`) is minimal but correct: `imageUrlBuilder(client).image(source).auto('format')`, with per-usage `.width()/.height()` calls in consuming components. No `srcset`/responsive `<picture>` generation — every Sanity image ships a single fixed-size URL.

---

## 11. SEO

- `SEO.svelte` handles `<title>`, meta description, OG title/description/image, `twitter:card`. Reasonable base, but: no canonical `<link>`, no `twitter:image` (only `og:image` is set, and Twitter will usually fall back correctly, but it's not explicit), no `robots` meta, no structured data (JSON-LD) for Organization/LocalBusiness/Product.
- **No `robots.txt` and no `sitemap.xml`** anywhere in `static/` or generated at build time — confirmed via repo search. For a site about to add 20+ routes, this needs to exist before/alongside Phase 1 routing work (SvelteKit can generate both from a small `+server.ts`).
- Single-page architecture means today there is exactly one indexable URL (`/`) with one title/description for the entire site — every "page" in the proposed sitemap currently has no independent SEO surface. This is the SEO-side argument for Phase 1's real-routes work, not just a UX one.
- `app.html` loads Google Fonts via `<link>` (not self-hosted, not `font-display` controlled beyond the default swap param) — acceptable but a minor performance/perf-budget item.

---

## 12. Performance

- **`static/` is 27MB**, with `static/assets/imgs` alone at 25MB — all raw `.jpg`/`.png`, no `.webp`/`.avif`, no responsive `srcset` for any non-Sanity image (which is most images on the page today: hero background, about/founder photo, brand logos, testimonial avatars, portfolio placeholder images). Only Sanity-sourced images (via `urlFor`) get real image optimization (`auto('format')`, fixed width/height).
- `_legacy/` duplicates the entire 27MB again inside the repo (not shipped, since it's outside `static/`, but doubles repo size and clone time).
- `loading="lazy"` is used in exactly **one place** (`Portfolio.svelte:41`) — every other `<img>` in the codebase (hero, about, testimonials, footer logos, service icons) loads eagerly with no lazy-loading or explicit `width`/`height` attributes, which is a CLS (Cumulative Layout Shift) risk.
- Four independent animation/interaction libraries (jQuery + GSAP + Swiper + WOW.js) plus Font Awesome's full icon kit are loaded globally on every page load via blocking `<script>`/`<link>` tags in `app.html`, none of it code-split or deferred. This is a meaningful, measurable performance cost (bundle weight + main-thread work) that predates SvelteKit and won't improve without deliberately trimming or replacing the legacy script stack.
- No image CDN/format negotiation for static assets (Sanity images get this for free via the CDN; local static assets don't).
- No bundle analysis, no Lighthouse baseline currently captured in the repo — recommend capturing one before Phase 3 begins so improvements are measurable.

---

## 13. Accessibility

- **Zero `aria-*` attributes and zero explicit `role` attributes anywhere in `src/`** (confirmed via grep across all components and routes).
- 11 `<img>` tags across components use `alt=""` (mostly decorative icons/patterns — acceptable *if* intentional, but not verified case-by-case against WCAG decorative-image guidance).
- Off-canvas mobile menu (`Navbar.svelte`) has no focus trap, no `aria-expanded` on the toggle, no keyboard-Escape-to-close handling — it's implemented as pure CSS class toggling driven by jQuery click handlers, not as an accessible disclosure pattern.
- Custom cursor script (`common_scripts.js:279-307`) and scroll-hijacking `ScrollSmoother` are both known categories of accessibility risk (motion sensitivity, keyboard/screen-reader scroll behavior) with no `prefers-reduced-motion` handling found anywhere in the CSS or JS.
- Color contrast has not been audited (no tokens to check systematically; would require auditing literal hex values per component in context).
- No skip-to-content link.

This is a genuine gap area and should be an explicit line item in Phase 2 (Design System) rather than deferred — accessibility is far cheaper to bake into new components than to retrofit after Phases 3–10 ship new pages on the same patterns.

---

## 14. Technical Debt Summary

| Item | Severity | Notes |
|---|---|---|
| Single-route architecture | High | Blocks all of Phase 1+; needs resolving first |
| Loader/cursor/smooth-scroll markup lives in the page, not the layout | High | Will silently break on any new route added before this is fixed |
| No CMS schema source in this repo | High | Blocks CMS Review phase until clarified with the user |
| `contact-form` POSTs to nonexistent `contact.php` | High | Currently-broken functionality, not just debt — the newsletter/contact form does not work at all in production today |
| No design tokens (color/spacing/type) | High | Root cause of most Phase 2 work |
| Four overlapping animation libraries (jQuery/GSAP/Swiper/WOW) | Medium | Real perf + maintainability cost; needs a deliberate replace-or-consolidate decision |
| `Footer.svelte` dead/unused file | Low | Delete |
| `Services.svelte` relative icon paths (`../common/imgs/...`) | Medium | Latent bug, will 404 under nested routes |
| No `robots.txt`/`sitemap.xml` | Medium | Straightforward SvelteKit fix, sequence with Phase 1 |
| 25MB of unoptimized static images | Medium | Sequence with Phase 3+ as pages get rebuilt with new imagery anyway |
| No accessibility attributes anywhere | Medium-High | Bake into Phase 2 component standards rather than retrofit |
| `_legacy/` fully duplicated into `static/` | Low | Housekeeping; clarify whether `_legacy/` should be removed from the repo now that its only remaining value is as a reference during this transformation |
| Tailwind installed but unused | Low | Decide in Phase 2 whether Tailwind becomes the actual styling approach or gets removed as a dependency |
| Testimonials fully static / no CMS wiring | Low | Natural fit for the CMS Review phase's `testimonial` collection |

---

## 15. Strengths (worth preserving)

1. **Clean CMS integration seam.** `$lib/sanity/{client,image,queries}.ts` + `$lib/types/sanity.ts` is a small, well-factored pattern: typed queries, a single client, a single image URL builder. This scales fine to more document types and more routes — extend it, don't replace it.
2. **Consistent fallback pattern.** Every content component gracefully degrades to hardcoded placeholder copy when Sanity data is absent. The *pattern* is good even though it's currently duplicated per-component (see §5) — worth formalizing, not discarding.
3. **`+page.server.ts`'s parallel `Promise.all` data loading** is idiomatic SvelteKit and will extend cleanly to more queries per route.
4. **Svelte 5 runes are used correctly and consistently** (`$props()`, `$derived()`) across every component — no legacy Svelte 4 patterns to migrate.
5. **`SEO.svelte` is a solid, reusable primitive** — small, focused, ready to be called per-route once routing exists.
6. **The `.butn` button system** is the one part of the legacy CSS that's already behaving like a real design-system primitive (consistent modifiers, used consistently) — a good candidate to formalize first in Phase 2.
7. **TypeScript is used correctly throughout** — `PageServerLoad`, `PageData`, typed props on every component. No `any` found in the reviewed source.

---

## 16. Opportunities (for later phases, not to act on yet)

- Promote Navbar + Footer + the loader/cursor/smooth-scroll scaffolding into `+layout.svelte` — unblocks multi-route work with minimal risk, before Phase 1 routing begins.
- Introduce a small `lib/content/` or `lib/config/nav.ts` module as the single source of truth for navigation, replacing the hardcoded arrays duplicated across `Navbar.svelte`.
- Extract a handful of true primitives (`Button.svelte`, `Icon.svelte`, `Container.svelte`, `Card.svelte`) from the existing `.butn`/icon/card markup patterns already proven out in the current components — this is largely "wrap what already works," not a redesign.
- Decide, explicitly, whether the legacy jQuery/GSAP/Swiper/WOW stack is kept (rehomed into route-lifecycle-aware Svelte actions) or replaced with Svelte-native motion (`svelte/transition`, `svelte/animate`, or a lighter GSAP-only setup without jQuery/WOW). This decision gates a lot of Phase 2/3 implementation cost and should be made deliberately, not by default.
- Clarify where Sanity schema authoring lives (separate repo? Sanity Studio deployed elsewhere?) before CMS Review — this materially changes how that phase is scoped.

---

## 17. Open Questions for the User (before Phase 1)

1. Where does the Sanity Studio / schema definition live? Is it in a separate repo we should also inspect, or does schema get authored directly in the hosted Studio UI with no local source of truth?
2. Is `_legacy/` intended to stay in this repo as a permanent design reference, or should it be removed once this transformation is complete (it's currently fully duplicated into `static/`, doubling asset weight in version control)?
3. Given Tailwind is installed but unused, and the current styling is 100% legacy template CSS — is there an appetite to formally adopt Tailwind (or another token-based approach) as part of Phase 2, or should the design system be built by extracting/cleaning the existing CSS instead?
4. For the animation stack (jQuery/GSAP/Swiper/WOW): rehome as-is with route-lifecycle fixes, or treat this as a good moment to consolidate onto a smaller, Svelte-native motion approach given the "premium, editorial, enterprise-ready" brand direction calls for a more restrained motion language than a template dependent on 4 overlapping libraries?

---

**End of Phase 0 audit. Awaiting review and approval before proceeding to Phase 1 (Information Architecture).**
