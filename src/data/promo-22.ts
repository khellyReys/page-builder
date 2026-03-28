import type { Promo } from "../types";

export const promo22: Promo = {
  id: "promo-22",
  createdAt: "2026-03-28T12:00:00Z",
  title: "Coral Gables, Florida",
  client: "",
  dates: "May 5 – 6, 2026 | 1 Night | 3 Room Options",
  thumbnailUrl:
    "https://whatahotel.com/content/hotels/2554/The-Biltmore-Hotel.jpg",
  portalTotalLabel: "Starting From",
  portalTotalValue: "$577.10",

  hero: {
    imageUrl:
      "https://whatahotel.com/content/hotels/2554/The-Biltmore-Hotel.jpg",
    alt: "The Biltmore Hotel, Coral Gables",
    hotel: "The Biltmore Hotel, Coral Gables",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>1200 Anastasia Ave, Coral Gables, FL 33134 &nbsp;|&nbsp; Historic Luxury Resort",
    cityImageUrl:
      "https://i.jatinagroup.com/9eff1d04-f55f-4ca1-8b43-ec9239beeec1/coral-gables-retreat-destination.png?auto=compress&fit=min&fm=webp&q=800&rect=0%2C0%2C2000%2C1125&w=1850",
    cityImageAlt: "Coral Gables, Florida",
  },

  offer: {
    heading: "WhataHotel! Exclusive Offer",
    description:
      "Book through WhataHotel! and enjoy exclusive complimentary perks at The Biltmore Hotel, Coral Gables — a National Historic Landmark resort.",
    pills: [
      "✓ Upgrade subject to availability at Check-In",
      "✓ Complimentary Breakfast for Two Daily",
      "✓ $100 Spa Treatment Credit",
      "✓ Free WiFi",
      "✓ Late Check-out subject to availability",
    ],
  },

  rooms: [
    // ── Room 1: Superior Room ──
    {
      badgeText: "🏨 Option 1",
      name: "Superior Room<br/>King or Queen Bed",
      subtitle:
        "300 sqft · Golf or City Views · Mini Fridge<br/><strong style='color: var(--burgundy)'>Best Value – From $577.10/night</strong>",
      priceRate: "$577.10",
      priceStrike: "Standard: $675.13/night",
      priceTotal: "1-Night Total: $577.10 (excl. taxes)",
      bookingSummary: {
        checkInOut: "May 5 → May 6",
        nights: "1",
        adr: "$577.10",
        total: "$577.10",
      },
      savings: {
        leftLabel:
          "1 Night &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "Standard rate: $675.13/night &times; 1 = $675.13 &mdash; WhataHotel! rate: $577.10/night &times; 1 = $577.10 &mdash; you save <strong>$98.03</strong>",
        rightLabel: "(excl. taxes)",
        rightValue: "$577.10",
      },
      images: [
        {
          src: "https://d2573qu6qrjt8c.cloudfront.net/846D866974144FC6B96EED2B53F643E3/846D866974144FC6B96EED2B53F643E3.JPEG",
          alt: "Superior Room",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "300 sqft with King or Queen bed",
            "Golf or City views",
            "65-inch flatscreen with premium cable",
            "Espresso machine and in-room safe",
            "Mini fridge and work desk",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Upgrade subject to availability at Check-In",
            "Complimentary Breakfast for Two Daily",
            "$100 Spa Treatment Credit",
            "Free WiFi",
            "Late Check-out subject to availability",
          ],
        },
      ],
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=C2Q2SH&rate=2SH&hotel=2554&checkin=2026-05-05&checkout=2026-05-06&guests=2&children=0&rooms=1",
      bookLabel: "Book Now",
    },

    // ── Room 2: Superior Two Queen Room ──
    {
      badgeText: "🏨 Option 2",
      name: "Superior Two Queen Room<br/>Golf or City Views",
      subtitle:
        "300 sqft · Two Queen Beds · Mini Fridge<br/><strong style='color: var(--burgundy)'>From $604.10/night</strong>",
      priceRate: "$604.10",
      priceStrike: "Standard: $705.64/night",
      priceTotal: "1-Night Total: $604.10 (excl. taxes)",
      bookingSummary: {
        checkInOut: "May 5 → May 6",
        nights: "1",
        adr: "$604.10",
        total: "$604.10",
      },
      savings: {
        leftLabel:
          "1 Night &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "Standard rate: $705.64/night &times; 1 = $705.64 &mdash; WhataHotel! rate: $604.10/night &times; 1 = $604.10 &mdash; you save <strong>$101.54</strong>",
        rightLabel: "(excl. taxes)",
        rightValue: "$604.10",
      },
      images: [
        {
          src: "https://d2573qu6qrjt8c.cloudfront.net/8B9DB031AB2945A69DE6E93E93553B00/8B9DB031AB2945A69DE6E93E93553B00.JPEG",
          alt: "Superior Two Queen Room",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "300 sqft with two Queen beds",
            "Golf or City views",
            "65-inch flatscreen with premium cable",
            "Espresso machine and in-room safe",
            "Mini fridge and work desk",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Upgrade subject to availability at Check-In",
            "Complimentary Breakfast for Two Daily",
            "$100 Spa Treatment Credit",
            "Free WiFi",
            "Late Check-out subject to availability",
          ],
        },
      ],
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=CSK2SH&rate=2SH&hotel=2554&checkin=2026-05-05&checkout=2026-05-06&guests=2&children=0&rooms=1",
      bookLabel: "Book Now",
    },

    // ── Room 3: Junior Suite ──
    {
      badgeText: "🏨 Option 3",
      name: "Junior Suite<br/>King or Queen Bed",
      subtitle:
        "355 sqft · Various Views<br/><strong style='color: var(--burgundy)'>From $613.10/night</strong>",
      priceRate: "$613.10",
      priceStrike: "Standard: $715.81/night",
      priceTotal: "1-Night Total: $613.10 (excl. taxes)",
      bookingSummary: {
        checkInOut: "May 5 → May 6",
        nights: "1",
        adr: "$613.10",
        total: "$613.10",
      },
      savings: {
        leftLabel:
          "1 Night &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "Standard rate: $715.81/night &times; 1 = $715.81 &mdash; WhataHotel! rate: $613.10/night &times; 1 = $613.10 &mdash; you save <strong>$102.71</strong>",
        rightLabel: "(excl. taxes)",
        rightValue: "$613.10",
      },
      images: [
        {
          src: "https://be.synxis.com/shs-ngbe-image-resizer/images/hotel/31115/images/room/junior_suite.jpg",
          alt: "Junior Suite",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "355 sqft (33 sqm) Junior Suite",
            "King or Queen bed",
            "Various views",
            "WiFi included",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Upgrade subject to availability at Check-In",
            "Complimentary Breakfast for Two Daily",
            "$100 Spa Treatment Credit",
            "Free WiFi",
            "Late Check-out subject to availability",
          ],
        },
      ],
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=U1K2SH&rate=2SH&hotel=2554&checkin=2026-05-05&checkout=2026-05-06&guests=2&children=0&rooms=1",
      bookLabel: "Book Now",
    },
  ],

  pricingFootnote:
    "Rates shown exclude applicable taxes and fees. Final pricing will be confirmed at time of booking.",

  contact: {
    email: "info@whatahotel.com",
    footerHtml:
      "For questions or to customize your stay, contact us at <a href='mailto:info@whatahotel.com'>info@whatahotel.com</a>",
  },
};
