import type { ExpertiseDetail } from '$lib/types/content';

/*
  Expertise — Phase 5 addition. Narrower, cross-cutting specializations, distinct
  from the 5 broad Solutions delivery pillars (lib/content/solutions.ts). Pulled
  directly from real Nxtedge capabilities already documented in
  assets/context/company.md and assets/context/business.md — no invented
  verticals (e.g. no "B2B SaaS"/"B2B retail"-style segmentation, since Nxtedge
  has no such documented segmentation of its own work).
*/

export const expertiseDetails: ExpertiseDetail[] = [
  {
    title: 'MVP Development',
    slug: 'mvp-development',
    summary: 'Getting a first working version of a product into real hands, fast.',
    icon: 'sparkles',
    overview:
      "We build first versions of products meant to be used and learned from, not polished-forever prototypes. Nxtflo itself started this way: an internal MVP, stress-tested on real Nxtedge client work before anything else.",
    relatedSolutionSlugs: ['web-development', 'mobile-applications', 'ai-solutions']
  },
  {
    title: 'Data Migration & Integration',
    slug: 'data-migration-integration',
    summary: 'Moving a business off spreadsheets and disconnected tools without losing anything.',
    icon: 'layers',
    overview:
      'Migrating years of records out of spreadsheets, old systems, or disconnected tools is where most businesses stall before they even get to build something new. We handle the migration and the integrations with the tools a business already runs on, as part of the build, not as an afterthought.',
    relatedSolutionSlugs: ['business-systems', 'cloud-infrastructure']
  },
  {
    title: 'AI-Assisted Workflows',
    slug: 'ai-assisted-workflows',
    summary: 'Structuring, summarizing, and classifying information with AI, built into real systems.',
    icon: 'sparkles',
    overview:
      'AI earns its place when it removes real manual work like structuring a brief, summarizing a thread, or classifying a record, built into a workflow someone already uses, not bolted on as a chatbot. This is the same discipline behind Nxtflo.',
    relatedSolutionSlugs: ['ai-solutions', 'business-systems']
  },
  {
    title: 'Business Systems Modernization',
    slug: 'business-systems-modernization',
    summary: 'Replacing manual, spreadsheet-driven processes with structured software.',
    icon: 'shield',
    overview:
      "Most operational bottlenecks are a missing-system problem, not a people problem. We modernize the processes a business already runs, such as sales, inventory, approvals, and documentation, into structured, reliable software built around how the business actually works.",
    relatedSolutionSlugs: ['business-systems']
  },
  {
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    summary: 'Putting operations and customer access in the pocket, not just the browser.',
    icon: 'smartphone',
    overview:
      'For teams working in the field or customers who expect a phone-first experience, we build native and cross-platform apps with the notifications, offline support, and device access a website cannot provide.',
    relatedSolutionSlugs: ['mobile-applications']
  }
];
