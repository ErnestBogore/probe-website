import React from 'react';
import Image from 'next/image';

// Data for the testimonials
const testimonials = [
  {
    quote: 'What I love most is having everything in one place—it simplifies routing and is 10x more intuitive than Chili Piper!',
    author: 'Sarah Williams',
    title: 'CTO, ARC',
    avatar: '/placeholder-avatar-1.png',
    logo: '/placeholder-logo-arc.svg',
  },
  {
    quote: 'This app seamlessly integrates into our GTM ops, eliminating the need for a standalone tool and complex system connections.',
    author: 'John Doe',
    title: 'CEO & Founder, descript',
    avatar: '/placeholder-avatar-2.png',
    logo: '/placeholder-logo-descript.svg',
  },
];

// Data for the stat cards
const statCards = [
  {
    stat: '10x',
    description: 'GTM efficiency increase',
    title: 'How we Achieved 10x GTM Efficiency',
    href: '#',
    backgroundImage: '/placeholder-bg-1.jpg',
  },
  {
    stat: '80%',
    description: 'faster lead response time',
    title: 'How Mercury Reduced Speed-to-Lead by 80%',
    href: '#',
    backgroundImage: '/placeholder-bg-2.jpg',
  },
  {
    stat: '$7M',
    description: 'inbound pipeline generated',
    title: 'From Zero to $7M in Pipeline',
    href: '#',
    backgroundImage: '/placeholder-bg-3.jpg',
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">What people think</h2>
          <p className="mt-4 text-lg text-gray-600">
            Transform go-to-market with smarter routing, actionable intent, and accelerated scheduling.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <p className="text-gray-800 text-lg mb-6">{testimonial.quote}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image src={testimonial.avatar} alt={testimonial.author} width={40} height={40} className="rounded-full" />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
                <Image src={testimonial.logo} alt="company logo" width={80} height={24} className="opacity-70" />
              </div>
            </div>
          ))}
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statCards.map((card, index) => (
            <a href={card.href} key={index} className="group relative block rounded-xl overflow-hidden aspect-[4/3]">
              <Image src={card.backgroundImage} alt={card.title} layout="fill" objectFit="cover" className="transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-gray-900 group-hover:text-white transition-colors duration-300">
                <div>
                  <p className="text-5xl font-bold">{card.stat}</p>
                  <p className="text-lg">{card.description}</p>
                </div>
                <p className="text-xl font-semibold">{card.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
