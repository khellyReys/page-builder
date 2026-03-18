export type Promo = {
  id: string;
  title: string;
  client: string;
  dates: string;
  thumbnailUrl?: string;
  portalTotalLabel?: string;
  portalTotalValue?: string;
  hero: {
    imageUrl: string;
    alt: string;
    hotel: string;
    location: string;
  };
  offer: {
    heading: string;
    description: string;
    pills: string[];
  };
  rooms: Array<{
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
  }>;
  contact: {
    email: string;
    footerHtml: string;
  };
};
