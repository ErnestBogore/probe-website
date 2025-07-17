/**
 * Anchor ID Utilities
 * 
 * Shared utilities for generating clean anchor IDs from text.
 * Used by both client and server components.
 */

/**
 * Generates a clean anchor ID from heading text
 */
export function generateAnchorId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
} 