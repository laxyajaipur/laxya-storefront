import type { LookbookHotspot, Product } from "@/types";

export const products: Product[] = [
  {
    id: "jaipur-rose-kurta",
    sku: "LX-SHR-001",
    name: "Peach Sharara Set",
    description:
      "Elegantly tailored peach short kurta with coordinated flared palazzo pants and gold zari border dupatta.",
    priceUSD: 2999,
    category: ["new-arrivals", "bestsellers", "sharara-sets", "festive-sets"],
    badge: "New",
    images: [
      "/products/LX-SHR-001/01-front.JPG",
      "/products/LX-SHR-001/02-side.JPG",
      "/products/LX-SHR-001/03-detail.JPG",
      "/products/LX-SHR-001/04-full.JPG",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "midnight-coord-set",
    sku: "LX-PRN-002",
    name: "Printed Paisley Co-ord Set",
    description:
      "Paisley printed crop top with high-waisted flared trousers, crafted from premium linen-cotton.",
    priceUSD: 2499,
    category: ["limited-edition", "bestsellers", "co-ord-sets"],
    badge: "Limited",
    images: [
      "/products/LX-PRN-002/01-front.JPG",
      "/products/LX-PRN-002/02-back.JPG",
      "/products/LX-PRN-002/03-side.JPG",
      "/products/LX-PRN-002/04-side.JPG",
    ],
    sizes: ["S", "M", "L"],
    inStock: true,
  },
  {
    id: "saffron-embroidered-kurta",
    sku: "LX-SLK-003",
    name: "Sky Blue Silk Suit Set",
    description:
      "Sleeveless sky blue kurta with coordinated straight pants and matching organza dupatta.",
    priceUSD: 2799,
    category: ["new-arrivals", "cotton-kurta-sets", "short-kurtis"],
    badge: "Bestseller",
    images: [
      "/products/LX-SLK-003/01-front.JPG",
      "/products/LX-SLK-003/02-back.JPG",
      "/products/LX-SLK-003/03-detail.JPG",
      "/products/LX-SLK-003/04-side.JPG",
      "/products/LX-SLK-003/05-back-zoom.JPG",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "mehrangarh-kurta",
    sku: "LX-CRM-004",
    name: "Crimson Anarkali Dress",
    description:
      "Stunning floor-length festive dress in vibrant crimson pink, with contrasting light pink dupatta.",
    priceUSD: 2399,
    category: ["new-arrivals", "bestsellers", "limited-edition", "anarkalis", "festive-sets"],
    badge: "Exclusive",
    images: [
      "/products/LX-CRM-004/01-front.JPG",
      "/products/LX-CRM-004/02-detail.JPG",
      "/products/LX-CRM-004/03-front-close.JPG",
      "/products/LX-CRM-004/04-front-detail.JPG",
      "/products/LX-CRM-004/05-front-zoom.JPG",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "jaipur-crop-top-set",
    sku: "LX-CRP-005",
    name: "Jaipur Floral Crop Top & Skirt Set",
    description:
      "Exquisite hand-printed crop top paired with a flowing skirt silhouette, crafted in Jaipur with intricate detailing.",
    priceUSD: 2699,
    category: ["new-arrivals", "co-ord-sets"],
    badge: "New",
    images: [
      "/products/LX-CRP-005/front.jpg",
      "/products/LX-CRP-005/side.jpg",
      "/products/LX-CRP-005/back.jpg",
      "/products/LX-CRP-005/full.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "mustard-festive-suit",
    sku: "LX-MUS-006",
    name: "Mustard Silk Festive Suit Set",
    description:
      "Regal mustard yellow festive outfit adorned with handcrafted embroidery and paired with an ornate dupatta.",
    priceUSD: 3199,
    category: ["festive-sets", "new-arrivals", "bestsellers"],
    badge: "Festive",
    images: [
      "/products/LX-MUS-006/front.jpg",
      "/products/LX-MUS-006/side.jpg",
      "/products/LX-MUS-006/back.jpg",
      "/products/LX-MUS-006/full.jpg",
    ],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "botanical-coord-set",
    sku: "LX-BCS-007",
    name: "Sage Green Botanical Co-ord Set",
    description:
      "Contemporary sage green printed matching co-ord set featuring tailored pants and refined neckline detail.",
    priceUSD: 2599,
    category: ["co-ord-sets", "new-arrivals"],
    badge: "Popular",
    images: [
      "/products/LX-BCS-007/01front.jpg",
      "/products/LX-BCS-007/02front.jpg",
      "/products/LX-BCS-007/side.jpg",
      "/products/LX-BCS-007/01full.jpg",
      "/products/LX-BCS-007/02full.jpg",
    ],
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
  },
  {
    id: "blush-cotton-kurta-set",
    sku: "LX-BSS-008",
    name: "Blush Pink Cotton Kurta Set",
    description:
      "Breezy pure cotton straight kurta in soft blush tones with matching palazzo pants and delicate accents.",
    priceUSD: 2299,
    category: ["cotton-kurta-sets", "new-arrivals"],
    badge: "Essential",
    images: [
      "/products/LX-BSS-008/front.jpg",
      "/products/LX-BSS-008/side.jpg",
      "/products/LX-BSS-008/back.jpg",
      "/products/LX-BSS-008/full.jpg",
      "/products/LX-BSS-008/o1side.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "block-print-cotton-set",
    sku: "LX-BPS-009",
    name: "Indigo Block Print Cotton Suit Set",
    description:
      "Traditional hand block printed cotton suit set crafted with breathable weave and intricate artisan neck detailing.",
    priceUSD: 2399,
    category: ["cotton-kurta-sets", "new-arrivals"],
    badge: "Handcrafted",
    images: [
      "/products/LX-BPS-009/front.jpg",
      "/products/LX-BPS-009/side.jpg",
      "/products/LX-BPS-009/01full.jpg",
      "/products/LX-BPS-009/02full.jpg",
      "/products/LX-BPS-009/fabric.jpg",
    ],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "powder-blue-cotton-set",
    sku: "LX-BPC-010",
    name: "Powder Blue Chanderi Kurta Set",
    description:
      "Serene powder blue pure cotton ensemble featuring subtle hand embroidery and an airy graceful silhouette.",
    priceUSD: 2499,
    category: ["cotton-kurta-sets", "new-arrivals"],
    badge: "New",
    images: [
      "/products/LX-BPC-010/front.jpg",
      "/products/LX-BPC-010/01full.jpg",
      "/products/LX-BPC-010/02full.jpg",
      "/products/LX-BPC-010/03full.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "ivory-white-kurta-set",
    sku: "LX-WKS-011",
    name: "Ivory Woven Cotton Kurta Set",
    description:
      "Pristine ivory woven pure cotton outfit paired with coordinated trousers and a feather-light matching scarf.",
    priceUSD: 2799,
    category: ["cotton-kurta-sets", "new-arrivals", "festive-sets"],
    badge: "Trending",
    images: [
      "/products/LX-WKS-011/front.jpg",
      "/products/LX-WKS-011/01full.jpg",
      "/products/LX-WKS-011/02full.jpg",
      "/products/LX-WKS-011/fabric.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
];

export const lookbookImage =
  "/products/LX-PRN-002/01-front.JPG";

export const lookbookHotspots: LookbookHotspot[] = [
  {
    id: "hotspot-1",
    productId: "jaipur-rose-kurta",
    x: 32,
    y: 38,
    label: "Peach Sharara Set",
  },
  {
    id: "hotspot-2",
    productId: "midnight-coord-set",
    x: 58,
    y: 52,
    label: "Printed Paisley Co-ord Set",
  },
  {
    id: "hotspot-3",
    productId: "mehrangarh-kurta",
    x: 72,
    y: 28,
    label: "Crimson Anarkali Dress",
  },
];

export interface HeroSlide {
  src: string;
  objectPosition: string;
}

export const heroSlides: HeroSlide[] = [
  {
    src: "/products/banners/bannerImg1.JPG",
    objectPosition: "object-[center_35%]",
  },
  {
    src: "/products/banners/bannerImg2.JPG",
    objectPosition: "object-[center_78%]",
  },
  {
    src: "/products/banners/bannerImg3.JPG",
    objectPosition: "object-[center_35%]",
  },
];

export const heroImages = heroSlides.map((slide) => slide.src);

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
