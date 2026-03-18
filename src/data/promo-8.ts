import type { Promo } from "../types";
import { sharedContact } from "./contact";

export const promo8: Promo = {
  id: "promo-8",
  title: "The Langham, Hong Kong",
  client: "",
  dates: "June 21 – 24, 2026 | 3 Nights | 3 Room Options",
  thumbnailUrl:
    "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/125/208/870/Langham-Hong-Kong-Hotel-Superior-City-View-Room_P.jpg",
  portalTotalLabel: "Starting From",
  portalTotalValue: "HK$4,995.00",

  hero: {
    imageUrl:
      "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/125/208/870/Langham-Hong-Kong-Hotel-Superior-City-View-Room_P.jpg",
    alt: "The Langham Hotel, Hong Kong — Tsim Sha Tsui Luxury",
    hotel: "The Langham, Hong Kong",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>8 Peking Road, Tsim Sha Tsui, Kowloon &nbsp;|&nbsp; Iconic Luxury Hotel &nbsp;|&nbsp; Hong Kong",
  },

  offer: {
    heading: "WhataHotel! Exclusive Perks",
    description:
      "Book through WhataHotel! and enjoy <strong>exclusive complimentary perks</strong> at The Langham, Hong Kong, including <em>daily buffet breakfast for two</em>, a <em>HK$450 hotel credit</em>, room upgrade, and more &mdash; all on top of the best available rate.",
    pills: [
      "✔ Room Upgrade (subject to avail.)",
      "✔ Daily Buffet Breakfast for 2",
      "✔ HK$450 Hotel Credit",
      "✔ Complimentary Wi-Fi",
      "✔ Late Check-Out (upon request)",
    ],
  },

  rooms: [
    // AGENT NOTE: Room had 2 rate variants (HK$1,665 LINGER LONGER and HK$1,850 BAR) — used lowest (HK$1,665), room=B1QRQ6
    {
      badgeText: "🏨 Option 1",
      name: "Classic Room<br/>King Bed",
      subtitle:
        "King bed &nbsp;&middot;&nbsp; City views<br/>Marble bathroom &middot; Signature Langham luxury linens<br/><strong style='color: var(--burgundy)'>Best Value — From HK$1,665/night</strong>",
      priceLabel: "WhataHotel! Rate",
      priceRate: "HK$1,665",
      priceStrike: "Standard: HK$1,850/night",
      priceTotal: "3-Night Total: HK$4,995.00",
      images: [
        {
          src: "https://www.whatahotel.com/img/paceholder.jpg",
          alt: "Classic Room King Bed — The Langham Hong Kong",
        },
        {
          src: "https://www.whatahotel.com/img/paceholder.jpg",
          alt: "Classic Room King Bed — Bathroom",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "King bed with signature Langham luxury linens",
            "City views from Tsim Sha Tsui",
            "Marble bathroom with premium bath amenities",
            "42-inch flat-screen TV",
            "High-speed Wi-Fi · In-room safe · Minibar",
            "Nespresso machine · Tea-making facilities",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room Category Upgrade (subject to availability at check-in)",
            "Buffet Breakfast for Two Daily",
            "HK$450 Hotel Credit",
            "Complimentary Wi-Fi",
            "Late Check-Out (upon request)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "Standard rate: HK$1,850 &times; 3 = HK$5,550 &mdash; you save <strong>HK$555</strong>",
        rightLabel: "3-Night Total (excl. taxes)",
        rightValue: "HK$4,995.00",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=B1QRQ6&rate=RQ6&hotel=1112&checkin=2026-06-21&checkout=2026-06-24&guests=2&children=0&rooms=1",
      bookLabel: "Book Classic King",
    },
    // AGENT NOTE: Room had 2 rate variants (HK$1,755 LINGER LONGER and HK$1,950 BAR) — used lowest (HK$1,755), room=A2KRQ6
    {
      badgeText: "🏨 Option 2",
      name: "Superior Room<br/>King Bed",
      subtitle:
        "King bed &nbsp;&middot;&nbsp; City views &middot; More spacious layout<br/>Marble bathroom &middot; Signature Langham luxury linens<br/><strong style='color: var(--burgundy)'>Upgraded Comfort — From HK$1,755/night</strong>",
      priceLabel: "WhataHotel! Rate",
      priceRate: "HK$1,755",
      priceStrike: "Standard: HK$1,950/night",
      priceTotal: "3-Night Total: HK$5,265.00",
      images: [
        {
          src: "https://www.whatahotel.com/img/paceholder.jpg",
          alt: "Superior Room King Bed — The Langham Hong Kong",
        },
        {
          src: "https://www.whatahotel.com/img/paceholder.jpg",
          alt: "Superior Room King Bed — City View",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "King bed with signature Langham luxury linens",
            "City views with more spacious layout",
            "Marble bathroom with premium bath amenities",
            "42-inch flat-screen TV",
            "High-speed Wi-Fi · In-room safe · Minibar",
            "Nespresso machine · Tea-making facilities",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room Category Upgrade (subject to availability at check-in)",
            "Buffet Breakfast for Two Daily",
            "HK$450 Hotel Credit",
            "Complimentary Wi-Fi",
            "Late Check-Out (upon request)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "Standard rate: HK$1,950 &times; 3 = HK$5,850 &mdash; you save <strong>HK$585</strong>",
        rightLabel: "3-Night Total (excl. taxes)",
        rightValue: "HK$5,265.00",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=A2KRQ6&rate=RQ6&hotel=1112&checkin=2026-06-21&checkout=2026-06-24&guests=2&children=0&rooms=1",
      bookLabel: "Book Superior King",
    },
    // AGENT NOTE: Room had 2 rate variants (HK$1,935 LINGER LONGER and HK$2,150 BAR) — used lowest (HK$1,935), room=D1KRQ6
    {
      badgeText: "🏨 Option 3",
      name: "Deluxe Room<br/>King Bed",
      subtitle:
        "King bed &nbsp;&middot;&nbsp; Enhanced city views &middot; Premium layout<br/>Marble bathroom &middot; Separate shower &amp; bathtub<br/><strong style='color: var(--burgundy)'>Premium Choice — From HK$1,935/night</strong>",
      priceLabel: "WhataHotel! Rate",
      priceRate: "HK$1,935",
      priceStrike: "Standard: HK$2,150/night",
      priceTotal: "3-Night Total: HK$5,805.00",
      images: [
        {
          src: "https://www.whatahotel.com/img/paceholder.jpg",
          alt: "Deluxe Room King Bed — The Langham Hong Kong",
        },
        {
          src: "https://www.whatahotel.com/img/paceholder.jpg",
          alt: "Deluxe Room King Bed — Premium View",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "King bed with signature Langham luxury linens",
            "Enhanced city views with premium spacious layout",
            "Marble bathroom with separate shower and bathtub",
            "42-inch flat-screen TV",
            "High-speed Wi-Fi · In-room safe · Minibar",
            "Nespresso machine · Tea-making facilities",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room Category Upgrade (subject to availability at check-in)",
            "Buffet Breakfast for Two Daily",
            "HK$450 Hotel Credit",
            "Complimentary Wi-Fi",
            "Late Check-Out (upon request)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "Standard rate: HK$2,150 &times; 3 = HK$6,450 &mdash; you save <strong>HK$645</strong>",
        rightLabel: "3-Night Total (excl. taxes)",
        rightValue: "HK$5,805.00",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=D1KRQ6&rate=RQ6&hotel=1112&checkin=2026-06-21&checkout=2026-06-24&guests=2&children=0&rooms=1",
      bookLabel: "Book Deluxe King",
    },
  ],

  contact: sharedContact,
};
