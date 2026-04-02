import type { Promo, Room, HotelBlock, HeroBlock } from "../types";

// ── Agent data contract ─────────────────────────────────────────────

export interface RoomInput {
  name: string;
  subtitle: string;
  badgeText: string;
  /** Raw ADR with currency symbol, e.g. "$458.63" or "CAD $827.90" */
  adr: string;
  /** Grand total incl. taxes & fees, e.g. "$2,253.79" */
  grandTotal: string;
  nights: number;
  /** ISO date, e.g. "2026-04-05" */
  checkIn: string;
  /** ISO date, e.g. "2026-04-09" */
  checkOut: string;
  bookUrl?: string;
  images?: Array<{ src: string; alt: string }>;
  /** 2-3 bullets describing the room (view, bed type, size, etc.) */
  roomHighlights: string[];
  /** Exclusive Perks bullet items for this room */
  perks: string[];
}

export interface HotelInput {
  name: string;
  /** Plain text location, e.g. "Fort Lauderdale, Florida, United States" */
  location: string;
  heroImageUrl: string;
  heroAlt: string;
  rooms: RoomInput[];
}

export interface PromoInput {
  id: string;
  title: string;
  client?: string;
  dates: string;
  hotels: HotelInput[];
  cityImageUrl?: string;
  cityImageAlt?: string;
}

// ── Helpers ─────────────────────────────────────────────────────────

function stripNightSuffix(rate: string): string {
  return rate.replace(/\s*\/\s*night\s*$/i, "").trim();
}

function formatCheckInOut(checkIn: string, checkOut: string): string {
  const fmt = (iso: string) => {
    const d = new Date(iso + "T12:00:00");
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };
  return `${fmt(checkIn)} → ${fmt(checkOut)}`;
}

function parseNumericAmount(raw: string): number | null {
  const match = raw.match(/-?\d[\d,]*(?:\.\d+)?/);
  if (!match) return null;
  const value = Number.parseFloat(match[0].replace(/,/g, ""));
  return Number.isFinite(value) ? value : null;
}

// ── Room builder ────────────────────────────────────────────────────

function buildRoom(input: RoomInput): Room {
  const cleanAdr = stripNightSuffix(input.adr);
  const checkInOut = formatCheckInOut(input.checkIn, input.checkOut);
  const nightsStr = String(input.nights);

  const images = (input.images ?? []).filter(
    (img) => img.src && !img.src.includes("paceholder"),
  );

  return {
    badgeText: input.badgeText,
    name: input.name,
    subtitle: input.subtitle,
    priceRate: cleanAdr,
    grandTotalInclTaxes: input.grandTotal,
    nightsLabel: nightsStr,
    stayCheckInOut: checkInOut,
    bookingSummary: {
      checkInOut,
      nights: nightsStr,
      adr: cleanAdr,
      total: input.grandTotal,
    },
    images,
    hideGallery: images.length === 0,
    features: [
      { title: "Room Highlights", icon: "door-open", items: input.roomHighlights },
      { title: "Exclusive Perks", icon: "gift", items: input.perks },
    ],
    bookUrl: input.bookUrl ?? "",
  };
}

// ── Hotel block builder ─────────────────────────────────────────────

function buildHotelBlock(
  input: HotelInput,
  opts: { cityImageUrl?: string; cityImageAlt?: string },
): HotelBlock {
  const hero: HeroBlock = {
    imageUrl: input.heroImageUrl,
    alt: input.heroAlt,
    hotel: input.name,
    location: input.location,
    ...(opts.cityImageUrl
      ? { cityImageUrl: opts.cityImageUrl, cityImageAlt: opts.cityImageAlt }
      : {}),
  };

  return {
    hero,
    rooms: input.rooms.map(buildRoom),
  };
}

// ── Lowest total across all rooms ───────────────────────────────────

function lowestTotal(hotels: HotelInput[]): string | undefined {
  let best: { amount: number; raw: string } | null = null;
  for (const hotel of hotels) {
    for (const room of hotel.rooms) {
      const parsed = parseNumericAmount(room.grandTotal);
      if (parsed !== null && (!best || parsed < best.amount)) {
        best = { amount: parsed, raw: room.grandTotal };
      }
    }
  }
  return best?.raw;
}

// ── Public API ──────────────────────────────────────────────────────

export function createPromo(input: PromoInput): Promo {
  const hotelBlocks = input.hotels.map((hotel, i) =>
    buildHotelBlock(hotel, {
      cityImageUrl: i === 0 ? input.cityImageUrl : undefined,
      cityImageAlt: i === 0 ? input.cityImageAlt : undefined,
    }),
  );

  const portalTotal = lowestTotal(input.hotels);
  const isSingleHotel = input.hotels.length === 1;

  if (isSingleHotel) {
    const block = hotelBlocks[0];
    return {
      id: input.id,
      createdAt: new Date().toISOString(),
      title: input.title,
      client: input.client ?? "",
      dates: input.dates,
      thumbnailUrl: input.hotels[0].heroImageUrl,
      portalTotalLabel: "From",
      portalTotalValue: portalTotal,
      hero: block.hero,
      rooms: block.rooms,
    };
  }

  return {
    id: input.id,
    createdAt: new Date().toISOString(),
    title: input.title,
    client: input.client ?? "",
    dates: input.dates,
    thumbnailUrl: input.hotels[0].heroImageUrl,
    portalTotalLabel: "From",
    portalTotalValue: portalTotal,
    hotels: hotelBlocks,
  };
}
