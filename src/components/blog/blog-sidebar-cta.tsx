"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Users, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export const BlogSidebarCta = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show sidebar when user scrolls more than 15% of viewport height
      // Hide it when they scroll past 85% of the page
      const showThreshold = windowHeight * 0.15;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
      
      // Show after 15% of viewport scroll, hide after 85% of page scroll
      setIsVisible(scrollPosition > showThreshold && scrollPercentage < 85);
    };

    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 w-80">
      <div className="bg-gradient-to-br from-purple-100 via-purple-200 to-indigo-200 rounded-2xl p-6 text-gray-800 shadow-xl border border-purple-200/50">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-900">See Analyze in action</h3>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <Users className="w-4 h-4 mr-2 mt-1 text-purple-600 flex-shrink-0" />
            <p className="text-sm text-gray-700">
              See how we compare against Peec, Profound, and Scrunch
            </p>
          </div>
          
          <div className="flex items-start">
            <MessageCircle className="w-4 h-4 mr-2 mt-1 text-purple-600 flex-shrink-0" />
            <p className="text-sm text-gray-700">
              Get answers to your questions but also custom recommendations
            </p>
          </div>
        </div>
        
        <Button 
          asChild
          className="w-full bg-purple-600 text-white hover:bg-purple-700 font-semibold shadow-lg transition-all duration-200 hover:shadow-xl mb-4"
          size="lg"
        >
          <a href="/talk-to-a-human">
            Talk to a human
          </a>
        </Button>
        
        {/* Human avatars with online indicators */}
        <div className="flex justify-center space-x-2">
          <div className="relative group">
            <Image
              src="/Sage-Montgomery-chatgptseotrackercom-1760085486788.jpg"
              alt="Sage Montgomery"
              width={32}
              height={32}
              className="rounded-full border-2 border-white shadow-sm object-cover w-8 h-8"
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              Online
            </div>
          </div>
          
          <div className="relative group">
            <Image
              src="/Liora-Ashford-monitorchatgptcom-1760085490781.jpg"
              alt="Liora Ashford"
              width={32}
              height={32}
              className="rounded-full border-2 border-white shadow-sm object-cover w-8 h-8"
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              Online
            </div>
          </div>
          
          <div className="relative group">
            <Image
              src="/IMG_4114.JPG"
              alt="Team member"
              width={32}
              height={32}
              className="rounded-full border-2 border-white shadow-sm object-cover w-8 h-8"
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              Online
            </div>
          </div>
          
          <div className="relative group">
            <Image
              src="/Everly-Harrington-chatgptanalyzercom-1760085482713.jpg"
              alt="Everly Harrington"
              width={32}
              height={32}
              className="rounded-full border-2 border-white shadow-sm object-cover w-8 h-8"
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              Online
            </div>
          </div>
        </div>
        
        {/* Subtle decorative elements */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-purple-300/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 bg-indigo-300/20 rounded-full blur-lg"></div>
      </div>
    </div>
  );
};