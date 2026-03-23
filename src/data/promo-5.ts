import type { Promo } from "../types";
import { sharedContact } from "./contact";

// AGENT NOTE: Multi-hotel honeymoon proposal — 2 Four Seasons properties, King beds only.
// Hotel 1: Four Seasons Hotel Madrid (hotelID=3897) — Aug 25–28, 2026 (3 nights), rate=PP6
// Hotel 2: Four Seasons Resort Mallorca at Formentor (hotelID=6664) — Sep 6–9, 2026 (3 nights), rate=PP1
// Currency: EUR. 4 King-bed room options per hotel.

export const promo5: Promo = {
  id: "promo-5",
  createdAt: "2026-03-23T21:00:00Z",
  mastheadEyebrow: "Travel Proposal",
  title: "Lucy & Luke's Honeymoon",
  client: "Lucy & Luke",
  dates: "Aug 25–28 & Sep 6–9, 2026 | 3 Nights Each | 2 Destinations",
  thumbnailUrl:
    "https://d2573qu6qrjt8c.cloudfront.net/B0FAB77BC37C42869419F968BB81FC4C/B0FAB77BC37C42869419F968BB81FC4C.JPEG",
  portalTotalLabel: "Starting From",
  portalTotalValue: "€3,074.50",

  hotels: [
    // ═══════════════════════════════════════════════════
    // Hotel 1: Four Seasons Hotel Madrid — Spain
    // ═══════════════════════════════════════════════════
    {
      hero: {
        imageUrl:
          "https://d2573qu6qrjt8c.cloudfront.net/B0FAB77BC37C42869419F968BB81FC4C/B0FAB77BC37C42869419F968BB81FC4C.JPEG",
        alt: "Four Seasons Hotel Madrid — Madrid, Spain",
        hotel: "Four Seasons Hotel Madrid",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Madrid, Spain &nbsp;|&nbsp; Luxury City Hotel",
      },
      offer: {
        heading: "WhataHotel! Exclusive",
        description:
          "Book through WhataHotel! and enjoy exclusive complimentary perks at <strong>Four Seasons Hotel Madrid</strong> — including a room upgrade, daily full breakfast for 2, €100 hotel credit, and more.",
        pills: [
          "✔ Room Category Upgrade (subject to availability)",
          "✔ Full Breakfast for 2 Daily",
          "✔ €100 Hotel Credit",
          "✔ Complimentary WiFi",
          "✔ Late Check-Out (subject to availability)",
        ],
      },
      rooms: [
        // ── Madrid Room 1: Deluxe King ──
        {
          badgeText: "🏨 Hotel Option 1 — Room 1",
          name: "Deluxe King",
          subtitle:
            "484–538 sq ft · King Bed · Full Marble Bathroom<br/><strong style='color: var(--burgundy)'>From €931.67/night</strong>",
          priceLabel: "Per night",
          priceRate: "€931.67",
          priceStrike: "",
          priceTotal: "3-Night Total: €2,795.01",
          stayTotalExclAmount: "€2,795.01",
          stayTotalExclSub: "3 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "€3,074.50",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Aug 25 → Aug 28",
          nightsLabel: "3",
          bookingSummary: {
            checkInOut: "Aug 25 → Aug 28",
            nights: "3",
            adr: "€931.67",
            total: "€3,074.50",
          },
          images: [
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/B0FAB77BC37C42869419F968BB81FC4C/B0FAB77BC37C42869419F968BB81FC4C.JPEG",
              alt: "Deluxe King — Four Seasons Hotel Madrid",
            },
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/0096C68AD69245869357D618A45D87DC/E.JPEG",
              alt: "Deluxe King Detail — Four Seasons Hotel Madrid",
            },
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/7F378F52A1ED44CAB41962290A6BF754/E.JPEG",
              alt: "Deluxe King Bathroom — Four Seasons Hotel Madrid",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "484–538 sq ft of luxury living space",
                "King bed with premium linens",
                "Full marble bathroom",
                "Courtyard or city views",
                "Air conditioning and complimentary minibar",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Full breakfast for 2 daily",
                "€100 hotel credit",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: €931.67/night &times; 3 = <strong>€2,795.01</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>€3,074.50</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "€3,074.50",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=A1KPP6&rate=PP6&hotel=3897&checkin=2026-08-25&checkout=2026-08-28&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Deluxe King",
        },

        // ── Madrid Room 2: Deluxe Juliet Balcony King ──
        {
          badgeText: "🏨 Hotel Option 1 — Room 2",
          name: "Deluxe Juliet Balcony King",
          subtitle:
            "484–538 sq ft · King Bed · City View · Juliet Balcony<br/><strong style='color: var(--burgundy)'>From €1,166.67/night</strong>",
          priceLabel: "Per night",
          priceRate: "€1,166.67",
          priceStrike: "",
          priceTotal: "3-Night Total: €3,500.01",
          stayTotalExclAmount: "€3,500.01",
          stayTotalExclSub: "3 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "€3,850.00",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Aug 25 → Aug 28",
          nightsLabel: "3",
          bookingSummary: {
            checkInOut: "Aug 25 → Aug 28",
            nights: "3",
            adr: "€1,166.67",
            total: "€3,850.00",
          },
          images: [
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/CCAFC4FA99B84DA5B80A8A41FBF343B1/CCAFC4FA99B84DA5B80A8A41FBF343B1.JPEG",
              alt: "Deluxe Juliet Balcony King — Four Seasons Hotel Madrid",
            },
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/9CFDE799CF4E4934BDA6AF12C95D0BD2/E.JPEG",
              alt: "Deluxe Juliet Balcony King Detail — Four Seasons Hotel Madrid",
            },
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/B4C051EBADAB4C3FA7DD2C57128FD034/E.JPEG",
              alt: "Deluxe Juliet Balcony King Bathroom — Four Seasons Hotel Madrid",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "484–538 sq ft with Juliet balcony",
                "King bed with premium linens",
                "City views from private balcony",
                "Full marble bathroom",
                "Air conditioning and complimentary minibar",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Full breakfast for 2 daily",
                "€100 hotel credit",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: €1,166.67/night &times; 3 = <strong>€3,500.01</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>€3,850.00</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "€3,850.00",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=C1KPP6&rate=PP6&hotel=3897&checkin=2026-08-25&checkout=2026-08-28&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Deluxe Juliet Balcony King",
        },

        // ── Madrid Room 3: Grand Premier King ──
        {
          badgeText: "🏨 Hotel Option 1 — Room 3",
          name: "Grand Premier King",
          subtitle:
            "592–700 sq ft · King Bed · Spacious Layout<br/><strong style='color: var(--burgundy)'>From €1,390/night</strong>",
          priceLabel: "Per night",
          priceRate: "€1,390",
          priceStrike: "",
          priceTotal: "3-Night Total: €4,170.00",
          stayTotalExclAmount: "€4,170.00",
          stayTotalExclSub: "3 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "€4,587.00",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Aug 25 → Aug 28",
          nightsLabel: "3",
          bookingSummary: {
            checkInOut: "Aug 25 → Aug 28",
            nights: "3",
            adr: "€1,390",
            total: "€4,587.00",
          },
          images: [
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/E1F8EC5D60BD4EBF8DBB95CA42D23386/E1F8EC5D60BD4EBF8DBB95CA42D23386.JPEG",
              alt: "Grand Premier King — Four Seasons Hotel Madrid",
            },
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/577C1FE5339243428F1371B371F4ABA5/E.JPEG",
              alt: "Grand Premier King Detail — Four Seasons Hotel Madrid",
            },
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/757FF359137A4410939CC8C4673B7BFC/E.JPEG",
              alt: "Grand Premier King Bathroom — Four Seasons Hotel Madrid",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "592–700 sq ft of spacious luxury",
                "King bed with premium linens",
                "Generous seating area",
                "Full marble bathroom with soaking tub",
                "Accommodates up to 3 guests",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Full breakfast for 2 daily",
                "€100 hotel credit",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: €1,390/night &times; 3 = <strong>€4,170.00</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>€4,587.00</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "€4,587.00",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=A1TPP6&rate=PP6&hotel=3897&checkin=2026-08-25&checkout=2026-08-28&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Grand Premier King",
        },

        // ── Madrid Room 4: Premier Terrace Room King ──
        {
          badgeText: "🏨 Hotel Option 1 — Room 4",
          name: "Premier Terrace Room King",
          subtitle:
            "484–538 sq ft · King Bed · Private Furnished Terrace · City View<br/><strong style='color: var(--burgundy)'>From €1,540/night</strong>",
          priceLabel: "Per night",
          priceRate: "€1,540",
          priceStrike: "",
          priceTotal: "3-Night Total: €4,620.00",
          stayTotalExclAmount: "€4,620.00",
          stayTotalExclSub: "3 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "€5,082.00",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Aug 25 → Aug 28",
          nightsLabel: "3",
          bookingSummary: {
            checkInOut: "Aug 25 → Aug 28",
            nights: "3",
            adr: "€1,540",
            total: "€5,082.00",
          },
          images: [
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/577C1FE5339243428F1371B371F4ABA5/577C1FE5339243428F1371B371F4ABA5.JPEG",
              alt: "Premier Terrace Room King — Four Seasons Hotel Madrid",
            },
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/757FF359137A4410939CC8C4673B7BFC/E.JPEG",
              alt: "Premier Terrace Room King Detail — Four Seasons Hotel Madrid",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "484–538 sq ft with private furnished terrace",
                "King bed with premium linens",
                "City views from outdoor terrace",
                "Full marble bathroom",
                "Accommodates up to 3 adults",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Full breakfast for 2 daily",
                "€100 hotel credit",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: €1,540/night &times; 3 = <strong>€4,620.00</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>€5,082.00</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "€5,082.00",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=A1OPP6&rate=PP6&hotel=3897&checkin=2026-08-25&checkout=2026-08-28&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Premier Terrace Room King",
        },
      ],
    },

    // ═══════════════════════════════════════════════════
    // Hotel 2: Four Seasons Resort Mallorca at Formentor
    // ═══════════════════════════════════════════════════
    {
      hero: {
        imageUrl:
          "https://d2573qu6qrjt8c.cloudfront.net/79D256D099DF4540BFAD7B02E8C0786B/79D256D099DF4540BFAD7B02E8C0786B.JPEG",
        alt: "Four Seasons Resort Mallorca at Formentor — Mallorca, Spain",
        hotel: "Four Seasons Resort Mallorca at Formentor",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Formentor, Mallorca, Spain &nbsp;|&nbsp; Mediterranean Luxury Resort",
      },
      offer: {
        heading: "WhataHotel! Exclusive",
        description:
          "Book through WhataHotel! and enjoy exclusive complimentary perks at <strong>Four Seasons Resort Mallorca at Formentor</strong> — including a room upgrade, daily full breakfast for 2, $100 hotel credit, and more.",
        pills: [
          "✔ Room Category Upgrade (subject to availability)",
          "✔ Complimentary Daily Full Breakfast for 2",
          "✔ $100 Hotel Credit (spa, dining, bar)",
          "✔ Complimentary WiFi",
          "✔ Late Check-Out (subject to availability)",
        ],
      },
      rooms: [
        // ── Mallorca Room 1: Pine View Room King ──
        {
          badgeText: "🏨 Hotel Option 2 — Room 1",
          name: "Pine View Room King",
          subtitle:
            "431 sq ft · King Bed · Covered Terrace with Daybed<br/><strong style='color: var(--burgundy)'>From €1,487.50/night</strong>",
          priceLabel: "Per night",
          priceRate: "€1,487.50",
          priceStrike: "",
          priceTotal: "3-Night Total: €4,462.50",
          stayTotalExclAmount: "€4,462.50",
          stayTotalExclSub: "3 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "€4,968.45",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Sep 6 → Sep 9",
          nightsLabel: "3",
          bookingSummary: {
            checkInOut: "Sep 6 → Sep 9",
            nights: "3",
            adr: "€1,487.50",
            total: "€4,968.45",
          },
          images: [
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/C6E63DA262E04AAD9C4EA0259664CBE7/C6E63DA262E04AAD9C4EA0259664CBE7.JPEG",
              alt: "Pine View Room King — Four Seasons Resort Mallorca",
            },
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/257A52C101604D88A6DC1DB9D09B6522/257A52C101604D88A6DC1DB9D09B6522.JPEG",
              alt: "Pine View Room King Detail — Four Seasons Resort Mallorca",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "431 sq ft with covered terrace and daybed",
                "King bed with premium linens",
                "2nd–4th floor with pine forest views",
                "Floor-to-ceiling windows",
                "En-suite bathroom",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Complimentary daily full breakfast for 2",
                "$100 hotel credit (spa, dining, bar)",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: €1,487.50/night &times; 3 = <strong>€4,462.50</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>€4,968.45</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "€4,968.45",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=B1KPP1&rate=PP6&hotel=6664&checkin=2026-09-06&checkout=2026-09-09&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Pine View Room King",
        },

        // ── Mallorca Room 2: Sea View Room King ──
        {
          badgeText: "🏨 Hotel Option 2 — Room 2",
          name: "Sea View Room King",
          subtitle:
            "431 sq ft · King Bed · Covered Terrace · Sea View<br/><strong style='color: var(--burgundy)'>From €1,657.50/night</strong>",
          priceLabel: "Per night",
          priceRate: "€1,657.50",
          priceStrike: "",
          priceTotal: "3-Night Total: €4,972.50",
          stayTotalExclAmount: "€4,972.50",
          stayTotalExclSub: "3 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "€5,533.53",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Sep 6 → Sep 9",
          nightsLabel: "3",
          bookingSummary: {
            checkInOut: "Sep 6 → Sep 9",
            nights: "3",
            adr: "€1,657.50",
            total: "€5,533.53",
          },
          images: [
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/C43ED896E64445DFAE2F5266CADAFFE7/C43ED896E64445DFAE2F5266CADAFFE7.JPEG",
              alt: "Sea View Room King — Four Seasons Resort Mallorca",
            },
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/035CB5F8FBCA4880A45AF7D4A673E7C7/035CB5F8FBCA4880A45AF7D4A673E7C7.JPEG",
              alt: "Sea View Room King Detail — Four Seasons Resort Mallorca",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "431 sq ft with covered terrace and daybed",
                "King bed with premium linens",
                "3rd–4th floor with Mediterranean sea views",
                "Floor-to-ceiling windows",
                "En-suite bathroom",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Complimentary daily full breakfast for 2",
                "$100 hotel credit (spa, dining, bar)",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: €1,657.50/night &times; 3 = <strong>€4,972.50</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>€5,533.53</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "€5,533.53",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=K1KPP1&rate=PP6&hotel=6664&checkin=2026-09-06&checkout=2026-09-09&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Sea View Room King",
        },

        // ── Mallorca Room 3: Grand Sea View Room King ──
        {
          badgeText: "🏨 Hotel Option 2 — Room 3",
          name: "Grand Sea View Room King",
          subtitle:
            "549 sq ft · King Bed · Extended Terrace · Sea View<br/><strong style='color: var(--burgundy)'>From €1,742.50/night</strong>",
          priceLabel: "Per night",
          priceRate: "€1,742.50",
          priceStrike: "",
          priceTotal: "3-Night Total: €5,227.50",
          stayTotalExclAmount: "€5,227.50",
          stayTotalExclSub: "3 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "€5,816.07",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Sep 6 → Sep 9",
          nightsLabel: "3",
          bookingSummary: {
            checkInOut: "Sep 6 → Sep 9",
            nights: "3",
            adr: "€1,742.50",
            total: "€5,816.07",
          },
          images: [
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/4A1F4EDC867C4673A99056ADE0B03125/4A1F4EDC867C4673A99056ADE0B03125.JPEG",
              alt: "Grand Sea View Room King — Four Seasons Resort Mallorca",
            },
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/AB61173ECCA94ACFAE204F95717B8523/AB61173ECCA94ACFAE204F95717B8523.JPEG",
              alt: "Grand Sea View Room King Detail — Four Seasons Resort Mallorca",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "549 sq ft with extended terrace and daybed",
                "King bed with premium linens",
                "3rd–4th floor with panoramic sea views",
                "Floor-to-ceiling windows",
                "En-suite bathroom",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Complimentary daily full breakfast for 2",
                "$100 hotel credit (spa, dining, bar)",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: €1,742.50/night &times; 3 = <strong>€5,227.50</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>€5,816.07</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "€5,816.07",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=P1KPP1&rate=PP6&hotel=6664&checkin=2026-09-06&checkout=2026-09-09&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Grand Sea View Room King",
        },

        // ── Mallorca Room 4: Garden View Suite with Plunge Pool ──
        {
          badgeText: "🏨 Hotel Option 2 — Suite 1",
          name: "Garden View Suite<br/>with Plunge Pool",
          subtitle:
            "1,044 sq ft · King Bed · Private Plunge Pool · Garden View<br/><strong style='color: var(--burgundy)'>From €2,839/night</strong>",
          priceLabel: "Per night",
          priceRate: "€2,839",
          priceStrike: "",
          priceTotal: "3-Night Total: €8,517.00",
          stayTotalExclAmount: "€8,517.00",
          stayTotalExclSub: "3 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "€9,460.84",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Sep 6 → Sep 9",
          nightsLabel: "3",
          bookingSummary: {
            checkInOut: "Sep 6 → Sep 9",
            nights: "3",
            adr: "€2,839",
            total: "€9,460.84",
          },
          images: [
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/873B6CD474734CA99A3B5A34A9BF33D1/873B6CD474734CA99A3B5A34A9BF33D1.JPEG",
              alt: "Garden View Suite with Plunge Pool — Four Seasons Resort Mallorca",
            },
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/D2B3ACC2445C4FAF88B7F152D49ECC35/D2B3ACC2445C4FAF88B7F152D49ECC35.JPEG",
              alt: "Garden View Suite Living Area — Four Seasons Resort Mallorca",
            },
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/3B29BCB23CCF4E238C9F4A9641B6C55B/3B29BCB23CCF4E238C9F4A9641B6C55B.JPEG",
              alt: "Garden View Suite Plunge Pool — Four Seasons Resort Mallorca",
            },
          ],
          features: [
            {
              title: "Suite Features",
              icon: "door-open",
              items: [
                "1,044 sq ft with separate living room",
                "King bed with premium linens",
                "Private plunge pool on extended terrace",
                "Garden views with lush surroundings",
                "En-suite bathroom with soaking tub",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Complimentary daily full breakfast for 2",
                "$100 hotel credit (spa, dining, bar)",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "WhataHotel! rate: €2,839/night &times; 3 = <strong>€8,517.00</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>€9,460.84</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "€9,460.84",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=J1KPP1&rate=PP6&hotel=6664&checkin=2026-09-06&checkout=2026-09-09&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Garden View Suite with Plunge Pool",
        },
      ],
    },
  ],

  pricingFootnote:
    "All nightly rates shown are per room, per night and exclude applicable taxes, resort fees, and service charges. Grand totals include taxes &amp; fees. Rates subject to availability. Free cancellation: Madrid before August 24, 2026; Mallorca before August 16, 2026.",

  contact: sharedContact,
};
