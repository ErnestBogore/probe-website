/**
 * DatoCMS Schema Introspection
 * 
 * Utility functions to inspect available content models and fields
 * in your DatoCMS project. Useful for debugging and setup.
 */

const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.DATOCMS_API_TOKEN;

interface QueryField {
  name: string;
  description?: string;
  type: {
    name?: string;
    kind: string;
  };
}

interface SchemaType {
  name: string;
  kind: string;
  description?: string;
  fields?: Array<{
    name: string;
    type: {
      name?: string;
      kind: string;
    };
  }>;
}

interface IntrospectionResult {
  __schema: {
    queryType: {
      fields: QueryField[];
    };
    types: SchemaType[];
  };
}

/**
 * Introspects the GraphQL schema to see available types and queries
 */
export async function introspectSchema() {
  if (!API_TOKEN) {
    throw new Error('DatoCMS API token is required');
  }

  const introspectionQuery = `
    query IntrospectionQuery {
      __schema {
        queryType {
          fields {
            name
            description
            type {
              name
              kind
            }
          }
        }
        types {
          name
          kind
          description
          fields {
            name
            type {
              name
              kind
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify({
        query: introspectionQuery,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    if (result.errors) {
      throw new Error(result.errors[0]?.message || 'Introspection failed');
    }

    return result.data as IntrospectionResult;
  } catch (error) {
    console.error('Schema introspection failed:', error);
    throw error;
  }
}

/**
 * Gets available content model queries (like allBlogPosts, allAuthors, etc.)
 */
export async function getAvailableQueries() {
  try {
    const schema = await introspectSchema();
    const queryFields = schema.__schema.queryType.fields;
    
    // Filter for content model queries (typically start with 'all' or are singular)
    const contentQueries = queryFields.filter((field: QueryField) => 
      field.name.startsWith('all') || 
      (field.name !== '__schema' && field.name !== '__type' && !field.name.startsWith('_'))
    );

    return contentQueries.map((field: QueryField) => ({
      name: field.name,
      description: field.description,
      type: field.type.name || field.type.kind
    }));
  } catch (error) {
    console.error('Failed to get available queries:', error);
    return [];
  }
}

/**
 * Checks if the blog content models exist
 */
export async function checkBlogModelsExist() {
  try {
    const queries = await getAvailableQueries();
    const queryNames = queries.map((q: { name: string }) => q.name);
    
    return {
      allBlogPosts: queryNames.includes('allBlogPosts'),
      blogPost: queryNames.includes('blogPost'),
      allAuthors: queryNames.includes('allAuthors'),
      author: queryNames.includes('author'),
      allTags: queryNames.includes('allTags'),
      tag: queryNames.includes('tag'),
      availableQueries: queryNames,
      totalQueries: queries.length
    };
  } catch (error) {
    console.error('Failed to check blog models:', error);
    return {
      allBlogPosts: false,
      blogPost: false,
      allAuthors: false,
      author: false,
      allTags: false,
      tag: false,
      availableQueries: [],
      totalQueries: 0,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
} 