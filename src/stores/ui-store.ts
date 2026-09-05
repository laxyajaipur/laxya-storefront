"use client";

import { create } from "zustand";

interface UIState {
  isSearchOpen: boolean;
  quickViewProductId: string | null;
  selectedGalleryTab: string;
  openSearch: () => void;
  closeSearch: () => void;
  openQuickView: (productId: string) => void;
  closeQuickView: () => void;
  setSelectedGalleryTab: (tab: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isSearchOpen: false,
  quickViewProductId: null,
  selectedGalleryTab: "all",
  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),
  openQuickView: (productId) => set({ quickViewProductId: productId }),
  closeQuickView: () => set({ quickViewProductId: null }),
  setSelectedGalleryTab: (tab) => set({ selectedGalleryTab: tab }),
}));
