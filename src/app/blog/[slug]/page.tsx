/**
 * Individual Blog Post Page
 * 
 * Displays a complete blog post with structured content, SEO optimization,
 * and related posts. Supports rich content blocks and responsive design.
 * 
 * Features:
 * - Server-side data fetching with ISR
 * - Dynamic SEO meta tags from DatoCMS
 * - Structured content rendering
 * - Related posts section
 * - Static path generation for performance
 * - Type-safe GraphQL queries
 */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { toNextMetadata } from "react-datocms";
import { performRequest } from "@/lib/datocms";
import { 
  metaTagsFragment, 
  blogPostFragment, 
  blogPostSummaryFragment, 
  siteFragment 
} from "@/lib/fragments";
import { BlogPostResponse, BlogSlugPageProps } from "@/lib/types";
import { BlogPost } from "@/components/blog/blog-post";

const BLOG_POST_QUERY = `
  query BlogPost($slug: String!) {
    site: _site {
      ...siteFragment
    }
    blogPost(filter: {slug: {eq: $slug}}) {
      ...blogPostFragment
    }
    morePosts: allBlogPosts(orderBy: publishedAt_DESC, first: 3, filter: {slug: {neq: $slug}}) {
      ...blogPostSummaryFragment
    }
  }
  
  ${siteFragment}
  ${blogPostFragment}
  ${blogPostSummaryFragment}
  ${metaTagsFragment}
`;

const ALL_POSTS_SLUGS_QUERY = `
  query AllPostsSlugs {
    allBlogPosts {
      slug
    }
  }
`;

/**
 * Generate static paths for all blog posts
 */
export async function generateStaticParams() {
  try {
    const { allBlogPosts } = await performRequest<{ allBlogPosts: { slug: string }[] }>({
      query: ALL_POSTS_SLUGS_QUERY,
    });

    return allBlogPosts.map(({ slug }) => ({
      slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

/**
 * Generate metadata for individual blog post
 */
export async function generateMetadata({ params }: BlogSlugPageProps): Promise<Metadata> {
  try {
    const data = await performRequest<BlogPostResponse>({
      query: BLOG_POST_QUERY,
      variables: { slug: params.slug },
      revalidate: 3600, // Revalidate every hour
    });

    if (!data.blogPost) {
      return {
        title: "Post Not Found - Probe Analytics",
        description: "The requested blog post could not be found.",
      };
    }

    const { blogPost, site } = data;

    // Combine site favicon, post SEO meta tags, and custom meta tags
    const metaTags = [
      ...(site.favicon || []),
      ...(blogPost.seo || []),
      // Add custom Open Graph image if not provided by SEO meta tags
      ...(blogPost.coverImage && !blogPost.seo?.some(tag => tag.attributes?.property === "og:image") ? [{
        tag: "meta",
        attributes: {
          property: "og:image",
          content: blogPost.coverImage.responsiveImage.src,
        },
        content: "",
      }] : []),
      // Add article-specific meta tags
      {
        tag: "meta",
        attributes: {
          property: "og:type",
          content: "article",
        },
        content: "",
      },
      {
        tag: "meta",
        attributes: {
          property: "article:published_time",
          content: blogPost.publishedAt,
        },
        content: "",
      },
      {
        tag: "meta",
        attributes: {
          property: "article:modified_time",
          content: blogPost.updatedAt,
        },
        content: "",
      },
      ...(blogPost.author ? [{
        tag: "meta",
        attributes: {
          property: "article:author",
          content: blogPost.author.name,
        },
        content: "",
      }] : []),
    ];

    return toNextMetadata(metaTags);
  } catch (error) {
    console.error("Error generating blog post metadata:", error);
    return {
      title: "Blog Post - Probe Analytics",
      description: "Read our latest insights on Generative Engine Optimization and AI visibility.",
    };
  }
}

/**
 * Individual blog post page component
 */
export default async function BlogPostPage({ params }: BlogSlugPageProps) {
  try {
    const data = await performRequest<BlogPostResponse>({
      query: BLOG_POST_QUERY,
      variables: { slug: params.slug },
      revalidate: 3600, // Revalidate every hour
    });

    if (!data.blogPost) {
      notFound();
    }

    return (
      <BlogPost 
        post={data.blogPost} 
        morePosts={data.morePosts} 
        site={data.site} 
      />
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    notFound();
  }
} 