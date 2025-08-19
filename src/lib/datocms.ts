/**
 * DatoCMS API Client
 * 
 * Utility functions for making GraphQL requests to DatoCMS API.
 * Handles blog post queries and content fetching.
 */

import { BlogPost } from '@/types/blog';

const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.DATOCMS_API_TOKEN;

if (!API_TOKEN) {
  throw new Error('DatoCMS API token is required. Please set DATOCMS_API_TOKEN in your environment variables.');
}

interface GraphQLError {
  message: string;
  locations?: Array<{ line: number; column: number }>;
  path?: string[];
}

interface GraphQLResponse<T> {
  data?: T;
  errors?: GraphQLError[];
}

/**
 * Makes a GraphQL request to DatoCMS API
 * @param query - GraphQL query string
 * @param variables - Query variables
 * @param includeDrafts - Whether to include draft content
 * @returns Promise with the response data
 */
async function request<T>(
  query: string,
  variables: Record<string, unknown> = {},
  includeDrafts = false
): Promise<T> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
      ...(includeDrafts ? { 'X-Include-Drafts': 'true' } : {}),
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: {
      // Cache for 60 seconds in production, always fresh in development
      revalidate: process.env.NODE_ENV === 'development' ? 0 : 60,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const json: GraphQLResponse<T> = await response.json();

  if (json.errors) {
    console.error('GraphQL errors:', json.errors);
    throw new Error(json.errors[0]?.message || 'GraphQL request failed');
  }

  if (!json.data) {
    throw new Error('No data returned from GraphQL request');
  }

  return json.data;
}

/**
 * Fetches all blog posts for the listing page
 * @param includeDrafts - Whether to include draft posts
 * @returns Promise with array of blog posts
 */
export async function getAllBlogPosts(includeDrafts = false) {
  const query = `
    query AllBlogPosts {
      allBlogPosts(orderBy: publishedDate_DESC) {
        id
        title
        slug
        publishedDate
        featuredImage {
          url
          alt
          width
          height
        }
        author {
          id
          name
          title
          image {
            url
            alt
            width
            height
          }
        }
        reviewer {
          id
          name
          title
          image {
            url
            alt
            width
            height
          }
        }
        seo {
          image {
            url
            alt
            width
            height
          }
        }
        _publishedAt
      }
    }
  `;

  return request<{ allBlogPosts: BlogPost[] }>(query, {}, includeDrafts);
}

/**
 * Fetches a single blog post by slug
 * @param slug - Blog post slug
 * @param includeDrafts - Whether to include draft posts
 * @returns Promise with blog post data
 */
export async function getBlogPostBySlug(slug: string, includeDrafts = false) {
  const query = `
    query BlogPostBySlug($slug: String!) {
      blogPost(filter: { slug: { eq: $slug } }) {
        id
        title
        slug
        body {
          value
          blocks {
            __typename
            ... on ImageBlockRecord {
              id
              image {
                url
                alt
                width
                height
              }
            }
            ... on TableRecord {
              id
              title
              headers
              rows
            }
          }
        }
        publishedDate
        featuredImage {
          url
          alt
          width
          height
        }
        author {
          id
          name
          title
          image {
            url
            alt
            width
            height
          }
        }
        reviewer {
          id
          name
          title
          image {
            url
            alt
            width
            height
          }
        }
        relatedPosts {
          id
          title
          slug
          publishedDate
          featuredImage {
            url
            alt
            width
            height
          }
          author {
            id
            name
            image {
              url
              alt
              width
              height
            }
          }
          seo {
            image {
              url
              alt
              width
              height
            }
          }
        }
        seo {
          title
          description
          image {
            url
            alt
            width
            height
          }
        }
        _publishedAt
        _updatedAt
      }
    }
  `;

  return request<{ blogPost: BlogPost | null }>(query, { slug }, includeDrafts);
}

/**
 * Fetches all blog post slugs for static generation
 * @returns Promise with array of blog post slugs
 */
export async function getAllBlogPostSlugs() {
  const query = `
    query AllBlogPostSlugs {
      allBlogPosts {
        slug
      }
    }
  `;

  const data = await request<{ allBlogPosts: Array<{ slug: string }> }>(query);
  return data.allBlogPosts.map(post => post.slug);
} 