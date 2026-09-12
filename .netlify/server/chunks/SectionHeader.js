import { d as attr_class, s as stringify, e as escape_html } from "./index.js";
function SectionHeader($$renderer, $$props) {
  let { eyebrow, title, description, align = "left", cta } = $$props;
  $$renderer.push(`<div${attr_class(`flex flex-col gap-6 ${stringify(align === "center" ? "items-center text-center" : "md:flex-row md:items-end md:justify-between")}`)}><div class="max-w-2xl">`);
  if (eyebrow) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<span class="font-mono text-xs uppercase tracking-wide text-secondary">${escape_html(eyebrow)}</span>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> <h2 class="mt-3 font-display text-h2 font-bold text-foreground">${escape_html(title)}</h2> `);
  if (description) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<p class="mt-4 text-body-lg text-muted">${escape_html(description)}</p>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div> `);
  if (cta) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<div>`);
    cta($$renderer);
    $$renderer.push(`<!----></div>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div>`);
}
export {
  SectionHeader as S
};
