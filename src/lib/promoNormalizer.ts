import type { Promo, Room, HotelBlock } from "../types";

type NumericAmount = {
  value: number;
  raw: string;
};

function parseAmount(raw?: string): NumericAmount | null {
  if (!raw) return null;
  const match = raw.match(/-?\d[\d,]*(?:\.\d+)?/);
  if (!match) return null;
  const value = Number.parseFloat(match[0].replace(/,/g, ""));
  if (!Number.isFinite(value)) return null;
  return { value, raw };
}

function firstNonEmpty(values: Array<string | undefined>): string | undefined {
  return values.find((v) => Boolean(v && v.trim()));
}

function chooseCanonicalTotal(room: Room): string | undefined {
  const candidates = [
    room.grandTotalInclTaxes,
    room.bookingSummary?.total,
    room.savings?.rightValue,
  ].filter((v): v is string => Boolean(v && v.trim()));

  if (!candidates.length) return undefined;

  const adr = parseAmount(room.bookingSummary?.adr ?? room.priceRate);
  if (!adr) return candidates[0];

  // Prefer a candidate that is logically >= the ADR amount.
  const logical = candidates.find((candidate) => {
    const parsed = parseAmount(candidate);
    return Boolean(parsed && parsed.value >= adr.value);
  });

  return logical ?? candidates[0];
}

function normalizeRoom(room: Room, fallbackNights?: string): Room {
  const nights = firstNonEmpty([
    room.bookingSummary?.nights,
    room.nightsLabel,
    fallbackNights,
  ]);
  const checkInOut = firstNonEmpty([
    room.bookingSummary?.checkInOut,
    room.stayCheckInOut,
  ]);
  const adr = firstNonEmpty([room.bookingSummary?.adr, room.priceRate]);
  const canonicalTotal = chooseCanonicalTotal(room);
  const bookingSummary = {
    checkInOut: checkInOut ?? room.bookingSummary?.checkInOut ?? "—",
    nights: nights ?? room.bookingSummary?.nights ?? "—",
    adr: adr ?? room.bookingSummary?.adr ?? "—",
    total: canonicalTotal ?? room.bookingSummary?.total ?? "—",
  };

  const normalized: Room = {
    ...room,
    nightsLabel: nights ?? room.nightsLabel,
    stayCheckInOut: checkInOut ?? room.stayCheckInOut,
    grandTotalInclTaxes: canonicalTotal ?? room.grandTotalInclTaxes,
    savings: {
      ...room.savings,
      rightValue: canonicalTotal ?? room.savings.rightValue,
    },
    bookingSummary,
  };

  return normalized;
}

function extractFallbackNightsFromDates(dates: string): string | undefined {
  const match = dates.match(/(\d+)\s+Nights?/i);
  return match?.[1];
}

function getAllRooms(promo: Promo): Room[] {
  if (promo.hotels?.length) {
    return promo.hotels.flatMap((hotel) => hotel.rooms);
  }
  return promo.rooms ?? [];
}

function normalizeHotel(hotel: HotelBlock, fallbackNights?: string): HotelBlock {
  return {
    ...hotel,
    rooms: hotel.rooms.map((room) => normalizeRoom(room, fallbackNights)),
  };
}

function lowestRoomTotalValue(rooms: Room[]): string | undefined {
  let best: { amount: number; raw: string } | null = null;
  for (const room of rooms) {
    const totalRaw =
      room.grandTotalInclTaxes ?? room.bookingSummary?.total ?? room.savings.rightValue;
    const parsed = parseAmount(totalRaw);
    if (!parsed) continue;
    if (!best || parsed.value < best.amount) {
      best = { amount: parsed.value, raw: totalRaw! };
    }
  }
  return best?.raw;
}

function normalizePromo(promo: Promo): Promo {
  const fallbackNights = extractFallbackNightsFromDates(promo.dates);
  const normalizedHotels = promo.hotels?.map((hotel) =>
    normalizeHotel(hotel, fallbackNights),
  );
  const normalizedRooms = promo.rooms?.map((room) =>
    normalizeRoom(room, fallbackNights),
  );

  const normalizedPromo: Promo = {
    ...promo,
    hotels: normalizedHotels,
    rooms: normalizedRooms,
  };

  const allRooms = getAllRooms(normalizedPromo);
  const lowestTotal = lowestRoomTotalValue(allRooms);
  if (lowestTotal) {
    normalizedPromo.portalTotalValue = lowestTotal;
  }

  return normalizedPromo;
}

export function normalizePromos(promos: Promo[]): Promo[] {
  return promos.map(normalizePromo);
}
