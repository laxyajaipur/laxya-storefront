export type Currency = "USD" | "EUR" | "INR" | "GBP";

export type ProductCategory =
  | "all"
  | "new-arrivals"
  | "bestsellers"
  | "limited-edition";

export interface Product {
  id: string;
  sku?: string;
  name: string;
  description: string;
  priceUSD: number;
  category: ProductCategory[];
  badge?: string;
  images: string[];
  sizes: string[];
  inStock: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
  size: string;
}

export interface ShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export type PaymentProvider = "stripe" | "razorpay";

export interface CheckoutPayload {
  items: CartItem[];
  shipping: ShippingAddress;
  paymentProvider: PaymentProvider;
  currency: Currency;
  promoCode?: string;
}

export interface OrderReceipt {
  orderId: string;
  items: Array<{
    name: string;
    quantity: number;
    size: string;
    unitPrice: number;
    lineTotal: number;
  }>;
  subtotal: number;
  discount: number;
  tax: number;
  shipping: number;
  total: number;
  currency: Currency;
  paymentProvider: PaymentProvider;
  createdAt: string;
}

export interface LookbookHotspot {
  id: string;
  productId: string;
  x: number;
  y: number;
  label: string;
}
