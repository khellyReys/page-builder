import type { Promo } from "../types";

// AGENT NOTE: Multi-hotel proposal — 3 Fort Lauderdale hotels, filtered rooms + rates per user request.
// Hotel 1: Four Seasons Fort Lauderdale — Lauderdale View King & Intracoastal View King (4TH NIGHT FREE)
// Hotel 2: The Ritz-Carlton, Fort Lauderdale — Intracoastal View King & Partial Ocean View King (Stay 3, Get 4th Free)
// Hotel 3: Conrad Fort Lauderdale Beach — Junior Suite Partial Ocean King (4TH NIGHT FREE)
// All dates: March 28 – April 1, 2026 (4 nights). Currency: USD.

export const promo19: Promo = {
  id: "promo-19",
  createdAt: "2026-03-27T12:00:00Z",
  mastheadEyebrow: "Travel Proposal",
  title: "Benstock | Ft Lauderdale",
  client: "Benstock",
  dates: "March 28 – April 1, 2026 | 4 Nights | 3 Hotel Options",
  thumbnailUrl:
    "https://www.fourseasons.com/alt/img-opt/~75.701/publish/content/dam/fourseasons/images/web/FTL/FTL_084_original.jpg",
  portalTotalLabel: "Starting From",
  portalTotalValue: "$2,287.69",

  hotels: [
    // ═══════════════════════════════════════════════════
    // Hotel 1: Four Seasons Fort Lauderdale
    // ═══════════════════════════════════════════════════
    {
      hero: {
        imageUrl:
          "https://www.fourseasons.com/alt/img-opt/~75.701/publish/content/dam/fourseasons/images/web/FTL/FTL_084_original.jpg",
        alt: "Four Seasons Fort Lauderdale",
        hotel: "Four Seasons Fort Lauderdale",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Fort Lauderdale, Florida &nbsp;|&nbsp; Oceanfront Luxury Resort",
      },
      offer: {
        heading: "4th Night Free — WhataHotel! Exclusive",
        description:
          "Book through WhataHotel! and enjoy the <strong>4th Night Free</strong> plus exclusive complimentary perks at <strong>Four Seasons Fort Lauderdale</strong> — including a room upgrade, daily breakfast for 2, $100 hotel credit, and more.",
        pills: [
          "✔ 4th Night Free",
          "✔ Room Category Upgrade (subject to availability)",
          "✔ Breakfast for 2 Daily",
          "✔ $100 Hotel Credit",
          "✔ Complimentary Basic WiFi",
          "✔ Late Check-Out (subject to availability)",
        ],
      },
      rooms: [
        {
          badgeText: "🏨 Hotel Option 1 — Room 1",
          name: "Lauderdale View King",
          subtitle:
            "675 sq ft · King Bed · Lauderdale View<br/><strong style='color: var(--burgundy)'>4th Night Free — From $811.25/night</strong>",
          priceLabel: "Per night avg (incl. free night)",
          priceRate: "$811.25",
          priceStrike: "Standard: $1,070/night",
          priceTotal: "$3,245",
          stayTotalExclAmount: "$3,245",
          stayTotalExclSub: "4 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "$3,888.33",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Mar 28 → Apr 1",
          nightsLabel: "4",
          bookingSummary: {
            checkInOut: "Mar 28 → Apr 1",
            nights: "4",
            adr: "$811.25",
            total: "$3,888.33",
          },
          images: [
            {
              src: "https://www.fourseasons.com/alt/img-opt/~75.701/publish/content/dam/fourseasons/images/web/FTL/FTL_084_original.jpg",
              alt: "Lauderdale View King — Four Seasons Fort Lauderdale",
            },
            {
              src: "https://www.fourseasons.com/alt/img-opt/~75.701/publish/content/dam/fourseasons/images/web/FTL/FTL_111_original.jpg",
              alt: "Lauderdale View King Detail — Four Seasons Fort Lauderdale",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "675 sq ft of luxury living space",
                "King bed with premium linens",
                "Lauderdale views",
                "Accommodates 3 adults or 2 adults + 1 child",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "4th Night Free",
                "Room category upgrade (subject to availability at check-in)",
                "Breakfast for 2 daily",
                "$100 hotel credit ($200 for suites)",
                "Complimentary basic WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "4 Nights &nbsp;|&nbsp; <span>4th Night Free Rate</span>",
            leftSub:
              "Standard rate: $1,070/night &times; 4 = $4,280 &mdash; 4th Night Free rate: $811.25/night avg &times; 4 = $3,245 &mdash; you save <strong>$1,169.55</strong> (incl. taxes)",
            rightLabel: "(incl. taxes)",
            rightValue: "$3,888.33",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=A1KPP1&rate=PP6&hotel=5035&checkin=2026-03-28&checkout=2026-04-01&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Lauderdale View King",
        },
        {
          badgeText: "🏨 Hotel Option 1 — Room 2",
          name: "Intracoastal View King",
          subtitle:
            "554 sq ft · King Bed · Intracoastal View<br/><strong style='color: var(--burgundy)'>4th Night Free — From $870/night</strong>",
          priceLabel: "Per night avg (incl. free night)",
          priceRate: "$870",
          priceStrike: "Standard: $1,157.50/night",
          priceTotal: "$3,480",
          stayTotalExclAmount: "$3,480",
          stayTotalExclSub: "4 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "$4,153.88",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Mar 28 → Apr 1",
          nightsLabel: "4",
          bookingSummary: {
            checkInOut: "Mar 28 → Apr 1",
            nights: "4",
            adr: "$870",
            total: "$4,153.88",
          },
          images: [
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/3306B2454D7F4FAA94BF0F1A34EC532E/3306B2454D7F4FAA94BF0F1A34EC532E.JPEG",
              alt: "Intracoastal View King — Four Seasons Fort Lauderdale",
            },
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/DEBFCE990DB84BB49BABB97E0EC28114/E.JPEG",
              alt: "Intracoastal View King Detail — Four Seasons Fort Lauderdale",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "554 sq ft of luxury living space",
                "King bed with premium linens",
                "Intracoastal waterway views",
                "Accommodates 3 adults or 2 adults + 1 child",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "4th Night Free",
                "Room category upgrade (subject to availability at check-in)",
                "Breakfast for 2 daily",
                "$100 hotel credit ($200 for suites)",
                "Complimentary basic WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "4 Nights &nbsp;|&nbsp; <span>4th Night Free Rate</span>",
            leftSub:
              "Standard rate: $1,157.50/night &times; 4 = $4,630 &mdash; 4th Night Free rate: $870/night avg &times; 4 = $3,480 &mdash; you save <strong>$1,299.50</strong> (incl. taxes)",
            rightLabel: "(incl. taxes)",
            rightValue: "$4,153.88",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=K1KPP1&rate=PP6&hotel=5035&checkin=2026-03-28&checkout=2026-04-01&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Intracoastal View King",
        },
      ],
    },

    // ═══════════════════════════════════════════════════
    // Hotel 2: The Ritz-Carlton, Fort Lauderdale
    // ═══════════════════════════════════════════════════
    {
      hero: {
        imageUrl:
          "https://media.cntraveler.com/photos/580fc51e6b5a595447204a50/16:9/w_2560,c_limit/Exterior-RitzCarltonFortLauderdale-Florida-CRHotel.jpg",
        alt: "The Ritz-Carlton, Fort Lauderdale",
        hotel: "The Ritz-Carlton, Fort Lauderdale",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Fort Lauderdale, Florida &nbsp;|&nbsp; Beachfront Luxury Hotel",
      },
      offer: {
        heading: "Stay 3 Nights, Get the 4th Night Free — WhataHotel! Exclusive",
        description:
          "Book through WhataHotel! and enjoy the <strong>4th Night Free</strong> plus exclusive complimentary perks at <strong>The Ritz-Carlton, Fort Lauderdale</strong> — including a room upgrade, daily breakfast for 2, $100 hotel credit, and more.",
        pills: [
          "✔ Stay 3 Nights, Get the 4th Night Free",
          "✔ Room Category Upgrade (subject to availability)",
          "✔ Complimentary Breakfast for 2 Daily",
          "✔ $100 Hotel Credit",
          "✔ Free Basic WiFi",
          "✔ Late Check-Out (subject to availability)",
        ],
      },
      rooms: [
        {
          badgeText: "🏨 Hotel Option 2 — Room 1",
          name: "Intracoastal View King",
          subtitle:
            "400 sq ft · King Bed · Intracoastal View<br/><strong style='color: var(--burgundy)'>4th Night Free — From $633/night</strong>",
          priceLabel: "Per night avg (incl. free night)",
          priceRate: "$633",
          priceStrike: "",
          priceTotal: "$2,532",
          stayTotalExclAmount: "$2,532",
          stayTotalExclSub: "4 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "$3,109.76",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Mar 28 → Apr 1",
          nightsLabel: "4",
          bookingSummary: {
            checkInOut: "Mar 28 → Apr 1",
            nights: "4",
            adr: "$633",
            total: "$3,109.76",
          },
          images: [
            {
              src: "https://content.r9cdn.net/rimg/himg/2d/a7/3b/leonardo-149231-926527-474860.jpg",
              alt: "Intracoastal View King — The Ritz-Carlton, Fort Lauderdale",
            },
            {
              src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/479645430.webp",
              alt: "Intracoastal View King Bathroom — The Ritz-Carlton, Fort Lauderdale",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "400 sq ft of luxury living space",
                "King bed with premium linens",
                "Intracoastal waterway views",
                "Marble bathroom",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "Stay 3 Nights, Get the 4th Night Free",
                "Room category upgrade (subject to availability at check-in)",
                "Complimentary breakfast for 2 daily",
                "$100 hotel credit",
                "Free basic WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "4 Nights &nbsp;|&nbsp; <span>4th Night Free Rate</span>",
            leftSub:
              "WhataHotel! rate: $633/night avg &times; 4 = $2,532 (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$3,109.76</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "$3,109.76",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=SH0M00&rate=0S8&hotel=2401&checkin=2026-03-28&checkout=2026-04-01&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Intracoastal View King",
        },
        {
          badgeText: "🏨 Hotel Option 2 — Room 2",
          name: "Partial Ocean View King",
          subtitle:
            "400–559 sq ft · King Bed · Partial Ocean View<br/><strong style='color: var(--burgundy)'>4th Night Free — From $678/night</strong>",
          priceLabel: "Per night avg (incl. free night)",
          priceRate: "$678",
          priceStrike: "",
          priceTotal: "$2,712",
          stayTotalExclAmount: "$2,712",
          stayTotalExclSub: "4 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "$3,313.16",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Mar 28 → Apr 1",
          nightsLabel: "4",
          bookingSummary: {
            checkInOut: "Mar 28 → Apr 1",
            nights: "4",
            adr: "$678",
            total: "$3,313.16",
          },
          images: [
            {
              src: "https://media-cdn.tripadvisor.com/media/photo-s/30/7b/e0/77/oceanfront-king-view.jpg",
              alt: "Partial Ocean View King — The Ritz-Carlton, Fort Lauderdale",
            },
            {
              src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/481764126.webp",
              alt: "Partial Ocean View King Detail — The Ritz-Carlton, Fort Lauderdale",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "400–559 sq ft of luxury living space",
                "King bed with premium linens",
                "Partial ocean views",
                "Marble bathroom",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "Stay 3 Nights, Get the 4th Night Free",
                "Room category upgrade (subject to availability at check-in)",
                "Complimentary breakfast for 2 daily",
                "$100 hotel credit",
                "Free basic WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "4 Nights &nbsp;|&nbsp; <span>4th Night Free Rate</span>",
            leftSub:
              "WhataHotel! rate: $678/night avg &times; 4 = $2,712 (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$3,313.16</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "$3,313.16",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=SH0G00&rate=0S8&hotel=2401&checkin=2026-03-28&checkout=2026-04-01&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Partial Ocean View King",
        },
      ],
    },

    // ═══════════════════════════════════════════════════
    // Hotel 3: Conrad Fort Lauderdale Beach
    // ═══════════════════════════════════════════════════
    {
      hero: {
        imageUrl:
          "https://d2573qu6qrjt8c.cloudfront.net/6E19E393C1BB487DB7FAE65B8C755A5B/6E19E393C1BB487DB7FAE65B8C755A5B.JPEG",
        alt: "Conrad Fort Lauderdale Beach",
        hotel: "Conrad Fort Lauderdale Beach",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Fort Lauderdale, Florida &nbsp;|&nbsp; Beachfront All-Suite Resort",
      },
      offer: {
        heading: "4th Night Free — WhataHotel! Exclusive",
        description:
          "Book through WhataHotel! and enjoy the <strong>4th Night Free</strong> plus exclusive complimentary perks at <strong>Conrad Fort Lauderdale Beach</strong> — including a room upgrade, daily continental breakfast for 2, $100 F&B credit, and more.",
        pills: [
          "✔ 4th Night Free",
          "✔ Room Category Upgrade (subject to availability)",
          "✔ Continental Breakfast for 2 Daily",
          "✔ $100 Food & Beverage Credit",
          "✔ Free WiFi",
          "✔ Late Check-Out (subject to availability)",
        ],
      },
      rooms: [
        {
          badgeText: "🏨 Hotel Option 3",
          name: "Junior Suite Partial Ocean King",
          subtitle:
            "650 sq ft · King Bed · Partial Ocean View · Kitchen & Balcony<br/><strong style='color: var(--burgundy)'>4th Night Free — From $466.13/night</strong>",
          priceLabel: "Per night avg (incl. free night)",
          priceRate: "$466.13",
          priceStrike: "Standard: $621.50/night",
          priceTotal: "$1,864.52",
          stayTotalExclAmount: "$1,864.52",
          stayTotalExclSub: "4 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "$2,287.69",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
          stayCheckInOut: "Mar 28 → Apr 1",
          nightsLabel: "4",
          bookingSummary: {
            checkInOut: "Mar 28 → Apr 1",
            nights: "4",
            adr: "$466.13",
            total: "$2,287.69",
          },
          images: [
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/6E19E393C1BB487DB7FAE65B8C755A5B/6E19E393C1BB487DB7FAE65B8C755A5B.JPEG",
              alt: "Junior Suite Partial Ocean King — Conrad Fort Lauderdale Beach",
            },
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/AEC279D8A6364E06B9CD4C8B23154914/AEC279D8A6364E06B9CD4C8B23154914.JPEG",
              alt: "Junior Suite Bathroom — Conrad Fort Lauderdale Beach",
            },
          ],
          features: [
            {
              title: "Suite Features",
              icon: "door-open",
              items: [
                "650 sq ft of luxury suite living",
                "King bed with premium linens",
                "Furnished balcony with partial ocean views",
                "Full kitchen with sofabed",
                "Separate glass shower and soaking tub",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "4th Night Free",
                "Room category upgrade (subject to availability at check-in)",
                "Continental breakfast for 2 daily",
                "$100 food & beverage credit",
                "Free WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel:
              "4 Nights &nbsp;|&nbsp; <span>4th Night Free Rate</span>",
            leftSub:
              "Standard rate: $621.50/night &times; 4 = $2,486 &mdash; 4th Night Free rate: $466.13/night avg &times; 4 = $1,864.52 &mdash; you save <strong>$738.45</strong> (incl. taxes)",
            rightLabel: "(incl. taxes)",
            rightValue: "$2,287.69",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=A11CBPC&rate=I70&hotel=3333&checkin=2026-03-28&checkout=2026-04-01&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Junior Suite Partial Ocean King",
        },
      ],
    },
  ],

  pricingFootnote:
    "All nightly rates shown are per room, per night and reflect the 4th Night Free promotional average. Grand totals include taxes & fees. Rates subject to availability. Free cancellation deadlines vary by hotel — please check individual booking pages for details.",

};
