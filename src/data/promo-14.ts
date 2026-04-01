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
  mastheadEyebrow: "Travel Proposal",
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

  offer: {
    heading: "WhataHotel! Exclusive",
    description:
      "Book through WhataHotel! and enjoy the <strong>WhataHotel! Rate with Breakfast</strong> at <strong>Four Seasons Resort Hualalai</strong> — including a room upgrade, full American breakfast daily for two, a <strong>$100 hotel credit</strong> ($200 for suites), complimentary WiFi, and late check-out.",
    pills: [
      "✔ Room Category Upgrade (subject to availability)",
      "✔ Full American Breakfast for Two Daily",
      "✔ $100 Hotel Credit ($200 for Suites)",
      "✔ Complimentary Basic Internet",
      "✔ Late Check-Out (based on availability)",
    ],
  },

  rooms: [
    // ─── Room 1: Ocean Golf View Room King Bed ───
    {
      badgeText: "🏨 Option 1",
      name: "Ocean Golf View Room<br/>King Bed",
      subtitle:
        "King Bed · Ocean Golf View<br/><strong style='color: var(--burgundy)'>WhataHotel! Rate w/ Breakfast · From $1,834.17/night</strong>",
      priceLabel: "Per night",
      priceRate: "$1,834.17",
      priceStrike: "",
      priceTotal: "6-Night Total: $11,005",
      stayTotalExclAmount: "$11,005",
      stayTotalExclSub: "6 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "$13,112.25",
      grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
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
      savings: {
        leftLabel:
          "6 Nights &nbsp;|&nbsp; <span>WhataHotel! Rate w/ Breakfast</span>",
        leftSub:
          "WhataHotel! rate: $1,834.17/night &times; 6 = <strong>$11,005</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$13,112.25</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "$13,112.25",
      },
      bookUrl:
        "https://whatahotel.com/booking/booking_info.cfm?room=C1KPP6&rate=PP6&hotel=2154&checkin=2026-07-25&checkout=2026-07-31&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Ocean Golf View King",
    },

    // ─── Room 2: Partial Ocean View Room King Bed ───
    {
      badgeText: "🏨 Option 2",
      name: "Partial Ocean View Room<br/>King Bed",

      subtitle:
        "King Bed · Partial Ocean View<br/><strong style='color: var(--burgundy)'>WhataHotel! Rate w/ Breakfast · From $1,859.17/night</strong>",
      priceLabel: "Per night",
      priceRate: "$1,859.17",
      priceStrike: "",
      priceTotal: "6-Night Total: $11,155",
      stayTotalExclAmount: "$11,155",
      stayTotalExclSub: "6 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "$13,290.33",
      grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
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
      savings: {
        leftLabel:
          "6 Nights &nbsp;|&nbsp; <span>WhataHotel! Rate w/ Breakfast</span>",
        leftSub:
          "WhataHotel! rate: $1,859.17/night &times; 6 = <strong>$11,155</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$13,290.33</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "$13,290.33",
      },
      bookUrl:
        "https://whatahotel.com/booking/booking_info.cfm?room=E1KPP6&rate=PP6&hotel=2154&checkin=2026-07-25&checkout=2026-07-31&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Partial Ocean View King",
    },

    // ─── Room 3: Ocean View Room King Bed ───
    {
      badgeText: "🏨 Option 3",
      name: "Ocean View Room<br/>King Bed",
      subtitle:
        "King Bed · Ocean View<br/><strong style='color: var(--burgundy)'>WhataHotel! Rate w/ Breakfast · From $1,886.67/night</strong>",
      priceLabel: "Per night",
      priceRate: "$1,886.67",
      priceStrike: "",
      priceTotal: "6-Night Total: $11,320",
      stayTotalExclAmount: "$11,320",
      stayTotalExclSub: "6 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "$13,486.20",
      grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
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
      savings: {
        leftLabel:
          "6 Nights &nbsp;|&nbsp; <span>WhataHotel! Rate w/ Breakfast</span>",
        leftSub:
          "WhataHotel! rate: $1,886.67/night &times; 6 = <strong>$11,320</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$13,486.20</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "$13,486.20",
      },
      bookUrl:
        "https://whatahotel.com/booking/booking_info.cfm?room=B1KPP6&rate=PP6&hotel=2154&checkin=2026-07-25&checkout=2026-07-31&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Ocean View King",
    },

    // ─── Room 4: Superior Suite Ocean Golf View King ───
    {
      badgeText: "🏨 Option 4",
      name: "Superior Suite<br/>Ocean Golf View",
      subtitle:
        "King Bed · Suite · Ocean Golf View<br/><strong style='color: var(--burgundy)'>WhataHotel! Rate w/ Breakfast · From $3,390/night</strong>",
      priceLabel: "Per night",
      priceRate: "$3,390",
      priceStrike: "",
      priceTotal: "6-Night Total: $20,340",
      stayTotalExclAmount: "$20,340",
      stayTotalExclSub: "6 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "$24,194.04",
      grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
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
      savings: {
        leftLabel:
          "6 Nights &nbsp;|&nbsp; <span>WhataHotel! Rate w/ Breakfast</span>",
        leftSub:
          "WhataHotel! rate: $3,390/night &times; 6 = <strong>$20,340</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$24,194.04</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "$24,194.04",
      },
      bookUrl:
        "https://whatahotel.com/booking/booking_info.cfm?room=S1KPP6&rate=PP6&hotel=2154&checkin=2026-07-25&checkout=2026-07-31&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Superior Suite Ocean Golf View",
    },
  ],

  pricingFootnote:
    "All nightly rates shown are per room, per night. Grand totals include applicable taxes, resort fees, and service charges. Rates subject to availability. Free cancellation before July 11, 2026.",

};
