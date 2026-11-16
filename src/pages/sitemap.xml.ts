// Sitemap for Google and other search engines. Built at build time.
// Add new pages to `staticPages`. Job pages come from src/data/jobs.ts.
import type { APIRoute } from 'astro';
import { jobs } from '../data/jobs';

const staticPages = ['/', '/about/', '/products/', '/news/', '/careers/', '/contact/'];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://playeronespace.com');
  const jobPages = jobs.filter((j) => !j.external).map((j) => `/careers/${j.slug}/`);
  const urls = [...staticPages, ...jobPages]
    .map((p) => `  <url><loc>${new URL(p, base).href}</loc></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
