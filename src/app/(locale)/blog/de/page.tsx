/**
 * German Blog Listing Page
 */

import { InternationalBlogListing, getLocalizedMetadata } from '@/components/blog/international-blog-listing';

export default async function GermanBlogPage() {
  return <InternationalBlogListing language="de" />;
}

export async function generateMetadata() {
  return getLocalizedMetadata('de');
}
