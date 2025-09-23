"use client";

import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ClientNav = dynamic(() => import('./client-nav').then(mod => mod.ClientNav), { ssr: false });

export const Navbar = () => {
  return (
    <section className="py-2">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-tryanalyze.png"
              width={120}
              height={40}
              alt="Analyze Logo"
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
