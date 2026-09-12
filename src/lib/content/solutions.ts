import type { SolutionDetail } from '$lib/types/content';

/*
  Full Solutions content — Phase 4. Same honesty rules as homepage.ts: real
  capability language grounded in what Nxtedge actually does (per CLAUDE.md and
  the case studies already on the homepage), not fabricated client claims or
  invented metrics. `process` is intentionally omitted here and sourced from
  homepage.ts's `processSteps` at the point of use — one real delivery process,
  not five different fictional ones per solution.
*/

export const solutionDetails: SolutionDetail[] = [
  {
    title: 'Web Development',
    slug: 'web-development',
    category: 'web-development',
    summary: 'Custom web applications and business platforms, built for how your business actually works.',
    icon: 'code',
    overview:
      "Most business websites are brochures — they describe the business but don't do any of the work. We build the other kind: web applications and platforms that are part of how your business actually runs, from customer-facing sites to internal dashboards.",
    businessProblems: [
      "Your website hasn't been touched since it launched, and every change means calling a developer.",
      "You need a real system — logins, data, workflows — not just a set of static pages.",
      'Your current site was built on a template that never quite fit the business.'
    ],
    capabilities: [
      { title: 'Custom web applications', description: 'Purpose-built platforms, not templated site builders.' },
      { title: 'CMS-backed marketing sites', description: 'Sites your team can actually update without a developer.' },
      { title: 'Client & partner portals', description: 'Logins, dashboards, and role-based access where needed.' },
      { title: 'API & third-party integrations', description: 'Connecting your site to the tools you already run on.' }
    ],
    technologies: [{ name: 'SvelteKit' }, { name: 'TypeScript' }, { name: 'Sanity' }, { name: 'Tailwind CSS' }, { name: 'Node.js' }],
    relatedProductSlugs: [],
    cta: { label: 'Start a web project', href: '/#contact' }
  },
  {
    title: 'Mobile Applications',
    slug: 'mobile-applications',
    category: 'mobile-applications',
    summary: "Native and cross-platform apps that put your operations in your team's pocket.",
    icon: 'smartphone',
    overview:
      'When your team or your customers need access on the move, a website is the wrong tool. We build mobile apps — for staff running field operations, or customers who expect to reach you from their phone first.',
    businessProblems: [
      "Your team works in the field, but your systems assume they're at a desk.",
      "Customers expect a mobile app, and a mobile-responsive site isn't quite the same thing.",
      "Notifications, offline access, and device features your website simply can't do."
    ],
    capabilities: [
      { title: 'Native & cross-platform apps', description: 'iOS and Android, built for one codebase where it makes sense.' },
      { title: 'Push notifications', description: 'Real-time alerts to coordinators, staff, or customers.' },
      { title: 'Offline-first support', description: 'Apps that keep working when connectivity does not.' },
      { title: 'App store deployment & maintenance', description: 'Getting shipped, and staying shipped, through OS updates.' }
    ],
    technologies: [{ name: 'React Native' }, { name: 'Swift' }, { name: 'Kotlin' }, { name: 'Firebase' }],
    relatedProductSlugs: [],
    cta: { label: 'Start a mobile project', href: '/#contact' }
  },
  {
    title: 'Business Systems',
    slug: 'business-systems',
    category: 'business-systems',
    summary: 'Bespoke internal tools that replace spreadsheets and manual processes with structured software.',
    icon: 'layers',
    overview:
      "Most operational bottlenecks aren't a people problem — they're a missing-system problem. We build the internal tools that replace spreadsheets, WhatsApp threads, and tribal knowledge with something structured and reliable.",
    businessProblems: [
      'The business runs on spreadsheets that only one person really understands.',
      "Processes that worked at five people don't work at twenty.",
      'There is no single source of truth for orders, inventory, or approvals.'
    ],
    capabilities: [
      { title: 'Custom internal tools', description: 'Built around your actual workflow, not a generic template.' },
      { title: 'Inventory & sales tracking', description: 'Real-time visibility into orders, stock, and performance.' },
      { title: 'Workflow & approval automation', description: 'Replacing manual sign-off chains with structured flows.' },
      { title: 'Role-based dashboards', description: 'The right view for owners, coordinators, and field staff.' }
    ],
    technologies: [{ name: 'SvelteKit' }, { name: 'PostgreSQL' }, { name: 'Node.js' }, { name: 'Sanity' }],
    relatedProductSlugs: ['nxtflo'],
    cta: { label: 'Start a business systems project', href: '/#contact' }
  },
  {
    title: 'AI Solutions',
    slug: 'ai-solutions',
    category: 'ai-solutions',
    summary: 'AI-powered automation and intelligent workflows, built into the systems you already run on.',
    icon: 'sparkles',
    overview:
      "AI is a capability we build into real systems, not a label we put on a pitch deck. Where structuring, summarizing, or classifying information is slowing your team down, we build it into your existing workflow — the same discipline behind Nxtflo, our own internal AI-powered delivery system.",
    businessProblems: [
      'Your team spends hours manually structuring information that AI could handle in minutes.',
      "You're not sure where AI actually applies to your business versus where it's just noise.",
      'Existing AI tools are generic — they don\'t plug into how your business actually runs.'
    ],
    capabilities: [
      { title: 'AI-assisted workflows', description: 'Structuring raw input — briefs, notes, messages — into usable data.' },
      { title: 'Automation pipelines', description: 'Connecting AI steps into the systems you already use.' },
      { title: 'Structured data extraction', description: 'Turning unstructured text into fields your software can use.' },
      { title: 'Claude-powered internal tools', description: 'Purpose-built AI features, not a chatbot bolted onto a page.' }
    ],
    technologies: [{ name: 'Claude API' }, { name: 'Python' }, { name: 'Node.js' }, { name: 'Vector search' }],
    relatedProductSlugs: ['nxtflo'],
    cta: { label: 'Talk to us about AI', href: '/#contact' }
  },
  {
    title: 'Cloud & Infrastructure',
    slug: 'cloud-infrastructure',
    category: 'cloud-infrastructure',
    summary: 'Networking, CCTV, and infrastructure work that keeps the physical and digital sides of your business connected.',
    icon: 'cloud',
    overview:
      "Nxtedge Studio isn't only software — we handle the physical infrastructure underneath it too. Networking, CCTV, and cloud hosting, planned as one system instead of three separate vendors who don't talk to each other.",
    businessProblems: [
      "Your physical locations and your digital systems weren't planned together.",
      'You have no real visibility into your sites — no structured CCTV or monitoring.',
      "Infrastructure was set up to work today, not to scale to a second or third location."
    ],
    capabilities: [
      { title: 'Network setup & structured cabling', description: 'Reliable connectivity built to last, not patched together.' },
      { title: 'CCTV installation & monitoring', description: 'Visibility into your locations, done properly.' },
      { title: 'Cloud hosting & deployment', description: 'Where the software side of the business actually runs.' },
      { title: 'Infrastructure audits', description: 'An honest read on what you have and what it needs.' }
    ],
    technologies: [{ name: 'Netlify' }, { name: 'AWS' }, { name: 'Ubiquiti' }, { name: 'CCTV/NVR systems' }],
    relatedProductSlugs: [],
    cta: { label: 'Talk to us about infrastructure', href: '/#contact' }
  }
];
