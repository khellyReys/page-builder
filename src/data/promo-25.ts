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
  suppressOfferBanner: true,

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
      offer: {
        heading:
          "May 12–15, 2026 · 3 Nights — Advance Purchase vs. Flexible Rate",
        description:
          "Compare Advance Purchase savings (Plan Ahead & Save 15%) against the standard Flexible Rate for a 3-night stay.",
        pills: [
          "3 Nights",
          "Advance Purchase",
          "Save Up to 15%",
          "vs. Flexible Rate",
        ],
        hidden: false,
      },
      rooms: [
        // ── Calistoga King Studio — Advance Purchase (C1KP56) vs. Standard (C1K2SH) ──
        {
          badgeText: "Advance Purchase",
          name: "Calistoga King Studio",
          subtitle: "1 King Bed · Private Patio · Pebble Floor Shower",
          priceLabel: "Advance Purchase (Save Up to 15%)",
          priceRate: "$1,055/night",
          priceStrike: "$1,242/night",
          priceTotal: "3-Night Total: $3,166 (excl. taxes)",
          stayTotalExclAmount: "$3,166",
          stayTotalExclSub: "3 Nights · excl. taxes & fees¹",
          bookingSummary: {
            checkInOut: "May 12 → May 15",
            nights: "3",
            adr: "$1,055.42",
            total: "$3,166.26",
          },
          grandTotalInclTaxes: "$3,890.89",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          hideGallery: true,
          images: [],
          features: sharedPerks,
          savings: {
            leftLabel: "Advance Purchase Rate",
            leftSub: "Save $644 vs. Flexible Rate · 3 Nights",
            rightLabel: "Grand Total",
            rightValue: "$3,890.89",
            rightInclTaxesLabel: "Flexible Rate Grand Total",
            rightInclTaxesValue: "$4,534.94",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=C1KP56&rate=P56&hotel=4238&checkin=2026-05-12&checkout=2026-05-15&guests=2&children=0&rooms=1",
          bookLabel: "Book Now",
        },
        // ── Valley Two Queen Studio — Advance Purchase (C2QP56) vs. Standard (C2Q2SH) ──
        {
          badgeText: "Advance Purchase",
          name: "Valley Two Queen Studio",
          subtitle: "2 Queen Beds · Pebble Floor · 585 sq ft",
          priceLabel: "Advance Purchase (Save Up to 15%)",
          priceRate: "$1,183/night",
          priceStrike: "$1,392/night",
          priceTotal: "3-Night Total: $3,549 (excl. taxes)",
          stayTotalExclAmount: "$3,549",
          stayTotalExclSub: "3 Nights · excl. taxes & fees¹",
          bookingSummary: {
            checkInOut: "May 12 → May 15",
            nights: "3",
            adr: "$1,182.92",
            total: "$3,548.76",
          },
          grandTotalInclTaxes: "$4,331.78",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          hideGallery: true,
          images: [],
          features: sharedPerks,
          savings: {
            leftLabel: "Advance Purchase Rate",
            leftSub: "Save $722 vs. Flexible Rate · 3 Nights",
            rightLabel: "Grand Total",
            rightValue: "$4,331.78",
            rightInclTaxesLabel: "Flexible Rate Grand Total",
            rightInclTaxesValue: "$5,053.61",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=C2QP56&rate=P56&hotel=4238&checkin=2026-05-12&checkout=2026-05-15&guests=2&children=0&rooms=1",
          bookLabel: "Book Now",
        },
        // ── Fireside Garden Terrace King — Advance Purchase (D1KP56) vs. Standard (D1K2SH) ──
        {
          badgeText: "Advance Purchase",
          name: "Fireside Garden Terrace King",
          subtitle:
            "1 King Bed · Large Private Garden Terrace · Fireplace & Fountain",
          priceLabel: "Advance Purchase (Save Up to 15%)",
          priceRate: "$1,187/night",
          priceStrike: "$1,397/night",
          priceTotal: "3-Night Total: $3,562 (excl. taxes)",
          stayTotalExclAmount: "$3,562",
          stayTotalExclSub: "3 Nights · excl. taxes & fees¹",
          bookingSummary: {
            checkInOut: "May 12 → May 15",
            nights: "3",
            adr: "$1,187.17",
            total: "$3,561.51",
          },
          grandTotalInclTaxes: "$4,346.48",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          hideGallery: true,
          images: [],
          features: sharedPerks,
          savings: {
            leftLabel: "Advance Purchase Rate",
            leftSub: "Save $724 vs. Flexible Rate · 3 Nights",
            rightLabel: "Grand Total",
            rightValue: "$4,346.48",
            rightInclTaxesLabel: "Flexible Rate Grand Total",
            rightInclTaxesValue: "$5,070.90",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=D1KP56&rate=P56&hotel=4238&checkin=2026-05-12&checkout=2026-05-15&guests=2&children=0&rooms=1",
          bookLabel: "Book Now",
        },
        // ── Fireside Garden Two Queens — Advance Purchase (D2QP56) vs. Standard (D2Q2SH) ──
        {
          badgeText: "Advance Purchase",
          name: "Fireside Garden Two Queens",
          subtitle:
            "2 Queen Beds · Large Private Garden Terrace · Ideal for Families",
          priceLabel: "Advance Purchase (Save Up to 15%)",
          priceRate: "$1,230/night",
          priceStrike: "$1,447/night",
          priceTotal: "3-Night Total: $3,689 (excl. taxes)",
          stayTotalExclAmount: "$3,689",
          stayTotalExclSub: "3 Nights · excl. taxes & fees¹",
          bookingSummary: {
            checkInOut: "May 12 → May 15",
            nights: "3",
            adr: "$1,229.67",
            total: "$3,689.01",
          },
          grandTotalInclTaxes: "$4,493.44",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          hideGallery: true,
          images: [],
          features: sharedPerks,
          savings: {
            leftLabel: "Advance Purchase Rate",
            leftSub: "Save $750 vs. Flexible Rate · 3 Nights",
            rightLabel: "Grand Total",
            rightValue: "$4,493.44",
            rightInclTaxesLabel: "Flexible Rate Grand Total",
            rightInclTaxesValue: "$5,243.79",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=D2QP56&rate=P56&hotel=4238&checkin=2026-05-12&checkout=2026-05-15&guests=2&children=0&rooms=1",
          bookLabel: "Book Now",
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
      offer: {
        heading:
          "May 13–15, 2026 · 2 Nights — Advance Purchase vs. Flexible Rate",
        description:
          "Compare Advance Purchase savings (Plan Ahead & Save 15%) against the standard Flexible Rate for a 2-night stay.",
        pills: [
          "2 Nights",
          "Advance Purchase",
          "Save Up to 15%",
          "vs. Flexible Rate",
        ],
        hidden: false,
      },
      rooms: [
        // ── Calistoga King Studio — Advance Purchase (C1KP56) vs. Standard (C1K2SH) ──
        // AGENT NOTE: 2 rate variants — Advance Purchase $1,102.88 (C1KP56) and Standard $1,297.50 (C1K2SH). Using lowest.
        {
          badgeText: "Advance Purchase",
          name: "Calistoga King Studio",
          subtitle: "1 King Bed · Private Patio · Pebble Floor Shower",
          priceLabel: "Advance Purchase (Save Up to 15%)",
          priceRate: "$1,103/night",
          priceStrike: "$1,298/night",
          priceTotal: "2-Night Total: $2,206 (excl. taxes)",
          stayTotalExclAmount: "$2,206",
          stayTotalExclSub: "2 Nights · excl. taxes & fees¹",
          bookingSummary: {
            checkInOut: "May 13 → May 15",
            nights: "2",
            adr: "$1,102.88",
            total: "$2,205.76",
          },
          grandTotalInclTaxes: "$2,703.34",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          hideGallery: true,
          images: [],
          features: sharedPerks,
          savings: {
            leftLabel: "Advance Purchase Rate",
            leftSub: "Save $449 vs. Flexible Rate · 2 Nights",
            rightLabel: "Grand Total",
            rightValue: "$2,703.34",
            rightInclTaxesLabel: "Flexible Rate Grand Total",
            rightInclTaxesValue: "$3,152.00",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=C1KP56&rate=P56&hotel=4238&checkin=2026-05-13&checkout=2026-05-15&guests=2&children=0&rooms=1",
          bookLabel: "Book Now",
        },
        // ── Valley Two Queen Studio — Advance Purchase (C2QP56) vs. Standard (C2Q2SH) ──
        // AGENT NOTE: 2 rate variants — Advance Purchase $1,230.38 (C2QP56) and Standard $1,447.50 (C2Q2SH). Using lowest.
        {
          badgeText: "Advance Purchase",
          name: "Valley Two Queen Studio",
          subtitle: "2 Queen Beds · Pebble Floor · 585 sq ft",
          priceLabel: "Advance Purchase (Save Up to 15%)",
          priceRate: "$1,230/night",
          priceStrike: "$1,448/night",
          priceTotal: "2-Night Total: $2,461 (excl. taxes)",
          stayTotalExclAmount: "$2,461",
          stayTotalExclSub: "2 Nights · excl. taxes & fees¹",
          bookingSummary: {
            checkInOut: "May 13 → May 15",
            nights: "2",
            adr: "$1,230.38",
            total: "$2,460.76",
          },
          grandTotalInclTaxes: "$2,997.26",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          hideGallery: true,
          images: [],
          features: sharedPerks,
          savings: {
            leftLabel: "Advance Purchase Rate",
            leftSub: "Save $501 vs. Flexible Rate · 2 Nights",
            rightLabel: "Grand Total",
            rightValue: "$2,997.26",
            rightInclTaxesLabel: "Flexible Rate Grand Total",
            rightInclTaxesValue: "$3,497.78",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=C2QP56&rate=P56&hotel=4238&checkin=2026-05-13&checkout=2026-05-15&guests=2&children=0&rooms=1",
          bookLabel: "Book Now",
        },
        // ── Fireside Garden Terrace King — Advance Purchase (D1KP56) vs. Standard (D1K2SH) ──
        // AGENT NOTE: 2 rate variants — Advance Purchase $1,258.00 (D1KP56) and Standard $1,480.00 (D1K2SH). Using lowest.
        {
          badgeText: "Advance Purchase",
          name: "Fireside Garden Terrace King",
          subtitle:
            "1 King Bed · Large Private Garden Terrace · Fireplace & Fountain",
          priceLabel: "Advance Purchase (Save Up to 15%)",
          priceRate: "$1,258/night",
          priceStrike: "$1,480/night",
          priceTotal: "2-Night Total: $2,516 (excl. taxes)",
          stayTotalExclAmount: "$2,516",
          stayTotalExclSub: "2 Nights · excl. taxes & fees¹",
          bookingSummary: {
            checkInOut: "May 13 → May 15",
            nights: "2",
            adr: "$1,258.00",
            total: "$2,516.00",
          },
          grandTotalInclTaxes: "$3,060.95",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          hideGallery: true,
          images: [],
          features: sharedPerks,
          savings: {
            leftLabel: "Advance Purchase Rate",
            leftSub: "Save $512 vs. Flexible Rate · 2 Nights",
            rightLabel: "Grand Total",
            rightValue: "$3,060.95",
            rightInclTaxesLabel: "Flexible Rate Grand Total",
            rightInclTaxesValue: "$3,572.70",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=D1KP56&rate=P56&hotel=4238&checkin=2026-05-13&checkout=2026-05-15&guests=2&children=0&rooms=1",
          bookLabel: "Book Now",
        },
        // ── Fireside Garden Two Queens — Advance Purchase (D2QP56) vs. Standard (D2Q2SH) ──
        // AGENT NOTE: 2 rate variants — Advance Purchase $1,300.50 (D2QP56) and Standard $1,530.00 (D2Q2SH). Using lowest.
        {
          badgeText: "Advance Purchase",
          name: "Fireside Garden Two Queens",
          subtitle:
            "2 Queen Beds · Large Private Garden Terrace · Ideal for Families",
          priceLabel: "Advance Purchase (Save Up to 15%)",
          priceRate: "$1,301/night",
          priceStrike: "$1,530/night",
          priceTotal: "2-Night Total: $2,601 (excl. taxes)",
          stayTotalExclAmount: "$2,601",
          stayTotalExclSub: "2 Nights · excl. taxes & fees¹",
          bookingSummary: {
            checkInOut: "May 13 → May 15",
            nights: "2",
            adr: "$1,300.50",
            total: "$2,601.00",
          },
          grandTotalInclTaxes: "$3,158.91",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          hideGallery: true,
          images: [],
          features: sharedPerks,
          savings: {
            leftLabel: "Advance Purchase Rate",
            leftSub: "Save $529 vs. Flexible Rate · 2 Nights",
            rightLabel: "Grand Total",
            rightValue: "$3,158.91",
            rightInclTaxesLabel: "Flexible Rate Grand Total",
            rightInclTaxesValue: "$3,687.96",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=D2QP56&rate=P56&hotel=4238&checkin=2026-05-13&checkout=2026-05-15&guests=2&children=0&rooms=1",
          bookLabel: "Book Now",
        },
      ],
    },
  ],

  pricingFootnote:
    "¹ Taxes & fees are additional. Grand Total reflects the full stay cost including applicable taxes and resort fees. Rates shown are per room, per night based on double occupancy. Advance Purchase rates require prepayment and may have different cancellation policies.",

  contact: {
    email: "",
    footerHtml:
      "Exclusive rates and perks available only through <strong>WhataHotel!</strong>",
  },
};
