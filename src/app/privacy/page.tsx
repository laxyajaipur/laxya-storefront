import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowLeft, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — LAXYA",
  description: "Privacy policy for LAXYA (Operated by KHUSHI SAINI). Learn how we protect and handle your personal data.",
};

export default function PrivacyPage() {
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
              Data Protection
            </span>
            <h1 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-obsidian">
              Privacy Policy
            </h1>
            <p className="mt-3 text-xs uppercase tracking-widest text-obsidian/60">
              Last Updated: October 2026
            </p>
          </div>

          {/* Intro Card */}
          <div className="bg-white border border-obsidian/10 p-6 rounded-sm mb-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-3">
              <Lock className="h-4 w-4" />
              <span>Our Commitment to Your Privacy</span>
            </div>
            <p className="text-xs leading-relaxed text-obsidian/85">
              At <span className="font-semibold text-obsidian">LAXYA</span> (operated by <span className="font-semibold text-obsidian">KHUSHI SAINI</span>), we value your privacy and trust. This Privacy Policy details how we collect, utilize, and protect your personal information when you browse or make a purchase from <span className="font-semibold text-obsidian">www.laxyajaipur.com</span>.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8 text-xs leading-relaxed text-obsidian/80">
            <section className="bg-white/60 border border-obsidian/5 p-6 rounded-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-obsidian mb-3">
                1. Information We Collect
              </h2>
              <p>
                When you visit our site, browse collections, or place an order, we collect certain information to fulfill our services:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1.5 text-obsidian/75">
                <li><strong className="text-obsidian">Personal Identifiers:</strong> Name, shipping address, billing address, email address, and phone number.</li>
                <li><strong className="text-obsidian">Payment Details:</strong> Transaction identifiers and payment status (card details and UPI credentials are handled securely by PCI-DSS compliant payment gateways like Cashfree).</li>
                <li><strong className="text-obsidian">Device &amp; Usage Information:</strong> IP address, browser type, time zone, and session data to optimize your browsing experience.</li>
              </ul>
            </section>

            <section className="bg-white/60 border border-obsidian/5 p-6 rounded-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-obsidian mb-3">
                2. How We Use Your Information
              </h2>
              <p>
                We use the personal information collected to:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1.5 text-obsidian/75">
                <li>Fulfill orders, process payments, and arrange dispatch and delivery via our courier partners.</li>
                <li>Communicate with you regarding order confirmations, tracking details, and client concierge inquiries.</li>
                <li>Screen orders for potential risk, fraud, or chargebacks.</li>
                <li>Send curated updates or promotional newsletters (only when you have explicitly opted in).</li>
              </ul>
            </section>

            <section className="bg-white/60 border border-obsidian/5 p-6 rounded-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-obsidian mb-3">
                3. Third-Party Service Providers &amp; Payment Gateway
              </h2>
              <p>
                We do not sell, rent, or trade your personal information. We only share necessary data with trusted third parties to facilitate our services:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1.5 text-obsidian/75">
                <li><strong className="text-obsidian">Payment Aggregators:</strong> We use <span className="font-semibold text-obsidian">Cashfree Payments</span> to securely process online transactions. Payment data is encrypted via end-to-end SSL encryption adhering to strict PCI-DSS standards.</li>
                <li><strong className="text-obsidian">Logistics Partners:</strong> We share your delivery name, address, and phone number with certified courier companies (e.g. Bluedart, Delhivery, DTDC) to deliver your parcel.</li>
              </ul>
            </section>

            <section className="bg-white/60 border border-obsidian/5 p-6 rounded-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-obsidian mb-3">
                4. Data Security
              </h2>
              <p>
                We maintain appropriate physical, electronic, and procedural safeguards to protect your personal information against unauthorized access, disclosure, or destruction. All transmitted payment data is protected using Secure Sockets Layer (SSL) technology.
              </p>
            </section>

            <section className="bg-white/60 border border-obsidian/5 p-6 rounded-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-obsidian mb-3">
                5. Grievance Officer &amp; Contact
              </h2>
              <p>
                In accordance with the Information Technology Act 2000 and rules made thereunder, the contact details of the Grievance Officer are provided below:
              </p>
              <div className="mt-3 p-4 bg-alabaster border border-obsidian/10 rounded-xs space-y-1 text-obsidian font-medium">
                <p><span className="text-obsidian/60">Grievance Officer:</span> KHUSHI SAINI</p>
                <p><span className="text-obsidian/60">Brand:</span> LAXYA</p>
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
