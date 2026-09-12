import "clsx";
import { a as SEO, S as Section, C as Container } from "../../../chunks/Section.js";
import { P as PageHeader } from "../../../chunks/PageHeader.js";
import { T as Timeline } from "../../../chunks/Timeline.js";
import { C as CTA } from "../../../chunks/CTA.js";
import { p as processSteps } from "../../../chunks/homepage.js";
function _page($$renderer) {
  SEO($$renderer, {
    title: "Process — Nxtedge Studio",
    description: "How Nxtedge Studio works — from a raw idea to a delivered, working system."
  });
  $$renderer.push(`<!----> `);
  PageHeader($$renderer, {
    eyebrow: "Process",
    title: "How we work",
    description: "The same four-step process behind every project, from a first conversation to delivery."
  });
  $$renderer.push(`<!----> `);
  Section($$renderer, {
    bg: "background",
    children: ($$renderer2) => {
      Container($$renderer2, {
        children: ($$renderer3) => {
          Timeline($$renderer3, { steps: processSteps });
        }
      });
    }
  });
  $$renderer.push(`<!----> `);
  CTA($$renderer, {
    eyebrow: "Get Started",
    title: "Have a raw idea? That's enough to start.",
    description: "Tell us what you're trying to solve — we'll help you turn it into a structured, working system.",
    primaryCta: { label: "Start a Project", href: "/#contact" }
  });
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
