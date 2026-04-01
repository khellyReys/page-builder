import type { Promo } from "../types";

// AGENT NOTE: Multi-hotel comparison proposal — Andaz Maui at Wailea vs Four Seasons Maui at Wailea.
// Check-in: Sep 27, 2026 — Check-out: Sep 30, 2026 (3 nights), 2 guests.
// Hotel 1: Andaz Maui at Wailea (hotelID=2706) — Villa options only, rate=1HZ.
//   Note: Sep 27-30 showed 0 availability; villa rates sourced from nearest available dates (Oct 1-4).
//   Booking URLs use Sep 27-30 per user request. 3 villa categories (lowest rate first).
// Hotel 2: Four Seasons Maui at Wailea (hotelID=1421) — Suite options only, rate=PP6.
//   3 suite categories (lowest rate first).
// Currency: USD. Totals from booking page are tax-inclusive.

export const promo8: Promo = {
  id: "promo-8",
  createdAt: "2026-03-24T12:00:00Z",
  mastheadEyebrow: "Travel Proposal",
  title: "Maui, Hawaii — Two Hotel Options",
  client: "",
  dates: "September 27–30, 2026 | 3 Nights | 2 Hotels",
  thumbnailUrl:
    "https://d2573qu6qrjt8c.cloudfront.net/10D23EB991604C53AC6D3ADDE19005AF/10D23EB991604C53AC6D3ADDE19005AF.JPEG",
  portalTotalLabel: "Starting From",
  portalTotalValue: "$6,523.22",

  hotels: [
    // ═══════════════════════════════════════════════════
    // Hotel 1: Andaz Maui at Wailea — Villas Only
    // ═══════════════════════════════════════════════════
    {
      hero: {
        imageUrl:
          "https://d2573qu6qrjt8c.cloudfront.net/424346266E1540D38B4FBE43D51AC97D/424346266E1540D38B4FBE43D51AC97D.JPEG",
        alt: "Andaz Maui at Wailea Resort — Maui, Hawaii",
        hotel: "Andaz Maui at Wailea Resort",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Wailea, Maui, Hawaii &nbsp;|&nbsp; Luxury Beachfront Resort",
      },
      offer: {
        heading: "WhataHotel! Exclusive",
        description:
          "Book through WhataHotel! and enjoy exclusive complimentary perks at <strong>Andaz Maui at Wailea Resort</strong> — including daily breakfast for 2, $100 resort credit, and more.",
        pills: [
          "✔ Complimentary Full Breakfast for Two Daily",
          "✔ $100 Resort Credit",
          "✔ Complimentary WiFi",
          "✔ Late Check-Out (subject to availability)",
        ],
      },
      rooms: [
        // ── Villa 1: 2 Bedroom Makai Ocean Front Villa ──
        {
          badgeText: "🏨 Hotel Option 1 — Villa 1",
          name: "2 Bedroom Makai Ocean Front Villa",
          subtitle:
            "King Bed + Doubles · Kitchen · Jacuzzi · BBQ · 3 Bathrooms<br/><strong style='color: var(--burgundy)'>From $4,561.33/night</strong>",
          priceLabel: "Per night",
          priceRate: "$4,561.33",
          priceStrike: "",
          priceTotal: "3-Night Total: $13,683.99",
          stayTotalExclAmount: "$13,683.99",
          stayTotalExclSub: "3 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "$16,422.62",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Sep 27 → Sep 30",
          nightsLabel: "3",
          bookingSummary: {
            checkInOut: "Sep 27 → Sep 30",
            nights: "3",
            adr: "$4,561.33",
            total: "$16,422.62",
          },
          images: [
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/424346266E1540D38B4FBE43D51AC97D/424346266E1540D38B4FBE43D51AC97D.JPEG",
              alt: "2 Bedroom Makai Ocean Front Villa — Andaz Maui at Wailea",
            },
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/213FA2E5C42B49F7B68DF707EB5DED51/213FA2E5C42B49F7B68DF707EB5DED51.JPEG",
              alt: "Villa Kitchen — Andaz Maui at Wailea",
            },
          ],
          features: [
            {
              title: "Villa Features",
              icon: "door-open",
              items: [
                "2-bedroom oceanfront villa",
                "King bed plus double beds",
                "Full kitchen with modern appliances",
                "Private Jacuzzi and BBQ grill",
                "3 full bathrooms",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "Complimentary full breakfast for 2 daily",
                "$100 resort credit",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: $4,561.33/night &times; 3 = <strong>$13,683.99</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$16,422.62</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "$16,422.62",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=G1KCFV&rate=1HZ&hotel=2706&checkin=2026-09-27&checkout=2026-09-30&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — 2 Bedroom Ocean Front Villa",
        },

        // ── Villa 2: 3 Bedroom Makai Ocean Front Villa ──
        {
          badgeText: "🏨 Hotel Option 1 — Villa 2",
          name: "3 Bedroom Makai Ocean Front Villa",
          subtitle:
            "King Beds + Doubles · Ocean View · Kitchen · Plunge Pool<br/><strong style='color: var(--burgundy)'>From $4,665/night</strong>",
          priceLabel: "Per night",
          priceRate: "$4,665",
          priceStrike: "",
          priceTotal: "3-Night Total: $13,995",
          stayTotalExclAmount: "$13,995",
          stayTotalExclSub: "3 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "$16,791.82",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Sep 27 → Sep 30",
          nightsLabel: "3",
          bookingSummary: {
            checkInOut: "Sep 27 → Sep 30",
            nights: "3",
            adr: "$4,665",
            total: "$16,791.82",
          },
          images: [
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/355E0D5A082C4F7C8A30AFC8C91A603E/355E0D5A082C4F7C8A30AFC8C91A603E.JPEG",
              alt: "3 Bedroom Makai Ocean Front Villa — Andaz Maui at Wailea",
            },
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/8A5F84CA27384878A5F12C787C412A43/8A5F84CA27384878A5F12C787C412A43.JPEG",
              alt: "Villa Bathroom — Andaz Maui at Wailea",
            },
          ],
          features: [
            {
              title: "Villa Features",
              icon: "door-open",
              items: [
                "3-bedroom oceanfront villa",
                "Multiple king beds plus double beds",
                "Full ocean views from living areas",
                "Full kitchen with modern appliances",
                "Private plunge pool",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "Complimentary full breakfast for 2 daily",
                "$100 resort credit",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: $4,665/night &times; 3 = <strong>$13,995</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$16,791.82</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "$16,791.82",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=I2KCFV&rate=1HZ&hotel=2706&checkin=2026-09-27&checkout=2026-09-30&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — 3 Bedroom Ocean Front Villa",
        },

        // ── Villa 3: 4 Bedroom Makai Ocean Front Villa ──
        {
          badgeText: "🏨 Hotel Option 1 — Villa 3",
          name: "4 Bedroom Makai Ocean Front Villa",
          subtitle:
            "3 Kings + Doubles · Kitchen · Jacuzzi · BBQ Grill<br/><strong style='color: var(--burgundy)'>From $6,048.33/night</strong>",
          priceLabel: "Per night",
          priceRate: "$6,048.33",
          priceStrike: "",
          priceTotal: "3-Night Total: $18,144.99",
          stayTotalExclAmount: "$18,144.99",
          stayTotalExclSub: "3 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "$21,718.37",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Sep 27 → Sep 30",
          nightsLabel: "3",
          bookingSummary: {
            checkInOut: "Sep 27 → Sep 30",
            nights: "3",
            adr: "$6,048.33",
            total: "$21,718.37",
          },
          images: [
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/424346266E1540D38B4FBE43D51AC97D/424346266E1540D38B4FBE43D51AC97D.JPEG",
              alt: "4 Bedroom Makai Ocean Front Villa — Andaz Maui at Wailea",
            },
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/213FA2E5C42B49F7B68DF707EB5DED51/213FA2E5C42B49F7B68DF707EB5DED51.JPEG",
              alt: "Villa Kitchen — Andaz Maui at Wailea",
            },
          ],
          features: [
            {
              title: "Villa Features",
              icon: "door-open",
              items: [
                "4-bedroom oceanfront villa",
                "3 king beds plus double beds",
                "Full kitchen with modern appliances",
                "Private Jacuzzi and BBQ grill",
                "Spacious indoor and outdoor living",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "Complimentary full breakfast for 2 daily",
                "$100 resort credit",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: $6,048.33/night &times; 3 = <strong>$18,144.99</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$21,718.37</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "$21,718.37",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=N4KCFV&rate=1HZ&hotel=2706&checkin=2026-09-27&checkout=2026-09-30&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — 4 Bedroom Ocean Front Villa",
        },
      ],
    },

    // ═══════════════════════════════════════════════════
    // Hotel 2: Four Seasons Maui at Wailea — Suites Only
    // ═══════════════════════════════════════════════════
    {
      hero: {
        imageUrl:
          "https://d2573qu6qrjt8c.cloudfront.net/10D23EB991604C53AC6D3ADDE19005AF/10D23EB991604C53AC6D3ADDE19005AF.JPEG",
        alt: "Four Seasons Resort Maui at Wailea — Maui, Hawaii",
        hotel: "Four Seasons Resort Maui at Wailea",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Wailea, Maui, Hawaii &nbsp;|&nbsp; Luxury Oceanfront Resort",
      },
      offer: {
        heading: "WhataHotel! Exclusive",
        description:
          "Book through WhataHotel! and enjoy exclusive complimentary perks at <strong>Four Seasons Resort Maui at Wailea</strong> — including a room upgrade, daily breakfast for 2, $200 hotel credit for suites, and more.",
        pills: [
          "✔ Room Category Upgrade (subject to availability)",
          "✔ Full Breakfast for 2 Daily",
          "✔ $200 Hotel Credit (suites)",
          "✔ Complimentary WiFi",
          "✔ Late Check-Out (subject to availability)",
        ],
      },
      rooms: [
        // ── Suite 1: Garden View Executive Suite, King ──
        {
          badgeText: "🏨 Hotel Option 2 — Suite 1",
          name: "Garden View Executive Suite, King",
          subtitle:
            "840 sq ft · Separate Living Room · King Bed · Deep Soaking Tub<br/><strong style='color: var(--burgundy)'>From $1,776.67/night</strong>",
          priceLabel: "Per night",
          priceRate: "$1,776.67",
          priceStrike: "",
          priceTotal: "3-Night Total: $5,330.01",
          stayTotalExclAmount: "$5,330.01",
          stayTotalExclSub: "3 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "$6,523.22",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Sep 27 → Sep 30",
          nightsLabel: "3",
          bookingSummary: {
            checkInOut: "Sep 27 → Sep 30",
            nights: "3",
            adr: "$1,776.67",
            total: "$6,523.22",
          },
          images: [
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/10D23EB991604C53AC6D3ADDE19005AF/10D23EB991604C53AC6D3ADDE19005AF.JPEG",
              alt: "Garden View Executive Suite — Four Seasons Maui at Wailea",
            },
          ],
          features: [
            {
              title: "Suite Features",
              icon: "door-open",
              items: [
                "840 sq ft with separate living room and bedroom",
                "King bed with premium linens",
                "Deep soaking tub and double vanity",
                "Glass shower and oversized marble bathroom",
                "Twice-daily housekeeping and turndown service",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Full breakfast for 2 daily",
                "$200 hotel credit (suites)",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: $1,776.67/night &times; 3 = <strong>$5,330.01</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$6,523.22</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "$6,523.22",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=S1KPP6&rate=PP6&hotel=1421&checkin=2026-09-27&checkout=2026-09-30&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Garden View Executive Suite",
        },

        // ── Suite 2: Deluxe Garden View Executive Suite, King ──
        {
          badgeText: "🏨 Hotel Option 2 — Suite 2",
          name: "Deluxe Garden View Executive Suite, King",
          subtitle:
            "840 sq ft · Separate Living Room · Lanai · Outdoor Dining<br/><strong style='color: var(--burgundy)'>From $1,926.67/night</strong>",
          priceLabel: "Per night",
          priceRate: "$1,926.67",
          priceStrike: "",
          priceTotal: "3-Night Total: $5,780.01",
          stayTotalExclAmount: "$5,780.01",
          stayTotalExclSub: "3 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "$7,057.42",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Sep 27 → Sep 30",
          nightsLabel: "3",
          bookingSummary: {
            checkInOut: "Sep 27 → Sep 30",
            nights: "3",
            adr: "$1,926.67",
            total: "$7,057.42",
          },
          images: [
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/10D23EB991604C53AC6D3ADDE19005AF/10D23EB991604C53AC6D3ADDE19005AF.JPEG",
              alt: "Deluxe Garden View Executive Suite — Four Seasons Maui at Wailea",
            },
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/37AD748C95024C3F82C6E73AA87846FE/37AD748C95024C3F82C6E73AA87846FE.JPEG",
              alt: "Deluxe Garden View Executive Suite Detail — Four Seasons Maui at Wailea",
            },
          ],
          features: [
            {
              title: "Suite Features",
              icon: "door-open",
              items: [
                "840 sq ft with separate living room and bedroom",
                "King bed with premium linens",
                "Lanai with outdoor dining table and garden views",
                "Oversized marble bathroom with deep soaking tub",
                "Twice-daily housekeeping and turndown service",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Full breakfast for 2 daily",
                "$200 hotel credit (suites)",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: $1,926.67/night &times; 3 = <strong>$5,780.01</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$7,057.42</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "$7,057.42",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=U1KPP6&rate=PP6&hotel=1421&checkin=2026-09-27&checkout=2026-09-30&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Deluxe Garden View Executive Suite",
        },

        // ── Suite 3: One Bedroom Garden View Suite, King ──
        {
          badgeText: "🏨 Hotel Option 2 — Suite 3",
          name: "One Bedroom Garden View Suite, King",
          subtitle:
            "1,100 sq ft · King Bed · Separate Living Area · Outdoor Teak Dining<br/><strong style='color: var(--burgundy)'>From $4,945/night</strong>",
          priceLabel: "Per night",
          priceRate: "$4,945",
          priceStrike: "",
          priceTotal: "3-Night Total: $14,835",
          stayTotalExclAmount: "$14,835",
          stayTotalExclSub: "3 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "$17,806.80",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Sep 27 → Sep 30",
          nightsLabel: "3",
          bookingSummary: {
            checkInOut: "Sep 27 → Sep 30",
            nights: "3",
            adr: "$4,945",
            total: "$17,806.80",
          },
          images: [
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/37AD748C95024C3F82C6E73AA87846FE/37AD748C95024C3F82C6E73AA87846FE.JPEG",
              alt: "One Bedroom Garden View Suite — Four Seasons Maui at Wailea",
            },
          ],
          features: [
            {
              title: "Suite Features",
              icon: "door-open",
              items: [
                "1,100 sq ft with separate bedroom and living area",
                "King bed with premium linens",
                "Outdoor teak dining set for 2",
                "Guest bathroom plus marble en-suite",
                "Twice-daily housekeeping and turndown service",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Full breakfast for 2 daily",
                "$200 hotel credit (suites)",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: $4,945/night &times; 3 = <strong>$14,835</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$17,806.80</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "$17,806.80",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=F1KPP6&rate=PP6&hotel=1421&checkin=2026-09-27&checkout=2026-09-30&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — One Bedroom Garden View Suite",
        },
      ],
    },
  ],

  pricingFootnote:
    "All nightly rates shown are per room, per night and exclude applicable taxes, resort fees, and service charges. Grand totals include taxes &amp; fees. Rates subject to availability. Andaz Maui villa rates are estimates based on nearest available dates; final rates may vary. Free cancellation for Four Seasons Maui available until September 13, 2026.",

};
