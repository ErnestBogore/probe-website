/**
 * Blog Listing Page
 * 
 * Displays a paginated grid of blog posts fetched from DatoCMS.
 * Features responsive design with featured images, excerpts, and author information.
 */

import { getPaginatedBlogPosts } from "@/lib/datocms";
import { Blog7 } from "@/components/blog7";
import { BlogPost } from '@/types/blog';
import { generateItemListSchema, generateBreadcrumbSchema } from '@/lib/schema';

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params.page || '1', 10));
  const perPage = 12;

  const { posts, pagination } = await getPaginatedBlogPosts(currentPage, perPage);

  const postsForComponent = posts.map((post: BlogPost) => ({
    id: post.id,
    url: `/blog/${post.slug}`,
    image: post.featuredImage?.url || post.seo?.image?.url || '',
    title: post.title,
    summary: '',
    author: post.author?.name || 'Anonymous',
    date: (post.publishedDate || post._publishedAt) ?? '',
  }));

  // Only show featured post on first page
  let featuredPost = undefined;
  if (currentPage === 1) {
    const featuredPostData = posts.find((post: BlogPost) => post.slug === 'best-tools-for-tracking-brand-visibility-ai-search');
    if (featuredPostData) {
      featuredPost = {
        id: featuredPostData.id,
        url: `/blog/${featuredPostData.slug}`,
        image: featuredPostData.featuredImage?.url || featuredPostData.seo?.image?.url || '',
        title: featuredPostData.title,
        summary: '',
        author: featuredPostData.author?.name || 'Anonymous',
        date: (featuredPostData.publishedDate || featuredPostData._publishedAt) ?? '',
      };
    }
  }

  // Remove featured post from regular posts if it exists on page 1
  const regularPosts = currentPage === 1 
    ? postsForComponent.filter(post => !post.url.includes('best-tools-for-tracking-brand-visibility-ai-search'))
    : postsForComponent;

  const itemListSchema = generateItemListSchema({
    name: 'Analyze AI Blog',
    description: 'Insights, analysis, and thought leadership in AI search analytics from the Analyze AI team.',
    url: 'https://www.tryanalyze.ai/blog',
    items: postsForComponent.map(post => ({
      name: post.title,
      url: `https://www.tryanalyze.ai${post.url}`,
      ...(post.image && { image: post.image }),
    })),
    itemListOrder: 'descending',
  });
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    <Blog7 
      posts={regularPosts}
      title="Analyze AI Blog"
      description="Where marketers learn about strategies, tactics, and hands-on playbooks to make the most of AI search"
      subtitle="At Analyze AI, we constantly study how LLMs are redefining how people discover, learn, purchase products online. We share our insights on how to get your brand mentionned in answer engines, how to attribute AI visibility to revenue and real traffic, and more."
      featuredPost={featuredPost}
      pagination={{
        currentPage: pagination.currentPage,
        totalPages: pagination.totalPages,
        totalPosts: pagination.totalPosts,
        hasNextPage: pagination.hasNextPage,
        hasPrevPage: pagination.hasPrevPage,
      }}
    />
    </>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || '1', 10);
  const pageTitle = currentPage > 1 ? `Blog - Page ${currentPage} | Analyze AI` : 'Blog | Analyze AI';
  
  return {
    title: pageTitle,
    description: 'Insights, analysis, and thought leadership in data analytics and business intelligence from the Analyze AI team.',
    alternates: {
      canonical: currentPage > 1 ? `/blog?page=${currentPage}` : '/blog',
    },
    openGraph: {
      title: pageTitle,
      description: 'Insights, analysis, and thought leadership in AI traffic analytics and business intelligence from the Analyze AI team.',
      url: currentPage > 1 ? `/blog?page=${currentPage}` : '/blog',
      type: 'website',
      images: [{
        url: 'https://www.tryanalyze.ai/Artboard%20(1).png',
        width: 1536,
        height: 1024,
        alt: 'Analyze AI Blog',
      }],
    },
    ...(currentPage > 1 && {
      robots: {
        index: true,
        follow: true,
      },
    }),
  };
} 