import type {
  SolutionSummary,
  ProductSummary,
  CaseStudyTeaser,
  IndustrySummary,
  ProcessStep,
  InsightCategoryTeaser,
  FeatureItem,
  Stat,
  TechStripItem
} from '$lib/types/content';
import { solutionDetails } from './solutions';
import { productDetails } from './products';
import { caseStudyDetails } from './work';
import { industryDetails } from './industries';

/*
  Default homepage content — used until the new, isolated Sanity project
  (decisions.md Decision 4) exists and `solution`/`product`/`caseStudy`/`industry`/
  `insight` collections (cms-review.md) are real and queryable.

  Deliberately honest, not aspirational-to-the-point-of-fabricated:
  - Case studies are anonymized (no client names) — CLAUDE.md notes real portfolio
    details go live only once the client approves public use, and that hasn't
    happened yet for Quench/Lescon.
  - Industries lists only what current work actually demonstrates (Food & Beverage,
    Financial Services), not the full 7-industry aspirational list from the brief.
  - Stats are real/defensible, not the old template's fabricated "98%/25+".
  - Nxtflo is framed as in-development (per CLAUDE.md's build order), not live.
*/

// Derived from the full solution records (lib/content/solutions.ts) — one source
// of truth, not two hand-maintained lists that can drift out of sync.
export const solutions: SolutionSummary[] = solutionDetails.map(({ title, slug, category, summary, icon }) => ({
  title,
  slug,
  category,
  summary,
  icon
}));

// Derived from the full product/case-study/industry records — one source of
// truth (their respective lib/content/*.ts modules), not hand-duplicated here.
export const flagshipProduct: ProductSummary = productDetails.find((p) => p.slug === 'nxtflo')!;

export const caseStudies: CaseStudyTeaser[] = caseStudyDetails;

export const industries: IndustrySummary[] = industryDetails;

export const processSteps: ProcessStep[] = [
  {
    order: 1,
    title: 'Discovery',
    description: 'We start with a conversation — your raw idea, however rough, is enough to begin.'
  },
  {
    order: 2,
    title: 'Structuring & Scope',
    description: 'We turn that conversation into a clear, structured project scope.'
  },
  {
    order: 3,
    title: 'Proposal & Costing',
    description: "You get a straightforward proposal — what we're building, what it costs, and when."
  },
  {
    order: 4,
    title: 'Build & Delivery',
    description: 'We build, keep you in the loop, and deliver a working product — not just a handoff.'
  }
];

export const insightCategories: InsightCategoryTeaser[] = [
  { category: 'Engineering', description: 'How we build and ship.', icon: 'code' },
  { category: 'Artificial Intelligence', description: 'Where AI actually earns its place.', icon: 'sparkles' },
  { category: 'Business', description: 'Notes on running a technology studio.', icon: 'trending-up' },
  { category: 'Product Updates', description: 'What we\'re shipping, including Nxtflo.', icon: 'layers' }
];

export const whyNxtedge: FeatureItem[] = [
  {
    title: 'Full-stack, not just software',
    description: "We handle web and mobile development alongside physical infrastructure — networking, CCTV, the parts other studios don't touch.",
    icon: 'layers'
  },
  {
    title: 'Built on real delivery experience',
    description: 'Every solution we design is shaped by projects we have actually shipped and supported end to end.',
    icon: 'shield'
  },
  {
    title: 'AI where it earns its place',
    description: 'We use AI to make delivery faster and more structured — not as a marketing label.',
    icon: 'sparkles'
  },
  {
    title: 'A long-term technology partner',
    description: 'We are not a one-off vendor. We build the systems your business runs on, and we stay involved.',
    icon: 'users'
  }
];

export const heroStats: Stat[] = [
  { value: '4+', label: 'Systems delivered' },
  { value: '2', label: 'Industries served' }
];

// Real tools we actually build with — an honest substitute for a client-logo
// "Trusted By" strip, which we can't run yet (no client has signed off on public
// use of their name/logo — see the case-studies note above).
export const builtWith: TechStripItem[] = [
  { name: 'SvelteKit' },
  { name: 'Tailwind CSS' },
  { name: 'Sanity' },
  { name: 'Claude API' },
  { name: 'GSAP' },
  { name: 'Netlify' }
];
