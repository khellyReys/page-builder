import type { Promo } from "../types";

// AGENT NOTE: Single-hotel VEA Newport Beach proposal.
// WhataHotel! Exclusive Rate — rate code L72, hotel ID 6431.
// Only 2 Queen Bed rooms shown (per client request): Standard, Partial Ocean View, Direct Ocean View.
// Dates: Mar 28–29, 2026 (1 night). Currency: USD.
// Perks: Room upgrade, daily breakfast for 2, $100 hotel credit, WiFi, late check-out.

export const promo13: Promo = {
  id: "promo-13",
  createdAt: "2026-03-26T12:00:00Z",
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

  rooms: [
    // ─── Room 1: Standard Room, 2 Queen Beds ───
    {
      badgeText: "🏨 Option 1",
      name: "Standard Room, 2 Queen Beds",
      subtitle:
        "343 SF · 2 Queen Beds<br/><strong style='color: var(--burgundy)'>WhataHotel! Exclusive · From $589/night</strong>",
      priceRate: "$589",
      grandTotalInclTaxes: "$736.45",
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
          title: "Exclusive Perks",
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

      bookUrl:
        "https://whatahotel.com/booking/booking_info.cfm?room=OLOK00&rate=L72&hotel=6431&checkin=2026-03-28&checkout=2026-03-29&guests=2&children=0&rooms=1",
    },

    // ─── Room 2: Partial Ocean View, 2 Queen Beds ───
    {
      badgeText: "🏨 Option 2",
      name: "Partial Ocean View Room, 2 Queen Beds",
      subtitle:
        "310 SF · 2 Queen Beds · Partial Ocean View<br/><strong style='color: var(--burgundy)'>WhataHotel! Exclusive · From $609/night</strong>",
      priceRate: "$609",
      grandTotalInclTaxes: "$759.45",
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
          title: "Exclusive Perks",
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

      bookUrl:
        "https://whatahotel.com/booking/booking_info.cfm?room=OLNO00&rate=L72&hotel=6431&checkin=2026-03-28&checkout=2026-03-29&guests=2&children=0&rooms=1",
    },

    // ─── Room 3: Direct Ocean View, 2 Queen Beds ───
    {
      badgeText: "🏨 Option 3",
      name: "Direct Ocean View Room, 2 Queen Beds",
      subtitle:
        "310 SF · 2 Queen Beds · Direct Ocean View<br/><strong style='color: var(--burgundy)'>WhataHotel! Exclusive · From $699/night</strong>",
      priceRate: "$699",
      grandTotalInclTaxes: "$862.95",
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
          title: "Exclusive Perks",
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

      bookUrl:
        "https://whatahotel.com/booking/booking_info.cfm?room=OLQM00&rate=L72&hotel=6431&checkin=2026-03-28&checkout=2026-03-29&guests=2&children=0&rooms=1",
    },
  ],

};
