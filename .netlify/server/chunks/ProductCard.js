import { e as escape_html } from "./index.js";
import "clsx";
import { C as Card } from "./Card.js";
import { B as Badge } from "./Badge.js";
function ProductCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { product } = $$props;
    const statusLabel = { live: "Live", beta: "Beta", "coming-soon": "In Development" };
    Card($$renderer2, {
      variant: "elevated",
      href: product.cta.href,
      class: "h-full",
      children: ($$renderer3) => {
        Badge($$renderer3, {
          tone: "accent",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(statusLabel[product.status])}`);
          }
        });
        $$renderer3.push(`<!----> <h3 class="mt-4 text-h4 font-bold text-foreground">${escape_html(product.title)}</h3> <p class="mt-2 text-body text-muted">${escape_html(product.tagline)}</p>`);
      }
    });
  });
}
export {
  ProductCard as P
};
