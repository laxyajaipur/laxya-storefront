import { CartItem } from "@/types";
import { getProductById } from "@/data/products";

export const SHOPIFY_STORE_DOMAIN =
  process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || "1tbkg0-f9.myshopify.com";

export const SHOPIFY_STOREFRONT_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || "a417a4bd0473a6526f9181b748c33500";

// Default fallback variant ID for items that haven't been assigned an individual Shopify variant yet
export const DEFAULT_SHOPIFY_VARIANT_ID = "67976479310193";

/**
 * Builds a direct Shopify Checkout Permalink:
 * Format: https://{store}.myshopify.com/cart/{variantId}:{quantity}
 */
export function buildShopifyCheckoutUrl(items: CartItem[]): string {
  if (!items || items.length === 0) {
    return `https://${SHOPIFY_STORE_DOMAIN}`;
  }

  const lineItems = items.map((item) => {
    const product = getProductById(item.productId);

    // Look up mapped variant for selected size, fallback to first variant or default demo variant
    const variantId =
      product?.shopifyVariantMap?.[item.size] ||
      product?.shopifyVariantMap?.[item.size.toUpperCase()] ||
      (product?.shopifyVariantMap ? Object.values(product.shopifyVariantMap)[0] : null) ||
      DEFAULT_SHOPIFY_VARIANT_ID;

    return `${variantId}:${item.quantity}`;
  });

  return `https://${SHOPIFY_STORE_DOMAIN}/cart/${lineItems.join(",")}`;
}

/**
 * Creates a dynamic checkout session via Shopify Storefront GraphQL API.
 * Returns the secure checkout URL directly from Shopify.
 */
export async function createShopifyCheckout(items: CartItem[]): Promise<string> {
  const lines = items.map((item) => {
    const product = getProductById(item.productId);
    const variantId =
      product?.shopifyVariantMap?.[item.size] ||
      product?.shopifyVariantMap?.[item.size.toUpperCase()] ||
      (product?.shopifyVariantMap ? Object.values(product.shopifyVariantMap)[0] : null) ||
      DEFAULT_SHOPIFY_VARIANT_ID;

    return {
      merchandiseId: `gid://shopify/ProductVariant/${variantId}`,
      quantity: item.quantity,
    };
  });

  const query = `
    mutation createCart($lines: [CartLineInput!]) {
      cartCreate(input: { lines: $lines }) {
        cart {
          id
          checkoutUrl
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  try {
    const response = await fetch(`https://${SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query,
        variables: { lines },
      }),
    });

    const json = await response.json();
    const checkoutUrl = json.data?.cartCreate?.cart?.checkoutUrl;

    if (checkoutUrl) {
      return checkoutUrl;
    }
  } catch (error) {
    console.warn("Storefront API cartCreate failed, falling back to permalink", error);
  }

  // Graceful fallback to cart permalink
  return buildShopifyCheckoutUrl(items);
}
