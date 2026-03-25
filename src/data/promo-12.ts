import type { Promo } from "../types";
import { sharedContact } from "./contact";

// AGENT NOTE: Single-hotel Palace Hotel, San Francisco proposal.
// Exclusive Rate (Authorized Travel Advisors Only) — rate code 0S8.
// 2 room categories only (per client request): Superior 2 Double, Deluxe Room DD.
// Dates: Jun 17–20, 2026 (3 nights). Currency: USD.
// Key selling point: Exclusive Rate includes an EXTRA $100 Resort Credit
// COMBINABLE with standard WhataHotel! perks.

export const promo12: Promo = {
  id: "promo-12",
  createdAt: "2026-03-25T20:00:00Z",
  mastheadEyebrow: "Travel Proposal",
  title: "Nicole & Colt | San Francisco",
  client: "Nicole & Colt",
  dates: "June 17–20, 2026 | 3 Nights | 2 Room Options",
  portalTotalLabel: "Starting From",
  portalTotalValue: "$2,475.12",

  hero: {
    imageUrl:
      "https://phgcdn.com/images/uploads/SFOPH/masthead/SFOPH-masthead-exteriorentrance.jpg",
    alt: "Palace Hotel — San Francisco, California",
    hotel: "Palace Hotel, a Luxury Collection Hotel",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>San Francisco, California &nbsp;|&nbsp; Historic Luxury Hotel",
  },

  offer: {
    heading: "Exclusive Rate — Authorized Travel Advisors Only",
    description:
      "Book through WhataHotel! and enjoy the <strong>Exclusive Rate (Authorized Travel Advisors Only)</strong> at <strong>Palace Hotel, San Francisco</strong> — including a room upgrade, daily breakfast for 2, <strong>PLUS an EXTRA $100 Resort Credit that is COMBINABLE with all standard perks</strong>. That means you receive the $100 Hotel Credit <em>on top of</em> your included benefits.",
    pills: [
      "✔ EXTRA $100 Resort Credit — COMBINABLE with Perks!",
      "✔ Room Category Upgrade (subject to availability)",
      "✔ Complimentary Breakfast for Two Daily",
      "✔ $100 Hotel Credit",
      "✔ Complimentary WiFi",
      "✔ Late Check-Out (upon request)",
      "✔ Bonvoy Rewards Points",
    ],
  },

  rooms: [
    // ─── Room 1: Superior, 2 Double ───
    {
      badgeText: "🏨 Option 1",
      name: "Superior Room, 2 Double Beds",
      subtitle:
        "300 SF · 2 Double Beds · Mini Fridge<br/><strong style='color: var(--burgundy)'>Exclusive Rate · From $700.67/night</strong>",
      priceLabel: "Per night",
      priceRate: "$700.67",
      priceStrike: "",
      priceTotal: "3-Night Total: $2,102.01",
      stayTotalExclAmount: "$2,102.01",
      stayTotalExclSub: "3 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "$2,475.12",
      grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
      stayCheckInOut: "Jun 17 → Jun 20",
      nightsLabel: "3",
      bookingSummary: {
        checkInOut: "Jun 17 → Jun 20",
        nights: "3",
        adr: "$700.67",
        total: "$2,475.12",
      },
      images: [
        {
          src: "https://www.sfpalace.com/wp-content/uploads/2024/07/lc-sfolc-superior-double-room-31468-2-1.jpg",
          alt: "Superior Room, 2 Double Beds — Palace Hotel San Francisco",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "300 SF room with mini fridge",
            "2 double beds",
            "Wireless internet",
            "Historic luxury setting in downtown San Francisco",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "EXTRA $100 Resort Credit — COMBINABLE with all perks below!",
            "Room category upgrade (subject to availability at check-in)",
            "Complimentary breakfast for two daily",
            "$100 hotel credit",
            "Complimentary WiFi",
            "Late check-out (upon request)",
            "Bonvoy Rewards Points on eligible stays",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>Exclusive Rate (Authorized Travel Advisors Only)</span>",
        leftSub:
          "WhataHotel! rate: $700.67/night &times; 3 = <strong>$2,102.01</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$2,475.12</strong> &mdash; Plus EXTRA $100 resort credit combinable with perks",
        rightLabel: "(incl. taxes)",
        rightValue: "$2,475.12",
      },
      bookUrl:
        "https://whatahotel.com/booking/booking_info.cfm?room=ODLI00&rate=0S8&hotel=2793&checkin=2026-06-17&checkout=2026-06-20&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Superior 2 Double (Exclusive Rate)",
    },

    // ─── Room 2: Deluxe Room DD (2 Double Beds) ───
    {
      badgeText: "🏨 Option 2",
      name: "Deluxe Room, 2 Double Beds",
      subtitle:
        "2 Double Beds · Spacious Deluxe Layout<br/><strong style='color: var(--burgundy)'>Exclusive Rate · From $727.33/night</strong>",
      priceLabel: "Per night",
      priceRate: "$727.33",
      priceStrike: "",
      priceTotal: "3-Night Total: $2,181.99",
      stayTotalExclAmount: "$2,181.99",
      stayTotalExclSub: "3 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "$2,569.32",
      grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
      stayCheckInOut: "Jun 17 → Jun 20",
      nightsLabel: "3",
      bookingSummary: {
        checkInOut: "Jun 17 → Jun 20",
        nights: "3",
        adr: "$727.33",
        total: "$2,569.32",
      },
      images: [
        {
          src: "https://www.sfpalace.com/wp-content/uploads/2024/07/sfolc-guest-room-6432-1-1.jpg",
          alt: "Deluxe Room, 2 Double Beds — Palace Hotel San Francisco",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "Spacious deluxe room layout",
            "2 double beds",
            "Wireless internet",
            "Historic luxury setting in downtown San Francisco",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "EXTRA $100 Resort Credit — COMBINABLE with all perks below!",
            "Room category upgrade (subject to availability at check-in)",
            "Complimentary breakfast for two daily",
            "$100 hotel credit",
            "Complimentary WiFi",
            "Late check-out (upon request)",
            "Bonvoy Rewards Points on eligible stays",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>Exclusive Rate (Authorized Travel Advisors Only)</span>",
        leftSub:
          "WhataHotel! rate: $727.33/night &times; 3 = <strong>$2,181.99</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$2,569.32</strong> &mdash; Plus EXTRA $100 resort credit combinable with perks",
        rightLabel: "(incl. taxes)",
        rightValue: "$2,569.32",
      },
      bookUrl:
        "https://whatahotel.com/booking/booking_info.cfm?room=ODLL00&rate=0S8&hotel=2793&checkin=2026-06-17&checkout=2026-06-20&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Deluxe 2 Double (Exclusive Rate)",
    },
  ],

  pricingFootnote:
    "All nightly rates shown are per room, per night. Grand totals include applicable taxes, resort fees, and service charges. The Exclusive Rate (Authorized Travel Advisors Only) includes an <strong>EXTRA $100 Resort Credit that is COMBINABLE</strong> with all standard WhataHotel! perks. Rates subject to availability.",

  contact: sharedContact,
};
