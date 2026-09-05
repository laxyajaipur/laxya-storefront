"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { heroImages, heroSlides } from "@/data/products";
import Image from "next/image";

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
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

  const currentSlide = heroSlides[currentImageIndex] || { src: heroImages[currentImageIndex], objectPosition: "object-center" };

  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-alabaster">
      {/* Background Images with Cross-fade */}
      <div className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src={currentSlide.src}
              alt="Laxya Luxury Collection"
              fill
              priority
              quality={95}
              className={`object-cover ${currentSlide.objectPosition}`}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        {/* Soft elegant text gradient to ensure readability while preserving image clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-alabaster/90 via-alabaster/40 to-transparent w-full md:w-3/5 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-alabaster/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 md:px-12 z-10">
        <div className="max-w-2xl text-left">
          {/* Animated Header Badge */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block text-[10px] font-semibold uppercase tracking-[0.25em] text-gold"
          >
            Jaipur Artisanal Craftsmanship
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 font-serif text-4xl font-light leading-[1.15] tracking-wide text-obsidian sm:text-5xl md:text-6xl"
          >
            Elegance Redefined <br />
            by <span className="font-normal italic">Laxya</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 max-w-lg text-sm leading-relaxed tracking-wide text-obsidian/75 sm:text-base md:text-lg"
          >
            Handcrafted luxury designed for the modern connoisseur. Rooted in heritage, styled for today.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button
              variant="gold"
              onClick={() => scrollToSection("gallery")}
              className="px-8 py-3 text-xs tracking-[0.2em] font-medium shadow-md hover:shadow-lg transition-all"
            >
              Explore Collection
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("lookbook")}
              className="px-8 py-3 text-xs tracking-[0.2em] font-medium"
            >
              Our Story
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-8 right-6 z-10 flex gap-2 md:right-12">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
              index === currentImageIndex ? "w-6 bg-gold" : "w-1.5 bg-obsidian/20 hover:bg-obsidian/45"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
