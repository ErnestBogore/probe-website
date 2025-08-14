"use client";

import React from "react";
import dynamic from 'next/dynamic';

const ClientNav = dynamic(() => import('./client-nav').then(mod => mod.ClientNav), { ssr: false });

export const Navbar = () => {
  return (
    <section className="py-4">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="https://www.shadcnblocks.com"
            className="flex items-center gap-2"
          >
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
              className="max-h-8"
              alt="Shadcn UI Navbar"
            />
            <span className="text-lg font-semibold tracking-tighter">
              Shadcnblocks.com
            </span>
          </a>
          <ClientNav />
        </div>
      </div>
    </section>
  );
};
