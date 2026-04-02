export type HeroBlock = {
  imageUrl: string;
  alt: string;
  hotel: string;
  location: string;
  cityImageUrl?: string;
  cityImageAlt?: string;
};

export type Room = {
  badgeText: string;
  name: string;
  subtitle: string;
  priceRate: string;
  grandTotalInclTaxes: string;
  nightsLabel: string;
  stayCheckInOut: string;
  bookingSummary: {
    checkInOut: string;
    nights: string;
    adr: string;
    total: string;
  };
  images: Array<{ src: string; alt: string }>;
  hideGallery?: boolean;
  features: Array<{
    title: string;
    icon: string;
    items: string[];
  }>;
  bookUrl?: string;
};

export type HotelBlock = {
  hero: HeroBlock;
  rooms: Room[];
  cancellationPolicy?: string;
};

export type Promo = {
  id: string;
  createdAt: string;
  title: string;
  client: string;
  dates: string;
  thumbnailUrl?: string;
  portalTotalLabel?: string;
  portalTotalValue?: string;

  // Single-hotel promo
  hero?: HeroBlock;
  rooms?: Room[];

  // Multi-hotel promo
  hotels?: HotelBlock[];
};
