import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Product",
    links: [
      { name: "Discover", href: "/features/discover" },
      { name: "Monitor", href: "/features/monitor" },
      { name: "Improve", href: "/features/improve" },
      { name: "Govern", href: "/features/govern" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/blog/best-tools-for-tracking-brand-visibility-ai-search" },
      { name: "Blog", href: "/blog" },
      { name: "Affiliate Program", href: "/affiliate" },
    ],
  },
  {
    title: "Free Tools",
    links: [
      { name: "AI Website Audit Tool", href: "/free-tools/ai-website-audit-tool" },
      { name: "LLM.txt Generator", href: "/free-tools/llm-txt-generator-tool" },
      { name: "Perplexity AI Alternative", href: "/free-tools/perplexity-ai-alternative" },
      { name: "AI Prompts Library", href: "/prompts" },
    ],
  },
  {
    title: "Use Cases",
    links: [
      { name: "ChatGPT Tracking", href: "/use-cases/chatgpt" },
      { name: "Google AI Mode", href: "/use-cases/google-ai-mode" },
      { name: "Gemini Tracking", href: "/use-cases/gemini" },
      { name: "Claude Tracking", href: "/use-cases/claude" },
      { name: "Microsoft Copilot", href: "/use-cases/microsoft-copilot" },
      { name: "Perplexity AI", href: "/use-cases/perplexity-ai" },
      { name: "Meta AI Tracking", href: "/use-cases/meta-ai" },
      { name: "Deepseek Tracking", href: "/use-cases/deepseek" },
    ],
  },
  {
    title: "Compare",
    links: [
      { name: "vs Ahrefs Brand Radar", href: "/compare/analyze-vs-ahrefs-brand-radar" },
      { name: "vs HubSpot AI Search", href: "/compare/analyze-vs-hubspot-ai-search-grader" },
      { name: "vs Google Looker Studio", href: "/compare/analyze-vs-google-looker-studio" },
      { name: "vs Semrush AI Toolkit", href: "/compare/analyze-vs-semrush-ai-toolkit" },
      { name: "vs Writesonic GEO", href: "/compare/analyze-vs-writesonic-geo" },
      { name: "vs AthenaHQ", href: "/compare/analyze-vs-athenahq" },
      { name: "vs Profound", href: "/compare/analyze-vs-profound" },
      { name: "vs Peec AI", href: "/compare/analyze-vs-peec-ai" },
      { name: "vs Surfer", href: "/compare/analyze-vs-surfer" },
      { name: "vs Google Search Console", href: "/compare/analyze-vs-gsc" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export const Footer = ({
  logo = {
    url: "/",
    src: "/logo-tryanalyze.png",
    alt: "Analyze - AI Search Analytics Platform",
    title: "AI Search Analytics For Marketing Teams | Analyze",
  },
  sections = defaultSections,
  description = "Analyze provides a comprehensive suite of tools to monitor your brand's visibility and sentiment across all major AI answer engines, giving you the insights to stay ahead.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 Analyze. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: FooterProps) => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-4 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo.url}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={40}
                />
              </a>
            </div>
            <p className="text-muted-foreground max-w-[70%] text-sm">
              {description}
            </p>
            <ul className="text-muted-foreground flex items-center space-x-6">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="hover:text-primary font-medium">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-12">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-3 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};


