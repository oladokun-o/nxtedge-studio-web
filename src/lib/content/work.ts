import type { CaseStudyDetail } from '$lib/types/content';

/*
  Full Work/Case Studies content — Phase 5. Same honesty rules as homepage.ts:
  anonymized (no client names — CLAUDE.md notes real portfolio details go live
  only once the client approves public use, which hasn't happened yet), no
  fabricated results/metrics. businessChallenge and solutionNarrative are real,
  grounded descriptions of what was actually built, not invented case-study copy.
*/

export const caseStudyDetails: CaseStudyDetail[] = [
  {
    title: 'Sales & Distribution Tracking Platform',
    slug: 'sales-distribution-tracking-platform',
    industry: 'Food & Beverage',
    summary: 'A sales tracking system built for a growing beverage distribution business, with real-time visibility into orders, inventory, and performance.',
    tags: ['Web App', 'Business Systems'],
    icon: 'layers',
    relatedSolutionSlugs: ['web-development', 'business-systems'],
    businessChallenge:
      'The business was running sales, orders, and inventory across spreadsheets and phone calls between reps and coordinators, with no shared source of truth and no real-time visibility into what was actually selling or what stock was left.',
    solutionNarrative:
      'We built a web-based sales tracking platform that gives coordinators and management live visibility into orders, inventory levels, and rep performance, replacing the spreadsheet-and-phone-call workflow with one system everyone works from.',
    technologies: [{ name: 'SvelteKit' }, { name: 'PostgreSQL' }, { name: 'Node.js' }]
  },
  {
    title: 'Microcredit & Loan Coordination App',
    slug: 'microcredit-loan-coordination-app',
    industry: 'Financial Services',
    summary: 'A microcredit application with multi-coordinator notifications, built to keep a lending team in sync in real time.',
    tags: ['Mobile App', 'Fintech'],
    icon: 'smartphone',
    relatedSolutionSlugs: ['mobile-applications', 'business-systems'],
    businessChallenge:
      'A lending team needed multiple coordinators to stay in sync on loan applications and approvals in real time, without everyone chasing the same paper trail or WhatsApp thread.',
    solutionNarrative:
      'We built a mobile microcredit application with push notifications that reach every relevant coordinator the moment a loan event happens, keeping the whole team on the same page without manual follow-up.',
    technologies: [{ name: 'React Native' }, { name: 'Firebase' }]
  },
  {
    title: 'Corporate Website Rebuild',
    slug: 'corporate-website-rebuild',
    industry: 'Financial Services',
    summary: 'A single-page dynamic website rebuilt from the ground up for a funds management company.',
    tags: ['Web Development'],
    icon: 'code',
    relatedSolutionSlugs: ['web-development'],
    businessChallenge:
      "The company's existing website was a static, dated site that didn't reflect a modern funds management business and was difficult to update.",
    solutionNarrative:
      'We rebuilt the site as a single-page dynamic web application, giving the business a modern public presence and a foundation that can grow into real functionality rather than staying a static brochure.',
    technologies: [{ name: 'SvelteKit' }, { name: 'Sanity' }, { name: 'Tailwind CSS' }]
  },
  {
    title: 'Loan Documentation & Approval System',
    slug: 'loan-documentation-approval-system',
    industry: 'Financial Services',
    summary: 'A loan documentation platform with WhatsApp notifications straight to leadership, replacing a manual paper trail.',
    tags: ['Business Systems', 'Automation'],
    icon: 'shield',
    relatedSolutionSlugs: ['business-systems', 'ai-solutions'],
    businessChallenge:
      'Loan documentation and approvals ran on a manual paper trail, with leadership only finding out about pending decisions when someone physically brought the file to them.',
    solutionNarrative:
      'We built a loan documentation and approval system that sends WhatsApp notifications straight to the chairman when a decision is needed, replacing the paper trail with a structured, auditable digital workflow.',
    technologies: [{ name: 'Node.js' }, { name: 'PostgreSQL' }, { name: 'WhatsApp Business API' }]
  }
];
