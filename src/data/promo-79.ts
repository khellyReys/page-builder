import { createPromo } from "../lib/promoFactory";

const perks = [
  "A Room Category Upgrade if Available at Check-In",
  "Full Breakfast x 2 Daily",
  "A $100 Credit towards Food & Beverage, a Spa service or a Recreational Activity",
  "Complimentary Basic Internet",
  "Late Check-Out, subject to availability on specific request only",
];

const combinable =
  "Exclusive Perks are COMBINABLE with the 5th Night Free Offer — enjoy both on one booking";

export const promo79 = createPromo({
  id: "promo-79",
  createdAt: "2026-10-05T12:00:00Z",
  title: "Mom & Daughter Trip",
  dates: "Nov 21–27, 2026",
  client: "",
  cityImageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixRBTptdD7mUsrCghw_PuXCkKehu2BJTs9U8BfPmIxGBdT95fvprxzL1k&s=10",
  cityImageAlt: "Peninsula Papagayo, Costa Rica",
  hotels: [
    {
      name: "Four Seasons Resort Costa Rica",
      location: "Peninsula Papagayo, Guanacaste, Costa Rica",
      heroImageUrl: "https://whatahotel.com/content/hotels/1271/cq5dam.web.1280.1280.jpeg",
      heroAlt: "Four Seasons Resort Costa Rica at Peninsula Papagayo",
      rooms: [
        {
          name: "Terraza Room King Bed",
          subtitle: "Tropical Forest View · King Bed",
          badgeText: "Fifth Night Free W Bkfst",
          adr: "$1,924.17",
          grandTotal: "$14,741.82",
          nights: 6,
          checkIn: "2026-11-21",
          checkOut: "2026-11-27",
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=C1KPP5&rate=PP6&hotel=1271&checkin=2026-11-21&checkout=2026-11-27&guests=2&children=0&rooms=1",
          images: [
            {
              src: "https://www.fourseasons.com/alt/img-opt/~60/author/content/dam/fourseasons/images/web/COS/COS_1037_aspect16x9.jpg",
              alt: "Terraza Room with a King Size Bed | Living Area",
            },
            {
              src: "https://www.fourseasons.com/alt/img-opt/~60/author/content/dam/fourseasons/images/web/COS/COS_1038_aspect16x9.jpg",
              alt: "Terraza Room with a King Size Bed | Bathroom",
            },
          ],
          roomHighlights: [
            combinable,
            "Ground-floor room with private outdoor terrace and dining for 2",
            "603 sq ft with marble bathroom and living area",
          ],
          perks,
        },
        {
          name: "Brisa Room King Bed",
          subtitle: "Bay or Ocean View · King Bed",
          badgeText: "Fifth Night Free W Bkfst",
          adr: "$2,105.00",
          grandTotal: "$16,127.27",
          nights: 6,
          checkIn: "2026-11-21",
          checkOut: "2026-11-27",
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=B1KPP5&rate=PP6&hotel=1271&checkin=2026-11-21&checkout=2026-11-27&guests=2&children=0&rooms=1",
          images: [],
          roomHighlights: [
            combinable,
            "Bay or ocean view over tropical landscape with furnished balcony",
            "603 sq ft, bathroom with tub and separate shower, twice-daily housekeeping",
          ],
          perks,
        },
        {
          name: "Cielo Room King Bed",
          subtitle: "Partial Bay or Ocean View · King Bed",
          badgeText: "Fifth Night Free W Bkfst",
          adr: "$2,517.50",
          grandTotal: "$19,287.57",
          nights: 6,
          checkIn: "2026-11-21",
          checkOut: "2026-11-27",
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=P1KPP5&rate=PP6&hotel=1271&checkin=2026-11-21&checkout=2026-11-27&guests=2&children=0&rooms=1",
          images: [],
          roomHighlights: [
            combinable,
            "Partial bay or ocean view with tropical forest, furnished terrace",
            "603 sq ft on floors 3–4, 5 minutes to the centre of the resort",
          ],
          perks,
        },
      ],
    },
  ],
});
