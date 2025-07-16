/**
 * Dynamic Blog Post Page
 * 
 * Renders individual blog posts fetched from DatoCMS by slug.
 * Features structured content rendering, SEO optimization, and responsive design.
 */

import { getBlogPostBySlug, getAllBlogPostSlugs } from '@/lib/datocms';
import { BlogPost } from '@/types/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { StructuredText, renderNodeRule } from 'react-datocms/structured-text';
import { isHeading, isParagraph, isLink } from 'datocms-structured-text-utils';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import React from 'react';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const { blogPost } = await getBlogPostBySlug(params.slug);

    if (!blogPost) {
      notFound();
    }

    const publishedDate = blogPost.publishedDate 
      ? format(new Date(blogPost.publishedDate), 'MMMM dd, yyyy')
      : null;

    return (
      <div className="min-h-screen bg-white">
        {/* Header with back button */}
        <div className="border-b bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Article */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Featured Image */}
          {blogPost.featuredImage && (
            <div className="aspect-video relative overflow-hidden rounded-lg mb-8">
              <Image
                src={blogPost.featuredImage.url}
                alt={blogPost.featuredImage.alt || blogPost.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
          )}

          {/* Article Header */}
          <header className="mb-8">
            {/* Tags */}
            {blogPost.tags && blogPost.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {blogPost.tags.map((tag) => (
                  <span
                    key={tag.slug}
                    className="inline-flex items-center bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag.name}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blogPost.title}
            </h1>

            {/* Excerpt */}
            {blogPost.excerpt && (
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {blogPost.excerpt}
              </p>
            )}

            {/* Meta information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-500 border-b border-gray-200 pb-6">
              {/* Author */}
              {blogPost.author && (
                <div className="flex items-center space-x-3">
                  {blogPost.author.picture && (
                    <Image
                      src={blogPost.author.picture.url}
                      alt={blogPost.author.picture.alt || blogPost.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  )}
                  <div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span className="font-medium text-gray-900">
                        {blogPost.author.name}
                      </span>
                    </div>
                    {blogPost.author.bio && (
                      <p className="text-sm text-gray-500">{blogPost.author.bio}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Published Date */}
              {publishedDate && (
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <time dateTime={blogPost.publishedDate}>
                    {publishedDate}
                  </time>
                </div>
              )}
            </div>
          </header>

          {/* Article Content */}
          {blogPost.content && (
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-blockquote:border-blue-500">
              <StructuredText
                data={blogPost.content as any}
                customNodeRules={[
                  // Custom styling for headings
                  renderNodeRule(isHeading, ({ node, children, key }) => {
                    const headingClasses = {
                      1: "text-4xl font-bold mt-12 mb-6 text-gray-900",
                      2: "text-3xl font-bold mt-10 mb-5 text-gray-900", 
                      3: "text-2xl font-bold mt-8 mb-4 text-gray-900",
                      4: "text-xl font-bold mt-6 mb-3 text-gray-900",
                      5: "text-lg font-bold mt-4 mb-2 text-gray-900",
                      6: "text-base font-bold mt-3 mb-2 text-gray-900"
                    };
                    
                    switch (node.level) {
                      case 1:
                        return <h1 key={key} className={headingClasses[1]}>{children}</h1>;
                      case 2:
                        return <h2 key={key} className={headingClasses[2]}>{children}</h2>;
                      case 3:
                        return <h3 key={key} className={headingClasses[3]}>{children}</h3>;
                      case 4:
                        return <h4 key={key} className={headingClasses[4]}>{children}</h4>;
                      case 5:
                        return <h5 key={key} className={headingClasses[5]}>{children}</h5>;
                      case 6:
                        return <h6 key={key} className={headingClasses[6]}>{children}</h6>;
                      default:
                        return <h2 key={key} className={headingClasses[2]}>{children}</h2>;
                    }
                  }),
                  
                  // Custom styling for paragraphs
                  renderNodeRule(isParagraph, ({ children, key }) => (
                    <p key={key} className="mb-6 text-gray-700 leading-relaxed">
                      {children}
                    </p>
                  )),
                  
                  // Custom styling for links
                  renderNodeRule(isLink, ({ node, children, key }) => (
                    <a
                      key={key}
                      href={node.url}
                      target={node.meta?.find((meta) => meta.id === 'target')?.value}
                      rel={node.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      {children}
                    </a>
                  ))
                ]}
                renderBlock={({ record }) => {
                  const blockRecord = record as any;
                  switch (blockRecord.__typename) {
                    case 'ImageBlockRecord':
                      return (
                        <div className="my-8">
                          <Image
                            src={blockRecord.image?.url || ''}
                            alt={blockRecord.image?.alt || 'Blog image'}
                            width={blockRecord.image?.width || 800}
                            height={blockRecord.image?.height || 600}
                            className="rounded-lg shadow-md w-full h-auto"
                          />
                        </div>
                      );
                    case 'VideoBlockRecord':
                      return (
                        <div className="my-8">
                          <video
                            src={blockRecord.video?.url || ''}
                            title={blockRecord.video?.title || 'Blog video'}
                            width={blockRecord.video?.width || 800}
                            height={blockRecord.video?.height || 450}
                            controls
                            className="rounded-lg shadow-md w-full h-auto"
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      );
                    default:
                      return null;
                  }
                }}
              />
            </div>
          )}

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <Link 
                href="/blog"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to all posts
              </Link>
              
              {blogPost.updatedAt && (
                <p className="text-sm text-gray-500">
                  Last updated: {format(new Date(blogPost.updatedAt), 'MMM dd, yyyy')}
                </p>
              )}
            </div>
          </footer>
        </article>
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog post:', error);
    notFound();
  }
}

// Generate static params for all blog post slugs
export async function generateStaticParams() {
  try {
    const slugs = await getAllBlogPostSlugs();
    return slugs.map((slug) => ({
      slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  try {
    const { blogPost } = await getBlogPostBySlug(params.slug);

    if (!blogPost) {
      return {
        title: 'Post Not Found | Probe Analytics',
        description: 'The requested blog post could not be found.',
      };
    }

    const title = blogPost.seo?.title || blogPost.title;
    const description = blogPost.seo?.description || blogPost.excerpt || 'Read this insightful blog post from Probe Analytics.';
    const image = blogPost.seo?.image || blogPost.featuredImage;

    return {
      title: `${title} | Probe Analytics`,
      description,
      openGraph: {
        title: `${title} | Probe Analytics`,
        description,
        type: 'article',
        publishedTime: blogPost.publishedDate,
        modifiedTime: blogPost.updatedAt,
        authors: blogPost.author?.name ? [blogPost.author.name] : undefined,
        images: image ? [
          {
            url: image.url,
            alt: image.alt || title,
            width: image.width,
            height: image.height,
          }
        ] : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title: `${title} | Probe Analytics`,
        description,
        images: image ? [image.url] : undefined,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Blog Post | Probe Analytics',
      description: 'Read this insightful blog post from Probe Analytics.',
    };
  }
} 