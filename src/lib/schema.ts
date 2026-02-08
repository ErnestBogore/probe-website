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
    ...(author.title && { "jobTitle": author.title }),
    "worksFor": {
      "@type": "Organization",
      "name": "Analyze AI",
      "url": "https://www.tryanalyze.ai"
    }
  };
}

function generateStandalonePersonSchema(author?: Author): Omit<SchemaType, "@context"> | null {
  if (!author) return null;
  
  return {
    "@type": "Person",
    "@id": `https://www.tryanalyze.ai/#/person/${author.name.toLowerCase().replace(/\s+/g, '-')}`,
    "name": author.name,
    ...(author.image && { "image": author.image.url }),
    ...(author.title && { "jobTitle": author.title }),
    "worksFor": {
      "@type": "Organization",
      "name": "Analyze AI",
      "url": "https://www.tryanalyze.ai"
    }
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
    ...(media.alt && { "name": media.alt }),
    "representativeOfPage": true,
    "inLanguage": "en",
    "contentUrl": media.url
  };
}

export function generateImageObjectSchema(props: {
  url: string;
  width?: number;
  height?: number;
  caption?: string;
  name?: string;
  creditText?: string;
}): SchemaType {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "url": props.url,
    "contentUrl": props.url,
    ...(props.width && { "width": props.width }),
    ...(props.height && { "height": props.height }),
    ...(props.caption && { "caption": props.caption }),
    ...(props.name && { "name": props.name }),
    ...(props.creditText && { "creditText": props.creditText, "copyrightHolder": { "@type": "Organization", "name": ORGANIZATION_NAME } }),
    "representativeOfPage": true,
    "inLanguage": "en"
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

function estimateWordCount(post: BlogPost): number {
  let text = '';
  if (post.englishBodyHtml) {
    text = post.englishBodyHtml.replace(/<[^>]*>/g, ' ');
  } else if (post.body?.value) {
    const extractAll = (node: unknown): string => {
      if (!node || typeof node !== 'object') return '';
      const n = node as Record<string, unknown>;
      if (n.value && typeof n.value === 'string') return n.value + ' ';
      if (Array.isArray(n.children)) return n.children.map(extractAll).join('');
      if (n.document && typeof n.document === 'object') {
        const doc = n.document as Record<string, unknown>;
        if (Array.isArray(doc.children)) return doc.children.map(extractAll).join('');
      }
      return '';
    };
    text = extractAll(post.body.value);
  }
  return text.split(/\s+/).filter(w => w.length > 0).length;
}

function extractArticleSection(tags?: { name: string; slug: string }[]): string | undefined {
  if (!tags?.length) return undefined;
  return tags[0].name;
}

function extractKeywords(tags?: { name: string; slug: string }[]): string | undefined {
  if (!tags?.length) return undefined;
  return tags.map(t => t.name).join(', ');
}

export function generateBlogPostSchema(post: BlogPost): SchemaType | MultiSchemaType {
  const schemas: Omit<SchemaType, "@context">[] = [];
  
  // Base blog post schema
  const publishedDate = post.publishedDate || post._publishedAt;
  const modifiedDate = post._updatedAt;
  const featuredImage = post.featuredImage || post.seo?.image;
  const wordCount = estimateWordCount(post);
  const articleSection = extractArticleSection(post.tags);
  const keywords = extractKeywords(post.tags);
  
  const authorRef = post.author
    ? `https://www.tryanalyze.ai/#/person/${post.author.name.toLowerCase().replace(/\s+/g, '-')}`
    : undefined;
  
  const blogSchema: Omit<SchemaType, "@context"> = {
    "@type": "BlogPosting",
    "headline": post.title,
    "url": `https://www.tryanalyze.ai/blog/${post.slug}`,
    "author": authorRef ? { "@type": "Person", "@id": authorRef } : generateAuthorSchema(post.author),
    "publisher": generatePublisherSchema(),
    ...(publishedDate && { "datePublished": publishedDate }),
    ...(modifiedDate && { "dateModified": modifiedDate }),
    ...(featuredImage && { "image": generateMediaSchema(featuredImage) }),
    ...(post.seo?.description && { "description": post.seo.description }),
    ...(wordCount > 0 && { "wordCount": wordCount }),
    ...(articleSection && { "articleSection": articleSection }),
    ...(keywords && { "keywords": keywords }),
    "inLanguage": "en",
    "isAccessibleForFree": true,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.tryanalyze.ai/blog/${post.slug}`
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "[data-speakable]"]
    }
  };
  
  // Add reviewer if exists
  if (post.reviewer) {
    blogSchema.reviewedBy = generateAuthorSchema(post.reviewer);
  }
  
  schemas.push(blogSchema);
  
  // Add standalone Person schema for author (entity)
  const authorPersonSchema = generateStandalonePersonSchema(post.author);
  if (authorPersonSchema) {
    schemas.push(authorPersonSchema);
  }
  
  // Add standalone Person schema for reviewer if different from author
  if (post.reviewer && post.reviewer.name !== post.author?.name) {
    const reviewerPersonSchema = generateStandalonePersonSchema(post.reviewer);
    if (reviewerPersonSchema) {
      schemas.push(reviewerPersonSchema);
    }
  }
  
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
  
  // Always return @graph for blog posts (multiple schemas)
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

interface SoftwareApplicationSchemaProps {
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem?: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
    url?: string;
  };
  featureList?: string[];
}

export function generateSoftwareApplicationSchema(props: SoftwareApplicationSchemaProps): SchemaType {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": props.name,
    "description": props.description,
    "url": props.url,
    "applicationCategory": props.applicationCategory,
    "operatingSystem": props.operatingSystem || "Web",
    "provider": {
      "@type": "Organization",
      "name": ORGANIZATION_NAME,
      "url": SITE_URL
    },
    ...(props.offers && {
      "offers": {
        "@type": "Offer",
        "price": props.offers.price || "0",
        "priceCurrency": props.offers.priceCurrency || "USD",
        ...(props.offers.url && { "url": props.offers.url })
      }
    }),
    ...(props.featureList && { "featureList": props.featureList.join(", ") })
  };
}

interface WebApplicationSchemaProps {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
  inLanguage?: string;
}

export function generateWebApplicationSchema(props: WebApplicationSchemaProps): SchemaType {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": props.name,
    "description": props.description,
    "url": props.url,
    "applicationCategory": props.applicationCategory || "UtilityApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
    ...(props.inLanguage && { "inLanguage": props.inLanguage }),
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": ORGANIZATION_NAME,
      "url": SITE_URL
    }
  };
}

interface ProductOfferSchemaProps {
  name: string;
  description: string;
  url: string;
  offers: Array<{
    name: string;
    price: string;
    priceCurrency?: string;
    description?: string;
    url?: string;
  }>;
}

export function generateProductSchema(props: ProductOfferSchemaProps): SchemaType {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": props.name,
    "description": props.description,
    "url": props.url,
    "brand": {
      "@type": "Brand",
      "name": ORGANIZATION_NAME
    },
    "offers": props.offers.length === 1
      ? {
          "@type": "Offer",
          "price": props.offers[0].price,
          "priceCurrency": props.offers[0].priceCurrency || "USD",
          ...(props.offers[0].description && { "description": props.offers[0].description }),
          ...(props.offers[0].url && { "url": props.offers[0].url }),
          "availability": "https://schema.org/InStock"
        }
      : {
          "@type": "AggregateOffer",
          "lowPrice": props.offers.reduce((min, o) => {
            const p = parseFloat(o.price);
            return p < min ? p : min;
          }, Infinity).toString(),
          "highPrice": props.offers.reduce((max, o) => {
            const p = parseFloat(o.price);
            return p > max ? p : max;
          }, 0).toString(),
          "priceCurrency": props.offers[0].priceCurrency || "USD",
          "offerCount": props.offers.length,
          "offers": props.offers.map(offer => ({
            "@type": "Offer",
            "name": offer.name,
            "price": offer.price,
            "priceCurrency": offer.priceCurrency || "USD",
            ...(offer.description && { "description": offer.description }),
            ...(offer.url && { "url": offer.url }),
            "availability": "https://schema.org/InStock"
          }))
        }
  };
}

export function generateFAQPageSchema(faqs: FAQItem[]): SchemaType | null {
  if (!faqs?.length) return null;
  return {
    "@context": "https://schema.org",
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

interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

export function generateHowToSchema(props: {
  name: string;
  description: string;
  url: string;
  steps: HowToStep[];
  totalTime?: string;
}): SchemaType {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": props.name,
    "description": props.description,
    "url": props.url,
    ...(props.totalTime && { "totalTime": props.totalTime }),
    "step": props.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.image && { "image": step.image })
    }))
  };
}

interface ItemListItem {
  name: string;
  url: string;
  description?: string;
  image?: string;
}

export function generateItemListSchema(props: {
  name: string;
  description?: string;
  url: string;
  items: ItemListItem[];
  itemListOrder?: 'ascending' | 'descending' | 'unordered';
}): SchemaType {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": props.name,
    ...(props.description && { "description": props.description }),
    "url": props.url,
    "itemListOrder": props.itemListOrder === 'ascending' ? 'https://schema.org/ItemListOrderAscending'
      : props.itemListOrder === 'descending' ? 'https://schema.org/ItemListOrderDescending'
      : 'https://schema.org/ItemListUnordered',
    "numberOfItems": props.items.length,
    "itemListElement": props.items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "url": item.url,
      ...(item.description && { "description": item.description }),
      ...(item.image && { "image": item.image })
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
