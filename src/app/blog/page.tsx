/**
 * Blog Listing Page
 * 
 * Displays a paginated grid of blog posts fetched from DatoCMS.
 * Features responsive design with featured images, excerpts, and author information.
 */

import { getPaginatedBlogPosts } from "@/lib/datocms";
import { Blog7 } from "@/components/blog7";
import { BlogPost } from '@/types/blog';

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

  return (
    <Blog7 
      posts={regularPosts}
      title="Analyze Blog"
      description="Where marketers learn about strategies, tactics, and hands-on playbooks to make the most of AI search"
      subtitle="At Analyze, we constantly study how LLMs are redefining how people discover, learn, purchase products online. We share our insights on how to get your brand mentionned in answer engines, how to attribute AI visibility to revenue and real traffic, and more."
      featuredPost={featuredPost}
      pagination={{
        currentPage: pagination.currentPage,
        totalPages: pagination.totalPages,
        totalPosts: pagination.totalPosts,
        hasNextPage: pagination.hasNextPage,
        hasPrevPage: pagination.hasPrevPage,
      }}
    />
  );
}

// Generate metadata for SEO
export async function generateMetadata({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || '1', 10);
  const pageTitle = currentPage > 1 ? `Blog - Page ${currentPage} | Analyze` : 'Blog | Analyze';
  
  return {
    title: pageTitle,
    description: 'Insights, analysis, and thought leadership in data analytics and business intelligence from the Analyze team.',
    openGraph: {
      title: pageTitle,
      description: 'Insights, analysis, and thought leadership in AI traffic analytics and business intelligence from the Analyze team.',
      type: 'website',
    },
    ...(currentPage > 1 && {
      robots: {
        index: true,
        follow: true,
      },
    }),
  };
} 