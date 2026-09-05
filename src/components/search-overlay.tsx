"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useUIStore } from "@/stores/ui-store";
import { products } from "@/data/products";
import { useCurrencyStore } from "@/stores/currency-store";
import { formatPrice } from "@/lib/currency";
import Image from "next/image";

interface SearchOverlayContentProps {
  onClose: () => void;
}

function SearchOverlayContent({ onClose }: SearchOverlayContentProps) {
  const openQuickView = useUIStore((state) => state.openQuickView);
  const currency = useCurrencyStore((state) => state.currency);

  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus input on mount
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
    
    // Hide scrolling on mount
    document.body.style.overflow = "hidden";
    
    // Restore scrolling on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const filteredProducts = query.trim()
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex flex-col bg-alabaster/98 backdrop-blur-md"
    >
      {/* Header */}
      <div className="flex h-20 items-center justify-between border-b border-obsidian/5 px-6 md:px-12">
        <span className="font-serif text-sm uppercase tracking-[0.2em] text-obsidian/40">
          Search the Collection
        </span>
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-obsidian/70 transition-colors hover:text-obsidian"
        >
          <span className="text-xs uppercase tracking-[0.15em]">Close</span>
          <X className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>

      {/* Search Box */}
      <div className="mx-auto w-full max-w-4xl px-6 pt-12 md:pt-20">
        <div className="relative flex items-center border-b border-obsidian/20 pb-4">
          <Search className="absolute left-0 h-6 w-6 text-obsidian/40" strokeWidth={1.2} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What are you looking for?"
            className="w-full bg-transparent pl-10 pr-4 font-serif text-2xl font-light tracking-wide text-obsidian placeholder:text-obsidian/30 focus:outline-none md:text-4xl"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="rounded-full p-1 text-obsidian/40 hover:bg-obsidian/5 hover:text-obsidian"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          )}
        </div>

        {/* Suggestions or Results */}
        <div className="mt-12 overflow-y-auto pb-12" style={{ maxHeight: "calc(100vh - 320px)" }}>
          {query.trim() === "" ? (
            <div>
              <h4 className="font-serif text-xs uppercase tracking-[0.2em] text-obsidian/40">
                Suggested Searches
              </h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Kurta Set", "Velvet", "Linen", "Limited Edition"].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="border border-obsidian/10 bg-white/50 px-4 py-2 text-xs uppercase tracking-[0.1em] text-obsidian/75 transition-all hover:border-gold hover:text-gold"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div>
              <h4 className="font-serif text-xs uppercase tracking-[0.2em] text-obsidian/40">
                Results ({filteredProducts.length})
              </h4>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onClose();
                      openQuickView(product.id);
                    }}
                    className="group flex cursor-pointer gap-4 border border-transparent bg-white/40 p-3 transition-all hover:border-gold/30 hover:bg-white/80"
                  >
                    <div className="relative h-20 w-16 shrink-0 overflow-hidden bg-alabaster">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex flex-col justify-between py-1">
                      <div>
                        <h5 className="font-serif text-sm font-light tracking-wide text-obsidian transition-colors group-hover:text-gold">
                          {product.name}
                        </h5>
                        <p className="mt-1 line-clamp-1 text-xs text-obsidian/50">
                          {product.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs font-medium tracking-wide text-gold">
                          {formatPrice(product.priceUSD, currency)}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-obsidian/40 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                          Quick View <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-sm tracking-wide text-obsidian/50">
                No results found for &ldquo;{query}&rdquo;.
              </p>
              <button
                onClick={() => setQuery("")}
                className="mt-4 text-xs uppercase tracking-[0.15em] text-gold hover:underline"
              >
                Clear Search
                  </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function SearchOverlay() {
  const isOpen = useUIStore((state) => state.isSearchOpen);
  const closeSearch = useUIStore((state) => state.closeSearch);

  return (
    <AnimatePresence>
      {isOpen && (
        <SearchOverlayContent
          onClose={closeSearch}
        />
      )}
    </AnimatePresence>
  );
}
