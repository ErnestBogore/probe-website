/**
 * Schema.org Structured Data Generator
 * 
 * Generates dynamic structured data for different page types
 */

interface Author {
  name: string;
  title?: string;
  image?: {
    url: string;
    alt?: string;
  };
  bio?: string;
}

interface Publisher {
  name: string;
  logo?: string;
  url: string;
}

interface MediaObject {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  type?: 'image' | 'video' | 'audio';
}

interface FAQItem {
  question: string;
  answer: string;
}

interface BlogPost {
  title: string;
  slug: string;
  body?: any;
  publishedDate?: string;
  _publishedAt?: string;
  _updatedAt?: string;
  author?: Author;
  reviewer?: Author;
  featuredImage?: MediaObject;
  seo?: {
    title?: string;
    description?: string;
    image?: MediaObject;
  };
  excerpt?: string;
}

type SchemaType = {
  "@context"?: string;
  "@type": string;
  [key: string]: any;
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
    ...(author.bio && { "description": author.bio }),
    ...(author.title && { "jobTitle": author.title })
  };
}

function generatePublisherSchema(): SchemaType {
  return {
    "@type": "Organization",
    "name": "Probe Analytics",
    "logo": {
      "@type": "ImageObject",
      "url": "https://probe-analytics.com/logo.png"
    },
    "url": "https://probe-analytics.com"
  };
}

function generateMediaSchema(media?: MediaObject) {
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
  if (text.trim().endsWith('?')) return true;
  
  const questionWords = ['how', 'what', 'why', 'when', 'where', 'which', 'who', 'can', 'should', 'will', 'do', 'does', 'is', 'are'];
  const firstWord = text.trim().toLowerCase().split(' ')[0];
  return questionWords.includes(firstWord);
}

function extractFAQsFromStructuredText(body: any): FAQItem[] {
  const faqs: FAQItem[] = [];
  
  if (!body?.value?.document?.children) return faqs;
  
  let currentQuestion: string | null = null;
  let currentAnswer: string[] = [];
  
  const processNode = (node: any) => {
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
  
  body.value.document.children.forEach(processNode);
  
  // Add the last FAQ if exists
  if (currentQuestion && currentAnswer.length > 0) {
    faqs.push({
      question: currentQuestion,
      answer: currentAnswer.join('\n').trim()
    });
  }
  
  return faqs;
}

function extractTextFromNode(node: any): string {
  if (node.type === 'text') {
    return node.value || '';
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
    "url": `https://probe-analytics.com/blog/${post.slug}`,
    "author": generateAuthorSchema(post.author),
    "publisher": generatePublisherSchema(),
    ...(publishedDate && { "datePublished": publishedDate }),
    ...(modifiedDate && { "dateModified": modifiedDate }),
    ...(featuredImage && { "image": generateMediaSchema(featuredImage) }),
    ...(post.seo?.description && { "description": post.seo.description }),
    "inLanguage": "en",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://probe-analytics.com/blog/${post.slug}`
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

export function generateOrganizationSchema(): SchemaType {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Probe Analytics",
    "url": "https://probe-analytics.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://probe-analytics.com/logo.png"
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
    "name": "Probe Analytics",
    "url": "https://probe-analytics.com",
    "description": "Advanced analytics and AI-powered insights for modern businesses",
    "publisher": generatePublisherSchema(),
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://probe-analytics.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
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
      "item": `https://probe-analytics.com${item.href}`
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
