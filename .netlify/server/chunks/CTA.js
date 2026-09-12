import { e as escape_html, a as attr } from "./index.js";
import { B as Button } from "./Button.js";
import { S as Section, C as Container } from "./Section.js";
function CTA($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { eyebrow, title, description, primaryCta, secondaryCta } = $$props;
    Section($$renderer2, {
      id: "contact",
      bg: "primary",
      padding: "lg",
      children: ($$renderer3) => {
        Container($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="flex flex-col items-center gap-6 text-center">`);
            if (eyebrow) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<span class="font-mono text-eyebrow uppercase tracking-wide text-white/70">${escape_html(eyebrow)}</span>`);
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--> <h2 class="max-w-2xl font-display text-h1 font-bold text-white">${escape_html(title)}</h2> `);
            if (description) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<p class="max-w-xl text-body-lg text-white/70">${escape_html(description)}</p>`);
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--> <div class="mt-4 flex flex-wrap items-center justify-center gap-6">`);
            Button($$renderer4, {
              href: primaryCta.href,
              variant: "inverted",
              icon: "arrow-up-right",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(primaryCta.label)}`);
              }
            });
            $$renderer4.push(`<!----> `);
            if (secondaryCta) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<a${attr("href", secondaryCta.href)} class="text-body-lg font-medium text-white/80 underline decoration-white/40 underline-offset-4 hover:text-white">${escape_html(secondaryCta.label)}</a>`);
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--></div></div>`);
          }
        });
      }
    });
  });
}
export {
  CTA as C
};
