import { b as ensure_array_like, e as escape_html } from "../../../chunks/index.js";
import { a as SEO, S as Section, C as Container } from "../../../chunks/Section.js";
import { P as PageHeader } from "../../../chunks/PageHeader.js";
import { B as Badge } from "../../../chunks/Badge.js";
import { i as insightCategories } from "../../../chunks/homepage.js";
function _page($$renderer) {
  SEO($$renderer, {
    title: "Insights — Nxtedge Studio",
    description: "Notes on engineering, AI, and running a technology studio — coming soon from Nxtedge Studio."
  });
  $$renderer.push(`<!----> `);
  PageHeader($$renderer, {
    eyebrow: "Insights",
    title: "What we're learning and sharing",
    description: "Written from delivery, not a content calendar. Nothing published yet — here's what's coming."
  });
  $$renderer.push(`<!----> `);
  Section($$renderer, {
    bg: "background",
    children: ($$renderer2) => {
      Container($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<ul class="mx-auto flex max-w-2xl flex-col divide-y divide-border"><!--[-->`);
          const each_array = ensure_array_like(insightCategories);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let insight = each_array[$$index];
            $$renderer3.push(`<li class="flex flex-col gap-2 py-8 first:pt-0">`);
            Badge($$renderer3, {
              tone: "neutral",
              class: "w-fit",
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->${escape_html(insight.category)}`);
              }
            });
            $$renderer3.push(`<!----> <p class="text-body-lg text-muted">${escape_html(insight.description)}</p></li>`);
          }
          $$renderer3.push(`<!--]--></ul>`);
        }
      });
    }
  });
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
