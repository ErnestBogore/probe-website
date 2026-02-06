"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { useEffect, useState } from "react";

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

export const PromotionalOverlay = () => {
  // DEACTIVATED - return null to hide overlay without deleting code
  return null;
  
  const [isVisible, setIsVisible] = useState(true);
  const [isClosed, setIsClosed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Check if overlay was closed in this session
    const wasClosedInSession = sessionStorage.getItem('promotional-overlay-closed');
    if (wasClosedInSession === 'true') {
      setIsClosed(true);
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (isClosed) return; // Don't show if manually closed
      
      // Hide when scrolling down, show when at top or scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
        // Scrolling up or near top
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isClosed]);

  const handleClose = () => {
    setIsClosed(true);
    setIsVisible(false);
    // Store in sessionStorage that overlay was closed
    sessionStorage.setItem('promotional-overlay-closed', 'true');
  };

  if (isClosed || !isVisible) return null;

  return (
    <div className="fixed top-20 right-8 z-50 w-full max-w-5xl px-4 transition-all duration-300 ease-in-out">
      <Card className="border-2 border-purple-200 shadow-2xl bg-gradient-to-br from-purple-100 via-purple-200 to-indigo-200 rounded-3xl overflow-hidden">
        <div className="relative">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>

          {/* Horizontal Layout - Same as Pricing Card */}
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Pricing Info */}
            <div className="lg:w-1/3 p-8 flex flex-col justify-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-xs font-medium mb-6 whitespace-nowrap">
                  The Most Comprehensive AI Visibility Tool
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  See Analyze AI In Action
                </h3>

                <Button asChild className="w-full mb-4 bg-gray-900 text-white hover:bg-gray-800 py-3 px-6 text-lg font-semibold whitespace-nowrap">
                  <a href="https://tryanalyze.ai/pricing" target="_blank" rel="noopener noreferrer">
                    Show Me My AI Rankings →
                  </a>
                </Button>
                
                <div className="text-center lg:text-left">
                  <span className="text-sm text-gray-600 font-medium">
                    Cancel anytime. No questions asked!
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Features */}
            <div className="lg:w-2/3 p-8 bg-white/50 backdrop-blur-sm">
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
        </div>
      </Card>
    </div>
  );
};
