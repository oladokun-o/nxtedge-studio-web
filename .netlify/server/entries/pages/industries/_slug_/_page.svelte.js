import { s as stringify, f as derived, b as ensure_array_like, e as escape_html, a as attr } from "../../../../chunks/index.js";
import { a as SEO, S as Section, C as Container } from "../../../../chunks/Section.js";
import { P as PageHeader } from "../../../../chunks/PageHeader.js";
import { B as Breadcrumbs } from "../../../../chunks/Breadcrumbs.js";
import { S as SectionHeader } from "../../../../chunks/SectionHeader.js";
import { I as Icon } from "../../../../chunks/Button.js";
import { S as SolutionCard } from "../../../../chunks/SolutionCard.js";
import { C as CaseStudyCard } from "../../../../chunks/CaseStudyCard.js";
import { C as CTA } from "../../../../chunks/CTA.js";
import { s as solutionDetails } from "../../../../chunks/solutions.js";
import { c as caseStudyDetails } from "../../../../chunks/work.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let industry = derived(() => data.industry);
    let relatedSolutions = derived(() => solutionDetails.filter((s) => industry().relatedSolutionSlugs.includes(s.slug)));
    let relatedCaseStudies = derived(() => caseStudyDetails.filter((c) => industry().relatedCaseStudySlugs.includes(c.slug)));
    SEO($$renderer2, {
      title: `${stringify(industry().title)} — Nxtedge Studio`,
      description: industry().description
    });
    $$renderer2.push(`<!----> `);
    {
      let breadcrumbs = function($$renderer3) {
        Breadcrumbs($$renderer3, {
          items: [
            { label: "Home", href: "/" },
            { label: "Industries", href: "/industries" },
            { label: industry().title }
          ]
        });
      };
      PageHeader($$renderer2, {
        eyebrow: "Industries",
        title: industry().title,
        description: industry().description,
        breadcrumbs
      });
    }
    $$renderer2.push(`<!----> `);
    Section($$renderer2, {
      bg: "background",
      children: ($$renderer3) => {
        Container($$renderer3, {
          children: ($$renderer4) => {
            SectionHeader($$renderer4, {
              eyebrow: "The Challenges",
              title: "What businesses in this space run into"
            });
            $$renderer4.push(`<!----> <ul class="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3"><!--[-->`);
            const each_array = ensure_array_like(industry().challenges);
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let challenge = each_array[$$index];
              $$renderer4.push(`<li class="flex items-start gap-3 rounded-lg border border-border p-5"><span class="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-secondary/10 text-secondary">`);
              Icon($$renderer4, { name: "check", class: "size-4" });
              $$renderer4.push(`<!----></span> <p class="text-body text-foreground/80">${escape_html(challenge)}</p></li>`);
            }
            $$renderer4.push(`<!--]--></ul>`);
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
            $$renderer4.push(`<div class="max-w-3xl"><h2 class="text-h3 font-bold text-foreground">How we solve them</h2> <p class="mt-4 text-body-lg text-muted">${escape_html(industry().howWeSolve)}</p></div>`);
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
                title: "What we'd bring to this"
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
    if (relatedCaseStudies().length > 0) {
      $$renderer2.push("<!--[-->");
      Section($$renderer2, {
        bg: "surface",
        children: ($$renderer3) => {
          Container($$renderer3, {
            children: ($$renderer4) => {
              SectionHeader($$renderer4, {
                eyebrow: "Related Work",
                title: "Case studies in this industry"
              });
              $$renderer4.push(`<!----> <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"><!--[-->`);
              const each_array_2 = ensure_array_like(relatedCaseStudies());
              for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
                let caseStudy = each_array_2[$$index_2];
                $$renderer4.push(`<a${attr("href", `/work/${stringify(caseStudy.slug)}`)} class="block h-full">`);
                CaseStudyCard($$renderer4, { caseStudy });
                $$renderer4.push(`<!----></a>`);
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
      title: `Building for ${stringify(industry().title)}?`,
      description: "Tell us what you're trying to solve — we'll help you turn it into a structured, working system.",
      primaryCta: { label: "Start a Project", href: "/#contact" }
    });
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
