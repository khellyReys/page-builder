import type { Promo } from "../types";

export const promo15: Promo = {
  id: "promo-15",
  createdAt: "2026-03-27T00:00:00.000Z",
  title: "Weekend in Hawaii",
  client: "",
  dates: "July 3 - 5, 2026 | 2 Nights | 1 Room Option",
  thumbnailUrl: "https://whatahotel.com/content/hotels/1223/image.jpg",
  portalTotalLabel: "Starting From",
  portalTotalValue: "$2,840.96",
  hero: {
    imageUrl: "https://whatahotel.com/content/hotels/1223/image.jpg",
    alt: "Fairmont Kea Lani, Maui",
    hotel: "Fairmont Kea Lani, Maui",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Maui, Hawaii, United States &nbsp;|&nbsp; Fairmont Hotels under Accor's HERA Program",
  },
  offer: {
    heading: "Exclusive Complimentary Perks",
    description: "Complimentary amenities included with your WhataHotel! booking.",
    pills: [
      "✓ A Room Category Upgrade*",
      "✓ Complimentary Breakfast for Two Daily",
      "✓ A $100 Hotel Credit**",
      "✓ Free WiFi",
      "✓ Late Check-Out, Subj to Avails upon Request",
    ],
  },
  rooms: [
    {
      badgeText: "🏨 Option 1",
      name: "Fairmont Suite 1 King",
      subtitle:
        "Double sofabed &middot; 860 SF (79 SM)<br/><strong style='color: var(--burgundy)'>Best Value - From $1,146.60/night</strong>",
      priceRate: "$1,146.60",
      priceStrike: "Standard: $1,274.00/night",
      priceTotal: "2-Night Total: $2,840.96 (incl. taxes & fees)",
      stayTotalExclAmount: "$2,840.96",
      stayTotalExclSub: "2 Nights - incl. taxes & fees",
      investmentContextLine:
        "Suite &middot; Jul 3 - Jul 5, 2026 &middot; 2 Adults &middot; WhataHotel! Special Offer",
      quickFacts: [
        { label: "Room Category", value: "Suite" },
        { label: "Bed Setup", value: "1 King + Double Sofabed" },
        { label: "Size", value: "860 SF (79 SM)" },
        { label: "View", value: "Neighborhood View" },
      ],
      stayCheckInOut: "Jul 3 - Jul 5",
      nightsLabel: "2",
      bookingSummary: {
        checkInOut: "Jul 3 - Jul 5",
        nights: "2",
        adr: "$1,146.60",
        total: "$2,840.96",
      },
      grandTotalInclTaxes: "$2,840.96",
      grandTotalInclTaxesLabel: "Grand Total (incl. taxes & fees)",
      keyAttributes: [
        { label: "Room Type", value: "Suite" },
        { label: "Occupancy", value: "2 Adults" },
        { label: "Outdoor Space", value: "Large Private Lanai" },
        { label: "Cancellation", value: "Free cancellation before June 12, 2026" },
      ],
      images: [
        {
          src: "https://d2573qu6qrjt8c.cloudfront.net/B4C355EEABA74A3BBDF5E9F8E577E415/B4C355EEABA74A3BBDF5E9F8E577E415.JPEG",
          alt: "Fairmont Suite 1 King",
          caption: "Suite",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "1 King bed with double sofabed",
            "860 SF (79 SM) interior space",
            "Large private lanai",
            "Neighborhood view",
          ],
        },
        {
          title: "Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade subject to availability",
            "Complimentary breakfast for two daily",
            "$100 hotel credit per stay",
            "Free WiFi",
            "Late check-out upon request and availability",
          ],
        },
      ],
      savings: {
        leftLabel: "2 Nights &nbsp;|&nbsp; <span>WhataHotel! Special Offer</span>",
        leftSub:
          "Standard rate: $1,274.00/night &times; 2 = $2,548.00 &mdash; WhataHotel! rate: $1,146.60/night &times; 2 = $2,293.20 &mdash; you save <strong>$254.80</strong>",
        rightLabel: "Total (incl. taxes & fees)",
        rightValue: "$2,840.96",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=D1KQE2&rate=QE2&hotel=1223&checkin=2026-07-03&checkout=2026-07-05&guests=2&children=0&rooms=1",
      bookLabel: "Book this option",
    },
  ],
  pricingFootnote:
    "*Room category upgrade is subject to availability at check-in. **Hotel credit is once per stay, even for back-to-back reservations.",
};
