import { getAllSeoTools } from './seo-tools-config';
import { SeoToolConfig, SeoToolIconName } from './seo-tools-config.types';

export interface SeoRelatedToolData {
  slug: string;
  name: string;
  description: string;
  iconName: SeoToolIconName;
}

function getAllSeoToolsForLocale(locale?: string): SeoToolConfig[] {
  if (!locale || locale === 'en') return getAllSeoTools();

  // Lazy imports for locale-specific configs
  // These are resolved at build time by Next.js for static generation
  switch (locale) {
    case 'de': return require('./i18n/seo-tools-config.de').getAllSeoToolsDe();
    case 'es': return require('./i18n/seo-tools-config.es').getAllSeoToolsEs();
    case 'fr': return require('./i18n/seo-tools-config.fr').getAllSeoToolsFr();
    case 'it': return require('./i18n/seo-tools-config.it').getAllSeoToolsIt();
    case 'ja': return require('./i18n/seo-tools-config.ja').getAllSeoToolsJa();
    case 'ko': return require('./i18n/seo-tools-config.ko').getAllSeoToolsKo();
    case 'pt': return require('./i18n/seo-tools-config.pt').getAllSeoToolsPt();
    case 'tr': return require('./i18n/seo-tools-config.tr').getAllSeoToolsTr();
    case 'zh': return require('./i18n/seo-tools-config.zh').getAllSeoToolsZh();
    default: return getAllSeoTools();
  }
}

export function computeSeoRelatedTools(currentSlug: string, locale?: string): SeoRelatedToolData[] {
  const allTools = getAllSeoToolsForLocale(locale);

  // Return all tools except the current one
  return allTools
    .filter(t => t.slug !== currentSlug)
    .map(t => ({
      slug: t.slug,
      name: t.name,
      description: t.description,
      iconName: t.iconName,
    }));
}
