import { createPromo } from "../lib/promoFactory";

export const promo63 = createPromo({
  id: "promo-63",
  title: "Shapiro Staycation",
  dates: "May 29–Jun 1, 2026",
  client: "Shapiro",
  hotels: [
    {
      name: "The Beverly Hills Hotel",
      location: "Beverly Hills, California, United States",
      heroImageUrl: "https://whatahotel.com/content/hotels/1035/beverly-hills-entrance-red-carpet-landscape-1920x840.jpg",
      heroAlt: "The Beverly Hills Hotel iconic red-carpet entrance",
      rooms: [
        {
          name: "Deluxe Room-King",
          subtitle: "Diamond Club Room PIQ · King Bed",
          badgeText: "Exclusive Rate",
          adr: "$1,336.00",
          grandTotal: "$4,631.75",
          nights: 3,
          checkIn: "2026-05-29",
          checkOut: "2026-06-01",
          bookUrl: "https://www.whatahotel.com/booking/booking_info.cfm?room=A1QDZ7&rate=DZ9&hotel=1035&checkin=2026-05-29&checkout=2026-06-01&guests=2&children=0&rooms=1",
          images: [],
          roomHighlights: [
            "525 sq ft Deluxe Room with king bed and classic Hollywood glamour",
            "Sitting area, marble bathroom with double vanity, and TV in bathroom mirror",
            "46-inch Bang and Olufsen LCD TV with touches of pink and green",
          ],
          perks: [
            "A Confirmed Room Category Upgrade to the Bungalow Room-2Dbls-Garden View within 48 Hours of Booking",
            "Complimentary Full Breakfast x 2 Daily",
            "100 Units of the Local Currency Credited to Final Bill",
            "Free WiFi",
            "Late Check-Out, subject to availability upon request",
          ],
        },
      ],
    },
    {
      name: "Four Seasons Hotel Westlake Village",
      location: "Westlake Village, California, United States",
      heroImageUrl: "https://whatahotel.com/content/hotels/1790/WES_484_original.jpg",
      heroAlt: "Four Seasons Hotel Westlake Village",
      rooms: [
        {
          name: "Accessible Deluxe 2 Double Bds Room",
          subtitle: "Garden View · Two Double Beds",
          badgeText: "Up To 25% Off With Breakfast",
          adr: "$703.33",
          grandTotal: "$2,327.34",
          nights: 3,
          checkIn: "2026-05-29",
          checkOut: "2026-06-01",
          bookUrl: "https://www.whatahotel.com/booking/booking_info.cfm?room=F2DPR9&rate=PP6&hotel=1790&checkin=2026-05-29&checkout=2026-06-01&guests=2&children=0&rooms=1",
          images: [],
          roomHighlights: [
            "450 sq ft accessible Deluxe Room with garden view",
            "Two double beds with full marble bathroom",
            "Wheelchair-accessible doors, grab bars, and visual alarms",
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
      name: "The Langham Huntington, Pasadena, Los Angeles",
      location: "Pasadena, California, United States",
      heroImageUrl: "https://whatahotel.com/content/hotels/1328/huntington.jpg",
      heroAlt: "The Langham Huntington, Pasadena, Los Angeles",
      rooms: [
        {
          name: "Deluxe Double Room",
          subtitle: "Garden or Mountain View · Two Queen Beds",
          badgeText: "Couture With Our Compliments",
          adr: "$386.00",
          grandTotal: "$1,497.76",
          nights: 3,
          checkIn: "2026-05-29",
          checkOut: "2026-06-01",
          bookUrl: "https://www.whatahotel.com/booking/booking_info.cfm?room=A2DR02&rate=RQ6&hotel=1328&checkin=2026-05-29&checkout=2026-06-01&guests=2&children=0&rooms=1",
          images: [
            { src: "https://reservation.brilliantbylangham.com/shs-ngbe-image-resizer/images/hotel/27405/images/room/tllax_deluxe_double_2025.jpg", alt: "Deluxe Double Room" },
            { src: "https://reservation.brilliantbylangham.com/shs-ngbe-image-resizer/images/hotel/27405/images/room/bathroom.jpg", alt: "Deluxe Double - Bathroom" },
          ],
          roomHighlights: [
            "415 sq ft Deluxe Double Room with garden or mountain view",
            "Two queen beds in Main building or Lanai building",
            "Full Italian marble bathroom with Diptyque amenities",
          ],
          perks: [
            "A Room Category Upgrade subject to availability at Check-In",
            "Complimentary Breakfast x 2 Daily at Terrace Restaurant",
            "A Credit of up to $125",
            "Free WiFi",
            "Late Check-Out, subject to availability upon request",
          ],
        },
      ],
    },
  ],
});
