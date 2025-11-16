"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Search,
  BarChart3,
  Users2,
  FileBarChart,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "AI traffic overview",
    description: "See total sessions from AI search in the last 30 days, how that is trending over time, and how much of your overall traffic now comes from AI sources.",
    icon: Search,
  },
  {
    title: "Which AI engines send you traffic",
    description: "Identify which LLMs drive the most qualified visits and which ones are slowing down.",
    icon: BarChart3,
  },
  {
    title: "Pages AI search sends traffic to",
    description: "Get a ranked list of URLs AI search actually sends users to, with sessions and key events.",
    icon: Users2,
  },
  {
    title: "Traffic trends by AI source",
    description: "Break down performance by referrer over time so you can see shifts in volume.",
    icon: FileBarChart,
  },
];

export const Hero115 = () => {
  return (
    <section className="pt-24 pb-6 lg:pt-28 lg:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Pill Text */}
          <div className="flex justify-center mb-8">
            <div 
              className="inline-block rounded-full px-4 py-1.5 text-sm font-medium"
              style={{ backgroundColor: '#E9D5FF', color: '#5B21B6' }}
            >
              Monitor Traffic & Conversions From AI
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
          {/* Left side - Main content */}
          <div className="flex-1">
            <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl">
              Finally prove how AI search drives real traffic and conversions
            </h1>

            <p className="text-muted-foreground text-1xl mt-5 md:text-3xl">
              Connect GA4 to see how many sessions come from AI search, which pages those users land on, and which sources actually convert.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
              <Button asChild>
                <a href="https://app.tryanalyze.ai" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white hover:bg-gray-800">
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

        <div className="mt-12 max-lg:ml-6 md:mt-20 lg:mt-24">
            <div 
              className="relative w-full group cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              <Image
                src="/ai traffic hero.png"
                alt="AI Traffic Analytics Dashboard - 3D Interactive View"
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
