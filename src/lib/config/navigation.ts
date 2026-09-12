/*
  Single source of truth for site navigation — replaces the hardcoded, duplicated
  link arrays that used to live independently in Navbar.svelte's top bar and
  off-canvas menu (website-audit.md §5 finding #1; navigation-plan.md §2).

  Nav item list and order mirror Web Hero's own primary nav exactly (Services,
  Industries, Expertise, Case studies, Pricing, Process, More), with Products
  inserted as the one pillar Nxtedge has that Web Hero doesn't — confirmed via
  screenshots of webhero.co's live nav/mega-menus, not the earlier "structural
  borrow only" abstraction. "Work" is renamed to "Case Studies" to match Web
  Hero's own naming convention for the same pillar.

  Mega-menu shape mirrors Web Hero's actual dropdowns: a pillar intro (label +
  one-line description) on the left, a grid of children each with a real
  one-line descriptor (reused from the underlying content's own summary/
  tagline field — not new fabricated copy), and a featured promo card on the
  right — including for "More", which on Web Hero is the same rich format, not
  a plain list (confirmed via their live /investors page mega-menu screenshot).

  "More" holds Insights — Web Hero's own More dropdown holds About/Insights/
  Action Plan/Investors; Nxtedge has no About page or investor-relations
  content to publish (Phase 1 Family Capital terms are internal, not public
  site content), so Insights is the one real equivalent entry.
*/

import { solutionDetails } from "$lib/content/solutions";
import { productDetails } from "$lib/content/products";
import { industryDetails } from "$lib/content/industries";
import { expertiseDetails } from "$lib/content/expertise";
import { caseStudyDetails } from "$lib/content/work";
import { insightCategories } from "$lib/content/homepage";

export interface NavSubItem {
  label: string;
  description?: string;
  href: string;
  icon?: string;
}

export interface NavFeatured {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavSubItem[];
  featured?: NavFeatured;
}

export const primaryNav: NavItem[] = [
  {
    label: "Solutions",
    href: "/solutions",
    description: "Design, build and scale, from one team.",
    children: solutionDetails.map((s) => ({
      label: s.title,
      description: s.summary,
      href: `/solutions/${s.slug}`,
      icon: s.icon,
    })),
    featured: {
      eyebrow: "AI Solutions",
      title: "Where AI actually earns its place",
      description: "AI built into real systems, not a label on a pitch deck.",
      href: "/solutions/ai-solutions",
      label: "See how we build it",
    },
  },
  {
    label: "Products",
    href: "/products",
    description: "Software we build and own ourselves, not just for clients.",
    children: productDetails.map((p) => ({
      label: p.title,
      description: p.tagline,
      href: `/products/${p.slug}`,
    })),
    featured: {
      eyebrow: "In Development",
      title: "Nxtflo",
      description:
        "The operating system for client delivery, built in-house first.",
      href: "/products/nxtflo",
      label: "Learn about Nxtflo",
    },
  },
  {
    label: "Industries",
    href: "/industries",
    description: "Domain-specific credibility, built from real work.",
    children: industryDetails.map((i) => ({
      label: i.title,
      description: i.description,
      href: `/industries/${i.slug}`,
      icon: i.icon,
    })),
    featured: {
      eyebrow: "Featured",
      title: "Food & Beverage",
      description:
        "Sales tracking, distribution, and inventory systems for beverage and consumer goods businesses.",
      href: "/industries/food-beverage",
      label: "See what we build",
    },
  },
  {
    label: "Expertise",
    href: "/expertise",
    description: "Narrower specializations that cut across our five solutions.",
    children: expertiseDetails.map((e) => ({
      label: e.title,
      description: e.summary,
      href: `/expertise/${e.slug}`,
      icon: e.icon,
    })),
    featured: {
      eyebrow: "Expertise",
      title: "AI-Assisted Workflows",
      description: "The same discipline behind Nxtflo, applied to client work.",
      href: "/expertise/ai-assisted-workflows",
      label: "Go deeper",
    },
  },
  {
    label: "Case Studies",
    href: "/work",
    description: "Systems we've delivered: real problems, real builds.",
    children: caseStudyDetails.map((c) => ({
      label: c.title,
      description: c.industry,
      href: `/work/${c.slug}`,
      icon: c.icon,
    })),
    featured: {
      eyebrow: "Featured · Food & Beverage",
      title: "Sales & Distribution Tracking Platform",
      description:
        "Real-time visibility into orders, inventory, and performance for a growing distributor.",
      href: "/work/sales-distribution-tracking-platform",
      label: "Read the case study",
    },
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "More",
    href: "/insights",
    description: "Notes on engineering, AI, and running a technology studio.",
    children: [
      {
        icon: "cog",
        label: "Process",
        description: "How we work, and why it works.",
        href: "/process",
      },
      ...insightCategories.map((c) => ({
        label: c.category,
        description: c.description,
        href: "/insights",
        icon: c.icon,
      })),
    ],
    featured: {
      eyebrow: "Insights",
      title: "Written from delivery, not a content calendar",
      description:
        "Nothing published yet. See what we're planning to write about.",
      href: "/insights",
      label: "Visit Insights",
    },
  },
];

export const ctaLink = { label: "Start a project", href: "/#contact" };
