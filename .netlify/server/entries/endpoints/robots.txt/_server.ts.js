const GET = () => {
  const body = `User-agent: *
Allow: /

Sitemap: https://nxtedgestudio.com/sitemap.xml
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain" }
  });
};
export {
  GET
};
