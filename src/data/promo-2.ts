import type { Promo } from "../types";
import { sharedContact } from "./contact";

export const promo2: Promo = {
  id: "promo-2",
  title: "Maui, Hawaii Luxury Getaway",
  client: "Luxury Getaway",
  dates: "April 1 – 3, 2026 | 2 Nights | 2 Hotel Options",
  thumbnailUrl:
    "https://m.ahstatic.com/is/image/accorhotels/aja_p_7168-85:16by9",
  portalTotalLabel: "Starting from",
  portalTotalValue: "$3,396.52",
  hero: {
    imageUrl: "https://m.ahstatic.com/is/image/accorhotels/aja_p_7168-85:16by9",
    alt: "Fairmont Kea Lani, Maui — Luxury All-Suite Resort",
    hotel: "Fairmont Kea Lani, Maui",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>4100 Wailea Alanui Dr, Wailea, Maui, HI 96753 &nbsp;|&nbsp; Luxury All-Suite Resort",
  },
  offer: {
    heading: "Exclusive: WhataHotel! Special Offer Rates",
    description:
      "Book through WhataHotel! for <strong>exclusive reduced rates</strong> at the Fairmont Kea Lani, Maui's only luxury all-suite and villa oceanfront resort. Enjoy <em>complimentary breakfast for two daily</em>, a <em>$100 hotel credit</em>, room upgrade, and more — all included with your booking.",
    pills: [
      "✔ Special Offer Rates",
      "✔ Breakfast for 2 Daily",
      "✔ $100 Hotel Credit",
      "✔ Room Upgrade (subj. to avail.)",
      "✔ Free Wi-Fi",
      "✔ Late Check-Out",
    ],
  },
  rooms: [
    {
      badgeText: "🏨 Fairmont Kea Lani — Suite 1",
      name: "Garden View Suite<br/>1 King Bed",
      subtitle:
        "860 sq ft (79 m²) · Double Sofabed · Large Private Lanai<br/>Lush Garden View · All-Suite Luxury<br/><strong style='color: var(--burgundy)'>Best Value — Starting from $1,380.60/night</strong>",
      priceLabel: "Special Offer Rate",
      priceRate: "$1,380.60",
      priceStrike: "Standard: $1,534.00/night",
      priceTotal: "2-Night Total: $3,396.52",
      images: [
        {
          src: "https://m.ahstatic.com/is/image/accorhotels/aja_p_6510-55",
          alt: "Garden View Suite — King Bed",
        },
        {
          src: "https://m.ahstatic.com/is/image/accorhotels/aja_p_6617-31:11by5",
          alt: "Garden View Suite — Living Area",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "860 sq ft all-suite accommodation",
            "1 King bed with premium linens + double sofabed",
            "Large private lanai with lush garden view",
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
          "Standard rate: $1,534.00 × 2 = $3,760.72 — you save <strong>$364.20</strong> with the WhataHotel! special offer",
        rightLabel: "2-Night Total (incl. taxes)",
        rightValue: "$3,396.52",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=C1KQE2&rate=QE2&hotel=1223&checkin=2026-04-01&checkout=2026-04-03&guests=2&children=0&rooms=1",
      bookLabel: "Book Garden View Suite — 1 King",
    },
    {
      badgeText: "🏨 Fairmont Kea Lani — Suite 2",
      name: "Ocean View Suite<br/>1 King Bed",
      subtitle:
        "860 sq ft (79 m²) · Double Sofabed · Large Private Lanai<br/>Ocean Views from Suite & Lanai · All-Suite Luxury",
      priceLabel: "Special Offer Rate",
      priceRate: "$1,799.10",
      priceStrike: "Standard: $1,999.00/night",
      priceTotal: "2-Night Total: $4,390.12",
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
          "Standard rate: $1,999.00 × 2 = $4,864.73 — you save <strong>$474.61</strong> with the WhataHotel! special offer",
        rightLabel: "2-Night Total (incl. taxes)",
        rightValue: "$4,390.12",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=F1QQE2&rate=QE2&hotel=1223&checkin=2026-04-01&checkout=2026-04-03&guests=2&children=0&rooms=1",
      bookLabel: "Book Ocean View Suite — 1 King",
    },
    {
      badgeText: "🏨 Fairmont Kea Lani — Suite 3",
      name: "Deluxe Ocean View Suite<br/>1 King Bed",
      subtitle:
        "860 sq ft (79 m²) · Double Sofabed · Large Private Lanai<br/>Ocean Sunset View from Suite & Lanai · Premium Location",
      priceLabel: "Special Offer Rate",
      priceRate: "$1,979.10",
      priceStrike: "Standard: $2,199.00/night",
      priceTotal: "2-Night Total: $4,817.48",
      images: [
        {
          src: "https://www.fairmont.com/reservations/assets/0/104/1677/1682/5128/5142/688891da-68e2-495e-9084-4401b0242211.jpg",
          alt: "Deluxe Ocean View Suite — King Bed",
        },
        {
          src: "https://www.fairmont.com/reservations/assets/0/104/1677/1682/5128/5142/465d5267-1e42-4119-a50f-d305281b0f93.jpg",
          alt: "Deluxe Ocean View Suite — Ocean Sunset View",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "860 sq ft all-suite accommodation",
            "1 King bed with premium linens + double sofabed",
            "Large private lanai with stunning sunset ocean views",
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
          "Standard rate: $2,199.00 × 2 = $5,339.57 — you save <strong>$522.09</strong> with the WhataHotel! special offer",
        rightLabel: "2-Night Total (incl. taxes)",
        rightValue: "$4,817.48",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=N1KQE2&rate=QE2&hotel=1223&checkin=2026-04-01&checkout=2026-04-03&guests=2&children=0&rooms=1",
      bookLabel: "Book Deluxe Ocean View Suite — 1 King",
    },
    {
      badgeText: "🏨 Fairmont Kea Lani — Villa",
      name: "Two Bedroom<br/>Oceanfront Villa",
      subtitle:
        "1,800 sq ft (167 m²) · 1 King + 2 Queen Beds + Double Sofabed<br/>Oceanfront Location · Includes Buffet Breakfast for 4<br/><strong style='color: var(--burgundy)'>Ultimate Luxury — Ideal for Families & Groups</strong>",
      priceLabel: "Special Offer Rate",
      priceRate: "$5,808.60",
      priceStrike: "Standard: $6,454.00/night",
      priceTotal: "2-Night Total: $13,909.48",
      images: [
        {
          src: "https://www.fairmont.com/reservations/assets/0/104/1677/1682/5128/5142/e388744d-07af-4097-bf9b-74ddc1e15081.jpg",
          alt: "Two Bedroom Oceanfront Villa — Bedroom",
        },
        {
          src: "https://www.fairmont.com/reservations/assets/0/104/1677/1682/5128/5142/e4a2f1de-c76a-479b-bc40-0807df40513d.jpg",
          alt: "Two Bedroom Oceanfront Villa — Living Area",
        },
      ],
      features: [
        {
          title: "Villa Features",
          icon: "door-open",
          items: [
            "1,800 sq ft — over twice the size of a standard suite",
            "Master bedroom: 1 King bed · Second bedroom: 2 Queen beds",
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
          "Standard rate: $6,454.00 × 2 = $15,441.79 — you save <strong>$1,532.31</strong> with the WhataHotel! special offer",
        rightLabel: "2-Night Total (incl. taxes)",
        rightValue: "$13,909.48",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=V2DQE2&rate=QE2&hotel=1223&checkin=2026-04-01&checkout=2026-04-03&guests=2&children=0&rooms=1",
      bookLabel: "Book Two Bedroom Oceanfront Villa",
    },
  ],
  contact: sharedContact,
};
