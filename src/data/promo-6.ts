import type { Promo } from "../types";

// AGENT NOTE: Single-hotel proposal — Mandarin Oriental, Lago di Como (hotelID=3705).
// Check-in: Aug 17, 2026 — Check-out: Aug 20, 2026 (3 nights), rate=3MF.
// Currency: EUR. 3 room options (Junior Suite, Duplex Suite, Premier Suite).
// Two rate variants per room — using the lower "deposit required" rate.
// 3-night totals from rates page include city/tourist tax (€30 over ADR × 3).

export const promo6: Promo = {
  id: "promo-6",
  createdAt: "2026-03-23T22:00:00Z",
  title: "Greg's Going to Lake Como",
  client: "Greg",
  dates: "August 17–20, 2026 | 3 Nights | 3 Suite Options",
  thumbnailUrl:
    "https://whatahotel.com/content/hotels/3705/dmo-como-head.jpg",
  portalTotalLabel: "Starting From",
  portalTotalValue: "€8,865",

  hero: {
    imageUrl:
      "https://whatahotel.com/content/hotels/3705/dmo-como-head.jpg",
    alt: "Mandarin Oriental, Lago di Como — Lake Como, Italy",
    hotel: "Mandarin Oriental, Lago di Como",
    location:
      "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Blevio, Lake Como, Italy &nbsp;|&nbsp; Luxury Lakefront Resort",
  },

  rooms: [
    // ─── Room Option 1: Junior Suite ───
    {
      badgeText: "🏨 Option 1",
      name: "Junior Suite",
      subtitle:
        "721–968 sq ft · King Bed · Lake Como Views<br/><strong style='color: var(--burgundy)'>From €2,945/night</strong>",
      priceRate: "€2,945",
      grandTotalInclTaxes: "€8,865",
      stayCheckInOut: "Aug 17 → Aug 20",
      nightsLabel: "3",
      bookingSummary: {
        checkInOut: "Aug 17 → Aug 20",
        nights: "3",
        adr: "€2,945",
        total: "€8,865",
      },
      images: [
        {
          src: "https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/7/0/131/558/725/MOCMO_-_Junior_Suite_(_bedroom)_O/Mandarin-Oriental-Lago-di-Como-Suite.jpg?tr=w-780%2Ch-437%2Cfo-auto",
          alt: "Junior Suite Bedroom — Mandarin Oriental, Lago di Como",
        },
        {
          src: "https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/7/0/131/558/717/MOCMO_-_Junior_Suite_(living_room)_O/Mandarin-Oriental-Lago-di-Como-Suite.jpg?tr=w-780%2Ch-437%2Cfo-auto",
          alt: "Junior Suite Living Room — Mandarin Oriental, Lago di Como",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "721–968 sq ft of luxury living space",
            "King bed with premium linens",
            "Lakefront views of Lake Como",
            "Spacious marble bathroom",
            "Air conditioning and complimentary minibar",
          ],
        },
        {
          title: "Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Complimentary breakfast for 2 daily",
            "€90 food or spa credit",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],

      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=T1K331&rate=3MF&hotel=3705&checkin=2026-08-17&checkout=2026-08-20&guests=2&children=0&rooms=1",
    },

    // ─── Room Option 2: Duplex Suite ───
    {
      badgeText: "🏨 Option 2",
      name: "Duplex Suite",
      subtitle:
        "710–1,151 sq ft · Duplex Layout · Lake Como Views<br/><strong style='color: var(--burgundy)'>From €3,230/night</strong>",
      priceRate: "€3,230",
      grandTotalInclTaxes: "€9,720",
      stayCheckInOut: "Aug 17 → Aug 20",
      nightsLabel: "3",
      bookingSummary: {
        checkInOut: "Aug 17 → Aug 20",
        nights: "3",
        adr: "€3,230",
        total: "€9,720",
      },
      images: [
        {
          src: "https://images.trvl-media.com/lodging/4000000/3690000/3684400/3684389/12dd7809.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          alt: "Duplex Suite Bedroom — Mandarin Oriental, Lago di Como",
        },
        {
          src: "https://images.trvl-media.com/lodging/4000000/3690000/3684400/3684389/3dd81564.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          alt: "Duplex Suite Living Area — Mandarin Oriental, Lago di Como",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "710–1,151 sq ft with duplex layout over two levels",
            "King bed with premium linens",
            "Lakefront views of Lake Como",
            "Separate living area on lower level",
            "Spacious marble bathroom",
          ],
        },
        {
          title: "Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Complimentary breakfast for 2 daily",
            "€90 food or spa credit",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],

      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=S11331&rate=3MF&hotel=3705&checkin=2026-08-17&checkout=2026-08-20&guests=2&children=0&rooms=1",
    },

    // ─── Room Option 3: Premier Suite ───
    {
      badgeText: "🏨 Option 3",
      name: "Premier Suite",
      subtitle:
        "1,076–1,862 sq ft · King Bed · Premium Lake Views<br/><strong style='color: var(--burgundy)'>From €3,895/night</strong>",
      priceRate: "€3,895",
      grandTotalInclTaxes: "€11,715",
      stayCheckInOut: "Aug 17 → Aug 20",
      nightsLabel: "3",
      bookingSummary: {
        checkInOut: "Aug 17 → Aug 20",
        nights: "3",
        adr: "€3,895",
        total: "€11,715",
      },
      images: [
        {
          src: "https://images.trvl-media.com/lodging/4000000/3690000/3684400/3684389/c2bf908c.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          alt: "Premier Suite Bedroom — Mandarin Oriental, Lago di Como",
        },
        {
          src: "https://images.trvl-media.com/lodging/4000000/3690000/3684400/3684389/c9388910.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          alt: "Premier Suite Bathroom — Mandarin Oriental, Lago di Como",
        },
      ],
      features: [
        {
          title: "Suite Features",
          icon: "door-open",
          items: [
            "1,076–1,862 sq ft of premium living space",
            "King bed with premium linens",
            "Expansive lake views of Lake Como",
            "Separate living and dining areas",
            "Luxurious marble bathroom with soaking tub",
          ],
        },
        {
          title: "Exclusive Perks",
          icon: "gift",
          items: [
            "Room category upgrade (subject to availability at check-in)",
            "Complimentary breakfast for 2 daily",
            "€90 food or spa credit",
            "Complimentary WiFi",
            "Late check-out (subject to availability)",
          ],
        },
      ],

      bookUrl:
        "https://www.whatahotel.com/booking/booking_info.cfm?room=SAK331&rate=3MF&hotel=3705&checkin=2026-08-17&checkout=2026-08-20&guests=2&children=0&rooms=1",
    },
  ],

};
