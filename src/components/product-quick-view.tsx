"use client";

import React, { useState, useEffect } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogPortal, DialogOverlay } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/stores/ui-store";
import { useCartStore } from "@/stores/cart-store";
import { useCurrencyStore } from "@/stores/currency-store";
import { useWishlistStore } from "@/stores/wishlist-store";
import { getProductById } from "@/data/products";
import { formatPrice } from "@/lib/currency";
import { Heart, ShoppingBag, Check, ChevronLeft, ChevronRight, Maximize2, X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProductQuickViewContentProps {
  productId: string;
  onClose: () => void;
}

function ProductQuickViewContent({ productId, onClose }: ProductQuickViewContentProps) {
  const product = getProductById(productId);

  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);
  const currency = useCurrencyStore((state) => state.currency);
  const toggleWishlist = useWishlistStore((state) => state.toggleItem);
  const wishlistItems = useWishlistStore((state) => state.items);

  const [selectedSize, setSelectedSize] = useState<string>(product?.sizes[0] || "");
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [added, setAdded] = useState(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!product) return null;

  const isFavorite = wishlistItems.includes(product.id);

  const handlePrevImage = () => {
    if (!product) return;
    setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    if (!product) return;
    setCurrentImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation for Fullscreen Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFullscreen) return;
      if (e.key === "Escape") setIsFullscreen(false);
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen, product, currentImageIndex]);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addItem(product.id, selectedSize);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
      openCart();
    }, 800);
  };

  const currentImage = product.images[currentImageIndex] || product.images[0];

  return (
    <>
      <DialogContent 
        className="max-w-4xl w-[95vw] md:w-full max-h-[90vh] overflow-y-auto p-0 bg-alabaster border-none md:rounded-none shadow-2xl"
        onPointerDownOutside={(e) => {
          if (isFullscreen) e.preventDefault();
        }}
        onInteractOutside={(e) => {
          if (isFullscreen) e.preventDefault();
        }}
      >
        <div className="grid md:grid-cols-12">
          {/* Product Media - 6 columns */}
          <div className="md:col-span-6 bg-white flex flex-col justify-between">
            <div
              onClick={() => setIsFullscreen(true)}
              className="relative aspect-[3/4] w-full overflow-hidden group cursor-zoom-in"
              title="Click to view full screen"
            >
              <Image
                key={currentImageIndex}
                src={currentImage}
                alt={`${product.name} image ${currentImageIndex + 1}`}
                fill
                quality={95}
                className="object-cover transition-transform duration-500 group-hover:scale-103"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* Top-Right Fullscreen Trigger Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFullscreen(true);
                }}
                className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-obsidian shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-white hover:scale-110 cursor-pointer border border-obsidian/5"
                title="Expand Full Screen"
                aria-label="Expand image full screen"
              >
                <Maximize2 className="h-4 w-4" />
              </button>

              {/* Hover Zoom Hint */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none z-10">
                <span className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-medium text-obsidian shadow-lg">
                  <ZoomIn className="h-3.5 w-3.5" /> Fullscreen View
                </span>
              </div>

              {/* Navigation Arrows on Both Ends */}
              {product.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevImage();
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-obsidian shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-white hover:scale-110 cursor-pointer border border-obsidian/5"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextImage();
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-obsidian shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-white hover:scale-110 cursor-pointer border border-obsidian/5"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  {/* Counter Badge */}
                  <div className="absolute bottom-3 left-3 z-10 bg-obsidian/75 backdrop-blur-sm text-white px-2.5 py-0.5 text-[10px] tracking-widest font-mono rounded-full">
                    {currentImageIndex + 1} / {product.images.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail selector */}
            {product.images.length > 1 && (
              <div className="flex gap-2 p-3 overflow-x-auto justify-center bg-white border-t border-obsidian/5">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative h-16 w-12 shrink-0 overflow-hidden border transition-all cursor-pointer ${
                      currentImageIndex === idx ? "border-gold ring-1 ring-gold" : "border-obsidian/10 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} alternate view ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

        {/* Product Info - 6 columns */}
        <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Product Badge */}
            {product.badge && (
              <span className="inline-block text-[9px] font-medium uppercase tracking-[0.2em] text-gold border border-gold/25 px-2.5 py-0.5 rounded-full bg-gold/5 mb-4">
                {product.badge}
              </span>
            )}

            {/* Title & Price */}
            <h2 className="font-serif text-2xl font-light tracking-wide text-obsidian sm:text-3xl">
              {product.name}
            </h2>
            
            <p className="mt-3 text-lg font-medium text-gold">
              {formatPrice(product.priceUSD, currency)}
            </p>

            <div className="my-5 h-px bg-obsidian/5" />

            {/* Description */}
            <p className="text-sm leading-relaxed text-obsidian/70">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="mt-6">
              <div className="flex justify-between items-center text-xs uppercase tracking-wider mb-2.5">
                <span className="font-medium text-obsidian/85">Select Size</span>
                <span className="text-obsidian/40 cursor-pointer hover:text-gold transition-colors">Size Guide</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-11 h-11 border text-xs uppercase transition-all flex items-center justify-center font-medium ${
                      selectedSize === size
                        ? "border-obsidian bg-obsidian text-white"
                        : "border-obsidian/10 text-obsidian hover:border-obsidian"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Actions */}
          <div className="mt-8 flex flex-col gap-3">
            <div className="flex gap-2">
              <Button
                variant="dark"
                onClick={handleAddToCart}
                disabled={!product.inStock || added}
                className="flex-1 h-12 uppercase tracking-[0.2em]"
              >
                {added ? (
                  <span className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4" /> Added to Cart
                  </span>
                ) : product.inStock ? (
                  <span className="flex items-center justify-center gap-2">
                    <ShoppingBag className="h-4 w-4" /> Add to Cart
                  </span>
                ) : (
                  "Out of Stock"
                )}
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => toggleWishlist(product.id)}
                className={`h-12 w-12 border ${
                  isFavorite
                    ? "border-gold text-gold bg-gold/5"
                    : "border-obsidian/10 text-obsidian hover:border-gold hover:text-gold"
                }`}
                aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart className={`h-4.5 w-4.5 ${isFavorite ? "fill-current" : ""}`} />
              </Button>
            </div>

            {/* Guarantees */}
            <p className="text-[10px] text-center text-obsidian/45 tracking-wider mt-4">
              Complimentary global shipping on orders over $150 USD. 30-day returns.
            </p>
          </div>
        </div>
      </div>
    </DialogContent>

    {/* Fullscreen Image Lightbox Overlay */}
    <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[9998]" />
        <DialogPrimitive.Content className="fixed inset-0 z-[9999] flex flex-col items-center justify-between p-4 sm:p-6 outline-none border-none bg-transparent select-none translate-x-0 translate-y-0 max-w-none w-full h-full pointer-events-auto">
          <DialogPrimitive.Title className="sr-only">
            {product.name} Fullscreen Image View
          </DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">
            Fullscreen image viewer with thumbnail navigation
          </DialogPrimitive.Description>

          {/* Top Control Bar */}
          <div className="w-full max-w-7xl flex items-center justify-between text-white pt-2 px-2 z-30">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
                {product.name}
              </span>
              <span className="text-[10px] tracking-widest opacity-60 font-mono mt-0.5">
                Image {currentImageIndex + 1} of {product.images.length}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsFullscreen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white hover:text-obsidian transition-all cursor-pointer shadow-xl border border-white/20 z-40 pointer-events-auto"
              aria-label="Close fullscreen view"
              title="Close (ESC)"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Center High-Definition Zoom Image */}
          <div className="relative flex-1 w-full max-w-7xl my-4 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="relative h-full w-full flex items-center justify-center"
              >
                <Image
                  src={currentImage}
                  alt={`${product.name} full image view ${currentImageIndex + 1}`}
                  fill
                  priority
                  quality={95}
                  className="object-contain max-h-[85vh] max-w-[92vw]"
                  sizes="100vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Fixed Top-Layer Navigation Arrows */}
          {product.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                className="fixed left-4 sm:left-8 top-1/2 -translate-y-1/2 z-[10000] flex h-14 w-14 items-center justify-center rounded-full bg-black/80 text-white border border-white/30 shadow-2xl backdrop-blur-md transition-all hover:bg-gold hover:border-gold hover:scale-110 cursor-pointer pointer-events-auto"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 z-[10000] flex h-14 w-14 items-center justify-center rounded-full bg-black/80 text-white border border-white/30 shadow-2xl backdrop-blur-md transition-all hover:bg-gold hover:border-gold hover:scale-110 cursor-pointer pointer-events-auto"
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </>
          )}

          {/* Bottom Thumbnail Strip */}
          {product.images.length > 1 && (
            <div className="flex gap-2.5 overflow-x-auto p-2 max-w-xl justify-center z-30 pointer-events-auto">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                  }}
                  className={`relative h-16 w-12 shrink-0 overflow-hidden border-2 transition-all cursor-pointer pointer-events-auto ${
                    currentImageIndex === idx ? "border-gold scale-105" : "border-white/20 opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </button>
              ))}
            </div>
          )}
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  </>
);
}

export function ProductQuickView() {
  const quickViewProductId = useUIStore((state) => state.quickViewProductId);
  const closeQuickView = useUIStore((state) => state.closeQuickView);

  return (
    <Dialog open={!!quickViewProductId} onOpenChange={(open) => !open && closeQuickView()}>
      {quickViewProductId && (
        <ProductQuickViewContent
          key={quickViewProductId}
          productId={quickViewProductId}
          onClose={closeQuickView}
        />
      )}
    </Dialog>
  );
}
