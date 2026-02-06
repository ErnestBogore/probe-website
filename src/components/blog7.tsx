import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { format } from 'date-fns';

interface Post {
  id: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  url: string;
  image: string;
}

interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

interface Blog7Props {
  title: string;
  description: string;
  subtitle?: string;
  posts: Post[];
  featuredPost?: Post;
  pagination?: PaginationInfo;
}

const Blog7 = ({ description, subtitle, posts, featuredPost, pagination }: Blog7Props) => {
  // Generate page numbers to display
  const getPageNumbers = () => {
    if (!pagination) return [];
    const { currentPage, totalPages } = pagination;
    const pages: (number | string)[] = [];
    
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) pages.push(i);
      
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <section className="py-32 bg-gray-100 min-h-screen">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <h1 className="text-foreground mb-4 text-2xl tracking-tight md:text-3xl lg:text-4xl max-w-4xl mx-auto">
            {description}
          </h1>
          {subtitle && (
            <p className="text-muted-foreground mb-8 text-base md:text-lg lg:max-w-4xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Featured Post Section */}
        {featuredPost && (
          <div className="w-full max-w-5xl">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="aspect-[16/9] w-full relative">
                <a href={featuredPost.url}>
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    width={1200}
                    height={675}
                    className="h-full w-full object-cover"
                  />
                </a>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 hover:underline">
                  <a href={featuredPost.url}>
                    {featuredPost.title}
                  </a>
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium">{featuredPost.author.charAt(0)}</span>
                    </div>
                    <span>{featuredPost.author}</span>
                  </div>
                  <span>{featuredPost.date ? format(new Date(featuredPost.date), 'MMM dd, yyyy') : ''}</span>
                </div>
              </div>
            </Card>
          </div>
        )}
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="grid grid-rows-[auto_auto_1fr_auto] pt-0"
            >
              <div className="aspect-16/9 w-full">
                <a
                  href={post.url}
                  target="_blank"
                  className="transition-opacity duration-200 fade-in hover:opacity-70"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={1600}
                    height={900}
                    className="h-full w-full object-contain"
                  />
                </a>
              </div>
              <CardHeader>
                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                  <a href={post.url} target="_blank">
                    {post.title}
                  </a>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.summary}</p>
                <p className="text-sm text-muted-foreground">
                  By {post.author} on {post.date ? format(new Date(post.date), 'MMM dd, yyyy') : ''}
                </p>
              </CardContent>
              <CardFooter>
                <a
                  href={post.url}
                  target="_blank"
                  className="flex items-center text-foreground hover:underline"
                >
                  Read more
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {pagination && pagination.totalPages > 1 && (
          <nav className="flex items-center justify-center gap-2" aria-label="Blog pagination">
            {/* Previous Button */}
            <Link
              href={pagination.hasPrevPage ? `/blog?page=${pagination.currentPage - 1}` : '#'}
              className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pagination.hasPrevPage
                  ? 'text-foreground hover:bg-gray-200'
                  : 'text-muted-foreground pointer-events-none opacity-50'
              }`}
              aria-disabled={!pagination.hasPrevPage}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Link>

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
              {getPageNumbers().map((page, index) => (
                typeof page === 'number' ? (
                  <Link
                    key={index}
                    href={`/blog?page=${page}`}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      page === pagination.currentPage
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-gray-200'
                    }`}
                    aria-current={page === pagination.currentPage ? 'page' : undefined}
                  >
                    {page}
                  </Link>
                ) : (
                  <span key={index} className="px-2 py-2 text-muted-foreground">
                    {page}
                  </span>
                )
              ))}
            </div>

            {/* Next Button */}
            <Link
              href={pagination.hasNextPage ? `/blog?page=${pagination.currentPage + 1}` : '#'}
              className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pagination.hasNextPage
                  ? 'text-foreground hover:bg-gray-200'
                  : 'text-muted-foreground pointer-events-none opacity-50'
              }`}
              aria-disabled={!pagination.hasNextPage}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Link>
          </nav>
        )}

        {/* Post count info */}
        {pagination && (
          <p className="text-sm text-muted-foreground text-center">
            Showing {((pagination.currentPage - 1) * 12) + 1} - {Math.min(pagination.currentPage * 12, pagination.totalPosts)} of {pagination.totalPosts} posts
          </p>
        )}
      </div>
    </section>
  );
};

export { Blog7 };
