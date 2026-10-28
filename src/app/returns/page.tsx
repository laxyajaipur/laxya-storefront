import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowLeft, RefreshCw, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Returns, Refunds & Cancellation Policy — LAXYA",
  description: "Comprehensive Return, Exchange, and Refund Policy for LAXYA (Operated by KHUSHI SAINI).",
};

export default function ReturnsPage() {
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
              Hassle-Free Concierge
            </span>
            <h1 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-obsidian">
              Returns &amp; Refund Policy
            </h1>
            <p className="mt-3 text-xs uppercase tracking-widest text-obsidian/60">
              Last Updated: October 2026
            </p>
          </div>

          {/* Key Summary Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white border border-obsidian/10 p-5 rounded-sm">
              <RefreshCw className="h-5 w-5 text-gold mb-2.5" />
              <h3 className="text-xs uppercase tracking-wider font-semibold text-obsidian">7-Day Window</h3>
              <p className="text-xs text-obsidian/70 mt-1">Initiate a return or size exchange request within 7 days of package delivery.</p>
            </div>

            <div className="bg-white border border-obsidian/10 p-5 rounded-sm">
              <CheckCircle2 className="h-5 w-5 text-gold mb-2.5" />
              <h3 className="text-xs uppercase tracking-wider font-semibold text-obsidian">Fast Refunds</h3>
              <p className="text-xs text-obsidian/70 mt-1">Approved refunds are credited to original payment source within 5&ndash;7 business days.</p>
            </div>

            <div className="bg-white border border-obsidian/10 p-5 rounded-sm">
              <AlertCircle className="h-5 w-5 text-gold mb-2.5" />
              <h3 className="text-xs uppercase tracking-wider font-semibold text-obsidian">Easy Cancellation</h3>
              <p className="text-xs text-obsidian/70 mt-1">Cancel your order within 12 hours of placement before parcel dispatch.</p>
            </div>
          </div>

          {/* Policy Detail Sections */}
          <div className="space-y-8 text-xs leading-relaxed text-obsidian/80">
            <section className="bg-white/60 border border-obsidian/5 p-6 rounded-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-obsidian mb-3">
                1. Return &amp; Exchange Eligibility
              </h2>
              <p>
                At <span className="font-semibold text-obsidian">LAXYA</span> (operated by <span className="font-semibold text-obsidian">KHUSHI SAINI</span>), customer satisfaction is paramount. If you are not completely satisfied with the fit or style of your purchase, you may initiate a return or exchange under the following guidelines:
              </p>
              <ul className="list-disc list-inside mt-2.5 space-y-1.5 text-obsidian/75">
                <li>Item(s) must be unworn, unwashed, unaltered, and free from perfume, makeup, or deodorant marks.</li>
                <li>All original brand tags, labels, and protective packaging must remain intact.</li>
                <li>Return or exchange request must be submitted within <strong className="text-obsidian">7 calendar days</strong> from the delivery timestamp.</li>
                <li>Customized, tailored, or final sale archive items are exempt from standard returns unless received damaged or incorrect.</li>
              </ul>
            </section>

            <section className="bg-white/60 border border-obsidian/5 p-6 rounded-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-obsidian mb-3">
                2. How to Initiate a Return or Size Exchange
              </h2>
              <p>
                To request an exchange or return:
              </p>
              <ol className="list-decimal list-inside mt-2 space-y-2 text-obsidian/75">
                <li>Email us at <a href="mailto:laxya.jaipur08@gmail.com" className="text-gold underline font-medium">laxya.jaipur08@gmail.com</a> or WhatsApp <a href="tel:+917340661295" className="text-gold underline font-medium">+91 7340661295</a> with your Order ID and reason for return/exchange.</li>
                <li>Our team will verify the details and schedule a reverse courier pickup from your delivery address.</li>
                <li>Once the returned package reaches our Jaipur atelier and passes quality inspection, your exchange garment or refund will be processed promptly.</li>
              </ol>
            </section>

            <section className="bg-white/60 border border-obsidian/5 p-6 rounded-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-obsidian mb-3">
                3. Refund Mode &amp; Timelines
              </h2>
              <p>
                Once your return is inspected and approved by our quality control team:
              </p>
              <ul className="list-disc list-inside mt-2.5 space-y-1.5 text-obsidian/75">
                <li><strong className="text-obsidian">Prepaid Orders (Cards, Net Banking, UPI):</strong> Refunds are initiated through the <span className="font-semibold text-obsidian">Cashfree Payment Gateway</span> directly to the original bank account/card. Funds typically reflect within <strong className="text-obsidian">5 to 7 business days</strong> depending on your bank&apos;s processing cycle.</li>
                <li><strong className="text-obsidian">Cash on Delivery (COD) Orders:</strong> Refunds will be transferred via direct NEFT/IMPS bank transfer or UPI. You will be requested to provide bank details securely to our support team.</li>
              </ul>
            </section>

            <section className="bg-white/60 border border-obsidian/5 p-6 rounded-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-obsidian mb-3">
                4. Order Cancellation Policy
              </h2>
              <p>
                You may request cancellation of an order within <strong className="text-obsidian">12 hours of placing the order</strong>, provided the parcel has not yet been dispatched from our facility.
              </p>
              <p className="mt-2">
                Upon successful cancellation, a 100% full refund will be reversed to your original payment method within 3 to 5 business days. Once an order has been dispatched, it cannot be cancelled but can be returned upon delivery following our 7-day return policy.
              </p>
            </section>

            <section className="bg-white/60 border border-obsidian/5 p-6 rounded-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-obsidian mb-3">
                5. Concierge &amp; Merchant Contact
              </h2>
              <div className="p-4 bg-alabaster border border-obsidian/10 rounded-xs space-y-1 text-obsidian font-medium">
                <p><span className="text-obsidian/60">Brand:</span> LAXYA</p>
                <p><span className="text-obsidian/60">Legal Entity:</span> KHUSHI SAINI</p>
                <p><span className="text-obsidian/60">Email:</span> <a href="mailto:laxya.jaipur08@gmail.com" className="text-gold underline">laxya.jaipur08@gmail.com</a></p>
                <p><span className="text-obsidian/60">Phone:</span> <a href="tel:+917340661295" className="text-gold underline">+91 7340661295</a></p>
                <p><span className="text-obsidian/60">Studio Address:</span> Jaipur, Rajasthan, 302001, India</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
