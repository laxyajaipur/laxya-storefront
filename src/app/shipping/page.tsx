import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowLeft, Truck, Clock, MapPin, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy — LAXYA",
  description: "Shipping timelines, delivery information, and tracking details for orders placed on LAXYA (Operated by KHUSHI SAINI).",
};

export default function ShippingPage() {
  return (
    <div className="relative min-h-screen bg-alabaster text-obsidian flex flex-col justify-between">
      <Header />

      <main className="flex-1 pt-28 pb-16 px-4 sm:px-6 md:px-12">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-obsidian/60 hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Store
          </Link>

          {/* Page Header */}
          <div className="border-b border-obsidian/10 pb-8 mb-10">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
              Order Fulfillment
            </span>
            <h1 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-obsidian">
              Shipping &amp; Delivery Policy
            </h1>
            <p className="mt-3 text-xs uppercase tracking-widest text-obsidian/60">
              Last Updated: October 2026
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white border border-obsidian/10 p-5 rounded-sm">
              <Clock className="h-5 w-5 text-gold mb-2.5" />
              <h3 className="text-xs uppercase tracking-wider font-semibold text-obsidian">Dispatch Time</h3>
              <p className="text-xs text-obsidian/70 mt-1">Orders are packed &amp; dispatched within 24 to 48 hours from Jaipur.</p>
            </div>

            <div className="bg-white border border-obsidian/10 p-5 rounded-sm">
              <Truck className="h-5 w-5 text-gold mb-2.5" />
              <h3 className="text-xs uppercase tracking-wider font-semibold text-obsidian">Delivery Timeline</h3>
              <p className="text-xs text-obsidian/70 mt-1">3 to 7 business days across all serviceable pin codes in India.</p>
            </div>

            <div className="bg-white border border-obsidian/10 p-5 rounded-sm">
              <ShieldCheck className="h-5 w-5 text-gold mb-2.5" />
              <h3 className="text-xs uppercase tracking-wider font-semibold text-obsidian">Reliable Couriers</h3>
              <p className="text-xs text-obsidian/70 mt-1">Shipped via reputed express carriers with live SMS/email tracking.</p>
            </div>
          </div>

          {/* Policy Detail Sections */}
          <div className="space-y-8 text-xs leading-relaxed text-obsidian/80">
            <section className="bg-white/60 border border-obsidian/5 p-6 rounded-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-obsidian mb-3">
                1. Domestic Shipping within India
              </h2>
              <p>
                At <span className="font-semibold text-obsidian">LAXYA</span> (operated by <span className="font-semibold text-obsidian">KHUSHI SAINI</span>), each garment is inspected, hand-folded, and packaged with care in our Jaipur atelier before dispatch. We ship across India to over 25,000+ pin codes.
              </p>
              <ul className="list-disc list-inside mt-2.5 space-y-1.5 text-obsidian/75">
                <li><strong className="text-obsidian">Prepaid Orders:</strong> Enjoy complimentary standard express shipping across India on prepaid orders placed via Cashfree (UPI, Cards, Net Banking).</li>
                <li><strong className="text-obsidian">Cash on Delivery (COD):</strong> COD is available on select serviceable pin codes. A nominal convenience fee may apply at checkout.</li>
              </ul>
            </section>

            <section className="bg-white/60 border border-obsidian/5 p-6 rounded-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-obsidian mb-3">
                2. Order Tracking
              </h2>
              <p>
                As soon as your package is dispatched, you will receive an automated notification via email and/or SMS containing your Airway Bill (AWB) tracking number and a direct tracking link to follow your shipment in real-time.
              </p>
            </section>

            <section className="bg-white/60 border border-obsidian/5 p-6 rounded-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-obsidian mb-3">
                3. Delays &amp; Unforeseen Circumstances
              </h2>
              <p>
                While our courier partners strive to deliver within 3 to 7 business days, delivery times may be subject to minor delays during peak festival seasons, national holidays, extreme weather events, or regional logistical restrictions. We will proactively notify you should any unexpected delay arise.
              </p>
            </section>

            <section className="bg-white/60 border border-obsidian/5 p-6 rounded-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-obsidian mb-3">
                4. Damaged or Tampered Packaging
              </h2>
              <p>
                If you receive an outer package that appears significantly damaged, torn, or tampered with, please refuse the delivery or photograph the box before opening and immediately alert us at <a href="mailto:laxya.jaipur08@gmail.com" className="text-gold underline font-medium">laxya.jaipur08@gmail.com</a> or WhatsApp at <a href="tel:+917340661295" className="text-gold underline font-medium">+91 7340661295</a> within 24 hours of delivery.
              </p>
            </section>

            <section className="bg-white/60 border border-obsidian/5 p-6 rounded-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-obsidian mb-3">
                5. Shipping Inquiries &amp; Merchant Support
              </h2>
              <div className="p-4 bg-alabaster border border-obsidian/10 rounded-xs space-y-1 text-obsidian font-medium">
                <p><span className="text-obsidian/60">Brand:</span> LAXYA</p>
                <p><span className="text-obsidian/60">Legal Entity:</span> KHUSHI SAINI</p>
                <p><span className="text-obsidian/60">Email:</span> <a href="mailto:laxya.jaipur08@gmail.com" className="text-gold underline">laxya.jaipur08@gmail.com</a></p>
                <p><span className="text-obsidian/60">Phone:</span> <a href="tel:+917340661295" className="text-gold underline">+91 7340661295</a></p>
                <p><span className="text-obsidian/60">Dispatch Hub:</span> Jaipur, Rajasthan, 302001, India</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
