import { NextResponse } from 'next/server';
import { getAllPromptSlugs, getAllCategorySlugs } from '@/lib/datocms';

export async function GET() {
  const baseUrl = 'https://www.tryanalyze.ai';

  try {
    const [allPrompts, allCategories] = await Promise.all([
      getAllPromptSlugs(),
      getAllCategorySlugs(),
    ]);

    const categoryUrls = allCategories.map(category => ({
      url: `${baseUrl}/prompts/${category.slugCategory}`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
      changefreq: 'daily',
    }));

    const promptUrls = allPrompts.map(prompt => ({
      url: `${baseUrl}/prompts/${prompt.category.slugCategory}/${prompt.slug}`,
      lastmod: prompt._updatedAt || new Date().toISOString(),
      priority: 0.6,
      changefreq: 'weekly',
    }));

    const allUrls = [...categoryUrls, ...promptUrls];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${new Date(page.lastmod).toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Error generating prompts sitemap:', error);
    return new NextResponse('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>', {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
}
