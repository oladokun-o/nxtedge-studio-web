import { s as stringify, f as derived, b as ensure_array_like, e as escape_html } from "../../../../chunks/index.js";
import { a as SEO, S as Section, C as Container } from "../../../../chunks/Section.js";
import { P as PageHeader } from "../../../../chunks/PageHeader.js";
import { B as Breadcrumbs } from "../../../../chunks/Breadcrumbs.js";
import { S as SectionHeader } from "../../../../chunks/SectionHeader.js";
import { T as TechStackRow } from "../../../../chunks/TechStackRow.js";
import { S as SolutionCard } from "../../../../chunks/SolutionCard.js";
import { B as Badge } from "../../../../chunks/Badge.js";
import { C as CTA } from "../../../../chunks/CTA.js";
import { s as solutionDetails } from "../../../../chunks/solutions.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let caseStudy = derived(() => data.caseStudy);
    let relatedSolutions = derived(() => solutionDetails.filter((s) => caseStudy().relatedSolutionSlugs.includes(s.slug)));
    SEO($$renderer2, {
      title: `${stringify(caseStudy().title)} — Nxtedge Studio`,
      description: caseStudy().summary
    });
    $$renderer2.push(`<!----> `);
    {
      let breadcrumbs = function($$renderer3) {
        Breadcrumbs($$renderer3, {
          items: [
            { label: "Home", href: "/" },
            { label: "Work", href: "/work" },
            { label: caseStudy().title }
          ]
        });
      };
      PageHeader($$renderer2, {
        eyebrow: caseStudy().industry,
        title: caseStudy().title,
        description: caseStudy().summary,
        breadcrumbs
      });
    }
    $$renderer2.push(`<!----> `);
    Section($$renderer2, {
      bg: "background",
      children: ($$renderer3) => {
        Container($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="flex flex-wrap gap-2"><!--[-->`);
            const each_array = ensure_array_like(caseStudy().tags);
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let tag = each_array[$$index];
              Badge($$renderer4, {
                tone: "neutral",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->${escape_html(tag)}`);
                }
              });
            }
            $$renderer4.push(`<!--]--></div> <div class="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2"><div><h2 class="font-display text-h4 font-bold text-foreground">The Challenge</h2> <p class="mt-4 text-body text-muted">${escape_html(caseStudy().businessChallenge)}</p></div> <div><h2 class="font-display text-h4 font-bold text-foreground">The Solution</h2> <p class="mt-4 text-body text-muted">${escape_html(caseStudy().solutionNarrative)}</p></div></div>`);
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
            SectionHeader($$renderer4, { eyebrow: "Technology Stack", title: "What we built it with" });
            $$renderer4.push(`<!----> <div class="mt-10">`);
            TechStackRow($$renderer4, { technologies: caseStudy().technologies });
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
                title: "The capability behind this"
              });
              $$renderer4.push(`<!----> <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
              const each_array_1 = ensure_array_like(relatedSolutions());
              for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                let solution = each_array_1[$$index_1];
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
      title: "Want results like this?",
      description: "Tell us what you're trying to solve — we'll help you turn it into a structured, working system.",
      primaryCta: { label: "Start a Project", href: "/#contact" }
    });
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
