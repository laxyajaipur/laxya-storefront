"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { useCartStore, getCartItemCount } from "@/stores/cart-store";
import { useWishlistStore } from "@/stores/wishlist-store";
import { useUIStore } from "@/stores/ui-store";

import { products } from "@/data/products";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const shopDropdownRef = useRef<HTMLDivElement>(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shopDropdownRef.current && !shopDropdownRef.current.contains(event.target as Node)) {
        setShopDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll to sections smoothly
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setShopDropdownOpen(false);
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

  const handleCategorySelect = (categoryValue: string) => {
    setSelectedGalleryTab(categoryValue);
    scrollToSection("gallery");
  };

  const shopCategories = [
    { name: "Cotton Kurta Sets", value: "cotton-kurta-sets" },
    { name: "Co-ord Sets", value: "co-ord-sets" },
    { name: "Anarkalis", value: "anarkalis" },
    { name: "Festive Sets", value: "festive-sets" },
    { name: "Short Kurtis", value: "short-kurtis" },
    { name: "Sharara sets", value: "sharara-sets" },
    { name: "All Products", value: "all" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-obsidian/5 shadow-sm py-4"
            : "bg-alabaster/80 backdrop-blur-sm py-5 border-b border-obsidian/5"
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

          {/* Logo */}
          <div 
            className="cursor-pointer shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Image
              src="/laxya-logo-transparent.png"
              alt="LAXYA."
              width={120}
              height={38}
              priority
              className="h-6 sm:h-8 w-auto object-contain max-w-[100px] sm:max-w-[130px]"
            />
          </div>

          {/* Nav Links - Desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs uppercase tracking-[0.2em] font-medium text-obsidian/80 transition-colors hover:text-gold cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleCategorySelect("new-arrivals")}
              className="text-xs uppercase tracking-[0.2em] font-medium text-obsidian/80 transition-colors hover:text-gold cursor-pointer"
            >
              NEW IN
            </button>
            
            {/* SHOP Dropdown */}
            <div className="relative" ref={shopDropdownRef}>
              <button
                onClick={() => setShopDropdownOpen(!shopDropdownOpen)}
                onMouseEnter={() => setShopDropdownOpen(true)}
                className="flex items-center gap-1 text-xs uppercase tracking-[0.2em] font-medium text-obsidian/80 transition-colors hover:text-gold cursor-pointer py-1"
              >
                <span>SHOP</span>
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${shopDropdownOpen ? "rotate-180 text-gold" : ""}`} />
              </button>

              {/* Dropdown Menu Overlay */}
              {shopDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md border border-obsidian/10 shadow-xl rounded-sm py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseLeave={() => setShopDropdownOpen(false)}
                >
                  <div className="px-4 pb-2 border-b border-obsidian/5 mb-1">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-gold font-semibold">Categories</span>
                  </div>
                  {shopCategories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => handleCategorySelect(cat.value)}
                      className="w-full text-left px-4 py-2 text-xs text-obsidian/80 hover:bg-gold/10 hover:text-gold font-medium tracking-wide transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <span>{cat.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("about-us")}
              className="text-xs uppercase tracking-[0.2em] font-medium text-obsidian/80 transition-colors hover:text-gold cursor-pointer"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-xs uppercase tracking-[0.2em] font-medium text-obsidian/80 transition-colors hover:text-gold cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Action Area */}
          <div className="flex items-center gap-1 sm:gap-3 shrink-0">

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
          className={`absolute top-0 left-0 bottom-0 w-80 bg-alabaster/95 p-6 shadow-2xl transition-transform duration-300 ease-out backdrop-blur-md flex flex-col justify-between overflow-y-auto ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
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

            <nav className="mt-8 flex flex-col gap-5">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setMobileMenuOpen(false);
                }}
                className="text-left text-sm uppercase tracking-[0.2em] font-medium text-obsidian/85 transition-colors hover:text-gold cursor-pointer"
              >
                Home
              </button>
              
              <button
                onClick={() => handleCategorySelect("new-arrivals")}
                className="text-left text-sm uppercase tracking-[0.2em] font-medium text-obsidian/85 transition-colors hover:text-gold cursor-pointer"
              >
                NEW IN
              </button>

              {/* Mobile Shop Collapsible */}
              <div>
                <button
                  onClick={() => setMobileShopOpen(!mobileShopOpen)}
                  className="w-full flex items-center justify-between text-left text-sm uppercase tracking-[0.2em] font-medium text-obsidian/85 transition-colors hover:text-gold cursor-pointer py-1"
                >
                  <span>SHOP</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileShopOpen ? "rotate-180 text-gold" : ""}`} />
                </button>

                {mobileShopOpen && (
                  <div className="mt-2 ml-3 pl-3 border-l border-gold/30 flex flex-col gap-3 py-2">
                    {shopCategories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => handleCategorySelect(cat.value)}
                        className="text-left text-xs text-obsidian/75 hover:text-gold font-medium tracking-wide transition-colors cursor-pointer"
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection("about-us")}
                className="text-left text-sm uppercase tracking-[0.2em] font-medium text-obsidian/85 transition-colors hover:text-gold cursor-pointer"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-sm uppercase tracking-[0.2em] font-medium text-obsidian/85 transition-colors hover:text-gold cursor-pointer"
              >
                Contact
              </button>
            </nav>
          </div>

          <div className="border-t border-obsidian/5 pt-6 text-center">
            <p className="text-[10px] uppercase tracking-widest text-obsidian/40">
              Laxya Jaipur Storefront
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

