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
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Unable to load blog posts
          </h1>
          <p className="text-gray-600">
            Please try again later or contact support if the problem persists.
          </p>
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