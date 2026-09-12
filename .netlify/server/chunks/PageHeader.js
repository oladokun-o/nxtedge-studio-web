import { e as escape_html } from "./index.js";
import "clsx";
import { S as Section, C as Container } from "./Section.js";
function PageHeader($$renderer, $$props) {
  let { eyebrow, title, description, breadcrumbs } = $$props;
  Section($$renderer, {
    bg: "surface",
    class: "border-b border-border",
    children: ($$renderer2) => {
      Container($$renderer2, {
        children: ($$renderer3) => {
          if (breadcrumbs) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="mb-6">`);
            breadcrumbs($$renderer3);
            $$renderer3.push(`<!----></div>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (eyebrow) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<span class="font-mono text-xs uppercase tracking-wide text-secondary">${escape_html(eyebrow)}</span>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> <h1 class="mt-4 font-display text-h1 font-bold text-foreground">${escape_html(title)}</h1> `);
          if (description) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<p class="mt-5 max-w-2xl text-body-lg text-muted">${escape_html(description)}</p>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        }
      });
    }
  });
}
export {
  PageHeader as P
};
