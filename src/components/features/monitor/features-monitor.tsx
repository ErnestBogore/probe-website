import { cn } from "@/lib/utils";

const featuresData = [
  {
    title: "Treat AI like a channel",
    description:
      "See total AI referrals in the last 30 days, how that's trending, and how much of your total traffic now comes from AI sources. This gives you a baseline you can report, just like organic, paid, or social.",
    image: "/AI Referral Traffic.png",
    alt: "AI referral traffic dashboard showing session attribution and traffic trends from AI engines.",
  },
  {
    title: "Know which AI assistants are actually sending you traffic",
    description:
      "See which AI engines — ChatGPT, Perplexity, Copilot, Gemini, Claude, etc. — are driving sessions to your site, and how each one is moving over time.",
    image: "/Analytics By Engine.png",
    alt: "Engine-specific analytics dashboard comparing performance across different AI platforms.",
  },
  {
    title: "See which pages AI search is sending traffic to — and what those visitors do next",
    description:
      "Every session is attributed back to source and page, so you can answer the only question that matters internally: \"Is AI search doing anything for us?\" You can show traffic, conversion, and revenue contribution from AI.",
    image: "/AI Traffic By Page.png",
    alt: "Page-level AI traffic attribution showing landing page performance and referral sources.",
  },
  {
    title: "See trend shifts by engine, month over month",
    description:
      "Track how each AI referrer is moving over time so you can spot spikes, slowdowns, or emerging sources early. If Perplexity drops 50% and Copilot starts climbing, you'll see it in the data — and adjust your focus before you get surprised.",
    image: "/Trends By Engines.png",
    alt: "Trend analysis dashboard showing month-over-month changes in AI engine performance.",
  },
];

export const FeaturesMonitor = () => {
  return (
    <section className="pt-12 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl text-gray-900">
            Finally, the reporting your leadership keeps asking for
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            One platform to see, compete, and prove ROI of AI search.
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
