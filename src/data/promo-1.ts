import type { Promo } from "../types";
import { sharedContact } from "./contact";

// AGENT NOTE: Standard and Flexible rate variants have identical pricing.
// Using Standard rate booking URLs (room codes: K1KEE1, J1KEE1, G1KEE1).
// No BAR vs SEASONAL OFFER distinction — priceStrike is empty.
// Totals from booking page are incl. taxes & fees (37.5% markup over base rate × nights).

export const promo1: Promo = {
  id: "promo-1",
  createdAt: "2026-03-21T12:00:00Z",
  mastheadEyebrow: "Travel Proposal",
  title: "Nassau, Bahamas — Rosewood Baha Mar",
  client: "",
  dates: "March 28 – 31, 2026 | 3 Nights | 3 Room Options",
  thumbnailUrl:
    "https://images.trvl-media.com/lodging/9000000/8700000/8695400/8695378/16953b0a.jpg",
  portalTotalLabel: "Starting From",
  portalTotalValue: "$5,820.00",

  hero: {
    imageUrl:
      "https://blubathworks.com/wp-content/uploads/2023/06/BahaMar_4_GAL-min.jpg",
    alt: "Rosewood Baha Mar — Nassau, Bahamas",
    hotel: "Rosewood Baha Mar",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Nassau, Bahamas &nbsp;|&nbsp; Caribbean Luxury Resort",
  },

  offer: {
    heading: "WhataHotel! Exclusive",
    description:
      "Book through WhataHotel! and enjoy exclusive complimentary perks at <strong>Rosewood Baha Mar</strong> — including a room upgrade, daily breakfast, resort credit, and more.",
    pills: [
      "✔ Room Category Upgrade (subject to availability)",
      "✔ Daily Breakfast for 2",
      "✔ $125 Resort Credit",
      "✔ Complimentary WiFi",
      "✔ Late Check-Out (subject to availability)",
    ],
  },

  rooms: [
    // ─── Room Option 1: Garden View Room King ───
    {
      badgeText: "🏨 Option 1",
      name: "Garden View Room King",
      subtitle:
        "485 sq ft · King Bed · Garden View<br/><strong style='color: var(--burgundy)'>From $1,940/night</strong>",
      priceLabel: "Per night (excl. taxes & fees)",
      priceRate: "$1,940",
      priceStrike: "",
      priceTotal: "3-Night Total: $5,820",
      stayTotalExclAmount: "$5,820",
      stayTotalExclSub: "3 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "$8,002.50",
      grandTotalInclTaxesLabel: "Grand total (incl. taxes & fees)",
      stayCheckInOut: "Mar 28 → Mar 31",
      nightsLabel: "3",
      bookingSummary: {
        checkInOut: "Mar 28 → Mar 31",
        nights: "3",
        adr: "$1,940",
        total: "$8,002.50",
      },
      images: [
        {
          src: "https://d2573qu6qrjt8c.cloudfront.net/7B032B6BD7F94C19B6313257BA929444/7B032B6BD7F94C19B6313257BA929444.JPEG",
          alt: "Garden View Room King — Rosewood Baha Mar",
        },
        {
          src: "https://d2573qu6qrjt8c.cloudfront.net/D71695AB2C8A43B0A4A89388056B0BCA/E.JPEG",
          alt: "Garden View Room — Rosewood Baha Mar",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "485 sq ft of luxury living space",
            "King bed with premium linens",
            "Lush garden views",
            "Marble bathroom with soaking tub",
            "In-room safe and minibar",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Complimentary breakfast for 2 daily",
            "$125 resort credit",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "WhataHotel! rate: $1,940/night &times; 3 = <strong>$5,820</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$8,002.50</strong>",
        rightLabel: "(excl. taxes)",
        rightValue: "$5,820",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=K1KEE1&rate=1RW&hotel=2982&checkin=2026-03-28&checkout=2026-03-31&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Garden View Room King",
    },

    // ─── Room Option 2: Ocean View King Room ───
    {
      badgeText: "🏨 Option 2",
      name: "Ocean View King Room",
      subtitle:
        "485 sq ft · King Bed · Ocean View<br/><strong style='color: var(--burgundy)'>From $2,256.67/night</strong>",
      priceLabel: "Per night (excl. taxes & fees)",
      priceRate: "$2,256.67",
      priceStrike: "",
      priceTotal: "3-Night Total: $6,770.01",
      stayTotalExclAmount: "$6,770.01",
      stayTotalExclSub: "3 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "$9,308.75",
      grandTotalInclTaxesLabel: "Grand total (incl. taxes & fees)",
      stayCheckInOut: "Mar 28 → Mar 31",
      nightsLabel: "3",
      bookingSummary: {
        checkInOut: "Mar 28 → Mar 31",
        nights: "3",
        adr: "$2,256.67",
        total: "$9,308.75",
      },
      images: [
        {
          src: "https://d2573qu6qrjt8c.cloudfront.net/852EBEC6851F49418B6EF194BB0CB69B/E.JPEG",
          alt: "Ocean View King Room — Rosewood Baha Mar",
        },
        {
          src: "https://d2573qu6qrjt8c.cloudfront.net/F517258BC3AF4EE4A74CBF2D0DB069EA/E.JPEG",
          alt: "Ocean View Room — Rosewood Baha Mar",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "485 sq ft of luxury living space",
            "King bed with premium linens",
            "Partial ocean views",
            "Marble bathroom with soaking tub",
            "In-room safe and minibar",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Complimentary breakfast for 2 daily",
            "$125 resort credit",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "WhataHotel! rate: $2,256.67/night &times; 3 = <strong>$6,770.01</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$9,308.75</strong>",
        rightLabel: "(excl. taxes)",
        rightValue: "$6,770.01",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=J1KEE1&rate=1RW&hotel=2982&checkin=2026-03-28&checkout=2026-03-31&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Ocean View King Room",
    },

    // ─── Room Option 3: Garden View King Studio ───
    {
      badgeText: "🏨 Option 3",
      name: "Garden View King Studio",
      subtitle:
        "728 sq ft · King Bed · Garden View · Kitchenette<br/><strong style='color: var(--burgundy)'>From $2,406.67/night</strong>",
      priceLabel: "Per night (excl. taxes & fees)",
      priceRate: "$2,406.67",
      priceStrike: "",
      priceTotal: "3-Night Total: $7,220.01",
      stayTotalExclAmount: "$7,220.01",
      stayTotalExclSub: "3 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "$9,927.50",
      grandTotalInclTaxesLabel: "Grand total (incl. taxes & fees)",
      stayCheckInOut: "Mar 28 → Mar 31",
      nightsLabel: "3",
      bookingSummary: {
        checkInOut: "Mar 28 → Mar 31",
        nights: "3",
        adr: "$2,406.67",
        total: "$9,927.50",
      },
      images: [
        {
          src: "https://images.trvl-media.com/lodging/9000000/8700000/8695400/8695378/18d4db80.jpg",
          alt: "Garden View King Studio — Rosewood Baha Mar",
        },
        {
          src: "https://reservations.rosewoodhotels.com/shs-ngbe-image-resizer/images/hotel/62018/images/room/bhm_rvg1.jpeg",
          alt: "Garden View Studio — Rosewood Baha Mar",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "728 sq ft of luxury living space",
            "King bed with premium linens",
            "Lush garden views",
            "Kitchenette with full amenities",
            "Marble bathroom with soaking tub",
            "Separate living area",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Complimentary breakfast for 2 daily",
            "$125 resort credit",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "WhataHotel! rate: $2,406.67/night &times; 3 = <strong>$7,220.01</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$9,927.50</strong>",
        rightLabel: "(excl. taxes)",
        rightValue: "$7,220.01",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=G1KEE1&rate=1RW&hotel=2982&checkin=2026-03-28&checkout=2026-03-31&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Garden View King Studio",
    },
  ],

  pricingFootnote:
    "All nightly rates shown are per room, per night and exclude applicable taxes, resort fees, and service charges. Grand totals include taxes &amp; fees. Rates subject to availability.",

  contact: sharedContact,
};
