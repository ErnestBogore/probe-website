import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { KylianChart } from './kylian-chart';
import { DashedLine } from '../dashed-line';

export const Testimonials = () => {
  return (
    <section className="pt-24 pb-12 bg-gray-100">
      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center mb-10">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
            REAL RESULTS
          </span>
        </div>

        {/* Kylian Case Study */}
        <div className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8 lg:p-12">
            {/* Header: Logo + CTA */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-32 h-10 relative">
                <Image 
                  src="/Logo@2x.png" 
                  alt="Kylian logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <Link 
                href="https://www.tryanalyze.ai/case-study/kylian-ai"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                Read Case Study
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Quote and Case Study Section */}
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Left - Quote */}
              <div className="lg:w-[30%] lg:border-r lg:border-gray-200 lg:pr-10">
                <blockquote className="text-lg text-gray-800 leading-relaxed mb-6">
                  "We're now observing a <span className="font-semibold text-gray-900">5% conversion rate</span> from AI search traffic and we can attribute it down to the source page and medium. Our goal is to double down on Analyze AI's recommendations to reduce our over-reliance on Google."
                </blockquote>
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">Gilbert Igor</p>
                  <p className="text-sm text-gray-500">Marketing Coordinator, Kylian</p>
                </div>
              </div>

              {/* Right - Case Study */}
              <div className="lg:flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  How Kylian AI used Analyze AI to drive 1k+/m visits from AI SEO
                </h3>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    The Analyze AI dashboard showed exactly which pages were converting. <span className="font-medium text-gray-800">"Best Online English Courses"</span> drove 24 sessions and 2 conversions—a conversion rate of <span className="font-medium text-gray-800">8.3%</span>, far above the typical blog benchmark of 1–2%. "300 Most Common English Words" brought 17 sessions but no conversions, confirming its role as more informational. "Websites to Learn English" recorded 13 sessions and 1 conversion, a <span className="font-medium text-gray-800">7.7% rate</span>—again several times higher than standard content benchmarks.
                  </p>
                  <p>
                    By August, the compounding effect was undeniable. AI-sourced sessions had scaled from 200 in May to <span className="font-medium text-gray-800">697 in August</span> (+15.4% month-over-month) and <span className="font-medium text-gray-800">1,000+ in November</span> (30% increase from October). AI referrals now make up 3% of all site traffic. And the growth was resilient—spread across ChatGPT, Copilot, Claude, Gemini, and more—rather than concentrated in a single platform.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Chart - Inside the card */}
          <div className="border-t border-gray-200 p-8 lg:p-12">
            <KylianChart />
          </div>
        </div>

        {/* Big Quote Section - Bold statement style */}
        <div className="py-16">
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
            "Google has been quite unreliable since the creation of What Is That Movie. We've been using Analyze AI to diversify our traffic sources and have been using their recommendations to boost our AI SEO traffic by 35% month-over-month."
          </blockquote>
          <div>
            <p className="text-base font-semibold text-gray-900">Justin Ahinon</p>
            <p className="text-sm text-gray-700">Owner, What Is That Movie</p>
          </div>
        </div>
      </div>
    </section>
  );
};
