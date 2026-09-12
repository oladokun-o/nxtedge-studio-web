import { b as ensure_array_like, e as escape_html, s as stringify } from "../../../chunks/index.js";
import { a as SEO, S as Section, C as Container } from "../../../chunks/Section.js";
import { P as PageHeader } from "../../../chunks/PageHeader.js";
import { G as Grid } from "../../../chunks/Grid.js";
import { C as Card } from "../../../chunks/Card.js";
import { I as Icon } from "../../../chunks/Button.js";
import { C as CTA } from "../../../chunks/CTA.js";
import { e as expertiseDetails } from "../../../chunks/expertise.js";
function _page($$renderer) {
  SEO($$renderer, {
    title: "Expertise — Nxtedge Studio",
    description: "Cross-cutting technical specializations Nxtedge Studio brings to client work — MVP development, data migration, AI-assisted workflows, and more."
  });
  $$renderer.push(`<!----> `);
  PageHeader($$renderer, {
    eyebrow: "Expertise",
    title: "Where we go deep",
    description: "Narrower specializations that cut across our five solutions — the specific technical depth behind the work."
  });
  $$renderer.push(`<!----> `);
  Section($$renderer, {
    bg: "background",
    children: ($$renderer2) => {
      Container($$renderer2, {
        children: ($$renderer3) => {
          Grid($$renderer3, {
            cols: 3,
            children: ($$renderer4) => {
              $$renderer4.push(`<!--[-->`);
              const each_array = ensure_array_like(expertiseDetails);
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let expertise = each_array[$$index];
                Card($$renderer4, {
                  href: `/expertise/${stringify(expertise.slug)}`,
                  variant: "elevated",
                  class: "h-full",
                  children: ($$renderer5) => {
                    $$renderer5.push(`<span class="inline-flex size-11 items-center justify-center rounded-md bg-primary text-white">`);
                    Icon($$renderer5, { name: expertise.icon, class: "size-5" });
                    $$renderer5.push(`<!----></span> <h3 class="mt-5 text-h4 font-bold text-foreground">${escape_html(expertise.title)}</h3> <p class="mt-2 text-sm text-muted">${escape_html(expertise.summary)}</p>`);
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
    title: "Need this kind of depth?",
    description: "Tell us what you're trying to solve — we'll help you turn it into a structured, working system.",
    primaryCta: { label: "Start a Project", href: "/#contact" }
  });
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
