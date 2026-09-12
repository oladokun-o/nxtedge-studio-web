import { b as ensure_array_like } from "./index.js";
import { C as CaseStudyCard } from "./CaseStudyCard.js";
function CaseStudyGrid($$renderer, $$props) {
  let { caseStudies } = $$props;
  $$renderer.push(`<div class="grid grid-cols-1 gap-6 md:grid-cols-2"><!--[-->`);
  const each_array = ensure_array_like(caseStudies);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let caseStudy = each_array[i];
    $$renderer.push(`<div>`);
    CaseStudyCard($$renderer, { caseStudy });
    $$renderer.push(`<!----></div>`);
  }
  $$renderer.push(`<!--]--></div>`);
}
export {
  CaseStudyGrid as C
};
