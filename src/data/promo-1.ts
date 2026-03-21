import type { Promo } from "../types";
import { sharedContact } from "./contact";

// AGENT NOTE: 5-Bedroom — 2 options on page: Grand Review ($7,659.70) and The Woods ($9,104.70).
// Selecting The Woods (has real image, jet hot tub, village view).
// Rate variants: "UP TO 20PCT OFF W BKFST" $9,104.70 (V5DPR9) and "EXPE MORE/RATE W BKFST" $12,601.67 (V5DPP9/V5DPP6). Using lowest.

// AGENT NOTE: 6-Bedroom — 2 options on page: Riva Ridge ($13,981.58) and Windows ($16,690.95).
// Selecting Riva Ridge (has real images, village & mountain view, lower price).
// Rate variants: "UP TO 20PCT OFF W BKFST" $13,981.58 (R6PPR9) and "EXPE MORE/RATE W BKFST" $19,351.67 (R6PPP9/R6PPP6). Using lowest.

export const promo1: Promo = {
  id: "promo-1",
  createdAt: "2026-03-21T00:00:00Z",
  mastheadEyebrow: "Travel Proposal",
  title: "Vail, Colorado",
  client: "",
  dates: "December 15 – 18, 2026 | 3 Nights | 2 Residence Options",
  thumbnailUrl:
    "https://www.whatahotel.com/content/hotels/2390/Vail-Four-Seasons-Outside-1920x1080.jpg",
  portalTotalLabel: "Starting From",
  portalTotalValue: "$32,684.05",

  hero: {
    imageUrl:
      "https://www.whatahotel.com/content/hotels/2390/Vail-Four-Seasons-Outside-1920x1080.jpg",
    alt: "Four Seasons Resort Vail — exterior winter view",
    hotel: "Four Seasons Resort Vail",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Vail, Colorado &nbsp;|&nbsp; Ski-In / Ski-Out Luxury Resort",
  },

  offer: {
    heading: "WhataHotel! Exclusive — Up to 20% Off with Breakfast",
    description:
      "Book through WhataHotel! and enjoy exclusive savings at Four Seasons Resort Vail with complimentary perks valued at over $1,000 per stay for residences.",
    pills: [
      "✔ Room Upgrade (subject to availability)",
      "✔ Full Breakfast for 2 Daily",
      "✔ $200 Credit per Bedroom for Residences",
      "✔ Complimentary Basic Internet",
      "✔ Late Check-Out (subject to availability)",
    ],
  },

  rooms: [
    // ── Room 1: The Woods Five-Bedroom Residence ──────────────────
    {
      badgeText: "🏨 Residence 1",
      name: "The Woods<br/>Five-Bedroom Residence",
      subtitle:
        "Village View · 5th Floor · 3,479 sq ft<br/><strong style='color: var(--burgundy)'>Best Value — From $9,104.70/night</strong>",
      priceRate: "$9,104.70",
      priceStrike: "Standard: $12,601.67/night",
      priceTotal: "3-Night Total: $32,684.05 (excl. taxes)",
      stayTotalExclAmount: "$32,684.05",
      stayTotalExclSub: "3 Nights · excl. taxes & fees¹",
      investmentContextLine:
        "The Woods Five-Bedroom Residence · Dec 15–18, 2026 · 2 Adults · WhataHotel! Up to 20% Off w/ Breakfast",
      quickFacts: [
        { label: "Residence Type", value: "Five-Bedroom" },
        { label: "Size", value: "3,479 sq ft" },
        { label: "Floor", value: "5th" },
        { label: "Occupancy", value: "Up to 5 beds" },
      ],
      stayCheckInOut: "Dec 15 → Dec 18",
      nightsLabel: "3",
      bookingSummary: {
        checkInOut: "Dec 15 → Dec 18",
        nights: "3",
        adr: "$9,104.70",
        total: "$32,684.05",
      },
      images: [
        {
          src: "https://d2573qu6qrjt8c.cloudfront.net/5395BCDF153C4AA488CF63B162DBC8D7/5395BCDF153C4AA488CF63B162DBC8D7.JPEG",
          alt: "The Woods — Private Residence — Living Room",
        },
      ],
      features: [
        {
          title: "Residence Features",
          icon: "door-open",
          items: [
            "5 Bedrooms · Village View · 5th Floor",
            "3,479 sq ft of living space",
            "Full Kitchen · Dining Room · Living Room",
            "Fireplace in Bedroom",
            "Large Outdoor Patio with Jet Hot Tub & Bar",
            "Sofabed in Media Room",
            "Free WiFi throughout",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room Upgrade (subject to availability at check-in)",
            "Full Breakfast for 2 Daily",
            "$1,000 Credit ($200 per bedroom) toward F&B, Spa, or Recreation",
            "Complimentary Basic Internet",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "Standard rate: $12,601.67/night &times; 3 = $37,805.01 &mdash; WhataHotel! rate: $9,104.70/night &times; 3 = $27,314.10 &mdash; you save <strong>$10,490.91</strong>",
        rightLabel: "(excl. taxes)",
        rightValue: "$32,684.05",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=V5DPR9&rate=PP6&hotel=2390&checkin=2026-12-15&checkout=2026-12-18&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — The Woods Five-Bedroom",
    },

    // ── Room 2: Riva Ridge Six-Bedroom Residence ──────────────────
    {
      badgeText: "🏨 Residence 2",
      name: "Riva Ridge<br/>Six-Bedroom Residence",
      subtitle:
        "Village &amp; Mountain View · 5,743 sq ft · 2 Fireplaces<br/><strong style='color: var(--burgundy)'>Ultra-Luxury — From $13,981.58/night</strong>",
      priceRate: "$13,981.58",
      priceStrike: "Standard: $19,351.67/night",
      priceTotal: "3-Night Total: $50,191.07 (excl. taxes)",
      stayTotalExclAmount: "$50,191.07",
      stayTotalExclSub: "3 Nights · excl. taxes & fees¹",
      investmentContextLine:
        "Riva Ridge Six-Bedroom Residence · Dec 15–18, 2026 · 2 Adults · WhataHotel! Up to 20% Off w/ Breakfast",
      quickFacts: [
        { label: "Residence Type", value: "Six-Bedroom" },
        { label: "Size", value: "5,743 sq ft" },
        { label: "View", value: "Village & Mountain" },
        { label: "Occupancy", value: "Up to 12 guests" },
      ],
      stayCheckInOut: "Dec 15 → Dec 18",
      nightsLabel: "3",
      bookingSummary: {
        checkInOut: "Dec 15 → Dec 18",
        nights: "3",
        adr: "$13,981.58",
        total: "$50,191.07",
      },
      images: [
        {
          src: "https://d2573qu6qrjt8c.cloudfront.net/81C26D217AF44794AE4171A8932D81EA/81C26D217AF44794AE4171A8932D81EA.JPEG",
          alt: "Riva Ridge — Private Residence",
        },
      ],
      features: [
        {
          title: "Residence Features",
          icon: "door-open",
          items: [
            "6 Bedrooms · Village & Mountain View",
            "5,743 sq ft of living space",
            "Full Kitchen · 2 Fireplaces",
            "6 Double Beds",
            "Max Occupancy: 12 adults or 6 adults + 6 children",
            "Free WiFi throughout",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room Upgrade (subject to availability at check-in)",
            "Full Breakfast for 2 Daily",
            "$1,200 Credit ($200 per bedroom) toward F&B, Spa, or Recreation",
            "Complimentary Basic Internet",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "Standard rate: $19,351.67/night &times; 3 = $58,055.01 &mdash; WhataHotel! rate: $13,981.58/night &times; 3 = $41,944.74 &mdash; you save <strong>$16,110.27</strong>",
        rightLabel: "(excl. taxes)",
        rightValue: "$50,191.07",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=R6PPR9&rate=PP6&hotel=2390&checkin=2026-12-15&checkout=2026-12-18&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Riva Ridge Six-Bedroom",
    },
  ],

  pricingFootnote:
    "¹ All prices exclude applicable taxes &amp; resort fees. Rates are subject to availability and may change. Deposit required for booking.",

  contact: sharedContact,
};
