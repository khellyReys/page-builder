import type { Promo } from "../types";
import { sharedContact } from "./contact";

export const promo1: Promo = {
  id: "promo-1",
  title: "Naples, Florida Beach Vacation",
  client: "The Sentz Family",
  dates: "October 12 – 20, 2026 | 8 Nights | 2 Connecting Units",
  thumbnailUrl:
    "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80&auto=format",
  portalTotalLabel: "Combined Total",
  portalTotalValue: "$24,947.25",
  hero: {
    imageUrl:
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1600&q=80&auto=format",
    alt: "Four Seasons Naples Beach Club — Beachfront Resort",
    hotel: "Four Seasons Naples Beach Club",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>801 Gulf Shore Blvd N, Naples, FL 34102 &nbsp;|&nbsp; 1,000 ft of Private White-Sand Beach &nbsp;|&nbsp; Gulf Coast, Florida",
  },
  offer: {
    heading: "Exclusive: Stay Longer — 4th Night Free!",
    description:
      "Your October 12–20 dates <strong>qualify</strong> for the Four Seasons' <em>\"Fourth Night Free\"</em> promotion (valid May 7 – Nov 19, 2026). On an <strong>8-night stay</strong>, each room earns <strong>TWO (2) completely free nights</strong> — that's 4 free nights across both connecting units!",
    pills: [
      "✔ Qualifies Oct 12–20",
      "✔ 2 Free Nights × 2 Rooms",
      "✔ Combinable with WhataHotel! Perks",
      "✔ Free Cancel Before Oct 9, 2026",
    ],
  },
  rooms: [
    {
      badgeText: "🛏️ Unit 1 — Parents",
      name: "Partial Ocean View<br/>One-Bedroom Suite — King",
      subtitle:
        "1,108 sq ft (103 m²) · Floors 3–5, Main Building · Max 3 Adults or 2 Adults + 2 Children<br/>Separate Bedroom · Expansive Living Room · 2 Bathrooms · Private Furnished Terrace<br/><strong style='color: var(--burgundy)'>Connects directly to the Kids' Room →</strong>",
      priceLabel: "4th Night Free Avg Rate",
      priceRate: "$2,100",
      priceStrike: "Reg. $2,800/night",
      priceTotal: "8-Night Total: $18,648.00",
      images: [
        {
          src: "https://sspark.genspark.ai/cfimages?u1=d2fcnoT6Xr23kbG2hYjtULlIIm6yPwPPnaFS%2Bar%2F180F9HTO%2BMjpv34tc5CScxyWbqdRI%2Fihz9%2BBNV8rT9n1crHAHa6Y2Rw5Lr1614DIOSj1Sl3mUTVRrYgkc35ak9z75BJ4hGfPoOPymZMDe2IdifvLO%2FZMpgDJ0yGXvYXd4YHvA9XfpH2qwpozZLojXWGraGQA1INhg2DOj5uvPis0EYGL84pLB5Q%3D&u2=oIPIiVlzcDZ4xj0w&width=2560",
          alt: "Partial Ocean View 1-Bedroom Suite",
        },
        {
          src: "https://sspark.genspark.ai/cfimages?u1=a7bfPaI%2B1QoMZDOhATdRWqox7mbu3IhlrUd72LYC6RlsTAFRiVnssfU8fmPO8hYbBbO9eaB3DPilH4KcHV5bVrHIIW4zKO5omCKZ1ahr6zJ%2Ff7D5g8%2Bdgdby5DpGKT07g1na9fzVSTRMFvWKo7gGedXbUvDEssPs1VkFZZ%2FGHHVXbNNEoqmpHZmHXbhp0ETeGTuF8W4y8f%2FIQi1gEGnSINZKcked&u2=Mbbqynnmmfmv%2FY5o&width=2560",
          alt: "Partial Ocean View 1-Bedroom Suite Living Area",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "1,108 sq ft — nearly twice the size of a standard room",
            "King bed with customizable Four Seasons mattress",
            "Formal foyer with coat closet",
            "Separate living room — dining table for four + sofabed",
            "Guest powder room with shower (2nd bath)",
            "Primary marble bath: soaking tub + glass shower",
            "Expansive furnished terrace — angled Gulf & shoreline views",
            "Private bedroom with walk-in closet",
            "Sonos speaker (suite upgrade) · Dyson hair dryer",
            '65" 4K TV · In-room tablet · Nespresso machine',
            "Deluxe Byredo toiletries · Bathrobes & slippers",
          ],
        },
        {
          title: "WhataHotel! Exclusive Perks",
          icon: "gift",
          items: [
            "4th Night FREE — 2 free nights on 8-night stay",
            "Room Category Upgrade at Check-In (if available)",
            "Complimentary Daily Breakfast for Two",
            "$200 Hotel Credit (1-Bedroom Suite benefit!)",
            "Complimentary Premium Wi-Fi",
            "Priority Late Check-Out (based on availability)",
            "VIP Guest Recognition by Four Seasons",
            "Twice-daily housekeeping + evening turndown",
            "24-hour In-Room Dining",
            "FREE Cancellation before October 9, 2026",
          ],
        },
      ],
      savings: {
        leftLabel: "8 Nights | 6 Paid + 2 FREE Nights",
        leftSub:
          "Regular rate: $2,800 × 8 = $22,400 — you save <strong>$3,752.00</strong> with the 4th Night Free offer",
        rightLabel: "Grand Total (excl. taxes)",
        rightValue: "$18,648.00",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/showRates.cfm?hotelID=6813&checkIn=2026/10/12&checkOut=2026/10/20&guests=2&children=0&rooms=1",
      bookLabel: "Book Unit 1 — Parents' Suite",
    },
    {
      badgeText: "🛏️ Unit 2 — Kids",
      name: "Ocean View<br/>King Room (Connecting)",
      subtitle:
        "510 sq ft (47 m²) · Floor 3–5, Main Building · Max 2 Adults + 2 Children<br/>Large sitting area + private balcony — connects to Parent Suite",
      priceLabel: "4th Night Free Avg Rate",
      priceRate: "$1,100",
      priceStrike: "Reg. $1,470/night",
      priceTotal: "8-Night Total: $9,774.00",
      images: [
        {
          src: "https://sspark.genspark.ai/cfimages?u1=VnqyyK3i2bzR6r2YvFT6l0Bp5brKZ9M21LcN6EC%2Fwje27z082hmKBP9RTb4YhG2P0uCbuLfmmNkuGxMbR09WvRoLQ%2BqXyGAtRWgP8J1pUXtCs9tLr1nMvpGPgWrI5Gxk2xZ7hOZu8sLkW5Xwq0RqlUp5GFfk%3D&u2=yIz2wqIWHvK5q7ps&width=2560",
          alt: "Ocean View King Room",
        },
        {
          src: "https://sspark.genspark.ai/cfimages?u1=E0xS0bHWmKpb5WQ8NfpTzMFpTk8JFFMysOehhFIl0EVuA0MP0DE8WVNzF7XcO6j52yAqzf%2FrerOkpIrhVtJQQo7cY7VV2mEYo66l2WbAd1e5VPW5r9d8fqwysQhPRFZJeytKwhXCasttZVv0sVAg%3D&u2=HEZr8hhk5KRiqs8U&width=2560",
          alt: "King Room with Connecting Door",
        },
      ],
      features: [
        {
          title: "Room Highlights",
          icon: "door-open",
          items: [
            "Full Gulf View with balcony",
            "King bed with premium bedding",
            "Large sitting area with desk",
            "In-room dining menu + beverage service",
            "Complimentary access to fitness center",
          ],
        },
        {
          title: "WhataHotel! Perks",
          icon: "gift",
          items: [
            "4th Night FREE (8-night stay)",
            "Complimentary breakfast daily",
            "Priority late checkout (based on availability)",
            "Free Wi-Fi",
            "Dedicated reservation support",
          ],
        },
      ],
      savings: {
        leftLabel: "8 Nights | 6 Paid + 2 FREE Nights",
        leftSub:
          "Regular rate: $1,470 × 8 = $11,760 — you save <strong>$1,986.00</strong> with the 4th Night Free offer",
        rightLabel: "Grand Total (excl. taxes)",
        rightValue: "$9,774.00",
      },
      bookUrl:
        "https://www.whatahotel.com/booking/showRates.cfm?hotelID=6813&checkIn=2026/10/12&checkOut=2026/10/20&guests=2&children=0&rooms=1",
      bookLabel: "Book Unit 2 — Kids' Room",
    },
  ],
  contact: sharedContact,
};
