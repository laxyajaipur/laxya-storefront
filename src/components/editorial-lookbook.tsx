"use client";

import React, { useState, useEffect } from "react";
import { lookbookImage, lookbookHotspots, getProductById } from "@/data/products";
import { useCurrencyStore } from "@/stores/currency-store";
import { useUIStore } from "@/stores/ui-store";
import { formatPrice } from "@/lib/currency";
import { Plus, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function EditorialLookbook() {
  const currency = useCurrencyStore((state) => state.currency);
  const openQuickView = useUIStore((state) => state.openQuickView);
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="lookbook" className="py-20 bg-white md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
            Brand Editorial
          </span>
          <h2 className="mt-3 font-serif text-3xl font-light tracking-wide text-obsidian sm:text-4xl md:text-5xl">
            Senses of Jaipur
          </h2>
          <p className="mt-4 max-w-md text-xs leading-relaxed tracking-wider text-obsidian/50">
            Click on the pulsing brass pins to discover individual hand-tailored garments directly from the lookbook.
          </p>
        </div>

        {/* Lookbook Hotspot Container */}
        <div className="relative mx-auto aspect-[3/4] md:aspect-[4/3] w-full max-w-3xl overflow-hidden bg-white shadow-2xl border border-obsidian/10 rounded-sm">
          <Image
            src={lookbookImage}
            alt="Laxya Editorial Lookbook"
            fill
            priority
            quality={95}
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />

          {/* Hotspots Mapping */}
          {lookbookHotspots.map((hotspot) => {
            const product = getProductById(hotspot.productId);
            if (!product) return null;

            const isHovered = activeHotspotId === hotspot.id;

            return (
              <div
                key={hotspot.id}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                onMouseEnter={() => setActiveHotspotId(hotspot.id)}
                onMouseLeave={() => setActiveHotspotId(null)}
              >
                {/* Pulsing Hotspot Dot */}
                <button
                  onClick={() => openQuickView(product.id)}
                  className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gold/90 text-white shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none cursor-pointer"
                  aria-label={`View ${product.name}`}
                >
                  <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-60" />
                  <Plus className="relative h-4 w-4" />
                </button>

                {/* Info Tooltip */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute bottom-10 left-1/2 w-48 -translate-x-1/2 bg-white/95 p-3 shadow-xl backdrop-blur-md border border-obsidian/5 flex flex-col gap-2.5 cursor-pointer"
                      onClick={() => openQuickView(product.id)}
                    >
                      {/* Image Preview */}
                      <div className="relative h-24 w-full overflow-hidden bg-alabaster">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="150px"
                        />
                      </div>

                      {/* Product details */}
                      <div>
                        <h4 className="font-serif text-xs font-light text-obsidian line-clamp-1 leading-tight tracking-wide">
                          {product.name}
                        </h4>
                        <p className="text-[10px] font-semibold text-gold mt-1">
                          {mounted ? formatPrice(product.priceUSD, currency) : formatPrice(product.priceUSD, "USD")}
                        </p>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between border-t border-obsidian/5 pt-1.5 text-[9px] uppercase tracking-wider text-obsidian/60 hover:text-gold transition-colors">
                        <span>Quick View</span>
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
