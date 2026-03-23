import type { Promo } from "../types";
import { sharedContact } from "./contact";

// AGENT NOTE: Multi-hotel proposal — 3 resorts, cheapest room category only.
// Hotel 1: Malliouhana, Auberge Collection (Anguilla) — rate=2SH
// Hotel 2: Ritz-Carlton Naples (FL) — rate=0S8
// Hotel 3: Acqualina Resort (Miami Beach) — rate=2SH (Exclusive Rate with perks)
// All dates: June 2–5, 2026 (3 nights). Currency: USD.

export const promo4: Promo = {
  id: "promo-4",
  createdAt: "2026-03-23T20:00:00Z",
  mastheadEyebrow: "Travel Proposal",
  title: "Greg's Getaway",
  client: "Greg",
  dates: "June 2 – 5, 2026 | 3 Nights | 3 Resort Options",
  thumbnailUrl:
    "https://d2573qu6qrjt8c.cloudfront.net/A19406CB929C4FB0B9219028A1C31B28/A19406CB929C4FB0B9219028A1C31B28.JPEG",
  portalTotalLabel: "Starting From",
  portalTotalValue: "$3,193.47",

  hotels: [
    // ═══════════════════════════════════════════════════
    // Hotel 1: Malliouhana, Auberge Collection — Anguilla
    // ═══════════════════════════════════════════════════
    {
      hero: {
        imageUrl:
          "https://d2573qu6qrjt8c.cloudfront.net/A19406CB929C4FB0B9219028A1C31B28/A19406CB929C4FB0B9219028A1C31B28.JPEG",
        alt: "Malliouhana, Auberge Collection — Anguilla, BWI",
        hotel: "Malliouhana, Auberge Collection",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Anguilla, BWI &nbsp;|&nbsp; Caribbean Luxury Resort",
      },
      offer: {
        heading: "WhataHotel! Exclusive",
        description:
          "Book through WhataHotel! and enjoy exclusive complimentary perks at <strong>Malliouhana, Auberge Collection</strong> — including a room upgrade, daily full breakfast, $100 resort credit, and more.",
        pills: [
          "✔ Room Category Upgrade (subject to availability)",
          "✔ Full Breakfast for 2 Daily (max $35/person/day)",
          "✔ $100 Resort Credit",
          "✔ Complimentary WiFi",
          "✔ Late Check-Out (subject to availability)",
        ],
      },
      rooms: [
        {
          badgeText: "🏨 Hotel Option 1",
          name: "Ocean View Premium King",
          subtitle:
            "72 sqm · King Bed · Private Terrace · Ocean View<br/><strong style='color: var(--burgundy)'>From $1,185.67/night</strong>",
          priceLabel: "Per night (excl. taxes & fees)",
          priceRate: "$1,185.67",
          priceStrike: "",
          priceTotal: "3-Night Total: $3,557.01",
          stayTotalExclAmount: "$3,557.01",
          stayTotalExclSub: "3 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "$4,446.25",
          grandTotalInclTaxesLabel: "Grand total (incl. taxes & fees)",
          stayCheckInOut: "Jun 2 → Jun 5",
          nightsLabel: "3",
          bookingSummary: {
            checkInOut: "Jun 2 → Jun 5",
            nights: "3",
            adr: "$1,185.67",
            total: "$4,446.25",
          },
          images: [
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/A19406CB929C4FB0B9219028A1C31B28/A19406CB929C4FB0B9219028A1C31B28.JPEG",
              alt: "Ocean View Premium King — Malliouhana",
            },
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/0478D8BAD97B40F994DC1CA1E6BFC8A7/E.JPEG",
              alt: "Ocean View Premium King Detail — Malliouhana",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "72 sqm with private terrace",
                "King bed with premium linens",
                "Ocean views",
                "Air conditioning and seating area",
                "En-suite bathroom with separate shower",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Full breakfast for 2 daily (max $35/person/day)",
                "$100 resort credit per stay",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: $1,185.67/night &times; 3 = <strong>$3,557.01</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$4,446.25</strong>",
            rightLabel: "(excl. taxes)",
            rightValue: "$3,557.01",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=P1K2SH&rate=2SH&hotel=3706&checkin=2026-06-02&checkout=2026-06-05&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Ocean View Premium King",
        },
      ],
    },

    // ═══════════════════════════════════════════════════
    // Hotel 2: The Ritz-Carlton, Naples — Florida
    // ═══════════════════════════════════════════════════
    {
      hero: {
        imageUrl:
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/437390595.webp?k=d3288e630db99d65d5514bfc6370ce408c2cc80aa8c599701a06101bb608f00c&o=",
        alt: "The Ritz-Carlton, Naples — Naples, Florida",
        hotel: "The Ritz-Carlton, Naples",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Naples, Florida &nbsp;|&nbsp; Beachfront Luxury Resort",
      },
      offer: {
        heading: "WhataHotel! Exclusive",
        description:
          "Book through WhataHotel! and enjoy exclusive complimentary perks at <strong>The Ritz-Carlton, Naples</strong> — including a room upgrade, daily breakfast for 2, $100 hotel credit, and more.",
        pills: [
          "✔ Room Category Upgrade (subject to availability)",
          "✔ Complimentary Breakfast for 2 Daily",
          "✔ $100 Hotel Credit",
          "✔ Complimentary WiFi",
          "✔ Late Check-Out (subject to availability)",
        ],
      },
      rooms: [
        {
          badgeText: "🏨 Hotel Option 2",
          name: "Non Balcony Guest Room King",
          subtitle:
            "434 sq ft · King Bed · Standard Room<br/><strong style='color: var(--burgundy)'>From $899/night</strong>",
          priceLabel: "Per night (excl. taxes & fees)",
          priceRate: "$899",
          priceStrike: "",
          priceTotal: "3-Night Total: $2,697",
          stayTotalExclAmount: "$2,697",
          stayTotalExclSub: "3 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "$3,193.47",
          grandTotalInclTaxesLabel: "Grand total (incl. taxes & fees)",
          stayCheckInOut: "Jun 2 → Jun 5",
          nightsLabel: "3",
          bookingSummary: {
            checkInOut: "Jun 2 → Jun 5",
            nights: "3",
            adr: "$899",
            total: "$3,193.47",
          },
          images: [
            {
              src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/437390595.webp?k=d3288e630db99d65d5514bfc6370ce408c2cc80aa8c599701a06101bb608f00c&o=",
              alt: "Non Balcony Guest Room King — The Ritz-Carlton, Naples",
            },
            {
              src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/437390661.webp?k=1e3007c84118f775d90e7dad5089e694daa7e9f2b3605b4dba260b7187b19020&o=",
              alt: "Guest Room Detail — The Ritz-Carlton, Naples",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "434 sq ft of luxury living space",
                "King bed with premium linens",
                "Mini fridge",
                "Wireless internet",
                "Marble bathroom",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Complimentary breakfast for 2 daily",
                "$100 hotel credit",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: $899/night &times; 3 = <strong>$2,697</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$3,193.47</strong>",
            rightLabel: "(excl. taxes)",
            rightValue: "$2,697",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=Z43B00&rate=0S8&hotel=1434&checkin=2026-06-02&checkout=2026-06-05&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Non Balcony Guest Room King",
        },
      ],
    },

    // ═══════════════════════════════════════════════════
    // Hotel 3: Acqualina Resort — Miami Beach, Florida
    // ═══════════════════════════════════════════════════
    {
      hero: {
        imageUrl:
          "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/152/877/324/acqualina_room_8_revised_P.jpg",
        alt: "Acqualina Resort — Miami Beach, Florida",
        hotel: "Acqualina Resort",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Miami Beach, Florida &nbsp;|&nbsp; Oceanfront Luxury Resort",
      },
      offer: {
        heading: "WhataHotel! Exclusive",
        description:
          "Book through WhataHotel! and enjoy exclusive complimentary perks at <strong>Acqualina Resort</strong> — including a room upgrade, daily breakfast for 2, $100 spa credit, and more.",
        pills: [
          "✔ Room Category Upgrade (subject to availability)",
          "✔ Complimentary Breakfast for 2 Daily (Il Mulino NY)",
          "✔ $100 Spa Services Credit",
          "✔ Complimentary WiFi",
          "✔ Late Check-Out (subject to availability)",
        ],
      },
      rooms: [
        {
          badgeText: "🏨 Hotel Option 3",
          name: "Intracoastal Room<br/>City-View King",
          subtitle:
            "600 sq ft · King Bed · City View<br/><strong style='color: var(--burgundy)'>From $973.67/night</strong>",
          priceLabel: "Per night (excl. taxes & fees)",
          priceRate: "$973.67",
          priceStrike: "",
          priceTotal: "3-Night Total: $2,921.01",
          stayTotalExclAmount: "$2,921.01",
          stayTotalExclSub: "3 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "$3,521.08",
          grandTotalInclTaxesLabel: "Grand total (incl. taxes & fees)",
          stayCheckInOut: "Jun 2 → Jun 5",
          nightsLabel: "3",
          bookingSummary: {
            checkInOut: "Jun 2 → Jun 5",
            nights: "3",
            adr: "$973.67",
            total: "$3,521.08",
          },
          images: [
            {
              src: "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/152/877/324/acqualina_room_8_revised_P.jpg",
              alt: "Intracoastal Room City-View King — Acqualina Resort",
            },
            {
              src: "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/148/289/758/ACQ_Deluxe_Intracoastal_Bath_2_P.jpg",
              alt: "Intracoastal Room Bathroom — Acqualina Resort",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "600 sq ft of luxury living space",
                "King bed with queen sleeper sofa",
                "City views with private balcony",
                "Sitting area with HDTV",
                "Shower and bathtub",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Complimentary breakfast for 2 daily (Il Mulino NY)",
                "$100 spa services credit",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: $973.67/night &times; 3 = <strong>$2,921.01</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$3,521.08</strong>",
            rightLabel: "(excl. taxes)",
            rightValue: "$2,921.01",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=C1K2SH&rate=2SH&hotel=1395&checkin=2026-06-02&checkout=2026-06-05&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Intracoastal Room City-View King",
        },
      ],
    },
  ],

  pricingFootnote:
    "All nightly rates shown are per room, per night and exclude applicable taxes, resort fees, and service charges. Grand totals include taxes &amp; fees. Rates subject to availability.",

  contact: sharedContact,
};
