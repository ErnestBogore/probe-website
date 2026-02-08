"use client";

import { SchemaImage as Image } from "@/components/ui/schema-image";
import Link from "next/link";

import {
  ArrowRight,
  Search,
  Users,
  MessageSquare,
  Link as LinkIcon,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Where you show up (and where you don't)",
    description: "See the prompts, questions, and buying journeys where you're being recommended — and the ones where you're missing.",
    icon: Search,
  },
  {
    title: "Who shows up next to you",
    description: "Identify the competitors AI consistently lists alongside you for each use case, persona, or product line — including emerging players you're not even chasing yet.",
    icon: Users,
  },
  {
    title: "How you're being described",
    description: "See the actual positioning, claims, and value props AI is attaching to your brand so you know what's landing in-market.",
    icon: MessageSquare,
  },
  {
    title: "Which sources models rely on",
    description: "Get the exact URLs and citations being pulled into answers so you can see which assets are shaping those answers (yours and theirs).",
    icon: LinkIcon,
  },
];

export const HeroDiscover = () => {
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
              Discover How Buyers See Your Brand
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
          {/* Left side - Main content */}
          <div className="flex-1">
            <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl">
              See how AI is talking about your brand (and who it prefers instead)
            </h1>

            <p className="text-muted-foreground text-1xl mt-5 md:text-3xl">
              Map how AI answers position you across high-intent prompts — who you're mentioned with, who you're losing to, and which sources models trust.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
              <Button asChild>
                <a href="https://tryanalyze.ai/pricing" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white hover:bg-gray-800">
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
                src="/Discover hero.png"
                alt="AI Search Discovery Dashboard - Interactive View"
                width={1200}
                height={800}
                quality={90}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
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
