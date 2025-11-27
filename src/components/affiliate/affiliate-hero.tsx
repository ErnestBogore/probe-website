"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const AffiliateHero = () => {
  return (
    <section className="pt-24 pb-16 lg:pt-28 lg:pb-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-foreground text-3xl tracking-tight md:text-4xl lg:text-5xl">
            Earn 30% Recurring Commission Forever
          </h1>
          
          <p className="text-muted-foreground text-xl mt-6 md:text-2xl max-w-3xl mx-auto">
            Earn recurring income promoting the fastest-growing AI traffic analytics platform.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <a href="https://analyze.partneroapp.com/register" className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 text-lg">
                Join Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const calculatorSection = document.querySelector('[data-calculator-section]');
                calculatorSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg"
            >
              Calculate My Earnings
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
