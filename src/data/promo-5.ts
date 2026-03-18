import type { Promo } from "../types";
import { sharedContact } from "./contact";

export const promo5: Promo = {
  id: "promo-5",
  title: "New York City — Two Hotel Options",
  client: "",
  dates: "June 8 – 10, 2026 | 2 Nights | New York City",
  thumbnailUrl:
    "https://www.fourseasons.com/alt/img-opt/~70.1530.0,0000-313,5000-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/NYD/NYD_1575_original.jpg",
  portalTotalLabel: "Starting From",
  portalTotalValue: "$3,047.88",

  hotels: [
    // ── HOTEL 1: FOUR SEASONS NEW YORK DOWNTOWN ──────────────────────
    {
      hero: {
        imageUrl:
          "https://www.fourseasons.com/alt/img-opt/~70.1530.0,0000-313,5000-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/NYD/NYD_1575_original.jpg",
        alt: "Four Seasons Hotel New York Downtown",
        hotel: "Four Seasons Hotel New York Downtown",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>27 Barclay Street, Tribeca, New York &nbsp;|&nbsp; Four Seasons",
      },
      offer: {
        heading: "WhataHotel! Exclusive Perks &amp; Special Rates",
        description:
          "Book through WhataHotel! and enjoy <strong>exclusive complimentary perks</strong> plus <strong>up to 20% off</strong> at Four Seasons Hotel New York Downtown, including <em>daily breakfast for two</em>, a <em>$100 hotel credit</em>, and more &mdash; all on top of preferred rates.",
        pills: [
          "✔ Up to 20% Off",
          "✔ Breakfast for 2 Daily",
          "✔ $100 Hotel Credit",
          "✔ Room Upgrade (subject to avail.)",
          "✔ Free Wi-Fi",
          "✔ Late Check-Out",
        ],
      },
      rooms: [
        {
          badgeText: "🏨 Hotel Option 1 — Room 1",
          name: "Manhattan Room<br/>2 Double Beds",
          subtitle:
            "500 sq ft (46 m²) · 2 Double Beds · City View<br/>Marble Bathroom · Living Area with Sofa<br/><strong style='color: var(--burgundy)'>Best Value — Starting from $1,325/night</strong>",
          priceLabel: "Special Offer Rate",
          priceRate: "$1,325",
          priceStrike: "Standard: $1,472.50/night",
          priceTotal: "2-Night Total: $3,047.88",
          images: [
            {
              src: "https://www.fourseasons.com/alt/img-opt/~70..0,0000-297,4869-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/NYD/NYD_1873_original.jpg",
              alt: "Manhattan Room — Bedroom",
            },
            {
              src: "https://www.fourseasons.com/alt/img-opt/~70..0,0000-105,2802-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/NYD/NYD_1865_original.jpg",
              alt: "Manhattan Room — Marble Bathroom",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "500 sq ft with 2 double beds",
                "City view from floor-to-ceiling windows",
                "Living area with sofa and coffee table",
                "Marble bathroom with free-standing oval tub",
                "55-inch TV & premium WiFi",
                "Twice-daily housekeeping & turndown service",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Complimentary Full Breakfast for Two Daily",
                "Room Category Upgrade at Check-In (if available)",
                "$100 Hotel Credit (food, beverage, or spa)",
                "Complimentary Wi-Fi",
                "Late Check-Out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel: "2 Nights &nbsp;|&nbsp; <span>Special Offer Rate</span>",
            leftSub:
              "Standard rate: $1,472.50 × 2 = $3,386.39 — you save <strong>$338.51</strong> with the WhataHotel! special offer",
            rightLabel: "2-Night Total (incl. taxes)",
            rightValue: "$3,047.88",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/showRates.cfm?hotelID=3103&checkIn=2026-06-08&checkOut=2026-06-10&guests=2&children=0&rooms=1",
          bookLabel: "Book Manhattan Room — 2 Doubles",
        },
        {
          badgeText: "🏨 Hotel Option 1 — Room 2",
          name: "Manhattan Room<br/>1 King Bed",
          subtitle:
            "425 sq ft (39 m²) · 1 King Bed · City View<br/>Floor 8 · Marble Bathroom · Premium Amenities",
          priceLabel: "Special Offer Rate",
          priceRate: "$1,325",
          priceStrike: "Standard: $1,472.50/night",
          priceTotal: "2-Night Total: $3,047.88",
          images: [
            {
              src: "https://www.fourseasons.com/alt/img-opt/~65.1701.0,0000-246,9207-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/NYD/NYD_1871_original.jpg",
              alt: "Manhattan Room King — Bedroom",
            },
            {
              src: "https://www.fourseasons.com/alt/img-opt/~70..0,0000-105,2802-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/NYD/NYD_1865_original.jpg",
              alt: "Manhattan Room King — Marble Bathroom",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "425 sq ft with 1 king bed",
                "City view from floor 8",
                "Living area with sofa and armchair",
                "Marble bathroom with free-standing oval tub",
                "55-inch TV & premium WiFi",
                "Twice-daily housekeeping & turndown service",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Complimentary Full Breakfast for Two Daily",
                "Room Category Upgrade at Check-In (if available)",
                "$100 Hotel Credit (food, beverage, or spa)",
                "Complimentary Wi-Fi",
                "Late Check-Out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel: "2 Nights &nbsp;|&nbsp; <span>Special Offer Rate</span>",
            leftSub:
              "Standard rate: $1,472.50 × 2 = $3,386.39 — you save <strong>$338.51</strong> with the WhataHotel! special offer",
            rightLabel: "2-Night Total (incl. taxes)",
            rightValue: "$3,047.88",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/showRates.cfm?hotelID=3103&checkIn=2026-06-08&checkOut=2026-06-10&guests=2&children=0&rooms=1",
          bookLabel: "Book Manhattan Room — King",
        },
        {
          badgeText: "🏨 Hotel Option 1 — Room 3",
          name: "Soho Premier Room<br/>1 King Bed",
          subtitle:
            "425 sq ft (39 m²) · 1 King Bed · City View<br/>Floor 10 · Marble Bathroom · Living Area",
          priceLabel: "Special Offer Rate",
          priceRate: "$1,370",
          priceStrike: "Standard: $1,522.00/night",
          priceTotal: "2-Night Total: $3,151.14",
          images: [
            {
              src: "https://www.fourseasons.com/alt/img-opt/~65.1701.0,0000-278,4593-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/NYD/NYD_1874_original.jpg",
              alt: "Soho Premier Room — Bedroom",
            },
            {
              src: "https://www.fourseasons.com/alt/img-opt/~70..0,0000-156,2500-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/NYD/NYD_1868_original.jpg",
              alt: "Soho Premier Room — City View",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "425 sq ft on floor 10 with city views",
                "1 King bed with premium linens",
                "Living area with sofa and work desk",
                "Marble bathroom with separate shower",
                "55-inch TV & premium WiFi",
                "Twice-daily housekeeping & turndown service",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Complimentary Full Breakfast for Two Daily",
                "Room Category Upgrade at Check-In (if available)",
                "$100 Hotel Credit (food, beverage, or spa)",
                "Complimentary Wi-Fi",
                "Late Check-Out (subject to availability)",
              ],
            },
          ],
          savings: {
            leftLabel: "2 Nights &nbsp;|&nbsp; <span>Special Offer Rate</span>",
            leftSub:
              "Standard rate: $1,522.00 × 2 = $3,500.60 — you save <strong>$349.46</strong> with the WhataHotel! special offer",
            rightLabel: "2-Night Total (incl. taxes)",
            rightValue: "$3,151.14",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/showRates.cfm?hotelID=3103&checkIn=2026-06-08&checkOut=2026-06-10&guests=2&children=0&rooms=1",
          bookLabel: "Book Soho Premier Room — King",
        },
      ],
    },

    // ── HOTEL 2: WALDORF ASTORIA NEW YORK ────────────────────────────
    {
      hero: {
        imageUrl:
          "https://www.hilton.com/im/en/NYCWAWA/22138111/one-bedroom-suite-living-space-waldorf-astoria-new-york.jpg",
        alt: "Waldorf Astoria New York — Luxury Living Space",
        hotel: "Waldorf Astoria New York",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>301 Park Avenue, Midtown Manhattan, New York &nbsp;|&nbsp; Waldorf Astoria Hotels &amp; Resorts",
      },
      offer: {
        heading: "WhataHotel! Exclusive Perks",
        description:
          "Book through WhataHotel! and enjoy <strong>exclusive complimentary perks</strong> at the iconic Waldorf Astoria New York, including <em>daily full breakfast</em>, a <em>$100 food &amp; beverage credit</em>, <em>double Hilton Honors points</em>, and more &mdash; all included with your booking.",
        pills: [
          "✔ Breakfast Daily",
          "✔ $100 F&B Credit",
          "✔ Room Upgrade (subject to avail.)",
          "✔ Free Wi-Fi",
          "✔ Late Check-Out",
          "✔ 2x Hilton Honors Points",
        ],
      },
      rooms: [
        {
          badgeText: "🏨 Hotel Option 2 — Room 1",
          name: "King Room",
          subtitle:
            "475 sq ft (44 m²) · 1 King Bed · Interior View<br/>Soaking Tub · Separate W/C · Art Deco Luxury<br/><strong style='color: var(--burgundy)'>Best Value — WhataHotel! Rate from $1,795/night</strong>",
          priceLabel: "WhataHotel! Rate",
          priceRate: "$1,795",
          priceStrike: "",
          priceTotal: "2-Night Total: $4,126.88",
          images: [
            {
              src: "https://www.hilton.com/im/en/NYCWAWA/22137478/king-room-waldorf-astoria-new-york.jpg",
              alt: "King Room — Bedroom",
            },
            {
              src: "https://www.hilton.com/im/en/NYCWAWA/22137482/king-room-bathroom-waldorf-astoria-new-york.jpg",
              alt: "King Room — Bathroom",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "475 sq ft with 1 king bed",
                "Sitting area with desk",
                "Spacious vanity and large soaking tub",
                "Separate W/C with robes provided",
                "Art Deco-inspired luxury décor",
                "Newly renovated — reopened 2025",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Complimentary Full Breakfast Daily",
                "Room Category Upgrade at Check-In (if available)",
                "$100 Food & Beverage Credit",
                "Complimentary Wi-Fi",
                "Late Check-Out (subject to availability)",
                "Double Hilton Honors Rewards Points",
              ],
            },
          ],
          savings: {
            leftLabel:
              "2 Nights &nbsp;|&nbsp; <span>WhataHotel! Rate with Perks</span>",
            leftSub:
              "Includes breakfast, $100 F&B credit, room upgrade, Wi-Fi, late checkout &amp; 2x Hilton Honors points",
            rightLabel: "2-Night Total (incl. taxes)",
            rightValue: "$4,126.88",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/showRates.cfm?hotelID=2419&checkIn=2026-06-08&checkOut=2026-06-10&guests=2&children=0&rooms=1",
          bookLabel: "Book King Room — Waldorf Astoria",
        },
        {
          badgeText: "🏨 Hotel Option 2 — Room 2",
          name: "Deluxe King Room",
          subtitle:
            "575 sq ft (53 m²) · 1 King Bed · Sitting Area with Couch<br/>Soaking Tub &amp; Large Shower · Separate W/C",
          priceLabel: "WhataHotel! Rate",
          priceRate: "$1,895",
          priceStrike: "",
          priceTotal: "2-Night Total: $4,356.40",
          images: [
            {
              src: "https://www.hilton.com/im/en/NYCWAWA/22137511/deluxe-two-double-bedroom-waldorf-astoria-new-york.jpg",
              alt: "Deluxe King Room — Bedroom",
            },
            {
              src: "https://www.hilton.com/im/en/NYCWAWA/22137513/deluxe-two-double-bedroom-living-space-waldorf-astoria-new-york.jpg",
              alt: "Deluxe King Room — Living Area",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "575 sq ft with 1 king bed",
                "Sitting area with couch and armchair",
                "Desk, soaking tub, and large walk-in shower",
                "Separate W/C with robes provided",
                "Art Deco-inspired luxury décor",
                "Newly renovated — reopened 2025",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Complimentary Full Breakfast Daily",
                "Room Category Upgrade at Check-In (if available)",
                "$100 Food & Beverage Credit",
                "Complimentary Wi-Fi",
                "Late Check-Out (subject to availability)",
                "Double Hilton Honors Rewards Points",
              ],
            },
          ],
          savings: {
            leftLabel:
              "2 Nights &nbsp;|&nbsp; <span>WhataHotel! Rate with Perks</span>",
            leftSub:
              "Includes breakfast, $100 F&B credit, room upgrade, Wi-Fi, late checkout &amp; 2x Hilton Honors points",
            rightLabel: "2-Night Total (incl. taxes)",
            rightValue: "$4,356.40",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/showRates.cfm?hotelID=2419&checkIn=2026-06-08&checkOut=2026-06-10&guests=2&children=0&rooms=1",
          bookLabel: "Book Deluxe King Room — Waldorf Astoria",
        },
        {
          badgeText: "🏨 Hotel Option 2 — Suite 1",
          name: "Junior Suite<br/>1 King Bed",
          subtitle:
            "610 sq ft (56 m²) · 1 King Bed · Large Sitting Area<br/>Soaking Tub &amp; Shower · Separate W/C · Robes<br/><strong style='color: var(--burgundy)'>Premium Suite — Spacious Living</strong>",
          priceLabel: "WhataHotel! Rate",
          priceRate: "$1,995",
          priceStrike: "",
          priceTotal: "2-Night Total: $4,585.92",
          images: [
            {
              src: "https://www.hilton.com/im/en/NYCWAWA/22163020/junior-suite-bed-wa-new-york-edit.jpg",
              alt: "Junior Suite — King Bed",
            },
            {
              src: "https://www.hilton.com/im/en/NYCWAWA/22109729/junior-suite-living-space-waldorf-astoria-new-york.jpg",
              alt: "Junior Suite — Living Space",
            },
          ],
          features: [
            {
              title: "Suite Features",
              icon: "door-open",
              items: [
                "610 sq ft with 1 king bed",
                "Large sitting area with couch and armchair",
                "Desk, soaking tub, and large walk-in shower",
                "Separate W/C with luxury robes",
                "Art Deco-inspired suite design",
                "Newly renovated — reopened 2025",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Complimentary Full Breakfast Daily",
                "Room Category Upgrade at Check-In (if available)",
                "$100 Food & Beverage Credit",
                "Complimentary Wi-Fi",
                "Late Check-Out (subject to availability)",
                "Double Hilton Honors Rewards Points",
              ],
            },
          ],
          savings: {
            leftLabel:
              "2 Nights &nbsp;|&nbsp; <span>WhataHotel! Rate with Perks</span>",
            leftSub:
              "Includes breakfast, $100 F&B credit, room upgrade, Wi-Fi, late checkout &amp; 2x Hilton Honors points",
            rightLabel: "2-Night Total (incl. taxes)",
            rightValue: "$4,585.92",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/showRates.cfm?hotelID=2419&checkIn=2026-06-08&checkOut=2026-06-10&guests=2&children=0&rooms=1",
          bookLabel: "Book Junior Suite — Waldorf Astoria",
        },
      ],
    },
  ],

  contact: sharedContact,
};
