import type { Promo } from "../types";

// AGENT NOTE: Multi-hotel proposal — 3 Fort Lauderdale hotels, filtered rooms + rates per user request.
// Hotel 1: Four Seasons Fort Lauderdale — Lauderdale View King & Intracoastal View King (4TH NIGHT FREE)
// Hotel 2: The Ritz-Carlton, Fort Lauderdale — Intracoastal View King & Partial Ocean View King (Stay 3, Get 4th Free)
// Hotel 3: Conrad Fort Lauderdale Beach — Junior Suite Partial Ocean King (4TH NIGHT FREE)
// All dates: March 28 – April 1, 2026 (4 nights). Currency: USD.

export const promo19: Promo = {
  id: "promo-19",
  createdAt: "2026-03-27T12:00:00Z",
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

      rooms: [
        {
          badgeText: "🏨 Hotel Option 1 — Room 1",
          name: "Lauderdale View King",
          subtitle:
            "675 sq ft · King Bed · Lauderdale View<br/><strong style='color: var(--burgundy)'>4th Night Free — From $811.25/night</strong>",
          priceRate: "$811.25",
          grandTotalInclTaxes: "$3,888.33",
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

          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=A1KPP1&rate=PP6&hotel=5035&checkin=2026-03-28&checkout=2026-04-01&guests=2&children=0&rooms=1",
        },
        {
          badgeText: "🏨 Hotel Option 1 — Room 2",
          name: "Intracoastal View King",
          subtitle:
            "554 sq ft · King Bed · Intracoastal View<br/><strong style='color: var(--burgundy)'>4th Night Free — From $870/night</strong>",
          priceRate: "$870",
          grandTotalInclTaxes: "$4,153.88",
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

          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=K1KPP1&rate=PP6&hotel=5035&checkin=2026-03-28&checkout=2026-04-01&guests=2&children=0&rooms=1",
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

      rooms: [
        {
          badgeText: "🏨 Hotel Option 2 — Room 1",
          name: "Intracoastal View King",
          subtitle:
            "400 sq ft · King Bed · Intracoastal View<br/><strong style='color: var(--burgundy)'>4th Night Free — From $633/night</strong>",
          priceRate: "$633",
          grandTotalInclTaxes: "$3,109.76",
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

          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=SH0M00&rate=0S8&hotel=2401&checkin=2026-03-28&checkout=2026-04-01&guests=2&children=0&rooms=1",
        },
        {
          badgeText: "🏨 Hotel Option 2 — Room 2",
          name: "Partial Ocean View King",
          subtitle:
            "400–559 sq ft · King Bed · Partial Ocean View<br/><strong style='color: var(--burgundy)'>4th Night Free — From $678/night</strong>",
          priceRate: "$678",
          grandTotalInclTaxes: "$3,313.16",
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

          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=SH0G00&rate=0S8&hotel=2401&checkin=2026-03-28&checkout=2026-04-01&guests=2&children=0&rooms=1",
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

      rooms: [
        {
          badgeText: "🏨 Hotel Option 3",
          name: "Junior Suite Partial Ocean King",
          subtitle:
            "650 sq ft · King Bed · Partial Ocean View · Kitchen & Balcony<br/><strong style='color: var(--burgundy)'>4th Night Free — From $466.13/night</strong>",
          priceRate: "$466.13",
          grandTotalInclTaxes: "$2,287.69",
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

          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=A11CBPC&rate=I70&hotel=3333&checkin=2026-03-28&checkout=2026-04-01&guests=2&children=0&rooms=1",
        },
      ],
    },
  ],

};
