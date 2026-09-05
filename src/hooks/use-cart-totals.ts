"use client";

import { getProductById } from "@/data/products";
import {
  convertFromUSD,
  FREE_SHIPPING_THRESHOLD_USD,
} from "@/lib/currency";
import { useCartStore } from "@/stores/cart-store";
import { useCurrencyStore } from "@/stores/currency-store";

export function useCartTotals() {
  const items = useCartStore((state) => state.items);
  const discountPercent = useCartStore((state) => state.discountPercent);
  const currency = useCurrencyStore((state) => state.currency);

  const subtotalUSD = items.reduce((total, item) => {
    const product = getProductById(item.productId);
    if (!product) return total;
    return total + product.priceUSD * item.quantity;
  }, 0);

  const discountUSD = subtotalUSD * (discountPercent / 100);
  const taxableUSD = subtotalUSD - discountUSD;
  const taxUSD = taxableUSD * 0.08;
  const shippingUSD =
    subtotalUSD >= FREE_SHIPPING_THRESHOLD_USD || subtotalUSD === 0 ? 0 : 12;
  const totalUSD = taxableUSD + taxUSD + shippingUSD;

  const freeShippingProgress = Math.min(
    100,
    (subtotalUSD / FREE_SHIPPING_THRESHOLD_USD) * 100,
  );

  return {
    subtotalUSD,
    discountUSD,
    taxUSD,
    shippingUSD,
    totalUSD,
    freeShippingProgress,
    freeShippingRemainingUSD: Math.max(
      0,
      FREE_SHIPPING_THRESHOLD_USD - subtotalUSD,
    ),
    subtotal: convertFromUSD(subtotalUSD, currency),
    discount: convertFromUSD(discountUSD, currency),
    tax: convertFromUSD(taxUSD, currency),
    shipping: convertFromUSD(shippingUSD, currency),
    total: convertFromUSD(totalUSD, currency),
    currency,
  };
}
