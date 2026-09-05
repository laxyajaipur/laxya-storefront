"use client";

import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/data/products";
import { useCurrencyStore } from "@/stores/currency-store";
import { useWishlistStore } from "@/stores/wishlist-store";
import { useUIStore } from "@/stores/ui-store";
import { formatPrice } from "@/lib/currency";
import { Heart, Eye, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { ProductCategory, Product } from "@/types";

export function ProductGallery() {
  const selectedGalleryTab = useUIStore((state) => state.selectedGalleryTab);
  const setSelectedGalleryTab = useUIStore((state) => state.setSelectedGalleryTab);
  const openQuickView = useUIStore((state) => state.openQuickView);

  const [activeTab, setActiveTab] = useState<string>(selectedGalleryTab || "all");
  const [isTabLoading, setIsTabLoading] = useState<boolean>(false);
  const currency = useCurrencyStore((state) => state.currency);
  const toggleWishlist = useWishlistStore((state) => state.toggleItem);
  const wishlistItems = useWishlistStore((state) => state.items);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTabChange = (val: string) => {
    if (val === activeTab) return;
    setIsTabLoading(true);
    setActiveTab(val);
    setSelectedGalleryTab(val);
    setTimeout(() => {
      setIsTabLoading(false);
    }, 300);
  };

  useEffect(() => {
    if (selectedGalleryTab && selectedGalleryTab !== activeTab) {
      handleTabChange(selectedGalleryTab);
    }
  }, [selectedGalleryTab]);

  // Filter products based on selected tab
  const getFilteredProducts = (category: string): Product[] => {
    if (category === "wishlist") {
      return products.filter((product) => wishlistItems.includes(product.id));
    }
    if (category === "all") return products;
    return products.filter((product) => product.category.includes(category as ProductCategory));
  };

  const validWishlistCount = wishlistItems.filter((id) => products.some((p) => p.id === id)).length;

  const categories: { value: string; label: string }[] = [
    { value: "all", label: "All Works" },
    { value: "wishlist", label: `Wishlist (${mounted ? validWishlistCount : 0})` },
    { value: "new-arrivals", label: "New Arrivals" },
    { value: "bestsellers", label: "Bestsellers" },
    { value: "limited-edition", label: "Limited Edition" },
  ];

  const filteredProducts = getFilteredProducts(activeTab);

  return (
    <section id="gallery" className="py-20 bg-alabaster md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Header Title */}
        <div className="flex flex-col items-center text-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
            Curated Creations
          </span>
          <h2 className="mt-3 font-serif text-3xl font-light tracking-wide text-obsidian sm:text-4xl md:text-5xl">
            The Laxya Collection
          </h2>
          <p className="mt-4 max-w-md text-xs leading-relaxed tracking-wider text-obsidian/50">
            Hand-block printed mulmul, resham borders, and luxury linen ensembles designed to tell a heritage story.
          </p>
        </div>

        {/* Radix Tabs Component */}
        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={handleTabChange}
          className="mt-12 flex flex-col items-center"
        >
          <TabsList className="mb-6 flex flex-wrap justify-center border-b border-obsidian/5 bg-transparent p-0">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.value}
                value={cat.value}
                className="cursor-pointer px-5 pb-3 text-xs uppercase tracking-[0.16em]"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Grid Layouts inside TabsContent */}
          <div className="relative w-full min-h-[520px]">
            {/* Elegant Luxury Tab Spinner Overlay */}
            <AnimatePresence>
              {isTabLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="absolute inset-0 z-30 flex items-start justify-center pt-24 bg-alabaster/40 backdrop-blur-[2px]"
                >
                  <div className="flex items-center gap-3 bg-white/95 px-6 py-3 rounded-full border border-gold/25 shadow-xl backdrop-blur-md">
                    <Loader2 className="h-4 w-4 animate-spin text-gold" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-obsidian">
                      Updating Outfits...
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              <TabsContent value={activeTab} className="mt-6">
                {activeTab === "wishlist" && filteredProducts.length === 0 ? (
                  <div className="my-8 flex flex-col items-center justify-center text-center p-10 bg-white border border-obsidian/5 max-w-md mx-auto rounded-sm shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold mb-3">
                      <Heart className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-serif text-xl font-light tracking-wide text-obsidian">Your Wishlist is Empty</h4>
                    <p className="mt-2 text-xs leading-relaxed text-obsidian/60 max-w-xs">
                      Explore our handcrafted collection and tap the heart icon on your favorite outfits to save them here.
                    </p>
                    <button
                      onClick={() => {
                        setActiveTab("all");
                        setSelectedGalleryTab("all");
                      }}
                      className="mt-5 px-6 py-2.5 bg-obsidian text-white text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-gold cursor-pointer"
                    >
                      Explore Collection
                    </button>
                  </div>
                ) : (
                  <div className="grid gap-x-6 gap-y-10 grid-cols-2 lg:grid-cols-4 md:gap-y-12">
                    {filteredProducts.map((product) => {
                      const isFavorite = mounted ? wishlistItems.includes(product.id) : false;
                      
                      return (
                        <div
                          key={product.id}
                          className="group relative flex flex-col justify-between"
                        >
                          {/* Interactive Image Container */}
                          <div
                            className="relative aspect-[3/4] w-full overflow-hidden bg-white border border-transparent transition-all duration-500 hover:border-gold/30 hover:shadow-lg cursor-pointer"
                            onClick={() => openQuickView(product.id)}
                          >
                            {/* Image Hover Swap */}
                            <div className="absolute inset-0">
                              {/* Base Image */}
                              <Image
                                src={product.images[0]}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-0"
                                sizes="(max-width: 768px) 50vw, 25vw"
                              />
                              {/* Hover Alternate Image */}
                              <Image
                                src={product.images[1] || product.images[0]}
                                alt={`${product.name} detail view`}
                                fill
                                className="object-cover absolute inset-0 opacity-0 transition-all duration-700 scale-102 group-hover:scale-105 group-hover:opacity-100"
                                sizes="(max-width: 768px) 50vw, 25vw"
                              />
                            </div>

                            {/* Top Actions: Badges & Wishlist */}
                            <div className="absolute left-3 top-3 right-3 z-10 flex items-center justify-between pointer-events-none">
                              <div>
                                {product.badge && (
                                  <span className="inline-block bg-white/90 backdrop-blur-sm px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-gold border border-gold/10">
                                    {product.badge}
                                  </span>
                                )}
                              </div>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleWishlist(product.id);
                                }}
                                className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-obsidian shadow-sm transition-all hover:scale-105"
                                aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
                              >
                                <Heart
                                  className={`h-4 w-4 transition-colors ${
                                    isFavorite ? "fill-gold text-gold" : "text-obsidian hover:text-gold"
                                  }`}
                                />
                              </button>
                            </div>

                            {/* Bottom Quick View Overlay Button */}
                            <div className="absolute inset-0 flex items-center justify-center bg-obsidian/10 opacity-0 backdrop-blur-[1px] transition-all duration-300 group-hover:opacity-100">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 bg-white/95 px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-obsidian shadow-lg hover:bg-obsidian hover:text-white transition-colors"
                              >
                                <Eye className="h-3 w-3" /> Quick View
                              </motion.button>
                            </div>
                          </div>

                          {/* Product Info Description */}
                          <div className="mt-4 flex flex-col items-center text-center">
                            <h3
                              className="font-serif text-sm font-light tracking-wide text-obsidian hover:text-gold transition-colors cursor-pointer"
                              onClick={() => openQuickView(product.id)}
                            >
                              {product.name}
                            </h3>
                            <p className="mt-1.5 text-xs font-medium tracking-wide text-gold">
                              {mounted ? formatPrice(product.priceUSD, currency) : formatPrice(product.priceUSD, "USD")}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </TabsContent>
            </motion.div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
