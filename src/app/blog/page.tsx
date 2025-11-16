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

  // Find the featured post
  const featuredPost = allBlogPosts.find(post => post.slug === 'best-tools-for-tracking-brand-visibility-ai-search');
  
  // Remove featured post from regular posts if it exists
  const regularPosts = postsForComponent.filter(post => !post.url.includes('best-tools-for-tracking-brand-visibility-ai-search'));

  return (
    <Blog7 
      posts={regularPosts}
      title="Analyze Blog"
      description="Where marketers learn about strategies, tactics, and hands-on playbooks to make the most of AI search"
      subtitle="At Analyze, we constantly study how LLMs are redefining how people discover, learn, purchase products online. We share our insights on how to get your brand mentionned in answer engines, how to attribute AI visibility to revenue and real traffic, and more."
      featuredPost={featuredPost ? {
        id: featuredPost.id,
        url: `/blog/${featuredPost.slug}`,
        image: featuredPost.featuredImage?.url || featuredPost.seo?.image?.url || '',
        title: featuredPost.title,
        summary: featuredPost.excerpt ?? '',
        author: featuredPost.author?.name || 'Anonymous',
        date: (featuredPost.publishedDate || featuredPost._publishedAt) ?? '',
      } : undefined}
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