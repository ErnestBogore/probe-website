"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export const ClientNav = () => {
  const features = [
    {
      title: "AI Search Analytics Platform",
      description: "Track your brand's visibility across all major AI answer engines.",
      href: "/features/ai-search-analytics",
    },
    {
      title: "Brand Sentiment Analysis Tool",
      description: "Monitor how AI perceives your brand and protect your reputation.",
      href: "/features/brand-sentiment-analysis",
    },
    {
      title: "AI Search Tool",
      description: "Run on-demand searches to get real-time AI rankings.",
      href: "/features/ai-search-tool",
    },
  ];

  return (
    <>
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white dark:bg-zinc-900 shadow-lg">
              <div className="grid w-[600px] grid-cols-2 p-3">
                {features.map((feature, index) => (
                  <NavigationMenuLink
                    href={feature.href}
                    key={index}
                    className="rounded-md p-3 transition-colors hover:bg-muted/70"
                  >
                    <div key={feature.title}>
                      <p className="mb-1 font-semibold text-foreground">
                        {feature.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </NavigationMenuLink>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              className={navigationMenuTriggerStyle()}
            >
              Products
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/blog"
              className={navigationMenuTriggerStyle()}
            >
              Blog
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              className={navigationMenuTriggerStyle()}
            >
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="hidden items-center gap-4 lg:flex">
        <Button variant="outline">Sign in</Button>
        <Button className="bg-gray-900 text-white hover:bg-gray-800 font-bold">Show Me My AI Rankings</Button>
      </div>
      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="outline" size="icon">
            <MenuIcon className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="max-h-screen overflow-auto">
          <SheetHeader>
            <SheetTitle>
              <a
                href="https://www.shadcnblocks.com"
                className="flex items-center gap-2"
              >
                <Image
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                  width={32}
                  height={32}
                  className="max-h-8 w-auto"
                  alt="Shadcn UI Navbar"
                />
                <span className="text-lg font-semibold tracking-tighter">
                  Shadcnblocks.com
                </span>
              </a>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col p-4">
            <Accordion type="single" collapsible className="mt-4 mb-2">
              <AccordionItem value="solutions" className="border-none">
                <AccordionTrigger className="text-base hover:no-underline">
                  Features
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid md:grid-cols-2">
                    {features.map((feature, index) => (
                      <a
                        href={feature.href}
                        key={index}
                        className="rounded-md p-3 transition-colors hover:bg-muted/70"
                      >
                        <div key={feature.title}>
                          <p className="mb-1 font-semibold text-foreground">
                            {feature.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex flex-col gap-6">
              <a href="#" className="font-medium">
                Products
              </a>
              <a href="/blog" className="font-medium">
                Blog
              </a>
              <a href="#" className="font-medium">
                Contact
              </a>
            </div>
            <div className="mt-6 flex flex-col gap-4">
              <Button variant="outline">Sign in</Button>
              <Button className="bg-gray-900 text-white hover:bg-gray-800 font-bold">Show Me My AI Rankings</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
