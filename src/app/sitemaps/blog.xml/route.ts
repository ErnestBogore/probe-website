import { NextResponse } from 'next/server';
import { getAllBlogPosts } from '@/lib/datocms';

export async function GET() {
  const baseUrl = 'https://www.tryanalyze.ai';

  try {
    const { allBlogPosts } = await getAllBlogPosts();
    
    // Separate blog posts and case studies
    const blogPosts = allBlogPosts.filter(post => post.contentType === 'blog_post' || !post.contentType);
    const caseStudies = allBlogPosts.filter(post => post.contentType === 'case_study');

    const blogUrls = blogPosts.map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastmod: post._updatedAt || post._publishedAt || new Date().toISOString(),
      priority: 0.8,
      changefreq: 'daily',
    }));

    const caseStudyUrls = caseStudies.map(post => ({
      url: `${baseUrl}/case-study/${post.slug}`,
      lastmod: post._updatedAt || post._publishedAt || new Date().toISOString(),
      priority: 0.8,
      changefreq: 'daily',
    }));

    const allUrls = [...blogUrls, ...caseStudyUrls];

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
    console.error('Error generating blog sitemap:', error);
    return new NextResponse('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>', {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
}
