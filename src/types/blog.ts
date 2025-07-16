/**
 * Blog Types
 * 
 * TypeScript interfaces for blog-related data structures
 * used with DatoCMS API responses.
 */

export interface Image {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface Video {
  url: string;
  title?: string;
  width?: number;
  height?: number;
}

export interface Author {
  name: string;
  bio?: string;
  picture?: Image;
}

export interface Tag {
  name: string;
  slug: string;
}

export interface SEO {
  title?: string;
  description?: string;
  image?: Image;
}

export interface ImageBlock {
  __typename: 'ImageBlockRecord';
  id: string;
  image: Image;
}

export interface VideoBlock {
  __typename: 'VideoBlockRecord';
  id: string;
  video: Video;
}

export type ContentBlock = ImageBlock | VideoBlock;

export interface StructuredText {
  value: Record<string, unknown>; // DatoCMS structured text format
  blocks?: Array<{
    [prop: string]: unknown;
    __typename?: string;
    id: string;
    image?: Image;
    video?: Video;
  }>;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: StructuredText;
  publishedDate?: string;
  updatedAt?: string;
  author?: Author;
  featuredImage?: Image;
  tags?: Tag[];
  seo?: SEO;
}

export interface BlogPostSummary {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedDate?: string;
  author?: Pick<Author, 'name' | 'picture'>;
  featuredImage?: Image;
  tags?: Tag[];
} 