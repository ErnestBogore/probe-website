/**
 * Blog Listing Page
 * 
 * Displays a paginated list of all blog posts from DatoCMS.
 * Includes SEO optimization, responsive design, and proper metadata handling.
 * 
 * Features:
 * - Server-side data fetching from DatoCMS
 * - SEO-optimized with meta tags
 * - Responsive blog post grid
 * - Integration with shadcn/ui components
 * - Type-safe GraphQL queries
 */

import { Metadata } from "next";
import { toNextMetadata } from "react-datocms";
import { performRequest } from "@/lib/datocms";
import { metaTagsFragment, blogPostSummaryFragment, siteFragment } from "@/lib/fragments";
import { BlogListingResponse, BlogPageProps } from "@/lib/types";
import { BlogListing } from "@/components/blog/blog-listing";

const BLOG_LISTING_QUERY = `
  query BlogListing {
    site: _site {
      ...siteFragment
    }
    allBlogPosts(orderBy: publishedAt_DESC, first: 20) {
      ...blogPostSummaryFragment
    }
  }
  
  ${siteFragment}
  ${blogPostSummaryFragment}
  ${metaTagsFragment}
`;

/**
 * Generate metadata for the blog listing page
 */
export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await performRequest<BlogListingResponse>({
      query: BLOG_LISTING_QUERY,
      revalidate: 3600, // Revalidate every hour
    });

    return toNextMetadata([
      ...(data.site.favicon || []),
      {
        tag: "title",
        content: `Blog - ${data.site.globalSeo?.siteName || "Probe Analytics"}`,
        attributes: {},
      },
      {
        tag: "meta",
        attributes: {
          name: "description",
          content: "Insights, tutorials, and updates on Generative Engine Optimization (GEO) and AI visibility analytics.",
        },
        content: "",
      },
      {
        tag: "meta",
        attributes: {
          property: "og:title",
          content: `Blog - ${data.site.globalSeo?.siteName || "Probe Analytics"}`,
        },
        content: "",
      },
      {
        tag: "meta",
        attributes: {
          property: "og:description",
          content: "Insights, tutorials, and updates on Generative Engine Optimization (GEO) and AI visibility analytics.",
        },
        content: "",
      },
      {
        tag: "meta",
        attributes: {
          property: "og:type",
          content: "website",
        },
        content: "",
      },
    ]);
  } catch (error) {
    console.error("Error generating blog metadata:", error);
    return {
      title: "Blog - Probe Analytics",
      description: "Insights, tutorials, and updates on Generative Engine Optimization (GEO) and AI visibility analytics.",
    };
  }
}

/**
 * Blog listing page component
 */
export default async function BlogPage(_props: BlogPageProps) {
  try {
    const data = await performRequest<BlogListingResponse>({
      query: BLOG_LISTING_QUERY,
      revalidate: 3600, // Revalidate every hour
    });

    return (
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-muted/50 to-background py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Insights & Updates
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay ahead in the world of Generative Engine Optimization with our latest research, 
              tutorials, and industry insights.
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="container mx-auto px-6 py-16">
          <BlogListing posts={data.allBlogPosts} site={data.site} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We're currently updating our blog. Please check back soon!
            </p>
            <div className="bg-muted rounded-lg p-8">
              <p className="text-sm text-muted-foreground">
                Unable to load blog posts at the moment. This might be due to:
              </p>
              <ul className="text-sm text-muted-foreground mt-4 space-y-2 text-left max-w-md mx-auto">
                <li>• Content management system is being updated</li>
                <li>• Network connectivity issues</li>
                <li>• Temporary server maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
} 