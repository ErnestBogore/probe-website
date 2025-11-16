"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const aiEngineLogos = [
  { src: '/anthropic.png', alt: 'Anthropic Claude' },
  { src: '/copilot-color.png', alt: 'Microsoft Copilot' },
  { src: '/deepseek-color.png', alt: 'DeepSeek' },
  { src: '/gemini-color.png', alt: 'Google Gemini' },
  { src: '/grok.png', alt: 'Grok' },
  { src: '/openai.png', alt: 'OpenAI ChatGPT' }
];

export const TalkToHumanHero = () => {
  const scrollToCalendar = () => {
    const calendarElement = document.querySelector('.tidycal-embed');
    if (calendarElement) {
      calendarElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 lg:pt-28 lg:pb-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-2xl tracking-tight md:text-3xl text-gray-900 mb-8">
            Grow visibility, traffic, and conversions across
          </h1>
          
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

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button 
              onClick={scrollToCalendar}
              size="lg"
              className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 text-lg"
            >
              Choose My Availability
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
