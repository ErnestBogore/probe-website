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
    title: "AI search visibility",
    description: "Track exactly where your brand surfaces across AI-generated answers and search responses.",
    icon: Search,
  },
  {
    title: "Real AI referral data",
    description: "Connect your GA4 to uncover real AI traffic: which engines drive visits, which pages convert, and what actually moves results.",
    icon: BarChart3,
  },
  {
    title: "Competitive intelligence",
    description: "Monitor competitors across AI and search, and identify where your brand can outperform them.",
    icon: Users,
  },
  {
    title: "Citation and source insights",
    description: "See which sources influence brand mentions in AI results—and how to strengthen your presence in those conversations.",
    icon: FileText,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
          {/* Left side - Main content */}
          <div className="flex-1">
            <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl">
              Measure what LLMs say about you and act on it.
            </h1>

            <p className="text-muted-foreground text-1xl mt-5 md:text-3xl">
              See how AI represents your brand, which engines drive visits, where competitors win, and what to ship next so visibility compounds.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
              <Button asChild>
                <a href="#" className="bg-gray-900 text-white hover:bg-gray-800">
                  Show Me My AI Rankings
                </a>
              </Button>
              <Button
                variant="outline"
                className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
                asChild
              >
                <Link
                  href="/blog"
                  className="max-w-56 truncate text-start md:max-w-none"
                >
                  Learn about AI search
                  <ArrowRight className="stroke-3" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
            <DashedLine
              orientation="vertical"
              className="absolute top-0 left-0 max-lg:hidden"
            />
            <DashedLine
              orientation="horizontal"
              className="absolute top-0 lg:hidden"
            />
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                  <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                  <div>
                    <h2 className="font-text text-foreground font-semibold">
                      {feature.title}
                    </h2>
                    <p className="text-muted-foreground max-w-76 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:mt-24">
          <div className="relative h-[793px] w-full">
            <Image
              src="/Hero-image-feature.png"
              alt="hero"
              fill
              className="rounded-2xl object-cover object-left-top shadow-lg max-lg:rounded-tr-none"
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};


