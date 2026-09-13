"use client";

import React from "react";
import { Sparkles, Leaf, Truck, ShieldCheck, HeartHandshake } from "lucide-react";

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
      description: "Complimentary dispatch on standard orders. Your garment travels fully insured, beautifully wrapped in our signature packaging.",
    },
    {
      icon: ShieldCheck,
      title: "Dedicated Concierge",
      description: "Our bespoke concierge team is at your disposal 24/7 to advise on sizing, assist with custom tailoring requests, or handle secure global deliveries.",
    },
  ];

  return (
    <section id="about-us" className="py-20 bg-alabaster border-t border-b border-obsidian/5 md:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        
        {/* Brand Narrative Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold">
            Our Heritage Story
          </span>

          <h2 className="mt-3 font-serif text-2xl md:text-3xl font-medium italic text-obsidian tracking-wide">
            &ldquo;Made for the woman who loves ethnic, but effortless.&rdquo;
          </h2>

          <div className="mt-8 pt-8 border-t border-gold/30 flex flex-col items-center">
            <h3 className="font-serif text-3xl md:text-4xl font-semibold tracking-wide text-obsidian mb-8">
              About us
            </h3>

            <div className="space-y-6 text-base md:text-lg leading-relaxed tracking-wide text-obsidian font-serif font-normal text-left md:text-center">
              <p className="font-semibold text-obsidian text-lg md:text-xl">
                Laxya was never part of the plan.
              </p>

              <p className="text-obsidian font-normal leading-relaxed">
                What began as an unexpected turn from a conventional career path became a mother-daughter venture, built around a shared love for beautiful clothing and the joy of creating something from scratch.
              </p>

              <p className="text-obsidian font-normal leading-relaxed">
                While westernwear has always been a personal favourite, ethnicwear has always brought a different kind of excitement — choosing the right fabric, finding the perfect colour, putting the details together, and watching an idea come to life.
              </p>

              <p className="text-obsidian font-normal leading-relaxed">
                Today, that love has taken shape as Laxya — thoughtfully curated and created ethnicwear, where beautiful fabrics, colours and silhouettes come together with a modern perspective.
              </p>

              <p className="text-obsidian font-normal leading-relaxed">
                Laxya is about keeping the charm of ethnicwear, while giving it a touch that feels a little more today.
              </p>
            </div>

            <div className="mt-10 pt-6 border-b border-gold/30 pb-4 inline-block">
              <h4 className="font-serif text-2xl md:text-3xl font-bold tracking-wide text-gold italic">
                Ethnic, through a modern lens
              </h4>
            </div>
          </div>
        </div>

        {/* Brand USPs Grid */}
        <div id="craftsmanship" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 pt-8">
          {brandUSPs.map((usp, idx) => {
            const Icon = usp.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 bg-white border border-obsidian/10 rounded-sm shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold border border-gold/20 shadow-sm mb-4">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                
                <h3 className="font-serif text-base font-semibold tracking-wide text-obsidian">
                  {usp.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed tracking-wider text-obsidian/85 font-medium max-w-xs">
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

