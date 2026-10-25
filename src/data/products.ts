import type { LookbookHotspot, Product } from "@/types";

export const products: Product[] = [
  {
    id: "blue-handpainted-anarkali",
    sku: "LX-BHA-012",
    name: "Blue Handpainted Anarkali with Dupatta",
    description:
      "A full-flared, floor-length handpainted Anarkali crafted in pure georgette and paired with a beautifully lace-detailed dupatta.",
    priceUSD: 2199,
    category: ["anarkalis", "festive-sets", "new-arrivals", "bestsellers"],
    badge: "Handpainted",
    images: [
      "/products/LX-BHA-012-blue-handpainted-anarkali/front.jpg",
      "/products/LX-BHA-012-blue-handpainted-anarkali/side.jpg",
      "/products/LX-BHA-012-blue-handpainted-anarkali/back.jpg",
      "/products/LX-BHA-012-blue-handpainted-anarkali/full.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "jaipur-rose-kurta",
    sku: "LX-SHR-001",
    name: "Shimmery Tissue Buti Sharara Set",
    description:
      "Lace-detailed kurta with all-over buti work, flowy sharara and beautiful lace-edged dupatta.",
    priceUSD: 3350,
    category: ["new-arrivals", "bestsellers", "sharara-sets", "festive-sets"],
    badge: "New",
    images: [
      "/products/LX-SHR-001-shimmery-sharara-set/01-front.JPG",
      "/products/LX-SHR-001-shimmery-sharara-set/02-side.JPG",
      "/products/LX-SHR-001-shimmery-sharara-set/03-detail.JPG",
      "/products/LX-SHR-001-shimmery-sharara-set/04-full.JPG",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "midnight-coord-set",
    sku: "LX-CPC-002",
    name: "Chinnon Printed Co-ord Set",
    description:
      "Printed crop top paired with flared bell-bottom pants, crafted in soft & luxurious Chinnon fabric.",
    priceUSD: 2550,
    category: ["limited-edition", "bestsellers", "co-ord-sets"],
    badge: "Limited",
    images: [
      "/products/LX-CPC-002-chinnon-printed-coord-set/front.jpg",
      "/products/LX-CPC-002-chinnon-printed-coord-set/front1.jpg",
      "/products/LX-CPC-002-chinnon-printed-coord-set/side.jpg",
      "/products/LX-CPC-002-chinnon-printed-coord-set/full.jpg",
      "/products/LX-CPC-002-chinnon-printed-coord-set/full1.jpg",
    ],
    sizes: ["S", "M", "L"],
    inStock: true,
  },
  {
    id: "saffron-embroidered-kurta",
    sku: "LX-PCS-003",
    name: "Powder Blue Crepe Straight Suit Set",
    description:
      "Zero-neck kurta, super comfortable high waisted straight pants and floral embroidered dupatta.",
    priceUSD: 1999,
    category: ["new-arrivals", "cotton-kurta-sets", "short-kurtis"],
    badge: "Bestseller",
    images: [
      "/products/LX-PCS-003-powder-blue-crepe-suit/01-front.JPG",
      "/products/LX-PCS-003-powder-blue-crepe-suit/02-back.JPG",
      "/products/LX-PCS-003-powder-blue-crepe-suit/03-detail.JPG",
      "/products/LX-PCS-003-powder-blue-crepe-suit/04-side.JPG",
      "/products/LX-PCS-003-powder-blue-crepe-suit/05-back-zoom.JPG",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "mehrangarh-kurta",
    sku: "LX-PCA-004",
    name: "Pink Chinnon Anarkali with Dupatta",
    description:
      "A graceful floor-length Anarkali with a beautifully flared silhouette, adorned with delicate pearl booti handwork along with intricate lace detailing on the neckline, sleeves, and dupatta for an elegant festive look.",
    priceUSD: 3950,
    category: ["new-arrivals", "bestsellers", "limited-edition", "anarkalis", "festive-sets"],
    badge: "Exclusive",
    images: [
      "/products/LX-PCA-004-pink-chinnon-anarkali/01-front.JPG",
      "/products/LX-PCA-004-pink-chinnon-anarkali/02-detail.JPG",
      "/products/LX-PCA-004-pink-chinnon-anarkali/03-front-close.JPG",
      "/products/LX-PCA-004-pink-chinnon-anarkali/04-front-detail.JPG",
      "/products/LX-PCA-004-pink-chinnon-anarkali/05-front-zoom.JPG",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "jaipur-crop-top-set",
    sku: "LX-CSC-005",
    name: "Crepe Striped C-Cut Festive Suit Set",
    description:
      "Black crepe C-cut suit with palazzo and beautiful bordered dupatta.",
    priceUSD: 2199,
    category: ["new-arrivals", "festive-sets", "co-ord-sets"],
    badge: "New",
    images: [
      "/products/LX-CSC-005-crepe-striped-festive-suit/front.jpg",
      "/products/LX-CSC-005-crepe-striped-festive-suit/side.jpg",
      "/products/LX-CSC-005-crepe-striped-festive-suit/back.jpg",
      "/products/LX-CSC-005-crepe-striped-festive-suit/full.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "mustard-festive-suit",
    sku: "LX-MFC-006",
    name: "Printed Muslin Festive Co-ord Set",
    description:
      "A statement kurta with intricate motifs and a matching flared bottom finished with detailed borders, it’s an effortless festive look with a graceful traditional touch.",
    priceUSD: 1799,
    category: ["festive-sets", "new-arrivals", "bestsellers", "co-ord-sets"],
    badge: "Festive",
    images: [
      "/products/LX-MFC-006-muslin-festive-coord-set/front.jpg",
      "/products/LX-MFC-006-muslin-festive-coord-set/side.jpg",
      "/products/LX-MFC-006-muslin-festive-coord-set/back.jpg",
      "/products/LX-MFC-006-muslin-festive-coord-set/full.jpg",
    ],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "botanical-coord-set",
    sku: "LX-BPC-007",
    name: "Bandhej Printed Crepe Co-ord Set",
    description:
      "Collared Bandhej printed kurta with comfortable crepe palazzos.",
    priceUSD: 1250,
    category: ["co-ord-sets", "new-arrivals"],
    badge: "Popular",
    images: [
      "/products/LX-BPC-007-bandhej-printed-crepe-coord/01front.jpg",
      "/products/LX-BPC-007-bandhej-printed-crepe-coord/02front.jpg",
      "/products/LX-BPC-007-bandhej-printed-crepe-coord/side.jpg",
      "/products/LX-BPC-007-bandhej-printed-crepe-coord/01full.jpg",
      "/products/LX-BPC-007-bandhej-printed-crepe-coord/02full.jpg",
    ],
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
  },
  {
    id: "blush-cotton-kurta-set",
    sku: "LX-BCA-008",
    name: "Brown Cotton Anarkali Suit Set",
    description:
      "A premium-quality 60×60 cotton flared Anarkali with convenient pockets, paired with lace-detailed palazzos and a gorgeous matching dupatta.",
    priceUSD: 1499,
    category: ["cotton-kurta-sets", "new-arrivals", "anarkalis"],
    badge: "Essential",
    images: [
      "/products/LX-BCA-008-brown-cotton-anarkali-suit/front.jpg",
      "/products/LX-BCA-008-brown-cotton-anarkali-suit/side.jpg",
      "/products/LX-BCA-008-brown-cotton-anarkali-suit/back.jpg",
      "/products/LX-BCA-008-brown-cotton-anarkali-suit/full.jpg",
      "/products/LX-BCA-008-brown-cotton-anarkali-suit/o1side.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "block-print-cotton-set",
    sku: "LX-DCS-009",
    name: "Dark Blue Cotton Straight Suit Set",
    description:
      "A soft cotton printed kurta paired with relaxed palazzos and a matching dupatta.",
    priceUSD: 899,
    category: ["cotton-kurta-sets", "new-arrivals"],
    badge: "Handcrafted",
    images: [
      "/products/LX-DCS-009-dark-blue-cotton-straight-suit/front.jpg",
      "/products/LX-DCS-009-dark-blue-cotton-straight-suit/side.jpg",
      "/products/LX-DCS-009-dark-blue-cotton-straight-suit/01full.jpg",
      "/products/LX-DCS-009-dark-blue-cotton-straight-suit/02full.jpg",
      "/products/LX-DCS-009-dark-blue-cotton-straight-suit/fabric.jpg",
    ],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "powder-blue-cotton-set",
    sku: "LX-TCS-010",
    name: "Teal Blue Cotton Straight Suit Set",
    description:
      "A comfortable cotton printed straight kurta paired with simple straight pants and a matching dupatta.",
    priceUSD: 1100,
    category: ["cotton-kurta-sets", "new-arrivals"],
    badge: "New",
    images: [
      "/products/LX-TCS-010-teal-blue-cotton-straight-suit/front.jpg",
      "/products/LX-TCS-010-teal-blue-cotton-straight-suit/01full.jpg",
      "/products/LX-TCS-010-teal-blue-cotton-straight-suit/02full.jpg",
      "/products/LX-TCS-010-teal-blue-cotton-straight-suit/03full.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "ivory-white-kurta-set",
    sku: "LX-SCS-011",
    name: "Silli Cotton Embroidered Straight Suit Set",
    description:
      "A super-soft cotton straight kurta with delicate neckline embroidery, paired with a lace-detailed palazzo and a graceful dupatta for an effortlessly elegant look.",
    priceUSD: 1450,
    category: ["cotton-kurta-sets", "new-arrivals", "festive-sets"],
    badge: "Trending",
    images: [
      "/products/LX-SCS-011-silli-cotton-straight-suit/front.jpg",
      "/products/LX-SCS-011-silli-cotton-straight-suit/01full.jpg",
      "/products/LX-SCS-011-silli-cotton-straight-suit/02full.jpg",
      "/products/LX-SCS-011-silli-cotton-straight-suit/fabric.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "cotton-alia-cut-anarkali",
    sku: "LX-CAA-013",
    name: "Cotton Slub Alia Cut Anarkali Suit Set",
    description:
      "A graceful Anarkali crafted in premium cotton slub fabric, paired with relaxed-fit cotton palazzos and a lightweight Kota Doria dupatta.",
    priceUSD: 2499,
    category: ["anarkalis", "cotton-kurta-sets", "new-arrivals"],
    badge: "Trending",
    images: [
      "/products/LX-CAA-013-cotton-alia-cut-anarkali/front.jpg",
      "/products/LX-CAA-013-cotton-alia-cut-anarkali/side.jpg",
      "/products/LX-CAA-013-cotton-alia-cut-anarkali/detail.jpg",
      "/products/LX-CAA-013-cotton-alia-cut-anarkali/back.jpg",
      "/products/LX-CAA-013-cotton-alia-cut-anarkali/full.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "muslin-embroidered-coord-set",
    sku: "LX-MEC-014",
    name: "Muslin Embroidered Co-ord Set",
    description:
      "A graceful muslin kurta featuring delicate embroidery along the neckline and sleeves, paired with relaxed-fit pants.",
    priceUSD: 799,
    category: ["co-ord-sets", "new-arrivals"],
    badge: "Popular",
    images: [
      "/products/LX-MEC-014-muslin-embroidered-coord-set/front.jpg",
      "/products/LX-MEC-014-muslin-embroidered-coord-set/side.jpg",
      "/products/LX-MEC-014-muslin-embroidered-coord-set/back.jpg",
      "/products/LX-MEC-014-muslin-embroidered-coord-set/full.jpg",
    ],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "cotton-printed-crop-top",
    sku: "LX-CPT-015",
    name: "Cotton Printed Crop Top",
    description:
      "A super-comfortable cotton printed crop top with statement bell sleeves.",
    priceUSD: 450,
    category: ["short-kurtis", "new-arrivals"],
    badge: "Essential",
    images: [
      "/products/LX-CPT-015-cotton-printed-crop-top/front.jpg",
      "/products/LX-CPT-015-cotton-printed-crop-top/side.jpg",
      "/products/LX-CPT-015-cotton-printed-crop-top/back.jpg",
      "/products/LX-CPT-015-cotton-printed-crop-top/full.jpg",
    ],
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
  },
  {
    id: "peach-kota-doria-suit",
    sku: "LX-PKS-016",
    name: "Peach Kota Doria Straight Suit Set",
    description:
      "A graceful Kota Doria straight kurta featuring a Y-neckline with delicate lace detailing and beautiful red tulip prints, paired with a matching dupatta and relaxed-fit cotton bottoms.",
    priceUSD: 1999,
    category: ["cotton-kurta-sets", "new-arrivals"],
    badge: "New",
    images: [
      "/products/LX-PKS-016-peach-kota-doria-suit/front.jpg",
      "/products/LX-PKS-016-peach-kota-doria-suit/side.jpg",
      "/products/LX-PKS-016-peach-kota-doria-suit/back.jpg",
      "/products/LX-PKS-016-peach-kota-doria-suit/full.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "purple-angrakha-anarkali",
    sku: "LX-APA-017",
    name: "Purple Angrakha Style Anarkali Suit Set",
    description:
      "A beautifully printed Angrakha Anarkali adorned with delicate gota detailing and charming tassels, paired with comfortable pants and a matching printed dupatta.",
    priceUSD: 1499,
    category: ["anarkalis", "festive-sets", "new-arrivals"],
    badge: "Festive",
    images: [
      "/products/LX-APA-017-purple-angrakha-anarkali/front.jpg",
      "/products/LX-APA-017-purple-angrakha-anarkali/side.jpg",
      "/products/LX-APA-017-purple-angrakha-anarkali/back.jpg",
      "/products/LX-APA-017-purple-angrakha-anarkali/full.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "cotton-printed-farshi-suit",
    sku: "LX-CFS-018",
    name: "Cotton Printed Farshi Suit Set",
    description:
      "A printed short kurta featuring delicate lace detailing, paired with a beautifully flared Farshi salwar and a lightweight printed Kota Doria dupatta.",
    priceUSD: 1400,
    category: ["cotton-kurta-sets", "festive-sets", "new-arrivals"],
    badge: "Artisan",
    images: [
      "/products/LX-CFS-018-cotton-printed-farshi-suit/front.jpg",
      "/products/LX-CFS-018-cotton-printed-farshi-suit/side.jpg",
      "/products/LX-CFS-018-cotton-printed-farshi-suit/back.jpg",
      "/products/LX-CFS-018-cotton-printed-farshi-suit/full.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "beige-angrakha-anarkali",
    sku: "LX-ABA-019",
    name: "Beige Angrakha Style Anarkali Suit Set",
    description:
      "A full floral-print Angrakha Anarkali with a wrap-style front and delicate tassel detailing, paired with relaxed-fit bottoms and a matching floral-print dupatta.",
    priceUSD: 1299,
    category: ["anarkalis", "new-arrivals"],
    badge: "Handcrafted",
    images: [
      "/products/LX-ABA-019-beige-angrakha-anarkali/front.jpg",
      "/products/LX-ABA-019-beige-angrakha-anarkali/side.jpg",
      "/products/LX-ABA-019-beige-angrakha-anarkali/back.jpg",
      "/products/LX-ABA-019-beige-angrakha-anarkali/full.jpg",
      "/products/LX-ABA-019-beige-angrakha-anarkali/full2.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "olive-green-straight-suit",
    sku: "LX-OGS-020",
    name: "Olive Green Straight Suit Set",
    description:
      "A relaxed printed cotton straight kurta featuring delicate mirror work, paired with comfortable palazzos and a printed dupatta.",
    priceUSD: 899,
    category: ["cotton-kurta-sets", "new-arrivals"],
    badge: "Bestseller",
    images: [
      "/products/LX-OGS-020-olive-green-straight-suit/front.jpg",
      "/products/LX-OGS-020-olive-green-straight-suit/side.jpg",
      "/products/LX-OGS-020-olive-green-straight-suit/back.jpg",
      "/products/LX-OGS-020-olive-green-straight-suit/full.jpg",
    ],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    shopifyVariantMap: {
      M: "67976479310193",
      XL: "67976479342961",
    },
  },
  {
    id: "cotton-printed-gopi-dress",
    sku: "LX-CGD-021",
    name: "Cotton Printed Gopi Dress Set",
    description:
      "A charming short kurta paired with a flared skirt and a beautiful printed dupatta.",
    priceUSD: 1350,
    category: ["festive-sets", "co-ord-sets", "new-arrivals"],
    badge: "Exclusive",
    images: [
      "/products/LX-CGD-021-cotton-printed-gopi-dress/front.jpg",
      "/products/LX-CGD-021-cotton-printed-gopi-dress/side.jpg",
      "/products/LX-CGD-021-cotton-printed-gopi-dress/back.jpg",
      "/products/LX-CGD-021-cotton-printed-gopi-dress/full.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "heavy-chinnon-festive-suit",
    sku: "LX-HCF-022",
    name: "Heavy Chinnon Festive Suit Set",
    description:
      "A three-piece Chinnon set featuring intricate zari work, delicate shell and latkan detailing, paired with a heavy scalloped dupatta, a statement festive ensemble.",
    priceUSD: 2199,
    category: ["festive-sets", "new-arrivals", "bestsellers"],
    badge: "Luxury",
    images: [
      "/products/LX-HCF-022-heavy-chinnon-festive-suit/front.jpg",
      "/products/LX-HCF-022-heavy-chinnon-festive-suit/front2.jpg",
      "/products/LX-HCF-022-heavy-chinnon-festive-suit/front3.jpg",
      "/products/LX-HCF-022-heavy-chinnon-festive-suit/side.jpg",
      "/products/LX-HCF-022-heavy-chinnon-festive-suit/full.jpg",
      "/products/LX-HCF-022-heavy-chinnon-festive-suit/full2.jpg",
      "/products/LX-HCF-022-heavy-chinnon-festive-suit/full3.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
];

export const lookbookImage =
  "/products/LX-CPC-002-chinnon-printed-coord-set/front.jpg";

export const lookbookHotspots: LookbookHotspot[] = [
  {
    id: "hotspot-1",
    productId: "jaipur-rose-kurta",
    x: 32,
    y: 38,
    label: "Shimmery Tissue Buti Sharara Set",
  },
  {
    id: "hotspot-2",
    productId: "midnight-coord-set",
    x: 58,
    y: 52,
    label: "Chinnon Printed Co-ord Set",
  },
  {
    id: "hotspot-3",
    productId: "mehrangarh-kurta",
    x: 72,
    y: 28,
    label: "Pink Chinnon Anarkali with Dupatta",
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
