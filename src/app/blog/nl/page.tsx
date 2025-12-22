/**
 * Dutch Blog Listing Page
 */

import { InternationalBlogListing, getLocalizedMetadata } from '@/components/blog/international-blog-listing';

export default async function DutchBlogPage() {
  return <InternationalBlogListing language="nl" />;
}

export async function generateMetadata() {
  return getLocalizedMetadata('nl');
}
