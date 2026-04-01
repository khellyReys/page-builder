import type { Promo } from "../types";

// AGENT NOTE: Multi-hotel SoCal getaway — 2 properties, 3 date-range blocks.
// Hotel 1: Ojai Valley Inn & Spa (1485) — Mar 31–Apr 1, 2026 (1 night), 4 rooms
// Hotel 2: Rosewood Miramar Beach (3483) — Mar 31–Apr 1, 2026 (1 night), 3 rooms
// Hotel 3: Rosewood Miramar Beach (3483) — May 8–9, 2026 (1 night), 4 rooms
// Currency: USD.

export const promo17: Promo = {
  id: "promo-17",
  createdAt: "2026-03-27T12:00:00Z",
  mastheadEyebrow: "Travel Proposal",
  title: "Rita & Friends | SoCal getaway ☀️",
  client: "Rita & Friends",
  dates: "March 31–April 1 vs. May 8–9, 2026 | 1 Night | 2 Hotels",
  portalTotalLabel: "Starting From",
  portalTotalValue: "$966.37",

  hotels: [
    // ═══════════════════════════════════════════════════════════
    // HOTEL 1 — OJAI VALLEY INN & SPA (Mar 31–Apr 1, 2026)
    // ═══════════════════════════════════════════════════════════
    {
      hero: {
        imageUrl:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/37/7f/b3/ojai-valley-inn.jpg?w=900&h=500&s=1",
        alt: "Ojai Valley Inn & Spa — Ojai, California",
        hotel: "Ojai Valley Inn & Spa",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Ojai, California &nbsp;|&nbsp; Scenic Mountain Resort",
      },
      offer: {
        heading: "WhataHotel! Exclusive",
        description:
          "Book through WhataHotel! and enjoy exclusive complimentary perks at <strong>Ojai Valley Inn & Spa</strong> — including a room upgrade, daily breakfast for two, $100 resort credit, and more.",
        pills: [
          "✔ Room Category Upgrade (subject to availability)",
          "✔ Full Breakfast for Two Daily (up to $35/person)",
          "✔ $100 Resort Credit (F&B or Spa)",
          "✔ Complimentary WiFi",
          "✔ Late Check-Out (subject to availability)",
        ],
      },
      rooms: [
        // ─── Room 1: Ojai King Bed ───
        {
          badgeText: "🏨 Option 1",
          name: "Ojai King Bed",
          subtitle:
            "425 SF · 1 King Bed · Balcony or Patio<br/><strong style='color: var(--burgundy)'>From $779/night</strong>",
          priceRate: "$779",
          priceStrike: "",
          priceTotal: "1-Night Total: $779",
          stayTotalExclAmount: "$779",
          stayTotalExclSub: "1 Night · excl. taxes & fees",
          grandTotalInclTaxes: "$966.37",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Mar 31 → Apr 1",
          nightsLabel: "1",
          bookingSummary: {
            checkInOut: "Mar 31 → Apr 1",
            nights: "1",
            adr: "$779",
            total: "$966.37",
          },
          images: [
            {
              src: "https://symphony.cdn.tambourine.com/ojai-valley-inn-redesign/media/ojai-king-resize-66fb42d3672ef.png",
              alt: "Ojai King Bed — Ojai Valley Inn",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "425 sq ft with balcony or patio",
                "1 King bed with FRETTE bedding",
                "Separate shower and tub",
                "Flat-screen TV with Blu-ray/DVD",
                "Complimentary internet",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Full breakfast for two daily (up to $35/person)",
                "$100 resort credit (F&B or Spa)",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "1 Night &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: $779/night &times; 1 = <strong>$779</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$966.37</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "$966.37",
          },
          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=DSK2SH&rate=2SH&hotel=1485&checkin=2026-03-31&checkout=2026-04-01&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Ojai King Bed",
        },

        // ─── Room 2: Ojai 2 Queens ───
        {
          badgeText: "🏨 Option 2",
          name: "Ojai 2 Queen Beds",
          subtitle:
            "425 SF · 2 Queen Beds · Balcony or Patio<br/><strong style='color: var(--burgundy)'>From $829/night</strong>",
          priceRate: "$829",
          priceStrike: "",
          priceTotal: "1-Night Total: $829",
          stayTotalExclAmount: "$829",
          stayTotalExclSub: "1 Night · excl. taxes & fees",
          grandTotalInclTaxes: "$1,023.97",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Mar 31 → Apr 1",
          nightsLabel: "1",
          bookingSummary: {
            checkInOut: "Mar 31 → Apr 1",
            nights: "1",
            adr: "$829",
            total: "$1,023.97",
          },
          images: [
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/E02E1EB3F750447EB184180B4CA9F8C4/E02E1EB3F750447EB184180B4CA9F8C4.JPEG",
              alt: "Ojai 2 Queen Beds — Ojai Valley Inn",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "425 sq ft with balcony or patio",
                "2 Queen beds with FRETTE bedding",
                "Plush cotton robes",
                "Multimedia station",
                "Complimentary internet",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Full breakfast for two daily (up to $35/person)",
                "$100 resort credit (F&B or Spa)",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "1 Night &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: $829/night &times; 1 = <strong>$829</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$1,023.97</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "$1,023.97",
          },
          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=A2D2SH&rate=2SH&hotel=1485&checkin=2026-03-31&checkout=2026-04-01&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Ojai 2 Queens",
        },

        // ─── Room 3: Vista Luxury King ───
        {
          badgeText: "🏨 Option 3",
          name: "Vista Luxury King Bed",
          subtitle:
            "445 SF · 1 King Bed · Balcony or Patio<br/><strong style='color: var(--burgundy)'>From $829/night</strong>",
          priceRate: "$829",
          priceStrike: "",
          priceTotal: "1-Night Total: $829",
          stayTotalExclAmount: "$829",
          stayTotalExclSub: "1 Night · excl. taxes & fees",
          grandTotalInclTaxes: "$1,023.97",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Mar 31 → Apr 1",
          nightsLabel: "1",
          bookingSummary: {
            checkInOut: "Mar 31 → Apr 1",
            nights: "1",
            adr: "$829",
            total: "$1,023.97",
          },
          images: [
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/E02E1EB3F750447EB184180B4CA9F8C4/E02E1EB3F750447EB184180B4CA9F8C4.JPEG",
              alt: "Vista Luxury King — Ojai Valley Inn",
            },
            {
              src: "https://be.synxis.com/shs-ngbe-image-resizer/images/hotel/27101/images/room/ojai_luxury_shower.jpg",
              alt: "Vista Luxury King Bathroom — Ojai Valley Inn",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "445 sq ft with balcony or patio",
                "1 King bed with FRETTE bedding",
                "Plush cotton robes",
                "Complimentary internet",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Full breakfast for two daily (up to $35/person)",
                "$100 resort credit (F&B or Spa)",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "1 Night &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: $829/night &times; 1 = <strong>$829</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$1,023.97</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "$1,023.97",
          },
          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=ASK2SH&rate=2SH&hotel=1485&checkin=2026-03-31&checkout=2026-04-01&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Vista Luxury King",
        },

        // ─── Room 4: Vista 2 Queen Beds ───
        {
          badgeText: "🏨 Option 4",
          name: "Vista 2 Queen Beds",
          subtitle:
            "445 SF · 2 Queen Beds · Balcony or Patio<br/><strong style='color: var(--burgundy)'>From $919/night</strong>",
          priceRate: "$919",
          priceStrike: "",
          priceTotal: "1-Night Total: $919",
          stayTotalExclAmount: "$919",
          stayTotalExclSub: "1 Night · excl. taxes & fees",
          grandTotalInclTaxes: "$1,127.64",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Mar 31 → Apr 1",
          nightsLabel: "1",
          bookingSummary: {
            checkInOut: "Mar 31 → Apr 1",
            nights: "1",
            adr: "$919",
            total: "$1,127.64",
          },
          images: [
            {
              src: "https://symphony.cdn.tambourine.com/ojai-valley-inn-redesign/media/ovi_411_bedroom_9714_website-6854264f2a71c.png",
              alt: "Vista 2 Queen Beds — Ojai Valley Inn",
            },
            {
              src: "https://be.synxis.com/shs-ngbe-image-resizer/images/hotel/27101/images/room/ojai_luxury_bathroom_1.jpg",
              alt: "Vista 2 Queens Bathroom — Ojai Valley Inn",
            },
            {
              src: "https://symphony.cdn.tambourine.com/ojai-valley-inn/media/luxury_bath_3-61e0686a6a9cb.jpeg",
              alt: "Vista 2 Queens Bath — Ojai Valley Inn",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "445 sq ft with balcony or patio",
                "2 Queen beds with FRETTE bedding",
                "Plush cotton robes",
                "Complimentary internet",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Full breakfast for two daily (up to $35/person)",
                "$100 resort credit (F&B or Spa)",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "1 Night &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: $919/night &times; 1 = <strong>$919</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$1,127.64</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "$1,127.64",
          },
          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=A222SH&rate=2SH&hotel=1485&checkin=2026-03-31&checkout=2026-04-01&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Vista 2 Queen Beds",
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════
    // HOTEL 2 — ROSEWOOD MIRAMAR BEACH (Mar 31–Apr 1, 2026)
    // ═══════════════════════════════════════════════════════════
    {
      suppressBookingSummary: true,
      hero: {
        imageUrl:
          "https://reservations.rosewoodhotels.com/shs-ngbe-image-resizer/images/hotel/80065/images/room/lka_lanai_king_1400x933.jpg",
        alt: "Rosewood Miramar Beach — Santa Barbara, California",
        hotel: "Rosewood Miramar Beach",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Santa Barbara, California &nbsp;|&nbsp; Mar 31–Apr 1, 2026",
      },
      offer: {
        heading: "WhataHotel! Exclusive",
        description:
          "Book through WhataHotel! and enjoy exclusive complimentary perks at <strong>Rosewood Miramar Beach</strong> — including a room upgrade, daily breakfast credits, $125 resort credit, and more.",
        pills: [
          "✔ Room Category Upgrade (subject to availability)",
          "✔ Daily Breakfast Credit x 2 (up to $90/day each)",
          "✔ $125 Resort Credit per Stay",
          "✔ Complimentary WiFi",
          "✔ Late Check-Out (subject to availability)",
        ],
      },
      rooms: [
        // ─── Room 1: Lanai King (Mar 31) ───
        {
          badgeText: "🏨 Option 1",
          name: "Lanai King",
          subtitle:
            "530–570 SF · 1 King Bed<br/><strong style='color: var(--burgundy)'>From $2,295/night</strong>",
          priceRate: "$2,295",
          priceStrike: "",
          priceTotal: "1-Night Total: $2,295",
          stayTotalExclAmount: "$2,295",
          stayTotalExclSub: "1 Night · excl. taxes & fees",
          grandTotalInclTaxes: "$2,753.39",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Mar 31 → Apr 1",
          nightsLabel: "1",
          bookingSummary: {
            checkInOut: "Mar 31 → Apr 1",
            nights: "1",
            adr: "$2,295",
            total: "$2,753.39",
          },
          images: [
            {
              src: "https://reservations.rosewoodhotels.com/shs-ngbe-image-resizer/images/hotel/80065/images/room/lka_lanai_king_1400x933.jpg",
              alt: "Lanai King — Rosewood Miramar Beach",
            },
            {
              src: "https://reservations.rosewoodhotels.com/shs-ngbe-image-resizer/images/hotel/80065/images/room/rosewoodmiramarbeach_bathroom20190715190235071.jpg",
              alt: "Lanai King Bathroom — Rosewood Miramar Beach",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "530–570 sq ft",
                "1 King bed",
                "Elegant coastal décor",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Daily breakfast credit x 2 (up to $90/day each)",
                "$125 resort credit per stay",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "1 Night &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: $2,295/night &times; 1 = <strong>$2,295</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$2,753.39</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "$2,753.39",
          },
          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=G1KEE1&rate=1RW&hotel=3483&checkin=2026-03-31&checkout=2026-04-01&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Lanai King (Mar 31)",
        },

        // ─── Room 2: Lanai Two Queens (Mar 31) ───
        {
          badgeText: "🏨 Option 2",
          name: "Lanai Two Queens",
          subtitle:
            "530 SF · 2 Queen Beds<br/><strong style='color: var(--burgundy)'>From $2,370/night</strong>",
          priceRate: "$2,370",
          priceStrike: "",
          priceTotal: "1-Night Total: $2,370",
          stayTotalExclAmount: "$2,370",
          stayTotalExclSub: "1 Night · excl. taxes & fees",
          grandTotalInclTaxes: "$2,840.57",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Mar 31 → Apr 1",
          nightsLabel: "1",
          bookingSummary: {
            checkInOut: "Mar 31 → Apr 1",
            nights: "1",
            adr: "$2,370",
            total: "$2,840.57",
          },
          images: [
            {
              src: "https://images.rosewoodhotels.com/is/image/rwhg/hi-sbm-107128438-miramarbeachsunset:WIDE-LARGE-16-9",
              alt: "Lanai Two Queens — Rosewood Miramar Beach",
            },
            {
              src: "https://reservations.rosewoodhotels.com/shs-ngbe-image-resizer/images/hotel/80065/images/room/rosewoodmiramarbeach_dressingroom20190715190223396.jpg",
              alt: "Lanai Two Queens Dressing Room — Rosewood Miramar Beach",
            },
            {
              src: "https://reservations.rosewoodhotels.com/shs-ngbe-image-resizer/images/hotel/80065/images/room/rosewoodmiramarbeach_bathroomtub20190715190248212.jpg",
              alt: "Lanai Two Queens Bathroom — Rosewood Miramar Beach",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "530 sq ft",
                "2 Queen beds",
                "Elegant coastal décor",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Daily breakfast credit x 2 (up to $90/day each)",
                "$125 resort credit per stay",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "1 Night &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: $2,370/night &times; 1 = <strong>$2,370</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$2,840.57</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "$2,840.57",
          },
          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=G2QEE1&rate=1RW&hotel=3483&checkin=2026-03-31&checkout=2026-04-01&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Lanai Two Queens (Mar 31)",
        },

        // ─── Room 3: Garden Bungalow King (Mar 31) ───
        {
          badgeText: "🏨 Option 3",
          name: "Garden Bungalow King",
          subtitle:
            "500 SF · 1 King Bed · Single-Story Bungalow<br/><strong style='color: var(--burgundy)'>From $2,495/night</strong>",
          priceRate: "$2,495",
          priceStrike: "",
          priceTotal: "1-Night Total: $2,495",
          stayTotalExclAmount: "$2,495",
          stayTotalExclSub: "1 Night · excl. taxes & fees",
          grandTotalInclTaxes: "$2,985.87",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Mar 31 → Apr 1",
          nightsLabel: "1",
          bookingSummary: {
            checkInOut: "Mar 31 → Apr 1",
            nights: "1",
            adr: "$2,495",
            total: "$2,985.87",
          },
          images: [
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/157786552C8540B9A18A87BAC07B37C8/157786552C8540B9A18A87BAC07B37C8.JPEG",
              alt: "Garden Bungalow King — Rosewood Miramar Beach",
            },
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/A8518D9BE0A24DC7A722C8704689DF5A/A8518D9BE0A24DC7A722C8704689DF5A.JPEG",
              alt: "Garden Bungalow King Interior — Rosewood Miramar Beach",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "500 sq ft single-story bungalow",
                "1 King bed",
                "Furnished terrace",
                "Elegant coastal décor",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Daily breakfast credit x 2 (up to $90/day each)",
                "$125 resort credit per stay",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "1 Night &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: $2,495/night &times; 1 = <strong>$2,495</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$2,985.87</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "$2,985.87",
          },
          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=F1KEE1&rate=1RW&hotel=3483&checkin=2026-03-31&checkout=2026-04-01&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Garden Bungalow King (Mar 31)",
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════
    // HOTEL 3 — ROSEWOOD MIRAMAR BEACH (May 8–9, 2026)
    // ═══════════════════════════════════════════════════════════
    {
      hero: {
        imageUrl:
          "https://images.rosewoodhotels.com/is/image/rwhg/hi-sbm-107128438-miramarbeachsunset:WIDE-LARGE-16-9",
        alt: "Rosewood Miramar Beach — Santa Barbara, California",
        hotel: "Rosewood Miramar Beach",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Santa Barbara, California &nbsp;|&nbsp; May 8–9, 2026",
      },
      offer: {
        heading: "WhataHotel! Exclusive",
        description:
          "Book through WhataHotel! and enjoy exclusive complimentary perks at <strong>Rosewood Miramar Beach</strong> — including a room upgrade, daily breakfast credits, $125 resort credit, and more.",
        pills: [
          "✔ Room Category Upgrade (subject to availability)",
          "✔ Daily Breakfast Credit x 2 (up to $90/day each)",
          "✔ $125 Resort Credit per Stay",
          "✔ Complimentary WiFi",
          "✔ Late Check-Out (subject to availability)",
        ],
      },
      rooms: [
        // ─── Room 1: Lanai King (May 8) ───
        {
          badgeText: "🏨 Option 1",
          name: "Lanai King",
          subtitle:
            "530–570 SF · 1 King Bed<br/><strong style='color: var(--burgundy)'>From $1,795/night</strong>",
          priceRate: "$1,795",
          priceStrike: "",
          priceTotal: "1-Night Total: $1,795",
          stayTotalExclAmount: "$1,795",
          stayTotalExclSub: "1 Night · excl. taxes & fees",
          grandTotalInclTaxes: "$2,172.19",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "May 8 → May 9",
          nightsLabel: "1",
          bookingSummary: {
            checkInOut: "May 8 → May 9",
            nights: "1",
            adr: "$1,795",
            total: "$2,172.19",
          },
          images: [
            {
              src: "https://reservations.rosewoodhotels.com/shs-ngbe-image-resizer/images/hotel/80065/images/room/lka_lanai_king_1400x933.jpg",
              alt: "Lanai King — Rosewood Miramar Beach",
            },
            {
              src: "https://reservations.rosewoodhotels.com/shs-ngbe-image-resizer/images/hotel/80065/images/room/rosewoodmiramarbeach_bathroom20190715190235071.jpg",
              alt: "Lanai King Bathroom — Rosewood Miramar Beach",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "530–570 sq ft",
                "1 King bed",
                "Elegant coastal décor",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Daily breakfast credit x 2 (up to $90/day each)",
                "$125 resort credit per stay",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "1 Night &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: $1,795/night &times; 1 = <strong>$1,795</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$2,172.19</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "$2,172.19",
          },
          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=G1KEE1&rate=1RW&hotel=3483&checkin=2026-05-08&checkout=2026-05-09&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Lanai King (May 8)",
        },

        // ─── Room 2: Lanai Two Queens (May 8) ───
        {
          badgeText: "🏨 Option 2",
          name: "Lanai Two Queens",
          subtitle:
            "530 SF · 2 Queen Beds<br/><strong style='color: var(--burgundy)'>From $1,920/night</strong>",
          priceRate: "$1,920",
          priceStrike: "",
          priceTotal: "1-Night Total: $1,920",
          stayTotalExclAmount: "$1,920",
          stayTotalExclSub: "1 Night · excl. taxes & fees",
          grandTotalInclTaxes: "$2,317.49",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "May 8 → May 9",
          nightsLabel: "1",
          bookingSummary: {
            checkInOut: "May 8 → May 9",
            nights: "1",
            adr: "$1,920",
            total: "$2,317.49",
          },
          images: [
            {
              src: "https://images.rosewoodhotels.com/is/image/rwhg/hi-sbm-107128438-miramarbeachsunset:WIDE-LARGE-16-9",
              alt: "Lanai Two Queens — Rosewood Miramar Beach",
            },
            {
              src: "https://reservations.rosewoodhotels.com/shs-ngbe-image-resizer/images/hotel/80065/images/room/rosewoodmiramarbeach_dressingroom20190715190223396.jpg",
              alt: "Lanai Two Queens Dressing Room — Rosewood Miramar Beach",
            },
            {
              src: "https://reservations.rosewoodhotels.com/shs-ngbe-image-resizer/images/hotel/80065/images/room/rosewoodmiramarbeach_bathroomtub20190715190248212.jpg",
              alt: "Lanai Two Queens Bathroom — Rosewood Miramar Beach",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "530 sq ft",
                "2 Queen beds",
                "Elegant coastal décor",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Daily breakfast credit x 2 (up to $90/day each)",
                "$125 resort credit per stay",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "1 Night &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: $1,920/night &times; 1 = <strong>$1,920</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$2,317.49</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "$2,317.49",
          },
          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=G2QEE1&rate=1RW&hotel=3483&checkin=2026-05-08&checkout=2026-05-09&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Lanai Two Queens (May 8)",
        },

        // ─── Room 3: Garden Bungalow King (May 8) ───
        {
          badgeText: "🏨 Option 3",
          name: "Garden Bungalow King",
          subtitle:
            "500 SF · 1 King Bed · Single-Story Bungalow<br/><strong style='color: var(--burgundy)'>From $2,440/night</strong>",
          priceRate: "$2,440",
          priceStrike: "",
          priceTotal: "1-Night Total: $2,440",
          stayTotalExclAmount: "$2,440",
          stayTotalExclSub: "1 Night · excl. taxes & fees",
          grandTotalInclTaxes: "$2,921.94",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "May 8 → May 9",
          nightsLabel: "1",
          bookingSummary: {
            checkInOut: "May 8 → May 9",
            nights: "1",
            adr: "$2,440",
            total: "$2,921.94",
          },
          images: [
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/157786552C8540B9A18A87BAC07B37C8/157786552C8540B9A18A87BAC07B37C8.JPEG",
              alt: "Garden Bungalow King — Rosewood Miramar Beach",
            },
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/A8518D9BE0A24DC7A722C8704689DF5A/A8518D9BE0A24DC7A722C8704689DF5A.JPEG",
              alt: "Garden Bungalow King Interior — Rosewood Miramar Beach",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "500 sq ft single-story bungalow",
                "1 King bed",
                "Furnished terrace",
                "Elegant coastal décor",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Daily breakfast credit x 2 (up to $90/day each)",
                "$125 resort credit per stay",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "1 Night &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: $2,440/night &times; 1 = <strong>$2,440</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$2,921.94</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "$2,921.94",
          },
          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=F1KEE1&rate=1RW&hotel=3483&checkin=2026-05-08&checkout=2026-05-09&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Garden Bungalow King (May 8)",
        },

        // ─── Room 4: Montecito Bungalow Queen (May 8) ───
        {
          badgeText: "🏨 Option 4",
          name: "Montecito Bungalow Queen",
          subtitle:
            "520–685 SF · 2 Queen Beds<br/><strong style='color: var(--burgundy)'>From $2,640/night</strong>",
          priceRate: "$2,640",
          priceStrike: "",
          priceTotal: "1-Night Total: $2,640",
          stayTotalExclAmount: "$2,640",
          stayTotalExclSub: "1 Night · excl. taxes & fees",
          grandTotalInclTaxes: "$3,154.42",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "May 8 → May 9",
          nightsLabel: "1",
          bookingSummary: {
            checkInOut: "May 8 → May 9",
            nights: "1",
            adr: "$2,640",
            total: "$3,154.42",
          },
          images: [
            {
              src: "https://media-cdn.tripadvisor.com/media/photo-m/1280/16/a2/80/e0/garden-bungalow-suite.jpg",
              alt: "Montecito Bungalow Queen — Rosewood Miramar Beach",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "520–685 sq ft bungalow",
                "2 Queen beds",
                "Elegant coastal décor",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Daily breakfast credit x 2 (up to $90/day each)",
                "$125 resort credit per stay",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "1 Night &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: $2,640/night &times; 1 = <strong>$2,640</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$3,154.42</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "$3,154.42",
          },
          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=E2DEE1&rate=1RW&hotel=3483&checkin=2026-05-08&checkout=2026-05-09&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Montecito Bungalow Queen (May 8)",
        },
      ],
    },
  ],

};
