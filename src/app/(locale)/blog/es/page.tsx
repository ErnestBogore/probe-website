/**
 * Spanish Blog Listing Page
 */

import { InternationalBlogListing, getLocalizedMetadata } from '@/components/blog/international-blog-listing';

export default async function SpanishBlogPage() {
  return <InternationalBlogListing language="es" />;
}

export async function generateMetadata() {
  return getLocalizedMetadata('es');
}
