import { e as escape_html, b as ensure_array_like } from "./index.js";
import { C as Card } from "./Card.js";
import { B as Badge } from "./Badge.js";
import { I as Icon } from "./Button.js";
function CaseStudyCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { caseStudy } = $$props;
    Card($$renderer2, {
      variant: "elevated",
      class: "h-full",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="flex items-start justify-between"><span class="inline-flex size-11 items-center justify-center rounded-md bg-primary text-white">`);
        Icon($$renderer3, { name: caseStudy.icon, class: "size-5" });
        $$renderer3.push(`<!----></span> `);
        Badge($$renderer3, {
          tone: "neutral",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(caseStudy.industry)}`);
          }
        });
        $$renderer3.push(`<!----></div> <h3 class="mt-5 text-h4 font-bold text-foreground">${escape_html(caseStudy.title)}</h3> <p class="mt-3 text-body text-muted">${escape_html(caseStudy.summary)}</p> <ul class="mt-5 flex flex-wrap gap-2"><!--[-->`);
        const each_array = ensure_array_like(caseStudy.tags);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let tag = each_array[$$index];
          $$renderer3.push(`<li class="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted">${escape_html(tag)}</li>`);
        }
        $$renderer3.push(`<!--]--></ul>`);
      }
    });
  });
}
export {
  CaseStudyCard as C
};
