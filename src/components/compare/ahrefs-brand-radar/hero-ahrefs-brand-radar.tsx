"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Search,
  BarChart3,
  Users,
  FileText,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "AI search visibility tracking",
    description: "Track exactly where your brand appears in AI assistant answers and recommendations across ChatGPT, Claude, Perplexity, and more.",
    icon: Search,
  },
  {
    title: "Real traffic from AI channels",
    description: "Connect GA4 to see how much traffic AI assistants actually drive to your site, which pages convert, and ROI from AI channels.",
    icon: BarChart3,
  },
  {
    title: "AI competitive intelligence",
    description: "See when AI assistants recommend competitors instead of you, for which prompts, and how they position them in buying scenarios.",
    icon: Users,
  },
  {
    title: "Citation and source insights",
    description: "See which URLs and domains AI assistants cite to justify recommendations - so you know which assets shape the AI narrative.",
    icon: FileText,
  },
];

export const HeroAhrefsBrandRadar = () => {
  return (
    <section className="pt-24 pb-6 lg:pt-28 lg:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
          {/* Left side - Main content */}
          <div className="flex-1">
            <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl">
              Analyze AI vs Ahrefs Brand Radar: AI Search Analytics vs Traditional Brand Monitoring
            </h1>
            
            <p className="text-muted-foreground mt-6 max-w-lg text-lg">
              While Ahrefs Brand Radar tracks traditional web mentions, Analyze AI shows how AI assistants talk about your brand, recommend competitors, and drive actual traffic.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/talk-to-a-human">
                  Talk To A Human
                </a>
              </Button>
            </div>

            <div className="mt-8">
              <div className="text-sm text-muted-foreground mb-4">
                • 14-day free trial • No credit card required • Setup in 5 minutes
              </div>
            </div>
          </div>

          {/* Right side - Hero image */}
          <div className="flex-1 lg:flex lg:justify-end">
            <div className="relative">
              <div className="relative h-96 w-full max-w-lg lg:h-[500px]">
                <Image
                  src="/AI traffic.png"
                  alt="Analyze AI Search Analytics Dashboard"
                  fill
                  className="rounded-lg object-cover shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Features grid */}
        <div className="mt-16 lg:mt-24">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex flex-col items-start">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
