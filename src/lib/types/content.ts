/*
  Homepage content shapes — deliberately plain (no Sanity image refs) since none of
  this is CMS-sourced yet. Field names mirror cms-review.md's proposed `solution` /
  `product` / `caseStudy` / `industry` / `insight` collections so swapping in real
  Sanity queries later (once the new isolated project exists — decisions.md
  Decision 4) is a data-source change, not a component rewrite.
*/

export interface SolutionSummary {
  title: string;
  slug: string;
  category: string;
  summary: string;
  icon: string;
}

export interface Capability {
  title: string;
  description: string;
}

export interface TechStackItem {
  name: string;
}

/*
  Full solution-detail shape — cms-review.md §2.1. `process` intentionally reuses
  the single global process (lib/content/homepage.ts's processSteps) rather than
  five fabricated per-solution processes; Nxtedge runs one delivery process, not
  five different ones.
*/
export interface SolutionDetail extends SolutionSummary {
  overview: string;
  businessProblems: string[];
  capabilities: Capability[];
  technologies: TechStackItem[];
  relatedProductSlugs: string[];
  cta: { label: string; href: string };
}

export interface ProductFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ProductSummary {
  title: string;
  slug: string;
  tagline: string;
  status: 'live' | 'beta' | 'coming-soon';
  description: string;
  features: ProductFeature[];
  cta: { label: string; href: string };
}

export interface CaseStudyTeaser {
  title: string;
  slug: string;
  industry: string;
  summary: string;
  tags: string[];
  icon: string;
  relatedSolutionSlugs: string[];
}

/*
  Full case-study detail shape — cms-review.md §2.3, trimmed to what's honest to
  publish today (no fabricated results/metrics — see CLAUDE.md: real portfolio
  details go live only once the client approves public use).
*/
export interface CaseStudyDetail extends CaseStudyTeaser {
  businessChallenge: string;
  solutionNarrative: string;
  technologies: TechStackItem[];
}

export interface TechStripItem {
  name: string;
}

export interface IndustrySummary {
  title: string;
  slug: string;
  description: string;
  icon: string;
}

/* Full industry detail shape — cms-review.md §2.4. */
export interface IndustryDetail extends IndustrySummary {
  challenges: string[];
  howWeSolve: string;
  relatedSolutionSlugs: string[];
  relatedCaseStudySlugs: string[];
}

export interface ProcessStep {
  order: number;
  title: string;
  description: string;
}

export interface InsightCategoryTeaser {
  category: string;
  description: string;
  icon: string;
}

/*
  Expertise — real, already-documented Nxtedge specializations (company.md,
  business.md capability lists), distinct from the 5 broad Solutions categories:
  narrower, cross-cutting technical specializations rather than delivery pillars.
*/
export interface ExpertiseDetail {
  title: string;
  slug: string;
  summary: string;
  icon: string;
  overview: string;
  relatedSolutionSlugs: string[];
}

export interface PricingTier {
  name: string;
  price: string;
  cadence?: string;
  description: string;
  features: string[];
}

export interface ProductPricing {
  productSlug: string;
  productTitle: string;
  model: 'subscription' | 'implementation';
  tiers: PricingTier[];
  note: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
  // Optional generated illustration (gif/png/svg path under /static), per the
  // reference's abstract dot-pattern card illustrations. Falls back to the
  // icon badge in FeatureGrid.svelte when not set.
  image?: string;
}

export interface Stat {
  value: string;
  label: string;
}
