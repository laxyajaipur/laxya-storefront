import type { LookbookHotspot, Product } from "@/types";

export const products: Product[] = [
  {
    id: "jaipur-rose-kurta",
    sku: "LX-SHR-001",
    name: "Peach Sharara Set",
    description:
      "Elegantly tailored peach short kurta with coordinated flared palazzo pants and gold zari border dupatta.",
    priceUSD: 2999,
    category: ["new-arrivals", "bestsellers"],
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
    category: ["limited-edition", "bestsellers"],
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
    category: ["new-arrivals"],
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
    category: ["new-arrivals", "bestsellers", "limited-edition"],
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
