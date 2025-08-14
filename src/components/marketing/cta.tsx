import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const Cta = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Text Content */}
            <div className="p-8 md:p-12 lg:p-16">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Ready to get started?</p>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Start your free trial today.
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                Start with a 14-day free trial. No credit card required. No setup fees. Cancel anytime.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Button size="lg">Get Started</Button>
                <Button size="lg" variant="outline">Learn More</Button>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative w-full h-64 md:h-full">
              <Image 
                src="/placeholder-cta-image.jpg" 
                alt="Abstract background image for call to action" 
                layout="fill" 
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
