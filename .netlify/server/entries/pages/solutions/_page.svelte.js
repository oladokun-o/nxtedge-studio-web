import "clsx";
import { a as SEO, S as Section, C as Container } from "../../../chunks/Section.js";
import { P as PageHeader } from "../../../chunks/PageHeader.js";
import { b as ensure_array_like } from "../../../chunks/index.js";
import { S as SolutionCard } from "../../../chunks/SolutionCard.js";
import { C as CTA } from "../../../chunks/CTA.js";
import { s as solutions } from "../../../chunks/homepage.js";
function SolutionGrid($$renderer, $$props) {
  let { solutions: solutions2 } = $$props;
  $$renderer.push(`<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
  const each_array = ensure_array_like(solutions2);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let solution = each_array[i];
    $$renderer.push(`<div>`);
    SolutionCard($$renderer, { solution, class: "h-full" });
    $$renderer.push(`<!----></div>`);
  }
  $$renderer.push(`<!--]--></div>`);
}
function _page($$renderer) {
  SEO($$renderer, {
    title: "Solutions — Nxtedge Studio",
    description: "Five core offerings — web development, mobile applications, business systems, AI solutions, and cloud & infrastructure — one technology studio."
  });
  $$renderer.push(`<!----> `);
  PageHeader($$renderer, {
    eyebrow: "Solutions",
    title: "What we build",
    description: "Five core offerings, one team — from a first product to the systems that run your business."
  });
  $$renderer.push(`<!----> `);
  Section($$renderer, {
    bg: "background",
    children: ($$renderer2) => {
      Container($$renderer2, {
        children: ($$renderer3) => {
          SolutionGrid($$renderer3, { solutions });
        }
      });
    }
  });
  $$renderer.push(`<!----> `);
  CTA($$renderer, {
    eyebrow: "Get Started",
    title: "Not sure which solution fits?",
    description: "Tell us what you're trying to solve — we'll help you figure out the right starting point.",
    primaryCta: { label: "Start a Project", href: "/#contact" }
  });
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
