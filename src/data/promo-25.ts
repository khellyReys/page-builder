import type { Promo } from "../types";

// AGENT NOTE: hotelID 4238 — Solage, Auberge Collection, Calistoga
// Two date blocks compared: May 12–15 (3 nights, advance purchase + standard) vs May 13–15 (2 nights, advance purchase + standard)
// Room images: all placeholders on source page — images: [] per user request (DO NOT SHOW ROOM IMAGES)
// 4 specific room categories requested: Calistoga King Studio, Valley Two Queen Studio, Fireside Garden Terrace King, Fireside Garden Two Queens

const sharedPerks = [
  {
    title: "Exclusive Perks",
    icon: "door-open",
    items: [
      "Room Category Upgrade, Subject to Availability at Check-In",
      "Late Check-Out, Subject to Availability",
    ],
  },
  {
    title: "Complimentary Inclusions",
    icon: "gift",
    items: [
      "Full Breakfast for 2 Daily in Solbar",
      "$100 Resort Credit",
      "Free Internet Access",
    ],
  },
];

export const promo25: Promo = {
  id: "promo-25",
  createdAt: "2026-03-30T12:00:00Z",
  title: "Calistoga, Napa Valley",
  client: "",
  dates: "May 12–15, 2026 (3 Nights) | May 13–15, 2026 (2 Nights)",
  thumbnailUrl: "https://whatahotel.com/content/hotels/4238/Solage.jpg",
  portalTotalLabel: "From",
  portalTotalValue: "$2,703",

  hotels: [
    /* ─────────────────────────────────────────────
       HOTEL BLOCK 1 — May 12–15, 2026 (3 Nights)
       Advance Purchase (Plan Ahead & Save 15%) vs. Flexible Rate
    ────────────────────────────────────────────── */
    {
      hero: {
        imageUrl: "https://whatahotel.com/content/hotels/4238/Solage.jpg",
        alt: "Solage, Auberge Collection — Calistoga resort",
        hotel: "Solage, Auberge Collection",
        location: "Calistoga, California",
        cityImageUrl:
          "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/napavalley/Calistoga_Napa_Valley_2113772b-354d-4c73-9071-49030f7b6ef7.jpg",
        cityImageAlt: "Calistoga, Napa Valley",
      },

      rooms: [
        // ── Calistoga King Studio — Advance Purchase (C1KP56) vs. Standard (C1K2SH) ──
        {
          badgeText: "Advance Purchase",
          name: "Calistoga King Studio",
          subtitle: "1 King Bed · Private Patio · Pebble Floor Shower",
          priceRate: "$1,055/night",
          bookingSummary: {
            checkInOut: "May 12 → May 15",
            nights: "3",
            adr: "$1,055.42",
            total: "$3,166.26",
          },
          nightsLabel: "3",
          stayCheckInOut: "May 12 → May 15",
          grandTotalInclTaxes: "$3,890.89",
          hideGallery: true,
          images: [],
          features: sharedPerks,

          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=C1KP56&rate=P56&hotel=4238&checkin=2026-05-12&checkout=2026-05-15&guests=2&children=0&rooms=1",
        },
        // ── Valley Two Queen Studio — Advance Purchase (C2QP56) vs. Standard (C2Q2SH) ──
        {
          badgeText: "Advance Purchase",
          name: "Valley Two Queen Studio",
          subtitle: "2 Queen Beds · Pebble Floor · 585 sq ft",
          priceRate: "$1,183/night",
          bookingSummary: {
            checkInOut: "May 12 → May 15",
            nights: "3",
            adr: "$1,182.92",
            total: "$3,548.76",
          },
          nightsLabel: "3",
          stayCheckInOut: "May 12 → May 15",
          grandTotalInclTaxes: "$4,331.78",
          hideGallery: true,
          images: [],
          features: sharedPerks,

          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=C2QP56&rate=P56&hotel=4238&checkin=2026-05-12&checkout=2026-05-15&guests=2&children=0&rooms=1",
        },
        // ── Fireside Garden Terrace King — Advance Purchase (D1KP56) vs. Standard (D1K2SH) ──
        {
          badgeText: "Advance Purchase",
          name: "Fireside Garden Terrace King",
          subtitle:
            "1 King Bed · Large Private Garden Terrace · Fireplace & Fountain",
          priceRate: "$1,187/night",
          bookingSummary: {
            checkInOut: "May 12 → May 15",
            nights: "3",
            adr: "$1,187.17",
            total: "$3,561.51",
          },
          nightsLabel: "3",
          stayCheckInOut: "May 12 → May 15",
          grandTotalInclTaxes: "$4,346.48",
          hideGallery: true,
          images: [],
          features: sharedPerks,

          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=D1KP56&rate=P56&hotel=4238&checkin=2026-05-12&checkout=2026-05-15&guests=2&children=0&rooms=1",
        },
        // ── Fireside Garden Two Queens — Advance Purchase (D2QP56) vs. Standard (D2Q2SH) ──
        {
          badgeText: "Advance Purchase",
          name: "Fireside Garden Two Queens",
          subtitle:
            "2 Queen Beds · Large Private Garden Terrace · Ideal for Families",
          priceRate: "$1,230/night",
          bookingSummary: {
            checkInOut: "May 12 → May 15",
            nights: "3",
            adr: "$1,229.67",
            total: "$3,689.01",
          },
          nightsLabel: "3",
          stayCheckInOut: "May 12 → May 15",
          grandTotalInclTaxes: "$4,493.44",
          hideGallery: true,
          images: [],
          features: sharedPerks,

          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=D2QP56&rate=P56&hotel=4238&checkin=2026-05-12&checkout=2026-05-15&guests=2&children=0&rooms=1",
        },
      ],
    },

    /* ─────────────────────────────────────────────
       HOTEL BLOCK 2 — May 13–15, 2026 (2 Nights)
       Advance Purchase (Plan Ahead & Save 15%) vs. Flexible Rate
    ────────────────────────────────────────────── */
    {
      hero: {
        imageUrl: "https://whatahotel.com/content/hotels/4238/Solage.jpg",
        alt: "Solage, Auberge Collection — Calistoga resort",
        hotel: "Solage, Auberge Collection",
        location: "Calistoga, California",
      },

      rooms: [
        // ── Calistoga King Studio — Advance Purchase (C1KP56) vs. Standard (C1K2SH) ──
        // AGENT NOTE: 2 rate variants — Advance Purchase $1,102.88 (C1KP56) and Standard $1,297.50 (C1K2SH). Using lowest.
        {
          badgeText: "Advance Purchase",
          name: "Calistoga King Studio",
          subtitle: "1 King Bed · Private Patio · Pebble Floor Shower",
          priceRate: "$1,103/night",
          bookingSummary: {
            checkInOut: "May 13 → May 15",
            nights: "2",
            adr: "$1,102.88",
            total: "$2,205.76",
          },
          nightsLabel: "2",
          stayCheckInOut: "May 13 → May 15",
          grandTotalInclTaxes: "$2,703.34",
          hideGallery: true,
          images: [],
          features: sharedPerks,

          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=C1KP56&rate=P56&hotel=4238&checkin=2026-05-13&checkout=2026-05-15&guests=2&children=0&rooms=1",
        },
        // ── Valley Two Queen Studio — Advance Purchase (C2QP56) vs. Standard (C2Q2SH) ──
        // AGENT NOTE: 2 rate variants — Advance Purchase $1,230.38 (C2QP56) and Standard $1,447.50 (C2Q2SH). Using lowest.
        {
          badgeText: "Advance Purchase",
          name: "Valley Two Queen Studio",
          subtitle: "2 Queen Beds · Pebble Floor · 585 sq ft",
          priceRate: "$1,230/night",
          bookingSummary: {
            checkInOut: "May 13 → May 15",
            nights: "2",
            adr: "$1,230.38",
            total: "$2,460.76",
          },
          nightsLabel: "2",
          stayCheckInOut: "May 13 → May 15",
          grandTotalInclTaxes: "$2,997.26",
          hideGallery: true,
          images: [],
          features: sharedPerks,

          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=C2QP56&rate=P56&hotel=4238&checkin=2026-05-13&checkout=2026-05-15&guests=2&children=0&rooms=1",
        },
        // ── Fireside Garden Terrace King — Advance Purchase (D1KP56) vs. Standard (D1K2SH) ──
        // AGENT NOTE: 2 rate variants — Advance Purchase $1,258.00 (D1KP56) and Standard $1,480.00 (D1K2SH). Using lowest.
        {
          badgeText: "Advance Purchase",
          name: "Fireside Garden Terrace King",
          subtitle:
            "1 King Bed · Large Private Garden Terrace · Fireplace & Fountain",
          priceRate: "$1,258/night",
          bookingSummary: {
            checkInOut: "May 13 → May 15",
            nights: "2",
            adr: "$1,258.00",
            total: "$2,516.00",
          },
          nightsLabel: "2",
          stayCheckInOut: "May 13 → May 15",
          grandTotalInclTaxes: "$3,060.95",
          hideGallery: true,
          images: [],
          features: sharedPerks,

          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=D1KP56&rate=P56&hotel=4238&checkin=2026-05-13&checkout=2026-05-15&guests=2&children=0&rooms=1",
        },
        // ── Fireside Garden Two Queens — Advance Purchase (D2QP56) vs. Standard (D2Q2SH) ──
        // AGENT NOTE: 2 rate variants — Advance Purchase $1,300.50 (D2QP56) and Standard $1,530.00 (D2Q2SH). Using lowest.
        {
          badgeText: "Advance Purchase",
          name: "Fireside Garden Two Queens",
          subtitle:
            "2 Queen Beds · Large Private Garden Terrace · Ideal for Families",
          priceRate: "$1,301/night",
          bookingSummary: {
            checkInOut: "May 13 → May 15",
            nights: "2",
            adr: "$1,300.50",
            total: "$2,601.00",
          },
          nightsLabel: "2",
          stayCheckInOut: "May 13 → May 15",
          grandTotalInclTaxes: "$3,158.91",
          hideGallery: true,
          images: [],
          features: sharedPerks,

          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=D2QP56&rate=P56&hotel=4238&checkin=2026-05-13&checkout=2026-05-15&guests=2&children=0&rooms=1",
        },
      ],
    },
  ],

};
