/**
 * Italian Blog Listing Page
 */

import { InternationalBlogListing, getLocalizedMetadata } from '@/components/blog/international-blog-listing';

export default async function ItalianBlogPage() {
  return <InternationalBlogListing language="it" />;
}

export async function generateMetadata() {
  return getLocalizedMetadata('it');
}
