import { b as ensure_array_like, e as escape_html, s as stringify, f as derived } from "../../../../chunks/index.js";
import { a as SEO, S as Section, C as Container } from "../../../../chunks/Section.js";
import { P as PageHeader } from "../../../../chunks/PageHeader.js";
import { B as Breadcrumbs } from "../../../../chunks/Breadcrumbs.js";
import { S as SectionHeader } from "../../../../chunks/SectionHeader.js";
import { I as Icon } from "../../../../chunks/Button.js";
import { T as TechStackRow } from "../../../../chunks/TechStackRow.js";
import { T as Timeline } from "../../../../chunks/Timeline.js";
import { C as CaseStudyGrid } from "../../../../chunks/CaseStudyGrid.js";
import { P as ProductCard } from "../../../../chunks/ProductCard.js";
import { C as CTA } from "../../../../chunks/CTA.js";
import { c as caseStudies, f as flagshipProduct, p as processSteps } from "../../../../chunks/homepage.js";
function CapabilityList($$renderer, $$props) {
  let { capabilities } = $$props;
  $$renderer.push(`<ul class="grid grid-cols-1 gap-4 sm:grid-cols-2"><!--[-->`);
  const each_array = ensure_array_like(capabilities);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let capability = each_array[$$index];
    $$renderer.push(`<li class="flex items-start gap-3 rounded-lg border border-border p-5"><span class="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-success/15 text-success">`);
    Icon($$renderer, { name: "check", class: "size-4" });
    $$renderer.push(`<!----></span> <div><p class="font-medium text-foreground">${escape_html(capability.title)}</p> <p class="mt-1 text-sm text-muted">${escape_html(capability.description)}</p></div></li>`);
  }
  $$renderer.push(`<!--]--></ul>`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let solution = derived(() => data.solution);
    let relatedCaseStudies = derived(() => caseStudies.filter((cs) => cs.relatedSolutionSlugs.includes(solution().slug)));
    let relatedProducts = derived(() => solution().relatedProductSlugs.includes(flagshipProduct.slug) ? [flagshipProduct] : []);
    SEO($$renderer2, {
      title: `${stringify(solution().title)} — Nxtedge Studio`,
      description: solution().summary
    });
    $$renderer2.push(`<!----> `);
    {
      let breadcrumbs = function($$renderer3) {
        Breadcrumbs($$renderer3, {
          items: [
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" },
            { label: solution().title }
          ]
        });
      };
      PageHeader($$renderer2, {
        eyebrow: "Solutions",
        title: solution().title,
        description: solution().summary,
        breadcrumbs
      });
    }
    $$renderer2.push(`<!----> `);
    Section($$renderer2, {
      bg: "background",
      children: ($$renderer3) => {
        Container($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="max-w-3xl"><h2 class="text-h3 font-bold text-foreground">Overview</h2> <p class="mt-4 text-body-lg text-muted">${escape_html(solution().overview)}</p></div>`);
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
            SectionHeader($$renderer4, {
              eyebrow: "The Problem",
              title: "Business problems this solves"
            });
            $$renderer4.push(`<!----> <ul class="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3"><!--[-->`);
            const each_array = ensure_array_like(solution().businessProblems);
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let problem = each_array[$$index];
              $$renderer4.push(`<li class="rounded-lg border border-border bg-background p-5 text-body text-foreground/80">${escape_html(problem)}</li>`);
            }
            $$renderer4.push(`<!--]--></ul>`);
          }
        });
      }
    });
    $$renderer2.push(`<!----> `);
    Section($$renderer2, {
      bg: "background",
      children: ($$renderer3) => {
        Container($$renderer3, {
          children: ($$renderer4) => {
            SectionHeader($$renderer4, { eyebrow: "Capabilities", title: "What's included" });
            $$renderer4.push(`<!----> <div class="mt-10">`);
            CapabilityList($$renderer4, { capabilities: solution().capabilities });
            $$renderer4.push(`<!----></div>`);
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
            SectionHeader($$renderer4, { eyebrow: "Technology Stack", title: "What we build it with" });
            $$renderer4.push(`<!----> <div class="mt-10">`);
            TechStackRow($$renderer4, { technologies: solution().technologies });
            $$renderer4.push(`<!----></div>`);
          }
        });
      }
    });
    $$renderer2.push(`<!----> `);
    Section($$renderer2, {
      bg: "background",
      children: ($$renderer3) => {
        Container($$renderer3, {
          children: ($$renderer4) => {
            SectionHeader($$renderer4, { eyebrow: "Process", title: "How we work", align: "center" });
            $$renderer4.push(`<!----> <div class="mt-14">`);
            Timeline($$renderer4, { steps: processSteps });
            $$renderer4.push(`<!----></div>`);
          }
        });
      }
    });
    $$renderer2.push(`<!----> `);
    if (relatedCaseStudies().length > 0) {
      $$renderer2.push("<!--[-->");
      Section($$renderer2, {
        bg: "surface",
        children: ($$renderer3) => {
          Container($$renderer3, {
            children: ($$renderer4) => {
              SectionHeader($$renderer4, { eyebrow: "Related Work", title: "Case studies" });
              $$renderer4.push(`<!----> <div class="mt-10">`);
              CaseStudyGrid($$renderer4, { caseStudies: relatedCaseStudies() });
              $$renderer4.push(`<!----></div>`);
            }
          });
        }
      });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (relatedProducts().length > 0) {
      $$renderer2.push("<!--[-->");
      Section($$renderer2, {
        bg: "background",
        children: ($$renderer3) => {
          Container($$renderer3, {
            children: ($$renderer4) => {
              SectionHeader($$renderer4, {
                eyebrow: "Related Products",
                title: "Built with this solution"
              });
              $$renderer4.push(`<!----> <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2"><!--[-->`);
              const each_array_1 = ensure_array_like(relatedProducts());
              for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                let product = each_array_1[$$index_1];
                ProductCard($$renderer4, { product });
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
      title: `Ready to start your ${stringify(solution().title)} project?`,
      description: "Tell us what you're trying to solve — we'll help you turn it into a structured, working system.",
      primaryCta: { label: solution().cta.label, href: solution().cta.href }
    });
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
