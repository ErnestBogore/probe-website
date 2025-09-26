/**
 * Blog Listing Page
 * 
 * Displays a grid of all blog posts fetched from DatoCMS.
 * Features responsive design with featured images, excerpts, and author information.
 */

import { getAllBlogPosts } from "@/lib/datocms";
import { Blog7 } from "@/components/blog7";
import { BlogPost } from '@/types/blog';

export default async function BlogPage() {
  const { allBlogPosts }: { allBlogPosts: BlogPost[] } = await getAllBlogPosts();

  const postsForComponent = allBlogPosts
    .filter(post => post.contentType !== 'case_study')
    .map((post: BlogPost) => ({
    id: post.id,
    url: `/blog/${post.slug}`,
    image: post.featuredImage?.url || post.seo?.image?.url || '',
    title: post.title,
    summary: post.excerpt ?? '',
    author: post.author?.name || 'Anonymous',
    date: (post.publishedDate || post._publishedAt) ?? '',
  }));

  return (
    <Blog7 
      posts={postsForComponent}
      title="Analyze Blog"
      description="Insights, analysis, and thought leadership in data analytics and business intelligence."
    />
  );
}

// Generate metadata for SEO
export async function generateMetadata() {
  return {
    title: 'Blog | Analyze',
    description: 'Insights, analysis, and thought leadership in data analytics and business intelligence from the Analyze team.',
    openGraph: {
      title: 'Blog | Analyze',
      description: 'Insights, analysis, and thought leadership in AI traffic analytics and business intelligence from the Analyze team.',
      type: 'website',
    },
  };
} 