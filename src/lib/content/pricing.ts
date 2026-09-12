import type { ProductPricing } from '$lib/types/content';

/*
  Pricing — Phase 5 addition, modeled after Web Hero's pricing page (transparent
  ranges rather than a rigid one-size list) but honest about what Nxtedge
  actually has: real "working hypothesis" tiers for the two owned products
  (assets/context/products.md), explicitly labeled as subject to change since
  the source doc itself says so. Services pricing is intentionally NOT a fixed
  number or range here — Nxtedge Studio's client work is bespoke/project-scoped
  with no fixed price list in any project doc, and this codebase does not
  publish real historical client contract values (assets/context/business.md's
  project figures are internal business-planning data, never treated as public
  content) — see decisions.md-equivalent reasoning in the "brand token mapping"
  session notes.
*/

export const servicesPricingNote = {
  title: 'Solutions & Services',
  description:
    "Every client project is scoped individually. A corporate website, a mobile app, and a full business system are not the same job, and we don't pretend otherwise with a one-size price list. Tell us what you're building and we'll come back with a clear, itemized proposal before any work starts.",
  cta: { label: 'Start a Project', href: '/#contact' }
};

export const productPricing: ProductPricing[] = [
  {
    productSlug: 'nxtflo',
    productTitle: 'Nxtflo',
    model: 'subscription',
    note: 'Working pricing hypothesis, not final, subject to change as Nxtflo is validated with early users.',
    tiers: [
      {
        name: 'Free',
        price: '₦0',
        description: 'Get started with the core onboarding flow.',
        features: ['Client intake questionnaire', 'Basic project structuring']
      },
      {
        name: 'Solo',
        price: '₦5,000',
        cadence: '/month (or ₦50,000/year)',
        description: 'For independent freelancers and consultants.',
        features: ['Everything in Free', 'AI-generated project briefs', 'Proposal generation']
      },
      {
        name: 'Studio',
        price: '₦15,000',
        cadence: '/month (or ₦150,000/year)',
        description: 'For small studios running multiple concurrent clients.',
        features: ['Everything in Solo', 'Multiple team members', 'WhatsApp & email notifications']
      },
      {
        name: 'Agency',
        price: '₦35,000',
        cadence: '/month (or ₦350,000/year)',
        description: 'For agencies with a growing client roster.',
        features: ['Everything in Studio', 'Priority support', 'Delivery tracking & reporting (in development)']
      }
    ]
  },
  {
    productSlug: 'nxtpay',
    productTitle: 'Nxtpay',
    model: 'implementation',
    note: 'Working commercial model, not final, subject to the first paying customer functioning as a design partner.',
    tiers: [
      {
        name: 'Implementation',
        price: '₦500,000',
        cadence: 'one-time',
        description: 'Initial setup, configuration, and onboarding.',
        features: ['Employee records setup', 'Payroll rules configuration', 'Secure access & auditability']
      },
      {
        name: 'Per Employee',
        price: '₦900',
        cadence: '/employee/month',
        description: 'Ongoing subscription, scaled to headcount.',
        features: ['Payroll runs & approval', 'Payslips and reports', 'Customer account management']
      }
    ]
  }
];
