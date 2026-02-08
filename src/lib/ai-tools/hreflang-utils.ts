/**
 * Hreflang Utilities for Free Tools
 * 
 * Generates complete hreflang alternate URLs for all supported languages.
 * Only emits URLs for languages that actually have the tool.
 */

import { frenchToEnglishSlugMap } from './i18n/tools-config.fr';
import { spanishToEnglishSlugMap } from './i18n/tools-config.es';
import { getAllTools } from './tools-config';
import { getAllToolsFr } from './i18n/tools-config.fr';
import { getAllToolsEs } from './i18n/tools-config.es';
import { getAllToolsDe } from './i18n/tools-config.de';
import { getAllToolsIt } from './i18n/tools-config.it';
import { getAllToolsJa } from './i18n/tools-config.ja';
import { getAllToolsKo } from './i18n/tools-config.ko';
import { getAllToolsPt } from './i18n/tools-config.pt';
import { getAllToolsTr } from './i18n/tools-config.tr';
import { getAllToolsZh } from './i18n/tools-config.zh';
import { getAllBusinessNameGenerators } from './business-name-generators-config';
import { getAllBusinessNameGeneratorsFr } from './i18n/business-name-generators-config.fr';
import { getAllBusinessNameGeneratorsEs } from './i18n/business-name-generators-config.es';
import { getAllBusinessNameGeneratorsDe } from './i18n/business-name-generators-config.de';
import { getAllBusinessNameGeneratorsIt } from './i18n/business-name-generators-config.it';
import { getAllBusinessNameGeneratorsJa } from './i18n/business-name-generators-config.ja';
import { getAllBusinessNameGeneratorsKo } from './i18n/business-name-generators-config.ko';
import { getAllBusinessNameGeneratorsPt } from './i18n/business-name-generators-config.pt';
import { getAllBusinessNameGeneratorsTr } from './i18n/business-name-generators-config.tr';
import { getAllBusinessNameGeneratorsZh } from './i18n/business-name-generators-config.zh';

// Invert the French mapping: English -> French
const englishToFrenchSlugMap: Record<string, string> = Object.fromEntries(
  Object.entries(frenchToEnglishSlugMap).map(([fr, en]) => [en, fr])
);

// Invert the Spanish mapping: English -> Spanish
const englishToSpanishSlugMap: Record<string, string> = Object.fromEntries(
  Object.entries(spanishToEnglishSlugMap).map(([es, en]) => [en, es])
);

/**
 * Build a Set of slugs from a tool list for fast lookup.
 * For FR/ES the slug in the config is localized, so we map to English via the slug maps.
 */
function buildSlugSet(tools: { slug: string }[]): Set<string> {
  return new Set(tools.map(t => t.slug));
}

// Sets of valid slugs per locale (tools)
const enToolSlugs = buildSlugSet(getAllTools());
const frToolEnglishSlugs = new Set(Object.values(frenchToEnglishSlugMap));
const esToolEnglishSlugs = new Set(Object.values(spanishToEnglishSlugMap));
const deToolSlugs = buildSlugSet(getAllToolsDe());
const itToolSlugs = buildSlugSet(getAllToolsIt());
const jaToolSlugs = buildSlugSet(getAllToolsJa());
const koToolSlugs = buildSlugSet(getAllToolsKo());
const ptToolSlugs = buildSlugSet(getAllToolsPt());
const trToolSlugs = buildSlugSet(getAllToolsTr());
const zhToolSlugs = buildSlugSet(getAllToolsZh());

// Sets of valid slugs per locale (BNGs — all use English slugs)
const enBngSlugs = buildSlugSet(getAllBusinessNameGenerators());
const frBngSlugs = buildSlugSet(getAllBusinessNameGeneratorsFr());
const esBngSlugs = buildSlugSet(getAllBusinessNameGeneratorsEs());
const deBngSlugs = buildSlugSet(getAllBusinessNameGeneratorsDe());
const itBngSlugs = buildSlugSet(getAllBusinessNameGeneratorsIt());
const jaBngSlugs = buildSlugSet(getAllBusinessNameGeneratorsJa());
const koBngSlugs = buildSlugSet(getAllBusinessNameGeneratorsKo());
const ptBngSlugs = buildSlugSet(getAllBusinessNameGeneratorsPt());
const trBngSlugs = buildSlugSet(getAllBusinessNameGeneratorsTr());
const zhBngSlugs = buildSlugSet(getAllBusinessNameGeneratorsZh());

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
 * Generate complete hreflang alternates for a free-tools page.
 * Only emits URLs for languages where the tool actually exists.
 * @param englishSlug - The English slug for the tool
 * @param type - 'tool' for regular tools, 'business-name-generator' for business name generators
 * @returns Object with language alternates for Next.js metadata
 */
export function generateToolHreflangAlternates(
  englishSlug: string,
  type: 'tool' | 'business-name-generator' = 'tool'
): Record<string, string> {
  const baseUrl = 'https://www.tryanalyze.ai';
  const alternates: Record<string, string> = {};

  if (type === 'business-name-generator') {
    if (enBngSlugs.has(englishSlug)) {
      alternates['x-default'] = `${baseUrl}/free-tools/business-name-generator/${englishSlug}`;
      alternates['en'] = `${baseUrl}/free-tools/business-name-generator/${englishSlug}`;
    }
    if (deBngSlugs.has(englishSlug)) alternates['de'] = `${baseUrl}/free-tools/de/business-name-generator/${englishSlug}`;
    if (esBngSlugs.has(englishSlug)) alternates['es'] = `${baseUrl}/free-tools/es/business-name-generator/${englishSlug}`;
    if (frBngSlugs.has(englishSlug)) alternates['fr'] = `${baseUrl}/free-tools/fr/business-name-generator/${englishSlug}`;
    if (itBngSlugs.has(englishSlug)) alternates['it'] = `${baseUrl}/free-tools/it/business-name-generator/${englishSlug}`;
    if (jaBngSlugs.has(englishSlug)) alternates['ja'] = `${baseUrl}/free-tools/ja/business-name-generator/${englishSlug}`;
    if (koBngSlugs.has(englishSlug)) alternates['ko'] = `${baseUrl}/free-tools/ko/business-name-generator/${englishSlug}`;
    if (ptBngSlugs.has(englishSlug)) alternates['pt'] = `${baseUrl}/free-tools/pt/business-name-generator/${englishSlug}`;
    if (trBngSlugs.has(englishSlug)) alternates['tr'] = `${baseUrl}/free-tools/tr/business-name-generator/${englishSlug}`;
    if (zhBngSlugs.has(englishSlug)) alternates['zh'] = `${baseUrl}/free-tools/zh/business-name-generator/${englishSlug}`;
    return alternates;
  }

  // Regular tools
  const frenchSlug = getFrenchSlug(englishSlug);
  const spanishSlug = getSpanishSlug(englishSlug);

  if (enToolSlugs.has(englishSlug)) {
    alternates['x-default'] = `${baseUrl}/free-tools/${englishSlug}`;
    alternates['en'] = `${baseUrl}/free-tools/${englishSlug}`;
  }
  if (frToolEnglishSlugs.has(englishSlug)) alternates['fr'] = `${baseUrl}/free-tools/fr/${frenchSlug}`;
  if (esToolEnglishSlugs.has(englishSlug)) alternates['es'] = `${baseUrl}/free-tools/es/${spanishSlug}`;
  if (deToolSlugs.has(englishSlug)) alternates['de'] = `${baseUrl}/free-tools/de/${englishSlug}`;
  if (itToolSlugs.has(englishSlug)) alternates['it'] = `${baseUrl}/free-tools/it/${englishSlug}`;
  if (jaToolSlugs.has(englishSlug)) alternates['ja'] = `${baseUrl}/free-tools/ja/${englishSlug}`;
  if (koToolSlugs.has(englishSlug)) alternates['ko'] = `${baseUrl}/free-tools/ko/${englishSlug}`;
  if (ptToolSlugs.has(englishSlug)) alternates['pt'] = `${baseUrl}/free-tools/pt/${englishSlug}`;
  if (trToolSlugs.has(englishSlug)) alternates['tr'] = `${baseUrl}/free-tools/tr/${englishSlug}`;
  if (zhToolSlugs.has(englishSlug)) alternates['zh'] = `${baseUrl}/free-tools/zh/${englishSlug}`;
  return alternates;
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
