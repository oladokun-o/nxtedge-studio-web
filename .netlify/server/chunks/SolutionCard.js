import { e as escape_html, s as stringify } from "./index.js";
import { C as Card } from "./Card.js";
import { I as Icon } from "./Button.js";
function SolutionCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { solution, class: className = "" } = $$props;
    Card($$renderer2, {
      href: `/solutions/${stringify(solution.slug)}`,
      variant: "elevated",
      class: `h-full ${stringify(className)}`,
      children: ($$renderer3) => {
        $$renderer3.push(`<span class="inline-flex size-12 items-center justify-center rounded-md bg-primary text-white">`);
        Icon($$renderer3, { name: solution.icon, class: "size-6" });
        $$renderer3.push(`<!----></span> <h3 class="mt-6 text-h3 font-bold text-foreground">${escape_html(solution.title)}</h3> <p class="mt-3 text-body text-muted">${escape_html(solution.summary)}</p> <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-secondary">Learn more `);
        Icon($$renderer3, { name: "arrow-up-right", class: "size-3.5" });
        $$renderer3.push(`<!----></span>`);
      }
    });
  });
}
export {
  SolutionCard as S
};
