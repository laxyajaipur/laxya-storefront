"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { products } from "@/data/products";

interface WishlistState {
  items: string[];
  toggleItem: (productId: string) => void;
  hasItem: (productId: string) => boolean;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],

      toggleItem: (productId) => {
        const items = get().items;
        const validExisting = items.filter((id) => products.some((p) => p.id === id));
        if (validExisting.includes(productId)) {
          set({ items: validExisting.filter((id) => id !== productId) });
          return;
        }
        set({ items: [...validExisting, productId] });
      },

      hasItem: (productId) => get().items.includes(productId),
    }),
    {
      name: "laxya-wishlist",
      onRehydrateStorage: () => (state) => {
        if (state) {
          const validIds = products.map((p) => p.id);
          const cleaned = Array.from(new Set(state.items)).filter((id) => validIds.includes(id));
          if (cleaned.length !== state.items.length) {
            state.items = cleaned;
          }
        }
      },
    },
  ),
);
