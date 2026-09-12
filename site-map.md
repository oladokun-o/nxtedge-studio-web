# Nxtedge Studio Website — Site Map (Phase 1)

**Scope:** Planning only. No routes, components, or schema created. This document reinterprets the proposed sitemap from the transformation brief as a concrete SvelteKit file-route tree, building on the Phase 0 findings in `website-audit.md`.

**Precondition (from the audit, §4 and §16):** every route below assumes Navbar, Footer, and the loader/cursor/`#smooth-wrapper`/`#smooth-content` chrome have first been promoted out of `+page.svelte` and into `src/routes/+layout.svelte`. Today that chrome is copy-pasted into the one existing page; adding a second route before this fix means the new route renders with no nav, no footer, and a broken `ScrollSmoother` (per audit §4/§8). This is a small, mechanical, low-risk change and should land before any route in this document is scaffolded.

> **Superseded:** the Solutions routing shown below (5 static routes) has been overridden by **Decision 5** in `decisions.md` — Solutions, Products, Industries, Insights, and Work are all now `[slug]` dynamic routes. The `/work` URL naming used below is confirmed as final. See `decisions.md` for the full routing shape.

---

## 1. Route tree overview

```
src/routes/
  +layout.svelte                        — promoted chrome: Navbar, Footer, loader, smooth-scroll wrapper
  +layout.server.ts                     — NEW: fetch studioSettings once, shared across all routes
  +page.svelte / +page.server.ts        — Home (existing, restructured per Phase 3)

  solutions/
    +page.svelte / +page.server.ts      — Solutions overview
    web-development/+page.svelte        — Solution detail
    mobile-applications/+page.svelte    — Solution detail
    business-systems/+page.svelte       — Solution detail
    ai-solutions/+page.svelte           — Solution detail
    cloud-infrastructure/+page.svelte   — Solution detail

  products/
    +page.svelte / +page.server.ts      — Products overview
    nxtflo/+page.svelte                 — Nxtflo product page
    [slug]/+page.svelte                 — Future products (dynamic, once >1 future product exists)

  work/
    +page.svelte / +page.server.ts      — Case study listing
    [slug]/+page.svelte / +page.server.ts — Case study detail

  industries/
    +page.svelte / +page.server.ts      — Industries listing
    [slug]/+page.svelte / +page.server.ts — Industry detail

  insights/
    +page.svelte / +page.server.ts      — Insights hub (filterable by category)
    [slug]/+page.svelte / +page.server.ts — Article detail

  about/
    +page.svelte / +page.server.ts      — About

  contact/
    +page.svelte / +page.server.ts      — Contact hub (journey picker)
    start-a-project/+page.svelte        — Journey: Start a Project
    discovery-call/+page.svelte         — Journey: Book a Discovery Call
    partnerships/+page.svelte           — Journey: Partnership Opportunities
    support/+page.svelte                — Journey: Support
    # "Explore Products" is not a new route — it's a CTA that links to /products

  sitemap.xml/+server.ts                — NEW: generated sitemap (audit §11 gap)
  robots.txt/+server.ts                 — NEW: generated robots.txt (audit §11 gap)
```

Two structural decisions embedded above, both worth flagging before Phase 1 sign-off:

1. **Solutions sub-pages are static top-level segments (`solutions/web-development/`), not `solutions/[slug]/`.** There are exactly five solutions and they're named in the brief; a static route per solution gives each one full control over its own layout/copy without fighting a generic template, and keeps URLs clean (`/solutions/ai-solutions` vs. `/solutions/ai-solutions-slug-from-cms`). If solutions later need to be CMS-authored and grow past five, this can migrate to `[slug]` without breaking the top-level `/solutions/` URL — only the child segments change.
2. **Work, Industries, and Insights are `[slug]` dynamic routes** because their content is inherently a growing, CMS-managed list (case studies, industries, articles) rather than a fixed enumerable set like Solutions. This matches the CMS structure discussed in the audit (§10) — these need real Sanity document types with slugs.

---

## 2. Route-by-route detail

### Home — `/`
- **File:** `src/routes/+page.svelte`, `+page.server.ts` (already exists, restructured content per Phase 3)
- **Data:** `studioSettingsQuery` (extended — see CMS note below), `studioServicesQuery` → reframed as **featured solutions** (top 3–4), a new **featured products** query (Nxtflo + any future product, flagged `featured: true`), a new **featured case studies** query (2–3 flagged `featured: true`), testimonials query (currently missing entirely per audit §5/§10).
- **Static or dynamic:** Static shell, CMS-driven content.

### Solutions overview — `/solutions`
- **File:** `src/routes/solutions/+page.svelte`, `+page.server.ts`
- **Data:** Either a small hardcoded array of the 5 solutions (mirrors the current `Services.svelte` fallback pattern) or a new `solution` Sanity document type if Solutions content needs to be CMS-editable without a deploy. Recommend a **hybrid**: solution metadata (title, one-liner, icon, order) lives in Sanity as a lightweight `solution` type since that's cheap and consistent with how `studioService` already works; full page body content (capabilities, tech stack, process) can start hardcoded per static route and move to Portable Text later if it needs frequent editing.
- **Static or dynamic:** Static route, hybrid content.

### Solution detail — `/solutions/web-development`, `/solutions/mobile-applications`, `/solutions/business-systems`, `/solutions/ai-solutions`, `/solutions/cloud-infrastructure`
- **File:** `src/routes/solutions/{slug}/+page.svelte` (5 static folders)
- **Data:** Per audit's proposed CMS Review, each page needs: Overview, Business problems solved, Capabilities, Technology stack, Process, Related case studies (query `work` filtered by `relatedSolutions` reference), Related products (query `product` filtered by `relatedSolutions` reference), CTA. This requires the `caseStudy`/`work` and `product` Sanity types to carry a `relatedSolutions` reference array back to a `solution` type — a relationship to design explicitly in the CMS Review phase, not improvised per-page.
- **Static or dynamic:** Static routes (5 known solutions), dynamic *content* via relational Sanity queries.

### Products overview — `/products`
- **File:** `src/routes/products/+page.svelte`, `+page.server.ts`
- **Data:** New `product` Sanity type, queried and ordered (`order asc`), same pattern as `studioProjectsQuery` today. Must support a `status` field (`live`, `beta`, `coming-soon`) so "Future Products" can be listed as teasers without full detail pages existing yet.
- **Static or dynamic:** Static route, CMS-driven list.

### Nxtflo — `/products/nxtflo`
- **File:** `src/routes/products/nxtflo/+page.svelte`
- **Data:** Could be a static route pulling a single `product` document by a known slug (`nxtflo`), or fully hardcoded initially since Nxtflo is the flagship and its page will likely need bespoke layout (product screenshots, roadmap, feature grid) that doesn't generalize well to a generic `[slug]/+page.svelte` template shared with lesser-defined future products. **Recommendation:** static route with hardcoded structure now, CMS-driven only for content that changes often (feature list, roadmap items, screenshots) — same hybrid logic as Solutions above.
- **Static or dynamic:** Static route (flagship gets its own template), CMS-driven for volatile fields only.

### Future products — `/products/[slug]`
- **File:** `src/routes/products/[slug]/+page.svelte`, `+page.server.ts`
- **Data:** `product` type by slug, `status != 'nxtflo'` (Nxtflo excluded since it owns a static route above — or, simpler, exclude by checking the slug router doesn't match `nxtflo` since SvelteKit resolves static routes before dynamic ones at the same depth).
- **Static or dynamic:** Dynamic — this is explicitly the "future products should plug into the same architecture" requirement from the brief. Don't build this route until a second product actually exists; building it against zero real content risks guessing the wrong shape.

### Work (case studies) — `/work`
- **File:** `src/routes/work/+page.svelte`, `+page.server.ts`
- **Data:** New `caseStudy` type (audit §10 confirms none exists yet — today's `project`/`studioProjectsQuery` is a much thinner shape: title, summary, cover image, tags, client, liveUrl). Recommend **evolving** `project` into `caseStudy` rather than running two parallel types, since `project` already has the `builtAtStudio` filter pattern that separates studio work from personal portfolio work in the shared Sanity dataset (audit §10) — that filter and pattern should carry forward, not get duplicated.
- **Static or dynamic:** Static listing route, CMS-driven grid/filter by industry/solution.

### Case study detail — `/work/[slug]`
- **File:** `src/routes/work/[slug]/+page.svelte`, `+page.server.ts`
- **Data:** `caseStudy` by slug — Business challenge, Solution, Technologies used, Timeline, Results, Images, Related solutions (reference), Related products (reference), Testimonials (reference or embedded).
- **Static or dynamic:** Dynamic — this is the collection the current Quench/Quench Point/Lescon Funds projects (per `CLAUDE.md`) will populate once approved.

### Industries listing — `/industries`
- **File:** `src/routes/industries/+page.svelte`, `+page.server.ts`
- **Data:** New `industry` type: name, slug, summary, icon, order.
- **Static or dynamic:** Static listing, CMS-driven.

### Industry detail — `/industries/[slug]`
- **File:** `src/routes/industries/[slug]/+page.svelte`, `+page.server.ts`
- **Data:** `industry` by slug — Industry challenges, How Nxtedge solves them, Relevant solutions (reference to `solution`), Relevant case studies (reference to `caseStudy`, ideally filtered `caseStudy.industry == this industry` rather than a manually maintained reference list, to avoid double-maintenance).
- **Static or dynamic:** Dynamic. Seven industries are named in the brief (Food & Beverage, Finance, Healthcare, Manufacturing, Education, Government, Professional Services) — worth deciding in Phase 1 review whether all seven launch at once or ship incrementally starting with Food & Beverage (directly relevant to the Quench Beverages reference client in `CLAUDE.md`).

### Insights hub — `/insights`
- **File:** `src/routes/insights/+page.svelte`, `+page.server.ts`
- **Data:** New `insight` type with a `category` field (enum: Technology, Engineering, AI, Business, Product Updates, Company News) and `author` reference. Listing route supports category filtering via query param (`/insights?category=engineering`) rather than separate routes per category, to avoid a route explosion for 6 categories that are really just one filtered dimension.
- **Static or dynamic:** Static route, CMS-driven, query-param filtered.

### Insight detail — `/insights/[slug]`
- **File:** `src/routes/insights/[slug]/+page.svelte`, `+page.server.ts`
- **Data:** `insight` by slug — full Portable Text body, `author` reference (new `author` type: name, role, avatar, bio), publish date, category, related insights (same category, excluding self).
- **Static or dynamic:** Dynamic.

### About — `/about`
- **File:** `src/routes/about/+page.svelte`, `+page.server.ts`
- **Data:** Extends `studioSettings` (Mission, Vision, Our Story fields) plus a new `teamMember` type (name, role, photo, bio, order) for Leadership. Culture/Technology/Values sections can be structured content blocks on `studioSettings` or their own lightweight types depending on how often they change — recommend starting as Portable Text fields on `studioSettings` (cheapest) and only splitting into dedicated types if the About page needs independent per-section editing workflows later.
- **Static or dynamic:** Static route, CMS-driven.

### Contact hub — `/contact`
- **File:** `src/routes/contact/+page.svelte`, `+page.server.ts`
- **Data:** `studioSettings` (email, phone, calendarLink — already exist). This route is primarily a journey picker (4 cards linking to the sub-routes below), not a form itself.
- **Static or dynamic:** Static.

### Contact journeys — `/contact/start-a-project`, `/contact/discovery-call`, `/contact/partnerships`, `/contact/support`
- **File:** One static route per journey.
- **Data:** `start-a-project` needs a real working form (audit §5/§14 flags today's newsletter/contact form as fully broken — POSTs to a nonexistent `contact.php`). This is the first form on the site that needs an actual SvelteKit `+page.server.ts` `actions` handler (form submission → email/webhook/Sanity `lead` document), which does not exist anywhere in the codebase today. `discovery-call` likely just embeds/links `calendarLink` from `studioSettings`. `partnerships` and `support` need their own lightweight forms or `mailto:` fallbacks initially.
- **Static or dynamic:** Static routes; `start-a-project` is the one genuinely new piece of *backend* functionality in this entire sitemap (everything else is read-only Sanity fetches).
- **Explicitly excluded as a route:** "Explore Products" from the brief's contact journey list is treated as a CTA linking to `/products`, not a fifth contact sub-route — it doesn't need its own page since `/products` already serves that intent.

### `sitemap.xml` and `robots.txt`
- **File:** `src/routes/sitemap.xml/+server.ts`, `src/routes/robots.txt/+server.ts`
- **Data:** Enumerates all static routes + all dynamic slugs (fetched from Sanity at request/build time).
- Flagged in audit §11 as missing entirely today; becomes far more important once 20+ indexable URLs exist instead of 1.

---

## 3. CMS types this sitemap requires (cross-reference only — full CMS Review is a separate phase)

New Sanity document types implied by the routes above: `solution`, `product`, `caseStudy` (evolution of `project`), `industry`, `insight`, `author`, `teamMember`. Extended existing types: `studioSettings` (Mission/Vision/Story fields). This list is provided here only so Phase 1 sign-off can sanity-check route/data alignment — the actual field-level schema and relationships belong in the CMS Review phase, and per audit §10, that phase is blocked until it's confirmed where Sanity schema is authored (no `sanity.config.ts` exists in this repo).

---

## 4. Sequencing note

This route tree is large — building all of it at once contradicts the brief's own working principle ("never redesign everything at once," "clean commit-sized changes"). Recommended build order once Phase 1 is approved: (1) layout promotion fix, (2) Home restructure (Phase 3), (3) Solutions, (4) Products/Nxtflo, (5) Work, (6) Industries, (7) Insights, (8) About, (9) Contact journeys — each as its own reviewed increment, matching the phase numbering already in the brief.

---

**End of site-map.md. Awaiting review alongside `navigation-plan.md` and `page-purpose.md` before Phase 1 is considered approved.**
