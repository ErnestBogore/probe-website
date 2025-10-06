"use client";

import { Wifi, Zap } from "lucide-react";
import Image from 'next/image';
import { Button } from "@/components/ui/button";

interface Logo {
  src: string;
  alt: string;
  className: string;
}

interface Hero115Props {
  icon?: React.ReactNode;
  pillText?: string;
  heading: string;
  description: string;
  button: {
    text: string;
    icon?: React.ReactNode;
    url: string;
  };
  trustText?: string;
  imageSrc?: string;
  imageAlt?: string;
  logos?: Logo[];
}

const Hero115 = ({
  pillText,
  heading = "Blocks built with Shadcn & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  button = {
    text: "Discover Features",
    icon: <Zap className="ml-2 size-4" />,
    url: "https://www.shadcnblocks.com",
  },
  imageSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  imageAlt = "placeholder",
  logos = [],
}: Hero115Props) => {
  return (
    <section className="overflow-hidden pt-32 pb-16">
      <style jsx>{`
        @keyframes levitate {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-levitate {
          animation: levitate 6s ease-in-out infinite;
        }
      `}</style>
      <div className="container">
        <div className="flex flex-col gap-5">
          <div className="relative flex flex-col gap-5">
            <div
              style={{
                transform: "translate(-50%, -50%)",
              }}
              className="absolute top-1/2 left-1/2 -z-10 mx-auto size-[800px] rounded-full border [mask-image:linear-gradient(to_top,transparent,transparent,white,white,white,transparent,transparent)] p-16 md:size-[1300px] md:p-32"
            >
              <div className="size-full rounded-full border p-16 md:p-32">
                <div className="size-full rounded-full border"></div>
              </div>
            </div>

            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={64}
                height={64}
                className={`absolute w-12 h-12 md:w-16 md:h-16 animate-levitate ${logo.className}`}
                style={{
                  animationDelay: `${index * 0.4}s`,
                  animationDuration: `${3 + index * 0.5}s`,
                }}
              />
            ))}

            {pillText && (
              <div className="flex justify-center">
                <div 
                  className="mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-medium"
                  style={{ backgroundColor: '#E9D5FF', color: '#5B21B6' }}
                >
                  {pillText}
                </div>
              </div>
            )}
            <h2 
              className="mx-auto max-w-5xl text-center text-3xl font-medium text-balance md:text-6xl"
              dangerouslySetInnerHTML={{ __html: heading }}
            />
            <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg">
              {description}
            </p>
            <div className="flex flex-col items-center justify-center gap-3 pt-3 pb-12">
              <Button size="lg" asChild className="bg-gray-900 text-white hover:bg-gray-800 font-bold">
                <a href={button.url}>
                  {button.text} {button.icon}
                </a>
              </Button>
            </div>
          </div>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="mx-auto h-full max-h-[524px] w-full max-w-5xl rounded-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero115 };
