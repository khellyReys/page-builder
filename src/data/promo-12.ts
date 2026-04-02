import type { Promo } from "../types";

// AGENT NOTE: Single-hotel Palace Hotel, San Francisco proposal.
// Exclusive Rate (Authorized Travel Advisors Only) — rate code 0S8.
// 2 room categories only (per client request): Superior 2 Double, Deluxe Room DD.
// Dates: Jun 17–20, 2026 (3 nights). Currency: USD.
// Key selling point: Exclusive Rate includes an EXTRA $100 Resort Credit
// COMBINABLE with standard WhataHotel! perks.

export const promo12: Promo = {
  id: "promo-12",
  createdAt: "2026-03-25T20:00:00Z",
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

  rooms: [
    // ─── Room 1: Superior, 2 Double ───
    {
      badgeText: "🏨 Option 1",
      name: "Superior Room, 2 Double Beds",
      subtitle:
        "300 SF · 2 Double Beds · Mini Fridge<br/><strong style='color: var(--burgundy)'>Exclusive Rate · From $700.67/night</strong>",
      priceRate: "$700.67",
      grandTotalInclTaxes: "$2,475.12",
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
          title: "Exclusive Perks",
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

      bookUrl:
        "https://whatahotel.com/booking/booking_info.cfm?room=ODLI00&rate=0S8&hotel=2793&checkin=2026-06-17&checkout=2026-06-20&guests=2&children=0&rooms=1",
    },

    // ─── Room 2: Deluxe Room DD (2 Double Beds) ───
    {
      badgeText: "🏨 Option 2",
      name: "Deluxe Room, 2 Double Beds",
      subtitle:
        "2 Double Beds · Spacious Deluxe Layout<br/><strong style='color: var(--burgundy)'>Exclusive Rate · From $727.33/night</strong>",
      priceRate: "$727.33",
      grandTotalInclTaxes: "$2,569.32",
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
          title: "Exclusive Perks",
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

      bookUrl:
        "https://whatahotel.com/booking/booking_info.cfm?room=ODLL00&rate=0S8&hotel=2793&checkin=2026-06-17&checkout=2026-06-20&guests=2&children=0&rooms=1",
    },
  ],

};
