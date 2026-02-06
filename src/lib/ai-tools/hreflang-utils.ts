/**
 * Hreflang Utilities for Free Tools
 * 
 * Generates complete hreflang alternate URLs for all supported languages.
 * Used to fix missing reciprocal hreflang links across free-tools pages.
 */

import { frenchToEnglishSlugMap } from './i18n/tools-config.fr';
import { spanishToEnglishSlugMap } from './i18n/tools-config.es';

// Invert the French mapping: English -> French
const englishToFrenchSlugMap: Record<string, string> = Object.fromEntries(
  Object.entries(frenchToEnglishSlugMap).map(([fr, en]) => [en, fr])
);

// Invert the Spanish mapping: English -> Spanish
const englishToSpanishSlugMap: Record<string, string> = Object.fromEntries(
  Object.entries(spanishToEnglishSlugMap).map(([es, en]) => [en, es])
);

/**
 * Get the French slug for an English tool slug
 */
export function getFrenchSlug(englishSlug: string): string {
  return englishToFrenchSlugMap[englishSlug] || englishSlug;
}

/**
 * Get the Spanish slug for an English tool slug
 */
export function getSpanishSlug(englishSlug: string): string {
  return englishToSpanishSlugMap[englishSlug] || englishSlug;
}

/**
 * Generate complete hreflang alternates for a free-tools page
 * @param englishSlug - The English slug for the tool
 * @param type - 'tool' for regular tools, 'business-name-generator' for business name generators
 * @returns Object with all language alternates for Next.js metadata
 */
export function generateToolHreflangAlternates(
  englishSlug: string,
  type: 'tool' | 'business-name-generator' = 'tool'
): Record<string, string> {
  const baseUrl = 'https://www.tryanalyze.ai';
  
  if (type === 'business-name-generator') {
    // Business name generators use English slugs in all languages
    return {
      'x-default': `${baseUrl}/free-tools/business-name-generator/${englishSlug}`,
      'en': `${baseUrl}/free-tools/business-name-generator/${englishSlug}`,
      'de': `${baseUrl}/free-tools/de/business-name-generator/${englishSlug}`,
      'es': `${baseUrl}/free-tools/es/business-name-generator/${englishSlug}`,
      'fr': `${baseUrl}/free-tools/fr/business-name-generator/${englishSlug}`,
      'it': `${baseUrl}/free-tools/it/business-name-generator/${englishSlug}`,
      'ja': `${baseUrl}/free-tools/ja/business-name-generator/${englishSlug}`,
      'ko': `${baseUrl}/free-tools/ko/business-name-generator/${englishSlug}`,
      'pt': `${baseUrl}/free-tools/pt/business-name-generator/${englishSlug}`,
      'tr': `${baseUrl}/free-tools/tr/business-name-generator/${englishSlug}`,
      'zh': `${baseUrl}/free-tools/zh/business-name-generator/${englishSlug}`,
    };
  }
  
  // Regular tools - French and Spanish have translated slugs
  const frenchSlug = getFrenchSlug(englishSlug);
  const spanishSlug = getSpanishSlug(englishSlug);
  
  return {
    'x-default': `${baseUrl}/free-tools/${englishSlug}`,
    'en': `${baseUrl}/free-tools/${englishSlug}`,
    'de': `${baseUrl}/free-tools/de/${englishSlug}`,
    'es': `${baseUrl}/free-tools/es/${spanishSlug}`,
    'fr': `${baseUrl}/free-tools/fr/${frenchSlug}`,
    'it': `${baseUrl}/free-tools/it/${englishSlug}`,
    'ja': `${baseUrl}/free-tools/ja/${englishSlug}`,
    'ko': `${baseUrl}/free-tools/ko/${englishSlug}`,
    'pt': `${baseUrl}/free-tools/pt/${englishSlug}`,
    'tr': `${baseUrl}/free-tools/tr/${englishSlug}`,
    'zh': `${baseUrl}/free-tools/zh/${englishSlug}`,
  };
}

/**
 * Generate complete hreflang alternates for free-tools listing pages
 * @returns Object with all language alternates for Next.js metadata
 */
export function generateToolsListingHreflangAlternates(): Record<string, string> {
  const baseUrl = 'https://www.tryanalyze.ai';
  
  return {
    'x-default': `${baseUrl}/free-tools`,
    'en': `${baseUrl}/free-tools`,
    'de': `${baseUrl}/free-tools/de`,
    'es': `${baseUrl}/free-tools/es`,
    'fr': `${baseUrl}/free-tools/fr`,
    'it': `${baseUrl}/free-tools/it`,
    'ja': `${baseUrl}/free-tools/ja`,
    'ko': `${baseUrl}/free-tools/ko`,
    'pt': `${baseUrl}/free-tools/pt`,
    'tr': `${baseUrl}/free-tools/tr`,
    'zh': `${baseUrl}/free-tools/zh`,
  };
}
