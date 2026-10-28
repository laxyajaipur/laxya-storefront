import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin, Clock, ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — LAXYA",
  description: "Get in touch with LAXYA customer concierge. Email: laxya.jaipur08@gmail.com | Phone: +91 7340661295",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-alabaster text-obsidian flex flex-col justify-between">
      <Header />

      <main className="flex-1 pt-28 pb-16 px-4 sm:px-6 md:px-12">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb / Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-obsidian/60 hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Store
          </Link>

          {/* Page Header */}
          <div className="border-b border-obsidian/10 pb-8 mb-10">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
              Client Concierge
            </span>
            <h1 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-obsidian">
              Contact Us
            </h1>
            <p className="mt-3 text-sm text-obsidian/70 leading-relaxed max-w-2xl">
              Have questions regarding our handcrafted collections, your online order, bespoke sizing, or payment status? We are always delighted to assist you.
            </p>
          </div>

          {/* Official Business & Merchant Information Box */}
          <div className="bg-white border border-obsidian/10 p-6 sm:p-8 shadow-xs rounded-sm mb-12">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-4">
              <ShieldCheck className="h-4 w-4" />
              <span>Official Merchant Details</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 text-xs text-obsidian/85">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-obsidian/50 font-medium">Brand / Trade Name</p>
                <p className="font-semibold text-sm mt-0.5 text-obsidian">LAXYA</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-obsidian/50 font-medium">Legal Entity / Proprietor</p>
                <p className="font-semibold text-sm mt-0.5 text-obsidian">KHUSHI SAINI</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-obsidian/50 font-medium">Official Email</p>
                <a href="mailto:laxya.jaipur08@gmail.com" className="font-medium text-sm mt-0.5 text-obsidian hover:text-gold transition-colors block">
                  laxya.jaipur08@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-obsidian/50 font-medium">Contact Phone / WhatsApp</p>
                <a href="tel:+917340661295" className="font-medium text-sm mt-0.5 text-obsidian hover:text-gold transition-colors block">
                  +91 7340661295
                </a>
              </div>
              <div className="sm:col-span-2">
                <p className="text-[11px] uppercase tracking-wider text-obsidian/50 font-medium">Operating / Studio Address</p>
                <p className="font-medium text-sm mt-0.5 text-obsidian">
                  Jaipur, Rajasthan, 302001, India
                </p>
              </div>
            </div>
          </div>

          {/* Contact Details Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/80 border border-obsidian/10 p-6 rounded-sm">
              <Mail className="h-5 w-5 text-gold mb-3" />
              <h3 className="font-semibold text-sm text-obsidian uppercase tracking-wider">Email Support</h3>
              <p className="text-xs text-obsidian/60 mt-1 mb-3">For order inquiries, styling advice, or invoice copies.</p>
              <a
                href="mailto:laxya.jaipur08@gmail.com"
                className="text-xs font-semibold text-obsidian hover:text-gold transition-colors break-all"
              >
                laxya.jaipur08@gmail.com
              </a>
            </div>

            <div className="bg-white/80 border border-obsidian/10 p-6 rounded-sm">
              <Phone className="h-5 w-5 text-gold mb-3" />
              <h3 className="font-semibold text-sm text-obsidian uppercase tracking-wider">Phone &amp; WhatsApp</h3>
              <p className="text-xs text-obsidian/60 mt-1 mb-3">Direct assistance during business hours.</p>
              <a
                href="tel:+917340661295"
                className="text-xs font-semibold text-obsidian hover:text-gold transition-colors block"
              >
                +91 7340661295
              </a>
            </div>

            <div className="bg-white/80 border border-obsidian/10 p-6 rounded-sm">
              <Clock className="h-5 w-5 text-gold mb-3" />
              <h3 className="font-semibold text-sm text-obsidian uppercase tracking-wider">Concierge Hours</h3>
              <p className="text-xs text-obsidian/60 mt-1">Monday &ndash; Saturday</p>
              <p className="text-xs font-semibold text-obsidian mt-1">10:00 AM &ndash; 7:00 PM IST</p>
              <p className="text-[11px] text-obsidian/50 mt-1">Closed on Sundays &amp; National Holidays</p>
            </div>
          </div>

          {/* Quick Contact Form */}
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
