import { b as ensure_array_like, e as escape_html } from "./index.js";
function TechStackRow($$renderer, $$props) {
  let { technologies } = $$props;
  $$renderer.push(`<div class="flex flex-wrap gap-3"><!--[-->`);
  const each_array = ensure_array_like(technologies);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tech = each_array[$$index];
    $$renderer.push(`<span class="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground/80">${escape_html(tech.name)}</span>`);
  }
  $$renderer.push(`<!--]--></div>`);
}
export {
  TechStackRow as T
};
