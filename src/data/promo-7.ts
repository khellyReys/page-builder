import type { Promo } from "../types";

// AGENT NOTE: Single-hotel proposal — Burj Al Arab, Jumeirah (hotelID=1164).
// Check-in: Aug 25, 2026 — Check-out: Aug 28, 2026 (3 nights), rate=JPL (Jumeirah Escapes BB).
// Currency: AED. 3 room options (Panoramic One Bedroom Suite, Sky Marina Suite, Panoramic Suite).
// Skipped 1st option per category (Early Advantage BB — advance purchase with cancellation penalties).
// Using 2nd option (Jumeirah Escapes BB — free cancellation until Aug 22, pay later).
// 3-night totals from rates page include taxes & fees.

export const promo7: Promo = {
  id: "promo-7",
  createdAt: "2026-03-23T23:00:00Z",
  mastheadEyebrow: "Travel Proposal",
  title: "Diana in Dubai",
  client: "Diana",
  dates: "August 25–28, 2026 | 3 Nights | 3 Suite Options",
  thumbnailUrl:
    "https://cdn.jumeirah.com/api/public/content/44737e54389e42f699cee6c99680c24e?v=d5822cab",
  portalTotalLabel: "Starting From",
  portalTotalValue: "AED 12,495",

  hero: {
    imageUrl:
      "https://cdn.jumeirah.com/api/public/content/44737e54389e42f699cee6c99680c24e?v=d5822cab",
    alt: "Burj Al Arab, Jumeirah — Dubai, United Arab Emirates",
    hotel: "Burj Al Arab, Jumeirah",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Dubai, United Arab Emirates &nbsp;|&nbsp; Iconic Luxury All-Suite Hotel",
  },

  offer: {
    heading: "WhataHotel! Exclusive",
    description:
      "Book through WhataHotel! and enjoy exclusive complimentary perks at <strong>Burj Al Arab, Jumeirah</strong> — including a room upgrade, daily breakfast for 2, $100 daily food &amp; spa credit, and more.",
    pills: [
      "✔ Room Category Upgrade (subject to availability)",
      "✔ Complimentary Buffet Breakfast for 2 Daily",
      "✔ $100 Daily Credit Toward F&B and Spa",
      "✔ Complimentary WiFi",
      "✔ Late Check-Out (subject to availability)",
    ],
  },

  rooms: [
    // ─── Room Option 1: Panoramic One Bedroom Suite ───
    {
      badgeText: "🏨 Option 1",
      name: "Panoramic One Bedroom Suite",
      subtitle:
        "170 sqm · Duplex · Sea View Jacuzzi<br/><strong style='color: var(--burgundy)'>From AED 3,400/night</strong>",
      priceLabel: "Per night",
      priceRate: "AED 3,400",
      priceStrike: "",
      priceTotal: "3-Night Total: AED 10,200",
      stayTotalExclAmount: "AED 10,200",
      stayTotalExclSub: "3 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "AED 12,495",
      grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
      stayCheckInOut: "Aug 25 → Aug 28",
      nightsLabel: "3",
      bookingSummary: {
        checkInOut: "Aug 25 → Aug 28",
        nights: "3",
        adr: "AED 3,400",
        total: "AED 12,495",
      },
      images: [
        {
          src: "https://d2573qu6qrjt8c.cloudfront.net/23DFF956626846FC9A446956F3AE8870/23DFF956626846FC9A446956F3AE8870.jpg",
          alt: "Panoramic One Bedroom Suite — Burj Al Arab, Jumeirah",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "170 sqm duplex suite over two levels",
            "Sea view jacuzzi on upper level",
            "King bed with premium linens",
            "Arabian Gulf panoramic views",
            "Full butler service",
          ],
        },
        {
          title: "Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Complimentary buffet breakfast for 2 daily",
            "$100 daily credit toward F&B and spa",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "WhataHotel! rate: AED 3,400/night &times; 3 = <strong>AED 10,200</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>AED 12,495</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "AED 12,495",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=S1KSN3&rate=JPL&hotel=1164&checkin=2026-08-25&checkout=2026-08-28&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Panoramic One Bedroom Suite",
    },

    // ─── Room Option 2: Sky Marina Suite ───
    {
      badgeText: "🏨 Option 2",
      name: "Sky Marina Suite",
      subtitle:
        "170 sqm · High Floor Duplex · Sea View Jacuzzi<br/><strong style='color: var(--burgundy)'>From AED 3,570/night</strong>",
      priceLabel: "Per night",
      priceRate: "AED 3,570",
      priceStrike: "",
      priceTotal: "3-Night Total: AED 10,710",
      stayTotalExclAmount: "AED 10,710",
      stayTotalExclSub: "3 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "AED 13,119.75",
      grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
      stayCheckInOut: "Aug 25 → Aug 28",
      nightsLabel: "3",
      bookingSummary: {
        checkInOut: "Aug 25 → Aug 28",
        nights: "3",
        adr: "AED 3,570",
        total: "AED 13,119.75",
      },
      images: [
        {
          src: "https://d2573qu6qrjt8c.cloudfront.net/5906974A6B4C47C4A8573EE4989504D4/5906974A6B4C47C4A8573EE4989504D4.jpg",
          alt: "Sky Marina Suite — Burj Al Arab, Jumeirah",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "170 sqm high-floor duplex suite",
            "Sea view jacuzzi on upper level",
            "King bed with premium linens",
            "Elevated Arabian Gulf and marina views",
            "Full butler service",
          ],
        },
        {
          title: "Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Complimentary buffet breakfast for 2 daily",
            "$100 daily credit toward F&B and spa",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "WhataHotel! rate: AED 3,570/night &times; 3 = <strong>AED 10,710</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>AED 13,119.75</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "AED 13,119.75",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=S1OSN3&rate=JPL&hotel=1164&checkin=2026-08-25&checkout=2026-08-28&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Sky Marina Suite",
    },

    // ─── Room Option 3: Panoramic Suite ───
    {
      badgeText: "🏨 Option 3",
      name: "Panoramic Suite",
      subtitle:
        "225 sqm · Duplex · King Bed · Jacuzzi · iMac<br/><strong style='color: var(--burgundy)'>From AED 4,646.67/night</strong>",
      priceLabel: "Per night",
      priceRate: "AED 4,646.67",
      priceStrike: "",
      priceTotal: "3-Night Total: AED 13,940.01",
      stayTotalExclAmount: "AED 13,940.01",
      stayTotalExclSub: "3 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "AED 17,076.51",
      grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
      stayCheckInOut: "Aug 25 → Aug 28",
      nightsLabel: "3",
      bookingSummary: {
        checkInOut: "Aug 25 → Aug 28",
        nights: "3",
        adr: "AED 4,646.67",
        total: "AED 17,076.51",
      },
      images: [
        {
          src: "https://d2573qu6qrjt8c.cloudfront.net/23DFF956626846FC9A446956F3AE8870/23DFF956626846FC9A446956F3AE8870.jpg",
          alt: "Panoramic Suite — Burj Al Arab, Jumeirah",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "225 sqm duplex suite over two levels",
            "King bed with premium linens",
            "Private jacuzzi with Arabian Gulf views",
            "In-suite iMac and entertainment system",
            "Full butler service",
          ],
        },
        {
          title: "Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Complimentary buffet breakfast for 2 daily",
            "$100 daily credit toward F&B and spa",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "WhataHotel! rate: AED 4,646.67/night &times; 3 = <strong>AED 13,940.01</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>AED 17,076.51</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "AED 17,076.51",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=P1KSN3&rate=JPL&hotel=1164&checkin=2026-08-25&checkout=2026-08-28&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Panoramic Suite",
    },
  ],

  pricingFootnote:
    "All nightly rates shown are per room, per night and exclude applicable taxes, resort fees, and service charges. Grand totals include taxes &amp; fees. Rates subject to availability. Free cancellation available until August 22, 2026.",

};
