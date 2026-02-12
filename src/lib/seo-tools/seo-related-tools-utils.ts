import { getAllSeoTools } from './seo-tools-config';
import { SeoToolConfig } from './seo-tools-config.types';

export interface SeoRelatedToolData {
  slug: string;
  name: string;
  description: string;
}

export function computeSeoRelatedTools(currentSlug: string, maxTools: number = 4): SeoRelatedToolData[] {
  const allTools = getAllSeoTools();
  const currentTool = allTools.find(t => t.slug === currentSlug);

  if (!currentTool) return [];

  // Prioritize tools from the same category, then others
  const sameCategory = allTools.filter(
    t => t.slug !== currentSlug && t.category === currentTool.category
  );
  const otherCategory = allTools.filter(
    t => t.slug !== currentSlug && t.category !== currentTool.category
  );

  const ordered = [...sameCategory, ...otherCategory];

  // Use a deterministic rotation based on the slug to vary displayed tools
  const offset = currentSlug.split('').reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  const startIdx = offset % Math.max(ordered.length, 1);

  const selected: SeoToolConfig[] = [];
  for (let i = 0; i < Math.min(maxTools, ordered.length); i++) {
    selected.push(ordered[(startIdx + i) % ordered.length]);
  }

  return selected.map(t => ({
    slug: t.slug,
    name: t.name,
    description: t.description,
  }));
}
