import { NextResponse } from 'next/server';

// Sitemap index that references all individual sitemaps
export async function GET() {
  const baseUrl = 'https://www.tryanalyze.ai';
  
  const sitemaps = [
    `${baseUrl}/sitemaps/static.xml`,
    `${baseUrl}/sitemaps/blog.xml`,
    `${baseUrl}/sitemaps/prompts.xml`,
    `${baseUrl}/sitemaps/free-tools.xml`,
    `${baseUrl}/sitemaps/free-tools-de.xml`,
    `${baseUrl}/sitemaps/free-tools-es.xml`,
    `${baseUrl}/sitemaps/free-tools-fr.xml`,
    `${baseUrl}/sitemaps/free-tools-it.xml`,
    `${baseUrl}/sitemaps/free-tools-ja.xml`,
    `${baseUrl}/sitemaps/free-tools-ko.xml`,
    `${baseUrl}/sitemaps/free-tools-pt.xml`,
    `${baseUrl}/sitemaps/free-tools-tr.xml`,
    `${baseUrl}/sitemaps/free-tools-zh.xml`,
    `${baseUrl}/sitemaps/business-name-generators.xml`,
    `${baseUrl}/sitemaps/business-name-generators-de.xml`,
    `${baseUrl}/sitemaps/business-name-generators-es.xml`,
    `${baseUrl}/sitemaps/business-name-generators-fr.xml`,
    `${baseUrl}/sitemaps/business-name-generators-it.xml`,
    `${baseUrl}/sitemaps/business-name-generators-ja.xml`,
    `${baseUrl}/sitemaps/business-name-generators-ko.xml`,
    `${baseUrl}/sitemaps/business-name-generators-pt.xml`,
    `${baseUrl}/sitemaps/business-name-generators-tr.xml`,
    `${baseUrl}/sitemaps/business-name-generators-zh.xml`,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(url => `  <sitemap>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
