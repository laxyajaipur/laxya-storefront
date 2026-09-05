import { NextResponse } from "next/server";
import { products } from "@/data/products";
import { validatePromoCode } from "@/lib/promo-codes";
import { convertFromUSD, FREE_SHIPPING_THRESHOLD_USD } from "@/lib/currency";
import type { CheckoutPayload, OrderReceipt } from "@/types";

export async function POST(request: Request) {
  try {
    const body: CheckoutPayload = await request.json();

    const { items, shipping, paymentProvider, currency, promoCode } = body;

    // 1. Basic validation
    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "Cart is empty" },
        { status: 400 }
      );
    }
    if (!shipping || !shipping.fullName || !shipping.email || !shipping.addressLine1) {
      return NextResponse.json(
        { error: "Invalid shipping details" },
        { status: 400 }
      );
    }

    // 2. Compute pricing details (matching frontend useCartTotals)
    let subtotalUSD = 0;
    const itemsReceipt: OrderReceipt["items"] = [];

    for (const item of items) {
      const product = products.find((p) => p.id === item.productId);
      if (!product) {
        return NextResponse.json(
          { error: `Product not found: ${item.productId}` },
          { status: 400 }
        );
      }

      const itemSubtotalUSD = product.priceUSD * item.quantity;
      subtotalUSD += itemSubtotalUSD;

      const unitPriceConverted = convertFromUSD(product.priceUSD, currency);
      const lineTotalConverted = convertFromUSD(itemSubtotalUSD, currency);

      itemsReceipt.push({
        name: product.name,
        quantity: item.quantity,
        size: item.size,
        unitPrice: unitPriceConverted,
        lineTotal: lineTotalConverted,
      });
    }

    // Determine Discount
    let discountPercent = 0;
    if (promoCode) {
      const promoResult = validatePromoCode(promoCode);
      if (promoResult.valid) {
        discountPercent = promoResult.discountPercent;
      }
    }

    const discountUSD = subtotalUSD * (discountPercent / 100);
    const taxableUSD = subtotalUSD - discountUSD;
    const taxUSD = taxableUSD * 0.08;
    const shippingUSD =
      subtotalUSD >= FREE_SHIPPING_THRESHOLD_USD || subtotalUSD === 0 ? 0 : 12;
    const totalUSD = taxableUSD + taxUSD + shippingUSD;

    // Convert values to target currency
    const subtotalConverted = convertFromUSD(subtotalUSD, currency);
    const discountConverted = convertFromUSD(discountUSD, currency);
    const taxConverted = convertFromUSD(taxUSD, currency);
    const shippingConverted = convertFromUSD(shippingUSD, currency);
    const totalConverted = convertFromUSD(totalUSD, currency);

    // Generate Order ID (Format: LX-YYYY-ZZZZ)
    const randomBlock1 = Math.floor(1000 + Math.random() * 9000);
    const randomBlock2 = Math.floor(1000 + Math.random() * 9000);
    const orderId = `LX-${randomBlock1}-${randomBlock2}`;

    // 3. Construct Order Receipt
    const receipt: OrderReceipt = {
      orderId,
      items: itemsReceipt,
      subtotal: subtotalConverted,
      discount: discountConverted,
      tax: taxConverted,
      shipping: shippingConverted,
      total: totalConverted,
      currency,
      paymentProvider,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(receipt);
  } catch (error) {
    console.error("API Checkout route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
