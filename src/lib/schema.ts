/**
 * Schema.org Structured Data Generator
 * 
 * Generates dynamic structured data for different page types
 */

import { BlogPost, Author, Image } from '@/types/blog';


interface FAQItem {
  question: string;
  answer: string;
}

interface StructuredTextNode {
  type: string;
  level?: number;
  children?: StructuredTextNode[];
  value?: string;
}

type SchemaType = {
  "@context"?: string;
  "@type": string;
  [key: string]: unknown;
};

type MultiSchemaType = {
  "@context": string;
  "@graph"?: Omit<SchemaType, "@context">[];
};

function generateAuthorSchema(author?: Author) {
  if (!author) return null;
  
  return {
    "@type": "Person",
    "name": author.name,
    ...(author.image && { "image": author.image.url }),
    ...(author.title && { "jobTitle": author.title })
  };
}

function generatePublisherSchema(): SchemaType {
  return {
    "@type": "Organization",
    "name": "Analyze AI",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.tryanalyze.ai/logo.png"
    },
    "url": "https://www.tryanalyze.ai"
  };
}

function generateMediaSchema(media?: Image) {
  if (!media) return null;
  
  return {
    "@type": "ImageObject",
    "url": media.url,
    ...(media.width && { "width": media.width }),
    ...(media.height && { "height": media.height }),
    ...(media.alt && { "caption": media.alt }),
    "representativeOfPage": true
  };
}

function generateFAQSchema(faqs: FAQItem[]): SchemaType | null {
  if (!faqs?.length) return null;
  
  return {
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

function isQuestion(text: string): boolean {
  const cleanText = text.trim().toLowerCase();
  
  // Direct question mark
  if (cleanText.endsWith('?')) return true;
  
  // Question words at the beginning
  const questionWords = ['how', 'what', 'why', 'when', 'where', 'which', 'who', 'can', 'should', 'will', 'do', 'does', 'is', 'are'];
  const firstWord = cleanText.split(' ')[0];
  if (questionWords.includes(firstWord)) return true;
  
  // Common question patterns
  const questionPatterns = [
    /^step \d+:/,
    /how to/,
    /what is/,
    /why do/,
    /when to/,
    /where to/
  ];
  
  return questionPatterns.some(pattern => pattern.test(cleanText));
}

function extractFAQsFromStructuredText(body: { value: unknown }): FAQItem[] {
  const faqs: FAQItem[] = [];
  
  // Type guard for DatoCMS DAST structure
  const hasDastStructure = (obj: unknown): obj is { schema: string; document: { type: string; children: StructuredTextNode[] } } => {
    return typeof obj === 'object' && obj !== null && 
           'schema' in obj && 'document' in obj &&
           typeof (obj as Record<string, unknown>).document === 'object' &&
           (obj as Record<string, unknown>).document !== null &&
           'children' in ((obj as Record<string, unknown>).document as Record<string, unknown>) &&
           Array.isArray(((obj as Record<string, unknown>).document as Record<string, unknown>).children);
  };
  
  if (!body?.value || !hasDastStructure(body.value)) return faqs;
  
  const documentChildren = (body.value as { schema: string; document: { type: string; children: StructuredTextNode[] } }).document.children;
  
  let currentQuestion: string | null = null;
  let currentAnswer: string[] = [];
  
  const processNode = (node: StructuredTextNode) => {
    if (node.type === 'heading' && node.level === 2) {
      // Save previous FAQ if exists
      if (currentQuestion && currentAnswer.length > 0) {
        faqs.push({
          question: currentQuestion,
          answer: currentAnswer.join('\n').trim()
        });
      }
      
      // Extract heading text
      const headingText = extractTextFromNode(node);
      if (isQuestion(headingText)) {
        currentQuestion = headingText;
        currentAnswer = [];
      } else {
        currentQuestion = null;
      }
    } else if (currentQuestion && node.type === 'paragraph') {
      const paragraphText = extractTextFromNode(node);
      if (paragraphText.trim()) {
        currentAnswer.push(paragraphText);
      }
    }
    
    // Process children recursively
    if (node.children) {
      node.children.forEach(processNode);
    }
  };
  
  documentChildren.forEach(processNode);
  
  // Add the last FAQ if exists
  if (currentQuestion && currentAnswer.length > 0) {
    faqs.push({
      question: currentQuestion,
      answer: currentAnswer.join('\n').trim()
    });
  }
  
  return faqs;
}

function extractTextFromNode(node: StructuredTextNode): string {
  if (node.type === 'span' && node.value) {
    return node.value;
  }
  
  if (node.type === 'text' && node.value) {
    return node.value;
  }
  
  if (node.children) {
    return node.children.map(extractTextFromNode).join('');
  }
  
  return '';
}

export function generateBlogPostSchema(post: BlogPost): SchemaType | MultiSchemaType {
  const schemas: Omit<SchemaType, "@context">[] = [];
  
  // Base blog post schema
  const publishedDate = post.publishedDate || post._publishedAt;
  const modifiedDate = post._updatedAt;
  const featuredImage = post.featuredImage || post.seo?.image;
  
  const blogSchema: Omit<SchemaType, "@context"> = {
    "@type": "BlogPosting",
    "headline": post.title,
    "url": `https://www.tryanalyze.ai/blog/${post.slug}`,
    "author": generateAuthorSchema(post.author),
    "publisher": generatePublisherSchema(),
    ...(publishedDate && { "datePublished": publishedDate }),
    ...(modifiedDate && { "dateModified": modifiedDate }),
    ...(featuredImage && { "image": generateMediaSchema(featuredImage) }),
    ...(post.seo?.description && { "description": post.seo.description }),
    "inLanguage": "en",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.tryanalyze.ai/blog/${post.slug}`
    }
  };
  
  // Add reviewer if exists
  if (post.reviewer) {
    blogSchema.reviewedBy = generateAuthorSchema(post.reviewer);
  }
  
  schemas.push(blogSchema);
  
  // Extract and add FAQ schema if questions found in content
  if (post.body) {
    const faqs = extractFAQsFromStructuredText(post.body);
    if (faqs.length > 0) {
      const faqSchema = generateFAQSchema(faqs);
      if (faqSchema) {
        schemas.push(faqSchema);
      }
    }
  }
  
  // Return single schema or multi-schema with @graph
  if (schemas.length === 1) {
    return {
      "@context": "https://schema.org",
      ...schemas[0]
    };
  }
  
  return {
    "@context": "https://schema.org",
    "@graph": schemas
  };
}

const SITE_URL = 'https://www.tryanalyze.ai';
const ORGANIZATION_NAME = 'Analyze AI';
const LOGO_URL = 'https://www.tryanalyze.ai/logo.png';

export function generateOrganizationSchema(): SchemaType {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": ORGANIZATION_NAME,
    "url": SITE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": LOGO_URL
    },
    "description": "Advanced analytics and AI-powered insights for modern businesses",
    "foundingDate": "2024",
    "sameAs": [
      "https://twitter.com/probeanalytics",
      "https://linkedin.com/company/probe-analytics"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hello@probe-analytics.com"
    }
  };
}

export function generateWebsiteSchema(): SchemaType {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": ORGANIZATION_NAME,
    "url": SITE_URL,
    "description": "Advanced analytics and AI-powered insights for modern businesses",
    "publisher": {
      "@type": "Organization",
      "name": ORGANIZATION_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": LOGO_URL
      },
      "url": SITE_URL
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_URL}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  features: string[];
  category: string;
}

export function generateServiceSchema(props: ServiceSchemaProps): SchemaType {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": props.name,
    "description": props.description,
    "url": props.url,
    "provider": {
      "@type": "Organization",
      "name": ORGANIZATION_NAME,
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": LOGO_URL
      }
    },
    "serviceType": props.category,
    "hasOfferingCatalog": {
      "@type": "OfferingCatalog",
      "name": `${props.name} Features`,
      "itemListElement": props.features.map((feature, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        },
        "position": index + 1
      }))
    },
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": props.url,
      "serviceSmsNumber": undefined,
      "servicePhone": undefined
    }
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; href: string }>): SchemaType {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${SITE_URL}${item.href}`
    }))
  };
}

export function validateSchema(schema: SchemaType): string[] {
  const warnings: string[] = [];
  
  if (!schema['@type']) {
    warnings.push('Schema missing @type');
  }
  
  if (schema['@type'] === 'BlogPosting') {
    if (!schema.headline) warnings.push('BlogPosting missing headline');
    if (!schema.author) warnings.push('BlogPosting missing author');
    if (!schema.datePublished) warnings.push('BlogPosting missing datePublished');
    if (!schema.publisher) warnings.push('BlogPosting missing publisher');
  }
  
  if (schema['@type'] === 'Organization') {
    if (!schema.name) warnings.push('Organization missing name');
    if (!schema.url) warnings.push('Organization missing url');
  }
  
  return warnings;
}
