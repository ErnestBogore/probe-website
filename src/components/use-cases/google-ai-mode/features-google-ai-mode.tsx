import Image from "next/image";
import { cn } from "@/lib/utils";

const featuresData = [
  {
    title: "Choose the competitors that actually matter",
    description:
      "Set the rivals you care about, and Analyze AI will measure how often Google AI Mode recommends each one in high-intent prompts. You get an always-current scoreboard: visibility share, sentiment, and movement — without manually checking Google AI Mode every day.",
    image: "/Competitor Overview.png",
    alt: "Competitor overview dashboard showing visibility share and sentiment tracking across Google AI Mode prompts.",
  },
  {
    title: "Diagnose prompt-level presence and gaps",
    description:
      "See visibility, sentiment, and position for every tracked buying question Google AI Mode answers. Spot where you're absent or under-represented, and see the exact prompts where you're being replaced by a competitor.",
    image: "/Prompt Level Analytics.png",
    alt: "Prompt-level analytics dashboard showing visibility and sentiment analysis for individual Google AI Mode prompts.",
  },
  {
    title: "Audit the sources Google AI Mode trusts",
    description:
      "See which of your URLs — and which external domains — Google AI Mode cites when it explains your category or recommends a vendor. Expose which pages power your competitors' credibility, and which citations you still need to earn.",
    image: "/Citation Analytics.png",
    alt: "Citation analytics dashboard showing source analysis and domain citation patterns from Google AI Mode.",
  },
  {
    title: "Attribute Google AI Mode-driven sessions to your site",
    description:
      "Quantify how many site visits come from Google AI Mode, how that's trending, and how much of your total traffic those visits now represent. This gives you a channel baseline you can report to leadership.",
    image: "/AI Referral Traffic.png",
    alt: "AI referral traffic dashboard showing session attribution and traffic trends from Google AI Mode.",
  },
  {
    title: "See which pages Google AI Mode sends traffic to",
    description:
      "Identify the specific landing pages Google AI Mode is driving users to, how many sessions each page is getting, and which pages convert. Double down on the content that's already working.",
    image: "/AI Traffic By Page.png",
    alt: "Page-level AI traffic attribution showing landing page performance and referral sources from Google AI Mode.",
  },
  {
    title: "Optimize for your Google AI Mode exposure",
    description:
      "See how your presence and traffic from Google AI Mode change over time. Spot drops early, identify where a competitor is starting to outrank you in recommendations, and decide where to intervene before that impacts pipeline.",
    image: "/Analytics By Engine.png",
    alt: "Google AI Mode-specific analytics dashboard showing performance trends and optimization opportunities.",
  },
];

export const FeaturesGoogleAIMode = () => {
  return (
    <section className="pt-12 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl text-gray-900">
            One platform to win Google AI Mode — and prove it matters
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Track visibility, outpace competitors, and tie Google AI Mode's answers to real traffic and conversions.
          </p>
        </div>

        <div className="mt-20 grid gap-16">
          {featuresData.map((feature, index) => (
            <div
              key={feature.title}
              className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 items-center"
            >
              <div
                className={cn(
                  "text-left md:col-span-2",
                  index % 2 === 1 && "md:order-last"
                )}
              >
                <h3 className="text-3xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-4 text-lg text-gray-600 max-w-[44ch]">
                  {feature.description}
                </p>
              </div>
              <div className="md:col-span-3 aspect-[16/9] relative">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={1200}
                  height={675}
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
