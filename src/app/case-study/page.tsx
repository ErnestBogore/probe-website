/**
 * Case Study Listing Page
 * 
 * Displays a grid of all case studies fetched from DatoCMS.
 */

import { getAllBlogPosts } from "@/lib/datocms";
import { Blog7 } from "@/components/blog7";
import { BlogPost } from '@/types/blog';

export default async function CaseStudyPage() {
  const { allBlogPosts }: { allBlogPosts: BlogPost[] } = await getAllBlogPosts();

  const caseStudies = allBlogPosts.filter(post => post.contentType === 'case_study');

  const postsForComponent = caseStudies.map((post: BlogPost) => ({
    id: post.id,
    url: `/case-study/${post.slug}`,
    image: post.featuredImage?.url || post.seo?.image?.url || '',
    title: post.title,
    summary: post.excerpt ?? '',
    author: post.author?.name || 'Anonymous',
    date: (post.publishedDate || post._publishedAt) ?? '',
  }));

  return (
    <Blog7 
      posts={postsForComponent}
      title="Case Studies"
      description="Explore our case studies to see how we've helped businesses like yours succeed."
    />
  );
}

// Generate metadata for SEO
export async function generateMetadata() {
  return {
    title: 'Case Studies | Probe Analytics',
    description: 'Explore our case studies to see how we\'ve helped businesses like yours succeed.',
    openGraph: {
      title: 'Case Studies | Probe Analytics',
      description: 'Explore our case studies to see how we\'ve helped businesses like yours succeed.',
      type: 'website',
    },
  };
}
