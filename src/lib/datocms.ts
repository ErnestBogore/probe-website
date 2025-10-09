/**
 * DatoCMS API Client
 * 
 * Utility functions for making GraphQL requests to DatoCMS API.
 * Handles blog post queries and content fetching.
 */

import { BlogPost } from '@/types/blog';
import { PromptPage, PromptCategory } from '@/types/prompt';

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
      allBlogPosts(orderBy: publishedDate_DESC, first: 100) {
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
        contentType
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
        contentType
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
            ... on TakeawayRecord {
              id
              title
              content
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
        contentType
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
      allBlogPosts(first: 100) {
        slug
        contentType
      }
    }
  `;

  const data = await request<{ allBlogPosts: Array<{ slug: string; contentType: string }> }>(query);
  return data.allBlogPosts;
}

// --- AI Prompt Functions --- //

const BLOCK_FRAGMENT = `
  fragment BlockFragment on RecordInterface {
    __typename
    ... on ImageBlockRecord {
      id
      image { url alt width height }
    }
    ... on TableRecord {
      id
      title
      headers
      rows
    }
    ... on TakeawayRecord {
      id
      title
      content
    }
  }
`;

export async function getPromptBySlug(slug: string, includeDrafts = false) {
  const query = `
    query PromptBySlug($slug: String!) {
      promptPage(filter: { slug: { eq: $slug } }) {
        id
        title
        slug
        description
        difficultyLevel
        promptContent { value, blocks { ...BlockFragment } }
        variablesToReplace
        exampleInput { value, blocks { ...BlockFragment } }
        exampleOutput { value, blocks { ...BlockFragment } }
        whenToUse { value, blocks { ...BlockFragment } }
        proTips { value, blocks { ...BlockFragment } }
        seoPrompt { title description image { url alt width height } }
        category { name slugCategory }
        relatedPrompts {
          id
          title
          slug
          description
          seoPrompt {
            image {
              url
              alt
              width
              height
            }
          }
          category {
            slugCategory
          }
        }
        _publishedAt
        _updatedAt
      }
    }
    ${BLOCK_FRAGMENT}
  `;
  return request<{ promptPage: PromptPage | null }>(query, { slug }, includeDrafts);
}

export async function getAllPromptSlugs() {
  const query = `
    query AllPromptSlugs {
      allPromptPages(first: 100) {
        slug
        category {
          slugCategory
        }
        _updatedAt
      }
    }
  `;
  const data = await request<{ allPromptPages: Array<{ slug: string; category: { slugCategory: string }; _updatedAt: string }> }>(query);
  return data.allPromptPages;
}

export async function getPromptsByCategory(categoryId: string, includeDrafts = false) {
  const query = `
    query PromptsByCategory($categoryId: ItemId!) {
      allPromptPages(
        filter: { category: { eq: $categoryId } }
        orderBy: _publishedAt_DESC
        first: 100
      ) {
        id
        title
        slug
        description
        difficultyLevel
        seoPrompt {
          image {
            url
            alt
            width
            height
          }
        }
        category {
          id
          name
          slugCategory
        }
      }
    }
  `;
  return request<{ allPromptPages: PromptPage[] }>(query, { categoryId }, includeDrafts);
}

export async function getAllCategorySlugs() {
  const query = `
    query AllCategorySlugs {
      allPromptCategories {
        slugCategory
      }
    }
  `;
  const data = await request<{ allPromptCategories: Array<{ slugCategory: string }> }>(query);
  return data.allPromptCategories;
}

export async function getCategoryBySlug(slug: string, includeDrafts = false) {
  const query = `
    query CategoryBySlug($slug: String!) {
      promptCategory(filter: { slugCategory: { eq: $slug } }) {
        id
        name
        slugCategory
        seoCategory {
          title
          description
          image {
            url
            alt
            width
            height
          }
        }
      }
    }
  `;
  return request<{ promptCategory: PromptCategory | null }>(query, { slug }, includeDrafts);
}

export async function getAllPromptsGroupedByCategory(includeDrafts = false) {
  const query = `
    query AllPromptsAndCategories {
      allPromptCategories(orderBy: name_ASC) {
        id
        name
        slugCategory
      }
      allPromptPages(orderBy: _publishedAt_DESC, first: 100) {
        id
        title
        slug
        description
        difficultyLevel
        seoPrompt {
          image {
            url
            alt
            width
            height
          }
        }
        category {
          id
          name
          slugCategory
        }
      }
    }
  `;
  return request<{ 
    allPromptCategories: PromptCategory[];
    allPromptPages: PromptPage[];
  }>(query, {}, includeDrafts);
}