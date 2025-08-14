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

  const postsForComponent = allBlogPosts.map((post: BlogPost) => ({
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
      title="Probe Analytics Blog"
      description="Insights, analysis, and thought leadership in data analytics and business intelligence."
    />
  );
}

// Generate metadata for SEO
export async function generateMetadata() {
  return {
    title: 'Blog | Probe Analytics',
    description: 'Insights, analysis, and thought leadership in data analytics and business intelligence from the Probe Analytics team.',
    openGraph: {
      title: 'Blog | Probe Analytics',
      description: 'Insights, analysis, and thought leadership in data analytics and business intelligence from the Probe Analytics team.',
      type: 'website',
    },
  };
} 