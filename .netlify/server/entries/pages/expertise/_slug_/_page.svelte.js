import { s as stringify, f as derived, e as escape_html, b as ensure_array_like } from "../../../../chunks/index.js";
import { a as SEO, S as Section, C as Container } from "../../../../chunks/Section.js";
import { P as PageHeader } from "../../../../chunks/PageHeader.js";
import { B as Breadcrumbs } from "../../../../chunks/Breadcrumbs.js";
import { S as SectionHeader } from "../../../../chunks/SectionHeader.js";
import { S as SolutionCard } from "../../../../chunks/SolutionCard.js";
import { C as CTA } from "../../../../chunks/CTA.js";
import { s as solutionDetails } from "../../../../chunks/solutions.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let expertise = derived(() => data.expertise);
    let relatedSolutions = derived(() => solutionDetails.filter((s) => expertise().relatedSolutionSlugs.includes(s.slug)));
    SEO($$renderer2, {
      title: `${stringify(expertise().title)} — Nxtedge Studio`,
      description: expertise().summary
    });
    $$renderer2.push(`<!----> `);
    {
      let breadcrumbs = function($$renderer3) {
        Breadcrumbs($$renderer3, {
          items: [
            { label: "Home", href: "/" },
            { label: "Expertise", href: "/expertise" },
            { label: expertise().title }
          ]
        });
      };
      PageHeader($$renderer2, {
        eyebrow: "Expertise",
        title: expertise().title,
        description: expertise().summary,
        breadcrumbs
      });
    }
    $$renderer2.push(`<!----> `);
    Section($$renderer2, {
      bg: "background",
      children: ($$renderer3) => {
        Container($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="max-w-3xl"><p class="text-body-lg text-muted">${escape_html(expertise().overview)}</p></div>`);
          }
        });
      }
    });
    $$renderer2.push(`<!----> `);
    if (relatedSolutions().length > 0) {
      $$renderer2.push("<!--[-->");
      Section($$renderer2, {
        bg: "surface",
        children: ($$renderer3) => {
          Container($$renderer3, {
            children: ($$renderer4) => {
              SectionHeader($$renderer4, { eyebrow: "Related Solutions", title: "Where this shows up" });
              $$renderer4.push(`<!----> <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
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
      title: "Need this kind of depth?",
      description: "Tell us what you're trying to solve — we'll help you turn it into a structured, working system.",
      primaryCta: { label: "Start a Project", href: "/#contact" }
    });
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
