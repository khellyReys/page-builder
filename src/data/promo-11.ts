import type { Promo } from "../types";
import { sharedContact } from "./contact";

export const promo11: Promo = {
  id: "promo-11",
  createdAt: "2026-03-24T21:00:00Z",
  mastheadEyebrow: "Travel Proposal",
  title: "Dubai, United Arab Emirates",
  client: "",
  dates: "August 25–28, 2026 | 3 Nights | 3 Room Options",
  portalTotalLabel: "Starting From",
  portalTotalValue: "AED 12,495",

  hero: {
    imageUrl: "",
    alt: "Burj Al Arab, Jumeirah — Dubai, United Arab Emirates",
    hotel: "Burj Al Arab, Jumeirah",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Dubai, United Arab Emirates &nbsp;|&nbsp; Aug 25–28, 2026 · 3 Nights",
  },

  offer: {
    heading: "WhataHotel! Exclusive",
    description:
      "Book through WhataHotel! and enjoy exclusive complimentary perks at <strong>Burj Al Arab, Jumeirah</strong> — including a room upgrade at booking, daily breakfast for two, a $100 daily credit, and more.",
    pills: [
      "✔ Room Category Upgrade at Time of Booking",
      "✔ Complimentary Buffet Breakfast x 2 Daily",
      "✔ $100 Daily Credit (F&B and Spa)",
      "✔ Complimentary WiFi",
      "✔ Late Check-Out (subject to availability)",
    ],
  },

  rooms: [
    // ── Option 1: Panoramic One Bedroom Suite (170 sqm) ──
    {
      badgeText: "🏷️ Option 1",
      name: "Panoramic One Bedroom Suite",
      subtitle:
        "170 sqm · Duplex · King Bed · Sea View<br/><strong style='color: var(--burgundy)'>From AED 3,400/night</strong>",
      priceLabel: "Per night",
      priceRate: "AED 3,400",
      priceStrike: "",
      priceTotal: "3-Night Total: AED 10,200",
      stayTotalExclAmount: "AED 10,200",
      stayTotalExclSub: "3 Nights · excl. taxes & fees",
      stayCheckInOut: "Aug 25 → Aug 28",
      nightsLabel: "3",
      grandTotalInclTaxes: "AED 12,495",
      grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
      bookingSummary: {
        checkInOut: "Aug 25 → Aug 28",
        nights: "3",
        adr: "AED 3,400",
        total: "AED 12,495",
      },
      images: [],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "170 sqm duplex suite with panoramic sea views",
            "King bed with luxury linens",
            "Jacuzzi and marble bathroom with Hermès amenities",
            "24-hour dedicated butler service",
            "HD TV entertainment system",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room Category Upgrade at Time of Booking",
            "Complimentary Buffet Breakfast x 2 Daily",
            "$100 Daily Credit (F&B and Spa)",
            "Complimentary WiFi",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "AED 3,400/night &times; 3 = AED 10,200 &mdash; total incl. taxes: <strong>AED 12,495</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "AED 12,495",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/showRates.cfm?hotelID=1164&checkIn=2026-08-25&checkOut=2026-08-28&guests=2&children=0&rooms=1",
      bookLabel: "Book Now",
    },

    // ── Option 2: Sky Marina Suite (170 sqm) ──
    {
      badgeText: "🏷️ Option 2",
      name: "Sky Marina Suite",
      subtitle:
        "170 sqm · Duplex · High Floor · Sea View<br/><strong style='color: var(--burgundy)'>From AED 3,570/night</strong>",
      priceLabel: "Per night",
      priceRate: "AED 3,570",
      priceStrike: "",
      priceTotal: "3-Night Total: AED 10,710",
      stayTotalExclAmount: "AED 10,710",
      stayTotalExclSub: "3 Nights · excl. taxes & fees",
      stayCheckInOut: "Aug 25 → Aug 28",
      nightsLabel: "3",
      grandTotalInclTaxes: "AED 13,119.75",
      grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
      bookingSummary: {
        checkInOut: "Aug 25 → Aug 28",
        nights: "3",
        adr: "AED 3,570",
        total: "AED 13,119.75",
      },
      images: [],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "170 sqm duplex sky suite on a high floor with marina views",
            "King bed with luxury linens",
            "Jacuzzi and marble bathroom with Hermès amenities",
            "24-hour dedicated butler service",
            "HD TV entertainment system",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room Category Upgrade at Time of Booking",
            "Complimentary Buffet Breakfast x 2 Daily",
            "$100 Daily Credit (F&B and Spa)",
            "Complimentary WiFi",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "AED 3,570/night &times; 3 = AED 10,710 &mdash; total incl. taxes: <strong>AED 13,119.75</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "AED 13,119.75",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/showRates.cfm?hotelID=1164&checkIn=2026-08-25&checkOut=2026-08-28&guests=2&children=0&rooms=1",
      bookLabel: "Book Now",
    },

    // ── Option 3: Panoramic Suite (225 sqm) ──
    {
      badgeText: "🏷️ Option 3",
      name: "Panoramic Suite",
      subtitle:
        "225 sqm · Duplex · King Bed · Panoramic Sea View<br/><strong style='color: var(--burgundy)'>From AED 4,377.50/night</strong>",
      priceLabel: "Per night",
      priceRate: "AED 4,377.50",
      priceStrike: "",
      priceTotal: "3-Night Total: AED 13,132.50",
      stayTotalExclAmount: "AED 13,132.50",
      stayTotalExclSub: "3 Nights · excl. taxes & fees",
      stayCheckInOut: "Aug 25 → Aug 28",
      nightsLabel: "3",
      grandTotalInclTaxes: "AED 16,087.32",
      grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
      bookingSummary: {
        checkInOut: "Aug 25 → Aug 28",
        nights: "3",
        adr: "AED 4,377.50",
        total: "AED 16,087.32",
      },
      images: [],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "225 sqm duplex panoramic suite with sweeping sea views",
            "King bed with luxury linens",
            "Jacuzzi and marble bathroom with Hermès amenities",
            "24-hour dedicated butler service",
            "Spacious living and dining areas",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room Category Upgrade at Time of Booking",
            "Complimentary Buffet Breakfast x 2 Daily",
            "$100 Daily Credit (F&B and Spa)",
            "Complimentary WiFi",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "AED 4,377.50/night &times; 3 = AED 13,132.50 &mdash; total incl. taxes: <strong>AED 16,087.32</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "AED 16,087.32",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/showRates.cfm?hotelID=1164&checkIn=2026-08-25&checkOut=2026-08-28&guests=2&children=0&rooms=1",
      bookLabel: "Book Now",
    },
  ],

  pricingFootnote:
    "All rates shown are in AED (United Arab Emirates Dirham). Totals include taxes and fees. Free cancellation before August 22, 2026 on most rate plans.",

  contact: sharedContact,
};
