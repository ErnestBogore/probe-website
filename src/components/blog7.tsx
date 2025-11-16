import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

interface Blog7Props {
  title: string;
  description: string;
  subtitle?: string;
  posts: Post[];
  featuredPost?: Post;
}

const Blog7 = ({ title, description, subtitle, posts, featuredPost }: Blog7Props) => {
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
      </div>
    </section>
  );
};

export { Blog7 };
