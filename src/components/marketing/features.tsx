import Image from "next/image";
import { cn } from "@/lib/utils";

const featuresData = [
  {
    title: "Search Anything, Instantly",
    description:
      "Instantly check your brand's ranking for any prompt across major AI answer engines. Get a real-time view of your visibility.",
    image: "/Search Anything.png",
    alt: "A search interface for querying AI models about brand perception.",
  },
  {
    title: "Deep-Dive Into Prompt Performance",
    description:
      "Go beyond surface-level data. Get detailed visibility, ranking, and citation metrics for every prompt you track.",
    image: "/Prompt detail.png",
    alt: "A dashboard showing detailed analytics for a specific search prompt.",
  },
  {
    title: "Discover Your Most Important Prompts",
    description:
      "Uncover the core business prompts you need to be tracking. Our suggestion engine identifies key search terms relevant to your brand.",
    image: "/Prompt Suggest.png",
    alt: "A list of suggested prompts for a user to track.",
  },
  {
    title: "Continuous Monitoring, Effortless Insights",
    description:
      "We automatically track your most important prompts daily. Stay ahead of changes and monitor your AI search performance over time without lifting a finger.",
    image: "/Prompts.png",
    alt: "A dashboard listing multiple tracked prompts with their performance metrics.",
  },
  {
    title: "Gain a Competitive Edge",
    description:
      "See exactly how you stack up against the competition in AI search results. Track their rankings, citations, and share of voice.",
    image: "/Competitive insights.png",
    alt: "A competitive analysis dashboard with charts for share of voice and average ranking.",
  },
  {
    title: "Measure Your AI Search ROI",
    description:
      "Connect your Google Analytics 4 to see the real-world impact of your AI search strategy on your website traffic and business goals.",
    image: "/AI traffic.png",
    alt: "A dashboard showing AI traffic analytics and referral trends.",
  },
];

export const Features = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            A Complete Toolkit for AI Search Visibility
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            From ad-hoc searches to competitive insights and performance tracking, Probe Analytics gives you everything you need to own your narrative in the age of AI.
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
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={1600}
                  height={900}
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


