"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, BarChart3, Search, FileText, Users, BookOpen, Monitor } from "lucide-react";
import Image from "next/image";

const aiEngineLogos = [
  { src: '/anthropic.png', alt: 'Anthropic Claude' },
  { src: '/copilot-color.png', alt: 'Microsoft Copilot' },
  { src: '/deepseek-color.png', alt: 'DeepSeek' },
  { src: '/gemini-color.png', alt: 'Google Gemini' },
  { src: '/grok.png', alt: 'Grok' },
  { src: '/openai.png', alt: 'OpenAI ChatGPT' }
];

const features = [
  "3 answer engines (Claude, Perplexity, ChatGPT)",
  "25 tracked prompts (daily)/2250 answers",
  "50 ad hoc searches/month",
  "Unlimited competitor tracking",
  "AI Traffic Analytics (GA4 integration)",
  "Onboarding workshop (15 minutes)",
  "Priority support",
  "Unlimited seats"
];

export const PricingPlans = () => {
  return (
    <section id="plans" className="pt-24 pb-16 lg:pt-28 lg:pb-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header with AI Engine Logos */}
          <div className="text-center mb-16">
            <h2 className="text-2xl tracking-tight md:text-3xl text-gray-900 mb-8">
              Grow visibility, traffic, and conversions across
            </h2>
            
            {/* AI Engine Logos */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-8">
              {aiEngineLogos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={40}
                    height={40}
                    className="h-8 w-auto md:h-10 opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>

            {/* Subtext */}
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Track your brand visibility across major AI platforms and see total sessions from AI search in the last 30 days, how that is trending over time, and how much of your overall traffic now comes from AI sources.
            </p>
          </div>

          {/* Single Pricing Card - Horizontal Layout */}
          <div className="flex justify-center">
            <Card className="w-full max-w-6xl border-2 border-purple-200 shadow-2xl bg-white rounded-3xl overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Left Side - Pricing Info */}
                <div className="lg:w-1/3 p-8 flex flex-col justify-center">
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center justify-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6 whitespace-nowrap">
                      The Most Comprehensive AI Visibility Tool
                    </div>
                    
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-gray-900">$99</span>
                      <span className="text-gray-500 ml-2 line-through text-xl font-medium">$149</span>
                      <span className="text-gray-700 block text-base mt-2 font-medium">/monthly</span>
                    </div>

                    <Button asChild className="w-full mb-4 bg-gray-900 text-white hover:bg-gray-800 py-3 text-lg font-semibold">
                      <a href="https://app.tryanalyze.ai" target="_blank" rel="noopener noreferrer">
                        Get Started →
                      </a>
                    </Button>
                    
                    <div className="text-center">
                      <span className="text-sm text-gray-600 font-medium">
                        Cancel anytime. No questions asked!
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Features */}
                <div className="lg:w-2/3 p-8 bg-gray-50">
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-6 text-lg">What's included:</h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-purple-600" />
                        </div>
                        <span className="text-gray-800 text-base font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Feature Details Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How Each Feature Works</h2>
              <p className="text-gray-600">Understanding the power behind each capability</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {/* AI Traffic Analytics */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">AI Traffic Analytics</h3>
                </div>
                <p className="text-gray-600 mb-4">See exactly which AI engines drive real traffic and conversions to your site</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Total AI referral traffic tracking</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Traffic breakdown by AI model (ChatGPT, Claude, etc.)</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Month-over-month fluctuation analysis</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Landing page traffic attribution & conversion tracking</span>
                  </div>
                </div>
              </div>

              {/* Ad Hoc Searches */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Search className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">50 Ad Hoc Searches</h3>
                </div>
                <p className="text-gray-600 mb-4">Instant one-time searches to test any prompt and see competitive positioning</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Search any prompt on-demand (separate from daily tracking)</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Target specific locations for regional results</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">See who appears alongside you in AI responses</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Get instant performance scores vs competitors</span>
                  </div>
                </div>
              </div>

              {/* Tracked Prompts */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">25 Tracked Prompts Daily</h3>
                </div>
                <p className="text-gray-600 mb-4">Monitor your most important prompts automatically every day</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Daily monitoring of key prompts</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">2,250 total AI responses per month</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Historical trend tracking & position change alerts</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Automated competitive monitoring & benchmarking</span>
                  </div>
                </div>
              </div>

              {/* Competitor Tracking */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Unlimited Competitor Tracking</h3>
                </div>
                <p className="text-gray-600 mb-4">Keep tabs on all your competitors without limits</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Track any number of competitors</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Competitive positioning analysis & share of voice metrics</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Competitor mention frequency & head-to-head comparisons</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Market share insights & emerging competitor detection</span>
                  </div>
                </div>
              </div>

              {/* Onboarding Workshop */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Onboarding Workshop (15 minutes)</h3>
                </div>
                <p className="text-gray-600 mb-4">Personal setup session to get you started quickly and successfully</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">We'll explain any confusing parts of the platform</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Help with GA4 setup if needed</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Help set up GA4 conversion tracking</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Best practices for prompt selection and monitoring</span>
                  </div>
                </div>
              </div>

              {/* 3 Answer Engines */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Monitor className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">3 Answer Engines</h3>
                </div>
                <p className="text-gray-600 mb-4">Core AI platforms included in your plan (additional engines available as add-ons)</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Claude</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Perplexity</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">ChatGPT</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Add-ons: DeepSeek, Grok, Gemini, AI Mode available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
