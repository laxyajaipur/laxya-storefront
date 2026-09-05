"use client";

import React from "react";
import { Sparkles, Leaf, Truck, ShieldCheck } from "lucide-react";

export function Craftsmanship() {
  const brandUSPs = [
    {
      icon: Sparkles,
      title: "Artisanal Precision",
      description: "Every ensemble is hand-finished by master craftsmen in Jaipur, showcasing meticulous zardozi stitching, authentic block printing, and custom patterns.",
    },
    {
      icon: Leaf,
      title: "Sustainable Luxury",
      description: "We are committed to conscious luxury. Using organic cottons, natural plant dyes, and supporting ethical artisan communities with fair-wage packages.",
    },
    {
      icon: Truck,
      title: "Express Insured Shipping",
      description: "Complimentary global courier dispatch on orders above $150 USD. Your garment travels fully insured, beautifully wrapped in our signature linen packaging.",
    },
    {
      icon: ShieldCheck,
      title: "Dedicated Concierge",
      description: "Our bespoke concierge team is at your disposal 24/7 to advise on sizing, assist with custom tailoring requests, or handle secure global deliveries.",
    },
  ];

  return (
    <section id="craftsmanship" className="py-20 bg-alabaster border-t border-b border-obsidian/5 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {brandUSPs.map((usp, idx) => {
            const Icon = usp.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-4 transition-all duration-300 hover:translate-y-[-4px]"
              >
                {/* Icon wrapper */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gold border border-obsidian/5 shadow-sm mb-6">
                  <Icon className="h-5 w-5" strokeWidth={1.2} />
                </div>
                
                {/* Text info */}
                <h3 className="font-serif text-lg font-light tracking-wide text-obsidian">
                  {usp.title}
                </h3>
                <p className="mt-4 text-xs leading-relaxed tracking-wider text-obsidian/55 max-w-xs">
                  {usp.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
