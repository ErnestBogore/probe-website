"use client";

import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ClientNav = dynamic(() => import('./client-nav').then(mod => mod.ClientNav), { ssr: false });

export const Navbar = () => {
  return (
    <section className="fixed top-0 left-0 right-0 z-50 py-2 bg-gray-100/80 backdrop-blur-md border-b border-gray-200/20 shadow-sm">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-tryanalyze.png"
              width={120}
              height={40}
              alt="Analyze AI - AI Search Analytics Platform"
              className="h-auto w-auto"
              priority
            />
          </Link>
          <ClientNav />
        </div>
      </div>
    </section>
  );
};
