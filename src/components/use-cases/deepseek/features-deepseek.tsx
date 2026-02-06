import { cn } from "@/lib/utils";

const featuresData = [
  {
    title: "Choose the competitors that actually matter",
    description:
      "Set the rivals you care about, and Analyze AI will measure how often Deepseek recommends each one in high-intent prompts. You get an always-current scoreboard: visibility share, sentiment, and movement — without manually checking Deepseek every day.",
    image: "/Competitor Overview.png",
    alt: "Competitor overview dashboard showing visibility share and sentiment tracking across Deepseek prompts.",
  },
  {
    title: "Diagnose prompt-level presence and gaps",
    description:
      "See visibility, sentiment, and position for every tracked buying question Deepseek answers. Spot where you're absent or under-represented, and see the exact prompts where you're being replaced by a competitor.",
    image: "/Prompt Level Analytics.png",
    alt: "Prompt-level analytics dashboard showing visibility and sentiment analysis for individual Deepseek prompts.",
  },
  {
    title: "Audit the sources Deepseek trusts",
    description:
      "See which of your URLs — and which external domains — Deepseek cites when it explains your category or recommends a vendor. Expose which pages power your competitors' credibility, and which citations you still need to earn.",
    image: "/Citation Analytics.png",
    alt: "Citation analytics dashboard showing source analysis and domain citation patterns from Deepseek.",
  },
  {
    title: "Attribute Deepseek-driven sessions to your site",
    description:
      "Quantify how many site visits come from Deepseek, how that's trending, and how much of your total traffic those visits now represent. This gives you a channel baseline you can report to leadership.",
    image: "/AI Referral Traffic.png",
    alt: "AI referral traffic dashboard showing session attribution and traffic trends from Deepseek.",
  },
  {
    title: "See which pages Deepseek sends traffic to",
    description:
      "Identify the specific landing pages Deepseek is driving users to, how many sessions each page is getting, and which pages convert. Double down on the content that's already working.",
    image: "/AI Traffic By Page.png",
    alt: "Page-level AI traffic attribution showing landing page performance and referral sources from Deepseek.",
  },
  {
    title: "Optimize for your Deepseek exposure",
    description:
      "See how your presence and traffic from Deepseek change over time. Spot drops early, identify where a competitor is starting to outrank you in recommendations, and decide where to intervene before that impacts pipeline.",
    image: "/Analytics By Engine.png",
    alt: "Deepseek-specific analytics dashboard showing performance trends and optimization opportunities.",
  },
];

export const FeaturesDeepseek = () => {
  return (
    <section className="pt-12 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl text-gray-900">
            One platform to win Deepseek — and prove it matters
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Track visibility, outpace competitors, and tie Deepseek's answers to real traffic and conversions.
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
              <div className="md:col-span-3 aspect-[16/9]">
                <img
                  src={feature.image}
                  alt={feature.alt}
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
