import type { Promo } from "../types";
import { sharedContact } from "./contact";

// AGENT NOTE: Room images are hosted on d2573qu6qrjt8c.cloudfront.net (not the usual d321ocj5nbe62c.cloudfront.net) — URLs taken as-is from booking page.
// AGENT NOTE: Rate label on this property is "LUXURY IN ADVANCE" (not "SEASONAL OFFER"). Treated as the lower/exclusive rate per SSOT rules.
// AGENT NOTE: Hero image sourced from hotel detail page JSON-LD; no subSlides background-image found on this property.
// AGENT NOTE: Hotel address on page is only "Karaköy, Istanbul, Turkey" — may need a more specific street address.

export const promo10: Promo = {
  id: "promo-10",
  title: "The Peninsula Istanbul",
  client: "",
  dates: "November 16 – 20, 2026 | 4 Nights | 3 Room Options",
  thumbnailUrl:
    "https://www.whatahotel.com/content/hotels/6347/PN_Istanbul.jpg",
  portalTotalLabel: "Starting From",
  portalTotalValue: "€2,550.00",

  hero: {
    imageUrl:
      "https://www.whatahotel.com/content/hotels/6347/PN_Istanbul.jpg",
    alt: "The Peninsula Istanbul — Luxury on the Bosphorus",
    hotel: "The Peninsula Istanbul",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Karaköy, Istanbul, Turkey &nbsp;|&nbsp; Bosphorus Luxury",
  },

  offer: {
    heading: "WhataHotel! Exclusive Perks",
    description:
      "Book through WhataHotel! and enjoy <strong>exclusive complimentary perks</strong> at The Peninsula Istanbul, including <em>full breakfast for two daily</em>, a <em>$100 F&amp;B or spa credit</em>, room upgrade, and more &mdash; all on top of the best available rate.",
    pills: [
      "✔ Room Upgrade at Time of Booking (already included)",
      "✔ Full Breakfast for 2 Daily",
      "✔ $100 F&B or Spa Credit",
      "✔ Free WiFi",
      "✔ Late Check-Out (subject to avail.)",
    ],
  },

  rooms: [
    // AGENT NOTE: 2 rate variants — LUXURY IN ADVANCE €637.50 (A1KPJ7) and BAR €750.00 (A1KPJ0). Using lowest.
    {
      badgeText: "🏨 Option 1",
      name: "Deluxe Room<br/>King or Super King Bed",
      subtitle:
        "King or Super King bed &nbsp;&middot;&nbsp; Street/Bosphorus views<br/>Marble bathroom &middot; Separate bathtub &amp; walk-in shower<br/><strong style='color: var(--burgundy)'>Best Value — From €637.50/night</strong>",
      priceLabel: "WhataHotel! Rate",
      priceRate: "€637.50",
      priceStrike: "Standard: €750/night",
      priceTotal: "4-Night Total: €2,550.00",
      images: [
        {
          src: "https://d2573qu6qrjt8c.cloudfront.net/4EFF22341F374B61B345587083E043C1/4EFF22341F374B61B345587083E043C1.jpg",
          alt: "Deluxe Room — The Peninsula Istanbul",
        },
        {
          src: "https://d2573qu6qrjt8c.cloudfront.net/F88ED48290D7402C9A7FDA280E6505EF/E.jpg",
          alt: "Deluxe Room Bathroom — The Peninsula Istanbul",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "1 King or Super King bed",
            "Street or Bosphorus views",
            "Marble bathroom with separate bathtub and walk-in shower",
            "4K UHD TV · Nespresso machine",
            "Complimentary international calls",
            "Free Wi-Fi · Daily housekeeping",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room Upgrade at Time of Booking (already included)",
            "Full Breakfast for Two Daily",
            "$100 F&B or Spa Credit",
            "Free WiFi",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "4 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "Standard rate: €750/night &times; 4 = €3,000 &mdash; WhataHotel! rate: €637.50/night &times; 4 = €2,550 &mdash; you save <strong>€450</strong>",
        rightLabel: "4-Night Total (excl. taxes)",
        rightValue: "€2,550.00",
      },
      comparison: [
        {
          label: "Nightly Rate",
          standard: "€750/night",
          whatahotel: "€637.50/night",
        },
        {
          label: "4-Night Total",
          standard: "€3,000",
          whatahotel: "€2,550",
        },
        {
          label: "You Save",
          standard: "",
          whatahotel: "€450",
          highlight: true,
        },
      ],
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=A1KPJ7&rate=PJ8&hotel=6347&checkin=2026-11-16&checkout=2026-11-20&guests=2&children=0&rooms=1",
      bookLabel: "Book Deluxe Room",
    },
    // AGENT NOTE: 2 rate variants — LUXURY IN ADVANCE €637.50 (B1KPJ7) and BAR €750.00 (B1KPJ0). Using lowest.
    {
      badgeText: "🏨 Option 2",
      name: "Superior Room<br/>King or Super King Bed",
      subtitle:
        "King or Super King bed &nbsp;&middot;&nbsp; Street/Building views &middot; 40–49 sqm<br/>Marble bathroom &middot; Tablet room control<br/><strong style='color: var(--burgundy)'>Same Great Rate — From €637.50/night</strong>",
      priceLabel: "WhataHotel! Rate",
      priceRate: "€637.50",
      priceStrike: "Standard: €750/night",
      priceTotal: "4-Night Total: €2,550.00",
      images: [
        {
          src: "https://d2573qu6qrjt8c.cloudfront.net/1BB161A25F75450BB4B08D9E93553A75/1BB161A25F75450BB4B08D9E93553A75.jpg",
          alt: "Superior Room — The Peninsula Istanbul",
        },
        {
          src: "https://d2573qu6qrjt8c.cloudfront.net/9589937F66E94E4BA6476EF0454E4C73/E.jpg",
          alt: "Superior Room Bathroom — The Peninsula Istanbul",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "1 King or Super King bed",
            "40–49 sqm — Street or building views",
            "Marble bathroom with premium amenities",
            "60-inch UHD 4K TV · Nespresso machine",
            "Tablet room control system",
            "Free Wi-Fi · Daily housekeeping",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room Upgrade at Time of Booking (already included)",
            "Full Breakfast for Two Daily",
            "$100 F&B or Spa Credit",
            "Free WiFi",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "4 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "Standard rate: €750/night &times; 4 = €3,000 &mdash; WhataHotel! rate: €637.50/night &times; 4 = €2,550 &mdash; you save <strong>€450</strong>",
        rightLabel: "4-Night Total (excl. taxes)",
        rightValue: "€2,550.00",
      },
      comparison: [
        {
          label: "Nightly Rate",
          standard: "€750/night",
          whatahotel: "€637.50/night",
        },
        {
          label: "4-Night Total",
          standard: "€3,000",
          whatahotel: "€2,550",
        },
        {
          label: "You Save",
          standard: "",
          whatahotel: "€450",
          highlight: true,
        },
      ],
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=B1KPJ7&rate=PJ8&hotel=6347&checkin=2026-11-16&checkout=2026-11-20&guests=2&children=0&rooms=1",
      bookLabel: "Book Superior Room",
    },
    // AGENT NOTE: 2 rate variants — LUXURY IN ADVANCE €680.00 (A1UPJ7) and BAR €800.00 (A1UPJ0). Using lowest.
    {
      badgeText: "🏨 Option 3",
      name: "Deluxe Room with Garden<br/>Super King Bed",
      subtitle:
        "Super King bed &nbsp;&middot;&nbsp; Garden view &middot; 50–56 sqm<br/>30 sqm private garden terrace &middot; 1.5 bathrooms<br/><strong style='color: var(--burgundy)'>Garden Retreat — From €680/night</strong>",
      priceLabel: "WhataHotel! Rate",
      priceRate: "€680",
      priceStrike: "Standard: €800/night",
      priceTotal: "4-Night Total: €2,720.00",
      images: [
        {
          src: "https://d2573qu6qrjt8c.cloudfront.net/4EFF22341F374B61B345587083E043C1/4EFF22341F374B61B345587083E043C1.jpg",
          alt: "Deluxe Room with Garden — The Peninsula Istanbul",
        },
        {
          src: "https://d2573qu6qrjt8c.cloudfront.net/F88ED48290D7402C9A7FDA280E6505EF/E.jpg",
          alt: "Deluxe Room with Garden Bathroom — The Peninsula Istanbul",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "Super King bed",
            "50–56 sqm with 30 sqm private garden terrace",
            "Garden views · Walk-in closet",
            "1.5 bathrooms with marble finishes",
            "4K UHD TV · Nespresso machine",
            "Free Wi-Fi · Daily housekeeping",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room Upgrade at Time of Booking (already included)",
            "Full Breakfast for Two Daily",
            "$100 F&B or Spa Credit",
            "Free WiFi",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "4 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "Standard rate: €800/night &times; 4 = €3,200 &mdash; WhataHotel! rate: €680/night &times; 4 = €2,720 &mdash; you save <strong>€480</strong>",
        rightLabel: "4-Night Total (excl. taxes)",
        rightValue: "€2,720.00",
      },
      comparison: [
        {
          label: "Nightly Rate",
          standard: "€800/night",
          whatahotel: "€680/night",
        },
        {
          label: "4-Night Total",
          standard: "€3,200",
          whatahotel: "€2,720",
        },
        {
          label: "You Save",
          standard: "",
          whatahotel: "€480",
          highlight: true,
        },
      ],
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=A1UPJ7&rate=PJ8&hotel=6347&checkin=2026-11-16&checkout=2026-11-20&guests=2&children=0&rooms=1",
      bookLabel: "Book Deluxe Garden Room",
    },
  ],

  contact: sharedContact,
};
