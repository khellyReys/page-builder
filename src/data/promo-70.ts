import { createPromo } from "../lib/promoFactory";

export const promo70 = createPromo({
  id: "promo-70",
  createdAt: "2026-06-03T12:00:00Z",
  title: "Van Impe | Toronto",
  dates: "Jun 5–6, 2026",
  client: "",
  hotels: [
    {
      name: "The Ritz-Carlton, Toronto",
      location: "Toronto, Ontario, Canada",
      heroImageUrl:
        "https://whatahotel.com/content/hotels/2487/RCTORON_00054_1280x720.jpg",
      heroAlt: "The Ritz-Carlton, Toronto",
      rooms: [
        {
          name: "City View Deluxe 1 King Bed",
          subtitle: "City View · 1 King Bed",
          badgeText: "Exclusive Rate",
          adr: "CAD $1,020.00",
          grandTotal: "approximately 900.05 USD",
          nights: 1,
          checkIn: "2026-06-05",
          checkOut: "2026-06-06",
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=ODLI00&rate=0S8&hotel=2487&checkin=2026-06-05&checkout=2026-06-06&guests=2&children=0&rooms=1",
          images: [
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/F408D4C5B42A4760AF8F27C4FEA58EB2/F408D4C5B42A4760AF8F27C4FEA58EB2.jpg",
              alt: "City View Deluxe 1 King Bed",
            },
          ],
          roomHighlights: [
            "City View Deluxe with 1 king bed",
            "450 sqft / 41 sqm with living and sitting area",
            "Includes breakfast for 2 at TOCA",
          ],
          perks: [
            "A Room Category Upgrade subject to availability at Check-In",
            "Complimentary Buffet Breakfast x 2 Daily",
            "A $100 Hotel Credit",
            "Free Basic WiFi",
            "Late Check-Out, subject to availability upon request",
          ],
        },
      ],
    },
    {
      name: "Four Seasons Hotel Toronto",
      location: "Toronto, Ontario, Canada",
      heroImageUrl: "https://whatahotel.com/content/hotels/2595/toronto.jpeg",
      heroAlt: "Four Seasons Hotel Toronto",
      rooms: [
        {
          name: "Superior Room King Bed",
          subtitle: "Superior · 1 King Bed",
          badgeText: "Rate With Breakfast",
          adr: "CAD $930.00",
          grandTotal: "approximately 820.63 USD",
          nights: 1,
          checkIn: "2026-06-05",
          checkOut: "2026-06-06",
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=B1KPP6&rate=PP6&hotel=2595&checkin=2026-06-05&checkout=2026-06-06&guests=2&children=0&rooms=1",
          images: [
            {
              src: "https://www.fourseasons.com/alt/img-opt/~70.1530.0,0000-156,2500-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/TFY/TFY_2282_original.jpg",
              alt: "Superior Room King Bed",
            },
          ],
          roomHighlights: [
            "Superior king room on floors 4–8, 500 sqft",
            "Luxury full bed with granite bathroom and large seating area",
            "Windows open for fresh air; maximum 2 adults",
          ],
          perks: [
            "A Room Upgrade subject to availability at time of Check-In",
            "Full Breakfast x 2 Daily",
            "A $100 Credit",
            "Complimentary Basic Internet",
            "Late Check-Out, subject to availability on specific request only",
          ],
        },
      ],
    },
    {
      name: "Park Hyatt Toronto",
      location: "Toronto, Ontario, Canada",
      heroImageUrl:
        "https://whatahotel.com/content/hotels/1362/cq5dam.thumbnail.744.415.png",
      heroAlt: "Park Hyatt Toronto",
      rooms: [
        {
          name: "1 King Deluxe",
          subtitle: "Deluxe · 1 King Bed",
          badgeText: "Credit Rate",
          adr: "CAD $900.00",
          grandTotal: "approximately 794.16 USD",
          nights: 1,
          checkIn: "2026-06-05",
          checkOut: "2026-06-06",
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=E1KU1P&rate=1HZ&hotel=1362&checkin=2026-06-05&checkout=2026-06-06&guests=2&children=0&rooms=1",
          images: [
            {
              src: "https://cdn.onemileatatime.com/wp-content/uploads/2021/09/Park-Hyatt-Toronto-Room.jpeg?width=1200&auto_optimize=low&quality=75&height=804&aspect_ratio=100%3A67",
              alt: "1 King Deluxe",
            },
          ],
          roomHighlights: [
            "Larger deluxe room with 1 king bed",
            "Sitting area with sofa, 55-inch TV, and private bar with Nespresso",
            "Includes breakfast for 2 plus an additional $100 credit",
          ],
          perks: [
            "A Room Category Upgrade subject to availability at Time of Booking",
            "Full Breakfast Daily at a Hotel Restaurant",
            "A $100 Hotel Credit",
            "Free WiFi",
            "Late Check-Out, subject to availability upon request",
          ],
        },
      ],
    },
  ],
});
