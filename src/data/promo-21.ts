import type { Promo } from "../types";

// AGENT NOTE: 3 rate variants per room — "ONE MORE NIGHT / 3RD NIGHT FREE" (lowest), standard WhataHotel!, and flexible.
// Using lowest rate (3rd Night Free) as bookUrl; standard WhataHotel! rate as priceStrike.
// Totals shown on booking page include taxes/fees (~10.3% above ADR × nights).

export const promo21: Promo = {
  id: "promo-21",
  createdAt: "2026-03-28T00:00:00Z",
  title: "Amsterdam, Netherlands",
  client: "",
  dates: "August 24 – 27, 2026 | 3 Nights | 3 Room Options",
  thumbnailUrl: "https://whatahotel.com/content/hotels/2772/59825378.jpg",
  portalTotalLabel: "Starting From",
  portalTotalValue: "€2,162.46",

  hero: {
    imageUrl: "https://whatahotel.com/content/hotels/2772/59825378.jpg",
    alt: "Mandarin Oriental Conservatorium, Amsterdam",
    hotel: "Mandarin Oriental Conservatorium",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Amsterdam, Netherlands",
    cityImageUrl:
      "https://blogger.googleusercontent.com/img/a/AVvXsEjvujqCpr5A9Kmb_-pykpVRYCdW5hYK17ilI2KoAfCTyBeQKD6QB9qbshdHntYeEFtBzBbM7kFAZ1W9yCqQ_BnUo1ShC8Q-FA_CZyqRsHsJJbxWZB84ZCDGWEmdVwM0XPZoxea8sDWm32Vtbfpr7H38POHTdf2op9ivC0lc23Dl4FGvUrOaCkVNLK_50S5X",
    cityImageAlt: "Amsterdam, Netherlands",
  },

  offer: {
    heading: "WhataHotel! Exclusive Offer",
    description:
      "Book through WhataHotel! and enjoy exclusive perks at the Mandarin Oriental Conservatorium, including a 3rd Night Free promotion, daily breakfast for two, and a USD 100 Food & Beverage or Spa credit.",
    pills: [
      "✓ 3rd Night Free",
      "✓ Complimentary Full Breakfast for Two Daily",
      "✓ USD 100 Food & Beverage or Spa Credit",
      "✓ Room Category Upgrade if Available",
      "✓ Late Check-out Based on Availability",
      "✓ Complimentary WiFi",
    ],
  },

  rooms: [
    // ── Room 1: Duplex Room ──
    {
      badgeText: "🏨 Option 1",
      name: "Duplex Room<br/>City View",
      subtitle:
        "1 King or Queen · 30 sqm / 323 sqf · Bi-Level<br/><strong style='color: var(--burgundy)'>Best Value — From €653.33/night</strong>",
      priceRate: "€653.33",
      priceStrike: "Standard: €784.00/night",
      priceTotal: "3-Night Total: €2,162.46",
      stayCheckInOut: "Aug 24 → Aug 27",
      nightsLabel: "3",
      bookingSummary: {
        checkInOut: "Aug 24 → Aug 27",
        nights: "3",
        adr: "€653.33",
        total: "€2,162.46",
      },
      grandTotalInclTaxes: "€2,162.46",
      grandTotalInclTaxesLabel: "Grand total (incl. taxes & fees)",
      images: [
        {
          src: "https://media.ffycdn.net/eu/mandarin-oriental-hotel-group/1JnNwGF15CHdDq6xkavv.jpg?mod=v1/contain=1280x-&quality=75",
          alt: "Duplex Room | 1 King Bed",
        },
        {
          src: "https://media.ffycdn.net/eu/mandarin-oriental-hotel-group/RZ8uAu2Y1n9LWTn3RJcY.jpg?mod=v1/contain=1280x-&quality=75",
          alt: "Duplex Room | Study Area",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "Bi-level duplex layout with lower lounge area",
            "1 King or Queen bed",
            "City view",
            "30 sqm / 323 sqf",
            "Comfortable workspace on lower level",
            "Dark hardwood floors",
            "Travertine stone bathroom with large rainfall shower",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "3rd Night Free",
            "Room Category Upgrade if Available at Check-In",
            "Complimentary Full Breakfast for Two Daily",
            "USD 100 Food & Beverage or Spa Credit",
            "Complimentary WiFi",
            "Late Check-out Based on Availability",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "Standard rate: €784.00/night × 3 = €2,352.00 — WhataHotel! rate: €653.33/night × 3 = €1,959.99 — you save <strong>€432.51</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "€2,162.46",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=C1K3M5&rate=3MF&hotel=2772&checkin=2026-08-24&checkout=2026-08-27&guests=2&children=0&rooms=1",
      bookLabel: "Book Now",
    },

    // ── Room 2: Deluxe Room ──
    {
      badgeText: "🏨 Option 2",
      name: "Deluxe Room<br/>City View",
      subtitle:
        "1 King or Queen · 36 sqm / 388 sqf<br/><strong style='color: var(--burgundy)'>From €738.33/night</strong>",
      priceRate: "€738.33",
      priceStrike: "Standard: €892.00/night",
      priceTotal: "3-Night Total: €2,443.81",
      stayCheckInOut: "Aug 24 → Aug 27",
      nightsLabel: "3",
      bookingSummary: {
        checkInOut: "Aug 24 → Aug 27",
        nights: "3",
        adr: "€738.33",
        total: "€2,443.81",
      },
      grandTotalInclTaxes: "€2,443.81",
      grandTotalInclTaxesLabel: "Grand total (incl. taxes & fees)",
      images: [
        {
          src: "https://media.ffycdn.net/eu/mandarin-oriental-hotel-group/iKyaESA6fAt3Ct1CPB2o.jpg?mod=v1/contain=1280x-&quality=75",
          alt: "Deluxe Room | 1 King Bed",
        },
        {
          src: "https://media.ffycdn.net/eu/mandarin-oriental-hotel-group/WCQv9hfTip1u7cYJdtUH.jpg?mod=v1/contain=1280x-&quality=75",
          alt: "Deluxe Room | Bathroom",
        },
      ],
      features: [
        {
          title: "Room Features",
          icon: "door-open",
          items: [
            "Spacious layout with comfortable workspace",
            "1 King or Queen bed",
            "City view",
            "36 sqm / 388 sqf",
            "Dark hardwood floors",
            "Travertine stone bathroom with rainfall shower",
            "Some with deep soak bathtub on request",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "3rd Night Free",
            "Room Category Upgrade if Available at Check-In",
            "Complimentary Full Breakfast for Two Daily",
            "USD 100 Food & Beverage or Spa Credit",
            "Complimentary WiFi",
            "Late Check-out Based on Availability",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "Standard rate: €892.00/night × 3 = €2,676.00 — WhataHotel! rate: €738.33/night × 3 = €2,214.99 — you save <strong>€508.61</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "€2,443.81",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=A1K3M5&rate=3MF&hotel=2772&checkin=2026-08-24&checkout=2026-08-27&guests=2&children=0&rooms=1",
      bookLabel: "Book Now",
    },

    // ── Room 3: Junior Suite Duplex ──
    {
      badgeText: "🏨 Option 3",
      name: "Junior Suite Duplex<br/>City View",
      subtitle:
        "1 King · 48 sqm / 517 sqf · Bi-Level · 2 Bathrooms<br/><strong style='color: var(--burgundy)'>From €850.00/night</strong>",
      priceRate: "€850.00",
      priceStrike: "Standard: €1,020.00/night",
      priceTotal: "3-Night Total: €2,813.42",
      stayCheckInOut: "Aug 24 → Aug 27",
      nightsLabel: "3",
      bookingSummary: {
        checkInOut: "Aug 24 → Aug 27",
        nights: "3",
        adr: "€850.00",
        total: "€2,813.42",
      },
      grandTotalInclTaxes: "€2,813.42",
      grandTotalInclTaxesLabel: "Grand total (incl. taxes & fees)",
      images: [
        {
          src: "https://media.ffycdn.net/eu/mandarin-oriental-hotel-group/E9Ag3gPfh2YMKrcutYXR.jpg?mod=v1/contain=1280x-&quality=75",
          alt: "Junior Suite Duplex | 1 King Bed",
        },
        {
          src: "https://media.ffycdn.net/eu/mandarin-oriental-hotel-group/2kDQUmLPMKQUPoiCeCNu.jpg?mod=v1/contain=1280x-&quality=75",
          alt: "Junior Suite Duplex | Upper and Lower Level Suite",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "Bi-level duplex with lounge area and mezzanine bedroom",
            "1 King bed",
            "City view",
            "48 sqm / 517 sqf",
            "2 bathrooms (one per floor)",
            "Rainfall shower, some with deep soak bathtub on request",
            "Comfortable workspace on lower level",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "3rd Night Free",
            "Room Category Upgrade if Available at Check-In",
            "Complimentary Full Breakfast for Two Daily",
            "USD 100 Food & Beverage or Spa Credit",
            "Complimentary WiFi",
            "Late Check-out Based on Availability",
          ],
        },
      ],
      savings: {
        leftLabel:
          "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
        leftSub:
          "Standard rate: €1,020.00/night × 3 = €3,060.00 — WhataHotel! rate: €850.00/night × 3 = €2,550.00 — you save <strong>€562.68</strong>",
        rightLabel: "(incl. taxes)",
        rightValue: "€2,813.42",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=T1K3M5&rate=3MF&hotel=2772&checkin=2026-08-24&checkout=2026-08-27&guests=2&children=0&rooms=1",
      bookLabel: "Book Now",
    },
  ],

  pricingFootnote:
    "¹ Totals include applicable taxes and fees. Rates are per room, per night, based on double occupancy. Subject to availability.",

  contact: {
    email: "info@whatahotel.com",
    footerHtml:
      "For questions about this proposal, please contact your WhataHotel! travel advisor.",
  },
};
