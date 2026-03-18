import type { Promo } from "../types";
import { sharedContact } from "./contact";

export const promo3: Promo = {
  id: "promo-3",
  title: "Maui, Hawaii Luxury Escape",
  client: "Luxury Escape",
  dates: "March 29 – 31, 2026 | 2 Nights | 2 Hotel Options",
  thumbnailUrl:
    "https://m.ahstatic.com/is/image/accorhotels/aja_p_7168-85:16by9",
  portalTotalLabel: "Starting from",
  portalTotalValue: "$3,257.63",
  hero: {
    imageUrl: "https://m.ahstatic.com/is/image/accorhotels/aja_p_7168-85:16by9",
    alt: "Maui Beach",
    hotel: "Fairmont Kea Lani & Four Seasons Maui",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Maui, Hawaii",
  },
  offer: {
    heading: "WhataHotel! Exclusive Perks",
    description:
      "Book through WhataHotel! and enjoy <strong>exclusive complimentary perks</strong> including breakfast for two, a $100 resort credit, and more — all on top of the best available rate.",
    pills: [
      "✔ Room Upgrade (subject to avail.)",
      "✔ Breakfast for 2 Daily",
      "✔ $100 Resort Credit",
      "✔ Free Wi-Fi",
      "✔ Late Check-Out",
      "✔ Earn Points",
    ],
  },
  rooms: [
    {
      badgeText: "🏨 Fairmont Kea Lani — Suite 1",
      name: "Mountainside Suite<br/>1 King Bed",
      subtitle:
        "860 sq ft (79 m²) · Double Sofabed · Large Private Lanai<br/>Haleakalā Sunrise View · All-Suite Luxury<br/><strong style='color: var(--burgundy)'>Best Value — Starting from $1,322.10/night</strong>",
      priceLabel: "Special Offer Rate",
      priceRate: "$1,322.10",
      priceStrike: "Standard: $1,469.00/night",
      priceTotal: "2-Night Total: $3,257.63",
      images: [
        {
          src: "https://m.ahstatic.com/is/image/accorhotels/aja_p_6510-55",
          alt: "Mountainside Suite — King Bed",
        },
        {
          src: "https://m.ahstatic.com/is/image/accorhotels/aja_p_6617-31:11by5",
          alt: "Mountainside Suite — Living Area",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "860 sq ft all-suite accommodation",
            "1 King bed with premium linens + double sofabed",
            "Large private lanai with Haleakalā sunrise views",
            "Spacious living area with separate seating",
            "Marble bathroom with soaking tub & separate shower",
            "Hawaiian-inspired luxury décor",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Complimentary Breakfast for Two Daily",
            "Room Category Upgrade at Check-In (if available)",
            "$100 Hotel Credit (food, beverage, or spa)",
            "Complimentary Wi-Fi",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel: "2 Nights | Special Offer Rate",
        leftSub:
          "Standard rate: $1,469.00 × 2 = $3,606.40 — you save <strong>$348.77</strong> with the WhataHotel! special offer",
        rightLabel: "2-Night Total (incl. taxes)",
        rightValue: "$3,257.63",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=E1SQE2&rate=QE2&hotel=1223&checkin=2026-03-29&checkout=2026-03-31&guests=2&children=0&rooms=1",
      bookLabel: "Book Mountainside Suite — 1 King",
    },
    {
      badgeText: "🏨 Fairmont Kea Lani — Suite 2",
      name: "Ocean View Suite<br/>1 King Bed",
      subtitle:
        "860 sq ft (79 m²) · Double Sofabed · Large Private Lanai<br/>Ocean Views from Suite & Lanai · All-Suite Luxury",
      priceLabel: "Special Offer Rate",
      priceRate: "$1,826.10",
      priceStrike: "Standard: $2,029.00/night",
      priceTotal: "2-Night Total: $4,454.23",
      images: [
        {
          src: "https://www.fairmont.com/reservations/assets/0/104/1677/1682/5128/5142/f39a11a7-99b1-4b42-b515-7edc421289d5.jpg",
          alt: "Ocean View Suite — King Bed",
        },
        {
          src: "https://www.fairmont.com/reservations/assets/0/104/1677/1682/5128/5142/156aaff1-f2c9-48fd-b5d2-8859fc01820d.jpg",
          alt: "Ocean View Suite — Lanai View",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "860 sq ft all-suite accommodation",
            "1 King bed with premium linens + double sofabed",
            "Large private lanai with Pacific Ocean views",
            "Spacious living area with separate seating",
            "Marble bathroom with soaking tub & separate shower",
            "Hawaiian-inspired luxury décor",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Complimentary Breakfast for Two Daily",
            "Room Category Upgrade at Check-In (if available)",
            "$100 Hotel Credit (food, beverage, or spa)",
            "Complimentary Wi-Fi",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel: "2 Nights | Special Offer Rate",
        leftSub:
          "Standard rate: $2,029.00 × 2 = $4,935.95 — you save <strong>$481.72</strong> with the WhataHotel! special offer",
        rightLabel: "2-Night Total (incl. taxes)",
        rightValue: "$4,454.23",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=F1QQE2&rate=QE2&hotel=1223&checkin=2026-03-29&checkout=2026-03-31&guests=2&children=0&rooms=1",
      bookLabel: "Book Ocean View Suite — 1 King",
    },
    {
      badgeText: "🏨 Fairmont Kea Lani — Suite 3",
      name: "Kilohana Corner Suite<br/>1 King Bed",
      subtitle:
        "1,100 sq ft (102 m²) · Wrap-Around Lanai · Panoramic Ocean View<br/>Premium Corner Location · Enhanced Suite Experience<br/><strong style='color: var(--burgundy)'>Premium — Panoramic Ocean Views</strong>",
      priceLabel: "Special Offer Rate",
      priceRate: "$2,411.10",
      priceStrike: "Standard: $2,679.00/night",
      priceTotal: "2-Night Total: $5,843.13",
      images: [
        {
          src: "https://www.fairmont.com/reservations/assets/0/104/1677/1682/5128/5142/688891da-68e2-495e-9084-4401b0242211.jpg",
          alt: "Kilohana Corner Suite — King Bed",
        },
        {
          src: "https://www.fairmont.com/reservations/assets/0/104/1677/1682/5128/5142/465d5267-1e42-4119-a50f-d305281b0f93.jpg",
          alt: "Kilohana Corner Suite — Panoramic View",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "1,100 sq ft corner suite — largest standard suite",
            "1 King bed with premium linens + double sofabed",
            "Wrap-around lanai with panoramic ocean views",
            "Spacious living area with separate seating",
            "Marble bathroom with soaking tub & separate shower",
            "Hawaiian-inspired luxury décor",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Complimentary Breakfast for Two Daily",
            "Room Category Upgrade at Check-In (if available)",
            "$100 Hotel Credit (food, beverage, or spa)",
            "Complimentary Wi-Fi",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel: "2 Nights | Special Offer Rate",
        leftSub:
          "Standard rate: $2,679.00 × 2 = $6,479.18 — you save <strong>$636.05</strong> with the WhataHotel! special offer",
        rightLabel: "2-Night Total (incl. taxes)",
        rightValue: "$5,843.13",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=A1KQE2&rate=QE2&hotel=1223&checkin=2026-03-29&checkout=2026-03-31&guests=2&children=0&rooms=1",
      bookLabel: "Book Kilohana Corner Suite — 1 King",
    },
    {
      badgeText: "🏨 Fairmont Kea Lani — Villa",
      name: "Two Bedroom<br/>Oceanfront Villa",
      subtitle:
        "1,800 sq ft (167 m²) · 2 King Beds + Double Sofabed<br/>Oceanfront Location · Includes Buffet Breakfast for 4<br/><strong style='color: var(--burgundy)'>Ultimate Luxury — Ideal for Families & Groups</strong>",
      priceLabel: "Special Offer Rate",
      priceRate: "$5,651.10",
      priceStrike: "Standard: $6,279.00/night",
      priceTotal: "2-Night Total: $13,535.54",
      images: [
        {
          src: "https://www.fairmont-kea-lani.com/content/uploads/2022/03/Villa_King-1628x778.jpg",
          alt: "Two Bedroom Oceanfront Villa — Bedroom",
        },
        {
          src: "https://www.fairmont-kea-lani.com/content/uploads/2022/03/Villa_Dining-1628x778.jpg",
          alt: "Two Bedroom Oceanfront Villa — Living Area",
        },
      ],
      features: [
        {
          title: "Villa Features",
          icon: "door-open",
          items: [
            "1,800 sq ft — over twice the size of a standard suite",
            "Two bedrooms with King beds in each",
            "Double sofabed in living room for additional guests",
            "Prime oceanfront location with direct beach access",
            "Private plunge pool & spacious outdoor lanai",
            "Full gourmet kitchen & in-villa washer/dryer",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Buffet Breakfast for 4 Daily (villa benefit!)",
            "Room Category Upgrade at Check-In (if available)",
            "$100 Hotel Credit (food, beverage, or spa)",
            "Complimentary Wi-Fi",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel: "2 Nights | Special Offer Rate",
        leftSub:
          "Standard rate: $6,279.00 × 2 = $15,026.30 — you save <strong>$1,490.76</strong> with the WhataHotel! special offer",
        rightLabel: "2-Night Total (incl. taxes)",
        rightValue: "$13,535.54",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=S1KQE2&rate=QE2&hotel=1223&checkin=2026-03-29&checkout=2026-03-31&guests=2&children=0&rooms=1",
      bookLabel: "Book Two Bedroom Oceanfront Villa",
    },
    {
      badgeText: "🏨 Four Seasons Maui — Room 1",
      name: "Ocean View Room<br/>1 King Bed",
      subtitle:
        "600 sq ft (56 m²) · Private Lanai · Marble Bathroom<br/>Ocean Views · Four Seasons Luxury<br/><strong style='color: var(--burgundy)'>Best Value — Starting from $2,250/night</strong>",
      priceLabel: "WhataHotel! Exclusive Rate",
      priceRate: "$2,250",
      priceTotal: "2-Night Total: $5,342.04",
      images: [
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/84723793.webp",
          alt: "Ocean View Room — King Bed",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/84724463.webp",
          alt: "Ocean View Room — Marble Bathroom",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "600 sq ft luxury accommodation",
            "1 King bed with premium Four Seasons linens",
            "Private lanai with ocean views",
            "Marble bathroom with deep soaking tub",
            "Double vanity sink & separate glass shower",
            "Daily housekeeping & turndown service",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Full Breakfast for Two Daily",
            "Room Category Upgrade at Check-In (if available)",
            "$100 Property Credit (dining, spa, or activities)",
            "Complimentary Basic Internet",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel: "2 Nights | WhataHotel! Exclusive Rate",
        leftSub:
          "Book through WhataHotel! for complimentary perks valued at over <strong>$400</strong> (breakfast, credit, upgrade & more)",
        rightLabel: "2-Night Total (incl. taxes)",
        rightValue: "$5,342.04",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=A1KPP6&rate=PP6&hotel=1421&checkin=2026-03-29&checkout=2026-03-31&guests=2&children=0&rooms=1",
      bookLabel: "Book Ocean View Room — 1 King",
    },
    {
      badgeText: "🏨 Four Seasons Maui — Room 2",
      name: "Deluxe Ocean View Room<br/>1 King Bed",
      subtitle:
        "600 sq ft (56 m²) · Private Lanai · Marble Bathroom<br/>Enhanced Ocean Views · Soaking Tub",
      priceLabel: "WhataHotel! Exclusive Rate",
      priceRate: "$2,425",
      priceTotal: "2-Night Total: $5,757.54",
      images: [
        {
          src: "https://www.fourseasons.com/alt/img-opt/~60/author/content/dam/fourseasons/images/web/MAU/MAU_1584_aspect16x9.jpg",
          alt: "Deluxe Ocean View Room — King Bed",
        },
        {
          src: "https://www.fourseasons.com/alt/img-opt/~60..0,0000-225,7500-3000,0000-1687,5000/author/content/dam/fourseasons/images/web/MAU/MAU_1482_original.jpg",
          alt: "Deluxe Ocean View Room — Bathroom",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "600 sq ft luxury accommodation",
            "1 King bed with premium Four Seasons linens",
            "Private lanai with enhanced ocean views",
            "Marble bathroom with deep soaking tub",
            "Double vanity sink & separate glass shower",
            "Daily housekeeping & turndown service",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Full Breakfast for Two Daily",
            "Room Category Upgrade at Check-In (if available)",
            "$100 Property Credit (dining, spa, or activities)",
            "Complimentary Basic Internet",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel: "2 Nights | WhataHotel! Exclusive Rate",
        leftSub:
          "Book through WhataHotel! for complimentary perks valued at over <strong>$400</strong> (breakfast, credit, upgrade & more)",
        rightLabel: "2-Night Total (incl. taxes)",
        rightValue: "$5,757.54",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=P1KPP6&rate=PP6&hotel=1421&checkin=2026-03-29&checkout=2026-03-31&guests=2&children=0&rooms=1",
      bookLabel: "Book Deluxe Ocean View Room — 1 King",
    },
    {
      badgeText: "🏨 Four Seasons Maui — Suite 1",
      name: "Ocean View Prime Suite<br/>1 King Bed",
      subtitle:
        "1,400 sq ft (130 m²) · Separate Living Area · Private Lanai<br/>Ocean Views · Premium Suite Experience<br/><strong style='color: var(--burgundy)'>Premium — $200 Property Credit for Suites</strong>",
      priceLabel: "WhataHotel! Exclusive Rate",
      priceRate: "$5,535",
      priceTotal: "2-Night Total: $13,141.41",
      images: [
        {
          src: "https://www.fourseasons.com/alt/img-opt/~70.1530/publish/content/dam/fourseasons/images/web/MAU/MAU_1568_aspect16x9.jpg",
          alt: "Ocean View Prime Suite — Living Area",
        },
        {
          src: "https://www.fourseasons.com/alt/img-opt/~70.1530.0,0000-312,5000-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/MAU/MAU_1629_original.jpg",
          alt: "Ocean View Prime Suite — Bedroom",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "1,400 sq ft luxury suite accommodation",
            "1 King bed with premium Four Seasons linens",
            "Separate spacious living area",
            "Private lanai with ocean views",
            "Marble bathroom with deep soaking tub",
            "Daily housekeeping & turndown service",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Full Breakfast for Two Daily",
            "Room Category Upgrade at Check-In (if available)",
            "$200 Property Credit (suite benefit!)",
            "Complimentary Basic Internet",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel: "2 Nights | WhataHotel! Exclusive Rate",
        leftSub:
          "Book through WhataHotel! for complimentary perks valued at over <strong>$500</strong> (breakfast, $200 credit, upgrade & more)",
        rightLabel: "2-Night Total (incl. taxes)",
        rightValue: "$13,141.41",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=G1KPP6&rate=PP6&hotel=1421&checkin=2026-03-29&checkout=2026-03-31&guests=2&children=0&rooms=1",
      bookLabel: "Book Ocean View Prime Suite — 1 King",
    },
    {
      badgeText: "🏨 Four Seasons Maui — Suite 2",
      name: "Club Oceanfront Prime Suite<br/>1 King Bed",
      subtitle:
        "1,400 sq ft (130 m²) · 2 Private Lanais · Club Lounge Access<br/>Oceanfront Views · Top-Floor Premium Location<br/><strong style='color: var(--burgundy)'>Ultimate Luxury — Club Floor + Oceanfront</strong>",
      priceLabel: "WhataHotel! Exclusive Rate",
      priceRate: "$7,837.50",
      priceTotal: "2-Night Total: $18,608.11",
      images: [
        {
          src: "https://www.fourseasons.com/alt/img-opt/~70.1530/publish/content/dam/fourseasons/images/web/MAU/MAU_1568_aspect16x9.jpg",
          alt: "Club Oceanfront Prime Suite — Living Area",
        },
        {
          src: "https://www.fourseasons.com/alt/img-opt/~80.930.0,0000-156,2500-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/MAU/MAU_1499_original.jpg",
          alt: "Club Oceanfront Prime Suite — Oceanfront View",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "1,400 sq ft luxury oceanfront suite",
            "1 King bed with premium Four Seasons linens",
            "2 private lanais with direct oceanfront views",
            "Exclusive Club Lounge access with food & beverages",
            "Marble bathroom with deep soaking tub",
            "Separate spacious living area",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Full Breakfast for Two Daily",
            "Room Category Upgrade at Check-In (if available)",
            "$200 Property Credit (suite benefit!)",
            "Complimentary Basic Internet",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel: "2 Nights | WhataHotel! Exclusive Rate",
        leftSub:
          "Book through WhataHotel! for complimentary perks valued at over <strong>$500</strong> (breakfast, $200 credit, upgrade & more)",
        rightLabel: "2-Night Total (incl. taxes)",
        rightValue: "$18,608.11",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=T1KPP6&rate=PP6&hotel=1421&checkin=2026-03-29&checkout=2026-03-31&guests=2&children=0&rooms=1",
      bookLabel: "Book Club Oceanfront Prime Suite — 1 King",
    },
  ],
  contact: sharedContact,
};
