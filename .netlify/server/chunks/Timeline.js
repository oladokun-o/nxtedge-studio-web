import { b as ensure_array_like, e as escape_html } from "./index.js";
function Timeline($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { steps } = $$props;
    $$renderer2.push(`<ol class="grid grid-cols-1 gap-8 md:grid-cols-4"><!--[-->`);
    const each_array = ensure_array_like(steps);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let step = each_array[i];
      $$renderer2.push(`<li class="flex flex-col gap-4"><span class="inline-flex size-11 items-center justify-center rounded-full bg-primary font-mono text-sm text-white">${escape_html(String(step.order).padStart(2, "0"))}</span> <h3 class="mt-2 text-h4 font-bold text-foreground">${escape_html(step.title)}</h3> <p class="text-body text-muted">${escape_html(step.description)}</p></li>`);
    }
    $$renderer2.push(`<!--]--></ol>`);
  });
}
export {
  Timeline as T
};
