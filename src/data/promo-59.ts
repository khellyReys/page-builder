import { createPromo } from "../lib/promoFactory";

export const promo59 = createPromo({
  id: "promo-59",
  title: "Las Vegas for James Loyst",
  dates: "Jun 18–23, 2026",
  client: "James Loyst",
  cityImageUrl: "https://media.nomadicmatt.com/2023/vegasthings1.jpeg",
  cityImageAlt: "Las Vegas Strip skyline at night",
  hotels: [
    {
      name: "Four Seasons Las Vegas",
      location: "Las Vegas, Nevada, United States",
      heroImageUrl: "https://whatahotel.com/content/hotels/1413/VGS_513_original.jpg",
      heroAlt: "Four Seasons Las Vegas exterior and pool",
      rooms: [
        {
          name: "Superior Room King Bed",
          subtitle: "Mountain View · King Bed",
          badgeText: "Exclusive Rate",
          adr: "$204.00",
          grandTotal: "$1,468.30",
          nights: 5,
          checkIn: "2026-06-18",
          checkOut: "2026-06-23",
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=B1KPP1&rate=PP6&hotel=1413&checkin=2026-06-18&checkout=2026-06-23&guests=2&children=0&rooms=1",
          images: [],
          roomHighlights: [
            "Superior room on floors 35–39 with mountain view",
            "Luxury king bed and floor-to-ceiling windows",
            "500 sq ft with full marble bathroom",
          ],
          perks: [
            "A Room Category Upgrade, Subject to Availability at Check-In",
            "Full Breakfast x 2 Daily",
            "A $100 Credit",
            "Complimentary Basic Internet",
            "Late Check-Out, subject to availability on specific request",
          ],
        },
        {
          name: "Stadium View Room King Bed",
          subtitle: "Stadium & Valley View · King Bed",
          badgeText: "Exclusive Rate",
          adr: "$224.00",
          grandTotal: "$1,581.65",
          nights: 5,
          checkIn: "2026-06-18",
          checkOut: "2026-06-23",
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=CAKPP1&rate=PP6&hotel=1413&checkin=2026-06-18&checkout=2026-06-23&guests=2&children=0&rooms=1",
          images: [],
          roomHighlights: [
            "Floors 35–39 with Allegiant Stadium and valley views",
            "Luxury king bed with full marble bathroom",
            "550 sq ft with floor-to-ceiling windows",
          ],
          perks: [
            "A Room Category Upgrade, Subject to Availability at Check-In",
            "Full Breakfast x 2 Daily",
            "A $100 Credit",
            "Complimentary Basic Internet",
            "Late Check-Out, subject to availability on specific request",
          ],
        },
        {
          name: "Deluxe Room Two Queen Bed",
          subtitle: "Mountain View · Two Queen Beds",
          badgeText: "Exclusive Rate",
          adr: "$244.00",
          grandTotal: "$1,695.05",
          nights: 5,
          checkIn: "2026-06-18",
          checkOut: "2026-06-23",
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=A2DPP1&rate=PP6&hotel=1413&checkin=2026-06-18&checkout=2026-06-23&guests=2&children=0&rooms=1",
          images: [],
          roomHighlights: [
            "Deluxe room on floors 35–39 with mountain view",
            "Two luxury queen beds, ideal for families or friends",
            "550 sq ft with full marble bathroom",
          ],
          perks: [
            "A Room Category Upgrade, Subject to Availability at Check-In",
            "Full Breakfast x 2 Daily",
            "A $100 Credit",
            "Complimentary Basic Internet",
            "Late Check-Out, subject to availability on specific request",
          ],
        },
      ],
    },
  ],
});
