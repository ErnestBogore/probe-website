"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SchemaImage as Image } from "@/components/ui/schema-image";

export const HeroComparisonWritesonicGeo = () => {
  const scrollToComparison = () => {
    const comparisonSection = document.querySelector('[data-comparison-table]');
    if (comparisonSection) {
      comparisonSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 lg:pt-28 lg:pb-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Logo Comparison */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Image src="/favicon.png" alt="Analyze AI" width={48} height={48} className="rounded" />
            <span className="text-2xl font-bold text-gray-600">vs</span>
            <Image src="/writesonic logo.svg" alt="Writesonic GEO" width={48} height={48} />
          </div>
          
          <h1 className="text-foreground text-3xl tracking-tight md:text-4xl lg:text-5xl">
            Analyze AI vs Writesonic GEO: which platform gives you deeper AI visibility?
          </h1>
          <p className="text-muted-foreground text-xl mt-6 md:text-2xl max-w-3xl mx-auto">
            Compare how Analyze AI and Writesonic GEO measure your AI visibility — from how often your brand appears in AI responses to how that visibility translates into actual traffic and revenue. See where Analyze AI goes deeper, and how that depth turns AI visibility into competitive advantage.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <a href="/talk-to-a-human" className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 text-lg">
                See Analyze AI in action
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToComparison}>
              <span className="px-8 py-4 text-lg">Compare feature-by-feature</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
