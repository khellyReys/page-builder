import type { Promo } from "../types";
import { sharedContact } from "./contact";

export const promo6: Promo = {
  id: "promo-6",
  title: "Laguna Beach, California",
  client: "",
  dates: "June 2 – 5, 2026 | 3 Nights | 3 Room Options",
  thumbnailUrl:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80&auto=format",
  portalTotalLabel: "Starting From",
  portalTotalValue: "$2,990.01",

  hero: {
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80&auto=format",
    alt: "Montage Laguna Beach — Oceanfront Resort",
    hotel: "Montage Laguna Beach",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>30801 South Coast Hwy, Laguna Beach, CA 92651 &nbsp;|&nbsp; Coastal Bluff-Top Luxury Resort &nbsp;|&nbsp; Southern California",
  },

  offer: {
    heading: "WhataHotel! Exclusive Perks",
    description:
      "Book through WhataHotel! and enjoy <strong>exclusive complimentary perks</strong> at Montage Laguna Beach, including <em>daily breakfast for two</em>, a <em>$100 spa services credit</em>, room upgrade, and more &mdash; all on top of the best available rate.",
    pills: [
      "✔ Room Upgrade (subject to avail.)",
      "✔ Breakfast for Two Daily",
      "✔ $100 Spa Credit",
      "✔ Free Wi-Fi",
      "✔ Late Check-Out",
    ],
  },

  rooms: [
    {
      badgeText: "🏨 Option 1",
      name: "Horizon View King",
      subtitle:
        "Elegant guest room with King bed &nbsp;&middot;&nbsp; Horizon ocean views<br/>Marble bathroom &middot; Deep soak bathtub &middot; Separate walk-in shower &middot; Private balcony/patio<br/><strong style='color: var(--burgundy)'>Best Value — From $996.67/night</strong>",
      priceLabel: "WhataHotel! Rate",
      priceRate: "$996.67",
      priceStrike: "",
      priceTotal: "3-Night Total: $2,990.01",
      images: [
        {
          src: "https://www.whatahotel.com/img/paceholder.jpg",
          alt: "Horizon View King — Montage Laguna Beach",
        },
        {
          src: "https://www.whatahotel.com/img/paceholder.jpg",
          alt: "Horizon View King — Bathroom",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "Luxurious King bed with premium linens",
            "Horizon ocean views from private balcony or patio",
            "Marble bathroom with deep soak bathtub",
            "Separate walk-in shower with premium fixtures",
            "LCD/HD television with Bose surround sound",
            "High-speed Wi-Fi · In-room safe · Mini bar",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room Category Upgrade at Check-In (if available)",
            "Complimentary Breakfast for Two Daily",
            "$100 Spa Services Credit",
            "Complimentary Wi-Fi",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "Includes all WhataHotel! exclusive perks &mdash; breakfast, spa credit, upgrade &amp; more",
        rightLabel: "3-Night Total (excl. taxes)",
        rightValue: "$2,990.01",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/showRates.cfm?hotelID=1253&checkIn=2026-06-02&checkOut=2026-06-05&guests=2&children=0&rooms=1",
      bookLabel: "Book Horizon View King",
    },
    {
      badgeText: "🏨 Option 2",
      name: "Horizon View<br/>Queen Queen",
      subtitle:
        "Spacious guest room with two Queen beds &nbsp;&middot;&nbsp; Horizon ocean views<br/>Marble bathroom &middot; Deep soak bathtub &middot; Walk-in shower &middot; Private balcony/patio<br/><strong style='color: var(--burgundy)'>Ideal for Families — From $1,215.00/night</strong>",
      priceLabel: "WhataHotel! Rate",
      priceRate: "$1,215",
      priceStrike: "",
      priceTotal: "3-Night Total: $3,645.00",
      images: [
        {
          src: "https://www.whatahotel.com/img/paceholder.jpg",
          alt: "Horizon View Queen Queen — Montage Laguna Beach",
        },
        {
          src: "https://www.whatahotel.com/img/paceholder.jpg",
          alt: "Horizon View Queen Queen — Ocean View",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "Two Queen beds with premium linens",
            "Horizon ocean views from private balcony or patio",
            "Marble bathroom with deep soak bathtub",
            "Separate walk-in shower with premium fixtures",
            "LCD/HD television with Bose surround sound",
            "High-speed Wi-Fi · In-room safe · Mini bar",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room Category Upgrade at Check-In (if available)",
            "Complimentary Breakfast for Two Daily",
            "$100 Spa Services Credit",
            "Complimentary Wi-Fi",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "Includes all WhataHotel! exclusive perks &mdash; breakfast, spa credit, upgrade &amp; more",
        rightLabel: "3-Night Total (excl. taxes)",
        rightValue: "$3,645.00",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/showRates.cfm?hotelID=1253&checkIn=2026-06-02&checkOut=2026-06-05&guests=2&children=0&rooms=1",
      bookLabel: "Book Horizon View Queen Queen",
    },
    {
      badgeText: "🏨 Option 3",
      name: "Ocean View<br/>Queen Queen",
      subtitle:
        "Premium guest room with two Queen beds &nbsp;&middot;&nbsp; Direct ocean views<br/>Marble bathroom &middot; Deep soak bathtub &middot; Walk-in shower &middot; Private balcony/patio<br/><strong style='color: var(--burgundy)'>Premium Views — From $1,341.33/night</strong>",
      priceLabel: "WhataHotel! Rate",
      priceRate: "$1,341.33",
      priceStrike: "",
      priceTotal: "3-Night Total: $4,023.99",
      images: [
        {
          src: "https://www.whatahotel.com/img/paceholder.jpg",
          alt: "Ocean View Queen Queen — Montage Laguna Beach",
        },
        {
          src: "https://www.whatahotel.com/img/paceholder.jpg",
          alt: "Ocean View Queen Queen — Ocean View Balcony",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "Two Queen beds with premium linens",
            "Direct ocean views from private balcony or patio",
            "Marble bathroom with deep soak bathtub",
            "Separate walk-in shower with premium fixtures",
            "LCD/HD television with Bose surround sound",
            "High-speed Wi-Fi · In-room safe · Mini bar",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room Category Upgrade at Check-In (if available)",
            "Complimentary Breakfast for Two Daily",
            "$100 Spa Services Credit",
            "Complimentary Wi-Fi",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "Includes all WhataHotel! exclusive perks &mdash; breakfast, spa credit, upgrade &amp; more",
        rightLabel: "3-Night Total (excl. taxes)",
        rightValue: "$4,023.99",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/showRates.cfm?hotelID=1253&checkIn=2026-06-02&checkOut=2026-06-05&guests=2&children=0&rooms=1",
      bookLabel: "Book Ocean View Queen Queen",
    },
  ],

  contact: sharedContact,
};
