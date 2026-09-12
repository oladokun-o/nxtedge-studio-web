import { d as attr_class, s as stringify, b as ensure_array_like, a as attr } from "../../../chunks/index.js";
import { a as SEO, S as Section, C as Container } from "../../../chunks/Section.js";
import { P as PageHeader } from "../../../chunks/PageHeader.js";
import { I as Icon } from "../../../chunks/Button.js";
import { C as CaseStudyCard } from "../../../chunks/CaseStudyCard.js";
import { C as CTA } from "../../../chunks/CTA.js";
import { c as caseStudyDetails } from "../../../chunks/work.js";
function Carousel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children, class: className = "" } = $$props;
    $$renderer2.push(`<div${attr_class(`relative ${stringify(className)}`)}><div class="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">`);
    children($$renderer2);
    $$renderer2.push(`<!----></div> <div class="mt-6 flex items-center justify-end gap-3"><button type="button" class="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground focus-visible:outline-2 focus-visible:outline-secondary" aria-label="Previous">`);
    Icon($$renderer2, { name: "chevron-right", class: "size-4 rotate-180" });
    $$renderer2.push(`<!----></button> <button type="button" class="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground focus-visible:outline-2 focus-visible:outline-secondary" aria-label="Next">`);
    Icon($$renderer2, { name: "chevron-right", class: "size-4" });
    $$renderer2.push(`<!----></button></div></div>`);
  });
}
function _page($$renderer) {
  SEO($$renderer, {
    title: "Work — Nxtedge Studio",
    description: "Systems we've delivered for clients — sales tracking, microcredit, loan documentation, and corporate websites."
  });
  $$renderer.push(`<!----> `);
  PageHeader($$renderer, {
    eyebrow: "Work",
    title: "Systems we've delivered",
    description: "A sample of what we've built for clients — full names and results go live as each client signs off on public case studies."
  });
  $$renderer.push(`<!----> `);
  Section($$renderer, {
    bg: "background",
    children: ($$renderer2) => {
      Container($$renderer2, {
        children: ($$renderer3) => {
          Carousel($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!--[-->`);
              const each_array = ensure_array_like(caseStudyDetails);
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let caseStudy = each_array[$$index];
                $$renderer4.push(`<div class="w-[85%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]"><a${attr("href", `/work/${stringify(caseStudy.slug)}`)} class="block h-full">`);
                CaseStudyCard($$renderer4, { caseStudy });
                $$renderer4.push(`<!----></a></div>`);
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
    title: "Want results like this?",
    description: "Tell us what you're trying to solve — we'll help you turn it into a structured, working system.",
    primaryCta: { label: "Start a Project", href: "/#contact" }
  });
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
