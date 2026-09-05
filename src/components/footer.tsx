"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      style={{ width: "16px", height: "16px" }}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      style={{ width: "16px", height: "16px" }}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function PinterestIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className}
      style={{ width: "16px", height: "16px" }}
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.63 11.16-.1-.95-.2-2.4.04-3.43.22-.93 1.4-5.93 1.4-5.93s-.36-.72-.36-1.77c0-1.66.96-2.9 2.16-2.9 1.02 0 1.51.77 1.51 1.68 0 1.03-.65 2.56-.99 3.98-.28 1.18.59 2.15 1.75 2.15 2.1 0 3.72-2.22 3.72-5.42 0-2.84-2.04-4.82-4.94-4.82-3.37 0-5.35 2.53-5.35 5.14 0 1.02.39 2.11.88 2.7.1.12.11.23.08.35-.1.38-.31 1.25-.35 1.42-.05.21-.18.26-.41.15-1.52-.7-2.47-2.92-2.47-4.7 0-3.83 2.78-7.35 8.03-7.35 4.21 0 7.49 3 7.49 7.01 0 4.19-2.64 7.56-6.3 7.56-1.23 0-2.39-.64-2.79-1.4l-.76 2.9c-.27 1.05-1 2.37-1.49 3.16C8.53 23.85 10.22 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z"/>
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    // Mock subscription
    setStatus("success");
    setEmail("");
  };

  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-alabaster border-t border-obsidian/5 pt-16 pb-8 md:pt-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Top Newsletter Section */}
        <div id="vip-club" className="grid md:grid-cols-12 gap-8 pb-12 border-b border-obsidian/5">
          <div className="md:col-span-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
              VIP Club Access
            </span>
            <h3 className="mt-3 font-serif text-2xl font-light tracking-wide text-obsidian sm:text-3xl">
              Join the World of Laxya
            </h3>
            <p className="mt-3 text-xs leading-relaxed tracking-wider text-obsidian/55 max-w-md">
              Subscribe to receive exclusive invitations to private seasonal launches, storytelling journals, and 10% off your initial bespoke purchase.
            </p>
          </div>
          
          <div className="md:col-span-6 flex flex-col justify-center">
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
                className="h-11 bg-white border border-obsidian/10 tracking-wide"
                required
              />
              <Button type="submit" variant="dark" className="h-11 px-6 uppercase tracking-[0.18em] shrink-0">
                {status === "success" ? <Check className="h-4 w-4" /> : "Subscribe"}
              </Button>
            </form>
            {status === "success" && (
              <p className="mt-3.5 text-xs text-gold font-medium tracking-wide">
                Welcome. You are now subscribed to the House of Laxya.
              </p>
            )}
            {status === "error" && (
              <p className="mt-3.5 text-xs text-red-600 tracking-wide">
                Please provide a valid email address.
              </p>
            )}
          </div>
        </div>

        {/* Mid Grid Section */}
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-12 py-12">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <Image
              src="/laxya-logo-transparent.png"
              alt="LAXYA."
              width={120}
              height={38}
              className="h-8 w-auto object-contain cursor-pointer hover:opacity-85 transition-opacity"
              onClick={handleScrollToTop}
            />
            <p className="mt-4 text-xs leading-relaxed tracking-wider text-obsidian/50 max-w-sm">
              Rooted in the timeless artisan heritage of Jaipur, Laxya crafts luxury kurtas, straight palazzo trousers, and premium linen co-ord sets designed for the modern global woman.
            </p>
            
            {/* Social Icons with hover micro-animations */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-full bg-white text-obsidian border border-obsidian/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:text-gold"
                aria-label="Instagram Page"
              >
                <InstagramIcon className="transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-full bg-white text-obsidian border border-obsidian/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:text-gold"
                aria-label="Pinterest Page"
              >
                <PinterestIcon className="text-obsidian group-hover:text-gold transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-full bg-white text-obsidian border border-obsidian/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:text-gold"
                aria-label="Facebook Page"
              >
                <FacebookIcon className="transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-3 md:col-start-6">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-obsidian">
              Collections
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-obsidian/60 tracking-wide">
              <li><span className="hover:text-gold transition-colors cursor-pointer">New Arrivals</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Bestsellers</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Limited Editions</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Bespoke Silk Series</span></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-obsidian">
              Bespoke Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-obsidian/60 tracking-wide">
              <li><span className="hover:text-gold transition-colors cursor-pointer">Bespoke Fitting</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Care Instructions</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Shipping &amp; Insurance</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Returns &amp; Exchanges</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="mt-8 pt-8 border-t border-obsidian/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[10px] text-obsidian/45 uppercase tracking-widest">
              &copy; {currentYear} House of Laxya Jaipur. All rights reserved.
            </p>
            <div className="flex gap-4 text-[10px] text-obsidian/40 uppercase tracking-widest">
              <span className="hover:text-gold transition-colors cursor-pointer">Privacy Policy</span>
              <span>•</span>
              <span className="hover:text-gold transition-colors cursor-pointer">Terms of Service</span>
              <span>•</span>
              <span className="hover:text-gold transition-colors cursor-pointer">Accessibility</span>
            </div>
          </div>

          {/* Payment Icons */}
          <div className="flex flex-wrap items-center gap-3 opacity-60">
            {["Visa", "Mastercard", "Amex", "Stripe", "UPI", "Apple Pay", "G Pay"].map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-obsidian border border-obsidian/10 bg-white"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
