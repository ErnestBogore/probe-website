/**
 * RelatedPosts Component
 * 
 * Displays a grid of related blog posts at the end of blog articles.
 * Shows up to 6 related posts with images, titles, dates, and authors.
 */

import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { BlogPostSummary } from '@/types/blog';

interface RelatedPostsProps {
  posts: BlogPostSummary[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-12 border-t border-gray-200 -mx-16 px-16 lg:-mx-32 lg:px-32">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
          Similar Content You Might Want To Read
        </h2>
        <p className="text-gray-600 text-center">
          Discover more insights and perspectives on related topics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.slice(0, 6).map((post) => {
          const publishedDate = post.publishedDate 
            ? format(new Date(post.publishedDate), 'MMM dd, yyyy')
            : 'No date';

          // Use featured image or fallback to SEO image
          const cardImage = post.featuredImage || post.seo?.image;

          return (
            <Link 
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
            >
              {/* Image */}
              {cardImage && (
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={cardImage.url}
                    alt={cardImage.alt || post.title}
                    fill
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight min-h-[3rem]">
                  {post.title}
                </h3>

                {/* Meta information */}
                <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                  <div className="flex items-center space-x-2">
                    {post.author?.image && (
                      <Image
                        src={post.author.image.url}
                        alt={post.author.image.alt || post.author.name || 'Author'}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    )}
                    <span className="font-medium">{post.author?.name || 'Anonymous'}</span>
                  </div>
                  <time className="font-medium">{publishedDate}</time>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
} 