import type { Promo } from "../types";
import { sharedContact } from "./contact";

export const promo10: Promo = {
  id: "promo-10",
  title: "Four Seasons Puerto Rico — Suites & Residences",
  client: "",
  dates: "November 16 – 20, 2026 | 4 Nights | 3 Suite & Residence Options",
  thumbnailUrl:
    "https://www.whatahotel.com/content/hotels/6869/fs_puerto_rico.jpg",
  portalTotalLabel: "Starting From",
  portalTotalValue: "$6,897.52",

  hero: {
    imageUrl:
      "https://www.whatahotel.com/content/hotels/6869/fs_puerto_rico.jpg",
    alt: "Four Seasons Resort Puerto Rico — Oceanfront Luxury",
    hotel: "Four Seasons Resort Puerto Rico",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>State Road 187 Km 4.2, San Juan, Puerto Rico &nbsp;|&nbsp; Oceanfront Resort",
  },

  offer: {
    heading: "WhataHotel! Exclusive Perks",
    description:
      "Book through WhataHotel! and enjoy <strong>exclusive complimentary perks</strong> at Four Seasons Resort Puerto Rico, including <em>full breakfast for two daily</em>, a <em>resort credit</em>, room upgrade, and more &mdash; all on top of the best available rate.",
    pills: [
      "✔ Room Category Upgrade (subject to avail.)",
      "✔ Full Breakfast for 2 Daily",
      "✔ A Resort Credit",
      "✔ Complimentary Basic Internet",
      "✔ Late Check-Out (subject to avail.)",
    ],
  },

  rooms: [
    // ── Suite 1 — Garden View One Bedroom Suite King ──────────────
    // AGENT NOTE: 3 rate variants — ADVANCE PURCHASE $1,483 (S1KPP2), ROOM RATE $1,853.75 (S1KPP6), EXP MORE SPEND $1,853.75 (S1KPP1). Using lowest.
    {
      badgeText: "🏨 Suite 1",
      name: "Garden View<br/>One Bedroom Suite King",
      subtitle:
        "King bed &nbsp;&middot;&nbsp; Garden views &middot; 1,295 sq ft<br/>One-bedroom suite &middot; Spacious terrace &middot; Powder room<br/><strong style='color: var(--burgundy)'>Best Value Suite — From $1,483/night</strong>",
      priceLabel: "WhataHotel! Rate",
      priceRate: "$1,483",
      priceStrike: "Standard: $1,853.75/night",
      priceTotal: "4-Night Total: $6,897.52",
      images: [
        {
          src: "https://www.fourseasons.com/alt/img-opt/~70..0,0000-165,7500-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/PBB/PBB_039_original.jpg",
          alt: "Garden View One Bedroom Suite — Four Seasons Puerto Rico",
        },
        // AGENT NOTE: Only 1 image found on page for this room type
        {
          src: "https://www.whatahotel.com/img/paceholder.jpg",
          alt: "Garden View One Bedroom Suite — Interior",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "King bed with luxury bedding",
            "1,295 sq ft — Ground floor",
            "Garden views with spacious terrace",
            "Separate living area with powder room",
            "Premium internet · Twice daily housekeeping",
            "Max occupancy: 3 Adults or 2 Adults + 2 Children",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room Category Upgrade (subject to availability at check-in)",
            "Full Breakfast for Two Daily",
            "A Resort Credit",
            "Complimentary Basic Internet",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "4 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "Standard from $1,853.75/night (4-night total: $8,513.99) &mdash; WhataHotel! from $1,483/night (4-night total: $6,897.52) &mdash; you save <strong>$1,616.47</strong>",
        rightLabel: "4-Night Total (incl. taxes)",
        rightValue: "$6,897.52",
      },
      comparison: [
        {
          label: "Nightly Rate",
          standard: "$1,853.75/night",
          whatahotel: "$1,483/night",
        },
        {
          label: "4-Night Total",
          standard: "$8,513.99",
          whatahotel: "$6,897.52",
        },
        {
          label: "You Save",
          standard: "",
          whatahotel: "$1,616.47",
          highlight: true,
        },
      ],
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=S1KPP2&rate=PP6&hotel=6869&checkin=2026-11-16&checkout=2026-11-20&guests=2&children=0&rooms=1",
      bookLabel: "Book Garden View Suite",
    },

    // ── Suite 2 — Ocean Front One Bedroom Suite King ──────────────
    // AGENT NOTE: 3 rate variants — ADVANCE PURCHASE $1,883 (FSKPP2), ROOM RATE $2,353.75 (FSKPP6), EXP MORE SPEND $2,353.75 (FSKPP1). Using lowest.
    {
      badgeText: "🏨 Suite 2",
      name: "Ocean Front<br/>One Bedroom Suite King",
      subtitle:
        "King bed &nbsp;&middot;&nbsp; Ocean views &middot; 1,255 sq ft<br/>One-bedroom suite &middot; Spacious terrace &middot; Powder room<br/><strong style='color: var(--burgundy)'>Oceanfront Suite — From $1,883/night</strong>",
      priceLabel: "WhataHotel! Rate",
      priceRate: "$1,883",
      priceStrike: "Standard: $2,353.75/night",
      priceTotal: "4-Night Total: $8,641.52",
      images: [
        {
          src: "https://www.fourseasons.com/alt/img-opt/~70..0,0000-95,4063-1499,0000-843,1875/publish/content/dam/fourseasons/images/web/PBB/PBB_037_original.jpg",
          alt: "Ocean Front One Bedroom Suite — Four Seasons Puerto Rico",
        },
        // AGENT NOTE: Only 1 image found on page for this room type
        {
          src: "https://www.whatahotel.com/img/paceholder.jpg",
          alt: "Ocean Front One Bedroom Suite — Interior",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "King bed with luxury bedding",
            "1,255 sq ft — Ground floor",
            "Ocean views with spacious terrace",
            "Separate living area with powder room",
            "Premium internet · Twice daily housekeeping",
            "Max occupancy: 3 Adults or 2 Adults + 2 Children",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room Category Upgrade (subject to availability at check-in)",
            "Full Breakfast for Two Daily",
            "A Resort Credit",
            "Complimentary Basic Internet",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "4 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "Standard from $2,353.75/night (4-night total: $10,693.99) &mdash; WhataHotel! from $1,883/night (4-night total: $8,641.52) &mdash; you save <strong>$2,052.47</strong>",
        rightLabel: "4-Night Total (incl. taxes)",
        rightValue: "$8,641.52",
      },
      comparison: [
        {
          label: "Nightly Rate",
          standard: "$2,353.75/night",
          whatahotel: "$1,883/night",
        },
        {
          label: "4-Night Total",
          standard: "$10,693.99",
          whatahotel: "$8,641.52",
        },
        {
          label: "You Save",
          standard: "",
          whatahotel: "$2,052.47",
          highlight: true,
        },
      ],
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=FSKPP2&rate=PP6&hotel=6869&checkin=2026-11-16&checkout=2026-11-20&guests=2&children=0&rooms=1",
      bookLabel: "Book Oceanfront Suite",
    },

    // ── Residence 1 — Three Bedroom Oceanfront Residence ──────────
    // AGENT NOTE: 3 rate variants — ADVANCE PURCHASE $8,998 (B4TPP2), ROOM RATE $11,247.50 (B4TPP6), EXP MORE SPEND $11,247.50 (B4TPP1). Using lowest.
    {
      badgeText: "🏨 Residence 1",
      name: "Three Bedroom<br/>Oceanfront Residence",
      subtitle:
        "3 bedrooms &nbsp;&middot;&nbsp; Ocean views &middot; 4,291 sq ft<br/>3 full bathrooms &middot; Spacious terrace &middot; Powder room<br/><strong style='color: var(--burgundy)'>Luxury Residence — From $8,998/night</strong>",
      priceLabel: "WhataHotel! Rate",
      priceRate: "$8,998",
      priceStrike: "Standard: $11,247.50/night",
      priceTotal: "4-Night Total: $39,662.92",
      images: [
        {
          src: "https://www.fourseasons.com/alt/img-opt/~70..0,0000-156,2500-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/PBB/PBB_097_original.jpg",
          alt: "Three Bedroom Oceanfront Residence — Four Seasons Puerto Rico",
        },
        {
          src: "https://www.fourseasons.com/alt/img-opt/~70..0,0000-156,2474-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/PBB/PBB_101_original.jpg",
          alt: "Three Bedroom Oceanfront Residence — Interior",
        },
      ],
      features: [
        {
          title: "Residence Features",
          icon: "door-open",
          items: [
            "3 bedrooms with luxury bedding",
            "4,291 sq ft — Ground floor",
            "Ocean views with spacious terrace",
            "3 full bathrooms plus powder room",
            "Premium internet · Twice daily housekeeping",
            "Max occupancy: 8 Adults or 5 Adults + 2 Children",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room Category Upgrade (subject to availability at check-in)",
            "Full Breakfast for Two Daily",
            "A Resort Credit",
            "Complimentary Basic Internet",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "4 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "Standard from $11,247.50/night (4-night total: $49,470.74) &mdash; WhataHotel! from $8,998/night (4-night total: $39,662.92) &mdash; you save <strong>$9,807.82</strong>",
        rightLabel: "4-Night Total (incl. taxes)",
        rightValue: "$39,662.92",
      },
      comparison: [
        {
          label: "Nightly Rate",
          standard: "$11,247.50/night",
          whatahotel: "$8,998/night",
        },
        {
          label: "4-Night Total",
          standard: "$49,470.74",
          whatahotel: "$39,662.92",
        },
        {
          label: "You Save",
          standard: "",
          whatahotel: "$9,807.82",
          highlight: true,
        },
      ],
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=B4TPP2&rate=PP6&hotel=6869&checkin=2026-11-16&checkout=2026-11-20&guests=2&children=0&rooms=1",
      bookLabel: "Book 3BR Residence",
    },
  ],

  contact: sharedContact,
};
