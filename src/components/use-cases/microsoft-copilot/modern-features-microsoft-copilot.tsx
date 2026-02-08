"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { DashedLine } from "../../dashed-line";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const items = [
  {
    number: "1",
    title: "Discover",
    description: "See where you appear (and where you're missing) in Microsoft Copilot's answers, which competitors get pulled in alongside you, and which sources Microsoft Copilot is relying on.",
    image: "/Discover 1x.png",
    href: "/features/discover",
  },
  {
    number: "2", 
    title: "Monitor & Measure",
    description: "Track visibility, share of recommendations, traffic from Microsoft Copilot, landing pages that Microsoft Copilot is sending users to, and conversion impact over time.",
    image: "/Measure 1x.png",
    href: "/features/monitor",
  },
  {
    number: "3",
    title: "Improve", 
    description: "Get the exact prompts you're losing in Microsoft Copilot, why you're losing them, and what content, proof points, or messaging you need to close that gap.",
    image: "/Improve 1x.png",
    href: "/features/improve",
  },
  {
    number: "4",
    title: "Govern",
    description: "Catch inaccurate claims, risky language, or negative positioning coming from Microsoft Copilot before it turns into a sales objection, PR issue, or pipeline problem.",
    image: "/Govern 1x.png",
    href: "/features/govern",
  },
];

export const ModernFeaturesMicrosoftCopilot = () => {
  return (
    <section id="feature-modern-teams" className="pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
            AI VISIBILITY YOU CAN ATTRIBUTE
          </span>
        </div>

        {/* Content */}
        <div className="text-center max-w-3xl mx-auto mt-10 lg:mt-24">
          <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl text-gray-900">
            How Analyze AI makes Microsoft Copilot actionable
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Analyze AI maps how Microsoft Copilot talks about you, shows when it prefers a competitor, and ties that to traffic and conversions — so you know where to defend, where to improve, and where to invest.
          </p>
        </div>

        {/* Milestone Cards with Dotted Road */}
        <div className="mx-auto max-w-6xl">
          <div className="mt-8 md:mt-12 lg:mt-20">
            {/* Desktop: Milestone cards - 2 per row */}
            <div className="hidden md:block">
              {/* Milestone cards */}
              <div className="grid grid-cols-2 gap-12 mb-8">
                {items.slice(0, 2).map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <Link href={item.href} className="w-full">
                      <Card className="group w-full rounded-3xl border border-gray-200/60 shadow-md hover:shadow-xl hover:-translate-y-1 hover:ring-1 hover:ring-pink-200/60 transition-transform duration-300 cursor-pointer">
                        <CardContent className="p-8">
                        <div 
                          className="relative h-72 md:h-80 lg:h-96 xl:h-[26rem] mb-6 overflow-visible rounded-3xl cursor-pointer bg-white bg-gradient-to-b from-pink-50/70 via-white/70 to-transparent ring-1 ring-pink-100/50 p-6 flex items-center justify-center"
                          style={{ perspective: '1000px' }}
                        >
                          <Image
                            src={item.image}
                            alt={`${item.title} interface`}
                            width={504}
                            height={336}
                            quality={85}
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="max-w-full max-h-full object-contain transition-all duration-500 ease-out transform-gpu drop-shadow-2xl z-10 relative"
                            style={{
                              transformStyle: 'preserve-3d',
                              transform: 'rotateX(0deg) rotateY(0deg) scale(1)',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'rotateX(-2deg) rotateY(3deg) scale(1.05)';
                              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
                              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                            }}
                            onMouseMove={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              const x = e.clientX - rect.left;
                              const y = e.clientY - rect.top;
                              const centerX = rect.width / 2;
                              const centerY = rect.height / 2;
                              const rotateX = (y - centerY) / centerY * -5;
                              const rotateY = (x - centerX) / centerX * 5;
                              
                              e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                            }}
                          />
                          <span className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/95 ring-2 ring-pink-200 text-sm font-semibold text-gray-700 shadow-lg z-20">{item.number}</span>
                          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
                        </div>
                        <div className="h-px bg-gradient-to-r from-pink-100/70 via-pink-50/40 to-transparent rounded-full -mx-2 mb-4" />
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-bold mb-3 text-gray-900">
                            {item.title}
                          </h3>
                          <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                        <p className="text-base text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                    </Link>
                  </div>
                ))}
              </div>
              
              {/* Second row */}
              <div className="grid grid-cols-2 gap-12">
                {items.slice(2, 4).map((item, i) => (
                  <div key={i + 2} className="flex flex-col items-center">
                    <Link href={item.href} className="w-full">
                      <Card className="group w-full rounded-3xl border border-gray-200/60 shadow-md hover:shadow-xl hover:-translate-y-1 hover:ring-1 hover:ring-pink-200/60 transition-transform duration-300 cursor-pointer">
                      <CardContent className="p-8">
                        <div 
                          className="relative h-72 md:h-80 lg:h-96 xl:h-[26rem] mb-6 overflow-visible rounded-3xl cursor-pointer bg-white bg-gradient-to-b from-pink-50/70 via-white/70 to-transparent ring-1 ring-pink-100/50 p-6 flex items-center justify-center"
                          style={{ perspective: '1000px' }}
                        >
                          <Image
                            src={item.image}
                            alt={`${item.title} interface`}
                            width={504}
                            height={336}
                            quality={85}
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="max-w-full max-h-full object-contain transition-all duration-500 ease-out transform-gpu drop-shadow-2xl z-10 relative"
                            style={{
                              transformStyle: 'preserve-3d',
                              transform: 'rotateX(0deg) rotateY(0deg) scale(1)',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'rotateX(-2deg) rotateY(3deg) scale(1.05)';
                              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
                              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                            }}
                            onMouseMove={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              const x = e.clientX - rect.left;
                              const y = e.clientY - rect.top;
                              const centerX = rect.width / 2;
                              const centerY = rect.height / 2;
                              const rotateX = (y - centerY) / centerY * -5;
                              const rotateY = (x - centerX) / centerX * 5;
                              
                              e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                            }}
                          />
                          <span className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/95 ring-2 ring-pink-200 text-sm font-semibold text-gray-700 shadow-lg z-20">{item.number}</span>
                          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
                        </div>
                        <div className="h-px bg-gradient-to-r from-pink-100/70 via-pink-50/40 to-transparent rounded-full -mx-2 mb-4" />
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-bold mb-3 text-gray-900">
                            {item.title}
                          </h3>
                          <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                        <p className="text-base text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: Vertical layout without connecting lines */}
            <div className="md:hidden space-y-8">
              {items.map((item, i) => (
                <div key={i}>
                  <div className="flex items-start gap-4">
                    <Link href={item.href} className="flex-1">
                      <Card className="group flex-1 rounded-3xl border border-gray-200/60 shadow-md hover:shadow-lg transition-transform duration-300 cursor-pointer">
                        <CardContent className="p-6">
                        <div 
                          className="relative h-56 mb-4 overflow-visible rounded-3xl cursor-pointer bg-white bg-gradient-to-b from-pink-50/70 via-white/70 to-transparent ring-1 ring-pink-100/50 p-4 flex items-center justify-center"
                          style={{ perspective: '1000px' }}
                        >
                          <Image
                            src={item.image}
                            alt={`${item.title} interface`}
                            width={504}
                            height={336}
                            quality={85}
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="max-w-full max-h-full object-contain transition-all duration-500 ease-out transform-gpu drop-shadow-2xl z-10 relative"
                            style={{
                              transformStyle: 'preserve-3d',
                              transform: 'rotateX(0deg) rotateY(0deg) scale(1)',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'rotateX(-2deg) rotateY(3deg) scale(1.05)';
                              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
                              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                            }}
                            onMouseMove={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              const x = e.clientX - rect.left;
                              const y = e.clientY - rect.top;
                              const centerX = rect.width / 2;
                              const centerY = rect.height / 2;
                              const rotateX = (y - centerY) / centerY * -5;
                              const rotateY = (x - centerX) / centerX * 5;
                              
                              e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                            }}
                          />
                          <span className="absolute top-2 right-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/95 ring-2 ring-pink-200 text-xs font-semibold text-gray-700 shadow-lg z-20">{item.number}</span>
                          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
                        </div>
                        <div className="h-px bg-gradient-to-r from-pink-100/70 via-pink-50/40 to-transparent rounded-full -mx-2 mb-3" />
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold mb-3 text-gray-900">
                            {item.title}
                          </h3>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                        <p className="text-base text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
