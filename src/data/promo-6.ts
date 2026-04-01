import type { Promo } from "../types";

// AGENT NOTE: Single-hotel proposal — Mandarin Oriental, Lago di Como (hotelID=3705).
// Check-in: Aug 17, 2026 — Check-out: Aug 20, 2026 (3 nights), rate=3MF.
// Currency: EUR. 3 room options (Junior Suite, Duplex Suite, Premier Suite).
// Two rate variants per room — using the lower "deposit required" rate.
// 3-night totals from rates page include city/tourist tax (€30 over ADR × 3).

export const promo6: Promo = {
  id: "promo-6",
  createdAt: "2026-03-23T22:00:00Z",
  mastheadEyebrow: "Travel Proposal",
  title: "Greg's Going to Lake Como",
  client: "Greg",
  dates: "August 17–20, 2026 | 3 Nights | 3 Suite Options",
  thumbnailUrl:
    "https://whatahotel.com/content/hotels/3705/dmo-como-head.jpg",
  portalTotalLabel: "Starting From",
  portalTotalValue: "€8,865",

  hero: {
    imageUrl:
      "https://whatahotel.com/content/hotels/3705/dmo-como-head.jpg",
    alt: "Mandarin Oriental, Lago di Como — Lake Como, Italy",
    hotel: "Mandarin Oriental, Lago di Como",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Blevio, Lake Como, Italy &nbsp;|&nbsp; Luxury Lakefront Resort",
  },

  offer: {
    heading: "WhataHotel! Exclusive",
    description:
      "Book through WhataHotel! and enjoy exclusive complimentary perks at <strong>Mandarin Oriental, Lago di Como</strong> — including a room upgrade, daily breakfast for 2, €90 food or spa credit, and more.",
    pills: [
      "✔ Room Category Upgrade (subject to availability)",
      "✔ Complimentary Breakfast for 2 Daily",
      "✔ €90 Food or Spa Credit",
      "✔ Complimentary WiFi",
      "✔ Late Check-Out (subject to availability)",
    ],
  },

  rooms: [
    // ─── Room Option 1: Junior Suite ───
    {
      badgeText: "🏨 Option 1",
      name: "Junior Suite",
      subtitle:
        "721–968 sq ft · King Bed · Lake Como Views<br/><strong style='color: var(--burgundy)'>From €2,945/night</strong>",
      priceLabel: "Per night",
      priceRate: "€2,945",
      priceStrike: "",
      priceTotal: "3-Night Total: €8,835",
      stayTotalExclAmount: "€8,835",
      stayTotalExclSub: "3 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "€8,865",
      grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
      stayCheckInOut: "Aug 17 → Aug 20",
      nightsLabel: "3",
      bookingSummary: {
        checkInOut: "Aug 17 → Aug 20",
        nights: "3",
        adr: "€2,945",
        total: "€8,865",
      },
      images: [
        {
          src: "https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/7/0/131/558/725/MOCMO_-_Junior_Suite_(_bedroom)_O/Mandarin-Oriental-Lago-di-Como-Suite.jpg?tr=w-780%2Ch-437%2Cfo-auto",
          alt: "Junior Suite Bedroom — Mandarin Oriental, Lago di Como",
        },
        {
          src: "https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/7/0/131/558/717/MOCMO_-_Junior_Suite_(living_room)_O/Mandarin-Oriental-Lago-di-Como-Suite.jpg?tr=w-780%2Ch-437%2Cfo-auto",
          alt: "Junior Suite Living Room — Mandarin Oriental, Lago di Como",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "721–968 sq ft of luxury living space",
            "King bed with premium linens",
            "Lakefront views of Lake Como",
            "Spacious marble bathroom",
            "Air conditioning and complimentary minibar",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Complimentary breakfast for 2 daily",
            "€90 food or spa credit",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "WhataHotel! rate: €2,945/night &times; 3 = <strong>€8,835</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>€8,865</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "€8,865",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=T1K331&rate=3MF&hotel=3705&checkin=2026-08-17&checkout=2026-08-20&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Junior Suite",
    },

    // ─── Room Option 2: Duplex Suite ───
    {
      badgeText: "🏨 Option 2",
      name: "Duplex Suite",
      subtitle:
        "710–1,151 sq ft · Duplex Layout · Lake Como Views<br/><strong style='color: var(--burgundy)'>From €3,230/night</strong>",
      priceLabel: "Per night",
      priceRate: "€3,230",
      priceStrike: "",
      priceTotal: "3-Night Total: €9,690",
      stayTotalExclAmount: "€9,690",
      stayTotalExclSub: "3 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "€9,720",
      grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
      stayCheckInOut: "Aug 17 → Aug 20",
      nightsLabel: "3",
      bookingSummary: {
        checkInOut: "Aug 17 → Aug 20",
        nights: "3",
        adr: "€3,230",
        total: "€9,720",
      },
      images: [
        {
          src: "https://images.trvl-media.com/lodging/4000000/3690000/3684400/3684389/12dd7809.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          alt: "Duplex Suite Bedroom — Mandarin Oriental, Lago di Como",
        },
        {
          src: "https://images.trvl-media.com/lodging/4000000/3690000/3684400/3684389/3dd81564.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          alt: "Duplex Suite Living Area — Mandarin Oriental, Lago di Como",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "710–1,151 sq ft with duplex layout over two levels",
            "King bed with premium linens",
            "Lakefront views of Lake Como",
            "Separate living area on lower level",
            "Spacious marble bathroom",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Complimentary breakfast for 2 daily",
            "€90 food or spa credit",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "WhataHotel! rate: €3,230/night &times; 3 = <strong>€9,690</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>€9,720</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "€9,720",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=S11331&rate=3MF&hotel=3705&checkin=2026-08-17&checkout=2026-08-20&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Duplex Suite",
    },

    // ─── Room Option 3: Premier Suite ───
    {
      badgeText: "🏨 Option 3",
      name: "Premier Suite",
      subtitle:
        "1,076–1,862 sq ft · King Bed · Premium Lake Views<br/><strong style='color: var(--burgundy)'>From €3,895/night</strong>",
      priceLabel: "Per night",
      priceRate: "€3,895",
      priceStrike: "",
      priceTotal: "3-Night Total: €11,685",
      stayTotalExclAmount: "€11,685",
      stayTotalExclSub: "3 Nights · excl. taxes & fees",
      grandTotalInclTaxes: "€11,715",
      grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
      stayCheckInOut: "Aug 17 → Aug 20",
      nightsLabel: "3",
      bookingSummary: {
        checkInOut: "Aug 17 → Aug 20",
        nights: "3",
        adr: "€3,895",
        total: "€11,715",
      },
      images: [
        {
          src: "https://images.trvl-media.com/lodging/4000000/3690000/3684400/3684389/c2bf908c.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          alt: "Premier Suite Bedroom — Mandarin Oriental, Lago di Como",
        },
        {
          src: "https://images.trvl-media.com/lodging/4000000/3690000/3684400/3684389/c9388910.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          alt: "Premier Suite Bathroom — Mandarin Oriental, Lago di Como",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "1,076–1,862 sq ft of premium living space",
            "King bed with premium linens",
            "Expansive lake views of Lake Como",
            "Separate living and dining areas",
            "Luxurious marble bathroom with soaking tub",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Complimentary breakfast for 2 daily",
            "€90 food or spa credit",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "WhataHotel! rate: €3,895/night &times; 3 = <strong>€11,685</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>€11,715</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "€11,715",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=SAK331&rate=3MF&hotel=3705&checkin=2026-08-17&checkout=2026-08-20&guests=2&children=0&rooms=1",
      bookLabel: "Book Now — Premier Suite",
    },
  ],

  pricingFootnote:
    "All nightly rates shown are per room, per night and exclude applicable taxes, resort fees, and service charges. Grand totals include taxes &amp; fees. Rates subject to availability.",

};
