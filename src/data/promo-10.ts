import type { Promo } from "../types";

// AGENT NOTE: Single-hotel proposal — Kimpton Vividora Barcelona (hotelID=6258).
// Check-in: Jun 10, 2026 — Check-out: Jun 14, 2026 (4 nights), rate=2SH.
// Currency: EUR. 1 room option (Family Room only, per client request).
// Nightly rate: €1,446.75 (excl. taxes). 4-night excl-tax total: €5,787.00.
// Grand total incl. taxes & fees: €5,853.00.
// Free cancellation until June 9, 2026.

export const promo10: Promo = {
  id: "promo-10",
  createdAt: "2026-03-25T12:00:00Z",
  title: "Derman Family | Barcelona 🇪🇸",
  client: "Derman Family",
  dates: "June 10–14, 2026 | 4 Nights | 1 Room Option",
  thumbnailUrl:
    "https://www.myboutiquehotel.com/photos/112550/kimpton-vividora-hotel-an-ihg-hotel-barcelona-009-1685629912-1110x700.jpg",
  portalTotalLabel: "Grand Total",
  portalTotalValue: "€5,853",

  hero: {
    imageUrl:
      "https://www.myboutiquehotel.com/photos/112550/kimpton-vividora-hotel-an-ihg-hotel-barcelona-009-1685629912-1110x700.jpg",
    alt: "Kimpton Vividora Barcelona — Barcelona, Spain",
    hotel: "Kimpton Vividora Barcelona",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Barcelona, Spain &nbsp;|&nbsp; Boutique Luxury in the Gothic Quarter",
  },

  rooms: [
    // ─── Room Option 1: Family Room ───
    {
      badgeText: "🏨 Option 1",
      name: "Family Room",
      subtitle:
        "2 Interconnected Rooms · Walk-In Shower<br/><strong style='color: var(--burgundy)'>From €1,446.75/night</strong>",
      priceRate: "€1,446.75",
      grandTotalInclTaxes: "€5,853",
      stayCheckInOut: "Jun 10 → Jun 14",
      nightsLabel: "4",
      bookingSummary: {
        checkInOut: "Jun 10 → Jun 14",
        nights: "4",
        adr: "€1,446.75",
        total: "€5,853",
      },
      images: [
        {
          src: "https://kimptonvividorahotel.com/data/webp/family3-557f6b34b401b573b25f90d5b9c59488-61fd74b3b8c4d4fbcba752082f7c8fe9.webp",
          alt: "Family Room — Kimpton Vividora Barcelona",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "2 interconnected rooms",
            "Walk-in shower",
            "Ideal for families",
            "Located in Barcelona's Gothic Quarter",
          ],
        },
        {
          title: "Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Complimentary breakfast for 2 daily",
            "$100 dining credit",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],

      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=QOZ2SH&rate=2SH&hotel=6258&checkin=2026-06-10&checkout=2026-06-14&guests=2&children=0&rooms=1",
    },
  ],

};
