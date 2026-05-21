import { createPromo } from "../lib/promoFactory";

export const promo69 = createPromo({
  id: "promo-69",
  createdAt: "2026-05-21T12:00:00Z",
  title: "Ferro Anniversary Getaway! 🎉",
  dates: "Jun 19–20, 2026",
  client: "",
  hotels: [
    {
      name: "Omni Boston Hotel at the Seaport",
      location: "Boston, Massachusetts, United States",
      heroImageUrl:
        "https://whatahotel.com/content/hotels/7071/BOSSEA-Green-Trees.jpg",
      heroAlt: "Omni Boston Hotel at the Seaport exterior with green trees",
      rooms: [
        {
          name: "Artist Tower Studio 1 King Bed",
          subtitle: "Studio · 1 King Bed",
          badgeText: "Exclusive Rate",
          adr: "$579.00",
          grandTotal: "$691.57",
          nights: 1,
          checkIn: "2026-06-19",
          checkOut: "2026-06-20",
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=T1K2SH&rate=2SH&hotel=7071&checkin=2026-06-19&checkout=2026-06-20&guests=2&children=0&rooms=1",
          images: [],
          roomHighlights: [
            "Studio with 1 king bed",
            "Accommodates 2 guests",
          ],
          perks: [
            "A Room Category Upgrade if Available at Check-In",
            "Complimentary Daily Breakfast for Two",
            "A $100 Hotel Credit",
            "Free Wi-Fi",
            "Late check-out, based on availability",
          ],
        },
      ],
    },
  ],
});
