# Nxtedge Studio Website — Page Purpose (Phase 1)

**Scope:** Planning only. For every page in `site-map.md`, this document states who it's for, why it exists, and what action it should drive — the "why" behind the route tree and nav structure, so Phase 3 (Homepage) and every subsequent content phase inherit a consistent narrative rather than each page inventing its own voice.

The brief's homepage question set — **Who are we? What do we solve? How do we solve it? Why trust us? What should visitors do next?** — is used below as the throughline for the whole site, not just the homepage: every page answers a subset of those five questions for a specific audience and specific intent, and the homepage's job is to answer all five briefly and route visitors to the page that answers the one they care about most deeply.

**Positioning constraint that applies to every page below:** Nxtedge Studio is a technology company that designs, engineers, and scales digital products — broader than AI, not a marketing agency, not an AI-only company, not a generic SaaS vendor. Where a page could easily overweight AI/Nxtflo relative to the rest of the offering (Products overview, AI Solutions detail, Homepage), that risk is called out explicitly.

---

## Home — `/`
**Who:** First-time visitors from any source — search, referral, LinkedIn, a cold intro. The widest, least-qualified audience on the site.
**Why it exists:** Answers all five brief questions briefly, then routes. It is the site's dispatcher, not a destination in itself — nobody should read the whole homepage and consider themselves informed; they should read enough to know which of Solutions/Products/Work/Industries answers their actual question, and click through.
**Drives:** A branching decision, not a single conversion. Primary paths out: "Start a Project" CTA (ready-to-engage visitors), "Explore Products"/Nxtflo (product-curious visitors), a case study click (skeptical/evaluating visitors who want proof before either).

## Solutions overview — `/solutions`
**Who:** Visitors who know they have a technical problem (a system to build, a process to digitize) but haven't decided who should build it, and want to see the breadth of what Nxtedge can do before committing to a conversation.
**Why it exists:** Answers "What do we solve?" and "How do we solve it?" at a category level. This page is the direct replacement for the old "Services" section (audit §5, `Services.svelte`) — same underlying intent (list what we do), reframed from a service-provider menu to a capability set that reads like an engineering org's practice areas, not an agency's price list.
**Drives:** Click-through to the specific solution matching the visitor's need, or to a related case study if they want proof before reading capability copy.

## Solution detail (Web Development, Mobile Applications, Business Systems, AI Solutions, Cloud & Infrastructure) — `/solutions/{slug}`
**Who:** A visitor who has already self-selected into one category — e.g., someone specifically evaluating vendors for a mobile app build, not a generalist browsing.
**Why it exists:** Goes deep on "How do we solve it?" for one capability area — the business problems it solves, the capabilities and tech stack behind it, the delivery process. This is where technical credibility gets established in detail; a visitor who lands here via search (e.g., "business systems developer Nigeria") should be able to self-qualify Nxtedge without ever visiting the homepage.
**Drives:** "Start a Project" CTA scoped to this solution, plus related case studies (proof) and related products (e.g., an AI Solutions page should surface Nxtflo as an example of AI capability in production, not as the headline).
**Positioning note:** AI Solutions is one of five equal-weight pages here, not the flagship page — Nxtflo gets its dedicated Products treatment; this page is about the *capability*, general AI/ML engineering work for clients, distinct from the Nxtflo *product*.

## Products overview — `/products`
**Who:** Visitors specifically curious about what Nxtedge builds for itself, not what it builds for clients — a meaningfully different intent from Solutions (buying a service vs. evaluating a product/partner).
**Why it exists:** Establishes that Nxtedge doesn't just deliver client work — it builds and owns products, which is core evidence for "Why trust us?" (a studio that ships its own products under its own risk is a stronger signal of engineering maturity than one that only executes client briefs). Currently this distinction doesn't exist anywhere on the site.
**Drives:** Click-through to Nxtflo (the only live product at launch) and, once they exist, future products.
**Positioning note:** With only Nxtflo live at launch, this page must avoid reading as a thin single-product landing page dressed up as a "Products" section — copy should frame Nxtflo as the first of an ongoing product line, consistent with `site-map.md`'s "future products should plug into the same architecture" requirement, without overpromising specific unannounced products.

## Nxtflo — `/products/nxtflo`
**Who:** Two distinct audiences in one page: (1) prospective Nxtedge clients evaluating whether Nxtedge's delivery process is credible/mature, and (2) potential Nxtflo users/partners interested in the product itself, independent of hiring Nxtedge for custom work.
**Why it exists:** This is the flagship proof point for "How do we solve it?" and "Why trust us?" simultaneously — Nxtflo (an AI-powered operating system automating client journey from onboarding to delivery, per the brief) is Nxtedge demonstrating its own methodology as a shipped product, not just claiming one in a services pitch.
**Drives:** Two calls to action reflecting the dual audience — "Book a Discovery Call" (client-evaluation path) and a lighter product-interest capture (e.g., "Get Nxtflo updates" or "Explore Nxtflo," per the brief's future-Pricing/Roadmap sections) — should not force both audiences down one identical CTA.

## Future products — `/products/[slug]`
**Who:** Same dual-audience pattern as Nxtflo, for whatever ships next.
**Why it exists:** Placeholder in the IA only — per `site-map.md`, this route shouldn't be built until a second real product exists. Its purpose is architectural: proving the Products section scales past one entry without a redesign.
**Drives:** N/A until a real product populates it.

## Work (case studies) — `/work`
**Who:** Visitors in active evaluation mode — they've likely already read Solutions or Products and now want evidence, or they arrived directly wanting proof before reading any capability claims at all (a common pattern for more skeptical/senior buyers).
**Why it exists:** This is the primary answer to "Why trust us?" — replacing the current single-testimonial, thin-portfolio treatment (audit §5: `Portfolio.svelte` renders "Coming Soon" today with zero real projects loaded) with real, structured proof: named clients, named problems, named results. Per `CLAUDE.md`, this is where Quench, Quench Point, and the Lescon Funds projects will eventually appear once approved for public use.
**Drives:** Click-through to specific case studies matching the visitor's industry or solution interest; a filtered view by industry/solution (per `site-map.md`) helps a visitor from, say, financial services skip straight to relevant proof rather than scanning everything.

## Case study detail — `/work/[slug]`
**Who:** A visitor who has identified a specific project as relevant to their own situation (same industry, same type of problem).
**Why it exists:** Answers "How do we solve it?" and "Why trust us?" together, concretely: challenge → solution → tech → timeline → results, in a real client's words where possible (testimonials embedded here, not just on a generic testimonials carousel — the audit flags today's single hardcoded testimonial in `Testimonials.svelte` as disconnected from any actual project, which this structure fixes by design).
**Drives:** "Start a Project" CTA framed around this outcome ("Want results like this?"), plus related solutions/products so a visitor convinced by the case study can go deeper on the specific capability that produced it.

## Industries listing — `/industries`
**Who:** Visitors who think about vendor selection through an industry lens first ("who understands F&B distribution / who's built for regulated finance") rather than a technology-category lens.
**Why it exists:** A second entry point into the same underlying capability/proof content, organized by the axis some buyers actually search and think in. Directly serves the Quench Beverages relationship in `CLAUDE.md` — Food & Beverage is a real, currently-active industry vertical, not a speculative placeholder category.
**Drives:** Click-through to the visitor's specific industry.

## Industry detail — `/industries/[slug]`
**Who:** A visitor from a specific vertical (e.g., a finance operator evaluating loan-documentation systems, directly analogous to the real Lescon Funds Web App project in `CLAUDE.md`).
**Why it exists:** Reframes the same underlying Solutions/Work content through industry-specific challenges and language, which converts better for buyers who don't self-identify with generic technology-category copy. Avoids duplicating content — pulls relevant solutions and relevant case studies by reference (per `site-map.md`'s CMS note) rather than re-authoring case study content per industry.
**Drives:** Click-through to relevant case studies (industry-specific proof) and relevant solutions, plus "Start a Project" framed with industry-specific language.

## Insights hub — `/insights`
**Who:** Visitors researching before they're ready to buy — technical peers, potential hires, journalists/analysts, and existing clients checking in on company news/product updates.
**Why it exists:** Supports "Why trust us?" indirectly (thought leadership as a credibility signal) and directly serves the brief's "Product Updates"/"Company News" categories, which is the natural home for Nxtflo announcements, Layer 2/3 roadmap progress (per `CLAUDE.md`'s broader vision), and general engineering credibility content — none of which has a home on the current single-page site at all.
**Drives:** Lower-intent than most other pages by design — the goal is repeat visits and shareability, not immediate conversion. Newsletter/subscribe capture (the current broken newsletter form in `Contact.svelte`, per audit §5/§14, is the natural mechanism here once fixed) is a more appropriate CTA than "Start a Project" for most Insights readers.

## Insight detail — `/insights/[slug]`
**Who:** Same as the hub, arriving via search, social share, or hub browsing for one specific article.
**Why it exists:** Individual content pieces need their own indexable URL and SEO surface (audit §11 flags that today's single-page site has exactly one indexable URL total) — this is a direct SEO/discoverability requirement, not just a content requirement.
**Drives:** Related insights (same category) to extend session depth; a soft CTA at the end (e.g., "Read more on [category]" or a light Contact nudge), not an aggressive sales CTA — matches the lower-intent nature of this page type.

## About — `/about`
**Who:** Visitors doing final-stage diligence before engaging (checking who's actually behind the company), and potential hires/partners evaluating Nxtedge as a place to work with or for.
**Why it exists:** Directly answers "Who are we?" in depth — Mission, Vision, Our Story, Leadership, Culture, Values, Careers. Per the brief, this explicitly moves beyond "generic agency messaging," which is a real gap today: the current `About.svelte` (audit §5) is mostly hardcoded placeholder content (a founder photo, four fabricated award/rating logos — Goodfirms, Clutch, Upwork, Behance — that don't reflect Nxtedge's actual credentials) rather than a real story.
**Drives:** Trust reinforcement more than direct conversion — secondary CTAs toward Careers (if hiring) or "Start a Project" for visitors who reached About specifically to validate the team before reaching out.

## Contact hub — `/contact`
**Who:** Visitors who already know they want to engage but aren't sure through which channel (project work, partnership, product interest, support).
**Why it exists:** Directly answers "What should visitors do next?" by making that decision explicit instead of funneling every visitor into one generic contact form — the brief specifically calls for guiding visitors toward the right journey rather than a basic form. Replaces today's single newsletter-adjacent contact block in `Contact.svelte`.
**Drives:** Selection of one of the four journey cards below; this page itself converts nothing — it routes.

## Start a Project — `/contact/start-a-project`
**Who:** A visitor ready to scope real work — the highest-intent, most valuable conversion point on the entire site.
**Why it exists:** This is the primary sales conversion path, and per `CLAUDE.md`'s broader vision, the eventual front door to the Layer 1 intake system (raw brief → AI-assisted structuring). The audit (§5/§14) confirms today's equivalent form is completely non-functional — it posts to a PHP endpoint (`contact.php`) that cannot exist on the current Netlify/SvelteKit stack. This page fixes a genuinely broken conversion path, not just an underdeveloped one.
**Drives:** Form submission → routed to the team (and eventually into the Nxtflo intake pipeline itself, per the brief's closing note that "these flows should eventually integrate directly with Nxtflo" — a meaningful long-term signal that this page's backend should be built with that integration in mind, not as a disposable contact-form implementation).

## Book a Discovery Call — `/contact/discovery-call`
**Who:** Visitors who want a conversation before committing to a written brief — typically earlier-stage than Start a Project visitors, or specifically Nxtflo-curious visitors from the product page.
**Why it exists:** Lower-friction alternative to a full project-scoping form; reuses the existing `calendarLink` field already modeled on `studioSettings` (audit §10 — this field already exists and is already wired into today's nav CTA fallback chain, just needs its own dedicated destination).
**Drives:** Calendar booking via the existing `calendarLink`.

## Partnership Opportunities — `/contact/partnerships`
**Who:** Other agencies, technology vendors, or potential co-delivery partners — not prospective clients. A distinct audience from every other Contact journey.
**Why it exists:** Per `CLAUDE.md`'s Broader Vision, Nxtedge intends to eventually productize its internal pipeline system "for other agencies/freelancers" — a partnerships channel is directly relevant to that future direction, not a generic "we also do partnerships" filler page.
**Drives:** A lighter-weight inquiry form or direct email, since partnership conversations are typically relationship-initiated rather than form-driven at this stage of the company.

## Support — `/contact/support`
**Who:** Existing clients (e.g., Quench, Lescon Funds) with an active project or delivered product needing assistance — not prospective visitors at all.
**Why it exists:** Separates existing-client support traffic from new-business traffic, which today's single contact form conflates entirely. Matters increasingly once real case-study clients are public and might reasonably look for a support channel on the same site that markets to prospects.
**Drives:** Routed support request — likely the simplest of the four journeys initially (an email/ticket destination), not a complex form.

---

## Cross-cutting notes

- **Positioning discipline:** across every page above, AI is mentioned specifically where it's structurally relevant (AI Solutions detail, Nxtflo) and nowhere else by default — Home, Solutions overview, Products overview, About, and Work should read as a technology company's site first, with AI as one demonstrated capability among several, matching the brief's explicit instruction that AI should never dominate the messaging.
- **Trust is distributed, not concentrated on one page.** "Why trust us?" is answered incrementally across About (who we are), Work (what we've shipped), Products (what we've built and own), and Industry pages (domain-specific credibility) — no single "Why Nxtedge" page is proposed as a standalone route, consistent with the brief's Homepage phase treating "Why Nxtedge" as a homepage *section*, not a separate top-level page.

---

**End of page-purpose.md. This completes the Phase 1 deliverable set alongside `site-map.md` and `navigation-plan.md`. Awaiting review before proceeding to Phase 2 (Design System Review).**
