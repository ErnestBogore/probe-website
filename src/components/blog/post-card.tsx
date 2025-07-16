/**
 * Post Card Component
 * 
 * Displays an individual blog post preview with cover image, title, excerpt, and metadata.
 * Supports both regular and featured layouts for different contexts.
 * 
 * Features:
 * - Responsive design with hover effects
 * - Cover image with lazy loading
 * - Author information and publication date
 * - Featured post variant
 * - Accessible navigation and markup
 * - Integration with shadcn/ui components
 */

import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BlogPostSummary } from "@/lib/types";
import { Calendar, User } from "lucide-react";

interface PostCardProps {
  post: BlogPostSummary;
  featured?: boolean;
  priority?: boolean;
}

export function PostCard({ post, featured = false, priority = false }: PostCardProps) {
  const publishedDate = new Date(post.publishedAt);
  const formattedDate = format(publishedDate, "MMM dd, yyyy");

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Cover Image */}
          {post.coverImage && (
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted">
              <Image
                src={post.coverImage.responsiveImage.src}
                alt={post.coverImage.responsiveImage.alt || post.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                priority={priority}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}

          {/* Content */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            
            {post.excerpt && (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            )}

            {/* Meta Information */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
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
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                Read more →
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden transition-all group-hover:shadow-md group-hover:scale-[1.02]">
        {/* Cover Image */}
        {post.coverImage && (
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={post.coverImage.responsiveImage.src}
              alt={post.coverImage.responsiveImage.alt || post.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}

        <CardHeader className="space-y-3">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          
          {post.excerpt && (
            <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </CardHeader>

        <CardContent className="pt-0">
          {/* Meta Information */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-3 w-3" />
              <time dateTime={post.publishedAt}>{formattedDate}</time>
            </div>
            
            {post.author && (
              <div className="flex items-center gap-2">
                <User className="h-3 w-3" />
                <span className="truncate">{post.author.name}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
} 