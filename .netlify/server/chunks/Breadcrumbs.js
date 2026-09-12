import { b as ensure_array_like, a as attr, e as escape_html } from "./index.js";
function Breadcrumbs($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { items } = $$props;
    $$renderer2.push(`<nav aria-label="Breadcrumb"><ol class="flex flex-wrap items-center gap-2 text-sm text-muted"><!--[-->`);
    const each_array = ensure_array_like(items);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let item = each_array[i];
      $$renderer2.push(`<li class="flex items-center gap-2">`);
      if (item.href) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<a${attr("href", item.href)} class="hover:text-foreground">${escape_html(item.label)}</a>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<span aria-current="page" class="text-foreground">${escape_html(item.label)}</span>`);
      }
      $$renderer2.push(`<!--]--> `);
      if (i < items.length - 1) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span aria-hidden="true">/</span>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></li>`);
    }
    $$renderer2.push(`<!--]--></ol></nav>`);
  });
}
export {
  Breadcrumbs as B
};
