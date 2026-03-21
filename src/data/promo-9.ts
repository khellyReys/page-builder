import type { Promo } from "../types";
import { sharedContact } from "./contact";

export const promo9: Promo = {
  id: "promo-9",
  title: "Four Seasons London at Park Lane",
  client: "The Smith Family",
  dates: "June 2 – 6, 2026 | 4 Nights | 3 Room Options",
  thumbnailUrl:
    "https://www.whatahotel.com/content/hotels/1423/Four_Seasons_Park_Lane.jpg",
  portalTotalLabel: "Starting From",
  portalTotalValue: "£4,032.00",

  hero: {
    imageUrl:
      "https://www.whatahotel.com/content/hotels/1423/Four_Seasons_Park_Lane.jpg",
    alt: "Four Seasons Hotel London at Park Lane — Mayfair Luxury",
    hotel: "Four Seasons London at Park Lane",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Hamilton Place, Park Lane, London W1J 7DR &nbsp;|&nbsp; Mayfair Luxury",
  },

  offer: {
    heading: "WhataHotel! Exclusive Perks",
    description:
      "Book through WhataHotel! and enjoy <strong>exclusive complimentary perks</strong> at Four Seasons London at Park Lane, including <em>full breakfast for two daily</em>, a <em>$100 hotel credit</em>, room upgrade, and more &mdash; all on top of the best available rate.",
    pills: [
      "✔ Room Category Upgrade (subject to avail.)",
      "✔ Full Breakfast for 2 Daily",
      "✔ $100 Hotel Credit",
      "✔ Complimentary Basic Internet",
      "✔ Late Check-Out (subject to avail.)",
    ],
  },

  rooms: [
    // AGENT NOTE: 2 rate variants — SEASONAL OFFER £960 (B1KPR9) and BAR £1,200 (B1KPP6). Using lowest.
    // AGENT NOTE: Page totals (£4,032 / £5,040) reflect variable nightly pricing; "Starting at" rate shown.
    {
      badgeText: "🏨 Option 1",
      name: "Superior Room<br/>King Bed",
      subtitle:
        "King bed &nbsp;&middot;&nbsp; City or Park views &middot; 269 sq ft<br/>Full marble bathroom &middot; Luxury bedding<br/><strong style='color: var(--burgundy)'>Best Value — From £960/night</strong>",
      priceLabel: "WhataHotel! Rate",
      priceRate: "£960",
      priceStrike: "Standard: £1,200/night",
      priceTotal: "4-Night Total: £4,032.00",
      images: [
        {
          src: "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/164/1423/142/SuperiorRoom_KingBed_FourSeasonsLondon_(c)2024_HD_P.jpg",
          alt: "Superior Room King Bed — Four Seasons London at Park Lane",
        },
        {
          src: "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/164/1423/143/SuperiorRoom_KingBed_Bathroom_FourSeasonsLondon_(c)2024_HD_P.jpg",
          alt: "Superior Room King Bed Bathroom — Four Seasons London at Park Lane",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "King bed with luxury bedding",
            "269 sq ft — Floors 3–9",
            "City or Park views",
            "Full marble bathroom with premium amenities",
            "Seating area with armchair and table",
            "Free Wi-Fi · Twice daily housekeeping · Daily turndown",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room Category Upgrade (subject to availability at check-in)",
            "Full Breakfast for Two Daily",
            "$100 Hotel Credit",
            "Complimentary Basic Internet",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "4 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "Standard from £1,200/night (4-night total: £5,040) &mdash; WhataHotel! from £960/night (4-night total: £4,032) &mdash; you save <strong>£1,008</strong>",
        rightLabel: "4-Night Total (excl. taxes)",
        rightValue: "£4,032.00",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=B1KPR9&rate=PP6&hotel=1423&checkin=2026-06-02&checkout=2026-06-06&guests=2&children=0&rooms=1",
      bookLabel: "Book Superior King",
    },
    // AGENT NOTE: 2 rate variants — SEASONAL OFFER £1,000 (A2TPR9) and BAR £1,250 (A2TPP6). Using lowest.
    {
      badgeText: "🏨 Option 2",
      name: "Deluxe Room<br/>2 Twin Beds",
      subtitle:
        "Twin beds &nbsp;&middot;&nbsp; City views &middot; 376 sq ft<br/>Full marble bathroom &middot; Spacious layout<br/><strong style='color: var(--burgundy)'>Twin Comfort — From £1,000/night</strong>",
      priceLabel: "WhataHotel! Rate",
      priceRate: "£1,000",
      priceStrike: "Standard: £1,250/night",
      priceTotal: "4-Night Total: £4,200.00",
      images: [
        {
          src: "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/164/1423/241/DeluxeRoom_TwinBeds_FourSeasonsLondon_(c)2024_HD_P.jpg",
          alt: "Deluxe Room 2 Twin Beds — Four Seasons London at Park Lane",
        },
        {
          src: "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/164/1423/242/DeluxeRoom_TwinBeds_Bathroom_FourSeasonsLondon_(c)2024_HD_P.jpg",
          alt: "Deluxe Room 2 Twin Beds Bathroom — Four Seasons London at Park Lane",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "Two twin beds with luxury bedding",
            "376 sq ft — Floors 3–9",
            "City views with ample natural light",
            "Full marble bathroom with premium amenities",
            "Seating area with armchairs · Writing desk",
            "Free Wi-Fi · Twice daily housekeeping · Daily turndown",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room Category Upgrade (subject to availability at check-in)",
            "Full Breakfast for Two Daily",
            "$100 Hotel Credit",
            "Complimentary Basic Internet",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "4 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "Standard from £1,250/night (4-night total: £5,250) &mdash; WhataHotel! from £1,000/night (4-night total: £4,200) &mdash; you save <strong>£1,050</strong>",
        rightLabel: "4-Night Total (excl. taxes)",
        rightValue: "£4,200.00",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=A2TPR9&rate=PP6&hotel=1423&checkin=2026-06-02&checkout=2026-06-06&guests=2&children=0&rooms=1",
      bookLabel: "Book Deluxe Twin",
    },
    // AGENT NOTE: 2 rate variants — SEASONAL OFFER £1,000 (A1KPR9) and BAR £1,250 (A1KPP6). Using lowest.
    {
      badgeText: "🏨 Option 3",
      name: "Deluxe Room<br/>King Bed",
      subtitle:
        "King bed &nbsp;&middot;&nbsp; City views &middot; 376 sq ft<br/>Full marble bathroom &middot; Writing desk<br/><strong style='color: var(--burgundy)'>Deluxe Comfort — From £1,000/night</strong>",
      priceLabel: "WhataHotel! Rate",
      priceRate: "£1,000",
      priceStrike: "Standard: £1,250/night",
      priceTotal: "4-Night Total: £4,200.00",
      images: [
        {
          src: "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/164/1423/341/DeluxeRoom_KingBed_FourSeasonsLondon_(c)2024_HD_P.jpg",
          alt: "Deluxe Room King Bed — Four Seasons London at Park Lane",
        },
        {
          src: "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/164/1423/342/DeluxeRoom_KingBed_Bathroom_FourSeasonsLondon_(c)2024_HD_P.jpg",
          alt: "Deluxe Room King Bed Bathroom — Four Seasons London at Park Lane",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "King bed with luxury bedding",
            "376 sq ft — Floors 3–9",
            "City views with ample natural light",
            "Full marble bathroom with premium amenities",
            "Seating area with armchairs · Writing desk",
            "Free Wi-Fi · Twice daily housekeeping · Daily turndown",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "Room Category Upgrade (subject to availability at check-in)",
            "Full Breakfast for Two Daily",
            "$100 Hotel Credit",
            "Complimentary Basic Internet",
            "Late Check-Out (subject to availability)",
          ],
        },
      ],
      savings: {
        leftLabel:
          "4 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "Standard from £1,250/night (4-night total: £5,250) &mdash; WhataHotel! from £1,000/night (4-night total: £4,200) &mdash; you save <strong>£1,050</strong>",
        rightLabel: "4-Night Total (excl. taxes)",
        rightValue: "£4,200.00",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=A1KPR9&rate=PP6&hotel=1423&checkin=2026-06-02&checkout=2026-06-06&guests=2&children=0&rooms=1",
      bookLabel: "Book Deluxe King",
    },
  ],

  contact: sharedContact,
};
