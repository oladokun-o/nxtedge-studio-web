# Nxtedge Studio Website — Approved Decisions Log

**Purpose:** Single source of truth for architectural decisions made during planning. Where this document contradicts an earlier "open question" in `website-audit.md`, `site-map.md`, `design-system-audit.md`, or `cms-review.md`, **this document wins** — those docs are left as-written (historical record of the reasoning that led here) rather than rewritten in place.

**Status:** Decisions only. No implementation has started as a result of this log. Phase 2.5 (Component Architecture) is the next planning deliverable; Phase 3 (Homepage) implementation still waits for that to be reviewed.

---

## Decision 1 — Design Token System (not a single accent color)

**Resolves:** `design-system-audit.md` §14 open question.

Rejected the idea of locking one accent color now. Instead the site is built on a full semantic token set from day one, so no component ever hardcodes a hex value — everything references a token name. This is deliberately decoupled from the eventual logo refresh: the palette can change later without touching component code, only the token definitions.

**Token set and approved values:**

| Token | Value | Source |
|---|---|---|
| `primary` | `#111827` | approved |
| `secondary` | `#4F46E5` | approved |
| `accent` | `#2563EB` | approved (expected to evolve post logo-refresh) |
| `success` | `#16A34A` | approved |
| `warning` | `#F59E0B` | approved |
| `danger` | `#DC2626` | approved |
| `surface` | see table below | **approved** |
| `background` | see table below | **approved** |
| `foreground` | see table below | **approved** |
| `border` | see table below | **approved** |
| `muted` | see table below | **approved** |

**Approved neutrals** (standard slate/gray scale, chosen to sit cleanly against `primary #111827`):

| Token | Light mode | Dark mode |
|---|---|---|
| `background` | `#FFFFFF` | `#0B0F19` |
| `surface` | `#F9FAFB` | `#111827` |
| `foreground` | `#111827` | `#F9FAFB` |
| `border` | `#E5E7EB` | `#1F2937` |
| `muted` | `#6B7280` | `#9CA3AF` |

**Rule going forward:** components consume `bg-primary`, `text-foreground`, `border-border`, etc. — never a raw hex, never an arbitrary Tailwind value like `bg-[#111827]` unless explicitly justified (see Decision 2 rules).

---

## Decision 2 — Tailwind Adopted as the Token System

**Resolves:** `design-system-audit.md` §10.1.

Approved without further debate. Tailwind (already an unused dependency — `tailwindcss ^4.2.0`, `@tailwindcss/vite ^4.2.0`) becomes the mechanism for Decision 1's token set and all spacing/layout going forward. Legacy template CSS is migrated gradually, not ripped out in one pass (per `design-system-audit.md`'s recommendation).

**Rules (as specified):**
- No arbitrary spacing values unless explicitly justified with a comment.
- No ad-hoc/random colors — every color reference goes through a semantic token (Decision 1's table).
- Design tokens are defined in one place and extended from there, not repeated per component.
- Everything references semantic tokens, never raw values.

**Implementation note for whoever picks this up (Phase 2.5/3, not now):** Tailwind v4 (the version installed here) is CSS-first by default — tokens are normally declared via an `@theme` block directly in `src/app.css`, not a `tailwind.config.ts` JS file the way Tailwind v3 worked. A JS config is still supported if there's a reason to prefer it (editor plugin behavior, sharing config programmatically), but the idiomatic v4 path is CSS-native `@theme { --color-primary: #111827; ... }`. This needs a one-line decision when implementation starts; noted here so it isn't defaulted into the v3 pattern by habit.

---

## Decision 3 — Motion Stack Simplified

**Resolves:** `design-system-audit.md` §10.2.

Approved as recommended.

**Remove:** jQuery, WOW.js, the custom-cursor script, `ScrollSmoother`.
**Keep:** GSAP core + `ScrollTrigger`.
**Everything else:** native Svelte transitions/animations (`svelte/transition`, `svelte/animate`) and Svelte actions where scroll-triggered behavior is still needed.

This directly unblocks the multi-route navigation from Decision 5 — the current stack (per `website-audit.md` §8) has no route-change lifecycle at all, so this isn't just a cleanup, it's a correctness fix that has to happen before real routing ships.

Actual removal of `common_scripts.js`/`scripts.js` code and the `<script>` tags in `app.html` is implementation work, not done yet — tracked for Phase 3 (or as a prerequisite mechanical step before it, alongside the layout-promotion fix from `site-map.md`'s precondition).

---

## Decision 4 — CMS: Fully Isolated Sanity Project (amended, stronger than originally scoped)

**Resolves:** `cms-review.md` §0/§6, and supersedes its working assumption.

**Important correction from the user:** the site must **not** continue sharing a Sanity project/dataset with `oladokun.me`. `cms-review.md` was written against the current reality (shared project `6iounp1w`, documents disambiguated by flags like `builtAtStudio`) and proposed *logical* isolation within that shared dataset. That is now explicitly rejected — the target is a **net-new, fully separate Sanity project** dedicated to Nxtedge Studio, with its own project ID and dataset, sharing nothing with the personal site.

**What stays true from the original decision:**
- Don't touch the current production dataset.
- Schema design proceeds now, on paper (`cms-review.md`'s 11 collection specs are still the right design work — they just target a new project instead of a namespaced corner of the old one).
- No live migration until reviewed and approved.
- Treat CMS cutover as its own phase, sequenced independently of the website routing/component work.

**Action item — assigned to the user:** the user will create the new Sanity project themselves via sanity.io/manage (under a Nxtedge-specific account/org, separate from `oladokun.me`) and hand over the new project ID + dataset name when ready. Until then, this stays a paper design — `cms-review.md`'s 11 collection specs are ready to implement the moment a project ID exists. Does **not** block Phase 2.5 or Phase 3 (routing/components/design work don't depend on the CMS being live yet — components consume typed data regardless of source).

---

## Decision 5 — Dynamic `[slug]` Routing

**Resolves:** the routing open question in `site-map.md` §2 (Solutions) and §4.

Approved as recommended, overriding `site-map.md`'s originally-proposed 5 static routes for Solutions.

**Final routing shape:**
```
/solutions/[slug]
/products/[slug]
/industries/[slug]
/insights/[slug]
/work/[slug]
```

All of these become CMS-driven — a single dynamic route template per pillar, populated from the corresponding Sanity collection (`solution`, `product`, `industry`, `insight`, `caseStudy` per `cms-review.md`), rather than one static route file per item. The homepage becomes fully CMS-driven as a consequence — no hardcoded per-solution or per-product sections.

**URL naming — resolved:** `/work` confirmed (matches the brief's original pillar naming and both already-approved Phase 1 docs). The `caseStudy` name stays as the CMS/content-type name only — it does not need to match the URL segment, and doesn't in this case.

---

## Addition — Phase 2.5: Component Architecture

Inserted between Phase 2 (Design System) and Phase 3 (Homepage), per the user's explicit request. Deliverable: `component-architecture.md` — the full reusable-component inventory, folder structure, and composition rules, so Phase 3 builds pages out of a defined library instead of introducing bespoke one-off sections per page. See that document for the actual inventory.

---

## Approved so far (recap)

- ✅ Design token system (Decision 1) — all 11 tokens confirmed (6 brand + 5 neutrals)
- ✅ Tailwind adoption (Decision 2)
- ✅ Motion stack simplification (Decision 3)
- ✅ CMS schema redesign, isolated project, no production migration yet (Decision 4) — user is creating the new Sanity project and will provide the project ID; not blocking
- ✅ Dynamic `[slug]` routing (Decision 5), URL naming confirmed as `/work`
- ✅ Phase 2.5 (Component Architecture) added to the roadmap, first draft delivered as `component-architecture.md`

**Still not started:** any code. `component-architecture.md` is ready for review; Phase 3 (Homepage) is next once that's approved.
