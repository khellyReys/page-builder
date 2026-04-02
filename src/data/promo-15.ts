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
  rooms: [
    {
      badgeText: "🏨 Option 1",
      name: "Fairmont Suite 1 King",
      subtitle:
        "Double sofabed &middot; 860 SF (79 SM)<br/><strong style='color: var(--burgundy)'>Best Value - From $1,146.60/night</strong>",
      priceRate: "$1,146.60",
      stayCheckInOut: "Jul 3 - Jul 5",
      nightsLabel: "2",
      bookingSummary: {
        checkInOut: "Jul 3 - Jul 5",
        nights: "2",
        adr: "$1,146.60",
        total: "$2,840.96",
      },
      grandTotalInclTaxes: "$2,840.96",
      images: [
        {
          src: "https://d2573qu6qrjt8c.cloudfront.net/B4C355EEABA74A3BBDF5E9F8E577E415/B4C355EEABA74A3BBDF5E9F8E577E415.JPEG",
          alt: "Fairmont Suite 1 King",
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
      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=D1KQE2&rate=QE2&hotel=1223&checkin=2026-07-03&checkout=2026-07-05&guests=2&children=0&rooms=1",
    },
  ],
};
