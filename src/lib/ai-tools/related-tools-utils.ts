/**
 * Shared utility for computing deterministic related tools.
 * Used by server-side page components to pre-compute related tools
 * so the client component doesn't need to import all locale configs.
 */

/** Minimal data needed to render a related tool card */
export interface RelatedToolData {
  slug: string;
  name: string;
  description: string;
}

/**
 * Deterministic rotation: pick a window of `count` items from the array,
 * offset by a hash of the current slug. Guarantees every item appears
 * in roughly the same number of pages.
 */
export function deterministicRotation<T>(arr: T[], slug: string, count: number): T[] {
  if (arr.length <= count) return arr;
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = ((hash << 5) - hash) + slug.charCodeAt(i);
    hash |= 0;
  }
  const offset = Math.abs(hash) % arr.length;
  const result: T[] = [];
  for (let i = 0; i < count; i++) {
    result.push(arr[(offset + i) % arr.length]);
  }
  return result;
}

/**
 * Compute the deterministic set of related tools for a given slug.
 * Call this from server components, passing the locale-specific tool list.
 */
export function computeRelatedTools(
  allTools: { slug: string; name: string; description: string }[],
  currentToolSlug: string,
  count: number = 12
): RelatedToolData[] {
  const otherTools = allTools.filter(tool => tool.slug !== currentToolSlug);
  return deterministicRotation(otherTools, currentToolSlug, count).map(t => ({
    slug: t.slug,
    name: t.name,
    description: t.description,
  }));
}
