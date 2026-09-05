"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useCartStore, getCartItemCount } from "@/stores/cart-store";
import { useWishlistStore } from "@/stores/wishlist-store";
import { useUIStore } from "@/stores/ui-store";

import { products } from "@/data/products";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const cartItems = useCartStore((state) => state.items);
  const openCart = useCartStore((state) => state.openCart);

  const wishlistItems = useWishlistStore((state) => state.items);
  const wishlistCount = wishlistItems.filter((id) => products.some((p) => p.id === id)).length;
  const openSearch = useUIStore((state) => state.openSearch);
  const setSelectedGalleryTab = useUIStore((state) => state.setSelectedGalleryTab);

  const cartCount = getCartItemCount(cartItems);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  // Scroll to sections smoothly
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md border-b border-obsidian/5 shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 md:px-12">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center text-obsidian hover:text-gold md:hidden shrink-0"
            aria-label="Open navigation menu"
          >
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          </button>

          {/* Nav Links - Desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-xs uppercase tracking-[0.2em] text-obsidian/70 transition-colors hover:text-gold cursor-pointer"
            >
              Collection
            </button>
            <button
              onClick={() => scrollToSection("craftsmanship")}
              className="text-xs uppercase tracking-[0.2em] text-obsidian/70 transition-colors hover:text-gold cursor-pointer"
            >
              Craftsmanship
            </button>
            <button
              onClick={() => scrollToSection("lookbook")}
              className="text-xs uppercase tracking-[0.2em] text-obsidian/70 transition-colors hover:text-gold cursor-pointer"
            >
              Lookbook
            </button>
            <button
              onClick={() => scrollToSection("vip-club")}
              className="text-xs uppercase tracking-[0.2em] text-obsidian/70 transition-colors hover:text-gold cursor-pointer"
            >
              VIP Club
            </button>
          </nav>

          {/* Logo */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Image
              src="/laxya-logo-transparent.png"
              alt="LAXYA."
              width={120}
              height={38}
              priority
              className="h-6 sm:h-8 w-auto object-contain max-w-[100px] sm:max-w-[120px]"
            />
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-0.5 sm:gap-3 shrink-0">

            {/* Search Trigger */}
            <button
              onClick={openSearch}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center text-obsidian hover:text-gold transition-colors"
              aria-label="Search items"
            >
              <Search className="h-4.5 w-4.5" strokeWidth={1.5} />
            </button>

            {/* Wishlist Trigger */}
            <button
              onClick={() => {
                setSelectedGalleryTab("wishlist");
                scrollToSection("gallery");
              }}
              className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center text-obsidian hover:text-gold transition-colors cursor-pointer"
              aria-label="View Wishlist"
            >
              <Heart className="h-4.5 w-4.5" strokeWidth={1.5} />
              {mounted && wishlistCount > 0 && (
                <span className="absolute right-0.5 top-0.5 flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-gold text-[8px] sm:text-[9px] font-bold text-white">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Cart Drawer Trigger */}
            <button
              onClick={openCart}
              className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center text-obsidian hover:text-gold transition-colors"
              aria-label="Open Cart"
            >
              <ShoppingBag className="h-4.5 w-4.5" strokeWidth={1.5} />
              {mounted && cartCount > 0 && (
                <span className="absolute right-0.5 top-0.5 flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-gold text-[8px] sm:text-[9px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 z-50 bg-obsidian/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 left-0 bottom-0 w-72 bg-alabaster/95 p-6 shadow-2xl transition-transform duration-300 ease-out backdrop-blur-md ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-obsidian/5 pb-4">
            <Image
              src="/laxya-logo-transparent.png"
              alt="LAXYA."
              width={100}
              height={32}
              className="h-7 w-auto object-contain"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 text-obsidian hover:text-gold"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-6">
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-left text-sm uppercase tracking-[0.2em] text-obsidian/85 transition-colors hover:text-gold cursor-pointer"
            >
              Collection
            </button>
            <button
              onClick={() => scrollToSection("craftsmanship")}
              className="text-left text-sm uppercase tracking-[0.2em] text-obsidian/85 transition-colors hover:text-gold cursor-pointer"
            >
              Craftsmanship
            </button>
            <button
              onClick={() => scrollToSection("lookbook")}
              className="text-left text-sm uppercase tracking-[0.2em] text-obsidian/85 transition-colors hover:text-gold cursor-pointer"
            >
              Lookbook
            </button>
            <button
              onClick={() => scrollToSection("vip-club")}
              className="text-left text-sm uppercase tracking-[0.2em] text-obsidian/85 transition-colors hover:text-gold cursor-pointer"
            >
              VIP Club
            </button>
          </nav>

          <div className="absolute bottom-8 left-6 right-6 border-t border-obsidian/5 pt-6 text-center">
            <p className="text-[10px] uppercase tracking-widest text-obsidian/40">
              Laxya Jaipur Storefront
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
