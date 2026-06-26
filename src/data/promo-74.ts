import { createPromo } from "../lib/promoFactory";

const parisStay = {
  nights: 2,
  checkIn: "2026-07-08",
  checkOut: "2026-07-10",
};

const parkHyattPerks = [
  "A Room Category Upgrade available at TIme of Booking*",
  "Complimentary American Breakfast for Two Daily",
  "An $150USD Hotel Credit And Complimentary One Way Airport Transfer**",
  "Free WiFi",
  "Late Check-out, subj to avails upon Request",
];

const kimptonPerks = [
  "A Room Category Upgrade if Available at Check-In",
  "Complimentary Daily Breakfast for Two",
  "An 85 EUR Credit",
  "Free Wi-Fi",
  "Late check-out, based on availability",
];

const sofitelPerks = [
  "A Room Category Upgrade if Available at Check-In",
  "Complimentary Daily Breakfast for Two",
  "A $100 USD Credit",
  "Free Wi-Fi",
  "Late check-out, based on availability",
];

export const promo74 = createPromo({
  id: "promo-74",
  createdAt: "2026-06-26T12:00:00Z",
  title: "Summer in Paris",
  client: "",
  dates: "Jul 8–10, 2026",
  cityImageUrl: "https://whatahotel.com/content/cities/paris.jpg",
  cityImageAlt: "Paris",
  hotels: [
    {
      name: "Park Hyatt Paris-Vendome",
      location: "Paris, France",
      heroImageUrl:
        "https://whatahotel.com/content/hotels/1259/Park-Hyatt-Paris-Vendome-Facade-Feat.jpg",
      heroAlt: "Park Hyatt Paris-Vendome facade",
      cancellationPolicy: "FREE cancelation before July 7, 2026.",
      rooms: [
        {
          name: "1KING PAIX VIEW",
          subtitle: "Rue de la Paix View · 1 King Bed",
          badgeText: "Breakfast for 2-Hotel Credit - Welcome Amenity",
          adr: "€2,190.00",
          grandTotal: "€4,380.00",
          ...parisStay,
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=B1TU5V&rate=1HZ&hotel=1259&checkin=2026-07-08&checkout=2026-07-10&guests=2&children=0&rooms=1",
          images: [],
          roomHighlights: [
            "Rue de la Paix view with one king bed",
            "30 sqm average room with separate bath features",
          ],
          perks: parkHyattPerks,
        },
        {
          name: "1 KING DELUXE",
          subtitle: "Deluxe · 1 King Bed",
          badgeText: "Breakfast for 2-Hotel Credit - Welcome Amenity",
          adr: "€2,290.00",
          grandTotal: "€4,580.00",
          ...parisStay,
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=D1KU5V&rate=1HZ&hotel=1259&checkin=2026-07-08&checkout=2026-07-10&guests=2&children=0&rooms=1",
          images: [],
          roomHighlights: [
            "Deluxe room with one king bed",
            "35 sqm average room with separate tub and shower",
          ],
          perks: parkHyattPerks,
        },
        {
          name: "PARK DELUXE SUITE",
          subtitle: "Suite · 1 King Bed",
          badgeText: "Breakfast for 2-Hotel Credit - Welcome Amenity",
          adr: "€2,839.00",
          grandTotal: "€5,678.00",
          ...parisStay,
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=V1KU5V&rate=1HZ&hotel=1259&checkin=2026-07-08&checkout=2026-07-10&guests=2&children=0&rooms=1",
          images: [],
          roomHighlights: [
            "Park Deluxe Suite with one king bed",
            "50 sqm average suite with sitting area and generous bathroom",
          ],
          perks: parkHyattPerks,
        },
        {
          name: "PRESTIGE SUITE",
          subtitle: "Suite · 1 King Bed · Courtyard or City View",
          badgeText: "Breakfast for 2-Hotel Credit - Welcome Amenity",
          adr: "€3,539.00",
          grandTotal: "€7,078.00",
          ...parisStay,
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=B1KU5V&rate=1HZ&hotel=1259&checkin=2026-07-08&checkout=2026-07-10&guests=2&children=0&rooms=1",
          images: [],
          roomHighlights: [
            "Prestige Suite with one king bed",
            "60 sqm average suite with separate living room",
            "Courtyard or city view",
          ],
          perks: parkHyattPerks,
        },
      ],
    },
    {
      name: "Kimpton St Honore Paris",
      location: "Paris, France",
      heroImageUrl: "https://whatahotel.com/content/hotels/6300/Kimpton_1.jpg",
      heroAlt: "Kimpton St Honore Paris",
      cancellationPolicy: "FREE cancelation before July 7, 2026.",
      rooms: [
        {
          name: "1 King bed Suite",
          subtitle: "Suite · 1 King Bed",
          badgeText: "FNB87EUR FULLBKFST 14HLCO BOA",
          adr: "€1,320.00",
          grandTotal: "€2,686.80",
          ...parisStay,
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=XFN2SH&rate=2SH&hotel=6300&checkin=2026-07-08&checkout=2026-07-10&guests=2&children=0&rooms=1",
          images: [],
          roomHighlights: [
            "41 sqm average suite with one king bed",
            "Additional living area",
          ],
          perks: kimptonPerks,
        },
        {
          name: "1 King Bed Suite Balcony",
          subtitle: "Suite · 1 King Bed · Balcony",
          badgeText: "FNB87EUR FULLBKFST 14HLCO BOA",
          adr: "€1,420.00",
          grandTotal: "€2,886.80",
          ...parisStay,
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=GEN2SH&rate=2SH&hotel=6300&checkin=2026-07-08&checkout=2026-07-10&guests=2&children=0&rooms=1",
          images: [],
          roomHighlights: [
            "41 sqm average suite with one king bed",
            "Additional living area and balcony",
          ],
          perks: kimptonPerks,
        },
        {
          name: "1 King Bed Suite Eiffel Tower View",
          subtitle: "Suite · 1 King Bed · Eiffel Tower View",
          badgeText: "FNB87EUR FULLBKFST 14HLCO BOA",
          adr: "€1,500.00",
          grandTotal: "€3,046.80",
          ...parisStay,
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=WFC2SH&rate=2SH&hotel=6300&checkin=2026-07-08&checkout=2026-07-10&guests=2&children=0&rooms=1",
          images: [],
          roomHighlights: [
            "41 sqm average suite with one king bed",
            "Additional living area and Eiffel Tower view",
          ],
          perks: kimptonPerks,
        },
      ],
    },
    {
      name: "Sofitel Le Scribe Paris Opéra",
      location: "Paris, France",
      heroImageUrl: "https://www.ahstatic.com/photos/0663_ho_00_p_1024x768.jpg",
      heroAlt: "Sofitel Le Scribe Paris Opéra exterior",
      rooms: [
        {
          name: "Superior Room - One Queen Bed",
          subtitle: "Courtyard View · One Queen Bed · 215 sq ft",
          badgeText: "Exclusive Rate",
          adr: "€755.10",
          grandTotal: "€1,557.00",
          ...parisStay,
          images: [],
          roomHighlights: [
            "Courtyard view with one queen bed",
            "215 sq ft room",
          ],
          perks: sofitelPerks,
        },
        {
          name: "Luxury Room - Two Single Beds",
          subtitle: "Courtyard or Scribe St. View · Two Single Beds · 269 sq ft",
          badgeText: "Exclusive Rate",
          adr: "€827.10",
          grandTotal: "€1,692.00",
          ...parisStay,
          images: [],
          roomHighlights: [
            "Courtyard or Scribe St. view with two single beds",
            "269 sq ft room",
          ],
          perks: sofitelPerks,
        },
        {
          name: "Luxury Premium Room - Two Single Beds",
          subtitle: "Courtyard or Scribe St. View · Two Single Beds · 290 sq ft",
          badgeText: "Exclusive Rate",
          adr: "€881.10",
          grandTotal: "€1,809.00",
          ...parisStay,
          images: [],
          roomHighlights: [
            "Courtyard or Scribe St. view with two single beds",
            "290 sq ft room",
          ],
          perks: sofitelPerks,
        },
      ],
    },
  ],
});
