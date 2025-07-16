/**
 * Blog Listing Component
 * 
 * Displays a responsive grid of blog post cards with proper spacing and layout.
 * Handles empty states and provides a clean, modern interface for browsing posts.
 * 
 * Features:
 * - Responsive grid layout
 * - Post card components
 * - Empty state handling
 * - Clean typography and spacing
 * - Integration with shadcn/ui components
 */

import { BlogListingProps } from "@/lib/types";
import { PostCard } from "./post-card";

export function BlogListing({ posts, site }: BlogListingProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            No posts yet
          </h2>
          <p className="text-muted-foreground mb-8">
            We're working on creating great content for you. Check back soon for our latest insights 
            on Generative Engine Optimization and AI visibility.
          </p>
          <div className="bg-muted rounded-lg p-6">
            <p className="text-sm text-muted-foreground">
              Want to be notified when we publish new content? Follow our updates and join the conversation 
              about the future of AI-driven search.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Featured Post (First Post) */}
      {posts.length > 0 && (
        <div className="border-b border-border pb-12">
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Featured Post
            </span>
          </div>
          <PostCard post={posts[0]} featured priority />
        </div>
      )}

      {/* Other Posts Grid */}
      {posts.length > 1 && (
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Latest Posts
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(1).map((post, index) => (
              <PostCard key={post.id} post={post} priority={index < 5} />
            ))}
          </div>
        </div>
      )}

      {/* Load More Section (for future pagination) */}
      {posts.length >= 20 && (
        <div className="text-center pt-8 border-t border-border">
          <p className="text-muted-foreground mb-4">
            Showing {posts.length} posts
          </p>
          <p className="text-sm text-muted-foreground">
            More posts coming soon! We're constantly publishing new insights and updates.
          </p>
        </div>
      )}
    </div>
  );
} 