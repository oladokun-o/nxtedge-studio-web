import "clsx";
import { a as attr, e as escape_html, b as ensure_array_like, c as bind_props, d as attr_class, s as stringify, f as derived } from "../../chunks/index.js";
import { s as solutionDetails } from "../../chunks/solutions.js";
import { p as productDetails } from "../../chunks/products.js";
import { i as industryDetails } from "../../chunks/industries.js";
import { e as expertiseDetails } from "../../chunks/expertise.js";
import { c as caseStudyDetails } from "../../chunks/work.js";
import { i as insightCategories } from "../../chunks/homepage.js";
import { I as Icon, B as Button } from "../../chunks/Button.js";
const primaryNav = [
  {
    label: "Solutions",
    href: "/solutions",
    description: "Design, build and scale — from one team.",
    children: solutionDetails.map((s) => ({
      label: s.title,
      description: s.summary,
      href: `/solutions/${s.slug}`,
      icon: s.icon
    })),
    featured: {
      eyebrow: "AI Solutions",
      title: "Where AI actually earns its place",
      description: "AI built into real systems, not a label on a pitch deck.",
      href: "/solutions/ai-solutions",
      label: "See how we build it"
    }
  },
  {
    label: "Products",
    href: "/products",
    description: "Software we build and own ourselves, not just for clients.",
    children: productDetails.map((p) => ({
      label: p.title,
      description: p.tagline,
      href: `/products/${p.slug}`
    })),
    featured: {
      eyebrow: "In Development",
      title: "Nxtflo",
      description: "The operating system for client delivery — built in-house first.",
      href: "/products/nxtflo",
      label: "Learn about Nxtflo"
    }
  },
  {
    label: "Industries",
    href: "/industries",
    description: "Domain-specific credibility, built from real work.",
    children: industryDetails.map((i) => ({
      label: i.title,
      description: i.description,
      href: `/industries/${i.slug}`,
      icon: i.icon
    })),
    featured: {
      eyebrow: "Featured",
      title: "Food & Beverage",
      description: "Sales tracking, distribution, and inventory systems for beverage and consumer goods businesses.",
      href: "/industries/food-beverage",
      label: "See what we build"
    }
  },
  {
    label: "Expertise",
    href: "/expertise",
    description: "Narrower specializations that cut across our five solutions.",
    children: expertiseDetails.map((e) => ({
      label: e.title,
      description: e.summary,
      href: `/expertise/${e.slug}`,
      icon: e.icon
    })),
    featured: {
      eyebrow: "Expertise",
      title: "AI-Assisted Workflows",
      description: "The same discipline behind Nxtflo, applied to client work.",
      href: "/expertise/ai-assisted-workflows",
      label: "Go deeper"
    }
  },
  {
    label: "Case Studies",
    href: "/work",
    description: "Systems we've delivered — real problems, real builds.",
    children: caseStudyDetails.map((c) => ({
      label: c.title,
      description: c.industry,
      href: `/work/${c.slug}`,
      icon: c.icon
    })),
    featured: {
      eyebrow: "Featured · Food & Beverage",
      title: "Sales & Distribution Tracking Platform",
      description: "Real-time visibility into orders, inventory, and performance for a growing distributor.",
      href: "/work/sales-distribution-tracking-platform",
      label: "Read the case study"
    }
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
        href: "/process"
      },
      ...insightCategories.map((c) => ({
        label: c.category,
        description: c.description,
        href: "/insights",
        icon: c.icon
      }))
    ],
    featured: {
      eyebrow: "Insights",
      title: "Written from delivery, not a content calendar",
      description: "Nothing published yet — see what we're planning to write about.",
      href: "/insights",
      label: "Visit Insights"
    }
  }
];
const ctaLink = { label: "Start a project", href: "/#contact" };
function MegaMenu($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { id, label, description, items, featured } = $$props;
    $$renderer2.push(`<div${attr("id", id)} role="menu" class="absolute inset-x-0 top-full w-full border-t border-border bg-background shadow-2xl"><div class="mx-auto max-w-7xl px-6 py-10 md:px-10"><div class="grid grid-cols-[12rem_1fr_16rem] gap-8"><div><span class="inline-flex rounded-full bg-secondary/10 px-3 py-1 font-mono text-xs uppercase tracking-wide text-secondary">${escape_html(label)}</span> `);
    if (description) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="mt-4 text-sm text-muted">${escape_html(description)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="grid grid-cols-2 gap-x-8 gap-y-6"><!--[-->`);
    const each_array = ensure_array_like(items);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<a${attr("href", item.href)} role="menuitem" class="group block focus-visible:outline-2 focus-visible:outline-secondary"><span class="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-secondary">`);
      if (item.icon) {
        $$renderer2.push("<!--[-->");
        Icon($$renderer2, { name: item.icon, class: "size-4 shrink-0" });
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> ${escape_html(item.label)}</span> `);
      if (item.description) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="mt-1 block text-sm text-muted">${escape_html(item.description)}</span>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></a>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    if (featured) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", featured.href)} role="menuitem" class="block rounded-lg bg-primary p-6 text-white transition-colors hover:bg-foreground focus-visible:outline-2 focus-visible:outline-secondary"><span class="font-mono text-xs uppercase tracking-wide text-accent">${escape_html(featured.eyebrow)}</span> <p class="mt-3 font-display text-h4 font-bold text-white">${escape_html(featured.title)}</p> <p class="mt-2 text-sm text-white/70">${escape_html(featured.description)}</p> <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-white">${escape_html(featured.label)} `);
      Icon($$renderer2, { name: "arrow-up-right", class: "size-3.5" });
      $$renderer2.push(`<!----></span></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
  });
}
function MobileNav($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { open = false } = $$props;
    function close() {
      open = false;
    }
    if (open) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation"><button class="absolute inset-0 bg-primary/60" aria-label="Close menu"></button> <div class="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-background p-6"><div class="flex items-center justify-between"><span class="text-h4 font-semibold text-foreground">Menu</span> <button class="inline-flex size-10 items-center justify-center rounded-md border border-border focus-visible:outline-2 focus-visible:outline-secondary" aria-label="Close menu">`);
      Icon($$renderer2, { name: "x", class: "size-5" });
      $$renderer2.push(`<!----></button></div> <nav class="mt-10 flex flex-1 flex-col gap-1" aria-label="Mobile"><!--[-->`);
      const each_array = ensure_array_like(primaryNav);
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let item = each_array[$$index_1];
        $$renderer2.push(`<a${attr("href", item.href)} class="border-b border-border py-4 text-h4 text-foreground">${escape_html(item.label)}</a> `);
        if (item.children) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="flex flex-col gap-2 pb-4 pl-4"><!--[-->`);
          const each_array_1 = ensure_array_like(item.children);
          for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
            let child = each_array_1[$$index];
            $$renderer2.push(`<a${attr("href", child.href)} class="text-body text-muted hover:text-foreground">${escape_html(child.label)}</a>`);
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></nav> `);
      Button($$renderer2, {
        href: ctaLink.href,
        class: "mt-8 w-full justify-center",
        onclick: close,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(ctaLink.label)}`);
        }
      });
      $$renderer2.push(`<!----></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { open });
  });
}
function Navbar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let openMenu = null;
    let mobileOpen = false;
    let activeItem = derived(() => primaryNav.find((item) => item.label === openMenu));
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<header class="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur"><div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10"><a href="/" class="flex shrink-0 items-center gap-1"><img src="/brand/nxtedge-mark-charcoal.png" alt="" class="h-7 w-auto"/> <img src="/brand/nxtedge-wordmark-charcoal.png" alt="Nxtedge" class="h-4.5 w-auto"/></a> <nav class="hidden items-center gap-0 lg:flex" aria-label="Primary"><!--[-->`);
      const each_array = ensure_array_like(primaryNav);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let item = each_array[$$index];
        if (item.children) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<button${attr_class(`flex cursor-pointer items-center gap-1 font-medium text-sm tracking-wide text-foreground transition-colors hover:text-foreground hover:bg-accent/25 ${stringify(openMenu === item.label ? "bg-foreground/5" : "")} rounded-full px-1.5 focus-visible:outline-2 focus-visible:outline-secondary`)}${attr("aria-expanded", openMenu === item.label)}${attr("aria-controls", `menu-${stringify(item.label)}`)}>${escape_html(item.label)} `);
          Icon($$renderer3, {
            name: "chevron-right",
            class: `size-3 rotate-90 transition-transform duration-200 ${stringify(openMenu === item.label ? "-rotate-90" : "")}`
          });
          $$renderer3.push(`<!----></button>`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<a${attr("href", item.href)} class="font-medium text-sm tracking-wide text-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-secondary hover:bg-accent/25 rounded-full px-1.5 mx-1">${escape_html(item.label)}</a>`);
        }
        $$renderer3.push(`<!--]-->`);
      }
      $$renderer3.push(`<!--]--></nav> <div class="flex items-center gap-3"><a href="#" class="hidden font-medium px-3 text-sm tracking-wide text-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-secondary lg:inline">Login</a> `);
      Button($$renderer3, {
        href: "/#contact",
        variant: "outline",
        size: "sm",
        class: "hidden text-sm! py-1.5! lg:inline-flex font-bold!",
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->Free website redesign`);
        }
      });
      $$renderer3.push(`<!----> `);
      Button($$renderer3, {
        href: ctaLink.href,
        size: "sm",
        class: "hidden lg:inline-flex font-semibold!",
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->${escape_html(ctaLink.label)}`);
        }
      });
      $$renderer3.push(`<!----> <button class="inline-flex size-10 items-center justify-center rounded-md border border-border focus-visible:outline-2 focus-visible:outline-secondary lg:hidden"${attr("aria-expanded", mobileOpen)} aria-controls="mobile-nav" aria-label="Open menu"><svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"></path></svg></button></div></div> `);
      if (activeItem()?.children) {
        $$renderer3.push("<!--[-->");
        MegaMenu($$renderer3, {
          id: `menu-${stringify(activeItem().label)}`,
          label: activeItem().label,
          description: activeItem().description,
          items: activeItem().children,
          featured: activeItem().featured
        });
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--></header> `);
      MobileNav($$renderer3, {
        get open() {
          return mobileOpen;
        },
        set open($$value) {
          mobileOpen = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { settings = null } = $$props;
    const solutionsLinks = primaryNav.find((item) => item.label === "Solutions")?.children ?? [];
    const industriesLinks = primaryNav.find((item) => item.label === "Industries")?.children ?? [];
    const expertiseLinks = primaryNav.find((item) => item.label === "Expertise")?.children ?? [];
    const companyLinks = [
      { label: "Products", href: "/products" },
      { label: "Case Studies", href: "/work" },
      { label: "Pricing", href: "/pricing" },
      { label: "Process", href: "/process" },
      { label: "Insights", href: "/insights" },
      { label: "Contact us", href: "/#contact" }
    ];
    $$renderer2.push(`<footer class="bg-primary text-white"><div class="mx-auto max-w-7xl px-6 py-16 md:px-10"><div class="flex flex-col gap-8 border-b border-white/10 pb-12 md:flex-row md:items-end md:justify-between"><h2 class="font-display text-h1 font-bold text-white">Tell us what you're building<span class="text-accent">.</span></h2> <div class="flex flex-wrap items-center gap-4">`);
    Button($$renderer2, {
      href: ctaLink.href,
      variant: "inverted",
      icon: "arrow-up-right",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->${escape_html(ctaLink.label)}`);
      }
    });
    $$renderer2.push(`<!----> `);
    if (settings?.calendarLink) {
      $$renderer2.push("<!--[-->");
      Button($$renderer2, {
        href: settings.calendarLink,
        target: "_blank",
        rel: "noopener noreferrer",
        variant: "outline",
        class: "border-white/20 text-white hover:border-white",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Book a Discovery Call`);
        }
      });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div> <div class="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4"><div><span class="font-mono text-xs uppercase tracking-wide text-white/40">Solutions</span> <ul class="mt-5 flex flex-col gap-3"><!--[-->`);
    const each_array = ensure_array_like(solutionsLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<li><a${attr("href", link.href)} class="text-body text-white/70 hover:text-white">${escape_html(link.label)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul></div> <div><span class="font-mono text-xs uppercase tracking-wide text-white/40">Industries</span> <ul class="mt-5 flex flex-col gap-3"><!--[-->`);
    const each_array_1 = ensure_array_like(industriesLinks);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let link = each_array_1[$$index_1];
      $$renderer2.push(`<li><a${attr("href", link.href)} class="text-body text-white/70 hover:text-white">${escape_html(link.label)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul></div> <div><span class="font-mono text-xs uppercase tracking-wide text-white/40">Expertise</span> <ul class="mt-5 flex flex-col gap-3"><!--[-->`);
    const each_array_2 = ensure_array_like(expertiseLinks);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let link = each_array_2[$$index_2];
      $$renderer2.push(`<li><a${attr("href", link.href)} class="text-body text-white/70 hover:text-white">${escape_html(link.label)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul></div> <div><span class="font-mono text-xs uppercase tracking-wide text-white/40">Company</span> <ul class="mt-5 flex flex-col gap-3"><!--[-->`);
    const each_array_3 = ensure_array_like(companyLinks);
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let link = each_array_3[$$index_3];
      $$renderer2.push(`<li><a${attr("href", link.href)} class="text-body text-white/70 hover:text-white">${escape_html(link.label)}</a></li>`);
    }
    $$renderer2.push(`<!--]--> `);
    if (settings?.email) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<li><a${attr("href", `mailto:${stringify(settings.email)}`)} class="text-body text-white/70 hover:text-white">${escape_html(settings.email)}</a></li>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<li><a href="mailto:hello@nxtedgestudio.com" class="text-body text-white/70 hover:text-white">hello@nxtedgestudio.com</a></li>`);
    }
    $$renderer2.push(`<!--]--> `);
    if (settings?.phone) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<li><a${attr("href", `tel:${stringify(settings.phone)}`)} class="text-body text-white/70 hover:text-white">${escape_html(settings.phone)}</a></li>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></ul> <div class="mt-6 flex gap-3">`);
    if (settings?.instagram) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", settings.instagram)} target="_blank" rel="noopener noreferrer" class="inline-flex size-9 items-center justify-center rounded-md border border-white/15 text-white/60 hover:border-white/30 hover:text-white" aria-label="Instagram">`);
      Icon($$renderer2, { name: "instagram", class: "size-4" });
      $$renderer2.push(`<!----></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (settings?.linkedIn) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", settings.linkedIn)} target="_blank" rel="noopener noreferrer" class="inline-flex size-9 items-center justify-center rounded-md border border-white/15 text-white/60 hover:border-white/30 hover:text-white" aria-label="LinkedIn">`);
      Icon($$renderer2, { name: "linkedin", class: "size-4" });
      $$renderer2.push(`<!----></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div></div> <div class="flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row md:items-center md:justify-between"><p>© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} ${escape_html(settings?.siteTitle ?? "Nxtedge Studio")}. All rights reserved.</p> <p class="font-mono text-xs uppercase tracking-wide">Built as a technology studio, not an agency.</p></div></div></footer>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children, data } = $$props;
    $$renderer2.push(`<a href="#main-content" class="skip-link">Skip to content</a> `);
    Navbar($$renderer2, { settings: data.settings });
    $$renderer2.push(`<!----> <main id="main-content">`);
    children($$renderer2);
    $$renderer2.push(`<!----></main> `);
    Footer($$renderer2, { settings: data.settings });
    $$renderer2.push(`<!---->`);
  });
}
export {
  _layout as default
};
