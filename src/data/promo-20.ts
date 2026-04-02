import type { Promo } from "../types";

// AGENT NOTE: Single-hotel proposal — The Tokyo EDITION Toranomon
// Premier Room Tokyo Tower View (Premier Tokyo Tower King) — two date ranges
// Rate: Stay 3 nights or more and 25% off
// Date Range 1: May 19–24, 2026 (5 nights) — ¥149,550/night, ¥947,906 incl. taxes
// Date Range 2: May 26–31, 2026 (5 nights) — ¥114,300/night, ¥724,949 incl. taxes
// Currency: JPY

export const promo20: Promo = {
  id: "promo-20",
  createdAt: "2026-03-27T18:00:00Z",
  title: "Woolfall | Tokyo 🇯🇵",
  client: "Woolfall",
  dates: "May 19–24 & May 26–31, 2026 | 5 Nights | 2 Date Options",
  thumbnailUrl:
    "https://d2573qu6qrjt8c.cloudfront.net/19DFB79EB64345E6A85EE49AB127E62C/19DFB79EB64345E6A85EE49AB127E62C.jpg",
  portalTotalLabel: "Starting From",
  portalTotalValue: "¥724,949",

  hero: {
    imageUrl:
      "https://www.editionhotels.com/wp-content/uploads/2020/12/4_EDT_Tokyo2_14_RGB_V3-scaled.jpg",
    alt: "The Tokyo EDITION Toranomon",
    hotel: "The Tokyo EDITION Toranomon",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Tokyo, Japan &nbsp;|&nbsp; Luxury Urban Hotel",
  },

  rooms: [
    // ── Date Range 1: May 19–24, 2026 ──────────────────────────────
    {
      badgeText: "🏨 Option 1",
      name: "Premier Room Tokyo Tower View<br/>May 19–24, 2026",
      subtitle:
        "51 sqm / 549 sqft · King Bed · Tokyo Tower View<br/><strong style='color: var(--burgundy)'>Stay 3+ Nights & 25% Off — ¥149,550/night</strong>",
      priceRate: "¥149,550",
      grandTotalInclTaxes: "¥947,906",
      stayCheckInOut: "May 19 → May 24",
      nightsLabel: "5",
      bookingSummary: {
        checkInOut: "May 19 → May 24",
        nights: "5",
        adr: "¥149,550",
        total: "¥947,906",
      },
      images: [
        {
          src: "https://d2573qu6qrjt8c.cloudfront.net/19DFB79EB64345E6A85EE49AB127E62C/19DFB79EB64345E6A85EE49AB127E62C.jpg",
          alt: "Premier Room Tokyo Tower View — The Tokyo EDITION Toranomon",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "51 sqm / 549 sqft of luxury living space",
            "King bed with premium linens",
            "Tokyo Tower views",
            "Wireless internet",
            "Complimentary coffee/tea maker",
          ],
        },
        {
          title: "Exclusive Perks",
          icon: "gift",
          items: [
            "Stay 3+ Nights & Save 25%",
            "Room category upgrade (subject to availability at check-in)",
            "Complimentary breakfast × 2 daily",
            "$100 hotel credit",
            "Free basic WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],

      bookUrl:
        "https://whatahotel.com/booking/booking_info.cfm?room=SH0L00&rate=0S8&hotel=4183&checkin=2026-05-19&checkout=2026-05-24&guests=2&children=0&rooms=1",
    },

    // ── Date Range 2: May 26–31, 2026 ──────────────────────────────
    {
      badgeText: "🏨 Option 2",
      name: "Premier Room Tokyo Tower View<br/>May 26–31, 2026",
      subtitle:
        "51 sqm / 549 sqft · King Bed · Tokyo Tower View<br/><strong style='color: var(--burgundy)'>Stay 3+ Nights & 25% Off — ¥114,300/night</strong>",
      priceRate: "¥114,300",
      grandTotalInclTaxes: "¥724,949",
      stayCheckInOut: "May 26 → May 31",
      nightsLabel: "5",
      bookingSummary: {
        checkInOut: "May 26 → May 31",
        nights: "5",
        adr: "¥114,300",
        total: "¥724,949",
      },
      images: [
        {
          src: "https://d2573qu6qrjt8c.cloudfront.net/19DFB79EB64345E6A85EE49AB127E62C/19DFB79EB64345E6A85EE49AB127E62C.jpg",
          alt: "Premier Room Tokyo Tower View — The Tokyo EDITION Toranomon",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "51 sqm / 549 sqft of luxury living space",
            "King bed with premium linens",
            "Tokyo Tower views",
            "Wireless internet",
            "Complimentary coffee/tea maker",
          ],
        },
        {
          title: "Exclusive Perks",
          icon: "gift",
          items: [
            "Stay 3+ Nights & Save 25%",
            "Room category upgrade (subject to availability at check-in)",
            "Complimentary breakfast × 2 daily",
            "$100 hotel credit",
            "Free basic WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],

      bookUrl:
        "https://whatahotel.com/booking/booking_info.cfm?room=SH0L00&rate=0S8&hotel=4183&checkin=2026-05-26&checkout=2026-05-31&guests=2&children=0&rooms=1",
    },
  ],

};
