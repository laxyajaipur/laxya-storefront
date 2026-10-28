import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions — LAXYA",
  description: "Terms and conditions governing the use of LAXYA (Operated by KHUSHI SAINI) and its online storefront.",
};

export default function TermsPage() {
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
              Legal Agreement
            </span>
            <h1 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-obsidian">
              Terms &amp; Conditions
            </h1>
            <p className="mt-3 text-xs uppercase tracking-widest text-obsidian/60">
              Last Updated: October 2026
            </p>
          </div>

          {/* Legal Identity Card */}
          <div className="bg-white border border-obsidian/10 p-6 rounded-sm mb-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-3">
              <Shield className="h-4 w-4" />
              <span>Merchant Identity &amp; Ownership</span>
            </div>
            <p className="text-xs leading-relaxed text-obsidian/85">
              This website (<span className="font-semibold text-obsidian">www.laxyajaipur.com</span>) is owned and operated by <span className="font-semibold text-obsidian">KHUSHI SAINI</span> under the trade name <span className="font-semibold text-obsidian">LAXYA</span>. Throughout the site, the terms &ldquo;we&rdquo;, &ldquo;us&rdquo;, and &ldquo;our&rdquo; refer to <span className="font-semibold text-obsidian">KHUSHI SAINI / LAXYA</span>. By visiting our site and/or purchasing from us, you engage in our &ldquo;Service&rdquo; and agree to be bound by the following terms and conditions.
            </p>
          </div>

          {/* Policy Content Sections */}
          <div className="space-y-8 text-xs leading-relaxed text-obsidian/80">
            <section className="bg-white/60 border border-obsidian/5 p-6 rounded-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-obsidian mb-3">
                1. General Conditions &amp; Eligibility
              </h2>
              <p>
                By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence. You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
              </p>
            </section>

            <section className="bg-white/60 border border-obsidian/5 p-6 rounded-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-obsidian mb-3">
                2. Products &amp; Handcrafted Variations
              </h2>
              <p>
                All our garments, kurtis, and co-ord sets are thoughtfully designed and crafted celebrating traditional Jaipur craftsmanship. Because each piece is artisanal, minor variations in block prints, weaves, dye shades, or textures are natural characteristics of handcrafted textiles and are not considered manufacturing defects.
              </p>
              <p className="mt-2">
                We have made every effort to display as accurately as possible the colors and images of our products. We cannot guarantee that your device&apos;s monitor display of any color will be completely exact.
              </p>
            </section>

            <section className="bg-white/60 border border-obsidian/5 p-6 rounded-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-obsidian mb-3">
                3. Pricing &amp; Billing
              </h2>
              <p>
                Prices for our products are subject to change without prior notice. All prices are stated in Indian Rupees (INR) inclusive of applicable taxes, unless otherwise indicated. We reserve the right at any time to modify or discontinue the Service (or any part thereof) without notice.
              </p>
            </section>

            <section className="bg-white/60 border border-obsidian/5 p-6 rounded-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-obsidian mb-3">
                4. Payment Processing &amp; Gateway Security
              </h2>
              <p>
                Online payments on LAXYA are securely processed through verified payment aggregators, including <span className="font-semibold text-obsidian">Cashfree Payments</span> (Cashfree Payments India Pvt. Ltd.), supporting UPI, credit cards, debit cards, net banking, and digital wallets. We do not store or capture any sensitive card or banking credentials on our servers.
              </p>
            </section>

            <section className="bg-white/60 border border-obsidian/5 p-6 rounded-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-obsidian mb-3">
                5. Accuracy of Billing &amp; Account Information
              </h2>
              <p>
                You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and payment details, so that we can complete your transactions and contact you as needed.
              </p>
            </section>

            <section className="bg-white/60 border border-obsidian/5 p-6 rounded-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-obsidian mb-3">
                6. Governing Law &amp; Jurisdiction
              </h2>
              <p>
                These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in <span className="font-semibold text-obsidian">Jaipur, Rajasthan, India</span>.
              </p>
            </section>

            <section className="bg-white/60 border border-obsidian/5 p-6 rounded-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-obsidian mb-3">
                7. Contact Information
              </h2>
              <p>
                Questions about the Terms of Service should be sent to us at:
              </p>
              <div className="mt-3 p-4 bg-alabaster border border-obsidian/10 rounded-xs space-y-1 text-obsidian font-medium">
                <p><span className="text-obsidian/60">Brand:</span> LAXYA</p>
                <p><span className="text-obsidian/60">Legal Entity:</span> KHUSHI SAINI</p>
                <p><span className="text-obsidian/60">Email:</span> <a href="mailto:laxya.jaipur08@gmail.com" className="text-gold underline">laxya.jaipur08@gmail.com</a></p>
                <p><span className="text-obsidian/60">Phone:</span> <a href="tel:+917340661295" className="text-gold underline">+91 7340661295</a></p>
                <p><span className="text-obsidian/60">Address:</span> Jaipur, Rajasthan, 302001, India</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
