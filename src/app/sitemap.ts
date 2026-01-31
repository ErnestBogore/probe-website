import { MetadataRoute } from 'next';
import { getAllBlogPosts, getAllPromptSlugs, getAllCategorySlugs } from '@/lib/datocms';
import { getAllTools } from '@/lib/ai-tools/tools-config';
import { getAllBusinessNameGenerators } from '@/lib/ai-tools/business-name-generators-config';
import { getAllToolsFr } from '@/lib/ai-tools/i18n/tools-config.fr';
import { getAllToolsDe } from '@/lib/ai-tools/i18n/tools-config.de';
import { getAllToolsEs } from '@/lib/ai-tools/i18n/tools-config.es';
import { getAllToolsPt } from '@/lib/ai-tools/i18n/tools-config.pt';
import { getAllToolsIt } from '@/lib/ai-tools/i18n/tools-config.it';
import { getAllToolsJa } from '@/lib/ai-tools/i18n/tools-config.ja';
import { getAllToolsZh } from '@/lib/ai-tools/i18n/tools-config.zh';
import { getAllToolsKo } from '@/lib/ai-tools/i18n/tools-config.ko';
import { getAllToolsTr } from '@/lib/ai-tools/i18n/tools-config.tr';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.tryanalyze.ai';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/features/monitor`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/features/discover`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/features/govern`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/features/improve`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-study`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/free-tools/ai-website-audit-tool`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/free-tools/llm-txt-generator-tool`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/free-tools/perplexity-ai-alternative`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/prompts`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/talk-to-a-human`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Use Cases - AI Engine Tracking Pages
    {
      url: `${baseUrl}/use-cases/chatgpt`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/use-cases/google-ai-mode`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/use-cases/gemini`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/use-cases/claude`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/use-cases/microsoft-copilot`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/use-cases/perplexity-ai`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/use-cases/meta-ai`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/use-cases/deepseek`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Compare Pages - Competitor Comparison Pages
    {
      url: `${baseUrl}/compare/analyze-vs-ahrefs-brand-radar`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare/analyze-vs-hubspot-ai-search-grader`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare/analyze-vs-google-looker-studio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare/analyze-vs-semrush-ai-toolkit`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare/analyze-vs-writesonic-geo`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare/analyze-vs-athenahq`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare/analyze-vs-profound`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare/analyze-vs-peec-ai`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare/analyze-vs-surfer`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare/analyze-vs-gsc`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Free Tools Index Page
    {
      url: `${baseUrl}/free-tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/free-tools/fr`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/free-tools/de`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/free-tools/es`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/free-tools/pt`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/free-tools/it`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/free-tools/ja`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/free-tools/zh`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/free-tools/ko`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/free-tools/tr`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Generate free tools pages (from tools-config)
  const allFreeTools = getAllTools();
  const freeToolPages: MetadataRoute.Sitemap = allFreeTools.map((tool) => ({
    url: `${baseUrl}/free-tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Generate French free tools pages
  const allFreeToolsFr = getAllToolsFr();
  const freeToolPagesFr: MetadataRoute.Sitemap = allFreeToolsFr.map((tool) => ({
    url: `${baseUrl}/free-tools/fr/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Generate German free tools pages
  const allFreeToolsDe = getAllToolsDe();
  const freeToolPagesDe: MetadataRoute.Sitemap = allFreeToolsDe.map((tool) => ({
    url: `${baseUrl}/free-tools/de/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Generate Spanish free tools pages
  const allFreeToolsEs = getAllToolsEs();
  const freeToolPagesEs: MetadataRoute.Sitemap = allFreeToolsEs.map((tool) => ({
    url: `${baseUrl}/free-tools/es/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Generate Portuguese free tools pages
  const allFreeToolsPt = getAllToolsPt();
  const freeToolPagesPt: MetadataRoute.Sitemap = allFreeToolsPt.map((tool) => ({
    url: `${baseUrl}/free-tools/pt/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Generate Italian free tools pages
  const allFreeToolsIt = getAllToolsIt();
  const freeToolPagesIt: MetadataRoute.Sitemap = allFreeToolsIt.map((tool) => ({
    url: `${baseUrl}/free-tools/it/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Generate Japanese free tools pages
  const allFreeToolsJa = getAllToolsJa();
  const freeToolPagesJa: MetadataRoute.Sitemap = allFreeToolsJa.map((tool) => ({
    url: `${baseUrl}/free-tools/ja/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Generate Chinese free tools pages
  const allFreeToolsZh = getAllToolsZh();
  const freeToolPagesZh: MetadataRoute.Sitemap = allFreeToolsZh.map((tool) => ({
    url: `${baseUrl}/free-tools/zh/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Generate Korean free tools pages
  const allFreeToolsKo = getAllToolsKo();
  const freeToolPagesKo: MetadataRoute.Sitemap = allFreeToolsKo.map((tool) => ({
    url: `${baseUrl}/free-tools/ko/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Generate Turkish free tools pages
  const allFreeToolsTr = getAllToolsTr();
  const freeToolPagesTr: MetadataRoute.Sitemap = allFreeToolsTr.map((tool) => ({
    url: `${baseUrl}/free-tools/tr/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Generate business name generator pages
  const allBusinessNameGenerators = getAllBusinessNameGenerators();
  const businessNameGeneratorPages: MetadataRoute.Sitemap = allBusinessNameGenerators.map((tool) => ({
    url: `${baseUrl}/free-tools/business-name-generator/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  try {
    // Fetch all dynamic content from DatoCMS in parallel
    const [{ allBlogPosts }, allPrompts, allCategories] = await Promise.all([
      getAllBlogPosts(),
      getAllPromptSlugs(),
      getAllCategorySlugs(),
    ]);

    // Separate blog posts and case studies
    const blogPosts = allBlogPosts.filter(post => post.contentType === 'blog_post' || !post.contentType);
    const caseStudies = allBlogPosts.filter(post => post.contentType === 'case_study');

    // Generate blog post entries
    const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post._updatedAt || post._publishedAt || new Date()),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    }));

    // Generate case study entries
    const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((post) => ({
      url: `${baseUrl}/case-study/${post.slug}`,
      lastModified: new Date(post._updatedAt || post._publishedAt || new Date()),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    }));

    // Generate prompt category entries
    const promptCategoryPages: MetadataRoute.Sitemap = allCategories.map((category) => ({
      url: `${baseUrl}/prompts/${category.slugCategory}`,
      lastModified: new Date(), // Categories don't have a specific updated date
      changeFrequency: 'daily' as const,
      priority: 0.7,
    }));

    // Generate individual prompt entries
    const promptPages: MetadataRoute.Sitemap = allPrompts.map((prompt) => ({
      url: `${baseUrl}/prompts/${prompt.category.slugCategory}/${prompt.slug}`,
      lastModified: new Date(prompt._updatedAt || new Date()),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));

    return [...staticPages, ...freeToolPages, ...freeToolPagesFr, ...freeToolPagesDe, ...freeToolPagesEs, ...freeToolPagesPt, ...freeToolPagesIt, ...freeToolPagesJa, ...freeToolPagesZh, ...freeToolPagesKo, ...freeToolPagesTr, ...businessNameGeneratorPages, ...blogPages, ...caseStudyPages, ...promptCategoryPages, ...promptPages];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return static pages only if blog fetch fails
    return staticPages;
  }
}
