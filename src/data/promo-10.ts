import type { Promo } from "../types";
import { sharedContact } from "./contact";

// AGENT NOTE: Regent Taipei (hotel 2284) — IHG property
// AGENT NOTE: Two rate tiers on page — "Commissionable" (IHG One Night on Us promo, lower)
//   and "WhataHotel!" (standard, higher). The Commissionable rate is exactly 75% of standard
//   (pay 3 nights, get 4th free). IHG One Night on Us IS COMBINABLE with WhataHotel! Perks.
// AGENT NOTE: All page totals include ~15.5% Taiwan VAT + service charge.
// AGENT NOTE: Client name not provided — update when known.

export const promo10: Promo = {
  id: "promo-10",
  title: "Regent Taipei — IHG One Night on Us + Perks",
  client: "", // AGENT NOTE: Client name not provided — update when known
  dates: "June 1 – 5, 2026 | 4 Nights | 3 Room Options",
  thumbnailUrl:
    "https://whatahotel.com/content/hotels/2284/1_Taipen_lounge.jpg",
  portalTotalLabel: "Starting From",
  portalTotalValue: "NT$29,454",

  hero: {
    imageUrl:
      "https://whatahotel.com/content/hotels/2284/1_Taipen_lounge.jpg",
    alt: "Regent Taipei — Luxury in the Heart of Taipei",
    hotel: "Regent Taipei",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>No. 3, Sec. 2, Zhongshan N. Rd., Zhongshan District, Taipei 104 &nbsp;|&nbsp; IHG Luxury &amp; Lifestyle Collection",
  },

  offer: {
    heading: "IHG One Night on Us + WhataHotel! Exclusive Perks — COMBINABLE",
    description:
      "An exceptional value: the <strong>IHG One Night on Us</strong> promotion is <strong>fully combinable</strong> with WhataHotel! Exclusive Perks. Stay 4 nights and effectively pay for only 3 &mdash; <em>plus</em> enjoy a <em>room category upgrade</em>, <em>daily breakfast for two</em>, a <em>$100 hotel credit</em>, free Wi-Fi on unlimited devices, and late check-out at 2 pm. Two powerful offers, one incredible rate &mdash; only through WhataHotel!",
    pills: [
      "✔ IHG One Night on Us — Pay 3 Nights, Stay 4",
      "✔ Room Category Upgrade (subject to avail.)",
      "✔ Breakfast for 2 Daily",
      "✔ $100 Hotel Credit (food & beverage)",
      "✔ Free WiFi — Unlimited Devices",
      "✔ Late Check-Out at 2pm (subject to avail.)",
      "✔ Free Cancellation Before May 29, 2026",
    ],
  },

  rooms: [
    // ──────────────────────────────────────────────────────────────
    // ROOM 1 — Classic Room (Flexible Bed Type)
    // AGENT NOTE: 2 rate variants — Commissionable NT$6,375 (9CSPLXO) and WhataHotel NT$8,500 (CSPLXO).
    //   Using Commissionable (IHG One Night on Us) as the promotional rate.
    // AGENT NOTE: No room images on booking page for this room type — placeholder used.
    // ──────────────────────────────────────────────────────────────
    {
      badgeText: "🏨 Option 1",
      name: "Classic Room<br/>Flexible Bed Type",
      subtitle:
        "Flexible bed type &middot; Classic room<br/>IHG One Night on Us + WhataHotel! Perks<br/><strong style='color: var(--burgundy)'>Best Value — From NT$6,375/night</strong>",
      priceLabel: "IHG One Night on Us + Perks",
      priceRate: "NT$6,375",
      priceStrike: "Standard: NT$8,500/night",
      priceTotal: "4-Night Total: NT$29,454",
      images: [
        // AGENT NOTE: No room images on booking page — placeholder used
        {
          src: "https://www.whatahotel.com/img/paceholder.jpg",
          alt: "Classic Room — Regent Taipei",
        },
        {
          src: "https://www.whatahotel.com/img/paceholder.jpg",
          alt: "Classic Room — Regent Taipei",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "Flexible bed type (King or Twin assigned at check-in)",
            "Classic room category",
            "Complimentary in-room Wi-Fi on unlimited devices",
            "IHG One Rewards points earned on stay",
            "Pay Later option — card charged after checkout",
            "Free cancellation before May 29, 2026",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "IHG One Night on Us — Pay 3 Nights, Stay 4 (COMBINABLE)",
            "Room Category Upgrade (subject to availability at check-in)",
            "Breakfast for Two Daily",
            "$100 Hotel Credit (food & beverage)",
            "Free WiFi — Unlimited Devices",
            "Late Check-Out at 2pm (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "4 Nights &nbsp;|&nbsp; <span>IHG One Night on Us + WhataHotel! Perks</span>",
        leftSub:
          "Standard: NT$8,500/night (4-night total: NT$39,272) &mdash; IHG One Night on Us + Perks: NT$6,375/night (4-night total: NT$29,454) &mdash; you save <strong>NT$9,818</strong>",
        rightLabel: "4-Night Total (incl. taxes)",
        rightValue: "NT$29,454",
      },
      comparison: [
        {
          label: "Nightly Rate",
          standard: "NT$8,500/night",
          whatahotel: "NT$6,375/night",
        },
        {
          label: "4-Night Total",
          standard: "NT$39,272",
          whatahotel: "NT$29,454",
        },
        {
          label: "You Save",
          standard: "",
          whatahotel: "NT$9,818",
          highlight: true,
        },
      ],
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=9CSPLXO&rate=LXO&hotel=2284&checkin=2026-06-01&checkout=2026-06-05&guests=2&children=0&rooms=1",
      bookLabel: "Book Classic Room",
    },

    // ──────────────────────────────────────────────────────────────
    // ROOM 2 — 1 King Classic City View (45 sqm)
    // AGENT NOTE: 2 rate variants — Commissionable NT$6,600 (9DKNLXO) and WhataHotel NT$8,800 (DKNLXO).
    //   Using Commissionable (IHG One Night on Us) as the promotional rate.
    // AGENT NOTE: No room images on booking page for this room type — placeholder used.
    // ──────────────────────────────────────────────────────────────
    {
      badgeText: "🏨 Option 2",
      name: "1 King Classic<br/>City View",
      subtitle:
        "King bed &middot; City views &middot; 45 sqm<br/>IHG One Night on Us + WhataHotel! Perks<br/><strong style='color: var(--burgundy)'>City View — From NT$6,600/night</strong>",
      priceLabel: "IHG One Night on Us + Perks",
      priceRate: "NT$6,600",
      priceStrike: "Standard: NT$8,800/night",
      priceTotal: "4-Night Total: NT$30,492",
      images: [
        // AGENT NOTE: No room images on booking page — placeholder used
        {
          src: "https://www.whatahotel.com/img/paceholder.jpg",
          alt: "1 King Classic City View — Regent Taipei",
        },
        {
          src: "https://www.whatahotel.com/img/paceholder.jpg",
          alt: "1 King Classic City View — Regent Taipei",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "King bed with luxury bedding",
            "45 sqm — City views",
            "Classic room category with city outlook",
            "Complimentary in-room Wi-Fi on unlimited devices",
            "IHG One Rewards points earned on stay",
            "Free cancellation before May 29, 2026",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "IHG One Night on Us — Pay 3 Nights, Stay 4 (COMBINABLE)",
            "Room Category Upgrade (subject to availability at check-in)",
            "Breakfast for Two Daily",
            "$100 Hotel Credit (food & beverage)",
            "Free WiFi — Unlimited Devices",
            "Late Check-Out at 2pm (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "4 Nights &nbsp;|&nbsp; <span>IHG One Night on Us + WhataHotel! Perks</span>",
        leftSub:
          "Standard: NT$8,800/night (4-night total: NT$40,656) &mdash; IHG One Night on Us + Perks: NT$6,600/night (4-night total: NT$30,492) &mdash; you save <strong>NT$10,164</strong>",
        rightLabel: "4-Night Total (incl. taxes)",
        rightValue: "NT$30,492",
      },
      comparison: [
        {
          label: "Nightly Rate",
          standard: "NT$8,800/night",
          whatahotel: "NT$6,600/night",
        },
        {
          label: "4-Night Total",
          standard: "NT$40,656",
          whatahotel: "NT$30,492",
        },
        {
          label: "You Save",
          standard: "",
          whatahotel: "NT$10,164",
          highlight: true,
        },
      ],
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=9DKNLXO&rate=LXO&hotel=2284&checkin=2026-06-01&checkout=2026-06-05&guests=2&children=0&rooms=1",
      bookLabel: "Book 1 King City View",
    },

    // ──────────────────────────────────────────────────────────────
    // ROOM 3 — 2 Twin Classic City View (45 sqm)
    // AGENT NOTE: 2 rate variants — Commissionable NT$6,600 (9TDNLXO) and WhataHotel NT$8,800 (TDNLXO).
    //   Using Commissionable (IHG One Night on Us) as the promotional rate.
    // AGENT NOTE: No room images on booking page for this room type — placeholder used.
    // ──────────────────────────────────────────────────────────────
    {
      badgeText: "🏨 Option 3",
      name: "2 Twin Classic<br/>City View",
      subtitle:
        "Twin beds &middot; City views &middot; 45 sqm<br/>IHG One Night on Us + WhataHotel! Perks<br/><strong style='color: var(--burgundy)'>Twin Comfort — From NT$6,600/night</strong>",
      priceLabel: "IHG One Night on Us + Perks",
      priceRate: "NT$6,600",
      priceStrike: "Standard: NT$8,800/night",
      priceTotal: "4-Night Total: NT$30,492",
      images: [
        // AGENT NOTE: No room images on booking page — placeholder used
        {
          src: "https://www.whatahotel.com/img/paceholder.jpg",
          alt: "2 Twin Classic City View — Regent Taipei",
        },
        {
          src: "https://www.whatahotel.com/img/paceholder.jpg",
          alt: "2 Twin Classic City View — Regent Taipei",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "Two twin beds with luxury bedding",
            "45 sqm — City views",
            "Classic room category with city outlook",
            "Complimentary in-room Wi-Fi on unlimited devices",
            "IHG One Rewards points earned on stay",
            "Free cancellation before May 29, 2026",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "IHG One Night on Us — Pay 3 Nights, Stay 4 (COMBINABLE)",
            "Room Category Upgrade (subject to availability at check-in)",
            "Breakfast for Two Daily",
            "$100 Hotel Credit (food & beverage)",
            "Free WiFi — Unlimited Devices",
            "Late Check-Out at 2pm (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "4 Nights &nbsp;|&nbsp; <span>IHG One Night on Us + WhataHotel! Perks</span>",
        leftSub:
          "Standard: NT$8,800/night (4-night total: NT$40,656) &mdash; IHG One Night on Us + Perks: NT$6,600/night (4-night total: NT$30,492) &mdash; you save <strong>NT$10,164</strong>",
        rightLabel: "4-Night Total (incl. taxes)",
        rightValue: "NT$30,492",
      },
      comparison: [
        {
          label: "Nightly Rate",
          standard: "NT$8,800/night",
          whatahotel: "NT$6,600/night",
        },
        {
          label: "4-Night Total",
          standard: "NT$40,656",
          whatahotel: "NT$30,492",
        },
        {
          label: "You Save",
          standard: "",
          whatahotel: "NT$10,164",
          highlight: true,
        },
      ],
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=9TDNLXO&rate=LXO&hotel=2284&checkin=2026-06-01&checkout=2026-06-05&guests=2&children=0&rooms=1",
      bookLabel: "Book 2 Twin City View",
    },
  ],

  contact: sharedContact,
};
