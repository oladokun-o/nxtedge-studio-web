import "clsx";
import { a as SEO, S as Section, C as Container } from "../../../chunks/Section.js";
import { P as PageHeader } from "../../../chunks/PageHeader.js";
import { b as ensure_array_like } from "../../../chunks/index.js";
import { P as ProductCard } from "../../../chunks/ProductCard.js";
import { G as Grid } from "../../../chunks/Grid.js";
import { C as CTA } from "../../../chunks/CTA.js";
import { p as productDetails } from "../../../chunks/products.js";
function ProductGrid($$renderer, $$props) {
  let { products } = $$props;
  Grid($$renderer, {
    cols: 3,
    children: ($$renderer2) => {
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(products);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let product = each_array[i];
        $$renderer2.push(`<div>`);
        ProductCard($$renderer2, { product });
        $$renderer2.push(`<!----></div>`);
      }
      $$renderer2.push(`<!--]--> <div class="flex flex-col justify-center rounded-lg border border-dashed border-border p-6"><p class="font-mono text-xs uppercase tracking-wide text-muted">More products coming soon</p> <p class="mt-2 text-sm text-muted">Nxtflo is the first of an ongoing product line — future products will appear here as they ship.</p></div>`);
    }
  });
}
function _page($$renderer) {
  SEO($$renderer, {
    title: "Products — Nxtedge Studio",
    description: "Nxtflo and the products Nxtedge Studio builds and owns — starting in-house, then made available beyond Nxtedge Studio."
  });
  $$renderer.push(`<!----> `);
  PageHeader($$renderer, {
    eyebrow: "Products",
    title: "What we're building for ourselves",
    description: "Proprietary software, built in-house first, then made available beyond Nxtedge Studio."
  });
  $$renderer.push(`<!----> `);
  Section($$renderer, {
    bg: "background",
    children: ($$renderer2) => {
      Container($$renderer2, {
        children: ($$renderer3) => {
          ProductGrid($$renderer3, { products: productDetails });
        }
      });
    }
  });
  $$renderer.push(`<!----> `);
  CTA($$renderer, {
    eyebrow: "Get Started",
    title: "Curious about Nxtflo?",
    description: "We're building it in-house first — tell us what you'd want out of it.",
    primaryCta: { label: "Learn about Nxtflo", href: "/products/nxtflo" }
  });
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
