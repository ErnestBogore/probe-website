/**
 * TypeScript Type Definitions
 * 
 * Type definitions for DatoCMS data structures and blog components.
 * Provides type safety for GraphQL responses and component props.
 * 
 * Features:
 * - Responsive image types
 * - Blog post data structures
 * - Author and meta information types
 * - SEO and social sharing types
 */

/**
 * Responsive Image Types
 */
export interface ResponsiveImage {
  srcSet: string;
  webpSrcSet: string;
  sizes: string;
  src: string;
  width: number;
  height: number;
  aspectRatio: number;
  alt: string;
  title: string;
  base64: string;
}

/**
 * Meta Tag Types for SEO
 */
export interface MetaTag {
  attributes: Record<string, string>;
  content: string;
  tag: string;
}

/**
 * Author Information
 */
export interface Author {
  id: string;
  name: string;
  bio?: string;
  picture?: {
    responsiveImage: ResponsiveImage;
  };
}

/**
 * Blog Post Tag
 */
export interface BlogTag {
  id: string;
  name: string;
  slug: string;
}

/**
 * Content Block Types
 */
export interface ImageBlock {
  __typename: 'ImageBlockRecord';
  id: string;
  image: {
    responsiveImage: ResponsiveImage;
  };
  caption?: string;
}

export type ContentBlock = ImageBlock;

/**
 * Structured Text Content
 */
export interface StructuredTextContent {
  value: any; // DatoCMS structured text format
  blocks: ContentBlock[];
}

/**
 * Blog Post Summary (for listings)
 */
export interface BlogPostSummary {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  coverImage?: {
    responsiveImage: ResponsiveImage;
  };
  author?: Author;
}

/**
 * Complete Blog Post (for individual pages)
 */
export interface BlogPost extends BlogPostSummary {
  content: StructuredTextContent;
  updatedAt: string;
  seo?: MetaTag[];
  tags?: BlogTag[];
}

/**
 * Site Global Information
 */
export interface Site {
  globalSeo?: {
    siteName: string;
    titleSuffix: string;
    twitterAccount?: string;
    facebookPageUrl?: string;
  };
  favicon?: MetaTag[];
}

/**
 * API Response Types
 */
export interface BlogListingResponse {
  site: Site;
  allBlogPosts: BlogPostSummary[];
}

export interface BlogPostResponse {
  site: Site;
  blogPost: BlogPost;
  morePosts?: BlogPostSummary[];
}

/**
 * Component Props Types
 */
export interface BlogListingProps {
  posts: BlogPostSummary[];
  site?: Site;
}

export interface BlogPostProps {
  post: BlogPost;
  morePosts?: BlogPostSummary[];
  site?: Site;
}

export interface PostCardProps {
  post: BlogPostSummary;
  priority?: boolean;
}

export interface PostContentProps {
  content: StructuredTextContent;
}

/**
 * Page Props for Next.js
 */
export interface BlogPageProps {
  params: {};
  searchParams: {};
}

export interface BlogSlugPageProps {
  params: {
    slug: string;
  };
  searchParams: {};
}

/**
 * Utility Types
 */
export type DateString = string;
export type SlugString = string; 