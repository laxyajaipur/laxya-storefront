export const PROMO_CODES: Record<string, { discountPercent: number; label: string }> = {
  LAXYA10: { discountPercent: 10, label: "10% off your order" },
  VIP20: { discountPercent: 20, label: "VIP 20% discount applied" },
  WELCOME: { discountPercent: 15, label: "Welcome offer — 15% off" },
};

export function validatePromoCode(code: string) {
  const normalized = code.trim().toUpperCase();
  const promo = PROMO_CODES[normalized];

  if (!promo) {
    return { valid: false as const, message: "Invalid promo code." };
  }

  return {
    valid: true as const,
    code: normalized,
    discountPercent: promo.discountPercent,
    message: promo.label,
  };
}
