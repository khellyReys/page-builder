import type { Promo } from "../types";

// AGENT NOTE: Multi-hotel Maui proposal — 3 hotels, 6 room/rate entries.
// Hotel 1: Fairmont Kea Lani (1223) — 4TH NIGHT FREE rate (3LN), 3 rooms
// Hotel 2: Four Seasons Maui at Wailea (1421) — EXPERIENCE MORE SPEND CREDIT rate (PG2), 1 room
// Hotel 3: Andaz Maui at Wailea (2706) — HY WhataHotel! 20 PCT rate (1HZ), 2 rooms
// Dates: Feb 11–19, 2027 (8 nights). Currency: USD.

export const promo11: Promo = {
  id: "promo-11",
  createdAt: "2026-03-25T18:00:00Z",
  title: "Tuffin Family | Maui Return 🌺",
  client: "Tuffin Family",
  dates: "February 11–19, 2027 | 8 Nights | 3 Hotels",
  portalTotalLabel: "Starting From",
  portalTotalValue: "$7,811.31",

  hotels: [
    // ═══════════════════════════════════════════════════════════
    // HOTEL 1 — FAIRMONT KEA LANI (4TH NIGHT FREE)
    // ═══════════════════════════════════════════════════════════
    {
      hero: {
        imageUrl:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/73/e2/7b/fairmont-kea-lani-maui.jpg?w=900&h=500&s=1",
        alt: "Fairmont Kea Lani — Wailea, Maui",
        hotel: "Fairmont Kea Lani",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Wailea, Maui, Hawaii &nbsp;|&nbsp; All-Suite Oceanfront Resort",
      },

      rooms: [
        // ─── Room 1: Fairmont Suite 2 Dbls → Guaranteed Upgrade to Garden View Suite ───
        {
          badgeText: "🏨 Option 1",
          name: "Fairmont Suite 2 Double Beds<br/>Guaranteed Upgrade to Garden View Suite",
          subtitle:
            "860 SF · 2 Double Beds · Sofa Bed · Large Private Lanai<br/><strong style='color: var(--burgundy)'>4th Night Free · From $893/night</strong>",
          priceRate: "$893",
          grandTotalInclTaxes: "$8,955.44",
          stayCheckInOut: "Feb 11 → Feb 19",
          nightsLabel: "8",
          bookingSummary: {
            checkInOut: "Feb 11 → Feb 19",
            nights: "8",
            adr: "$893",
            total: "$8,955.44",
          },
          images: [
            {
              src: "https://www.fairmont-kea-lani.com/content/uploads/2022/03/Suite_King-1.jpg",
              alt: "Fairmont Suite — Fairmont Kea Lani",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "860 SF suite with large private lanai",
                "2 double beds plus sofa bed",
                "Guaranteed upgrade to Garden View Suite 2 Double Beds",
                "Neighborhood view (upgraded to garden view)",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "4th Night Free (6 paid nights, 2 free)",
                "Room category upgrade (subject to availability at check-in)",
                "Complimentary breakfast for two daily",
                "$100 hotel credit (F&B or spa)",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],

          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=C2D3LN&rate=3LN&hotel=1223&checkin=2027-02-11&checkout=2027-02-19&guests=2&children=0&rooms=1",
        },

        // ─── Room 2: Garden View Suite 2 Dbls → Guaranteed Upgrade to Partial Ocean View Suite ───
        {
          badgeText: "🏨 Option 2",
          name: "Garden View Suite 2 Double Beds<br/>Guaranteed Upgrade to Partial Ocean View Suite",
          subtitle:
            "860 SF · 2 Double Beds · Sofa Bed · Lush Garden View<br/><strong style='color: var(--burgundy)'>4th Night Free · From $1,016.75/night</strong>",
          priceRate: "$1,016.75",
          grandTotalInclTaxes: "$10,130.67",
          stayCheckInOut: "Feb 11 → Feb 19",
          nightsLabel: "8",
          bookingSummary: {
            checkInOut: "Feb 11 → Feb 19",
            nights: "8",
            adr: "$1,016.75",
            total: "$10,130.67",
          },
          images: [
            {
              src: "https://www.fairmont-kea-lani.com/content/uploads/2022/06/6040-74.jpg",
              alt: "Garden View Suite — Fairmont Kea Lani",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "860 SF suite with large private lanai",
                "2 double beds plus sofa bed",
                "Guaranteed upgrade to Partial Ocean View Suite 2 Double Beds",
                "Lush garden view (upgraded to partial ocean view)",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "4th Night Free (6 paid nights, 2 free)",
                "Room category upgrade (subject to availability at check-in)",
                "Complimentary breakfast for two daily",
                "$100 hotel credit (F&B or spa)",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],

          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=C2T3LN&rate=3LN&hotel=1223&checkin=2027-02-11&checkout=2027-02-19&guests=2&children=0&rooms=1",
        },

        // ─── Room 3: Partial Ocean View Suite 2 Dbls → Guaranteed Upgrade to Ocean View Suite ───
        {
          badgeText: "🏨 Option 3",
          name: "Partial Ocean View Suite 2 Double Beds<br/>Guaranteed Upgrade to Ocean View Suite",
          subtitle:
            "860 SF · 2 Double Beds · Sofa Bed · Angled Ocean View<br/><strong style='color: var(--burgundy)'>4th Night Free · From $1,084.25/night</strong>",
          priceRate: "$1,084.25",
          grandTotalInclTaxes: "$10,771.71",
          stayCheckInOut: "Feb 11 → Feb 19",
          nightsLabel: "8",
          bookingSummary: {
            checkInOut: "Feb 11 → Feb 19",
            nights: "8",
            adr: "$1,084.25",
            total: "$10,771.71",
          },
          images: [
            {
              src: "https://www.fairmont-kea-lani.com/content/uploads/2022/03/Suite_King_View.jpg",
              alt: "Partial Ocean View Suite — Fairmont Kea Lani",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "860 SF suite with large private lanai",
                "2 double beds plus sofa bed",
                "Guaranteed upgrade to Ocean View Suite 2 Double Beds",
                "Angled ocean view (upgraded to full ocean view)",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "4th Night Free (6 paid nights, 2 free)",
                "Room category upgrade (subject to availability at check-in)",
                "Complimentary breakfast for two daily",
                "$100 hotel credit (F&B or spa)",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],

          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=U2T3LN&rate=3LN&hotel=1223&checkin=2027-02-11&checkout=2027-02-19&guests=2&children=0&rooms=1",
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════
    // HOTEL 2 — FOUR SEASONS MAUI AT WAILEA (EXPERIENCE MORE SPEND CREDIT)
    // ═══════════════════════════════════════════════════════════
    {
      hero: {
        imageUrl:
          "https://www.fourseasons.com/alt/img-opt/~65.3402/publish/content/dam/fourseasons/images/web/MAU/MAU_1492_aspect16x9.jpg",
        alt: "Four Seasons Maui at Wailea — Wailea, Maui",
        hotel: "Four Seasons Maui at Wailea",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Wailea, Maui, Hawaii &nbsp;|&nbsp; Ultra-Luxury Beachfront Resort",
      },

      rooms: [
        // ─── Room 1: Mountainside Room King Bed → Guaranteed Upgrade to Garden View 2 Queens ───
        {
          badgeText: "🏨 Option 1",
          name: "Mountainside Room King Bed<br/>Guaranteed Upgrade to Garden View Room 2 Queen Beds",
          subtitle:
            "600 SF · King Bed · Marble Bathroom · Mountain & Lanai View<br/><strong style='color: var(--burgundy)'>Experience More · From $1,280.63/night</strong>",
          priceRate: "$1,280.63",
          grandTotalInclTaxes: "$12,684.37",
          stayCheckInOut: "Feb 11 → Feb 19",
          nightsLabel: "8",
          bookingSummary: {
            checkInOut: "Feb 11 → Feb 19",
            nights: "8",
            adr: "$1,280.63",
            total: "$12,684.37",
          },
          images: [
            {
              src: "https://www.fourseasons.com/alt/img-opt/~65.3402/publish/content/dam/fourseasons/images/web/MAU/MAU_1492_aspect16x9.jpg",
              alt: "Mountainside Room — Four Seasons Maui at Wailea",
            },
            {
              src: "https://www.fourseasons.com/alt/img-opt/~65.3402/publish/content/dam/fourseasons/images/web/MAU/MAU_1479_aspect16x9.jpg",
              alt: "Mountainside Room Interior — Four Seasons Maui at Wailea",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "600 SF room with marble bathroom",
                "King bed (upgraded to Garden View Room with 2 Queen Beds)",
                "Deep soaking tub and double vanity",
                "Private lanai with mountain views",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "Guaranteed upgrade to Garden View Room with 2 Queen Beds",
                "Full breakfast for 2 daily",
                "$100 credit toward F&B, spa, or activities",
                "Additional $125 nightly resort credit ($1,000 for 8 nights)",
                "Complimentary basic internet",
                "Late check-out (subject to availability)",
              ],
            },
          ],

          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=I1KPG2&rate=PG2&hotel=1421&checkin=2027-02-11&checkout=2027-02-19&guests=2&children=0&rooms=1",
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════
    // HOTEL 3 — ANDAZ MAUI AT WAILEA (20% OFF)
    // ═══════════════════════════════════════════════════════════
    {
      hero: {
        imageUrl:
          "https://d2573qu6qrjt8c.cloudfront.net/355E0D5A082C4F7C8A30AFC8C91A603E/355E0D5A082C4F7C8A30AFC8C91A603E.JPEG",
        alt: "Andaz Maui at Wailea — Wailea, Maui",
        hotel: "Andaz Maui at Wailea",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Wailea, Maui, Hawaii &nbsp;|&nbsp; Contemporary Luxury Beach Resort",
      },

      rooms: [
        // ─── Room 1: 2 QN Resort View → Guaranteed Upgrade to Two Queen Partial Ocean View ───
        {
          badgeText: "🏨 Option 1",
          name: "Two Queen Resort View Room<br/>Guaranteed Upgrade to Partial Ocean View",
          subtitle:
            "380–420 SF · 2 Queen Beds · Resort View<br/><strong style='color: var(--burgundy)'>20% Off · From $772.50/night</strong>",
          priceRate: "$772.50",
          grandTotalInclTaxes: "$7,811.31",
          stayCheckInOut: "Feb 11 → Feb 19",
          nightsLabel: "8",
          bookingSummary: {
            checkInOut: "Feb 11 → Feb 19",
            nights: "8",
            adr: "$772.50",
            total: "$7,811.31",
          },
          images: [
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/355E0D5A082C4F7C8A30AFC8C91A603E/355E0D5A082C4F7C8A30AFC8C91A603E.JPEG",
              alt: "Two Queen Resort View Room — Andaz Maui at Wailea",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "380–420 SF room with resort view",
                "2 Queen beds",
                "Guaranteed upgrade to Two Queen Partial Ocean View Room",
                "42-inch TV, rain shower",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "20% off best available rate",
                "Guaranteed upgrade to Two Queen Partial Ocean View Room",
                "Full breakfast for 2 daily",
                "$100 resort credit",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],

          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=E2QO94&rate=1HZ&hotel=2706&checkin=2027-02-11&checkout=2027-02-19&guests=2&children=0&rooms=1",
        },

        // ─── Room 2: 2 QN Prt Ocn Vw → Guaranteed Upgrade to Two Queen Ocean View ───
        {
          badgeText: "🏨 Option 2",
          name: "Two Queen Partial Ocean View Room<br/>Guaranteed Upgrade to Ocean View",
          subtitle:
            "380–420 SF · 2 Queen Beds · Partial Ocean View<br/><strong style='color: var(--burgundy)'>20% Off · From $807.20/night</strong>",
          priceRate: "$807.20",
          grandTotalInclTaxes: "$8,140.88",
          stayCheckInOut: "Feb 11 → Feb 19",
          nightsLabel: "8",
          bookingSummary: {
            checkInOut: "Feb 11 → Feb 19",
            nights: "8",
            adr: "$807.20",
            total: "$8,140.88",
          },
          images: [
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/8A5F84CA27384878A5F12C787C412A43/8A5F84CA27384878A5F12C787C412A43.JPEG",
              alt: "Two Queen Partial Ocean View Room — Andaz Maui at Wailea",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "380–420 SF room with partial ocean view",
                "2 Queen beds",
                "Guaranteed upgrade to Two Queen Ocean View Room",
                "42-inch TV, rain shower",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "20% off best available rate",
                "Guaranteed upgrade to Two Queen Ocean View Room",
                "Full breakfast for 2 daily",
                "$100 resort credit",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],

          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=T2QO94&rate=1HZ&hotel=2706&checkin=2027-02-11&checkout=2027-02-19&guests=2&children=0&rooms=1",
        },
      ],
    },
  ],

};
