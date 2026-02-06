"use client";

import Image from "next/image";
import { Check, X } from "lucide-react";

const aiEngineLogos = [
  { src: '/anthropic.png', alt: 'Anthropic Claude' },
  { src: '/copilot-color.png', alt: 'Microsoft Copilot' },
  { src: '/deepseek-color.png', alt: 'DeepSeek' },
  { src: '/gemini-color.png', alt: 'Google Gemini' },
  { src: '/grok.png', alt: 'Grok' },
  { src: '/openai.png', alt: 'OpenAI ChatGPT' }
];

const comparisonData = [
  {
    capability: "Tracks brand visibility in AI engines",
    analyze: true,
    analyzeDetails: "Yes",
    competitor: false,
    competitorDetails: "Yes/No (BI/dashboard tool)"
  },
  {
    capability: "Real traffic from AI engines (GA4-based)",
    analyze: true,
    analyzeDetails: "Yes",
    competitor: true,
    competitorDetails: "Yes, \"Can visualize GA4 if you model it yourself\""
  },
  {
    capability: "Traffic trends by engine",
    analyze: true,
    analyzeDetails: "Yes",
    competitor: true,
    competitorDetails: "Yes, Manual build only"
  },
  {
    capability: "Pages that get AI traffic",
    analyze: true,
    analyzeDetails: "Yes",
    competitor: true,
    competitorDetails: "Yes, Manual build only"
  },
  {
    capability: "Conversions from AI",
    analyze: true,
    analyzeDetails: "Yes",
    competitor: true,
    competitorDetails: "Yes, Manual build only"
  },
  {
    capability: "Actionable opportunities (prioritized to-dos)",
    analyze: true,
    analyzeDetails: "Yes",
    competitor: false,
    competitorDetails: "Yes/No"
  },
  {
    capability: "Competitive monitoring",
    analyze: true,
    analyzeDetails: "Yes",
    competitor: false,
    competitorDetails: "Yes/No"
  },
  {
    capability: "Setup effort",
    analyze: "Low",
    analyzeDetails: "Low",
    competitor: "Medium–high (data modeling/connectors)",
    competitorDetails: "Yes, Medium–high (data modeling/connectors)"
  },
  {
    capability: "Pricing",
    analyze: "$99/mo",
    analyzeDetails: "$99/mo",
    competitor: "Free (Pro $9/user/project); paid connectors often required",
    competitorDetails: "Yes, Free (Pro $9/user/project); paid connectors often required"
  }
];

export const ComparisonSectionGoogleLookerStudio = () => {
  return (
    <section className="py-16 lg:py-20" data-comparison-table>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header with AI Engine Logos */}
          <div className="text-center mb-16">
            <h2 className="text-2xl tracking-tight md:text-3xl text-gray-900 mb-8">
              <div>Compare how Analyze AI and Google Looker Studio impact</div>
              <div>visibility, traffic, and conversions across</div>
            </h2>
            
            {/* AI Engine Logos */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-12">
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
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left py-8 px-8 font-bold text-gray-900 text-xl">Capability</th>
                    <th className="text-center py-8 px-8 font-bold text-purple-600 text-xl">
                      <div className="flex items-center justify-center gap-2">
                        <Image src="/favicon.png" alt="Analyze AI" width={24} height={24} className="rounded" />
                        <span>Analyze AI</span>
                      </div>
                    </th>
                    <th className="text-center py-8 px-8 font-bold text-gray-900 text-xl">
                      <div className="flex items-center justify-center gap-2">
                        <Image src="/Looker Studio logo.png" alt="Google Looker Studio" width={24} height={24} />
                        <span>Google Looker Studio</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-25' : 'bg-white'}`}>
                      <td className="py-6 px-8 font-medium text-gray-900 text-lg">{row.capability}</td>
                      <td className="py-6 px-8 text-center">
                        {typeof row.analyze === 'boolean' ? (
                          row.analyze ? (
                            <div className="flex items-center justify-center">
                              <Check className="w-6 h-6 text-green-600" />
                            </div>
                          ) : (
                            <div className="flex items-center justify-center">
                              <X className="w-6 h-6 text-red-600" />
                            </div>
                          )
                        ) : (
                          <span className="text-gray-700 text-base">{row.analyzeDetails}</span>
                        )}
                      </td>
                      <td className="py-6 px-8 text-center">
                        {typeof row.competitor === 'boolean' ? (
                          row.competitor ? (
                            <div className="flex items-center justify-center">
                              <Check className="w-6 h-6 text-green-600" />
                            </div>
                          ) : (
                            <div className="flex items-center justify-center">
                              <X className="w-6 h-6 text-red-600" />
                            </div>
                          )
                        ) : (
                          <span className="text-gray-700 text-base">{row.competitorDetails}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
