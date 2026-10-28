"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Check, Mail, Phone, MapPin } from "lucide-react";
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

export function Footer() {
  const router = useRouter();
  const pathname = usePathname();
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

  const handleLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
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
                className="h-11 bg-white border border-obsidian/20 tracking-wide text-obsidian font-medium"
                required
              />
              <Button type="submit" variant="dark" className="h-11 px-6 uppercase tracking-[0.18em] shrink-0 font-semibold">
                {status === "success" ? <Check className="h-4 w-4" /> : "Subscribe"}
              </Button>
            </form>
            {status === "success" && (
              <p className="mt-3.5 text-xs text-gold font-semibold tracking-wide">
                Welcome. You are now subscribed to LAXYA.
              </p>
            )}
            {status === "error" && (
              <p className="mt-3.5 text-xs text-red-600 tracking-wide font-medium">
                Please provide a valid email address.
              </p>
            )}
          </div>
        </div>

        {/* Mid Grid Section */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-12 py-12">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div onClick={handleLogoClick} className="cursor-pointer inline-block">
              <Image
                src="/laxya-logo-transparent.png"
                alt="LAXYA."
                width={120}
                height={38}
                className="h-8 w-auto object-contain hover:opacity-85 transition-opacity"
              />
            </div>
            <p className="mt-4 text-xs sm:text-sm leading-relaxed tracking-wider text-obsidian/85 font-medium max-w-sm">
              Rooted in the timeless artisan heritage of Jaipur, Laxya crafts luxury kurtas, straight palazzo trousers, and premium linen co-ord sets designed for the modern global woman.
            </p>
            <div className="mt-4 pt-4 border-t border-obsidian/5 text-[11px] text-obsidian/70 space-y-1">
              <p><span className="font-semibold text-obsidian">Trade Name:</span> LAXYA</p>
              <p><span className="font-semibold text-obsidian">Legal Entity / Proprietor:</span> KHUSHI SAINI</p>
            </div>
          </div>

          {/* Quick Links & Policies Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-obsidian">
              Policies &amp; Help
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-obsidian/85 font-medium tracking-wide">
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-gold transition-colors">
                  Shipping &amp; Delivery Policy
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-gold transition-colors">
                  Returns &amp; Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gold transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support & Contact Info */}
          <div id="contact" className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-obsidian">
              Customer Support
            </h4>
            <ul className="mt-4 space-y-3 text-xs text-obsidian/85 font-medium tracking-wide">
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <a href="mailto:laxya.jaipur08@gmail.com" className="hover:text-gold transition-colors break-all">
                  laxya.jaipur08@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                <a href="tel:+917340661295" className="hover:text-gold transition-colors">
                  +91 7340661295
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <span>Jaipur, Rajasthan, 302001, India</span>
              </li>
              <li className="text-[11px] text-obsidian/60 pt-1">
                Support Hours: Mon – Sat (10:00 AM – 7:00 PM IST)
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-obsidian">
              Follow us
            </h4>
            <div className="mt-4 flex flex-col items-start gap-3">
              <a
                href="https://www.instagram.com/laxya.jaipur"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 text-xs text-obsidian hover:text-gold transition-colors font-semibold group cursor-pointer"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-obsidian border border-obsidian/20 shadow-sm transition-transform group-hover:scale-110 group-hover:border-gold group-hover:text-gold">
                  <InstagramIcon className="h-4 w-4" />
                </div>
                <span className="tracking-wide">@laxya.jaipur</span>
              </a>
              <p className="text-[11px] text-obsidian/75 font-medium tracking-wide">
                Artisanal stories and styling tips from Jaipur.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="mt-8 pt-8 border-t border-obsidian/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <p className="text-[10px] text-obsidian/85 font-semibold uppercase tracking-widest">
              &copy; {currentYear} LAXYA. All rights reserved.
            </p>
            <p className="text-[10px] text-obsidian/60 tracking-wider">
              Legal Entity: KHUSHI SAINI &bull; Operating Address: Jaipur, Rajasthan, India
            </p>
            <div className="flex flex-wrap gap-3 text-[10px] text-obsidian/70 font-medium uppercase tracking-widest pt-1">
              <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-gold transition-colors">Terms &amp; Conditions</Link>
              <span>•</span>
              <Link href="/shipping" className="hover:text-gold transition-colors">Shipping</Link>
              <span>•</span>
              <Link href="/returns" className="hover:text-gold transition-colors">Returns &amp; Refunds</Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
            </div>
          </div>

          {/* Payment Icons */}
          <div className="flex flex-wrap items-center gap-2 opacity-75">
            {["Cashfree", "UPI", "Visa", "Mastercard", "Amex", "Net Banking", "COD"].map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-obsidian border border-obsidian/10 bg-white shadow-xs"
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
