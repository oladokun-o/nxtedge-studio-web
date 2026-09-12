import type { RequestHandler } from './$types';

// website-audit.md §11 flagged this as missing — now that real multi-page
// routes exist (Phase 4), it's worth having.
export const GET: RequestHandler = () => {
  const body = `User-agent: *\nAllow: /\n\nSitemap: https://nxtedgestudio.com/sitemap.xml\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' }
  });
};
