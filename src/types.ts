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
  bookUrl: string;
  bookLabel: string;
};

export type HotelBlock = {
  hero: HeroBlock;
  offer: OfferBlock;
  rooms: Room[];
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

  contact: {
    email: string;
    footerHtml: string;
  };
};
