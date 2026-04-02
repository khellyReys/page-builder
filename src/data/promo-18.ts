import type { Promo } from "../types";

// AGENT NOTE: Single-hotel proposal — Sanctuary on Camelback Mountain
// Check-in: May 30, 2026 — Check-out: Jun 1, 2026 (2 nights)
// 5 room categories requested by client. Currency: USD.

export const promo18: Promo = {
  id: "promo-18",
  createdAt: "2026-03-27T18:00:00Z",
  title: "Jack & Diane | Camelback Birthday 🏜️",
  client: "Jack & Diane",
  dates: "May 30 – June 1, 2026 | 2 Nights | 5 Room Options",
  portalTotalLabel: "Starting From",
  portalTotalValue: "$1,913.71",

  hero: {
    imageUrl:
      "https://controlcenter-p1.synxis.com/hotel/27156/images/room/camelback_casita_exterior.jpg",
    alt: "Sanctuary on Camelback Mountain — Scottsdale, Arizona",
    hotel: "Sanctuary on Camelback Mountain",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Scottsdale, Arizona &nbsp;|&nbsp; Desert Luxury Resort & Spa",
  },

  rooms: [
    // ─── Room 1: Camelback Casita King ───
    {
      badgeText: "🏨 Option 1",
      name: "Camelback Casita King",
      subtitle:
        "500 SF · King Bed · Premium Views<br/><strong style='color: var(--burgundy)'>From $787.50/night</strong>",
      priceRate: "$787.50",
      grandTotalInclTaxes: "$1,913.71",
      stayCheckInOut: "May 30 → Jun 1",
      nightsLabel: "2",
      bookingSummary: {
        checkInOut: "May 30 → Jun 1",
        nights: "2",
        adr: "$787.50",
        total: "$1,913.71",
      },
      images: [
        {
          src: "https://controlcenter-p1.synxis.com/hotel/27156/images/room/camelback_casita_exterior.jpg",
          alt: "Camelback Casita King — Sanctuary on Camelback Mountain",
        },
        {
          src: "https://controlcenter-p1.synxis.com/hotel/27156/images/room/mountain_casita_tub_detail_synxis.jpg",
          alt: "Camelback Casita King Bathroom — Sanctuary on Camelback Mountain",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "500 sq ft with premium Camelback views",
            "King bed with luxury linens",
            "Sitting area with contemporary décor",
            "Metallic tiled bathroom with soaking tub and shower",
            "Complimentary WiFi",
          ],
        },
        {
          title: "Exclusive Perks",
          icon: "gift",
          items: [
            "Room upgrade (subject to availability at check-in)",
            "Complimentary breakfast for two daily (up to $30/person)",
            "$100 spa service credit (one-time per stay)",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],

      bookUrl:
        "https://whatahotel.com/booking/booking_info.cfm?room=A112SH&rate=2SH&hotel=1210&checkin=2026-05-30&checkout=2026-06-01&guests=2&children=0&rooms=1",
    },

    // ─── Room 2: Spa Patio Casita King ───
    {
      badgeText: "🏨 Option 2",
      name: "Spa Patio Casita King",
      subtitle:
        "650 SF · King Bed · Private Patio<br/><strong style='color: var(--burgundy)'>From $812.50/night</strong>",
      priceRate: "$812.50",
      grandTotalInclTaxes: "$1,970.29",
      stayCheckInOut: "May 30 → Jun 1",
      nightsLabel: "2",
      bookingSummary: {
        checkInOut: "May 30 → Jun 1",
        nights: "2",
        adr: "$812.50",
        total: "$1,970.29",
      },
      images: [
        {
          src: "https://controlcenter-p1.synxis.com/hotel/27156/images/room/sanc.retouches-spa_casita_king_synxis.jpg",
          alt: "Spa Patio Casita King — Sanctuary on Camelback Mountain",
        },
        {
          src: "https://controlcenter-p1.synxis.com/hotel/27156/images/room/sanc.retouches-spa_suite_detail_synxis.jpg",
          alt: "Spa Patio Casita King Detail — Sanctuary on Camelback Mountain",
        },
        {
          src: "https://controlcenter-p1.synxis.com/hotel/27156/images/room/sanc.retouches-spa_castia_bathroom_synxis.jpg",
          alt: "Spa Patio Casita King Bathroom — Sanctuary on Camelback Mountain",
        },
        {
          src: "https://controlcenter-p1.synxis.com/hotel/27156/images/room/spa_patio_casita_patio.jpg",
          alt: "Spa Patio Casita King Patio — Sanctuary on Camelback Mountain",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "650 sq ft with private patio",
            "King bed with luxury linens",
            "Sitting area with walk-in closet",
            "Separate shower and oversized bathtub",
            "Complimentary WiFi",
          ],
        },
        {
          title: "Exclusive Perks",
          icon: "gift",
          items: [
            "Room upgrade (subject to availability at check-in)",
            "Complimentary breakfast for two daily (up to $30/person)",
            "$100 spa service credit (one-time per stay)",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],

      bookUrl:
        "https://whatahotel.com/booking/booking_info.cfm?room=A*K2SH&rate=2SH&hotel=1210&checkin=2026-05-30&checkout=2026-06-01&guests=2&children=0&rooms=1",
    },

    // ─── Room 3: Mountain Suite ───
    {
      badgeText: "🏨 Option 3",
      name: "Mountain Suite",
      subtitle:
        "1,000 SF · King Bed · Living Room & Fireplace<br/><strong style='color: var(--burgundy)'>From $959.50/night</strong>",
      priceRate: "$959.50",
      grandTotalInclTaxes: "$2,303.01",
      stayCheckInOut: "May 30 → Jun 1",
      nightsLabel: "2",
      bookingSummary: {
        checkInOut: "May 30 → Jun 1",
        nights: "2",
        adr: "$959.50",
        total: "$2,303.01",
      },
      images: [
        {
          src: "https://controlcenter-p1.synxis.com/hotel/27156/images/room/sanc.retouches-mountain_suite_king_synxis.jpg",
          alt: "Mountain Suite — Sanctuary on Camelback Mountain",
        },
        {
          src: "https://controlcenter-p1.synxis.com/hotel/27156/images/room/sanc.retouches-mountain_suite_living_room_a_synxis.jpg",
          alt: "Mountain Suite Living Room — Sanctuary on Camelback Mountain",
        },
        {
          src: "https://controlcenter-p1.synxis.com/hotel/27156/images/room/mountain_suite_bathroom.jpg",
          alt: "Mountain Suite Bathroom — Sanctuary on Camelback Mountain",
        },
        {
          src: "https://controlcenter-p1.synxis.com/hotel/27156/images/room/mountain_suite_patio20220224205856393.jpg",
          alt: "Mountain Suite Patio — Sanctuary on Camelback Mountain",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "1,000 sq ft with mountain views",
            "King bed plus sofa bed",
            "Living and dining area with fireplace",
            "Private balcony",
            "Oversized tub and separate shower",
          ],
        },
        {
          title: "Exclusive Perks",
          icon: "gift",
          items: [
            "Room upgrade (subject to availability at check-in)",
            "Complimentary breakfast for two daily (up to $30/person)",
            "$100 spa service credit (one-time per stay)",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],

      bookUrl:
        "https://whatahotel.com/booking/booking_info.cfm?room=T*K2SH&rate=2SH&hotel=1210&checkin=2026-05-30&checkout=2026-06-01&guests=2&children=0&rooms=1",
    },

    // ─── Room 4: Spa Suite ───
    {
      badgeText: "🏨 Option 4",
      name: "Spa Suite",
      subtitle:
        "1,200 SF · King Bed · Outdoor Soaking Tub<br/><strong style='color: var(--burgundy)'>From $1,109.50/night</strong>",
      priceRate: "$1,109.50",
      grandTotalInclTaxes: "$2,642.52",
      stayCheckInOut: "May 30 → Jun 1",
      nightsLabel: "2",
      bookingSummary: {
        checkInOut: "May 30 → Jun 1",
        nights: "2",
        adr: "$1,109.50",
        total: "$2,642.52",
      },
      images: [
        {
          src: "https://controlcenter-p1.synxis.com/hotel/27156/images/room/sanc.retouches-spa_suite_king_synxis.jpg",
          alt: "Spa Suite — Sanctuary on Camelback Mountain",
        },
        {
          src: "https://controlcenter-p1.synxis.com/hotel/27156/images/room/sanc.retouches-spa_suite_living_room_synxis.jpg",
          alt: "Spa Suite Living Room — Sanctuary on Camelback Mountain",
        },
        {
          src: "https://controlcenter-p1.synxis.com/hotel/27156/images/room/ssk-bath.jpg",
          alt: "Spa Suite Bathroom — Sanctuary on Camelback Mountain",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "1,200 sq ft with desert and mountain views",
            "King bed plus sofa bed",
            "Sitting area with fireplace and wet bar",
            "Outdoor soaking tub and separate shower",
            "Complimentary WiFi",
          ],
        },
        {
          title: "Exclusive Perks",
          icon: "gift",
          items: [
            "Room upgrade (subject to availability at check-in)",
            "Complimentary breakfast for two daily (up to $30/person)",
            "$100 spa service credit (one-time per stay)",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],

      bookUrl:
        "https://whatahotel.com/booking/booking_info.cfm?room=S1U2SH&rate=2SH&hotel=1210&checkin=2026-05-30&checkout=2026-06-01&guests=2&children=0&rooms=1",
    },

    // ─── Room 5: Camelback Suite ───
    {
      badgeText: "🏨 Option 5",
      name: "Camelback Suite",
      subtitle:
        "1,000 SF · King Bed · Premium Views & Fireplace<br/><strong style='color: var(--burgundy)'>From $1,159.50/night</strong>",
      priceRate: "$1,159.50",
      grandTotalInclTaxes: "$2,755.69",
      stayCheckInOut: "May 30 → Jun 1",
      nightsLabel: "2",
      bookingSummary: {
        checkInOut: "May 30 → Jun 1",
        nights: "2",
        adr: "$1,159.50",
        total: "$2,755.69",
      },
      images: [
        {
          src: "https://controlcenter-p1.synxis.com/hotel/27156/images/room/sanc.retouches-mountain_suite_living_room_b_synxis.jpg",
          alt: "Camelback Suite — Sanctuary on Camelback Mountain",
        },
        {
          src: "https://controlcenter-p1.synxis.com/hotel/27156/images/room/camelback_suite_patio20220224210316012.jpg",
          alt: "Camelback Suite Patio — Sanctuary on Camelback Mountain",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "1,000 sq ft with superior Camelback views",
            "King bed plus sofa bed",
            "Living and dining area with glass rock fireplace",
            "Private balcony",
            "Soaking tub and separate shower",
          ],
        },
        {
          title: "Exclusive Perks",
          icon: "gift",
          items: [
            "Room upgrade (subject to availability at check-in)",
            "Complimentary breakfast for two daily (up to $30/person)",
            "$100 spa service credit (one-time per stay)",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],

      bookUrl:
        "https://whatahotel.com/booking/booking_info.cfm?room=S1K2SH&rate=2SH&hotel=1210&checkin=2026-05-30&checkout=2026-06-01&guests=2&children=0&rooms=1",
    },
  ],

};
