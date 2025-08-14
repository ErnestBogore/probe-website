"use client";

import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ClientNav = dynamic(() => import('./client-nav').then(mod => mod.ClientNav), { ssr: false });

export const Navbar = () => {
  return (
    <section className="py-4">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <Image
              src="/probe_analytics_logo_v3.png"
              width={150}
              height={150}
              alt="Probe Analytics Logo"
            />
          </Link>
          <ClientNav />
        </div>
      </div>
    </section>
  );
};
