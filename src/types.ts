export type HeroBlock = {
  imageUrl: string;
  alt: string;
  hotel: string;
  location: string;
};

export type OfferBlock = {
  heading: string;
  description: string;
  pills: string[];
};

export type SavingsBreakdown = {
  nights: string;
  paidNights: number;
  freeNights: number;
  standardRate: string;
  standardTotal: string;
  whatahotelRate: string;
  whatahotelTotal: string;
  savingsAmount: string;
  savingsPercentage?: string;
};

export type Room = {
  badgeText: string;
  name: string;
  subtitle: string;
  priceLabel: string;
  priceRate: string;
  priceStrike?: string;
  priceTotal: string;
  images: Array<{ src: string; alt: string }>;
  features: Array<{
    title: string;
    icon: string;
    items: string[];
  }>;
  savings: {
    leftLabel: string;
    leftSub: string;
    rightLabel: string;
    rightValue: string;
  };
  savingsBreakdown?: SavingsBreakdown;
  bookUrl: string;
  bookLabel: string;
};

export type HotelBlock = {
  hero: HeroBlock;
  offer: OfferBlock;
  rooms: Room[];
};

export type SpecialOffer = {
  title: string;
  description: string;
  highlights: Array<{
    icon: string;
    text: string;
  }>;
  validityText?: string;
};

export type PriceSummaryItem = {
  label: string;
  sqft?: string;
  bedConfig?: string;
  whatahotelRate: string;
  regularRate: string;
  total: string;
};

export type Promo = {
  id: string;
  title: string;
  client: string;
  dates: string;
  thumbnailUrl?: string;
  portalTotalLabel?: string;
  portalTotalValue?: string;

  // Single-hotel promo
  hero?: HeroBlock;
  offer?: OfferBlock;
  rooms?: Room[];

  // Multi-hotel promo
  hotels?: HotelBlock[];

  // Special offer box (optional)
  specialOffer?: SpecialOffer;

  // Price summary (optional)
  priceSummary?: {
    items: PriceSummaryItem[];
    totalSavings?: string;
    grandTotal?: string;
    savingsNote?: string;
  };

  contact: {
    email: string;
    footerHtml: string;
  };
};
