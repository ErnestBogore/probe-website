'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getAllBusinessNameGenerators, BusinessNameGeneratorConfig } from '@/lib/ai-tools/business-name-generators-config';
import { ArrowRight, Building2, Sparkles, Briefcase, Smartphone, Baby, Heart, ShoppingBag, Coffee, Cake, Flame, Candy, Shirt, Cookie, Palette, Scissors, IceCream, Megaphone, Cpu, PartyPopper, Store, Dumbbell, Flower2, UtensilsCrossed, Truck, Laugh, Sofa, Gamepad2, PenTool, Gem, Stethoscope, Home, Monitor, Music2, Droplets, Camera, Printer, Key, Footprints, Leaf, Sparkle, Bath, Trophy, Plane } from 'lucide-react';
import { DashedLine } from '@/components/dashed-line';

const generatorIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'aesthetic': Sparkles,
  'agency': Briefcase,
  'app': Smartphone,
  'babysitting': Baby,
  'beauty': Heart,
  'boutique': ShoppingBag,
  'cafe': Coffee,
  'cake': Cake,
  'candle': Flame,
  'candy': Candy,
  'clothing-store': Shirt,
  'cookie': Cookie,
  'cosmetic': Palette,
  'craft-store': Scissors,
  'crochet': Scissors,
  'dessert': IceCream,
  'digital-marketing': Megaphone,
  'electronics': Cpu,
  'event': PartyPopper,
  'fashion-store': Store,
  'fitness': Dumbbell,
  'flower-shop': Flower2,
  'food': UtensilsCrossed,
  'food-truck': Truck,
  'funny': Laugh,
  'furniture-store': Sofa,
  'game': Gamepad2,
  'graphic-design': PenTool,
  'hair': Scissors,
  'health': Stethoscope,
  'ice-cream': IceCream,
  'interior-design': Home,
  'it': Monitor,
  'jewelry-store': Gem,
  'lip-gloss': Sparkle,
  'marketing': Megaphone,
  'music': Music2,
  'perfume': Droplets,
  'photography': Camera,
  'print-shop': Printer,
  'real-estate': Key,
  'shoes': Footprints,
  'skin-care': Leaf,
  'slime': Sparkle,
  'soap': Bath,
  'sportswear': Trophy,
  't-shirt': Shirt,
  'tea': Coffee,
  'tech': Cpu,
  'travel': Plane,
};

interface RelatedBusinessNameGeneratorsProps {
  currentToolSlug: string;
}

function RelatedToolsContent({ tools }: { tools: BusinessNameGeneratorConfig[] }) {
  return (
    <section className="py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center mb-10">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
            MORE NAME GENERATORS
          </span>
        </div>

        {/* Centered heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
            Other business name generators you may find helpful
          </h2>
          <Link 
            href="/free-tools" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
          >
            All AI tools
            <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>

        {/* Two column grid for tools with cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {tools.map((tool) => {
            const Icon = generatorIcons[tool.slug] || Building2;
            return (
              <Link
                key={tool.slug}
                href={`/free-tools/business-name-generator/${tool.slug}`}
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
  );
}

export function RelatedBusinessNameGenerators({ currentToolSlug }: RelatedBusinessNameGeneratorsProps) {
  const [relatedTools, setRelatedTools] = useState<BusinessNameGeneratorConfig[]>(() => {
    // Initialize with deterministic order for SSR
    const allTools = getAllBusinessNameGenerators();
    return allTools.filter(tool => tool.slug !== currentToolSlug).slice(0, 12);
  });

  useEffect(() => {
    // Shuffle on client side only
    const allTools = getAllBusinessNameGenerators();
    const otherTools = allTools.filter(tool => tool.slug !== currentToolSlug);
    const shuffled = [...otherTools].sort(() => Math.random() - 0.5);
    setRelatedTools(shuffled.slice(0, 12));
  }, [currentToolSlug]);

  return <RelatedToolsContent tools={relatedTools} />;
}
