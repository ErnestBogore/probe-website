/**
 * Blog Listing Page
 * 
 * Displays a grid of all blog posts fetched from DatoCMS.
 * Features responsive design with featured images, excerpts, and author information.
 */

import { getAllBlogPosts } from '@/lib/datocms';
import { BlogPost } from '@/types/blog';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';

export default async function BlogPage() {
  try {
    const { allBlogPosts } = await getAllBlogPosts();

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Probe Analytics Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Insights, analysis, and thought leadership in data analytics and business intelligence.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {allBlogPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                No blog posts yet
              </h3>
              <p className="text-gray-600">
                Check back soon for our latest insights and updates.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allBlogPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    
    // Show setup instructions if content models don't exist
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const isContentModelError = errorMessage.includes("doesn't exist on type 'Query'");
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Probe Analytics Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Insights, analysis, and thought leadership in data analytics and business intelligence.
              </p>
            </div>
          </div>
        </div>

        {/* Setup Instructions */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {isContentModelError ? (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Blog Setup Required
                </h2>
                <p className="text-gray-600 mb-6">
                  To start using the blog, you need to create content models in your DatoCMS project.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Setup Steps:</h3>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li>
                    Go to your DatoCMS admin panel: 
                    <a href="https://probe-9594.admin.datocms.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                      probe-9594.admin.datocms.com
                    </a>
                  </li>
                  <li>Navigate to <strong>Settings → Models</strong></li>
                  <li>Create a new model called <strong>&quot;Blog Post&quot;</strong> with API key <code className="bg-gray-100 px-1 rounded">blog_post</code></li>
                  <li>Add the required fields as outlined in the documentation</li>
                  <li>Create some sample blog posts and publish them</li>
                  <li>Refresh this page to see your content</li>
                </ol>
              </div>

              <div className="text-center">
                <a 
                  href="https://probe-9594.admin.datocms.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Open DatoCMS Admin
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Need help?</strong> Check the <code>BLOG_SETUP.md</code> file in your project for detailed setup instructions.
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Unable to load blog posts
              </h2>
              <p className="text-gray-600 mb-4">
                There was an error connecting to the blog content.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-2xl mx-auto">
                <p className="text-sm text-red-700">
                  <strong>Error:</strong> {errorMessage}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

/**
 * Blog Post Card Component
 * 
 * Individual blog post card displaying featured image, title, excerpt,
 * author information, and publication date.
 */
interface BlogPostCardProps {
  post: BlogPost;
}

function BlogPostCard({ post }: BlogPostCardProps) {
  const publishedDate = post.publishedDate 
    ? format(new Date(post.publishedDate), 'MMM dd, yyyy')
    : 'No date';

  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Featured Image */}
        {post.featuredImage && (
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alt || post.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag.slug}
                  className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
            {post.title}
          </h2>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-gray-600 mb-4 line-clamp-3">
              {post.excerpt}
            </p>
          )}

          {/* Author and Date */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              {post.author?.picture && (
                <Image
                  src={post.author.picture.url}
                  alt={post.author.picture.alt || post.author.name || 'Author'}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              )}
              <span>{post.author?.name || 'Anonymous'}</span>
            </div>
            <time dateTime={post.publishedDate}>
              {publishedDate}
            </time>
          </div>
        </div>
      </Link>
    </article>
  );
}

// Generate metadata for SEO
export async function generateMetadata() {
  return {
    title: 'Blog | Probe Analytics',
    description: 'Insights, analysis, and thought leadership in data analytics and business intelligence from the Probe Analytics team.',
    openGraph: {
      title: 'Blog | Probe Analytics',
      description: 'Insights, analysis, and thought leadership in data analytics and business intelligence from the Probe Analytics team.',
      type: 'website',
    },
  };
} 