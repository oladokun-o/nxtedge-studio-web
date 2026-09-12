import { b as ensure_array_like, d as attr_class, s as stringify, e as escape_html } from "../../../chunks/index.js";
import { a as SEO, S as Section, C as Container } from "../../../chunks/Section.js";
import { P as PageHeader } from "../../../chunks/PageHeader.js";
import { G as Grid } from "../../../chunks/Grid.js";
import { C as Card } from "../../../chunks/Card.js";
import { I as Icon } from "../../../chunks/Button.js";
import { C as CTA } from "../../../chunks/CTA.js";
import { i as industryDetails } from "../../../chunks/industries.js";
function _page($$renderer) {
  const badgeColors = [
    "bg-primary text-white",
    "bg-accent text-foreground",
    "bg-secondary text-white",
    "bg-primary text-white"
  ];
  SEO($$renderer, {
    title: "Industries — Nxtedge Studio",
    description: "The industries Nxtedge Studio understands — Food & Beverage, Financial Services, Professional Services, and Technology & Startups."
  });
  $$renderer.push(`<!----> `);
  PageHeader($$renderer, {
    eyebrow: "Industries",
    title: "Industries we understand",
    description: "Domain-specific credibility, built from real work — not a speculative list of every vertical we'd like to serve."
  });
  $$renderer.push(`<!----> `);
  Section($$renderer, {
    bg: "background",
    children: ($$renderer2) => {
      Container($$renderer2, {
        children: ($$renderer3) => {
          Grid($$renderer3, {
            cols: 4,
            children: ($$renderer4) => {
              $$renderer4.push(`<!--[-->`);
              const each_array = ensure_array_like(industryDetails);
              for (let i = 0, $$length = each_array.length; i < $$length; i++) {
                let industry = each_array[i];
                Card($$renderer4, {
                  href: `/industries/${stringify(industry.slug)}`,
                  variant: "elevated",
                  class: "h-full",
                  children: ($$renderer5) => {
                    $$renderer5.push(`<span${attr_class(`inline-flex size-11 items-center justify-center rounded-md ${stringify(badgeColors[i % badgeColors.length])}`)}>`);
                    Icon($$renderer5, { name: industry.icon, class: "size-5" });
                    $$renderer5.push(`<!----></span> <h3 class="mt-5 text-h4 font-bold text-foreground">${escape_html(industry.title)}</h3> <p class="mt-2 text-sm text-muted">${escape_html(industry.description)}</p>`);
                  }
                });
              }
              $$renderer4.push(`<!--]-->`);
            }
          });
        }
      });
    }
  });
  $$renderer.push(`<!----> `);
  CTA($$renderer, {
    eyebrow: "Get Started",
    title: "Don't see your industry?",
    description: "We build for the problem, not just the label — tell us what you're working with.",
    primaryCta: { label: "Start a Project", href: "/#contact" }
  });
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
