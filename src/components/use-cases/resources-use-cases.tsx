import { SchemaImage as Image } from "@/components/ui/schema-image";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { BlogPost } from "@/types/blog";
import { DashedLine } from "@/components/dashed-line";

interface ResourcesUseCasesProps {
  posts?: BlogPost[];
}

const ResourcesUseCases = ({ posts }: ResourcesUseCasesProps) => {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center mb-10">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
            RESOURCES TO EXECUTE
          </span>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl text-gray-900">
            And resources that are actionable
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Practical guides to help you improve your brand's visibility and performance across AI platforms.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            // Use featured image or fallback to SEO image
            const cardImage = post.featuredImage || post.seo?.image;
            const postUrl = `/blog/${post.slug}`;
            const description = post.seo?.description || '';

            return (
              <Card
                key={post.id}
                className="group hover:shadow-lg transition-all duration-300 bg-white border border-gray-200"
              >
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <a
                    href={postUrl}
                    className="block transition-transform duration-300 group-hover:scale-105"
                  >
                    {cardImage && (
                      <Image
                        src={cardImage.url}
                        alt={cardImage.alt || post.title}
                        width={600}
                        height={338}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </a>
                </div>
                
                <CardHeader className="pb-3">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-pink-600 transition-colors duration-200">
                    <a href={postUrl}>
                      {post.title}
                    </a>
                  </h3>
                </CardHeader>
                
                <CardContent className="pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {description}
                  </p>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <a
                    href={postUrl}
                    className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium transition-colors duration-200"
                  >
                    Read the guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { ResourcesUseCases };
