"use client";

import React from "react";
import Image from "next/image";
import { useUIStore } from "@/stores/ui-store";
import { ArrowRight } from "lucide-react";

interface CategoryItem {
  id: string;
  name: string;
  categoryValue: string;
  image: string;
  subtitle: string;
}

const categoriesList: CategoryItem[] = [
  {
    id: "kurta-sets",
    name: "Kurta Sets",
    categoryValue: "cotton-kurta-sets",
    image: "/products/LX-SLK-003/01-front.JPG",
    subtitle: "Pure Cotton & Silk Ensembles",
  },
  {
    id: "co-ord-sets",
    name: "Co-ord Sets",
    categoryValue: "co-ord-sets",
    image: "/products/LX-PRN-002/01-front.JPG",
    subtitle: "Modern Hand-Printed Silhouettes",
  },
  {
    id: "anarkalis",
    name: "Anarkalis",
    categoryValue: "anarkalis",
    image: "/products/LX-CRM-004/01-front.JPG",
    subtitle: "Regal Flowing Festive Wear",
  },
  {
    id: "festive-sets",
    name: "Festive Sets",
    categoryValue: "festive-sets",
    image: "/products/LX-SHR-001/01-front.JPG",
    subtitle: "Zari & Sharara Celebrations",
  },
];

export function ShopByCategory() {
  const setSelectedGalleryTab = useUIStore((state) => state.setSelectedGalleryTab);

  const handleCategoryClick = (categoryValue: string) => {
    setSelectedGalleryTab(categoryValue);
    const galleryElement = document.getElementById("gallery");
    if (galleryElement) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = galleryElement.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="categories" className="py-16 md:py-24 bg-alabaster border-t border-obsidian/5">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
            Handcrafted Taxonomies
          </span>
          <h2 className="mt-3 font-serif text-3xl font-light tracking-wide text-obsidian sm:text-4xl md:text-5xl">
            Shop by Category
          </h2>
          <p className="mt-3 max-w-md text-xs sm:text-sm leading-relaxed tracking-wider text-obsidian/85 font-medium">
            Explore curated Jaipur ensembles by silhouette and occasion.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categoriesList.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.categoryValue)}
              className="group relative overflow-hidden bg-white border border-obsidian/5 cursor-pointer shadow-sm transition-all duration-500 hover:shadow-xl hover:border-gold/30"
            >
              {/* Aspect Ratio Image Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Subtle dark overlay gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/20 to-transparent transition-opacity duration-300 group-hover:from-obsidian/90" />
                
                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col items-start justify-end text-white">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-gold/90 font-medium">
                    Category
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-light tracking-wide mt-1 text-white group-hover:text-amber-100 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-white/70 tracking-wider mt-1 line-clamp-1">
                    {cat.subtitle}
                  </p>
                  
                  {/* Subtle Action Arrow */}
                  <div className="mt-3 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-gold opacity-90 group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
