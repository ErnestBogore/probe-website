/**
 * DatoCMS API Configuration
 * 
 * Provides cached fetch functionality for GraphQL queries to DatoCMS API.
 * Supports draft mode, content validation, visual editing, and environment-specific queries.
 * 
 * Features:
 * - Cached requests using React's cache function
 * - Draft content support for preview mode
 * - Visual editing capabilities
 * - Environment-specific content
 * - Type-safe GraphQL query execution
 */

import { cache } from 'react';

interface RequestConfig {
  query: string;
  variables?: Record<string, any>;
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
  visualEditingBaseUrl?: string | null;
  revalidate?: number | null;
}

interface DatoCMSResponse<T = any> {
  data: T;
  errors?: Array<{
    message: string;
    locations?: Array<{ line: number; column: number }>;
    path?: Array<string | number>;
  }>;
}

const dedupedFetch = cache(
  async (
    body: string,
    includeDrafts = false,
    excludeInvalid = false,
    visualEditingBaseUrl: string | null = null,
    revalidate: number | null = null,
  ): Promise<DatoCMSResponse> => {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
      ...(includeDrafts ? { 'X-Include-Drafts': 'true' } : {}),
      ...(excludeInvalid ? { 'X-Exclude-Invalid': 'true' } : {}),
      ...(visualEditingBaseUrl
        ? {
            'X-Visual-Editing': 'vercel-v1',
            'X-Base-Editing-Url': visualEditingBaseUrl,
          }
        : {}),
      ...(process.env.NEXT_DATOCMS_ENVIRONMENT
        ? { 'X-Environment': process.env.NEXT_DATOCMS_ENVIRONMENT }
        : {}),
    };

    const fetchOptions: RequestInit = {
      method: 'POST',
      headers,
      body,
    };

    // Add revalidate only if provided and we're in a Next.js environment
    if (revalidate !== null && typeof revalidate === 'number') {
      (fetchOptions as any).next = { revalidate };
    }

    const response = await fetch('https://graphql.datocms.com/', fetchOptions);

    const responseBody: DatoCMSResponse = await response.json();

    if (!response.ok) {
      throw new Error(
        `${response.status} ${response.statusText}: ${JSON.stringify(
          responseBody,
        )}`,
      );
    }

    if (responseBody.errors) {
      throw new Error(
        `GraphQL errors: ${JSON.stringify(responseBody.errors)}`,
      );
    }

    return responseBody;
  },
);

/**
 * Performs a GraphQL request to DatoCMS API
 * 
 * @param config - Request configuration object
 * @returns Promise resolving to the data from DatoCMS
 */
export async function performRequest<T = any>({
  query,
  variables = {},
  includeDrafts = false,
  excludeInvalid = false,
  visualEditingBaseUrl = null,
  revalidate = null,
}: RequestConfig): Promise<T> {
  const { data } = await dedupedFetch(
    JSON.stringify({ query, variables }),
    includeDrafts,
    excludeInvalid,
    visualEditingBaseUrl,
    revalidate,
  );

  return data;
}

/**
 * Performs a request with draft content included (for preview mode)
 */
export async function performDraftRequest<T = any>(config: Omit<RequestConfig, 'includeDrafts'>): Promise<T> {
  return performRequest<T>({ ...config, includeDrafts: true });
}

/**
 * Performs a request with content revalidation
 */
export async function performRequestWithRevalidation<T = any>(
  config: RequestConfig,
  revalidateTime: number
): Promise<T> {
  return performRequest<T>({ ...config, revalidate: revalidateTime });
} 