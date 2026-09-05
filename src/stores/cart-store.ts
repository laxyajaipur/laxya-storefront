"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "@/types";

interface CartState {
  items: CartItem[];
  promoCode: string | null;
  discountPercent: number;
  isOpen: boolean;
  isCheckoutOpen: boolean;
  addItem: (productId: string, size: string) => void;
  removeItem: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  applyPromo: (code: string, discountPercent: number) => void;
  clearPromo: () => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  openCheckout: () => void;
  closeCheckout: () => void;
}

function itemKey(productId: string, size: string) {
  return `${productId}::${size}`;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      promoCode: null,
      discountPercent: 0,
      isOpen: false,
      isCheckoutOpen: false,

      addItem: (productId, size) => {
        const items = get().items;
        const existing = items.find(
          (item) => item.productId === productId && item.size === size,
        );

        if (existing) {
          set({
            items: items.map((item) =>
              item.productId === productId && item.size === size
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            ),
            isOpen: true,
          });
          return;
        }

        set({
          items: [...items, { productId, size, quantity: 1 }],
          isOpen: true,
        });
      },

      removeItem: (productId, size) => {
        set({
          items: get().items.filter(
            (item) => !(item.productId === productId && item.size === size),
          ),
        });
      },

      updateQuantity: (productId, size, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId, size);
          return;
        }

        set({
          items: get().items.map((item) =>
            item.productId === productId && item.size === size
              ? { ...item, quantity }
              : item,
          ),
        });
      },

      applyPromo: (code, discountPercent) => {
        set({ promoCode: code, discountPercent });
      },

      clearPromo: () => set({ promoCode: null, discountPercent: 0 }),

      clearCart: () => set({ items: [], promoCode: null, discountPercent: 0 }),

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      openCheckout: () => set({ isCheckoutOpen: true, isOpen: false }),
      closeCheckout: () => set({ isCheckoutOpen: false }),
    }),
    {
      name: "laxya-cart",
      partialize: (state) => ({
        items: state.items,
        promoCode: state.promoCode,
        discountPercent: state.discountPercent,
      }),
    },
  ),
);

export function getCartItemCount(items: CartItem[]) {
  return items.reduce((total, item) => total + item.quantity, 0);
}

export { itemKey as cartItemKey };
