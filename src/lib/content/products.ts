import type { ProductSummary } from '$lib/types/content';

/*
  Full Products content — Phase 5. Same honesty rules as solutions.ts/homepage.ts:
  real product status and features, no invented traction or metrics. Nxtflo is the
  only live entry today; future products append here with zero schema change
  (site-map.md's "future products should plug into the same architecture"
  requirement) — the listing page renders a "more products coming soon" state
  when there's only one entry, per page-purpose.md's Products overview spec.
*/

export const productDetails: ProductSummary[] = [
  {
    title: 'Nxtflo',
    slug: 'nxtflo',
    tagline: 'The operating system for client delivery.',
    status: 'coming-soon',
    description:
      "Nxtflo is Nxtedge Studio's AI-powered operating system — it takes a raw client idea, structures it, scopes it, costs it, and guides the team through delivery. We're building it in-house first, then bringing it to other studios and freelancers.",
    features: [
      {
        title: 'Intake & Structuring',
        description: 'Turns voice notes, briefs, and WhatsApp threads into a structured project scope automatically.',
        icon: 'sparkles'
      },
      {
        title: 'Scoping & Proposals',
        description: 'Converts a structured scope into cost estimates and client-ready proposals.',
        icon: 'layers'
      },
      {
        title: 'Delivery Tracking',
        description: 'Keeps architecture and stack decisions tied back to the original brief, all the way to delivery.',
        icon: 'trending-up'
      }
    ],
    cta: { label: 'Learn about Nxtflo', href: '/#contact' }
  }
];
