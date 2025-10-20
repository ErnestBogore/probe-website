import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const Cta = () => {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ backgroundColor: '#8858ed' }} className="rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Text Content */}
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl text-white">
                Stop Guessing. Start Winning in AI Search.
              </h2>
              <p className="mt-6 text-lg text-gray-200">
                Uncover how your brand is seen by AI. Get a complete picture of your search visibility, track competitors, and measure the impact on your traffic.
              </p>
              <div className="mt-8">
                <Button size="lg" className="bg-white text-[#8858ed] hover:bg-gray-200 font-semibold">Show Me My AI Rankings</Button>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative w-full h-64 md:h-full p-8">
              <Image 
                src="/Artboard (1).png" 
                alt="A mockup of the Analyze dashboard."
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
