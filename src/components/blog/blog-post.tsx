/**
 * Blog Post Component
 * 
 * Displays a complete blog post with structured content, cover image, meta information,
 * and related posts. Handles rich content rendering and provides a clean reading experience.
 * 
 * Features:
 * - Hero section with cover image and meta data
 * - Structured content rendering with DatoCMS
 * - Author information and publication dates
 * - Related posts section
 * - Responsive typography and layout
 * - Social sharing optimization
 */

import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { StructuredText } from "react-datocms";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BlogPostProps } from "@/lib/types";
import { PostCard } from "./post-card";
import { Calendar, User, ArrowLeft } from "lucide-react";

export function BlogPost({ post, morePosts = [], site }: BlogPostProps) {
  const publishedDate = new Date(post.publishedAt);
  const formattedDate = format(publishedDate, "MMMM dd, yyyy");

  return (
    <div className="min-h-screen bg-background">
      {/* Back to Blog Navigation */}
      <div className="container mx-auto px-6 pt-8">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8 -ml-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <article className="container mx-auto px-6 pb-16">
        {/* Cover Image */}
        {post.coverImage && (
          <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden rounded-xl mb-12 bg-muted">
            <Image
              src={post.coverImage.responsiveImage.src}
              alt={post.coverImage.responsiveImage.alt || post.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        )}

        {/* Article Header */}
        <header className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          
          {post.excerpt && (
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {post.excerpt}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-border pb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.publishedAt}>{formattedDate}</time>
            </div>
            
            {post.author && (
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author.name}</span>
              </div>
            )}

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
            <StructuredText
              data={post.content.value}
              renderBlock={({ record }) => {
                if (record.__typename === 'ImageBlockRecord') {
                  const imageBlock = record as any; // Type assertion for DatoCMS record
                  return (
                    <div className="my-8">
                      <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                        <Image
                          src={imageBlock.image.responsiveImage.src}
                          alt={imageBlock.image.responsiveImage.alt || ''}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 896px"
                        />
                      </div>
                      {imageBlock.caption && (
                        <p className="text-sm text-muted-foreground text-center mt-2 italic">
                          {imageBlock.caption}
                        </p>
                      )}
                    </div>
                  );
                }
                return <div></div>;
              }}
            />
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {morePosts && morePosts.length > 0 && (
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              More from our blog
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {morePosts.map((relatedPost) => (
                <PostCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/blog">
                <Button variant="outline" size="lg">
                  View All Posts
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
} 