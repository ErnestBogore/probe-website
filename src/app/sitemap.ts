import { MetadataRoute } from 'next';
import { getAllBlogPosts, getAllPromptSlugs, getAllCategorySlugs } from '@/lib/datocms';

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
  ];

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

    return [...staticPages, ...blogPages, ...caseStudyPages, ...promptCategoryPages, ...promptPages];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return static pages only if blog fetch fails
    return staticPages;
  }
}
