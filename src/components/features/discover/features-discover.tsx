import { cn } from "@/lib/utils";

const featuresData = [
  {
    title: "Check any prompt in seconds",
    description:
      "Type in a buying question (e.g. \"best project management tools for startups\") and instantly see how AI is positioning you, who else is being recommended, and how the market is being framed. Use this to answer \"How do we show up for this?\" before you invest team time.",
    image: "/ad hoc search.png",
    alt: "Ad hoc search interface showing instant AI prompt analysis and positioning results.",
  },
  {
    title: "Not sure which prompt to track? Let Analyze AI surface a few prompts for you",
    description:
      "We suggest high-intent prompts your buyers are asking — grouped by theme and ICP — and you can add them to tracking with one click. No more brainstorming \"what would our prospects even ask?\" The system feeds you the moments that actually matter.",
    image: "/Prompt Suggestion 2.png",
    alt: "Prompt suggestion dashboard showing AI-recommended high-intent buying questions grouped by theme.",
  },
  {
    title: "Turn off low-value prompts so you stay focused",
    description:
      "If a prompt isn't strategic, you can reject it. It moves to inactive and stops cluttering your reporting. That keeps trends, attribution, and competitive monitoring centered on the questions that actually influence revenue — not random \"top tools\" noise.",
    image: "/Prompt Removal 2.png",
    alt: "Prompt management interface showing how to deactivate low-value prompts to maintain focus.",
  },
  {
    title: "Drill into a single buying moment and see how you rank",
    description:
      "Open any prompt to see your visibility, sentiment, position, and presence by model (ChatGPT, Perplexity, etc.) over time. You can literally answer: Are we winning this question right now? Are we improving? Who's gaining on us?",
    image: "/Prompt Level Analytics.png",
    alt: "Detailed prompt-level analytics dashboard showing visibility, sentiment, and position across AI models over time.",
  },
  {
    title: "Get the receipts behind every recommendation",
    description:
      "For that same prompt, view the exact URLs and claims AI is pulling in — competitor landing pages, listicles, comparison blogs, etc. This tells you why a rival is being recommended instead of you, and what content or proof points you'd need to displace them.",
    image: "/Prompt Level Citations.png",
    alt: "Citation analysis showing exact URLs and sources AI models use for recommendations.",
  },
  {
    title: "See every tracked buying moment in one view",
    description:
      "Get a single table of all active prompts you're tracking: visibility, sentiment, position, who else is being mentioned, and status. This gives marketing, product marketing, and leadership a shared view of \"where we're showing up and who we're showing up with.\"",
    image: "/Track daily prompts.png",
    alt: "Comprehensive prompt tracking dashboard showing all active buying moments in a unified view.",
  },
];

export const FeaturesDiscover = () => {
  return (
    <section className="pt-12 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl text-gray-900">
            Map every high-intent AI buying moment — see how you're positioned, who you're up against, and which prompts are worth chasing
          </h2>
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
