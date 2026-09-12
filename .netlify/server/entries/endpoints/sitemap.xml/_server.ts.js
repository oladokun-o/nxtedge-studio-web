import { s as solutionDetails } from "../../../chunks/solutions.js";
import { p as productDetails } from "../../../chunks/products.js";
import { c as caseStudyDetails } from "../../../chunks/work.js";
import { i as industryDetails } from "../../../chunks/industries.js";
import { e as expertiseDetails } from "../../../chunks/expertise.js";
const site = "https://nxtedgestudio.com";
const GET = () => {
  const staticRoutes = ["", "/solutions", "/products", "/work", "/industries", "/expertise", "/pricing", "/process", "/insights"];
  const solutionRoutes = solutionDetails.map((s) => `/solutions/${s.slug}`);
  const productRoutes = productDetails.map((p) => `/products/${p.slug}`);
  const workRoutes = caseStudyDetails.map((c) => `/work/${c.slug}`);
  const industryRoutes = industryDetails.map((i) => `/industries/${i.slug}`);
  const expertiseRoutes = expertiseDetails.map((e) => `/expertise/${e.slug}`);
  const routes = [...staticRoutes, ...solutionRoutes, ...productRoutes, ...workRoutes, ...industryRoutes, ...expertiseRoutes];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${site}${route}</loc></url>`).join("\n")}
</urlset>`;
  return new Response(body, {
    headers: { "Content-Type": "application/xml" }
  });
};
export {
  GET
};
