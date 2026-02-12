import { getAllSeoTools } from './seo-tools-config';
import { SeoToolIconName } from './seo-tools-config.types';

export interface SeoRelatedToolData {
  slug: string;
  name: string;
  description: string;
  iconName: SeoToolIconName;
}

export function computeSeoRelatedTools(currentSlug: string): SeoRelatedToolData[] {
  const allTools = getAllSeoTools();

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
