import type { Promo } from "../types";

// AGENT NOTE: Single-hotel Four Seasons Resort Hualalai proposal.
// WhataHotel! RATE W BKFST — rate code PP6, hotel ID 2154.
// 4 room categories (per client request): Ocean Golf View, Partial Ocean View,
// Ocean View King, Superior Suite Ocean Golf View.
// Dates: Jul 25–31, 2026 (6 nights). Currency: USD.
// Perks: Room upgrade, full American breakfast x2 daily, $100 credit ($200 for suites), WiFi, late check-out.

export const promo14: Promo = {
  id: "promo-14",
  createdAt: "2026-03-26T18:00:00Z",
  title: "Big Island, Hawaii — Four Seasons Hualalai",
  client: "The Kashani Family",
  dates: "July 25 – 31, 2026 | 6 Nights | 4 Room Options",
  portalTotalLabel: "Starting From",
  portalTotalValue: "$13,112.25",

  hero: {
    imageUrl:
      "https://www.fourseasons.com/alt/img-opt/~70.1530.0,0000-156,2500-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/KON/KON_1782_original.jpg",
    alt: "Four Seasons Resort Hualalai — Kailua-Kona, Hawaii",
    hotel: "Four Seasons Resort Hualalai",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Kailua-Kona, Hawaii &nbsp;|&nbsp; Five-Star Oceanfront Resort",
  },

  rooms: [
    // ─── Room 1: Ocean Golf View Room King Bed ───
    {
      badgeText: "🏨 Option 1",
      name: "Ocean Golf View Room<br/>King Bed",
      subtitle:
        "King Bed · Ocean Golf View<br/><strong style='color: var(--burgundy)'>WhataHotel! Rate w/ Breakfast · From $1,834.17/night</strong>",
      priceRate: "$1,834.17",
      grandTotalInclTaxes: "$13,112.25",
      stayCheckInOut: "Jul 25 → Jul 31",
      nightsLabel: "6",
      bookingSummary: {
        checkInOut: "Jul 25 → Jul 31",
        nights: "6",
        adr: "$1,834.17",
        total: "$13,112.25",
      },
      images: [
        {
          src: "https://www.fourseasons.com/alt/img-opt/~65.3402.0,0000-209,4079-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/KON/KON_2541_original.jpg",
          alt: "Ocean Golf View Room King Bed",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "King bed",
            "Ocean golf view",
            "Five-star resort amenities",
            "Oceanfront Big Island setting",
          ],
        },
        {
          title: "Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Full American breakfast for two daily",
            "$100 hotel credit",
            "Complimentary basic internet",
            "Late check-out (based on availability)",
          ],
        },
      ],

      bookUrl:
        "https://whatahotel.com/booking/booking_info.cfm?room=C1KPP6&rate=PP6&hotel=2154&checkin=2026-07-25&checkout=2026-07-31&guests=2&children=0&rooms=1",
    },

    // ─── Room 2: Partial Ocean View Room King Bed ───
    {
      badgeText: "🏨 Option 2",
      name: "Partial Ocean View Room<br/>King Bed",

      subtitle:
        "King Bed · Partial Ocean View<br/><strong style='color: var(--burgundy)'>WhataHotel! Rate w/ Breakfast · From $1,859.17/night</strong>",
      priceRate: "$1,859.17",
      grandTotalInclTaxes: "$13,290.33",
      stayCheckInOut: "Jul 25 → Jul 31",
      nightsLabel: "6",
      bookingSummary: {
        checkInOut: "Jul 25 → Jul 31",
        nights: "6",
        adr: "$1,859.17",
        total: "$13,290.33",
      },
      images: [
        {
          src: "https://www.fourseasons.com/alt/img-opt/~65.3402.0,0000-209,4079-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/KON/KON_2540_original.jpg",
          alt: "Partial Ocean View Room King Bed",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "King bed",
            "Partial ocean view",
            "Five-star resort amenities",
            "Oceanfront Big Island setting",
          ],
        },
        {
          title: "Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Full American breakfast for two daily",
            "$100 hotel credit",
            "Complimentary basic internet",
            "Late check-out (based on availability)",
          ],
        },
      ],

      bookUrl:
        "https://whatahotel.com/booking/booking_info.cfm?room=E1KPP6&rate=PP6&hotel=2154&checkin=2026-07-25&checkout=2026-07-31&guests=2&children=0&rooms=1",
    },

    // ─── Room 3: Ocean View Room King Bed ───
    {
      badgeText: "🏨 Option 3",
      name: "Ocean View Room<br/>King Bed",
      subtitle:
        "King Bed · Ocean View<br/><strong style='color: var(--burgundy)'>WhataHotel! Rate w/ Breakfast · From $1,886.67/night</strong>",
      priceRate: "$1,886.67",
      grandTotalInclTaxes: "$13,486.20",
      stayCheckInOut: "Jul 25 → Jul 31",
      nightsLabel: "6",
      bookingSummary: {
        checkInOut: "Jul 25 → Jul 31",
        nights: "6",
        adr: "$1,886.67",
        total: "$13,486.20",
      },
      images: [
        {
          src: "https://www.fourseasons.com/alt/img-opt/~65.3402.0,0000-209,4079-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/KON/KON_2540_original.jpg",
          alt: "Ocean View Room King Bed",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "King bed",
            "Ocean view",
            "Five-star resort amenities",
            "Oceanfront Big Island setting",
          ],
        },
        {
          title: "Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Full American breakfast for two daily",
            "$100 hotel credit",
            "Complimentary basic internet",
            "Late check-out (based on availability)",
          ],
        },
      ],

      bookUrl:
        "https://whatahotel.com/booking/booking_info.cfm?room=B1KPP6&rate=PP6&hotel=2154&checkin=2026-07-25&checkout=2026-07-31&guests=2&children=0&rooms=1",
    },

    // ─── Room 4: Superior Suite Ocean Golf View King ───
    {
      badgeText: "🏨 Option 4",
      name: "Superior Suite<br/>Ocean Golf View",
      subtitle:
        "King Bed · Suite · Ocean Golf View<br/><strong style='color: var(--burgundy)'>WhataHotel! Rate w/ Breakfast · From $3,390/night</strong>",
      priceRate: "$3,390",
      grandTotalInclTaxes: "$24,194.04",
      stayCheckInOut: "Jul 25 → Jul 31",
      nightsLabel: "6",
      bookingSummary: {
        checkInOut: "Jul 25 → Jul 31",
        nights: "6",
        adr: "$3,390",
        total: "$24,194.04",
      },
      images: [
        {
          src: "https://www.fourseasons.com/alt/img-opt/~65.3402.0,0000-209,4079-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/KON/KON_2547_original.jpg",
          alt: "Superior Suite Ocean Golf View",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "King bed",
            "Superior suite with ocean golf view",
            "Spacious living area",
            "Five-star resort amenities",
            "Oceanfront Big Island setting",
          ],
        },
        {
          title: "Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Full American breakfast for two daily",
            "$200 hotel credit (suite benefit)",
            "Complimentary basic internet",
            "Late check-out (based on availability)",
          ],
        },
      ],

      bookUrl:
        "https://whatahotel.com/booking/booking_info.cfm?room=S1KPP6&rate=PP6&hotel=2154&checkin=2026-07-25&checkout=2026-07-31&guests=2&children=0&rooms=1",
    },
  ],

};
