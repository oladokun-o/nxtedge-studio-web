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

/*
  "The Problem" section (homepage, right after Hero) — mixes both references
  (assets/designs/): Web Hero's two-tier headline (bold statement + a larger
  reinforcing subline, see homepageProblemHeadline below) and Minimum Code's
  question-phrased card titles ("No tech team?", "Slow development?"). Own
  copy throughout — not reused verbatim from solutions.ts's businessProblems
  (same underlying real problems, different voice for this section).
*/
export const problemHeadline = {
  title: "You've outgrown how you're running things.",
  subtitle: 'The systems holding the business together are the same ones holding it back.'
};

/*
  Three lines drawn from Web Hero's copy (dated site losing to competitors, no
  time/team to maintain it, not knowing which changes move the needle), three
  from Minimum Code's (no tech team, unclear/blown budgets, breaking at scale)
  — translated into Nxtedge's real context, not the reference companies' own
  claims.
*/
export const commonChallenges: FeatureItem[] = [
  {
    title: 'Your site looks dated',
    description: "Buyers quietly go to competitors who look the part, and you don't even know you're losing them.",
    icon: 'code'
  },
  {
    title: 'No time or team to maintain it',
    description: "There's nobody in-house to keep it updated and performing, so it just sits there getting older.",
    icon: 'code'
  },
  {
    title: "You don't know what actually moves the needle",
    description: "You've tried things before, but you never really knew which changes brought in more enquiries.",
    icon: 'trending-up'
  },
  {
    title: 'No tech team to call on',
    description: "Every fix or feature waits on someone else's schedule, because there's no one in-house who can just do it.",
    icon: 'users'
  },
  {
    title: 'Past projects blew the budget',
    description: "Scopes crept, costs crept with them, and you never quite knew where the money went.",
    icon: 'shield'
  },
  {
    title: 'It broke down as you grew',
    description: 'What worked when you were five people falls apart at twenty, and nobody planned for that.',
    icon: 'layers'
  }
];

/*
  "Our Solution" section (homepage, right after The Problem) — mirrors Web
  Hero's two-tier headline AND their card structure: 3 parallel capability
  statements about what working with them is like, not a sequential
  step-1-then-2-then-3 funnel (which read as "work doesn't start for a
  while," per user feedback). Grounded in what's actually true for Nxtedge:
  company.md's "Nxtedge can remain involved after launch through support,
  maintenance and continued development," and the real retainer relationships
  already documented (assets/context/clients.md — Quench, TastebyWinnie).
*/
export const solutionHeadline = {
  title: "We start with what you've got.",
  subtitle: "Then we build it, keep shipping after launch, and stay on as your technical team if that's what you need."
};

export const solutionCapabilities: FeatureItem[] = [
  {
    title: 'We start with what you have',
    description: "A rough idea, a messy process, a system you've outgrown. That's enough to begin, not a blocker.",
    icon: 'sparkles'
  },
  {
    title: 'We keep shipping after launch',
    description: "We don't disappear at handoff. We stay close and keep improving the system as your business changes.",
    icon: 'trending-up'
  },
  {
    title: 'We can become your technical team',
    description: 'For the businesses that need it, we stay on as an ongoing partner: support, maintenance, and continued development.',
    icon: 'users'
  }
];

export const processSteps: ProcessStep[] = [
  {
    order: 1,
    title: 'Talk it through',
    description: 'One conversation. Your raw idea, however rough, is enough to start.'
  },
  {
    order: 2,
    title: 'Get a clear plan',
    description: 'We turn that conversation into a structured project scope.'
  },
  {
    order: 3,
    title: 'See the price upfront',
    description: "A straightforward proposal: what we're building, what it costs, and when."
  },
  {
    order: 4,
    title: 'Start shipping',
    description: 'We build, keep you in the loop, and deliver a working product, not just a handoff.'
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
    description: "We handle web and mobile development alongside physical infrastructure: networking, CCTV, the parts other studios don't touch.",
    icon: 'layers'
  },
  {
    title: 'Built on real delivery experience',
    description: 'Every solution we design is shaped by projects we have actually shipped and supported end to end.',
    icon: 'shield'
  },
  {
    title: 'AI where it earns its place',
    description: 'We use AI to make delivery faster and more structured, not as a marketing label.',
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
