"use client";

import React, { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useCartStore } from "@/stores/cart-store";
import { useCurrencyStore } from "@/stores/currency-store";
import { useCartTotals } from "@/hooks/use-cart-totals";
import { getProductById } from "@/data/products";
import { formatPrice, CURRENCY_SYMBOLS } from "@/lib/currency";
import { validatePromoCode } from "@/lib/promo-codes";
import { Minus, Plus, Trash2, Tag, ShieldCheck, ShoppingBag, X } from "lucide-react";
import Image from "next/image";

export function CartDrawer() {
  const isOpen = useCartStore((state) => state.isOpen);
  const closeCart = useCartStore((state) => state.closeCart);
  const openCheckout = useCartStore((state) => state.openCheckout);
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const promoCode = useCartStore((state) => state.promoCode);
  const discountPercent = useCartStore((state) => state.discountPercent);
  const applyPromo = useCartStore((state) => state.applyPromo);
  const clearPromo = useCartStore((state) => state.clearPromo);

  const currency = useCurrencyStore((state) => state.currency);

  const {
    freeShippingProgress,
    freeShippingRemainingUSD,
    subtotal,
    discount,
    tax,
    shipping,
    total,
  } = useCartTotals();

  const [promoInput, setPromoInput] = useState("");
  const [promoError, setPromoError] = useState("");
  const [promoSuccess, setPromoSuccess] = useState("");

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError("");
    setPromoSuccess("");

    if (!promoInput.trim()) return;

    const result = validatePromoCode(promoInput);
    if (result.valid) {
      applyPromo(result.code, result.discountPercent);
      setPromoSuccess(result.message);
      setPromoInput("");
    } else {
      setPromoError(result.message);
    }
  };

  const handleRemovePromo = () => {
    clearPromo();
    setPromoSuccess("");
    setPromoError("");
  };

  const symbol = CURRENCY_SYMBOLS[currency];

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="flex flex-col h-full bg-white max-w-md w-full border-none">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-obsidian/5 p-6 shrink-0 pr-14">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-obsidian" strokeWidth={1.5} />
            <h3 className="font-serif text-lg tracking-wide text-obsidian">Your Trousseau</h3>
          </div>
        </div>

        {/* Progress Bar for Free Shipping */}
        {items.length > 0 && (
          <div className="bg-alabaster px-6 py-4 border-b border-obsidian/5 shrink-0">
            {freeShippingRemainingUSD > 0 ? (
              <p className="text-xs text-obsidian/75 tracking-wide">
                You are only <span className="font-medium text-gold">{formatPrice(freeShippingRemainingUSD, currency)}</span> away from complimentary global shipping.
              </p>
            ) : (
              <p className="text-xs text-gold font-medium tracking-wide">
                Your order qualifies for complimentary global shipping.
              </p>
            )}
            <div className="mt-2.5 h-1 w-full bg-obsidian/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gold transition-all duration-500 rounded-full"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* Cart items list */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-12 w-12 text-obsidian/20 stroke-1 mb-4" />
              <p className="font-serif text-base text-obsidian/70">Your cart is empty</p>
              <p className="text-xs text-obsidian/45 max-w-[240px] mt-2 leading-relaxed">
                Add beautiful garments from our curated collections to start building your look.
              </p>
              <button
                onClick={closeCart}
                className="mt-6 border border-obsidian bg-obsidian text-alabaster px-6 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-gold hover:border-gold hover:text-obsidian transition-colors"
              >
                Explore Works
              </button>
            </div>
          ) : (
            <div className="divide-y divide-obsidian/5">
              {items.map((item, idx) => {
                const product = getProductById(item.productId);
                if (!product) return null;

                return (
                  <div key={`${item.productId}-${item.size}-${idx}`} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                    {/* Item Image */}
                    <div className="relative h-24 w-18 shrink-0 overflow-hidden bg-alabaster border border-obsidian/5">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="72px"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-serif text-sm font-light text-obsidian leading-snug line-clamp-2">
                            {product.name}
                          </h4>
                          <button
                            onClick={() => removeItem(item.productId, item.size)}
                            className="text-obsidian/40 hover:text-red-600 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-4 w-4" strokeWidth={1.5} />
                          </button>
                        </div>
                        <p className="text-[10px] text-obsidian/50 uppercase tracking-widest mt-1">
                          Size: {item.size}
                        </p>
                      </div>

                      {/* Quantity Controls & Price */}
                      <div className="flex justify-between items-end mt-2">
                        {/* +/- controllers */}
                        <div className="flex items-center border border-obsidian/10 bg-alabaster">
                          <button
                            onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                            className="p-1.5 text-obsidian/60 hover:text-obsidian"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-2 text-xs font-semibold text-obsidian min-w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                            className="p-1.5 text-obsidian/60 hover:text-obsidian"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        {/* Converted Price display */}
                        <span className="text-xs font-semibold text-gold">
                          {formatPrice(product.priceUSD * item.quantity, currency)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer actions */}
        {items.length > 0 && (
          <div className="border-t border-obsidian/5 p-6 bg-alabaster shrink-0">
            {/* Promo code area */}
            <div className="mb-5">
              {promoCode ? (
                <div className="flex items-center justify-between border border-gold/30 bg-gold/5 px-3.5 py-2.5">
                  <div className="flex items-center gap-2 text-gold">
                    <Tag className="h-3.5 w-3.5" />
                    <span className="text-xs uppercase font-semibold tracking-wider">
                      {promoCode} ({discountPercent}% OFF)
                    </span>
                  </div>
                  <button
                    onClick={handleRemovePromo}
                    className="text-[10px] uppercase font-semibold tracking-wider text-obsidian/50 hover:text-obsidian"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter Promo Code"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    className="h-10 border border-obsidian/10 bg-white px-3 text-xs uppercase tracking-widest text-obsidian flex-1 outline-none focus:border-gold"
                  />
                  <button
                    type="submit"
                    className="h-10 px-4 bg-obsidian text-alabaster text-xs uppercase tracking-widest font-semibold hover:bg-gold hover:text-obsidian transition-colors"
                  >
                    Apply
                  </button>
                </form>
              )}
              {promoError && <p className="text-[10px] text-red-600 mt-2 tracking-wide">{promoError}</p>}
              {promoSuccess && <p className="text-[10px] text-gold mt-2 tracking-wide">{promoSuccess}</p>}
            </div>

            {/* Calculations */}
            <div className="space-y-2 text-xs text-obsidian/70">
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
              <div className="border-t border-obsidian/5 pt-3 flex justify-between text-sm font-semibold text-obsidian">
                <span>Total</span>
                <span>{symbol}{total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              </div>
            </div>

            {/* Checkout Actions */}
            <div className="mt-6 space-y-3">
              <button
                onClick={openCheckout}
                className="w-full h-12 bg-obsidian text-alabaster text-xs font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-gold hover:text-obsidian transition-all shadow-md active:scale-[0.99]"
              >
                <ShieldCheck className="h-4 w-4" /> Secure Checkout
              </button>
              <p className="text-[9px] text-center text-obsidian/45 tracking-widest uppercase">
                Secure SSL Checkout • PCI-DSS Compliant
              </p>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
