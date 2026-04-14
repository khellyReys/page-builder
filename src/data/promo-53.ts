import { createPromo } from "../lib/promoFactory";

export const promo53 = createPromo({
  id: "promo-53",
  title: "Ross | Boston 🎫🎶",
  dates: "Jul 11, 2026",
  client: "Ross",
  cityImageUrl:
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/d9/6e/40/caption.jpg?",
  cityImageAlt: "Boston",
  hotels: [
    {
      name: "Four Seasons Hotel, One Dalton Street",
      location: "Boston, Massachusetts, United States",
      heroImageUrl:
        "https://d2573qu6qrjt8c.cloudfront.net/4E3FD0E42BB14E7EA8D5C02B28FD8FAC/4E3FD0E42BB14E7EA8D5C02B28FD8FAC.JPEG",
      heroAlt: "Four Seasons Hotel One Dalton Street exterior",
      rooms: [
        {
          name: "Deluxe Room King Bed",
          subtitle: "City View · King Bed",
          badgeText: "Advance Purchase",
          adr: "$925.00",
          grandTotal: "$1,077.17",
          nights: 1,
          checkIn: "2026-07-11",
          checkOut: "2026-07-12",
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=A1KPR3&rate=PP6&hotel=3701&checkin=2026-07-11&checkout=2026-07-12&guests=2&children=0&rooms=1",
          images: [
            {
              src: "https://www.fourseasons.com/alt/img-opt/~70.1530.0,0000-0,0000-1600,0000-900,0000/publish/content/dam/fourseasons/images/web/BCB/BCB_072_aspect16x9.jpg",
              alt: "Deluxe Room King Bed",
            },
          ],
          roomHighlights: [
            "512 sq ft with city view",
            "Accommodates 2 guests",
          ],
          perks: [
            "A Room Category Upgrade if available at Check-in",
            "Full Breakfast x 2 Daily",
            "$100 Food & Beverage, Spa, or Recreation Credit",
            "Complimentary Basic Internet",
            "Late Check-out, subject to availability",
          ],
        },
        {
          name: "Deluxe Room with a View King Bed",
          subtitle: "City View · King Bed · Floors 17-21",
          badgeText: "Advance Purchase",
          adr: "$1,000.00",
          grandTotal: "$1,164.50",
          nights: 1,
          checkIn: "2026-07-11",
          checkOut: "2026-07-12",
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=V1KPR3&rate=PP6&hotel=3701&checkin=2026-07-11&checkout=2026-07-12&guests=2&children=0&rooms=1",
          images: [
            {
              src: "https://www.fourseasons.com/alt/img-opt/~70.1530.0,0000-156,2500-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/BCB/BCB_071_original.jpg",
              alt: "Deluxe Room with a View King Bed",
            },
          ],
          roomHighlights: [
            "512 sq ft with city view on floors 17-21",
            "Accommodates 2 guests",
          ],
          perks: [
            "A Room Category Upgrade if available at Check-in",
            "Full Breakfast x 2 Daily",
            "$100 Food & Beverage, Spa, or Recreation Credit",
            "Complimentary Basic Internet",
            "Late Check-out, subject to availability",
          ],
        },
      ],
    },
  ],
});
