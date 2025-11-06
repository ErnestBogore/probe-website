"use client";

import React, { useState } from 'react';

export const AffiliateCalculator = () => {
  const [referrals, setReferrals] = useState(10);
  const commissionPerReferral = 30;
  
  const monthlyEarnings = referrals * commissionPerReferral;
  const yearlyEarnings = monthlyEarnings * 12;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReferrals(parseInt(e.target.value));
  };

  return (
    <section className="py-16 lg:py-20 bg-gray-100" data-calculator-section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl text-gray-900 mb-4">
            How much money will you make promoting Analyze?
          </h2>
          <p className="text-lg text-gray-600">
            Use the slider below to see your potential earnings based on the number of referrals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200">
            {/* Slider Section */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Number of referrals</h3>
                <div className="text-3xl font-bold text-gray-900">{referrals}</div>
              </div>
              
              {/* Custom Slider */}
              <div className="relative">
                <input
                  type="range"
                  min="1"
                  max="500"
                  value={referrals}
                  onChange={handleSliderChange}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${(referrals - 1) / 499 * 100}%, #e5e7eb ${(referrals - 1) / 499 * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>1</span>
                  <span>500</span>
                </div>
              </div>
            </div>

            {/* Earnings Display */}
            <div className="relative">
              {/* "Your Potential Earnings" Label with Arrow */}
              <div className="absolute -top-8 left-8">
                <div className="flex items-center">
                  <span className="text-purple-600 text-3xl transform -rotate-2" style={{ fontFamily: 'Brush Script MT, cursive' }}>
                    Your Potential Earnings
                  </span>
                  <svg 
                    className="w-8 h-8 text-purple-600 ml-2 transform rotate-12" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </div>
              </div>

              {/* Earnings Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                {/* Monthly Earnings */}
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    ${monthlyEarnings.toLocaleString()}
                  </div>
                  <div className="text-lg text-gray-600">monthly</div>
                </div>

                {/* Yearly Earnings */}
                <div className="text-center p-6 bg-purple-50 rounded-2xl border-2 border-purple-200">
                  <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                    ${yearlyEarnings.toLocaleString()}
                  </div>
                  <div className="text-lg text-purple-600">yearly</div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                  Based on $30 commission per referral • Recurring monthly payments
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Your earnings continue as long as customers remain subscribed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Slider Styles */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #8b5cf6;
          cursor: pointer;
          border: 3px solid #ffffff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #8b5cf6;
          cursor: pointer;
          border: 3px solid #ffffff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

      `}</style>
    </section>
  );
};
