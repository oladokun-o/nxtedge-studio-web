import { b as ensure_array_like, s as stringify, e as escape_html } from "../../../chunks/index.js";
import { a as SEO, S as Section, C as Container } from "../../../chunks/Section.js";
import { P as PageHeader } from "../../../chunks/PageHeader.js";
import { S as SectionHeader } from "../../../chunks/SectionHeader.js";
import { G as Grid } from "../../../chunks/Grid.js";
import { C as Card } from "../../../chunks/Card.js";
import { I as Icon, B as Button } from "../../../chunks/Button.js";
import { C as CTA } from "../../../chunks/CTA.js";
const servicesPricingNote = {
  title: "Solutions & Services",
  description: "Every client project is scoped individually — a corporate website, a mobile app, and a full business system are not the same job, and we don't pretend otherwise with a one-size price list. Tell us what you're building and we'll come back with a clear, itemized proposal before any work starts.",
  cta: { label: "Start a Project", href: "/#contact" }
};
const productPricing = [
  {
    productSlug: "nxtflo",
    productTitle: "Nxtflo",
    model: "subscription",
    note: "Working pricing hypothesis — not final, subject to change as Nxtflo is validated with early users.",
    tiers: [
      {
        name: "Free",
        price: "₦0",
        description: "Get started with the core onboarding flow.",
        features: ["Client intake questionnaire", "Basic project structuring"]
      },
      {
        name: "Solo",
        price: "₦5,000",
        cadence: "/month (or ₦50,000/year)",
        description: "For independent freelancers and consultants.",
        features: ["Everything in Free", "AI-generated project briefs", "Proposal generation"]
      },
      {
        name: "Studio",
        price: "₦15,000",
        cadence: "/month (or ₦150,000/year)",
        description: "For small studios running multiple concurrent clients.",
        features: ["Everything in Solo", "Multiple team members", "WhatsApp & email notifications"]
      },
      {
        name: "Agency",
        price: "₦35,000",
        cadence: "/month (or ₦350,000/year)",
        description: "For agencies with a growing client roster.",
        features: ["Everything in Studio", "Priority support", "Delivery tracking & reporting (in development)"]
      }
    ]
  },
  {
    productSlug: "nxtpay",
    productTitle: "Nxtpay",
    model: "implementation",
    note: "Working commercial model — not final, subject to the first paying customer functioning as a design partner.",
    tiers: [
      {
        name: "Implementation",
        price: "₦500,000",
        cadence: "one-time",
        description: "Initial setup, configuration, and onboarding.",
        features: ["Employee records setup", "Payroll rules configuration", "Secure access & auditability"]
      },
      {
        name: "Per Employee",
        price: "₦900",
        cadence: "/employee/month",
        description: "Ongoing subscription, scaled to headcount.",
        features: ["Payroll runs & approval", "Payslips and reports", "Customer account management"]
      }
    ]
  }
];
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    SEO($$renderer2, {
      title: "Pricing — Nxtedge Studio",
      description: "Product pricing for Nxtflo and Nxtpay, and how we price client services and solutions."
    });
    $$renderer2.push(`<!----> `);
    PageHeader($$renderer2, {
      eyebrow: "Pricing",
      title: "Straightforward, not one-size-fits-all",
      description: "Product pricing you can see now, and services scoped to what you're actually building."
    });
    $$renderer2.push(`<!----> <!--[-->`);
    const each_array = ensure_array_like(productPricing);
    for (let $$index_2 = 0, $$length = each_array.length; $$index_2 < $$length; $$index_2++) {
      let product = each_array[$$index_2];
      Section($$renderer2, {
        bg: product.productSlug === "nxtflo" ? "background" : "surface",
        children: ($$renderer3) => {
          Container($$renderer3, {
            children: ($$renderer4) => {
              SectionHeader($$renderer4, {
                eyebrow: product.productTitle,
                title: `${stringify(product.productTitle)} pricing`,
                description: product.note
              });
              $$renderer4.push(`<!----> `);
              Grid($$renderer4, {
                cols: product.tiers.length > 2 ? 4 : 2,
                class: "mt-10",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!--[-->`);
                  const each_array_1 = ensure_array_like(product.tiers);
                  for (let $$index_1 = 0, $$length2 = each_array_1.length; $$index_1 < $$length2; $$index_1++) {
                    let tier = each_array_1[$$index_1];
                    Card($$renderer5, {
                      variant: "bordered",
                      class: "flex h-full flex-col",
                      children: ($$renderer6) => {
                        $$renderer6.push(`<p class="font-mono text-xs uppercase tracking-wide text-secondary">${escape_html(tier.name)}</p> <p class="mt-3 font-display text-h3 font-bold text-foreground">${escape_html(tier.price)} `);
                        if (tier.cadence) {
                          $$renderer6.push("<!--[-->");
                          $$renderer6.push(`<span class="text-body font-normal text-muted">${escape_html(tier.cadence)}</span>`);
                        } else {
                          $$renderer6.push("<!--[!-->");
                        }
                        $$renderer6.push(`<!--]--></p> <p class="mt-2 text-sm text-muted">${escape_html(tier.description)}</p> <ul class="mt-5 flex flex-col gap-2"><!--[-->`);
                        const each_array_2 = ensure_array_like(tier.features);
                        for (let $$index = 0, $$length3 = each_array_2.length; $$index < $$length3; $$index++) {
                          let feature = each_array_2[$$index];
                          $$renderer6.push(`<li class="flex items-start gap-2 text-sm text-foreground/80">`);
                          Icon($$renderer6, { name: "check", class: "mt-0.5 size-4 shrink-0 text-success" });
                          $$renderer6.push(`<!----> ${escape_html(feature)}</li>`);
                        }
                        $$renderer6.push(`<!--]--></ul>`);
                      }
                    });
                  }
                  $$renderer5.push(`<!--]-->`);
                }
              });
              $$renderer4.push(`<!---->`);
            }
          });
        }
      });
    }
    $$renderer2.push(`<!--]--> `);
    Section($$renderer2, {
      bg: "primary",
      children: ($$renderer3) => {
        Container($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="max-w-2xl"><span class="font-mono text-xs uppercase tracking-wide text-white/60">${escape_html(servicesPricingNote.title)}</span> <p class="mt-4 text-body-lg text-white/80">${escape_html(servicesPricingNote.description)}</p> `);
            Button($$renderer4, {
              href: servicesPricingNote.cta.href,
              variant: "inverted",
              class: "mt-8",
              icon: "arrow-up-right",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(servicesPricingNote.cta.label)}`);
              }
            });
            $$renderer4.push(`<!----></div>`);
          }
        });
      }
    });
    $$renderer2.push(`<!----> `);
    CTA($$renderer2, {
      eyebrow: "Get Started",
      title: "Not sure what this costs?",
      description: "Tell us what you're trying to solve — we'll come back with a clear, itemized proposal.",
      primaryCta: { label: "Start a Project", href: "/#contact" }
    });
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
