import { e as escape_html, b as ensure_array_like, d as attr_class, s as stringify, a4 as clsx } from "../../chunks/index.js";
import { S as Section, C as Container, a as SEO } from "../../chunks/Section.js";
import { B as Button, I as Icon } from "../../chunks/Button.js";
import "clsx";
import AutoScroll from "embla-carousel-auto-scroll";
import { S as SectionHeader } from "../../chunks/SectionHeader.js";
import { F as FeatureGrid } from "../../chunks/FeatureGrid.js";
import { T as Timeline } from "../../chunks/Timeline.js";
import { C as CTA } from "../../chunks/CTA.js";
import { S as SolutionCard } from "../../chunks/SolutionCard.js";
import { B as Badge } from "../../chunks/Badge.js";
import { C as CaseStudyGrid } from "../../chunks/CaseStudyGrid.js";
import { C as Card } from "../../chunks/Card.js";
import { h as heroStats, f as flagshipProduct, w as whyNxtedge, c as caseStudies, a as industries, p as processSteps, i as insightCategories, s as solutions } from "../../chunks/homepage.js";
function LogoMarquee($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    [
      AutoScroll({
        speed: 0.6,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        stopOnFocusIn: false
      })
    ];
    $$renderer2.push(`<div class="overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"><div class="flex items-center">`);
    children($$renderer2);
    $$renderer2.push(`<!----></div></div>`);
  });
}
function Hero($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { settings = null, stats } = $$props;
    const capabilities = [
      "Web Development",
      "Mobile Applications",
      "Business Systems",
      "AI Solutions",
      "Cloud & Infrastructure"
    ];
    const placeholderClients = [
      "Acme Co.",
      "Globex",
      "Initech",
      "Umbrella Group",
      "Northwind Traders"
    ];
    Section($$renderer2, {
      padding: "lg",
      reveal: false,
      class: "relative overflow-hidden pt-15! pb-0!",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="pointer-events-none absolute inset-0 -z-10 opacity-25 mask-[radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" style="background-image: radial-gradient(var(--color-muted) 1.5px, transparent 1.5px); background-size: 28px 28px;"></div> `);
        Container($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:items-center"><div><h1 class="mt-5 font-display text-h1 font-bold leading-[1.05] text-foreground">`);
            if (settings?.heroHeading) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`${escape_html(settings.heroHeading)}`);
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push(`We build technology that helps businesses <span class="bg-accent/50 px-2">grow</span>.`);
            }
            $$renderer4.push(`<!--]--></h1> <p class="mt-6 max-w-xl text-body-lg text-muted">${escape_html(settings?.heroBio ?? "Nxtedge Studio designs, engineers, and scales digital products, business systems, and AI-powered solutions for businesses that need more than a website.")}</p> <div class="mt-8 flex flex-wrap gap-4">`);
            Button($$renderer4, {
              href: "#contact",
              icon: "arrow-up-right",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Start a project`);
              }
            });
            $$renderer4.push(`<!----> `);
            Button($$renderer4, {
              href: "#work",
              variant: "outline",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->See Our Work`);
              }
            });
            $$renderer4.push(`<!----></div> <div class="mt-10 flex flex-wrap items-center gap-x-3 gap-y-3"><span class="text-xs uppercase tracking-wide text-muted font-medium">Accredited by</span> <div class="flex flex-wrap items-center gap-x-6 gap-y-3"><a href="#" aria-label="Clutch" class="block"><svg class="h-4 w-auto" viewBox="0 0 1758 500" xmlns="http://www.w3.org/2000/svg"><path d="M457.219 0H537.219V500H457.219V0ZM817.219 340.5C817.219 417.02 752.879 423.12 733.739 423.12C685.919 423.12 677.219 378.36 677.219 351.36V160H597.219V350.96C597.219 398.36 612.099 437.48 638.179 463.56C661.219 486.62 695.739 499.22 733.139 499.22C759.659 499.22 797.219 490.96 817.219 472.7V500H897.219V160H817.219V340.5ZM1057.22 40H977.219V160H917.219V240H977.219V500H1057.22V240H1117.22V160H1057.22V40ZM1369.16 398.34C1351.74 414 1328.74 422.68 1303.5 422.68C1247.86 422.68 1207 381.82 1207 325.72C1207 269.62 1246.56 230.48 1303.5 230.48C1328.3 230.48 1351.74 238.74 1369.6 254.4L1381.74 264.84L1435.68 210.92L1422.18 198.74C1390.44 170.08 1348.3 154 1303.48 154C1203.48 154 1130.86 226.16 1130.86 325.3C1130.86 424.02 1205.22 498.76 1303.48 498.76C1349.14 498.76 1391.72 482.68 1423.06 453.56L1436.1 441.38L1381.32 387.5L1369.16 398.34ZM1721.22 189.64C1698.18 166.6 1671.18 154 1633.78 154C1607.26 154 1577.22 162.26 1557.22 180.5V0H1477.22V500H1557.22V312.7C1557.22 236.18 1611.58 230.1 1630.72 230.1C1678.54 230.1 1677.22 274.88 1677.22 301.84V500H1757.22V302.26C1757.22 254.86 1747.32 215.74 1721.22 189.64Z" fill="#0B1C17"></path><path d="M1300.86 268.758C1316.2 268.758 1330.91 274.852 1341.76 285.699C1352.61 296.546 1358.7 311.258 1358.7 326.598C1358.7 341.938 1352.61 356.65 1341.76 367.497C1330.91 378.344 1316.2 384.438 1300.86 384.438C1285.52 384.438 1270.81 378.344 1259.96 367.497C1249.11 356.65 1243.02 341.938 1243.02 326.598C1243.02 311.258 1249.11 296.546 1259.96 285.699C1270.81 274.852 1285.52 268.758 1300.86 268.758Z" fill="#FF3D2E"></path><path d="M345.22 374.42C314.8 405.72 273.48 422.68 230 422.68C140.88 422.68 76.08 352.68 76.08 256.6C76.08 160.08 140.88 90.08 230 90.08C273.06 90.08 313.92 107.02 344.8 137.9L356.96 150.08L410.44 96.6L398.7 84.42C354.36 38.76 294.36 14 230 14C98.7 14 0 118.34 0 257.02C0 395.28 99.14 499.2 230 499.2C294.8 499.2 354.8 474 399.14 428.34L410.88 416.16L357.84 361.82L345.22 374.42Z" fill="#0B1C17"></path></svg></a> `);
            Icon($$renderer4, { name: "svelte", class: "size-5 text-[#FF3E00]" });
            $$renderer4.push(`<!----> `);
            Icon($$renderer4, { name: "tailwind", class: "size-5 text-[#06B6D4]" });
            $$renderer4.push(`<!----> `);
            Icon($$renderer4, { name: "sanity", class: "size-5 text-[#0D0E12]" });
            $$renderer4.push(`<!----> `);
            Icon($$renderer4, { name: "claude", class: "size-5 text-[#D97757]" });
            $$renderer4.push(`<!----> `);
            Icon($$renderer4, { name: "openai", class: "size-5 text-[#000000]" });
            $$renderer4.push(`<!----> `);
            Icon($$renderer4, { name: "gemini", class: "size-5 text-[#8E75B2]" });
            $$renderer4.push(`<!----> `);
            Icon($$renderer4, { name: "gsap", class: "size-5 text-[#0AE448]" });
            $$renderer4.push(`<!----> `);
            Icon($$renderer4, { name: "netlify", class: "size-5 text-[#00C7B7]" });
            $$renderer4.push(`<!----></div></div></div> <div class="relative hidden lg:block"><div class="rounded-2xl border border-border bg-background p-6 shadow-lg"><div class="flex items-center justify-between"><span class="font-mono text-xs uppercase tracking-wide text-muted">Full-Service Delivery</span> <span class="inline-flex size-8 items-center justify-center rounded-md bg-accent/50 text-black">`);
            Icon($$renderer4, { name: "shield", class: "size-4" });
            $$renderer4.push(`<!----></span></div> <p class="mt-4 text-h4 font-medium text-foreground">Everything under one team</p> <ul class="mt-6 flex flex-col gap-3"><!--[-->`);
            const each_array = ensure_array_like(capabilities);
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let capability = each_array[$$index];
              $$renderer4.push(`<li class="flex items-center gap-3 rounded-md bg-surface px-4 py-3 text-sm text-foreground/80"><span class="inline-flex size-5 items-center justify-center rounded-full bg-accent/50 text-black">`);
              Icon($$renderer4, { name: "check", class: "size-3" });
              $$renderer4.push(`<!----></span> ${escape_html(capability)}</li>`);
            }
            $$renderer4.push(`<!--]--></ul></div> <div class="absolute -bottom-6 -left-6 flex items-center gap-6 rounded-xl border border-border bg-primary px-6 py-4 text-white shadow-lg"><!--[-->`);
            const each_array_1 = ensure_array_like(stats);
            for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
              let stat = each_array_1[$$index_1];
              $$renderer4.push(`<div><p class="font-display text-h4 font-bold text-white">${escape_html(stat.value)}</p> <p class="text-xs text-white/60">${escape_html(stat.label)}</p></div>`);
            }
            $$renderer4.push(`<!--]--></div></div></div>`);
          }
        });
        $$renderer3.push(`<!---->`);
      }
    });
    $$renderer2.push(`<!----> `);
    Section($$renderer2, {
      class: "py-0! px-0!",
      children: ($$renderer3) => {
        Container($$renderer3, {
          class: "px-0!",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="mt-16 flex items-center gap-8 border-y border-border py-10 px-6 md:px-10"><span class="shrink-0 text-xs tracking-wide text-muted">Trusted by teams at</span> <div class="min-w-0 flex-1">`);
            LogoMarquee($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!--[-->`);
                const each_array_2 = ensure_array_like([...placeholderClients, ...placeholderClients]);
                for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
                  let client = each_array_2[i];
                  $$renderer5.push(`<a href="#" class="mr-10 shrink-0 font-display text-lg font-medium whitespace-nowrap text-foreground/40 transition-colors hover:text-foreground/70">${escape_html(client)}</a>`);
                }
                $$renderer5.push(`<!--]-->`);
              }
            });
            $$renderer4.push(`<!----></div></div>`);
          }
        });
      }
    });
    $$renderer2.push(`<!---->`);
  });
}
function BentoGrid($$renderer, $$props) {
  let { children, class: className = "" } = $$props;
  $$renderer.push(`<div${attr_class(`grid grid-cols-1 gap-6 md:grid-cols-6 ${stringify(className)}`)}>`);
  children($$renderer);
  $$renderer.push(`<!----></div>`);
}
function ProductHighlight($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { product } = $$props;
    const statusLabel = { live: "Live", beta: "Beta", "coming-soon": "In Development" };
    $$renderer2.push(`<div id="products" class="scroll-mt-24 rounded-2xl border border-border bg-surface p-8 md:p-12"><div class="grid gap-10 md:grid-cols-2 md:items-center"><div><div class="flex items-center gap-3">`);
    Badge($$renderer2, {
      tone: "accent",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->Flagship Product`);
      }
    });
    $$renderer2.push(`<!----> `);
    Badge($$renderer2, {
      tone: "neutral",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->${escape_html(statusLabel[product.status])}`);
      }
    });
    $$renderer2.push(`<!----></div> <h3 class="mt-5 font-display text-h2 font-bold text-foreground">${escape_html(product.title)}</h3> <p class="mt-2 text-body-lg text-muted">${escape_html(product.tagline)}</p> <p class="mt-5 text-body text-foreground/80">${escape_html(product.description)}</p> `);
    Button($$renderer2, {
      href: product.cta.href,
      class: "mt-8",
      icon: "arrow-up-right",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->${escape_html(product.cta.label)}`);
      }
    });
    $$renderer2.push(`<!----></div> <div class="grid gap-4"><!--[-->`);
    const each_array = ensure_array_like(product.features);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let feature = each_array[$$index];
      $$renderer2.push(`<div class="flex items-start gap-4 rounded-lg border border-border bg-background p-5"><span class="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-secondary/10 text-secondary">`);
      Icon($$renderer2, { name: feature.icon, class: "size-4" });
      $$renderer2.push(`<!----></span> <div><h4 class="font-medium text-foreground">${escape_html(feature.title)}</h4> <p class="mt-1 text-sm text-muted">${escape_html(feature.description)}</p></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    const defaultTitle = "Nxtedge Studio — Technology Company for Digital Products & Business Systems";
    const defaultDescription = "Nxtedge Studio designs, engineers, and scales digital products, business systems, and AI-powered solutions — including Nxtflo, our AI-powered delivery operating system.";
    const solutionSpans = [
      "md:col-span-4",
      "md:col-span-2",
      "md:col-span-2",
      "md:col-span-2",
      "md:col-span-2"
    ];
    const industryBadgeColors = [
      "bg-primary text-white",
      "bg-accent text-foreground",
      "bg-secondary text-white",
      "bg-primary text-white"
    ];
    SEO($$renderer2, {
      title: data.settings?.metaTitle ?? defaultTitle,
      description: data.settings?.metaDescription ?? defaultDescription,
      logo: data.settings?.logo,
      ogImage: data.settings?.ogImage
    });
    $$renderer2.push(`<!----> `);
    Hero($$renderer2, { settings: data.settings, stats: heroStats });
    $$renderer2.push(`<!----> `);
    Section($$renderer2, {
      id: "solutions",
      bg: "tint",
      children: ($$renderer3) => {
        Container($$renderer3, {
          children: ($$renderer4) => {
            SectionHeader($$renderer4, {
              eyebrow: "Solutions",
              title: "What we build",
              description: "Five core offerings, one team — from a first product to the systems that run your business."
            });
            $$renderer4.push(`<!----> `);
            BentoGrid($$renderer4, {
              class: "mt-14",
              children: ($$renderer5) => {
                $$renderer5.push(`<!--[-->`);
                const each_array = ensure_array_like(solutions);
                for (let i = 0, $$length = each_array.length; i < $$length; i++) {
                  let solution = each_array[i];
                  $$renderer5.push(`<div${attr_class(clsx(solutionSpans[i] ?? "md:col-span-2"))}>`);
                  SolutionCard($$renderer5, { solution, class: "h-full" });
                  $$renderer5.push(`<!----></div>`);
                }
                $$renderer5.push(`<!--]-->`);
              }
            });
            $$renderer4.push(`<!---->`);
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
            SectionHeader($$renderer4, {
              eyebrow: "Products",
              title: "What we're building for ourselves",
              description: "Proprietary software, built in-house first, then made available beyond Nxtedge Studio."
            });
            $$renderer4.push(`<!----> <div class="mt-14">`);
            ProductHighlight($$renderer4, { product: flagshipProduct });
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
            SectionHeader($$renderer4, {
              eyebrow: "Why Nxtedge",
              title: "Why businesses trust us with real systems"
            });
            $$renderer4.push(`<!----> <div class="mt-14">`);
            FeatureGrid($$renderer4, { items: whyNxtedge, columns: 4 });
            $$renderer4.push(`<!----></div>`);
          }
        });
      }
    });
    $$renderer2.push(`<!----> `);
    Section($$renderer2, {
      id: "work",
      bg: "background",
      children: ($$renderer3) => {
        Container($$renderer3, {
          children: ($$renderer4) => {
            SectionHeader($$renderer4, {
              eyebrow: "Work",
              title: "Systems we've delivered",
              description: "A sample of what we've built for clients — full names and results go live as each client signs off on public case studies."
            });
            $$renderer4.push(`<!----> <div class="mt-14">`);
            CaseStudyGrid($$renderer4, { caseStudies });
            $$renderer4.push(`<!----></div>`);
          }
        });
      }
    });
    $$renderer2.push(`<!----> `);
    Section($$renderer2, {
      id: "industries",
      bg: "tint",
      children: ($$renderer3) => {
        Container($$renderer3, {
          children: ($$renderer4) => {
            SectionHeader($$renderer4, { eyebrow: "Industries", title: "Industries we understand" });
            $$renderer4.push(`<!----> <div class="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
            const each_array_1 = ensure_array_like(industries);
            for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
              let industry = each_array_1[i];
              Card($$renderer4, {
                variant: "elevated",
                children: ($$renderer5) => {
                  $$renderer5.push(`<span${attr_class(`inline-flex size-11 items-center justify-center rounded-md ${stringify(industryBadgeColors[i % industryBadgeColors.length])}`)}>`);
                  Icon($$renderer5, { name: industry.icon, class: "size-5" });
                  $$renderer5.push(`<!----></span> <h3 class="mt-5 text-h4 font-bold text-foreground">${escape_html(industry.title)}</h3> <p class="mt-2 text-sm text-muted">${escape_html(industry.description)}</p>`);
                }
              });
            }
            $$renderer4.push(`<!--]--></div>`);
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
    Section($$renderer2, {
      id: "insights",
      bg: "surface",
      children: ($$renderer3) => {
        Container($$renderer3, {
          children: ($$renderer4) => {
            SectionHeader($$renderer4, {
              eyebrow: "Insights",
              title: "What we're learning and sharing",
              description: "Our content hub is in progress — here's what's coming."
            });
            $$renderer4.push(`<!----> <div class="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
            const each_array_2 = ensure_array_like(insightCategories);
            for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
              let insight = each_array_2[$$index_2];
              Card($$renderer4, {
                variant: "flush",
                class: "border border-dashed border-border",
                children: ($$renderer5) => {
                  Badge($$renderer5, {
                    tone: "neutral",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(insight.category)}`);
                    }
                  });
                  $$renderer5.push(`<!----> <p class="mt-4 text-body text-muted">${escape_html(insight.description)}</p>`);
                }
              });
            }
            $$renderer4.push(`<!--]--></div>`);
          }
        });
      }
    });
    $$renderer2.push(`<!----> `);
    CTA($$renderer2, {
      eyebrow: "Get Started",
      title: "Have a raw idea? That's enough to start.",
      description: "Tell us what you're trying to solve — we'll help you turn it into a structured, working system.",
      primaryCta: {
        label: "Start a Project",
        href: `mailto:${data.settings?.email ?? "hello@nxtedgestudio.com"}`
      },
      secondaryCta: data.settings?.calendarLink ? {
        label: "Book a Discovery Call",
        href: data.settings.calendarLink
      } : void 0
    });
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
