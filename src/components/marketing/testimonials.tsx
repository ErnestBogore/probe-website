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

// Data for the stat cards
const statCards = [
  {
    stat: '10x',
    description: 'GTM efficiency increase',
    title: 'How we Achieved 10x GTM Efficiency',
    href: '#',
    backgroundColor: 'bg-blue-50',
  },
  {
    stat: '80%',
    description: 'faster lead response time',
    title: 'How Mercury Reduced Speed-to-Lead by 80%',
    href: '#',
    backgroundColor: 'bg-green-50',
  },
  {
    stat: '$7M',
    description: 'inbound pipeline generated',
    title: 'From Zero to $7M in Pipeline',
    href: '#',
    backgroundColor: 'bg-purple-50',
  },
];

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

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statCards.map((card, index) => (
            <a 
              href={card.href} 
              key={index} 
              className={`group relative block rounded-xl overflow-hidden aspect-[4/3] ${card.backgroundColor} p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg`}
            >
              <div>
                <p className="text-5xl font-bold text-gray-900">{card.stat}</p>
                <p className="text-lg text-gray-700">{card.description}</p>
              </div>
              <p className="text-xl font-semibold text-gray-900">{card.title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
