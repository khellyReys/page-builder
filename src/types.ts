export type HeroBlock = {
  imageUrl: string;
  alt: string;
  hotel: string;
  location: string;
  /** Optional destination / city image (full-bleed below masthead; not from supplier `subSlides`). Multi-hotel: UI reads this from `hotels[0].hero` only (one shared strip). */
  cityImageUrl?: string;
  /** Alt text for `cityImageUrl`; include place name when set. */
  cityImageAlt?: string;
};

export type OfferBlock = {
  heading: string;
  description: string;
  pills: string[];
  /** When true, offer banner is not rendered (cleaner proposal layout). */
  hidden?: boolean;
};

export type SavingsBreakdown = {
  nights: string;
  paidNights: number;
  freeNights: number;
  standardRate: string;
  standardTotal: string;
  whatahotelRate: string;
  whatahotelTotal: string;
  /** Full stay total incl. taxes & fees (standard / BAR side), when shown on booking page */
  standardTotalInclTaxes?: string;
  /** Full stay total incl. taxes & fees (WhataHotel! side) */
  whatahotelTotalInclTaxes?: string;
  savingsAmount: string;
  savingsPercentage?: string;
};

export type RoomKeyAttribute = {
  label: string;
  value: string;
  sub?: string;
};

/** Top strip: Room Category, Suite Size, Floor, Occupancy (sample proposal layout). */
export type RoomQuickFact = {
  label: string;
  value: string;
};

export type IncludedValueLine = {
  label: string;
  value: string;
  detail?: string;
};

export type ExperienceMoreBlock = {
  title: string;
  subtitle?: string;
  leadAmount?: string;
  descriptionHtml?: string;
  validityLine?: string;
  stackNoteHtml?: string;
  alsoIncludesTitle?: string;
  alsoIncludes?: string[];
  applicableTitle?: string;
  applicable?: string[];
  termsHtml?: string;
};

export type Room = {
  badgeText: string;
  name: string;
  subtitle: string;
  /** Small caps line above the rate (optional) */
  priceLabel?: string;
  priceRate: string;
  priceStrike?: string;
  /** Stay total excluding taxes (ADR × nights pattern), e.g. "4-Night Total: €2,550 (excl. taxes)" */
  priceTotal: string;
  /** Large display amount for stay total excl. taxes, e.g. "€35,541" (optional; falls back to priceTotal styling) */
  stayTotalExclAmount?: string;
  /** Subline under stay total, e.g. "3 Nights · excl. taxes & fees¹" */
  stayTotalExclSub?: string;
  /** One line under "Rate & pricing breakdown": suite · dates · guests · rate program (HTML allowed). */
  investmentContextLine?: string;
  /** Top meta strip before gallery (Room Category, Suite Size, …). */
  quickFacts?: RoomQuickFact[];
  /** e.g. "Apr 27 → Apr 30" for Rate Comparisons table (`ComparisonOverview`) */
  stayCheckInOut?: string;
  /** Night count for table + investment block, e.g. "3" */
  nightsLabel?: string;
  /** Optional value stack: perks credits + breakfast = total included value */
  includedValueLines?: IncludedValueLine[];
  includedValueTotalLabel?: string;
  includedValueTotal?: string;
  includedValueTotalDetail?: string;
  experienceMore?: ExperienceMoreBlock;
  /** Shown after booking table (room-level); use for ¹ footnote or leave to promo.pricingFootnote */
  pricingFootnote?: string;
  /** Room overview section headings (defaults in component) */
  overviewTitle?: string;
  overviewSubtitle?: string;
  /** Row for Rate Comparisons table; optional — can be derived from stay fields + rates */
  bookingSummary?: {
    checkInOut: string;
    nights: string;
    adr: string;
    total: string;
  };
  /** Optional: grand total incl. taxes & fees for the stay — mirrors main site behavior */
  grandTotalInclTaxes?: string;
  /** Label above grandTotalInclTaxes; default in UI: "Grand total (incl. taxes & fees)" */
  grandTotalInclTaxesLabel?: string;
  /** Quick-scan specs (Room Overview grid); optional */
  keyAttributes?: RoomKeyAttribute[];
  /** Gallery section heading; optional */
  galleryTitle?: string;
  gallerySubtitle?: string;
  /** When true, the entire room gallery block (images + placeholder) is hidden */
  hideGallery?: boolean;
  images: Array<{ src: string; alt: string; caption?: string }>;
  features: Array<{
    title: string;
    icon: string;
    items: string[];
  }>;
  savings: {
    leftLabel: string;
    leftSub: string;
    rightLabel: string;
    /** Booking-table fallback Total; must match `bookingSummary.total` / `grandTotalInclTaxes` when incl.-tax totals are used (see SSOT Pricing Consistency). */
    rightValue: string;
    /** Second line in the savings strip, e.g. total incl. taxes from booking page */
    rightInclTaxesLabel?: string;
    rightInclTaxesValue?: string;
  };
  savingsBreakdown?: SavingsBreakdown;
  comparison?: Array<{
    label: string;
    standard: string;
    whatahotel: string;
    highlight?: boolean;
  }>;
  bookUrl: string;
  bookLabel: string;
};

export type HotelBlock = {
  hero: HeroBlock;
  offer: OfferBlock;
  rooms: Room[];
  /** When true, this hotel’s rooms are omitted from the per-hotel Rate Comparisons
   *  slice so they can be merged into a later hotel’s combined table. */
  suppressBookingSummary?: boolean;
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
  /** ISO 8601 — used for portal sort (newest first) */
  createdAt: string;
  /** Small label above the title, e.g. “Travel Proposal” */
  mastheadEyebrow?: string;
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

  /** Footnote after Rate Comparisons table (e.g. taxes disclaimer). HTML allowed. */
  pricingFootnote?: string;
  /** Hide offer banner (sample proposal omits it). */
  suppressOfferBanner?: boolean;
};
