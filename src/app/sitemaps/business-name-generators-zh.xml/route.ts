import { NextResponse } from 'next/server';
import { getAllBusinessNameGeneratorsZh } from '@/lib/ai-tools/i18n/business-name-generators-config.zh';

export async function GET() {
  const baseUrl = 'https://www.tryanalyze.ai';

  const allGenerators = getAllBusinessNameGeneratorsZh();
  const generatorUrls = allGenerators.map(tool => ({
    url: `${baseUrl}/free-tools/zh/business-name-generator/${tool.slug}`,
    priority: 0.7,
    changefreq: 'weekly',
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${generatorUrls.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
