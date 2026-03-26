import type { Promo } from "../types";
import { sharedContact } from "./contact";

// AGENT NOTE: Single-hotel VEA Newport Beach proposal.
// WhataHotel! Exclusive Rate — rate code L72, hotel ID 6431.
// Only 2 Queen Bed rooms shown (per client request): Standard, Partial Ocean View, Direct Ocean View.
// Dates: Mar 28–29, 2026 (1 night). Currency: USD.
// Perks: Room upgrade, daily breakfast for 2, $100 hotel credit, WiFi, late check-out.

export const promo13: Promo = {
  id: "promo-13",
  createdAt: "2026-03-26T12:00:00Z",
  mastheadEyebrow: "Travel Proposal",
  title: "Weekend Trip to the Beach",
  client: "",
  dates: "March 28–29, 2026 | 1 Night | 3 Room Options",
  portalTotalLabel: "Starting From",
  portalTotalValue: "$736.45",

  hero: {
    imageUrl:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/514617509.jpg?k=050b62566875b8c1e29256570617b94a88fc22b4b159ba0a90004e20cda8dc11&o=&hp=1",
    alt: "VEA Newport Beach, A Marriott Resort & Spa — Newport Beach, California",
    hotel: "VEA Newport Beach, A Marriott Resort & Spa",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Newport Beach, California &nbsp;|&nbsp; Marriott Resort & Spa",
  },

  offer: {
    heading: "WhataHotel! Exclusive",
    description:
      "Book through WhataHotel! and enjoy the <strong>WhataHotel! Exclusive Rate</strong> at <strong>VEA Newport Beach, A Marriott Resort & Spa</strong> — including a room upgrade, daily breakfast for two, a <strong>$100 hotel credit</strong>, complimentary WiFi, and late check-out.",
    pills: [
      "✔ Room Category Upgrade (subject to availability)",
      "✔ Complimentary Daily Breakfast for Two",
      "✔ $100 Hotel Credit",
      "✔ Complimentary WiFi",
      "✔ Late Check-Out (based on availability)",
    ],
  },

  rooms: [
    // ─── Room 1: Standard Room, 2 Queen Beds ───
    {
      badgeText: "🏨 Option 1",
      name: "Standard Room, 2 Queen Beds",
      subtitle:
        "343 SF · 2 Queen Beds<br/><strong style='color: var(--burgundy)'>WhataHotel! Exclusive · From $589/night</strong>",
      priceLabel: "Per night",
      priceRate: "$589",
      priceStrike: "",
      priceTotal: "1-Night Total: $589",
      stayTotalExclAmount: "$589",
      stayTotalExclSub: "1 Night · excl. taxes & fees",
      grandTotalInclTaxes: "$736.45",
      grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
      stayCheckInOut: "Mar 28 → Mar 29",
      nightsLabel: "1",
      bookingSummary: {
        checkInOut: "Mar 28 → Mar 29",
        nights: "1",
        adr: "$589",
        total: "$736.45",
      },
      images: [
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/514617509.jpg?k=050b62566875b8c1e29256570617b94a88fc22b4b159ba0a90004e20cda8dc11&o=&hp=1",
          alt: "Standard Room, 2 Queen Beds — VEA Newport Beach",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "343 sq ft room",
            "2 queen beds",
            "Wireless internet",
            "Coastal resort setting in Newport Beach",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Complimentary daily breakfast for two",
            "$100 hotel credit",
            "Complimentary WiFi",
            "Late check-out (based on availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "1 Night &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "WhataHotel! rate: $589/night &times; 1 = <strong>$589</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$736.45</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "$736.45",
      },
      bookUrl:
        "https://whatahotel.com/booking/booking_info.cfm?room=OLOK00&rate=L72&hotel=6431&checkin=2026-03-28&checkout=2026-03-29&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Standard 2 Queen",
    },

    // ─── Room 2: Partial Ocean View, 2 Queen Beds ───
    {
      badgeText: "🏨 Option 2",
      name: "Partial Ocean View Room, 2 Queen Beds",
      subtitle:
        "310 SF · 2 Queen Beds · Partial Ocean View<br/><strong style='color: var(--burgundy)'>WhataHotel! Exclusive · From $609/night</strong>",
      priceLabel: "Per night",
      priceRate: "$609",
      priceStrike: "",
      priceTotal: "1-Night Total: $609",
      stayTotalExclAmount: "$609",
      stayTotalExclSub: "1 Night · excl. taxes & fees",
      grandTotalInclTaxes: "$759.45",
      grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
      stayCheckInOut: "Mar 28 → Mar 29",
      nightsLabel: "1",
      bookingSummary: {
        checkInOut: "Mar 28 → Mar 29",
        nights: "1",
        adr: "$609",
        total: "$759.45",
      },
      images: [
        {
          src: "https://images.trvl-media.com/lodging/1000000/20000/19100/19095/f88df8b7.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          alt: "Partial Ocean View Room, 2 Queen Beds — VEA Newport Beach",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "310 sq ft room with partial ocean view",
            "2 queen beds",
            "Wireless internet",
            "Coastal resort setting in Newport Beach",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Complimentary daily breakfast for two",
            "$100 hotel credit",
            "Complimentary WiFi",
            "Late check-out (based on availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "1 Night &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "WhataHotel! rate: $609/night &times; 1 = <strong>$609</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$759.45</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "$759.45",
      },
      bookUrl:
        "https://whatahotel.com/booking/booking_info.cfm?room=OLNO00&rate=L72&hotel=6431&checkin=2026-03-28&checkout=2026-03-29&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Partial Ocean View 2 Queen",
    },

    // ─── Room 3: Direct Ocean View, 2 Queen Beds ───
    {
      badgeText: "🏨 Option 3",
      name: "Direct Ocean View Room, 2 Queen Beds",
      subtitle:
        "310 SF · 2 Queen Beds · Direct Ocean View<br/><strong style='color: var(--burgundy)'>WhataHotel! Exclusive · From $699/night</strong>",
      priceLabel: "Per night",
      priceRate: "$699",
      priceStrike: "",
      priceTotal: "1-Night Total: $699",
      stayTotalExclAmount: "$699",
      stayTotalExclSub: "1 Night · excl. taxes & fees",
      grandTotalInclTaxes: "$862.95",
      grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
      stayCheckInOut: "Mar 28 → Mar 29",
      nightsLabel: "1",
      bookingSummary: {
        checkInOut: "Mar 28 → Mar 29",
        nights: "1",
        adr: "$699",
        total: "$862.95",
      },
      images: [
        {
          src: "https://images.trvl-media.com/lodging/1000000/20000/19100/19095/4fdf9ac1.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          alt: "Direct Ocean View Room, 2 Queen Beds — VEA Newport Beach",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "310 sq ft room with direct ocean view",
            "2 queen beds",
            "Wireless internet",
            "Coastal resort setting in Newport Beach",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Complimentary daily breakfast for two",
            "$100 hotel credit",
            "Complimentary WiFi",
            "Late check-out (based on availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "1 Night &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "WhataHotel! rate: $699/night &times; 1 = <strong>$699</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$862.95</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "$862.95",
      },
      bookUrl:
        "https://whatahotel.com/booking/booking_info.cfm?room=OLQM00&rate=L72&hotel=6431&checkin=2026-03-28&checkout=2026-03-29&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Direct Ocean View 2 Queen",
    },
  ],

  pricingFootnote:
    "All nightly rates shown are per room, per night. Grand totals include applicable taxes, resort fees, and service charges. Rates subject to availability. Free cancellation before March 25, 2026.",

  contact: sharedContact,
};
