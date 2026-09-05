"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Currency } from "@/types";

interface CurrencyState {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

export const useCurrencyStore = create<CurrencyState>()(
  persist(
    (set) => ({
      currency: "INR",
      setCurrency: (currency) => set({ currency }),
    }),
    { name: "laxya-currency" },
  ),
);
