// src/app/sitemap.xml/route.ts
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.autekcolombia.com';

interface SitemapPage {
  loc: string;
  lastModified: string;
  changeFrequency: string;
  priority: number;
}

const otherPages: SitemapPage[] = [
  { loc: `${BASE_URL}/equipos-industriales`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.9 },
  { loc: `${BASE_URL}/equipos-industriales/hiladora-de-queso`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.9 },
  { loc: `${BASE_URL}/equipos-industriales/tanques-de-leche`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.9 },
  { loc: `${BASE_URL}/equipos-industriales/mezclador-de-carne`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.9 },
  { loc: `${BASE_URL}/equipos-industriales/bandas-transportadoras`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.9 },
  { loc: `${BASE_URL}/equipos-industriales/elevador-de-carne`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.9 },
  { loc: `${BASE_URL}/equipos-industriales/calderas`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.9 },
];

function generateSiteMapXml() {
  let urlsXml = '';

  urlsXml += `
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;

  otherPages.forEach(page => {
    urlsXml += `
  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urlsXml}
</urlset>`;
}

export async function GET() {
  const sitemap = generateSiteMapXml();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
