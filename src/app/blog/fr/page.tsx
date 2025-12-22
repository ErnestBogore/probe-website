/**
 * French Blog Listing Page
 */

import { InternationalBlogListing, getLocalizedMetadata } from '@/components/blog/international-blog-listing';

export default async function FrenchBlogPage() {
  return <InternationalBlogListing language="fr" />;
}

export async function generateMetadata() {
  return getLocalizedMetadata('fr');
}
