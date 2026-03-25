import type { Promo } from "../types";
import { sharedContact } from "./contact";

// AGENT NOTE: Multi-hotel Maui proposal — 3 hotels, 6 room/rate entries.
// Hotel 1: Fairmont Kea Lani (1223) — 4TH NIGHT FREE rate (3LN), 3 rooms
// Hotel 2: Four Seasons Maui at Wailea (1421) — EXPERIENCE MORE SPEND CREDIT rate (PG2), 1 room
// Hotel 3: Andaz Maui at Wailea (2706) — HY WhataHotel! 20 PCT rate (1HZ), 2 rooms
// Dates: Feb 11–19, 2027 (8 nights). Currency: USD.

export const promo11: Promo = {
  id: "promo-11",
  createdAt: "2026-03-25T18:00:00Z",
  mastheadEyebrow: "Travel Proposal",
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
      offer: {
        heading: "WhataHotel! Exclusive",
        description:
          "Book through WhataHotel! and enjoy exclusive complimentary perks at <strong>Fairmont Kea Lani</strong> — including a guaranteed room upgrade, daily breakfast for 2, $100 hotel credit, and more.",
        pills: [
          "✔ Room Category Upgrade (subject to availability)",
          "✔ Complimentary Breakfast for Two Daily",
          "✔ $100 Hotel Credit (F&B or Spa)",
          "✔ Complimentary WiFi",
          "✔ Late Check-Out (subject to availability)",
        ],
      },
      rooms: [
        // ─── Room 1: Fairmont Suite 2 Dbls → Guaranteed Upgrade to Garden View Suite ───
        {
          badgeText: "🏨 Option 1",
          name: "Fairmont Suite 2 Double Beds<br/>Guaranteed Upgrade to Garden View Suite",
          subtitle:
            "860 SF · 2 Double Beds · Sofa Bed · Large Private Lanai<br/><strong style='color: var(--burgundy)'>4th Night Free · From $893/night</strong>",
          priceLabel: "Per night (ADR incl. free nights)",
          priceRate: "$893",
          priceStrike: "",
          priceTotal: "8-Night Total: $7,144",
          stayTotalExclAmount: "$7,144",
          stayTotalExclSub: "8 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "$8,955.44",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
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
              title: "WhataHotel! Exclusive Perks",
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
          savings: {
            leftLabel:
              "8 Nights &nbsp;|&nbsp; <span>4th Night Free Rate</span>",
            leftSub:
              "WhataHotel! rate: $893/night (ADR) &times; 8 = <strong>$7,144</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$8,955.44</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "$8,955.44",
          },
          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=C2D3LN&rate=3LN&hotel=1223&checkin=2027-02-11&checkout=2027-02-19&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Fairmont Suite (4th Night Free)",
        },

        // ─── Room 2: Garden View Suite 2 Dbls → Guaranteed Upgrade to Partial Ocean View Suite ───
        {
          badgeText: "🏨 Option 2",
          name: "Garden View Suite 2 Double Beds<br/>Guaranteed Upgrade to Partial Ocean View Suite",
          subtitle:
            "860 SF · 2 Double Beds · Sofa Bed · Lush Garden View<br/><strong style='color: var(--burgundy)'>4th Night Free · From $1,016.75/night</strong>",
          priceLabel: "Per night (ADR incl. free nights)",
          priceRate: "$1,016.75",
          priceStrike: "",
          priceTotal: "8-Night Total: $8,134",
          stayTotalExclAmount: "$8,134",
          stayTotalExclSub: "8 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "$10,130.67",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
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
              title: "WhataHotel! Exclusive Perks",
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
          savings: {
            leftLabel:
              "8 Nights &nbsp;|&nbsp; <span>4th Night Free Rate</span>",
            leftSub:
              "WhataHotel! rate: $1,016.75/night (ADR) &times; 8 = <strong>$8,134</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$10,130.67</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "$10,130.67",
          },
          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=C2T3LN&rate=3LN&hotel=1223&checkin=2027-02-11&checkout=2027-02-19&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Garden View Suite (4th Night Free)",
        },

        // ─── Room 3: Partial Ocean View Suite 2 Dbls → Guaranteed Upgrade to Ocean View Suite ───
        {
          badgeText: "🏨 Option 3",
          name: "Partial Ocean View Suite 2 Double Beds<br/>Guaranteed Upgrade to Ocean View Suite",
          subtitle:
            "860 SF · 2 Double Beds · Sofa Bed · Angled Ocean View<br/><strong style='color: var(--burgundy)'>4th Night Free · From $1,084.25/night</strong>",
          priceLabel: "Per night (ADR incl. free nights)",
          priceRate: "$1,084.25",
          priceStrike: "",
          priceTotal: "8-Night Total: $8,674",
          stayTotalExclAmount: "$8,674",
          stayTotalExclSub: "8 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "$10,771.71",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
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
              title: "WhataHotel! Exclusive Perks",
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
          savings: {
            leftLabel:
              "8 Nights &nbsp;|&nbsp; <span>4th Night Free Rate</span>",
            leftSub:
              "WhataHotel! rate: $1,084.25/night (ADR) &times; 8 = <strong>$8,674</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$10,771.71</strong>",
            rightLabel: "(incl. taxes)",
            rightValue: "$10,771.71",
          },
          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=U2T3LN&rate=3LN&hotel=1223&checkin=2027-02-11&checkout=2027-02-19&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Partial Ocean View Suite (4th Night Free)",
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
      offer: {
        heading: "WhataHotel! Exclusive",
        description:
          "Book through WhataHotel! and enjoy exclusive complimentary perks at <strong>Four Seasons Maui at Wailea</strong> — including a room upgrade, daily breakfast for 2, $100 credit, <strong>plus an additional $125 nightly resort credit ($1,000 total for 8 nights)</strong>.",
        pills: [
          "✔ Room Upgrade (subject to availability)",
          "✔ Full Breakfast for 2 Daily",
          "✔ $100 Credit (F&B, Spa, or Activities)",
          "✔ Additional $125 Nightly Resort Credit ($1,000 for 8 Nights)",
          "✔ Complimentary Basic Internet",
          "✔ Late Check-Out (subject to availability)",
        ],
      },
      rooms: [
        // ─── Room 1: Mountainside Room King Bed → Guaranteed Upgrade to Garden View 2 Queens ───
        {
          badgeText: "🏨 Option 1",
          name: "Mountainside Room King Bed<br/>Guaranteed Upgrade to Garden View Room 2 Queen Beds",
          subtitle:
            "600 SF · King Bed · Marble Bathroom · Mountain & Lanai View<br/><strong style='color: var(--burgundy)'>Experience More · From $1,280.63/night</strong>",
          priceLabel: "Per night",
          priceRate: "$1,280.63",
          priceStrike: "",
          priceTotal: "8-Night Total: $10,245.04",
          stayTotalExclAmount: "$10,245.04",
          stayTotalExclSub: "8 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "$12,684.37",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
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
              title: "WhataHotel! Exclusive Perks",
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
          savings: {
            leftLabel:
              "8 Nights &nbsp;|&nbsp; <span>Experience More Spend Credit Rate</span>",
            leftSub:
              "WhataHotel! rate: $1,280.63/night &times; 8 = <strong>$10,245.04</strong> (excl. taxes) &mdash; Grand total incl. taxes &amp; fees: <strong>$12,684.37</strong> &mdash; Plus $1,000 resort credit",
            rightLabel: "(incl. taxes)",
            rightValue: "$12,684.37",
          },
          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=I1KPG2&rate=PG2&hotel=1421&checkin=2027-02-11&checkout=2027-02-19&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Mountainside Room (Experience More)",
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
      offer: {
        heading: "WhataHotel! Exclusive",
        description:
          "Book through WhataHotel! and enjoy exclusive complimentary perks at <strong>Andaz Maui at Wailea</strong> — including a room upgrade, daily breakfast for 2, $100 resort credit, and <strong>20% off best available rates</strong>.",
        pills: [
          "✔ 20% Off Best Available Rate",
          "✔ Room Upgrade Within 48 Hours of Booking",
          "✔ Full Breakfast for 2 Daily",
          "✔ $100 Resort Credit",
          "✔ Complimentary WiFi",
          "✔ Late Check-Out (subject to availability)",
        ],
      },
      rooms: [
        // ─── Room 1: 2 QN Resort View → Guaranteed Upgrade to Two Queen Partial Ocean View ───
        {
          badgeText: "🏨 Option 1",
          name: "Two Queen Resort View Room<br/>Guaranteed Upgrade to Partial Ocean View",
          subtitle:
            "380–420 SF · 2 Queen Beds · Resort View<br/><strong style='color: var(--burgundy)'>20% Off · From $772.50/night</strong>",
          priceLabel: "Per night (20% off)",
          priceRate: "$772.50",
          priceStrike: "Standard: $965.63/night",
          priceTotal: "8-Night Total: $6,180",
          stayTotalExclAmount: "$6,180",
          stayTotalExclSub: "8 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "$7,811.31",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
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
              title: "WhataHotel! Exclusive Perks",
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
          savings: {
            leftLabel:
              "8 Nights &nbsp;|&nbsp; <span>WhataHotel! 20% Off Rate</span>",
            leftSub:
              "Standard rate: $965.63/night &times; 8 = $7,725.04 &mdash; WhataHotel! rate: $772.50/night &times; 8 = $6,180 &mdash; you save <strong>$1,834.09</strong> (incl. taxes)",
            rightLabel: "(incl. taxes)",
            rightValue: "$7,811.31",
          },
          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=E2QO94&rate=1HZ&hotel=2706&checkin=2027-02-11&checkout=2027-02-19&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Resort View (20% Off)",
        },

        // ─── Room 2: 2 QN Prt Ocn Vw → Guaranteed Upgrade to Two Queen Ocean View ───
        {
          badgeText: "🏨 Option 2",
          name: "Two Queen Partial Ocean View Room<br/>Guaranteed Upgrade to Ocean View",
          subtitle:
            "380–420 SF · 2 Queen Beds · Partial Ocean View<br/><strong style='color: var(--burgundy)'>20% Off · From $807.20/night</strong>",
          priceLabel: "Per night (20% off)",
          priceRate: "$807.20",
          priceStrike: "Standard: $1,009/night",
          priceTotal: "8-Night Total: $6,457.60",
          stayTotalExclAmount: "$6,457.60",
          stayTotalExclSub: "8 Nights · excl. taxes & fees",
          grandTotalInclTaxes: "$8,140.88",
          grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
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
              title: "WhataHotel! Exclusive Perks",
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
          savings: {
            leftLabel:
              "8 Nights &nbsp;|&nbsp; <span>WhataHotel! 20% Off Rate</span>",
            leftSub:
              "Standard rate: $1,009/night &times; 8 = $8,072 &mdash; WhataHotel! rate: $807.20/night &times; 8 = $6,457.60 &mdash; you save <strong>$1,916.40</strong> (incl. taxes)",
            rightLabel: "(incl. taxes)",
            rightValue: "$8,140.88",
          },
          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=T2QO94&rate=1HZ&hotel=2706&checkin=2027-02-11&checkout=2027-02-19&guests=2&children=0&rooms=1",
          bookLabel: "Book Now — Partial Ocean View (20% Off)",
        },
      ],
    },
  ],

  pricingFootnote:
    "All nightly rates shown are per room, per night. When the total rate exceeds the sum of nightly rates, hotel taxes are included. Grand totals include applicable taxes, resort fees, and service charges. Rates subject to availability. Free cancellation available — see individual booking pages for deadlines.",

  contact: sharedContact,
};
