import type { Currency } from "@/types";

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: "$",
  EUR: "€",
  INR: "₹",
  GBP: "£",
};

export const EXCHANGE_RATES: Record<Currency, number> = {
  USD: 1 / 83.5,
  EUR: 0.92 / 83.5,
  INR: 1,
  GBP: 0.79 / 83.5,
};

export const FREE_SHIPPING_THRESHOLD_USD = 1999;

export function convertFromUSD(amountUSD: number, currency: Currency): number {
  return amountUSD * EXCHANGE_RATES[currency];
}

export function formatPrice(amountUSD: number, currency: Currency): string {
  const converted = convertFromUSD(amountUSD, currency);
  const symbol = CURRENCY_SYMBOLS[currency];

  if (currency === "INR") {
    return `${symbol}${Math.round(converted).toLocaleString("en-IN")}`;
  }

  return `${symbol}${converted.toFixed(2)}`;
}
