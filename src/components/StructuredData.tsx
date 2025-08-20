/**
 * Structured Data Component
 * 
 * Renders JSON-LD structured data as script tags in the document head
 */

import { generateBlogPostSchema, generateOrganizationSchema, generateWebsiteSchema } from '@/lib/schema';
import { BlogPost } from '@/types/blog';

interface StructuredDataProps {
  blogPost?: BlogPost;
  type?: 'blog' | 'organization' | 'website' | 'homepage';
}

export function StructuredData({ blogPost, type = 'blog' }: StructuredDataProps) {
  if (type === 'blog' && !blogPost) {
    return null;
  }

  let structuredData;
  
  if (type === 'blog' && blogPost) {
    structuredData = generateBlogPostSchema(blogPost);
  } else if (type === 'organization') {
    structuredData = generateOrganizationSchema();
  } else if (type === 'website') {
    structuredData = generateWebsiteSchema();
  } else if (type === 'homepage') {
    // Combine organization and website schemas for homepage
    const organizationSchema = generateOrganizationSchema();
    const websiteSchema = generateWebsiteSchema();
    
    structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        { ...organizationSchema, "@context": undefined },
        { ...websiteSchema, "@context": undefined }
      ]
    };
  }

  if (!structuredData) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}
