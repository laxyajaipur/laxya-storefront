"use client";

import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cart-store";
import { useCurrencyStore } from "@/stores/currency-store";
import { useCartTotals } from "@/hooks/use-cart-totals";
import { getProductById } from "@/data/products";
import { formatPrice } from "@/lib/currency";
import {
  CreditCard,
  Lock,
  CheckCircle2,
  FileDown,
  ArrowRight,
  ArrowLeft,
  Loader2,
  QrCode
} from "lucide-react";
import type { ShippingAddress, CheckoutPayload, OrderReceipt, PaymentProvider } from "@/types";
import Image from "next/image";

export function CheckoutModal() {
  const isCheckoutOpen = useCartStore((state) => state.isCheckoutOpen);
  const closeCheckout = useCartStore((state) => state.closeCheckout);
  const items = useCartStore((state) => state.items);
  const promoCode = useCartStore((state) => state.promoCode);
  const clearCart = useCartStore((state) => state.clearCart);

  const currency = useCurrencyStore((state) => state.currency);

  // Steps: "shipping" | "payment" | "processing" | "success"
  const [step, setStep] = useState<"shipping" | "payment" | "processing" | "success">("shipping");
  const [paymentProvider, setPaymentProvider] = useState<PaymentProvider>("stripe");

  // Shipping Form State
  const [shipping, setShipping] = useState<ShippingAddress>({
    fullName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: currency === "INR" ? "India" : "United States",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Payment Form States (Stripe Mock)
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  // Payment Form States (Razorpay Mock)
  const [upiId, setUpiId] = useState("");

  const [receipt, setReceipt] = useState<OrderReceipt | null>(null);

  const validateShippingForm = () => {
    const newErrors: Record<string, string> = {};
    if (!shipping.fullName.trim()) newErrors.fullName = "Name is required";
    if (!shipping.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(shipping.email)) {
      newErrors.email = "Valid email is required";
    }
    if (!shipping.phone.trim() || shipping.phone.length < 8) {
      newErrors.phone = "Valid phone is required";
    }
    if (!shipping.addressLine1.trim()) newErrors.addressLine1 = "Address is required";
    if (!shipping.city.trim()) newErrors.city = "City is required";
    if (!shipping.state.trim()) newErrors.state = "State is required";
    if (!shipping.postalCode.trim()) newErrors.postalCode = "ZIP/Postal Code is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateShippingForm()) {
      setStep("payment");
    }
  };

  const handlePlaceOrder = async () => {
    // Validate payments first
    const paymentErrors: Record<string, string> = {};
    if (paymentProvider === "stripe") {
      if (cardNumber.replace(/\s/g, "").length !== 16) paymentErrors.card = "Invalid Card Number";
      if (!expiry.includes("/")) paymentErrors.expiry = "Invalid Expiry";
      if (cvc.length < 3) paymentErrors.cvc = "Invalid CVC";
    } else {
      if (!upiId.includes("@")) paymentErrors.upi = "Invalid UPI ID";
    }

    if (Object.keys(paymentErrors).length > 0) {
      setErrors(paymentErrors);
      return;
    }

    setErrors({});
    setStep("processing");

    // Construct Checkout Payload
    const payload: CheckoutPayload = {
      items,
      shipping,
      paymentProvider,
      currency,
      promoCode: promoCode || undefined,
    };

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data: OrderReceipt = await response.json();
        setReceipt(data);
        setStep("success");
        clearCart();
      } else {
        alert("Checkout failed. Please try again.");
        setStep("payment");
      }
    } catch (error) {
      console.error("Payment API Error", error);
      alert("Checkout failed due to connection error.");
      setStep("payment");
    }
  };

  const downloadInvoice = () => {
    if (!receipt) return;

    const invoiceText = `
LAXYA. - INVOICE
======================================
Order ID: ${receipt.orderId}
Date: ${new Date(receipt.createdAt).toLocaleString()}
Payment Method: ${receipt.paymentProvider.toUpperCase()}
Status: PAID (SSL Secure Protocol)
======================================

SHIPPING DETAILS:
Name: ${shipping.fullName}
Email: ${shipping.email}
Phone: ${shipping.phone}
Address: ${shipping.addressLine1}
         ${shipping.addressLine2 ? shipping.addressLine2 : ""}
City/State/Zip: ${shipping.city}, ${shipping.state} ${shipping.postalCode}
Country: ${shipping.country}

ITEMS:
--------------------------------------
${receipt.items
  .map(
    (item) =>
      `- ${item.name} (${item.size}) x${item.quantity} @ ${formatPrice(
        item.unitPrice,
        receipt.currency
      )} = ${formatPrice(item.lineTotal, receipt.currency)}`
  )
  .join("\n")}

SUMMARY:
--------------------------------------
Subtotal: ${formatPrice(receipt.subtotal, receipt.currency)}
Discount Applied: -${formatPrice(receipt.discount, receipt.currency)}
Tax: ${formatPrice(receipt.tax, receipt.currency)}
Shipping: ${receipt.shipping === 0 ? "FREE" : formatPrice(receipt.shipping, receipt.currency)}
--------------------------------------
TOTAL PAID: ${formatPrice(receipt.total, receipt.currency)}

======================================
Thank you for shopping with LAXYA.
For concierge support, please reach out to concierge@laxya.co
    `;

    const blob = new Blob([invoiceText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Laxya_Invoice_${receipt.orderId}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Dialog open={isCheckoutOpen} onOpenChange={(open) => !open && closeCheckout()}>
      <DialogContent className="max-w-3xl overflow-hidden p-0 bg-white md:rounded-none border-none">
        <div className="grid md:grid-cols-12 min-h-[500px]">
          
          {/* Form Side - 7 columns */}
          <div className="md:col-span-8 p-6 md:p-8 flex flex-col justify-between border-r border-obsidian/5">
            
            {/* Steps Navigation Display */}
            {step !== "processing" && step !== "success" && (
              <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider mb-6 pb-4 border-b border-obsidian/5 text-obsidian/40">
                <span className={step === "shipping" ? "text-gold" : "text-obsidian"}>1. Shipping</span>
                <ArrowRight className="h-3 w-3" />
                <span className={step === "payment" ? "text-gold" : ""}>2. Payment</span>
              </div>
            )}

            {/* STEP 1: SHIPPING */}
            {step === "shipping" && (
              <form onSubmit={handleShippingSubmit} className="space-y-4">
                <h3 className="font-serif text-xl font-light text-obsidian">Delivery Address</h3>
                
                <div className="space-y-3.5">
                  <div>
                    <Input
                      placeholder="Full Name"
                      value={shipping.fullName}
                      onChange={(e) => setShipping({ ...shipping, fullName: e.target.value })}
                      className={errors.fullName ? "border-red-500" : ""}
                    />
                    {errors.fullName && <p className="text-[10px] text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        value={shipping.email}
                        onChange={(e) => setShipping({ ...shipping, email: e.target.value })}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && <p className="text-[10px] text-red-500 mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <Input
                        placeholder="Phone Number"
                        value={shipping.phone}
                        onChange={(e) => setShipping({ ...shipping, phone: e.target.value })}
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && <p className="text-[10px] text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <Input
                      placeholder="Address Line 1"
                      value={shipping.addressLine1}
                      onChange={(e) => setShipping({ ...shipping, addressLine1: e.target.value })}
                      className={errors.addressLine1 ? "border-red-500" : ""}
                    />
                    {errors.addressLine1 && <p className="text-[10px] text-red-500 mt-1">{errors.addressLine1}</p>}
                  </div>

                  <Input
                    placeholder="Address Line 2 (Apartment, suite, etc.)"
                    value={shipping.addressLine2}
                    onChange={(e) => setShipping({ ...shipping, addressLine2: e.target.value })}
                  />

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <Input
                        placeholder="City"
                        value={shipping.city}
                        onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
                        className={errors.city ? "border-red-500" : ""}
                      />
                      {errors.city && <p className="text-[10px] text-red-500 mt-1">{errors.city}</p>}
                    </div>
                    <div>
                      <Input
                        placeholder="State"
                        value={shipping.state}
                        onChange={(e) => setShipping({ ...shipping, state: e.target.value })}
                        className={errors.state ? "border-red-500" : ""}
                      />
                      {errors.state && <p className="text-[10px] text-red-500 mt-1">{errors.state}</p>}
                    </div>
                    <div>
                      <Input
                        placeholder="ZIP Code"
                        value={shipping.postalCode}
                        onChange={(e) => setShipping({ ...shipping, postalCode: e.target.value })}
                        className={errors.postalCode ? "border-red-500" : ""}
                      />
                      {errors.postalCode && <p className="text-[10px] text-red-500 mt-1">{errors.postalCode}</p>}
                    </div>
                  </div>

                  <Input
                    placeholder="Country"
                    value={shipping.country}
                    onChange={(e) => setShipping({ ...shipping, country: e.target.value })}
                  />
                </div>

                <div className="pt-4 flex justify-end">
                  <Button type="submit" variant="dark" className="h-11 px-8 uppercase tracking-[0.2em]">
                    Continue to Payment <ArrowRight className="h-3.5 w-3.5 ml-2" />
                  </Button>
                </div>
              </form>
            )}

            {/* STEP 2: PAYMENT METHOD */}
            {step === "payment" && (
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-light text-obsidian">Select Payment Method</h3>
                  <button
                    onClick={() => setStep("shipping")}
                    className="flex items-center gap-1 text-[10px] uppercase font-semibold tracking-wider text-obsidian/50 hover:text-obsidian"
                  >
                    <ArrowLeft className="h-3 w-3" /> Back
                  </button>
                </div>

                {/* Provider Selector Tabs */}
                <div className="grid grid-cols-2 gap-3 border-b border-obsidian/5 pb-4">
                  <button
                    onClick={() => {
                      setPaymentProvider("stripe");
                      setErrors({});
                    }}
                    className={`flex items-center justify-center gap-2 h-11 border text-xs uppercase font-medium tracking-wider transition-all ${
                      paymentProvider === "stripe"
                        ? "border-obsidian bg-obsidian text-alabaster shadow-sm"
                        : "border-obsidian/10 text-obsidian/60 hover:border-obsidian"
                    }`}
                  >
                    <CreditCard className="h-4 w-4" /> Stripe (Global)
                  </button>
                  <button
                    onClick={() => {
                      setPaymentProvider("razorpay");
                      setErrors({});
                    }}
                    className={`flex items-center justify-center gap-2 h-11 border text-xs uppercase font-medium tracking-wider transition-all ${
                      paymentProvider === "razorpay"
                        ? "border-obsidian bg-obsidian text-alabaster shadow-sm"
                        : "border-obsidian/10 text-obsidian/60 hover:border-obsidian"
                    }`}
                  >
                    <QrCode className="h-4 w-4" /> Razorpay (INR / UPI)
                  </button>
                </div>

                {/* Form fields based on selected provider */}
                {paymentProvider === "stripe" ? (
                  <div className="space-y-3.5">
                    <p className="text-[10px] uppercase tracking-wider text-obsidian/50">Stripe Card Payment (Supports Apple Pay / Google Pay)</p>
                    <div>
                      <Input
                        placeholder="Card Number (16-digits)"
                        maxLength={19}
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value.replace(/[^0-9]/g, ""))}
                        className={errors.card ? "border-red-500" : ""}
                      />
                      {errors.card && <p className="text-[10px] text-red-500 mt-1">{errors.card}</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Input
                          placeholder="MM/YY"
                          maxLength={5}
                          value={expiry}
                          onChange={(e) => setExpiry(e.target.value)}
                          className={errors.expiry ? "border-red-500" : ""}
                        />
                        {errors.expiry && <p className="text-[10px] text-red-500 mt-1">{errors.expiry}</p>}
                      </div>
                      <div>
                        <Input
                          placeholder="CVC"
                          type="password"
                          maxLength={4}
                          value={cvc}
                          onChange={(e) => setCvc(e.target.value.replace(/[^0-9]/g, ""))}
                          className={errors.cvc ? "border-red-500" : ""}
                        />
                        {errors.cvc && <p className="text-[10px] text-red-500 mt-1">{errors.cvc}</p>}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3.5">
                    <p className="text-[10px] uppercase tracking-wider text-obsidian/50">Razorpay UPI Payment (UPI / NetBanking)</p>
                    <div>
                      <Input
                        placeholder="UPI ID (e.g., username@upi)"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        className={errors.upi ? "border-red-500" : ""}
                      />
                      {errors.upi && <p className="text-[10px] text-red-500 mt-1">{errors.upi}</p>}
                    </div>
                    <div className="rounded-md border border-gold/20 bg-gold/5 p-3.5 text-xs text-gold">
                      Indian debit/credit cards, netbanking, and mobile wallet systems are fully routed via secure Razorpay checkout portals.
                    </div>
                  </div>
                )}

                {/* Secure Seal */}
                <div className="flex items-center gap-2 text-[10px] text-obsidian/45 uppercase tracking-widest bg-alabaster p-3 border border-obsidian/5">
                  <Lock className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  <span>Secure SSL 256-Bit Encryption • PCI-DSS Certified</span>
                </div>

                <div className="pt-4 flex justify-end">
                  <Button onClick={handlePlaceOrder} variant="gold" className="h-11 px-10 uppercase tracking-[0.2em]">
                    Place Secure Order
                  </Button>
                </div>
              </div>
            )}

            {/* PROCESSING STATE */}
            {step === "processing" && (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <Loader2 className="h-10 w-10 text-gold animate-spin stroke-[1.5]" />
                <h3 className="font-serif text-lg font-light text-obsidian mt-6">Processing Transaction</h3>
                <p className="text-xs text-obsidian/50 max-w-xs mt-2 leading-relaxed tracking-wide">
                  Validating shipping details and routing payment through secure gateways. Please do not close this window.
                </p>
              </div>
            )}

            {/* STEP 3: SUCCESS STATE */}
            {step === "success" && receipt && (
              <div className="space-y-6">
                <div className="flex flex-col items-center text-center">
                  <CheckCircle2 className="h-12 w-12 text-gold stroke-[1.2] mb-4 animate-bounce" />
                  <h3 className="font-serif text-2xl font-light text-obsidian">Order Placed Successfully</h3>
                  <p className="text-xs text-obsidian/50 mt-1.5 uppercase tracking-widest font-medium">
                    Order ID: {receipt.orderId}
                  </p>
                </div>

                <div className="border border-obsidian/5 bg-alabaster/50 p-4.5 space-y-3.5 text-xs text-obsidian/75">
                  <div className="flex justify-between font-serif text-sm font-light text-obsidian border-b border-obsidian/5 pb-2">
                    <span>Summary Details</span>
                    <span className="capitalize">{receipt.paymentProvider}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Customer Name</span>
                    <span className="font-semibold text-obsidian">{shipping.fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Address</span>
                    <span className="text-right text-obsidian/60 max-w-[200px] line-clamp-2">
                      {shipping.addressLine1}, {shipping.city}
                    </span>
                  </div>
                  <div className="flex justify-between font-semibold border-t border-obsidian/5 pt-2 text-obsidian">
                    <span>Total Amount Paid</span>
                    <span className="text-gold font-bold">{formatPrice(receipt.total, receipt.currency)}</span>
                  </div>
                </div>

                <div className="flex gap-3 justify-center pt-2">
                  <Button variant="outline" onClick={downloadInvoice} className="h-11 px-6 uppercase tracking-wider text-[10px]">
                    <FileDown className="h-4 w-4 mr-2" /> Download Invoice
                  </Button>
                  <Button variant="dark" onClick={closeCheckout} className="h-11 px-8 uppercase tracking-wider text-[10px]">
                    Return to Shop
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Cart Items Summary Panel - 5 columns */}
          <div className="md:col-span-4 bg-alabaster p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h4 className="font-serif text-sm font-light uppercase tracking-[0.15em] text-obsidian/70 mb-6 pb-2 border-b border-obsidian/5">
                Order Summary
              </h4>

              {items.length === 0 && step === "success" && receipt ? (
                <div className="space-y-4 max-h-[260px] overflow-y-auto pr-1">
                  {receipt.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-xs py-2 border-b border-obsidian/5 last:border-0">
                      <div>
                        <p className="font-serif text-obsidian/85">{item.name}</p>
                        <p className="text-[10px] text-obsidian/45 mt-0.5">Size: {item.size} • Qty: {item.quantity}</p>
                      </div>
                      <span className="font-semibold text-gold">{formatPrice(item.lineTotal, receipt.currency)}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4 max-h-[260px] overflow-y-auto pr-1">
                  {items.map((item, idx) => {
                    const product = getProductById(item.productId);
                    if (!product) return null;

                    return (
                      <div key={idx} className="flex gap-3 items-center text-xs py-2 border-b border-obsidian/5 last:border-none">
                        <div className="relative h-14 w-10 shrink-0 overflow-hidden bg-white border border-obsidian/5">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="40px"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-serif text-obsidian/85 line-clamp-1">{product.name}</p>
                          <p className="text-[9px] text-obsidian/45 mt-0.5 uppercase tracking-wider">
                            Size: {item.size} • Qty: {item.quantity}
                          </p>
                        </div>
                        <span className="font-semibold text-gold">
                          {formatPrice(product.priceUSD * item.quantity, currency)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Calculations totals side */}
            <div className="mt-8 border-t border-obsidian/5 pt-4 space-y-2 text-xs text-obsidian/60">
              {step === "success" && receipt ? (
                <>
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatPrice(receipt.subtotal, receipt.currency)}</span>
                  </div>
                  {receipt.discount > 0 && (
                    <div className="flex justify-between text-gold">
                      <span>Discount</span>
                      <span>-{formatPrice(receipt.discount, receipt.currency)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Tax (8%)</span>
                    <span>{formatPrice(receipt.tax, receipt.currency)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{receipt.shipping === 0 ? "FREE" : formatPrice(receipt.shipping, receipt.currency)}</span>
                  </div>
                  <div className="border-t border-obsidian/5 pt-3.5 flex justify-between font-serif text-sm font-semibold text-obsidian">
                    <span>Total Paid</span>
                    <span className="text-gold font-bold">{formatPrice(receipt.total, receipt.currency)}</span>
                  </div>
                </>
              ) : (
                <RenderTotalsPanel symbol={currency === "INR" ? "₹" : "$"} />
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Subcomponent to extract totals easily
function RenderTotalsPanel({ symbol }: { symbol: string }) {
  const { subtotal, discount, tax, shipping, total } = useCartTotals();
  const discountPercent = useCartStore((state) => state.discountPercent);
  return (
    <>
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>{symbol}{subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
      </div>
      {discountPercent > 0 && (
        <div className="flex justify-between text-gold">
          <span>Discount ({discountPercent}%)</span>
          <span>-{symbol}{discount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
        </div>
      )}
      <div className="flex justify-between">
        <span>Tax (8%)</span>
        <span>{symbol}{tax.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
      </div>
      <div className="flex justify-between">
        <span>Shipping</span>
        <span>
          {shipping === 0 ? (
            <span className="text-gold uppercase tracking-wider font-semibold">Free</span>
          ) : (
            `${symbol}${shipping.toLocaleString(undefined, { minimumFractionDigits: 2 })}`
          )}
        </span>
      </div>
      <div className="border-t border-obsidian/5 pt-3.5 flex justify-between font-serif text-sm font-semibold text-obsidian">
        <span>Total Due</span>
        <span className="text-gold font-bold">
          {symbol}{total.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </span>
      </div>
    </>
  );
}
