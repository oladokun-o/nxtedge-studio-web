# Nxtedge Studio Website — Navigation Plan (Phase 1)

**Scope:** Planning only. No components or config files created. Builds on `site-map.md`'s route tree and the audit's navigation findings (`website-audit.md` §9): today's nav is 4 hardcoded anchor links in `Navbar.svelte:10-15`, inconsistent between the top bar and off-canvas menu, with dropdown CSS/JS already present in the legacy template (`common_scripts.js:39-49`) but unused in `src/`.

---

## 1. Primary navigation structure

Top-level items, left to right:

| Label | Type | Target |
|---|---|---|
| Solutions | Mega-menu | `/solutions` (label itself links to overview; menu reveals children) |
| Products | Mega-menu | `/products` (label itself links to overview; menu reveals children) |
| Work | Flat link | `/work` |
| Industries | Flat link | `/industries` |
| Insights | Flat link | `/insights` |
| About | Flat link | `/about` |

CTA (separate from the link list, right-aligned, existing `.butn.butn-rounded` treatment per audit §6): **"Start a Project"** → `/contact/start-a-project`, replacing today's `calendarLink → mailto → #contact` fallback chain in `Navbar.svelte:43-46`. That fallback *logic* is worth preserving conceptually (graceful degradation when CMS fields are empty) but should now degrade to `/contact` (the journey picker) rather than a bare `#contact` anchor, since `#contact` won't exist once Contact becomes its own route.

Contact itself is **not** a top-level nav item — it's reachable via the CTA and via the footer. This matches the brief's Contact phase treating it as a set of journeys rather than a single destination, and avoids a redundant "Contact" link competing with the "Start a Project" CTA for the same click.

### Solutions mega-menu contents
- Overview → `/solutions` (shown as a "View all Solutions" link, distinct from the 5 items below)
- Web Development → `/solutions/web-development`
- Mobile Applications → `/solutions/mobile-applications`
- Business Systems → `/solutions/business-systems`
- AI Solutions → `/solutions/ai-solutions`
- Cloud & Infrastructure → `/solutions/cloud-infrastructure`

Each item should carry a one-line descriptor (not just a label) — this is where the brand-direction requirement ("AI is a capability, not the headline") gets enforced structurally: AI Solutions sits as one of five equal-weight items, not first, not visually emphasized over the others.

### Products mega-menu contents
- Overview → `/products`
- Nxtflo → `/products/nxtflo` (visually distinguished as the flagship — e.g., a short "AI-powered operating system for client delivery" descriptor directly in the menu, not just a bare label)
- Future products, once they exist, append below Nxtflo. Until a second product is live, the menu shows Nxtflo plus a lightweight "More products coming soon" state rather than empty space — avoids the menu looking unfinished with only one entry.

---

## 2. Source of truth: `src/lib/config/navigation.ts`

Audit §5/§16 flags that nav data is currently duplicated: once as the top-bar link array, once again (independently) as the off-canvas menu markup in `Navbar.svelte`. A mega-menu makes this worse if not fixed first — there'd be a third copy for mega-menu contents.

**Recommendation:** introduce one config module, `src/lib/config/navigation.ts`, as the single source of truth, consumed by the Navbar top bar, the off-canvas mobile menu, the mega-menu panels, and the footer nav (§4 below) — four render surfaces, one data source. Shape (described, not implemented):

- An ordered list of primary nav items, each with: `label`, `href`, optional `children` (for Solutions/Products — each child carrying its own `label`, `href`, and optional short `description` for mega-menu use), and an optional `featured` slot (e.g., Products' mega-menu could feature a small Nxtflo preview card alongside the plain link list — a common enterprise-SaaS mega-menu pattern that fits the "premium, product-first" brand direction).
- A separate `ctaLink` object (label, href) — today's Start Project CTA logic, decoupled from the primary list since it renders differently (button, not a nav link).
- A separate `footerLinks` structure if the footer's grouping (per §4) doesn't map 1:1 onto the primary nav — likely won't, since footer needs Legal/Company groupings the header doesn't.

This directly replaces the two independent hardcoded arrays audit §5 found, and is a prerequisite for the mega-menu (can't cleanly build a 2-level menu on top of a flat `{ label, href }[]` without restructuring the data shape anyway — better to do it once, correctly).

---

## 3. Mobile / off-canvas navigation

Today's off-canvas pattern (`Navbar.svelte:62-123`) is a reasonable base: full-screen panel, close button, social links, contact info. Extending it for mega-menu content:

- Solutions and Products become **expandable accordion items** within the off-canvas panel (tap to reveal the 5/N children inline), not nested full-screen sub-panels — keeps the interaction model simple on mobile and reuses the legacy template's existing `.dmenu`/`.sub-menu` toggle CSS/JS already present in `common_scripts.js:117-125`, which today drives desktop dropdown submenus and is otherwise unused in the Svelte app.
- Work, Industries, Insights, About stay flat links, same as desktop.
- Keep the existing bottom block (logo, social icons, email/phone) — these already read from `settings` correctly and don't need to change.
- **Accessibility gap to close here, not defer** (audit §13 flags zero `aria-*` anywhere): the off-canvas toggle needs `aria-expanded` on the trigger, the panel needs a focus trap while open and Escape-to-close, and the new accordion items need `aria-expanded`/`aria-controls` on their toggles. This is called out explicitly because the mega-menu work is exactly the moment this debt compounds — better to build the new interactive nav pieces accessibly from the start than retrofit two nav systems (desktop mega-menu + mobile accordion) later.

---

## 4. Footer navigation

Today's footer (`Contact.svelte:65-77`) has 4 static columns (Work Inquiry, Follow Us, location, Links) plus a sub-footer with 4 anchor links (`Home/Works/Studio/Services`) that will break once those become real routes with different paths. Proposed restructure, same visual pattern (4-column grid), content updated to match the new IA:

| Column 1: Company | Column 2: Explore | Column 3: Resources | Column 4: Contact |
|---|---|---|---|
| About | Solutions | Insights | Work Inquiry (email/phone, from `studioSettings`) |
| Careers *(if/when About's Careers section exists)* | Products | Work | Book a Discovery Call |
| — | Industries | — | Social links |

Sub-footer bottom row: copyright (unchanged logic), legal links (Terms, Privacy — unchanged), and the same primary nav top-level items rendered flat (sourced from `navigation.ts`, not re-typed) for a redundant-but-conventional footer nav row.

---

## 5. Breadcrumbs (detail pages)

None of today's site has breadcrumbs (single page, nothing to trace back from). Once `/work/[slug]`, `/industries/[slug]`, `/insights/[slug]`, and `/solutions/{slug}` exist, each needs a lightweight trail:

- Case study: `Work / [Case Study Title]`
- Industry: `Industries / [Industry Name]`
- Insight: `Insights / [Category] / [Article Title]` (category included since Insights is the one hub with a meaningful sub-grouping — see `site-map.md` §"Insights hub")
- Solution: `Solutions / [Solution Name]`

Recommend a single generic `Breadcrumbs.svelte` component taking a `trail: { label, href }[]` prop, rendered from each detail route's own data (page title + static parent label) — not a new nav config, since breadcrumbs are page-specific, not global chrome. Semantic markup matters here specifically because of the accessibility gap noted in the audit: use an actual `<nav aria-label="Breadcrumb">` with an ordered list, not divs with separators, since it's one of the cheapest, highest-value a11y wins available in this phase.

---

## 6. CTA placement strategy

- **Primary CTA ("Start a Project")**: nav bar (desktop + mobile), repeated at the bottom of every major page template (Solutions detail, Product detail, Case study detail) as a closing CTA block, and on the Contact hub as one of the four journey cards. Consistent label and destination everywhere — no synonym drift ("Get in Touch" vs. "Start a Project" vs. "Let's Talk") across pages, which the current site already avoids and should keep avoiding.
- **Secondary CTAs**: contextual, one per page type — Solutions detail pages link to "Related products," Case study pages link to "Related solutions," Industry pages link to "Relevant case studies." These are content relationships (per `site-map.md` CMS notes), not nav items, and shouldn't be duplicated into the global nav.
- **Discovery Call CTA**: currently the `calendarLink` fallback embedded in the nav CTA chain (audit §9). Post-restructure, this becomes its own explicit journey (`/contact/discovery-call`) and its own CTA, surfaced primarily on Products/Nxtflo pages (a demo/discovery call is a more natural next step after reading about the flagship product than a generic "start a project" form) and on the Contact hub.

---

## 7. What this replaces / removes

- The current 4-item flat nav (`Home #`, `Studio #about`, `Works #work`, `Services #services`) is fully retired — none of these anchor targets exist once content moves to real routes.
- The inconsistency where "Contact Us" only appears in the off-canvas menu, not the top bar (audit §9), is resolved by *not* having Contact in the primary nav at all (see §1) — removes the inconsistency rather than fixing it in place.
- Duplicated logo/social markup between top bar and off-canvas (audit §5, item 1) is resolved as a side effect of both surfaces reading from the same `navigation.ts` + `settings` props, though the actual markup de-duplication (e.g., a shared `Logo.svelte`) is implementation detail for a later phase, not a navigation-plan decision.

---

**End of navigation-plan.md. Awaiting review alongside `site-map.md` and `page-purpose.md` before Phase 1 is considered approved.**
