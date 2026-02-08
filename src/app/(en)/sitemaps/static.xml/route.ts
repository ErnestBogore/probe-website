import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.tryanalyze.ai';

  const staticPages = [
    { url: baseUrl, priority: 0.8, changefreq: 'daily' },
    { url: `${baseUrl}/features/monitor`, priority: 0.8, changefreq: 'daily' },
    { url: `${baseUrl}/features/discover`, priority: 0.8, changefreq: 'daily' },
    { url: `${baseUrl}/features/govern`, priority: 0.8, changefreq: 'daily' },
    { url: `${baseUrl}/features/improve`, priority: 0.8, changefreq: 'daily' },
    { url: `${baseUrl}/blog`, priority: 0.8, changefreq: 'daily' },
    { url: `${baseUrl}/pricing`, priority: 0.9, changefreq: 'weekly' },
    { url: `${baseUrl}/case-study`, priority: 0.8, changefreq: 'daily' },
    { url: `${baseUrl}/prompts`, priority: 0.8, changefreq: 'daily' },
    { url: `${baseUrl}/talk-to-a-human`, priority: 0.9, changefreq: 'weekly' },
    // Use Cases
    { url: `${baseUrl}/use-cases/chatgpt`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/use-cases/google-ai-mode`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/use-cases/gemini`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/use-cases/claude`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/use-cases/microsoft-copilot`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/use-cases/perplexity-ai`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/use-cases/meta-ai`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/use-cases/deepseek`, priority: 0.8, changefreq: 'weekly' },
    // Compare Pages
    { url: `${baseUrl}/compare/analyze-vs-ahrefs-brand-radar`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/compare/analyze-vs-hubspot-ai-search-grader`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/compare/analyze-vs-google-looker-studio`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/compare/analyze-vs-semrush-ai-toolkit`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/compare/analyze-vs-writesonic-geo`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/compare/analyze-vs-athenahq`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/compare/analyze-vs-profound`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/compare/analyze-vs-peec-ai`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/compare/analyze-vs-surfer`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/compare/analyze-vs-gsc`, priority: 0.8, changefreq: 'weekly' },
    // Free Tools Index Pages
    { url: `${baseUrl}/free-tools`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/free-tools/ai-website-audit-tool`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/free-tools/llm-txt-generator-tool`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/free-tools/perplexity-ai-alternative`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/free-tools/fr`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/free-tools/de`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/free-tools/es`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/free-tools/pt`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/free-tools/it`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/free-tools/ja`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/free-tools/zh`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/free-tools/ko`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/free-tools/tr`, priority: 0.8, changefreq: 'weekly' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
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
