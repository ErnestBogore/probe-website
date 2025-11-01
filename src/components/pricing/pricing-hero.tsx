"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const PricingHero = () => {
  return (
    <section className="pt-24 pb-16 lg:pt-28 lg:pb-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-foreground text-3xl tracking-tight md:text-4xl lg:text-5xl">
            The Most SMB-Friendly AI<br className="hidden sm:block" /> Traffic Analytics Platform
          </h1>
          
          <p className="text-muted-foreground text-xl mt-6 md:text-2xl max-w-3xl mx-auto">
            Track your brand visibility across major AI platforms and see total sessions from AI search in the last 30 days, how that is trending over time, and how much of your overall traffic now comes from AI sources.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <a href="#plans" className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 text-lg">
                View Plans
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
