/**
 * GraphQL Fragments
 * 
 * Reusable GraphQL fragment definitions for DatoCMS queries.
 * These fragments help maintain consistency and reduce duplication
 * across different queries.
 * 
 * Features:
 * - Responsive image fragment for optimized image delivery
 * - Meta tags fragment for SEO and social sharing
 * - Author fragment for blog post attribution
 */

/**
 * Responsive Image Fragment
 * 
 * Provides all necessary fields for responsive, progressive images
 * with LQIP (Low Quality Image Placeholder) support.
 * 
 * See: https://www.datocms.com/blog/offer-responsive-progressive-lqip-images-in-2020
 */
export const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    base64
  }
`;

/**
 * Meta Tags Fragment
 * 
 * Provides SEO meta tags for proper page optimization
 * and social media sharing.
 */
export const metaTagsFragment = `
  fragment metaTagsFragment on Tag {
    attributes
    content
    tag
  }
`;

/**
 * Author Fragment
 * 
 * Standard author information for blog posts and other content.
 */
export const authorFragment = `
  fragment authorFragment on AuthorRecord {
    id
    name
    bio
    picture {
      responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100}) {
        ...responsiveImageFragment
      }
    }
  }
  ${responsiveImageFragment}
`;

/**
 * Blog Post Summary Fragment
 * 
 * Essential fields for blog post listings and previews.
 */
export const blogPostSummaryFragment = `
  fragment blogPostSummaryFragment on BlogPostRecord {
    id
    title
    slug
    excerpt
    publishedAt
    coverImage {
      responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 800, h: 600}) {
        ...responsiveImageFragment
      }
    }
    author {
      ...authorFragment
    }
  }
  ${responsiveImageFragment}
  ${authorFragment}
`;

/**
 * Complete Blog Post Fragment
 * 
 * Full blog post data including content and SEO information.
 */
export const blogPostFragment = `
  fragment blogPostFragment on BlogPostRecord {
    id
    title
    slug
    excerpt
    content {
      value
      blocks {
        __typename
        ... on ImageBlockRecord {
          id
          image {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1200, h: 800}) {
              ...responsiveImageFragment
            }
          }
          caption
        }
      }
    }
    publishedAt
    updatedAt
    seo: _seoMetaTags {
      ...metaTagsFragment
    }
    coverImage {
      responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1200, h: 800}) {
        ...responsiveImageFragment
      }
    }
    author {
      ...authorFragment
    }
    tags {
      id
      name
      slug
    }
  }
  ${responsiveImageFragment}
  ${metaTagsFragment}
  ${authorFragment}
`;

/**
 * Site Fragment
 * 
 * Global site information and favicon.
 */
export const siteFragment = `
  fragment siteFragment on Site {
    globalSeo {
      siteName
      titleSuffix
      twitterAccount
      facebookPageUrl
    }
    favicon: faviconMetaTags {
      ...metaTagsFragment
    }
  }
  ${metaTagsFragment}
`; 