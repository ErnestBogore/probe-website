import { Metadata } from 'next';
import Link from 'next/link';
import { getAllTools } from '@/lib/ai-tools/tools-config';
import { DashedLine } from '@/components/dashed-line';
import { Button } from '@/components/ui/button';
import { HeroCta } from '@/components/marketing/hero-cta';
import { 
  FileText, 
  RefreshCw, 
  Search, 
  Type, 
  ListChecks, 
  Sparkles,
  PenTool,
  CheckCircle,
  Hash,
  FileCode,
  Smile,
  Shield,
  Globe,
  Zap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free AI Writing Tools | Analyze',
  description: 'Access our collection of free AI writing tools including paragraph generators, paraphrasers, summarizers, grammar checkers, and more. No signup required.',
  openGraph: {
    title: 'Free AI Writing Tools | Analyze',
    description: 'Access our collection of free AI writing tools including paragraph generators, paraphrasers, summarizers, grammar checkers, and more. No signup required.',
    url: 'https://www.tryanalyze.ai/free-tools',
    type: 'website',
  },
};

const toolIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'paragraph-generator': FileText,
  'paragraph-rewriter': RefreshCw,
  'meta-description-generator': Search,
  'paraphrasing-tool': Type,
  'summarizer': ListChecks,
  'blog-title-generator': Sparkles,
  'outline-generator': ListChecks,
  'ai-content-detector': Search,
  'ai-text-humanizer': Sparkles,
  'conclusion-generator': FileText,
  'grammar-checker': CheckCircle,
  'sentence-rewriter': PenTool,
  'acronym-generator': Hash,
  'lorem-ipsum-generator': FileCode,
  'emoji-translator': Smile,
  'plagiarism-checker': Shield,
};

const standaloneTools = [
  {
    slug: 'ai-website-audit-tool',
    name: 'AI Website Audit Tool',
    description: 'Analyze your website\'s AI readiness and get actionable recommendations.',
    icon: Globe,
  },
  {
    slug: 'llm-txt-generator-tool',
    name: 'LLM.txt Generator',
    description: 'Generate an LLM.txt file to help AI models understand your content.',
    icon: FileCode,
  },
  {
    slug: 'perplexity-ai-alternative',
    name: 'Perplexity AI Alternative',
    description: 'A free alternative for AI-powered search and research.',
    icon: Zap,
  },
];

// Categorize tools
const writingTools = ['paragraph-generator', 'paragraph-rewriter', 'sentence-rewriter', 'conclusion-generator', 'outline-generator', 'blog-title-generator'];
const seoTools = ['meta-description-generator', 'summarizer', 'paraphrasing-tool'];
const utilityTools = ['grammar-checker', 'ai-content-detector', 'ai-text-humanizer', 'plagiarism-checker', 'acronym-generator', 'lorem-ipsum-generator', 'emoji-translator'];

export default function FreeToolsPage() {
  const allTools = getAllTools();
  
  const getToolsByCategory = (slugs: string[]) => {
    return allTools.filter(tool => slugs.includes(tool.slug));
  };

  const writing = getToolsByCategory(writingTools);
  const seo = getToolsByCategory(seoTools);
  const utility = getToolsByCategory(utilityTools);

  return (
    <main className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        {/* Grain texture overlay */}
        <div 
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 border border-gray-300 opacity-30" />
          <div className="absolute top-40 right-20 w-24 h-24 border border-gray-300 opacity-20" />
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-gray-300 opacity-25" />
          <div className="absolute top-16 left-1/3 w-2 h-2 bg-purple-400 rounded-full opacity-60" />
          <div className="absolute top-32 right-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full opacity-50" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm mb-6">
              <span className="text-sm font-medium text-gray-700">Free AI Tools</span>
              <span className="w-5 h-5 bg-purple-600 rounded flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Free AI Writing Tools
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Analyze&apos;s AI writing tools help you produce high-quality content that drives clicks, sign-ups, and sales. Whether you&apos;re looking to generate a title, write a report, or anything else, our AI writing tools have got you covered.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild>
                <a href="#writing-tools" className="bg-gray-900 text-white hover:bg-gray-800">
                  Explore Tools
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Writing Tools Section */}
      <section id="writing-tools" className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center mb-10">
            <DashedLine className="text-muted-foreground" />
            <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
              WRITING TOOLS
            </span>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
              Writing Tools
            </h2>
            <p className="text-gray-600">
              Generate, rewrite, and improve your content with AI-powered writing assistants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {writing.map((tool) => {
              const Icon = toolIcons[tool.slug] || FileText;
              return (
                <Link
                  key={tool.slug}
                  href={`/free-tools/${tool.slug}`}
                  className="group flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {tool.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO & Content Marketing Tools Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center mb-10">
            <DashedLine className="text-muted-foreground" />
            <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
              SEO & CONTENT MARKETING
            </span>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
              SEO & Content Marketing Tools
            </h2>
            <p className="text-gray-600">
              Optimize your content for search engines and create compelling marketing copy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {seo.map((tool) => {
              const Icon = toolIcons[tool.slug] || FileText;
              return (
                <Link
                  key={tool.slug}
                  href={`/free-tools/${tool.slug}`}
                  className="group flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {tool.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Utility Tools Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center mb-10">
            <DashedLine className="text-muted-foreground" />
            <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
              UTILITY TOOLS
            </span>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
              Utility Tools
            </h2>
            <p className="text-gray-600">
              Check grammar, detect AI content, generate placeholders, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {utility.map((tool) => {
              const Icon = toolIcons[tool.slug] || FileText;
              return (
                <Link
                  key={tool.slug}
                  href={`/free-tools/${tool.slug}`}
                  className="group flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {tool.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI SEO & Analysis Tools Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center mb-10">
            <DashedLine className="text-muted-foreground" />
            <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
              AI SEO & ANALYSIS
            </span>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
              AI SEO & Analysis Tools
            </h2>
            <p className="text-gray-600">
              Analyze your website&apos;s AI readiness and optimize for AI search engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {standaloneTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.slug}
                  href={`/free-tools/${tool.slug}`}
                  className="group flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {tool.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <HeroCta />
    </main>
  );
}
