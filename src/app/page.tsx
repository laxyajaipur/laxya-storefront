import React from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ShopByCategory } from "@/components/shop-by-category";
import { ProductGallery } from "@/components/product-gallery";
import { EditorialLookbook } from "@/components/editorial-lookbook";
import { Craftsmanship } from "@/components/craftsmanship";
import { CartDrawer } from "@/components/cart-drawer";
import { CheckoutModal } from "@/components/checkout-modal";
import { SearchOverlay } from "@/components/search-overlay";
import { ProductQuickView } from "@/components/product-quick-view";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-alabaster text-obsidian flex flex-col justify-between">
      {/* Global Navigation Header */}
      <Header />

      {/* Main Page Layout */}
      <main className="flex-1 pt-20">
        {/* Hero Showcase */}
        <Hero />

        {/* Shop By Category Grid */}
        <ShopByCategory />

        {/* Curated Product Showcase Grid */}
        <ProductGallery />

        {/* Brand Story / About Us & Craftsmanship USPs */}
        <Craftsmanship />

        {/* Interactive Hotspot Lookbook */}
        <EditorialLookbook />
      </main>

      {/* Global Brand Footer */}
      <Footer />

      {/* Slide-overs, Dialog Modals, and Fullscreen Overlays */}
      <CartDrawer />
      <CheckoutModal />
      <SearchOverlay />
      <ProductQuickView />
    </div>
  );
}
