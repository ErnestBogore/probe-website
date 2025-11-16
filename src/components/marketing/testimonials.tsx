import React from 'react';
import Image from 'next/image';

// Data for the testimonials
const testimonials = [
  {
    quote: 'Analyze has been a game-changer for our content strategy. We now know exactly how our articles are being interpreted by AI, allowing us to optimize for better visibility.',
    author: 'Ibrahim Litinine',
    title: 'Managing editor at Get French Classes',
    avatar: '/ibrahim-litinine.jpeg',
    logo: '/get-french-class.png',
    bgColor: '#e0f2fe', // Light blue
  },
  {
    quote: 'The majority of our traffic comes from Bing. I was relieved to see a fair share of our total traffic comes from AI search as well. Now we can diversify our traffic source thanks to Analyze.',
    author: 'Justin Ahinon',
    title: 'CEO at What Is That Movie',
    avatar: '/justin-ahinon.jpg',
    logo: '/what-is-that-movie.png',
    bgColor: '#f0fdf4', // Light green
  },
];

// Data for the Kylian case study
const kylianCaseStudy = {
  primaryStat: '936',
  primaryDescription: 'AI visits generated',
  secondaryStat: '300%',
  secondaryDescription: 'growth in conversions',
  title: 'How Kylian AI Used Analyze to Drive 936 Visits From AI SEO',
  href: '/case-study/kylian-ai',
};

export const Testimonials = () => {
  return (
    <section className="pt-24 pb-12 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl text-gray-900">Hear From Brands Winning at AI Search</h2>
          <p className="mt-4 text-lg text-gray-600">
            Leading brands use Analyze to understand their AI search presence and stay ahead of the competition.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <p className="text-gray-800 text-lg mb-6">{testimonial.quote}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
                <div className="w-20 h-6 relative">
                  <Image 
                    src={testimonial.logo} 
                    alt={`${testimonial.author}'s company logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Kylian Case Study - Enhanced Design */}
        <div className="flex justify-center">
          <a 
            href={kylianCaseStudy.href} 
            className="group relative block rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 p-8 transition-all duration-500 hover:shadow-2xl hover:scale-105 max-w-2xl w-full transform hover:-translate-y-2"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Stats Row */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-center">
                  <p className="text-5xl font-bold text-white mb-2">{kylianCaseStudy.primaryStat}</p>
                  <p className="text-purple-200 text-lg font-medium">{kylianCaseStudy.primaryDescription}</p>
                </div>
                <div className="w-px h-16 bg-purple-300/30 mx-8"></div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-white mb-2">{kylianCaseStudy.secondaryStat}</p>
                  <p className="text-purple-200 text-lg font-medium">{kylianCaseStudy.secondaryDescription}</p>
                </div>
              </div>
              
              {/* Title */}
              <div className="border-t border-purple-300/20 pt-6">
                <p className="text-xl font-semibold text-white leading-tight group-hover:text-purple-100 transition-colors">
                  {kylianCaseStudy.title}
                </p>
                <div className="flex items-center mt-4 text-purple-200 group-hover:text-white transition-colors">
                  <span className="text-sm font-medium">Read case study</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
