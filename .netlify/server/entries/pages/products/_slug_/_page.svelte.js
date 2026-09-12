import { s as stringify, f as derived, e as escape_html, b as ensure_array_like } from "../../../../chunks/index.js";
import { a as SEO, S as Section, C as Container } from "../../../../chunks/Section.js";
import { P as PageHeader } from "../../../../chunks/PageHeader.js";
import { B as Breadcrumbs } from "../../../../chunks/Breadcrumbs.js";
import { S as SectionHeader } from "../../../../chunks/SectionHeader.js";
import { F as FeatureGrid } from "../../../../chunks/FeatureGrid.js";
import { B as Badge } from "../../../../chunks/Badge.js";
import { S as SolutionCard } from "../../../../chunks/SolutionCard.js";
import { C as CTA } from "../../../../chunks/CTA.js";
import { s as solutionDetails } from "../../../../chunks/solutions.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let product = derived(() => data.product);
    const statusLabel = { live: "Live", beta: "Beta", "coming-soon": "In Development" };
    let relatedSolutions = derived(() => solutionDetails.filter((s) => s.relatedProductSlugs.includes(product().slug)));
    SEO($$renderer2, {
      title: `${stringify(product().title)} — Nxtedge Studio`,
      description: product().tagline
    });
    $$renderer2.push(`<!----> `);
    {
      let breadcrumbs = function($$renderer3) {
        Breadcrumbs($$renderer3, {
          items: [
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: product().title }
          ]
        });
      };
      PageHeader($$renderer2, {
        eyebrow: "Products",
        title: product().title,
        description: product().tagline,
        breadcrumbs
      });
    }
    $$renderer2.push(`<!----> `);
    Section($$renderer2, {
      bg: "background",
      children: ($$renderer3) => {
        Container($$renderer3, {
          children: ($$renderer4) => {
            Badge($$renderer4, {
              tone: "accent",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(statusLabel[product().status])}`);
              }
            });
            $$renderer4.push(`<!----> <div class="mt-6 max-w-3xl"><p class="text-body-lg text-muted">${escape_html(product().description)}</p></div>`);
          }
        });
      }
    });
    $$renderer2.push(`<!----> `);
    Section($$renderer2, {
      bg: "surface",
      children: ($$renderer3) => {
        Container($$renderer3, {
          children: ($$renderer4) => {
            SectionHeader($$renderer4, { eyebrow: "Features", title: "What it does" });
            $$renderer4.push(`<!----> <div class="mt-10">`);
            FeatureGrid($$renderer4, { items: product().features, columns: 3 });
            $$renderer4.push(`<!----></div>`);
          }
        });
      }
    });
    $$renderer2.push(`<!----> `);
    if (relatedSolutions().length > 0) {
      $$renderer2.push("<!--[-->");
      Section($$renderer2, {
        bg: "background",
        children: ($$renderer3) => {
          Container($$renderer3, {
            children: ($$renderer4) => {
              SectionHeader($$renderer4, {
                eyebrow: "Related Solutions",
                title: "Built on solutions we already offer"
              });
              $$renderer4.push(`<!----> <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2"><!--[-->`);
              const each_array = ensure_array_like(relatedSolutions());
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let solution = each_array[$$index];
                SolutionCard($$renderer4, { solution });
              }
              $$renderer4.push(`<!--]--></div>`);
            }
          });
        }
      });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    CTA($$renderer2, {
      eyebrow: "Get Started",
      title: product().cta.label,
      description: `We're building ${stringify(product().title)} in-house first — tell us what you'd want out of it.`,
      primaryCta: { label: product().cta.label, href: product().cta.href }
    });
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
