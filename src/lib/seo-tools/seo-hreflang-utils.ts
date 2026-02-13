import { getAllSeoToolSlugs } from './seo-tools-config';

const BASE_URL = 'https://www.tryanalyze.ai';
const SUPPORTED_LOCALES = ['de', 'es', 'fr', 'it', 'ja', 'ko', 'pt', 'tr', 'zh'] as const;

export function generateSeoToolHreflangAlternates(englishSlug: string): Record<string, string> {
  const alternates: Record<string, string> = {
    'en': `${BASE_URL}/free-tools/${englishSlug}`,
    'x-default': `${BASE_URL}/free-tools/${englishSlug}`,
  };

  for (const locale of SUPPORTED_LOCALES) {
    alternates[locale] = `${BASE_URL}/free-tools/${locale}/${englishSlug}`;
  }

  return alternates;
}

export function generateSeoToolsListingHreflangAlternates(): Record<string, string> {
  const alternates: Record<string, string> = {
    'en': `${BASE_URL}/free-tools`,
    'x-default': `${BASE_URL}/free-tools`,
  };

  for (const locale of SUPPORTED_LOCALES) {
    alternates[locale] = `${BASE_URL}/free-tools/${locale}`;
  }

  return alternates;
}

export function isSeoToolSlug(slug: string): boolean {
  return getAllSeoToolSlugs().includes(slug);
}
