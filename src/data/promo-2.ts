import type { Promo } from "../types";

// AGENT NOTE: Two rate variants per room — "WhataHotel! UPFRONT SAVINGS" (lower, prepay)
// and "WhataHotel! Exclusive Rate" (higher, includes complimentary perks + free cancellation).
// Using Exclusive Rate booking URLs (rate=2SH) since they include WhataHotel! exclusive perks
// (room upgrade, breakfast for 2, $100 spa credit, WiFi, late checkout).
// Free cancellation before May 26, 2026.

export const promo2: Promo = {
  id: "promo-2",
  createdAt: "2026-03-23T12:00:00Z",
  mastheadEyebrow: "Travel Proposal",
  title: "Miami Beach, Florida — Acqualina Resort",
  client: "",
  dates: "June 2 – 5, 2026 | 3 Nights | 3 Room Options",
  thumbnailUrl:
    "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/152/877/315/acqualina_room_3b_P.jpg",
  portalTotalLabel: "Starting From",
  portalTotalValue: "$2,921.01",

  hero: {
    imageUrl:
      "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/152/877/315/acqualina_room_3b_P.jpg",
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
    // ─── Room Option 1: Intracoastal Room with City-View King ───
    {
      badgeText: "🏨 Option 1",
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
          alt: "Intracoastal Room with City-View King — Acqualina Resort",
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

    // ─── Room Option 2: Deluxe Intracoastal Room King ───
    {
      badgeText: "🏨 Option 2",
      name: "Deluxe Intracoastal Room King",
      subtitle:
        "600 sq ft · King Bed · High Floor · Intracoastal View<br/><strong style='color: var(--burgundy)'>From $1,093.67/night</strong>",
      priceLabel: "Per night (excl. taxes & fees)",
      priceRate: "$1,093.67",
      priceStrike: "",
      priceTotal: "3-Night Total: $3,281.01",
      stayTotalExclAmount: "$3,281.01",
      stayTotalExclSub: "3 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "$3,927.88",
      grandTotalInclTaxesLabel: "Grand total (incl. taxes & fees)",
      stayCheckInOut: "Jun 2 → Jun 5",
      nightsLabel: "3",
      bookingSummary: {
        checkInOut: "Jun 2 → Jun 5",
        nights: "3",
        adr: "$1,093.67",
        total: "$3,927.88",
      },
      images: [
        {
          src: "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/152/877/299/acqualina_room_4_revised_P.jpg",
          alt: "Deluxe Intracoastal Room King — Acqualina Resort",
        },
        {
          src: "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/152/877/371/acqualina_rooms_desk_revised_P.jpg",
          alt: "Deluxe Intracoastal Room Desk Area — Acqualina Resort",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "600 sq ft on a high floor",
            "King bed with premium linens",
            "Intracoastal views with private balcony",
            "Sitting area with queen sleeper sofa (upon availability)",
            "HDTV and complimentary WiFi",
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
          "WhataHotel! rate: $1,093.67/night &times; 3 = <strong>$3,281.01</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$3,927.88</strong>",
        rightLabel: "(excl. taxes)",
        rightValue: "$3,281.01",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=B1K2SH&rate=2SH&hotel=1395&checkin=2026-06-02&checkout=2026-06-05&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Deluxe Intracoastal Room King",
    },

    // ─── Room Option 3: Intracoastal Room with City-View 2 Double ───
    {
      badgeText: "🏨 Option 3",
      name: "Intracoastal Room<br/>City-View 2 Double",
      subtitle:
        "600 sq ft · Two Full XL Beds · City View<br/><strong style='color: var(--burgundy)'>From $1,123.67/night</strong>",
      priceLabel: "Per night (excl. taxes & fees)",
      priceRate: "$1,123.67",
      priceStrike: "",
      priceTotal: "3-Night Total: $3,371.01",
      stayTotalExclAmount: "$3,371.01",
      stayTotalExclSub: "3 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "$4,029.58",
      grandTotalInclTaxesLabel: "Grand total (incl. taxes & fees)",
      stayCheckInOut: "Jun 2 → Jun 5",
      nightsLabel: "3",
      bookingSummary: {
        checkInOut: "Jun 2 → Jun 5",
        nights: "3",
        adr: "$1,123.67",
        total: "$4,029.58",
      },
      images: [
        {
          src: "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/152/877/359/acqualina_room_9b_P.jpg",
          alt: "Intracoastal Room 2 Double — Acqualina Resort",
        },
        {
          src: "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/152/877/371/acqualina_rooms_desk_revised_P.jpg",
          alt: "Intracoastal Room Desk Area — Acqualina Resort",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "600 sq ft of luxury living space",
            "Two full XL beds",
            "City views with private balcony",
            "Sitting area with HDTV",
            "Glass-enclosed shower",
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
          "WhataHotel! rate: $1,123.67/night &times; 3 = <strong>$3,371.01</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$4,029.58</strong>",
        rightLabel: "(excl. taxes)",
        rightValue: "$3,371.01",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=A2D2SH&rate=2SH&hotel=1395&checkin=2026-06-02&checkout=2026-06-05&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Intracoastal Room 2 Double",
    },
  ],

  pricingFootnote:
    "All nightly rates shown are per room, per night and exclude applicable taxes, resort fees, and service charges. Grand totals include taxes &amp; fees. Rates subject to availability. Free cancellation before May 26, 2026.",

};
