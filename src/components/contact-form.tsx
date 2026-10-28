"use client";

import React, { useState } from "react";
import { MessageCircle, Send, CheckCircle2, Loader2, AlertCircle, Mail } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [activationNotice, setActivationNotice] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        if (data.activationNeeded) {
          setActivationNotice(true);
        }
      } else {
        setErrorMsg(data.error || "Failed to send message. Please try WhatsApp or email directly.");
      }
    } catch (err: any) {
      setErrorMsg("Network error occurred. You can reach us directly on WhatsApp or email.");
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello LAXYA Concierge, I would like to inquire regarding an order/collection.\n\n` +
      (formData.name ? `Name: ${formData.name}\n` : "") +
      (formData.email ? `Email: ${formData.email}\n` : "") +
      (formData.message ? `Message: ${formData.message}\n` : "")
    );
    window.open(`https://wa.me/917340661295?text=${text}`, "_blank");
  };

  return (
    <div className="bg-white border border-obsidian/10 p-6 sm:p-10 rounded-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="font-serif text-2xl font-light text-obsidian">Send Us a Message</h2>
          <p className="text-xs text-obsidian/65 mt-1">
            Fill in your details below and your inquiry will be delivered to our official inbox.
          </p>
        </div>

        {/* Quick WhatsApp Button */}
        <button
          type="button"
          onClick={handleWhatsAppDirect}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shrink-0 cursor-pointer shadow-xs"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Chat on WhatsApp</span>
        </button>
      </div>

      {submitted ? (
        <div className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-sm space-y-4 animate-in fade-in duration-300">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm">Message Delivered to laxya.jaipur08@gmail.com!</p>
              {activationNotice ? (
                <div className="mt-2 text-xs text-emerald-800 space-y-1">
                  <p className="font-medium bg-emerald-100/80 p-2.5 rounded border border-emerald-300">
                    <strong>Action Required:</strong> A one-time activation confirmation was just sent to <strong>laxya.jaipur08@gmail.com</strong>. Please check your Gmail and click <em>&ldquo;Activate Form&rdquo;</em> to permanently enable instant delivery.
                  </p>
                </div>
              ) : (
                <p className="text-xs text-emerald-800 mt-1">
                  Thank you for reaching out to LAXYA. Your message has been routed to our team. We will review your inquiry and respond to <strong>{formData.email}</strong> shortly.
                </p>
              )}
            </div>
          </div>

          <div className="pt-3 border-t border-emerald-200 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-emerald-800 transition-colors cursor-pointer"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Also Message on WhatsApp (+91 7340661295)</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setActivationNotice(false);
                setFormData({ name: "", email: "", phone: "", message: "" });
              }}
              className="px-4 py-2 bg-white border border-emerald-300 text-emerald-900 text-xs font-medium uppercase tracking-wider rounded-xs hover:bg-emerald-100 transition-colors cursor-pointer"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded-sm flex items-center gap-2">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-obsidian mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                disabled={loading}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Khushi Saini"
                className="w-full h-11 px-3 bg-alabaster/50 border border-obsidian/20 text-xs focus:outline-hidden focus:border-gold disabled:opacity-50"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-obsidian mb-1">
                Your Email *
              </label>
              <input
                type="email"
                required
                disabled={loading}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. name@example.com"
                className="w-full h-11 px-3 bg-alabaster/50 border border-obsidian/20 text-xs focus:outline-hidden focus:border-gold disabled:opacity-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-obsidian mb-1">
              Phone / WhatsApp Number
            </label>
            <input
              type="tel"
              disabled={loading}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 7340661295"
              className="w-full h-11 px-3 bg-alabaster/50 border border-obsidian/20 text-xs focus:outline-hidden focus:border-gold disabled:opacity-50"
            />
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-obsidian mb-1">
              Message *
            </label>
            <textarea
              rows={4}
              required
              disabled={loading}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="How can we assist you with our collections or your order?"
              className="w-full p-3 bg-alabaster/50 border border-obsidian/20 text-xs focus:outline-hidden focus:border-gold resize-none disabled:opacity-50"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-8 py-3 bg-obsidian text-alabaster text-xs font-semibold uppercase tracking-[0.2em] hover:bg-gold transition-colors cursor-pointer disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send className="h-3.5 w-3.5" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            <span className="text-xs text-obsidian/50 font-medium">or</span>

            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="inline-flex items-center gap-2 px-6 py-3 border border-emerald-600 text-emerald-800 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-emerald-50 transition-colors cursor-pointer"
            >
              <MessageCircle className="h-4 w-4 text-emerald-600" />
              <span>Send via WhatsApp</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
