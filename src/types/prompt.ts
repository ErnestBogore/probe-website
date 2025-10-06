/**
 * TypeScript interfaces for the AI Prompts feature.
 */

import { DatoCMSStructuredText } from './datocms';

// A generic type for DatoCMS SEO fields
export interface Seo {
  title?: string;
  description?: string;
  image?: {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
  };
}

// Interface for the Prompt Category model
export interface PromptCategory {
  id: string;
  name: string;
  slugCategory: string;
  seoCategory?: Seo;
}

// Interface for the main Prompt Page model
export interface PromptPage {
  id: string;
  title: string;
  slug: string;
  description?: string;
  difficultyLevel?: string;
  promptContent: DatoCMSStructuredText; // DatoCMS Structured Text field
  variablesToReplace?: string;
  exampleInput?: DatoCMSStructuredText; // DatoCMS Structured Text field
  exampleOutput?: DatoCMSStructuredText; // DatoCMS Structured Text field
  whenToUse?: DatoCMSStructuredText; // DatoCMS Structured Text field
  proTips?: DatoCMSStructuredText; // DatoCMS Structured Text field
  seoPrompt?: Seo;
  category?: PromptCategory;
  relatedPrompts?: Array<{
    id: string;
    title: string;
    slug: string;
    description?: string;
    seoPrompt?: Seo;
    category: {
      slugCategory: string;
    };
  }>;
  _publishedAt: string;
  _updatedAt: string;
}
