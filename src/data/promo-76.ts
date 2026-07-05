import { createPromo } from "../lib/promoFactory";

export const promo76 = createPromo({
  id: "promo-76",
  createdAt: "2026-07-05T12:00:00Z",
  title: "The Kataria Family Vacation",
  dates: "Dec 20–26, 2026",
  client: "",
  cityImageUrl:
    "https://www.irgcayman.com/caches/1860x816/2023-12-13-15-20-34-1702496270DJI0374.jpg",
  cityImageAlt: "Grand Cayman",
  hotels: [
    {
      name: "Ritz Carlton, Grand Cayman",
      location: "Grand Cayman, Cayman Islands",
      heroImageUrl: "https://whatahotel.com/content/hotels/1512/Ritz_Cayman.jpg",
      heroAlt: "Ritz Carlton, Grand Cayman resort",
      rooms: [
        {
          name: "Oceanfront Balcony, 1 King",
          subtitle: "Oceanfront · King Bed",
          badgeText: "Exclusive Rate",
          adr: "$2,658.60",
          grandTotal: "$20,280.47",
          nights: 6,
          checkIn: "2026-12-20",
          checkOut: "2026-12-26",
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=ODLQ00&rate=0S8&hotel=1512&checkin=2026-12-20&checkout=2026-12-26&guests=2&children=0&rooms=1",
          images: [],
          roomHighlights: [
            "Oceanfront balcony with a king bed",
            "480 sq ft / 43 sqm with mini fridge",
            "Accommodates 2 guests",
          ],
          perks: [
            "A Room Category Upgrade subject to availability at Check-In",
            "Complimentary Breakfast Buffet x 2 Daily",
            "A $100 Resort Credit",
            "Free Basic WiFi",
            "Late Check-Out, subject to availability upon request",
          ],
        },
        {
          name: "Ocean Front Queen, 2 Queen",
          subtitle: "Oceanfront · Two Queen Beds",
          badgeText: "Exclusive Rate",
          adr: "$3,589.11",
          grandTotal: "$27,147.64",
          nights: 6,
          checkIn: "2026-12-20",
          checkOut: "2026-12-26",
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=OLAD00&rate=0S8&hotel=1512&checkin=2026-12-20&checkout=2026-12-26&guests=2&children=0&rooms=1",
          images: [],
          roomHighlights: [
            "Oceanfront view with two queen beds",
            "480 sq ft / 43 sqm with mini fridge",
            "Accommodates 2 guests",
          ],
          perks: [
            "A Room Category Upgrade subject to availability at Check-In",
            "Complimentary Breakfast Buffet x 2 Daily",
            "A $100 Resort Credit",
            "Free Basic WiFi",
            "Late Check-Out, subject to availability upon request",
          ],
        },
      ],
    },
  ],
});
