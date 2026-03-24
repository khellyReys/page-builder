import type { Promo } from "../types";
import { sharedContact } from "./contact";

export const promo10: Promo = {
  id: "promo-10",
  createdAt: "2026-03-24T20:00:00Z",
  mastheadEyebrow: "Travel Proposal",
  title: "Lake Como",
  client: "",
  dates: "August 17–20, 2026 | 3 Nights | 3 Room Options",
  portalTotalLabel: "Starting From",
  portalTotalValue: "€8,865",

  hero: {
    imageUrl: "",
    alt: "Mandarin Oriental, Lago di Como — Lake Como, Italy",
    hotel: "Mandarin Oriental, Lago di Como",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Lake Como, Italy &nbsp;|&nbsp; Aug 17–20, 2026 · 3 Nights",
  },

  offer: {
    heading: "WhataHotel! Exclusive",
    description:
      "Book through WhataHotel! and enjoy exclusive complimentary perks at <strong>Mandarin Oriental, Lago di Como</strong> — including a room upgrade, daily breakfast for two, a €90 food or spa credit, and more.",
    pills: [
      "✔ Room Category Upgrade (subject to availability)",
      "✔ Complimentary Breakfast Twice Daily",
      "✔ €90 Food or Spa Credit",
      "✔ Complimentary WiFi",
      "✔ Late Check-Out (subject to availability)",
    ],
  },

  rooms: [
    // ── Option 1: Junior Suite ──
    {
      badgeText: "🏷️ Option 1",
      name: "Junior Suite",
      subtitle:
        "67–90 sqm · King Bed · Garden View<br/><strong style='color: var(--burgundy)'>From €2,945/night</strong>",
      priceLabel: "Per night",
      priceRate: "€2,945",
      priceStrike: "",
      priceTotal: "3-Night Total: €8,865",
      stayTotalExclAmount: "€8,865",
      stayTotalExclSub: "3 Nights · excl. taxes & fees",
      stayCheckInOut: "Aug 17 → Aug 20",
      nightsLabel: "3",
      grandTotalInclTaxes: "€8,865",
      bookingSummary: {
        checkInOut: "Aug 17 → Aug 20",
        nights: "3",
        adr: "€2,945",
        total: "€8,865",
      },
      images: [],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "67–90 sqm open-plan suite with garden view",
            "King bed with luxury linens",
            "Soundproof rooms with full air conditioning",
            "Bathtub and walk-in shower",
            "Open-plan living area",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room Category Upgrade (subject to availability)",
            "Complimentary Breakfast Twice Daily",
            "€90 Food or Spa Credit",
            "Complimentary WiFi",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "€2,945/night &times; 3 = <strong>€8,865</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "€8,865",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/showRates.cfm?hotelID=3705&checkIn=2026-08-17&checkOut=2026-08-20&guests=2&children=0&rooms=1",
      bookLabel: "Book Now",
    },

    // ── Option 2: Duplex Suite ──
    {
      badgeText: "🏷️ Option 2",
      name: "Duplex Suite",
      subtitle:
        "66–107 sqm · King Bed · Partial Lake View<br/><strong style='color: var(--burgundy)'>From €3,230/night</strong>",
      priceLabel: "Per night",
      priceRate: "€3,230",
      priceStrike: "",
      priceTotal: "3-Night Total: €9,720",
      stayTotalExclAmount: "€9,720",
      stayTotalExclSub: "3 Nights · excl. taxes & fees",
      stayCheckInOut: "Aug 17 → Aug 20",
      nightsLabel: "3",
      grandTotalInclTaxes: "€9,720",
      bookingSummary: {
        checkInOut: "Aug 17 → Aug 20",
        nights: "3",
        adr: "€3,230",
        total: "€9,720",
      },
      images: [],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "66–107 sqm two-level duplex suite with partial lake view",
            "King bed with luxury linens",
            "Sofa and dining table",
            "Two-level contemporary design",
            "Full air conditioning and modern amenities",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room Category Upgrade (subject to availability)",
            "Complimentary Breakfast Twice Daily",
            "€90 Food or Spa Credit",
            "Complimentary WiFi",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "€3,230/night &times; 3 = <strong>€9,720</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "€9,720",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/showRates.cfm?hotelID=3705&checkIn=2026-08-17&checkOut=2026-08-20&guests=2&children=0&rooms=1",
      bookLabel: "Book Now",
    },

    // ── Option 3: Premier Suite ──
    {
      badgeText: "🏷️ Option 3",
      name: "Premier Suite",
      subtitle:
        "100–173 sqm · King Bed · Partial Lake View · Kitchenette<br/><strong style='color: var(--burgundy)'>From €3,895/night</strong>",
      priceLabel: "Per night",
      priceRate: "€3,895",
      priceStrike: "",
      priceTotal: "3-Night Total: €11,715",
      stayTotalExclAmount: "€11,715",
      stayTotalExclSub: "3 Nights · excl. taxes & fees",
      stayCheckInOut: "Aug 17 → Aug 20",
      nightsLabel: "3",
      grandTotalInclTaxes: "€11,715",
      bookingSummary: {
        checkInOut: "Aug 17 → Aug 20",
        nights: "3",
        adr: "€3,895",
        total: "€11,715",
      },
      images: [],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "100–173 sqm premier suite with partial lake view",
            "King bed with luxury linens",
            "Kitchenette and balcony/terrace",
            "Double sink bathroom",
            "Spacious living and dining areas",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room Category Upgrade (subject to availability)",
            "Complimentary Breakfast Twice Daily",
            "€90 Food or Spa Credit",
            "Complimentary WiFi",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "€3,895/night &times; 3 = <strong>€11,715</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "€11,715",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/showRates.cfm?hotelID=3705&checkIn=2026-08-17&checkOut=2026-08-20&guests=2&children=0&rooms=1",
      bookLabel: "Book Now",
    },
  ],

  pricingFootnote:
    "All rates shown are in EUR (€). Taxes and fees are included in the totals displayed. Free cancellation before July 27, 2026.",

  contact: sharedContact,
};
