import { getAllSeoToolSlugs } from './seo-tools-config';

const SUPPORTED_LOCALES = ['de', 'es', 'fr', 'it', 'ja', 'ko', 'pt', 'tr', 'zh'] as const;

export function generateSeoToolHreflangAlternates(englishSlug: string): Record<string, string> {
  const alternates: Record<string, string> = {
    'en': `/free-tools/${englishSlug}`,
    'x-default': `/free-tools/${englishSlug}`,
  };

  for (const locale of SUPPORTED_LOCALES) {
    alternates[locale] = `/free-tools/${locale}/${englishSlug}`;
  }

  return alternates;
}

export function generateSeoToolsListingHreflangAlternates(): Record<string, string> {
  const alternates: Record<string, string> = {
    'en': '/free-tools',
    'x-default': '/free-tools',
  };

  for (const locale of SUPPORTED_LOCALES) {
    alternates[locale] = `/free-tools/${locale}`;
  }

  return alternates;
}

export function isSeoToolSlug(slug: string): boolean {
  return getAllSeoToolSlugs().includes(slug);
}
