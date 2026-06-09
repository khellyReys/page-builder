import { createPromo } from "../lib/promoFactory";

export const promo71 = createPromo({
  id: "promo-71",
  createdAt: "2026-06-09T12:00:00Z",
  title: "Garcia-Estrada | Aspen",
  dates: "Jun 17–20, 2026",
  client: "",
  hotels: [
    {
      name: "Mollie Aspen",
      location: "Aspen, Colorado, United States",
      heroImageUrl:
        "https://whatahotel.com/content/hotels/6968/MOLLIE-Aspen_CCY-Architects_Draper-White-image.jpg",
      heroAlt: "Mollie Aspen exterior in the Colorado mountains",
      rooms: [
        {
          name: "Cozy Double Queen",
          subtitle: "Basement Level · 2 Queen Beds",
          badgeText: "Exclusive Rate",
          adr: "$767.10",
          grandTotal: "$2,754.03",
          nights: 3,
          checkIn: "2026-06-17",
          checkOut: "2026-06-20",
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=C2QPUF&rate=PUF&hotel=6968&checkin=2026-06-17&checkout=2026-06-20&guests=2&children=0&rooms=1",
          images: [
            {
              src: "https://mollieaspen.com/wp-content/uploads/2023/10/MollieAspen_MED_231226009-scaled.jpg",
              alt: "Cozy Double Queen room at Mollie Aspen",
            },
          ],
          roomHighlights: [
            "280 sq ft with two queen-size beds",
            "Basement level retreat with rainfall shower",
            "Accommodates 2 guests",
          ],
          perks: [
            "An Upgrade subject to availability at Check-In",
            "Complimentary Breakfast for Two Daily",
            "A $100 Hotel Credit",
            "Free WiFi",
            "Late Check-out, subject to availability upon request",
          ],
        },
        {
          name: "Smuggler Double Queen",
          subtitle: "Varied Views · 2 Queen Beds",
          badgeText: "Exclusive Rate",
          adr: "$857.10",
          grandTotal: "$3,057.38",
          nights: 3,
          checkIn: "2026-06-17",
          checkOut: "2026-06-20",
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=A2QPUF&rate=PUF&hotel=6968&checkin=2026-06-17&checkout=2026-06-20&guests=2&children=0&rooms=1",
          images: [
            {
              src: "https://mollieaspen.com/wp-content/uploads/2023/10/MOLLIE_4013_v2.jpg",
              alt: "Smuggler Double Queen room at Mollie Aspen",
            },
          ],
          roomHighlights: [
            "Up to 305 sq ft with two queen-size beds",
            "Varied views with rainfall shower and desk",
            "Accommodates 2 guests",
          ],
          perks: [
            "An Upgrade subject to availability at Check-In",
            "Complimentary Breakfast for Two Daily",
            "A $100 Hotel Credit",
            "Free WiFi",
            "Late Check-out, subject to availability upon request",
          ],
        },
      ],
    },
  ],
});
