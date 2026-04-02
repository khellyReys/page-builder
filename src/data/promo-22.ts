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

  rooms: [
    // ── Room 1: Superior Room ──
    {
      badgeText: "🏨 Option 1",
      name: "Superior Room<br/>King or Queen Bed",
      subtitle:
        "300 sqft · Golf or City Views · Mini Fridge<br/><strong style='color: var(--burgundy)'>Best Value – From $577.10/night</strong>",
      priceRate: "$577.10",
      bookingSummary: {
        checkInOut: "May 5 → May 6",
        nights: "1",
        adr: "$577.10",
        total: "$675.13",
      },
      grandTotalInclTaxes: "$675.13",
      nightsLabel: "1",
      stayCheckInOut: "May 5 → May 6",

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
          title: "Exclusive Perks",
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
    },

    // ── Room 2: Superior Two Queen Room ──
    {
      badgeText: "🏨 Option 2",
      name: "Superior Two Queen Room<br/>Golf or City Views",
      subtitle:
        "300 sqft · Two Queen Beds · Mini Fridge<br/><strong style='color: var(--burgundy)'>From $604.10/night</strong>",
      priceRate: "$604.10",
      bookingSummary: {
        checkInOut: "May 5 → May 6",
        nights: "1",
        adr: "$604.10",
        total: "$604.10",
      },
      grandTotalInclTaxes: "$604.10",
      nightsLabel: "1",
      stayCheckInOut: "May 5 → May 6",

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
          title: "Exclusive Perks",
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
    },

    // ── Room 3: Junior Suite ──
    {
      badgeText: "🏨 Option 3",
      name: "Junior Suite<br/>King or Queen Bed",
      subtitle:
        "355 sqft · Various Views<br/><strong style='color: var(--burgundy)'>From $613.10/night</strong>",
      priceRate: "$613.10",
      bookingSummary: {
        checkInOut: "May 5 → May 6",
        nights: "1",
        adr: "$613.10",
        total: "$613.10",
      },
      grandTotalInclTaxes: "$613.10",
      nightsLabel: "1",
      stayCheckInOut: "May 5 → May 6",

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
          title: "Exclusive Perks",
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
    },
  ],

};
