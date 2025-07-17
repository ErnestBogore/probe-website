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
  id: string;
  name: string;
  title?: string;
  image?: Image;
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
  value: unknown; // DatoCMS structured text format
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
  body?: StructuredText;
  publishedDate?: string;
  updatedAt?: string;
  author?: Author;
  reviewer?: Author;
  featuredImage?: Image;
  relatedPosts?: BlogPostSummary[];
  tags?: Tag[];
  seo?: SEO;
  _publishedAt?: string;
  _updatedAt?: string;
}

export interface BlogPostSummary {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedDate?: string;
  author?: Pick<Author, 'name' | 'image'>;
  reviewer?: Pick<Author, 'name' | 'image'>;
  featuredImage?: Image;
  seo?: Pick<SEO, 'image'>;
  tags?: Tag[];
} 