import { solutionDetails } from '$lib/content/solutions';
import { productDetails } from '$lib/content/products';
import { caseStudyDetails } from '$lib/content/work';
import { industryDetails } from '$lib/content/industries';
import { expertiseDetails } from '$lib/content/expertise';
import type { RequestHandler } from './$types';

const site = 'https://nxtedgestudio.com';

export const GET: RequestHandler = () => {
  const staticRoutes = ['', '/solutions', '/products', '/work', '/industries', '/expertise', '/pricing', '/process', '/insights'];
  const solutionRoutes = solutionDetails.map((s) => `/solutions/${s.slug}`);
  const productRoutes = productDetails.map((p) => `/products/${p.slug}`);
  const workRoutes = caseStudyDetails.map((c) => `/work/${c.slug}`);
  const industryRoutes = industryDetails.map((i) => `/industries/${i.slug}`);
  const expertiseRoutes = expertiseDetails.map((e) => `/expertise/${e.slug}`);
  const routes = [...staticRoutes, ...solutionRoutes, ...productRoutes, ...workRoutes, ...industryRoutes, ...expertiseRoutes];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${site}${route}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' }
  });
};
