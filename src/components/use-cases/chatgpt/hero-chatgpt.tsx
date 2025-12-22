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
    title: "ChatGPT visibility tracking",
    description: "Track exactly where your brand appears in ChatGPT's answers and recommendations (and how you're described in each buying scenario).",
    icon: Search,
  },
  {
    title: "Real traffic from ChatGPT",
    description: "Connect GA4 to see how many sessions ChatGPT actually drives to your site, which pages those users land on, and which pages convert.",
    icon: BarChart3,
  },
  {
    title: "Competitive intelligence",
    description: "See when ChatGPT recommends competitors instead of you, for which prompts, and how it positions them against you.",
    icon: Users,
  },
  {
    title: "Citation and source insights",
    description: "See which URLs and domains ChatGPT is pulling from to justify recommendations — so you know which assets are shaping the narrative.",
    icon: FileText,
  },
];

export const HeroChatGPT = () => {
  return (
    <section className="pt-24 pb-6 lg:pt-28 lg:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
          {/* Left side - Main content */}
          <div className="flex-1">
            <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl">
              Measure what ChatGPT says about your brand — and act on it.
            </h1>

            <p className="text-muted-foreground text-1xl mt-5 md:text-3xl">
              See how ChatGPT represents your product, when it recommends competitors instead of you, how often it sends traffic to your site, and what to build next so that visibility turns into revenue.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
              <Button asChild>
                <a href="https://tryanalyze.ai/pricing" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white hover:bg-gray-800">
                  Show Me My ChatGPT Rankings
                </a>
              </Button>
              <Button
                variant="outline"
                className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
                asChild
              >
                <Link
                  href="/talk-to-a-human"
                  className="max-w-56 truncate text-start md:max-w-none"
                >
                  Talk To A Human
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

        <div className="mt-12 max-lg:ml-6 md:mt-20 lg:mt-24">
          <div 
            className="relative w-full group cursor-pointer"
            style={{ perspective: '1000px' }}
          >
            <Image
              src="/herotest.png"
              alt="ChatGPT Analytics Dashboard - 3D Interactive View"
              width={1200}
              height={800}
              quality={100}
              priority
              unoptimized
              className="w-full max-w-5xl h-auto transition-all duration-500 ease-out transform-gpu mx-auto"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateX(0deg) rotateY(0deg) scale(1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotateX(-2deg) rotateY(3deg) scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / centerY * -5;
                const rotateY = (x - centerX) / centerX * 5;
                
                e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
              }}
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
