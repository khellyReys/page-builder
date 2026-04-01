import type { Promo } from "../types";

// AGENT NOTE: Single rate variant per room (rate code 1HZ). All 11 room types included.
// Currency: JPY (¥). Nightly rates are excl. taxes; 2-Night Totals are incl. taxes & fees.
// Images sourced from assets.hyatt.com (this hotel does not use cloudfront CDN).
// Free cancellation before May 30, 2026.

export const promo3: Promo = {
  id: "promo-3",
  createdAt: "2026-03-23T18:00:00Z",
  mastheadEyebrow: "Travel Proposal",
  title: "Kyoto, Japan — Park Hyatt Kyoto",
  client: "",
  dates: "June 2 – 4, 2026 | 2 Nights | 11 Room Options",
  thumbnailUrl:
    "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2025/07/23/0412/ITMPH-P0979-Garden-View-King-606.jpg/ITMPH-P0979-Garden-View-King-606.16x9.jpg",
  portalTotalLabel: "Starting From",
  portalTotalValue: "¥518,650",

  hero: {
    imageUrl:
      "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2025/07/23/0412/ITMPH-P0995-Pagoda-View-King-712.jpg/ITMPH-P0995-Pagoda-View-King-712.16x9.jpg",
    alt: "Park Hyatt Kyoto — Kyoto, Japan",
    hotel: "Park Hyatt Kyoto",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Kyoto, Japan &nbsp;|&nbsp; Luxury Hotel in Higashiyama",
  },

  offer: {
    heading: "WhataHotel! Exclusive",
    description:
      "Book through WhataHotel! and enjoy exclusive complimentary perks at <strong>Park Hyatt Kyoto</strong> — including a room upgrade, daily full breakfast, $100 hotel credit, and more.",
    pills: [
      "✔ Room Category Upgrade (subject to availability)",
      "✔ Daily Full Breakfast",
      "✔ $100 Hotel Credit",
      "✔ Complimentary WiFi",
      "✔ Late Check-Out (subject to availability)",
    ],
  },

  rooms: [
    // ─── Option 1: 1 King Bed, Garden View (45 sqm) ───
    {
      badgeText: "🏨 Option 1",
      name: "Garden View Room<br/>1 King Bed",
      subtitle:
        "45 sqm · King Bed · Garden View<br/><strong style='color: var(--burgundy)'>From ¥205,000/night</strong>",
      priceLabel: "Per night (excl. taxes & fees)",
      priceRate: "¥205,000",
      priceStrike: "",
      priceTotal: "2-Night Total: ¥410,000",
      stayTotalExclAmount: "¥410,000",
      stayTotalExclSub: "2 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "¥518,650",
      grandTotalInclTaxesLabel: "Grand total (incl. taxes & fees)",
      stayCheckInOut: "Jun 2 → Jun 4",
      nightsLabel: "2",
      bookingSummary: {
        checkInOut: "Jun 2 → Jun 4",
        nights: "2",
        adr: "¥205,000",
        total: "¥518,650",
      },
      images: [
        {
          src: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2025/07/23/0412/ITMPH-P0979-Garden-View-King-606.jpg/ITMPH-P0979-Garden-View-King-606.16x9.jpg",
          alt: "Garden View King Room — Park Hyatt Kyoto",
        },
        {
          src: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2025/07/23/0412/ITMPH-P0980-Garden-View-King-718.jpg/ITMPH-P0980-Garden-View-King-718.16x9.jpg",
          alt: "Garden View King Room Detail — Park Hyatt Kyoto",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "45 sqm of refined living space",
            "One king bed with premium linens",
            "Garden view",
            "Working area and day bed",
            "En-suite bathroom",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Daily full breakfast",
            "$100 hotel credit",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "2 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "WhataHotel! rate: ¥205,000/night &times; 2 = <strong>¥410,000</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>¥518,650</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "¥518,650",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=A1QU5V&rate=1HZ&hotel=3975&checkin=2026-06-02&checkout=2026-06-04&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Garden View King",
    },

    // ─── Option 2: 2 Twin Beds, Garden View (45 sqm) ───
    {
      badgeText: "🏨 Option 2",
      name: "Garden View Room<br/>2 Twin Beds",
      subtitle:
        "45 sqm · Twin Beds · Garden View<br/><strong style='color: var(--burgundy)'>From ¥206,700/night</strong>",
      priceLabel: "Per night (excl. taxes & fees)",
      priceRate: "¥206,700",
      priceStrike: "",
      priceTotal: "2-Night Total: ¥413,400",
      stayTotalExclAmount: "¥413,400",
      stayTotalExclSub: "2 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "¥522,951",
      grandTotalInclTaxesLabel: "Grand total (incl. taxes & fees)",
      stayCheckInOut: "Jun 2 → Jun 4",
      nightsLabel: "2",
      bookingSummary: {
        checkInOut: "Jun 2 → Jun 4",
        nights: "2",
        adr: "¥206,700",
        total: "¥522,951",
      },
      images: [
        {
          src: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2025/08/13/2229/ITMPH-P1026-Garden-View-Twin-604.jpg/ITMPH-P1026-Garden-View-Twin-604.16x9.jpg",
          alt: "Garden View Twin Room — Park Hyatt Kyoto",
        },
        {
          src: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2025/07/23/0412/ITMPH-P0982-Garden-View-Twin-610.jpg/ITMPH-P0982-Garden-View-Twin-610.16x9.jpg",
          alt: "Garden View Twin Room Detail — Park Hyatt Kyoto",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "45 sqm of refined living space",
            "Two twin beds with premium linens",
            "Garden view",
            "Working area and day bed",
            "En-suite bathroom",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Daily full breakfast",
            "$100 hotel credit",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "2 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "WhataHotel! rate: ¥206,700/night &times; 2 = <strong>¥413,400</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>¥522,951</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "¥522,951",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=B2TU5V&rate=1HZ&hotel=3975&checkin=2026-06-02&checkout=2026-06-04&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Garden View Twin",
    },

    // ─── Option 3: 1 King Bed, Garden Terrace (45 sqm) ───
    {
      badgeText: "🏨 Option 3",
      name: "Garden Terrace Room<br/>1 King Bed",
      subtitle:
        "45 sqm · King Bed · Private Japanese Garden<br/><strong style='color: var(--burgundy)'>From ¥227,000/night</strong>",
      priceLabel: "Per night (excl. taxes & fees)",
      priceRate: "¥227,000",
      priceStrike: "",
      priceTotal: "2-Night Total: ¥454,000",
      stayTotalExclAmount: "¥454,000",
      stayTotalExclSub: "2 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "¥574,310",
      grandTotalInclTaxesLabel: "Grand total (incl. taxes & fees)",
      stayCheckInOut: "Jun 2 → Jun 4",
      nightsLabel: "2",
      bookingSummary: {
        checkInOut: "Jun 2 → Jun 4",
        nights: "2",
        adr: "¥227,000",
        total: "¥574,310",
      },
      images: [
        {
          src: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2025/07/23/0412/ITMPH-P0987-Garden-Terrace-King-507.jpg/ITMPH-P0987-Garden-Terrace-King-507.16x9.jpg",
          alt: "Garden Terrace King Room — Park Hyatt Kyoto",
        },
        {
          src: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2025/07/23/0412/ITMPH-P0985-Garden-Terrace-King-309.jpg/ITMPH-P0985-Garden-Terrace-King-309.16x9.jpg",
          alt: "Garden Terrace King Room Detail — Park Hyatt Kyoto",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "45 sqm with exclusive private Japanese garden",
            "One king bed with premium linens",
            "Garden terrace access",
            "Working area and day bed",
            "En-suite bathroom",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Daily full breakfast",
            "$100 hotel credit",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "2 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "WhataHotel! rate: ¥227,000/night &times; 2 = <strong>¥454,000</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>¥574,310</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "¥574,310",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=A1KU5V&rate=1HZ&hotel=3975&checkin=2026-06-02&checkout=2026-06-04&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Garden Terrace King",
    },

    // ─── Option 4: 2 Twin Beds, Garden Terrace (45 sqm) ───
    {
      badgeText: "🏨 Option 4",
      name: "Garden Terrace Room<br/>2 Twin Beds",
      subtitle:
        "45 sqm · Twin Beds · Private Japanese Garden<br/><strong style='color: var(--burgundy)'>From ¥228,700/night</strong>",
      priceLabel: "Per night (excl. taxes & fees)",
      priceRate: "¥228,700",
      priceStrike: "",
      priceTotal: "2-Night Total: ¥457,400",
      stayTotalExclAmount: "¥457,400",
      stayTotalExclSub: "2 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "¥578,611",
      grandTotalInclTaxesLabel: "Grand total (incl. taxes & fees)",
      stayCheckInOut: "Jun 2 → Jun 4",
      nightsLabel: "2",
      bookingSummary: {
        checkInOut: "Jun 2 → Jun 4",
        nights: "2",
        adr: "¥228,700",
        total: "¥578,611",
      },
      images: [
        {
          src: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2025/07/23/0412/ITMPH-P0991-Garden-Terrace-Twin-510.jpg/ITMPH-P0991-Garden-Terrace-Twin-510.16x9.jpg",
          alt: "Garden Terrace Twin Room — Park Hyatt Kyoto",
        },
        {
          src: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2025/07/23/0412/ITMPH-P0989-Garden-Terrace-Twin-504-Reverse-Angle.jpg/ITMPH-P0989-Garden-Terrace-Twin-504-Reverse-Angle.16x9.jpg",
          alt: "Garden Terrace Twin Room Detail — Park Hyatt Kyoto",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "45 sqm with exclusive private Japanese garden",
            "Two twin beds with premium linens",
            "Garden terrace access",
            "Working area and day bed",
            "En-suite bathroom",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Daily full breakfast",
            "$100 hotel credit",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "2 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "WhataHotel! rate: ¥228,700/night &times; 2 = <strong>¥457,400</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>¥578,611</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "¥578,611",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=A2TU5V&rate=1HZ&hotel=3975&checkin=2026-06-02&checkout=2026-06-04&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Garden Terrace Twin",
    },

    // ─── Option 5: 1 King Bed, Pagoda View (45 sqm) ───
    {
      badgeText: "🏨 Option 5",
      name: "Pagoda View Room<br/>1 King Bed",
      subtitle:
        "45 sqm · King Bed · Yasaka Pagoda View<br/><strong style='color: var(--burgundy)'>From ¥250,000/night</strong>",
      priceLabel: "Per night (excl. taxes & fees)",
      priceRate: "¥250,000",
      priceStrike: "",
      priceTotal: "2-Night Total: ¥500,000",
      stayTotalExclAmount: "¥500,000",
      stayTotalExclSub: "2 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "¥632,500",
      grandTotalInclTaxesLabel: "Grand total (incl. taxes & fees)",
      stayCheckInOut: "Jun 2 → Jun 4",
      nightsLabel: "2",
      bookingSummary: {
        checkInOut: "Jun 2 → Jun 4",
        nights: "2",
        adr: "¥250,000",
        total: "¥632,500",
      },
      images: [
        {
          src: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2025/07/23/0412/ITMPH-P0995-Pagoda-View-King-712.jpg/ITMPH-P0995-Pagoda-View-King-712.16x9.jpg",
          alt: "Pagoda View King Room — Park Hyatt Kyoto",
        },
        {
          src: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2025/07/23/0412/ITMPH-P0993-Pagoda-View-King-619-Reverse-Angle.jpg/ITMPH-P0993-Pagoda-View-King-619-Reverse-Angle.16x9.jpg",
          alt: "Pagoda View King Room Detail — Park Hyatt Kyoto",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "45 sqm of refined living space",
            "One king bed with premium linens",
            "Exquisite views of Yasaka Pagoda",
            "Working area and day bed",
            "En-suite bathroom",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Daily full breakfast",
            "$100 hotel credit",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "2 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "WhataHotel! rate: ¥250,000/night &times; 2 = <strong>¥500,000</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>¥632,500</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "¥632,500",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=P1KU5V&rate=1HZ&hotel=3975&checkin=2026-06-02&checkout=2026-06-04&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Pagoda View King",
    },

    // ─── Option 6: 2 Twin Beds, Pagoda View (45 sqm) ───
    {
      badgeText: "🏨 Option 6",
      name: "Pagoda View Room<br/>2 Twin Beds",
      subtitle:
        "45 sqm · Twin Beds · Yasaka Pagoda View<br/><strong style='color: var(--burgundy)'>From ¥251,700/night</strong>",
      priceLabel: "Per night (excl. taxes & fees)",
      priceRate: "¥251,700",
      priceStrike: "",
      priceTotal: "2-Night Total: ¥503,400",
      stayTotalExclAmount: "¥503,400",
      stayTotalExclSub: "2 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "¥636,801",
      grandTotalInclTaxesLabel: "Grand total (incl. taxes & fees)",
      stayCheckInOut: "Jun 2 → Jun 4",
      nightsLabel: "2",
      bookingSummary: {
        checkInOut: "Jun 2 → Jun 4",
        nights: "2",
        adr: "¥251,700",
        total: "¥636,801",
      },
      images: [
        {
          src: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2025/07/23/0412/ITMPH-P0998-Pagoda-View-Twin-704.jpg/ITMPH-P0998-Pagoda-View-Twin-704.16x9.jpg",
          alt: "Pagoda View Twin Room — Park Hyatt Kyoto",
        },
        {
          src: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2025/07/23/0412/ITMPH-P0996-Pagoda-View-Twin-304-Reverse-Angle.jpg/ITMPH-P0996-Pagoda-View-Twin-304-Reverse-Angle.16x9.jpg",
          alt: "Pagoda View Twin Room Detail — Park Hyatt Kyoto",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "45 sqm of refined living space",
            "Two twin beds with premium linens",
            "Exquisite views of Yasaka Pagoda",
            "Working area and day bed",
            "En-suite bathroom",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Daily full breakfast",
            "$100 hotel credit",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "2 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "WhataHotel! rate: ¥251,700/night &times; 2 = <strong>¥503,400</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>¥636,801</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "¥636,801",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=S2TU5V&rate=1HZ&hotel=3975&checkin=2026-06-02&checkout=2026-06-04&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Pagoda View Twin",
    },

    // ─── Option 7: 1 King Deluxe (68 sqm) ───
    {
      badgeText: "🏨 Option 7",
      name: "Deluxe Room<br/>1 King Bed",
      subtitle:
        "68 sqm · King Bed · Garden View<br/><strong style='color: var(--burgundy)'>From ¥280,000/night</strong>",
      priceLabel: "Per night (excl. taxes & fees)",
      priceRate: "¥280,000",
      priceStrike: "",
      priceTotal: "2-Night Total: ¥560,000",
      stayTotalExclAmount: "¥560,000",
      stayTotalExclSub: "2 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "¥708,400",
      grandTotalInclTaxesLabel: "Grand total (incl. taxes & fees)",
      stayCheckInOut: "Jun 2 → Jun 4",
      nightsLabel: "2",
      bookingSummary: {
        checkInOut: "Jun 2 → Jun 4",
        nights: "2",
        adr: "¥280,000",
        total: "¥708,400",
      },
      images: [],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "68 sqm of spacious living",
            "One king bed with premium linens",
            "Garden view",
            "Working area and day bed",
            "En-suite bathroom",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Daily full breakfast",
            "$100 hotel credit",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "2 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "WhataHotel! rate: ¥280,000/night &times; 2 = <strong>¥560,000</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>¥708,400</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "¥708,400",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=T1KU5V&rate=1HZ&hotel=3975&checkin=2026-06-02&checkout=2026-06-04&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Deluxe King",
    },

    // ─── Option 8: 2 Twin Beds, Pagoda View Deluxe (68 sqm) ───
    {
      badgeText: "🏨 Option 8",
      name: "Pagoda View Deluxe Room<br/>2 Twin Beds",
      subtitle:
        "68 sqm · Twin Beds · Yasaka Pagoda View<br/><strong style='color: var(--burgundy)'>From ¥321,700/night</strong>",
      priceLabel: "Per night (excl. taxes & fees)",
      priceRate: "¥321,700",
      priceStrike: "",
      priceTotal: "2-Night Total: ¥643,400",
      stayTotalExclAmount: "¥643,400",
      stayTotalExclSub: "2 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "¥813,901",
      grandTotalInclTaxesLabel: "Grand total (incl. taxes & fees)",
      stayCheckInOut: "Jun 2 → Jun 4",
      nightsLabel: "2",
      bookingSummary: {
        checkInOut: "Jun 2 → Jun 4",
        nights: "2",
        adr: "¥321,700",
        total: "¥813,901",
      },
      images: [
        {
          src: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2025/07/23/0412/ITMPH-P1000-Pagoda-View-Deluxe-Twin-701-Different-Angle.jpg/ITMPH-P1000-Pagoda-View-Deluxe-Twin-701-Different-Angle.16x9.jpg",
          alt: "Pagoda View Deluxe Twin Room — Park Hyatt Kyoto",
        },
        {
          src: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2025/07/23/0412/ITMPH-P1002-Pagoda-View-Deluxe-Twin-Reverse-Angle.jpg/ITMPH-P1002-Pagoda-View-Deluxe-Twin-Reverse-Angle.16x9.jpg",
          alt: "Pagoda View Deluxe Twin Room Detail — Park Hyatt Kyoto",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "68 sqm of spacious living",
            "Two twin beds with premium linens",
            "Exquisite views of Yasaka Pagoda",
            "Working area and day bed",
            "En-suite bathroom",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Daily full breakfast",
            "$100 hotel credit",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "2 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "WhataHotel! rate: ¥321,700/night &times; 2 = <strong>¥643,400</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>¥813,901</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "¥813,901",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=N2TU5V&rate=1HZ&hotel=3975&checkin=2026-06-02&checkout=2026-06-04&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Pagoda View Deluxe Twin",
    },

    // ─── Option 9: Ninenzaka House Suite (68 sqm) ───
    {
      badgeText: "🏨 Option 9",
      name: "Ninenzaka House Suite<br/>1 King Bed",
      subtitle:
        "68 sqm · King Bed · Ninenzaka Slope &amp; Sunset View<br/><strong style='color: var(--burgundy)'>From ¥380,000/night</strong>",
      priceLabel: "Per night (excl. taxes & fees)",
      priceRate: "¥380,000",
      priceStrike: "",
      priceTotal: "2-Night Total: ¥760,000",
      stayTotalExclAmount: "¥760,000",
      stayTotalExclSub: "2 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "¥961,400",
      grandTotalInclTaxesLabel: "Grand total (incl. taxes & fees)",
      stayCheckInOut: "Jun 2 → Jun 4",
      nightsLabel: "2",
      bookingSummary: {
        checkInOut: "Jun 2 → Jun 4",
        nights: "2",
        adr: "¥380,000",
        total: "¥961,400",
      },
      images: [
        {
          src: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2025/07/23/0412/ITMPH-P1006-Ninenzaka-House-308.jpg/ITMPH-P1006-Ninenzaka-House-308.16x9.jpg",
          alt: "Ninenzaka House Suite — Park Hyatt Kyoto",
        },
        {
          src: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2019/10/14/1014/Park-Hyatt-Kyoto-P101-Park-Suite-Living-Area.jpg/Park-Hyatt-Kyoto-P101-Park-Suite-Living-Area.16x9.jpg",
          alt: "Ninenzaka House Suite Living Area — Park Hyatt Kyoto",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "68 sqm suite with separate living area",
            "One king bed with premium linens",
            "Ninenzaka slope and sunset views",
            "Separate living area",
            "En-suite bathroom",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Daily full breakfast",
            "$100 hotel credit",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "2 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "WhataHotel! rate: ¥380,000/night &times; 2 = <strong>¥760,000</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>¥961,400</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "¥961,400",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=F1KU5V&rate=1HZ&hotel=3975&checkin=2026-06-02&checkout=2026-06-04&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Ninenzaka House Suite",
    },

    // ─── Option 10: Higashiyama House Suite (90 sqm) ───
    {
      badgeText: "🏨 Option 10",
      name: "Higashiyama House Suite<br/>1 King Bed",
      subtitle:
        "90 sqm · King Bed · City View · Large Round Bathtub<br/><strong style='color: var(--burgundy)'>From ¥480,000/night</strong>",
      priceLabel: "Per night (excl. taxes & fees)",
      priceRate: "¥480,000",
      priceStrike: "",
      priceTotal: "2-Night Total: ¥960,000",
      stayTotalExclAmount: "¥960,000",
      stayTotalExclSub: "2 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "¥1,214,400",
      grandTotalInclTaxesLabel: "Grand total (incl. taxes & fees)",
      stayCheckInOut: "Jun 2 → Jun 4",
      nightsLabel: "2",
      bookingSummary: {
        checkInOut: "Jun 2 → Jun 4",
        nights: "2",
        adr: "¥480,000",
        total: "¥1,214,400",
      },
      images: [
        {
          src: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2022/12/29/1844/ITMPH-P0492-Suite.jpg/ITMPH-P0492-Suite.16x9.jpg",
          alt: "Higashiyama House Suite — Park Hyatt Kyoto",
        },
        {
          src: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2020/07/21/2035/Park-Hyatt-Kyoto-P201-Higasiyama-House-Suite-Bedroom.jpg/Park-Hyatt-Kyoto-P201-Higasiyama-House-Suite-Bedroom.16x9.jpg",
          alt: "Higashiyama House Suite Bedroom — Park Hyatt Kyoto",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "90 sqm suite with generous living space",
            "One king bed with premium linens",
            "City views",
            "Separate living area",
            "Large round bathtub",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Daily full breakfast",
            "$100 hotel credit",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "2 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "WhataHotel! rate: ¥480,000/night &times; 2 = <strong>¥960,000</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>¥1,214,400</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "¥1,214,400",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=E1KU5V&rate=1HZ&hotel=3975&checkin=2026-06-02&checkout=2026-06-04&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Higashiyama House Suite",
    },

    // ─── Option 11: Pagoda House Suite (135 sqm) ───
    {
      badgeText: "🏨 Option 11",
      name: "Pagoda House Suite<br/>1 King Bed",
      subtitle:
        "135 sqm · King Bed · Yasaka Pagoda &amp; Sunset View · Kitchen<br/><strong style='color: var(--burgundy)'>From ¥1,271,200/night</strong>",
      priceLabel: "Per night (excl. taxes & fees)",
      priceRate: "¥1,271,200",
      priceStrike: "",
      priceTotal: "2-Night Total: ¥2,542,400",
      stayTotalExclAmount: "¥2,542,400",
      stayTotalExclSub: "2 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "¥3,216,136",
      grandTotalInclTaxesLabel: "Grand total (incl. taxes & fees)",
      stayCheckInOut: "Jun 2 → Jun 4",
      nightsLabel: "2",
      bookingSummary: {
        checkInOut: "Jun 2 → Jun 4",
        nights: "2",
        adr: "¥1,271,200",
        total: "¥3,216,136",
      },
      images: [
        {
          src: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2025/07/23/0412/ITMPH-P1008-Pagoda-House-717-Defferent-Angle.jpg/ITMPH-P1008-Pagoda-House-717-Defferent-Angle.16x9.jpg",
          alt: "Pagoda House Suite — Park Hyatt Kyoto",
        },
        {
          src: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2019/10/14/1014/Park-Hyatt-Kyoto-P099-Pagoda-House-Suite-Bedroom.jpg/Park-Hyatt-Kyoto-P099-Pagoda-House-Suite-Bedroom.16x9.jpg",
          alt: "Pagoda House Suite Bedroom — Park Hyatt Kyoto",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "135 sqm premier suite",
            "One king bed with premium linens",
            "Yasaka Pagoda and sunset views",
            "Full kitchen",
            "Large round bathtub",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Daily full breakfast",
            "$100 hotel credit",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "2 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "WhataHotel! rate: ¥1,271,200/night &times; 2 = <strong>¥2,542,400</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>¥3,216,136</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "¥3,216,136",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=G1KU5V&rate=1HZ&hotel=3975&checkin=2026-06-02&checkout=2026-06-04&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Pagoda House Suite",
    },
  ],

  pricingFootnote:
    "All nightly rates shown are per room, per night and exclude applicable taxes &amp; service charges. Grand totals include taxes &amp; fees. Rates are in Japanese Yen (JPY). Free cancellation before May 30, 2026. Rates subject to availability.",

};
