import type { Promo } from "../types";

// AGENT NOTE: Multi-destination honeymoon proposal — 3 stops, 8 hotels, 16 room/rate entries.
// Stop 1: Santorini (Sep 1–5, 4 nights) — Grace Santorini (2927), Canaves Oia Epitome (2710)
// Stop 2: Amalfi Coast (Sep 5–9, 4 nights) — Belmond Hotel Caruso (1655, Sep 5–7), Palazzo Avino (1054, Sep 5–7), Il San Pietro (1720, Sep 7–9)
// Stop 3: South of France (Sep 9–13, 4 nights) — Grand-Hotel Du Cap-Ferrat (1079), The Maybourne Riviera (5051), Hotel Royal Riviera (1062)
// Currency: EUR throughout.

export const promo9: Promo = {
  id: "promo-9",
  createdAt: "2026-03-24T18:00:00Z",
  title: "The Silvester's Honeymoon",
  client: "The Silvester's",
  dates: "September 1–13, 2026 | 12 Nights | 3 Destinations",
  portalTotalLabel: "Starting From",
  portalTotalValue: "€5,179.52",

  hotels: [
    // ═══════════════════════════════════════════════════════════
    // STOP 1 — SANTORINI (Sep 1–5, 4 Nights)
    // ═══════════════════════════════════════════════════════════

    // ── Hotel 1: Grace Santorini, Auberge Collection ──
    {
      hero: {
        imageUrl: "https://www.whatahotel.com/content/hotels/2927/Grace-Santorini.jpg",
        alt: "Grace Santorini, Auberge Collection — Santorini, Greece",
        hotel: "Grace Santorini, Auberge Collection",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Santorini, Greece &nbsp;|&nbsp; Sep 1–5, 2026 · 4 Nights",
      },

      rooms: [
        // Deluxe Room — BOOK EARLY
        {
          badgeText: "💰 Book Early Rate",
          name: "Deluxe Room with Heated Plunge Pool",
          subtitle:
            "34 sqm · King Bed · Heated Plunge Pool on Terrace<br/><strong style='color: var(--burgundy)'>Book Early: €1,802.40/night</strong>",
          priceRate: "€1,802.40",
          stayCheckInOut: "Sep 1 → Sep 5",
          nightsLabel: "4",
          bookingSummary: {
            checkInOut: "Sep 1 → Sep 5",
            nights: "4",
            adr: "€1,802.40",
            total: "€7,209.60",
          },
          grandTotalInclTaxes: "€7,209.60",
          images: [
            {
          src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/5e/02/12/grace-santorini-hotel.jpg?w=700&h=-1&s=1",
          alt: "Deluxe Room with Heated Plunge Pool",
        },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "34 sqm suite with heated plunge pool on terrace",
                "King bed with luxury linens",
                "Terrace seating with Caldera views",
                "Full air conditioning, in-room bar, Nespresso",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Full breakfast daily for 2 (at Varoulko)",
                "Private arrival transfer",
                "Complimentary WiFi",
                "Early check-in & late check-out (subject to availability)",
              ],
            },
          ],

          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=V1K3SH&hotel=2927&rate=2SH&checkin=2026-09-01&checkout=2026-09-05&guests=2",
        },
        // Deluxe Room — WhataHotel! Exclusive Rate
        {
          badgeText: "✨ Flexible Rate",
          name: "Deluxe Room with Heated Plunge Pool",
          subtitle:
            "34 sqm · King Bed · Heated Plunge Pool on Terrace<br/><strong style='color: var(--burgundy)'>Exclusive: €2,253/night</strong>",
          priceRate: "€2,253",
          stayCheckInOut: "Sep 1 → Sep 5",
          nightsLabel: "4",
          bookingSummary: {
            checkInOut: "Sep 1 → Sep 5",
            nights: "4",
            adr: "€2,253",
            total: "€9,072",
          },
          grandTotalInclTaxes: "€9,072",
          images: [
            {
          src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/5e/02/12/grace-santorini-hotel.jpg?w=700&h=-1&s=1",
          alt: "Deluxe Room with Heated Plunge Pool",
        },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "34 sqm suite with heated plunge pool on terrace",
                "King bed with luxury linens",
                "Terrace seating with Caldera views",
                "Full air conditioning, in-room bar, Nespresso",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Full breakfast daily for 2 (at Varoulko)",
                "Private arrival transfer",
                "Complimentary WiFi",
                "Early check-in & late check-out (subject to availability)",
              ],
            },
          ],

          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=V1K2SH&rate=2SH&hotel=2927&checkin=2026-09-01&checkout=2026-09-05&guests=2&children=0&rooms=1",
        },
        // Superior Suite — BOOK EARLY
        {
          badgeText: "💰 Book Early Rate",
          name: "Superior Suite with Plunge Pool",
          subtitle:
            "King Bed · Sea View · Heated Plunge Pool · Sun Loungers<br/><strong style='color: var(--burgundy)'>Book Early: €2,504/night</strong>",
          priceRate: "€2,504",
          stayCheckInOut: "Sep 1 → Sep 5",
          nightsLabel: "4",
          bookingSummary: {
            checkInOut: "Sep 1 → Sep 5",
            nights: "4",
            adr: "€2,504",
            total: "€10,016",
          },
          grandTotalInclTaxes: "€10,016",
          images: [
            {
          src: "https://q-xx.bstatic.com/xdata/images/hotel/max500/406003416.jpg?k=aae023b201a9be92916c402c50f66c8dca2813a65ffcb9990413083fa34da7fc&o=",
          alt: "Deluxe Room with Heated Plunge Pool",
        },
          ],
          features: [
            {
              title: "Suite Features",
              icon: "door-open",
              items: [
                "Spacious suite with sea view and plunge pool",
                "King bed with luxury linens",
                "Seating and dining areas with sun loungers",
                "In-room bar, tea & Nespresso, full AC, complimentary WiFi",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Full breakfast daily for 2 (at Varoulko)",
                "Private arrival transfer",
                "Complimentary WiFi",
                "Early check-in & late check-out (subject to availability)",
              ],
            },
          ],

          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=N1K3SH&rate=2SH&hotel=2927&checkin=2026-09-01&checkout=2026-09-05&guests=2&children=0&rooms=1",
        },
        // Superior Suite — WhataHotel! Exclusive Rate
        {
          badgeText: "✨ Flexible Rate",
          name: "Superior Suite with Plunge Pool",
          subtitle:
            "King Bed · Sea View · Heated Plunge Pool · Sun Loungers<br/><strong style='color: var(--burgundy)'>Exclusive: €3,130/night</strong>",
          priceRate: "€3,130",
          stayCheckInOut: "Sep 1 → Sep 5",
          nightsLabel: "4",
          bookingSummary: {
            checkInOut: "Sep 1 → Sep 5",
            nights: "4",
            adr: "€3,130",
            total: "€12,580",
          },
          grandTotalInclTaxes: "€12,580",
          images: [
            {
          src: "https://www.carrier.co.uk/media/eyrnq3eh/trg-1943-1.jpg?rxy=0.62531328320802,0.47326649958228906&v=1d9a83ad2bfe060",
          alt: "Deluxe Room with Heated Plunge Pool",
        },
          ],
          features: [
            {
              title: "Suite Features",
              icon: "door-open",
              items: [
                "Spacious suite with sea view and plunge pool",
                "King bed with luxury linens",
                "Seating and dining areas with sun loungers",
                "In-room bar, tea & Nespresso, full AC, complimentary WiFi",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Full breakfast daily for 2 (at Varoulko)",
                "Private arrival transfer",
                "Complimentary WiFi",
                "Early check-in & late check-out (subject to availability)",
              ],
            },
          ],

          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=N1K2SH&rate=2SH&hotel=2927&checkin=2026-09-01&checkout=2026-09-05&guests=2&children=0&rooms=1",
        },
      ],
    },

    // ── Hotel 2: Canaves Oia Epitome ──
    {
      hero: {
        imageUrl: "https://www.whatahotel.com/content/hotels/2710/0000_canaves_epitome.jpg",
        alt: "Canaves Oia Epitome — Santorini, Greece",
        hotel: "Canaves Oia Epitome",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Santorini, Greece &nbsp;|&nbsp; Sep 1–5, 2026 · 4 Nights",
      },

      rooms: [
        // Hideaway Pool Suite — WhataHotel! Exclusive
        {
          badgeText: "✨ WhataHotel! Exclusive",
          name: "Hideaway Pool Suite",
          subtitle:
            "60 sqm · King Bed · Balcony with Pool, Sea & Sunset View<br/><strong style='color: var(--burgundy)'>TVL WhataHotel! Exclu: €1,500/night</strong>",
          priceRate: "€1,500",
          stayCheckInOut: "Sep 1 → Sep 5",
          nightsLabel: "4",
          bookingSummary: {
            checkInOut: "Sep 1 → Sep 5",
            nights: "4",
            adr: "€1,500",
            total: "€6,000",
          },
          grandTotalInclTaxes: "€6,000",
          images: [
            { src: "https://d2573qu6qrjt8c.cloudfront.net/DDA828A1C78041F0990BDE1DFBEB7F6D/DDA828A1C78041F0990BDE1DFBEB7F6D.JPEG", alt: "Hideaway Pool Suite" },
          ],
          features: [
            {
              title: "Suite Features",
              icon: "door-open",
              items: [
                "60 sqm suite with private pool",
                "King bed with premium linens",
                "Balcony with sea and sunset views",
                "WiFi, AC, rain shower, luxury amenities",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "Room upgrade (subject to availability at check-in)",
                "Complimentary full breakfast for 2 daily",
                "$100 USD food & beverage credit per stay",
                "Complimentary WiFi",
                "Late check-out (upon request)",
              ],
            },
          ],

          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=S1128G&rate=28G&hotel=2710&checkin=2026-09-01&checkout=2026-09-05&guests=2&children=0&rooms=1",
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════
    // STOP 2 — AMALFI COAST (Sep 5–9, 4 Nights)
    // ═══════════════════════════════════════════════════════════

    // ── Hotel 3: Belmond Hotel Caruso (Sep 5–7, 2 Nights) ──
    {
      hero: {
        imageUrl: "https://www.whatahotel.com/content/hotels/1655/orav_1366x650_dining_belvedere_restaurant01.jpg",
        alt: "Belmond Hotel Caruso — Ravello, Amalfi Coast, Italy",
        hotel: "Belmond Hotel Caruso",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Ravello, Amalfi Coast, Italy &nbsp;|&nbsp; Sep 5–7, 2026 · 2 Nights",
      },

      rooms: [
        // Superior Room with Garden
        {
          badgeText: "🏨 Room Option 1",
          name: "Superior Room with Garden",
          subtitle:
            "48 sqm · King or Twin · Garden Wing · Marble Bathroom<br/><strong style='color: var(--burgundy)'>From €2,150/night</strong>",
          priceRate: "€2,150",
          grandTotalInclTaxes: "€4,750",
          stayCheckInOut: "Sep 5 → Sep 7",
          nightsLabel: "2",
          bookingSummary: {
            checkInOut: "Sep 5 → Sep 7",
            nights: "2",
            adr: "€2,150",
            total: "€4,750",
          },
          images: [
            { src: "https://d2573qu6qrjt8c.cloudfront.net/5F327DB69E3542848C2F8F70947780BB/5F327DB69E3542848C2F8F70947780BB.JPEG", alt: "Superior Room with Garden" },
            { src: "https://d2573qu6qrjt8c.cloudfront.net/8286C351F2B3426D911709F2EB5C8016/E.JPEG", alt: "Superior Room with Garden" },
            { src: "https://d2573qu6qrjt8c.cloudfront.net/05F624A56E654A8CAB41B7C97FB1DB5C/E.JPEG", alt: "Superior Room with Garden" },
            { src: "https://d2573qu6qrjt8c.cloudfront.net/DC3D64A4101E43B59253813117B41DE0/E.JPEG", alt: "Superior Room with Garden" },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "48 sqm ground-floor room in garden wing",
                "King or twin bed configuration",
                "Hardwood flooring, village or garden view",
                "Marble bathroom with deep soak tub and rain shower",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "Room upgrade (subject to availability at check-in)",
                "Full American breakfast for 2 daily",
                "$90 hotel credit",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],

          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=C3K59B&rate=59B&hotel=1655&checkin=2026-09-05&checkout=2026-09-07&guests=2&children=0&rooms=1",
        },
        // Garden View Room with Terrace
        {
          badgeText: "🏨 Room Option 2",
          name: "Garden View Room with Terrace",
          subtitle:
            "45 sqm · King or Twin · Main Building · Extra Large Marble Bathroom<br/><strong style='color: var(--burgundy)'>From €2,250/night</strong>",
          priceRate: "€2,250",
          grandTotalInclTaxes: "€4,970",
          stayCheckInOut: "Sep 5 → Sep 7",
          nightsLabel: "2",
          bookingSummary: {
            checkInOut: "Sep 5 → Sep 7",
            nights: "2",
            adr: "€2,250",
            total: "€4,970",
          },
          images: [
            { src: "https://d2573qu6qrjt8c.cloudfront.net/14C98AD5CC9742FF89C4842BCF6ACDCE/14C98AD5CC9742FF89C4842BCF6ACDCE.JPEG", alt: "Garden View Room with Terrace" },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "45 sqm room in main building with terrace",
                "King or twin bed configuration",
                "Garden views from private terrace",
                "Extra large marble bathroom with bidet and double basins",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "Room upgrade (subject to availability at check-in)",
                "Full American breakfast for 2 daily",
                "$90 hotel credit",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],

          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=B3K59B&rate=59B&hotel=1655&checkin=2026-09-05&checkout=2026-09-07&guests=2&children=0&rooms=1",
        },
        // Deluxe Sea View Room with Balcony
        {
          badgeText: "🏨 Room Option 3",
          name: "Deluxe Sea View Room with Balcony",
          subtitle:
            "60 sqm · King or Twin · Main Building · Sea & Coast Views<br/><strong style='color: var(--burgundy)'>From €3,125/night</strong>",
          priceRate: "€3,125",
          grandTotalInclTaxes: "€6,895",
          stayCheckInOut: "Sep 5 → Sep 7",
          nightsLabel: "2",
          bookingSummary: {
            checkInOut: "Sep 5 → Sep 7",
            nights: "2",
            adr: "€3,125",
            total: "€6,895",
          },
          images: [
            { src: "https://d2573qu6qrjt8c.cloudfront.net/1A3992EDDDB541F5B613CBA465F120E5/1A3992EDDDB541F5B613CBA465F120E5.JPEG", alt: "Deluxe Sea View Room with Balcony" },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "60 sqm room in main building with private balcony",
                "King or twin bed configuration",
                "Amazing sea and coast views from balcony with sun beds",
                "High ceilings, spacious living area, hardwood floors",
                "Deep soak bath and separate rain shower",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "Room upgrade (subject to availability at check-in)",
                "Full American breakfast for 2 daily",
                "$90 hotel credit",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],

          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=U3T59B&rate=59B&hotel=1655&checkin=2026-09-05&checkout=2026-09-07&guests=2&children=0&rooms=1",
        },
      ],
    },

    // ── Hotel 4: Palazzo Avino (Sep 5–7, 2 Nights) ──
    {
      hero: {
        imageUrl: "https://whatahotel.com/content/hotels/1054/palazzo-avino-9-gallery-306.jpg",
        alt: "Palazzo Avino — Ravello, Amalfi Coast, Italy",
        hotel: "Palazzo Avino",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Ravello, Amalfi Coast, Italy &nbsp;|&nbsp; Sep 5–7, 2026 · 2 Nights",
      },

      rooms: [
        {
          badgeText: "✨ WhataHotel! Exclusive",
          name: "Deluxe Sea View Room",
          subtitle:
            "16 sqm · Twin/King · Bright Colours · Partial Sea View<br/><strong style='color: var(--burgundy)'>From €2,208.25/night</strong>",
          priceRate: "€2,208.25",
          grandTotalInclTaxes: "€4,436.50",
          stayCheckInOut: "Sep 5 → Sep 7",
          nightsLabel: "2",
          bookingSummary: {
            checkInOut: "Sep 5 → Sep 7",
            nights: "2",
            adr: "€2,208.25",
            total: "€4,436.50",
          },
          images: [
            { src: "https://d321ocj5nbe62c.cloudfront.net/imageRepo/6/0/88/650/245/Deluxe_Suite_with_Terrace_and_Sea_view_P.jpg", alt: "Deluxe Sea View Room" },
            { src: "https://d321ocj5nbe62c.cloudfront.net/imageRepo/6/0/88/86/443/Deluxe_suite_wt_Terrace_P.jpg", alt: "Deluxe Sea View Room" },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "Bright room with partial sea view",
                "Twin or king bed configuration",
                "Luxury bath amenities",
                "Classic Italian design with vibrant colours",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "Room upgrade (subject to availability at check-in)",
                "Daily buffet breakfast for each guest",
                "€80 spa credit",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],

          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=C2U2SH&rate=2SH&hotel=1054&checkin=2026-09-05&checkout=2026-09-07&guests=2&children=0&rooms=1",
        },
      ],
    },

    // ── Hotel 5: Il San Pietro di Positano (Sep 7–9, 2 Nights) ──
    {
      hero: {
        imageUrl: "https://business.cornell.edu/wp-content/uploads/sites/2/2023/02/AdobeStock-Hotel-Il-San-Pietro-Positano.600x400.jpg",
        alt: "Il San Pietro di Positano — Positano, Amalfi Coast, Italy",
        hotel: "Il San Pietro di Positano",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Positano, Amalfi Coast, Italy &nbsp;|&nbsp; Sep 7–9, 2026 · 2 Nights",
      },

      rooms: [
        // Classic Room — Best Available Rate
        {
          badgeText: "🏨 Room Option 1",
          name: "Classic Room",
          subtitle:
            "22 sqm · Queen Bed · Private Terrace · Sea View<br/><strong style='color: var(--burgundy)'>Best Available: €2,960/night</strong>",
          priceRate: "€2,960",
          grandTotalInclTaxes: "€6,512",
          stayCheckInOut: "Sep 7 → Sep 9",
          nightsLabel: "2",
          bookingSummary: {
            checkInOut: "Sep 7 → Sep 9",
            nights: "2",
            adr: "€2,960",
            total: "€6,512",
          },
          images: [
            {
          src: "https://www.ilsanpietro.com/wp-content/uploads/2020/03/CLASSIC_rooms_hotel_san_pietro_positano.webp",
          alt: "Panoramic One Bedroom Suite — Burj Al Arab, Jumeirah",
        },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "22 sqm (236 sq ft) classic room",
                "Queen bed with luxury linens",
                "Private furnished terrace with sea view",
                "Shower/bath, LCD TV, satellite channels, safe deposit box",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Complimentary breakfast for 2 daily",
                "$100 hotel credit",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],

          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=C1QBRA&rate=BRA&hotel=1720&checkin=2026-09-07&checkout=2026-09-09&guests=2&children=0&rooms=1",
        },
        // Deluxe Room — Best Available Rate
        {
          badgeText: "🏨 Room Option 2",
          name: "Deluxe Room",
          subtitle:
            "26 sqm · Queen Bed · Private Terrace · Sea View<br/><strong style='color: var(--burgundy)'>Best Available: €3,610/night</strong>",
          priceRate: "€3,610",
          grandTotalInclTaxes: "€7,942",
          stayCheckInOut: "Sep 7 → Sep 9",
          nightsLabel: "2",
          bookingSummary: {
            checkInOut: "Sep 7 → Sep 9",
            nights: "2",
            adr: "€3,610",
            total: "€7,942",
          },
          images: [
            {
          src: "https://www.ilsanpietro.com/wp-content/uploads/2020/01/Suite_at_il_san_pietro_positano_1-768x512.jpg",
          alt: "Panoramic One Bedroom Suite — Burj Al Arab, Jumeirah",
        },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "26 sqm (279 sq ft) deluxe room",
                "Queen bed with luxury linens",
                "Private furnished terrace with sea view",
                "Shower/bath, single sink, LCD TV, satellite channels",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Complimentary breakfast for 2 daily",
                "$100 hotel credit",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],

          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=A1QBRA&rate=BRA&hotel=1720&checkin=2026-09-07&checkout=2026-09-09&guests=2&children=0&rooms=1",
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════
    // STOP 3 — SOUTH OF FRANCE (Sep 9–13, 4 Nights)
    // ═══════════════════════════════════════════════════════════

    // ── Hotel 6: Grand-Hotel Du Cap-Ferrat, A Four Seasons Hotel ──
    {
      hero: {
        imageUrl: "https://whatahotel.com/content/cities/Cap_Ferrat.jpg",
        alt: "Grand-Hotel Du Cap-Ferrat, A Four Seasons Hotel — Saint-Jean-Cap-Ferrat, France",
        hotel: "Grand-Hotel Du Cap-Ferrat, A Four Seasons Hotel",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Saint-Jean-Cap-Ferrat, France &nbsp;|&nbsp; Sep 9–13, 2026 · 4 Nights",
      },

      rooms: [
        {
          badgeText: "🏨 Room Option",
          name: "Superior Pinewood Room King",
          subtitle:
            "290–365 sq ft · King Bed · Heritage Building · Floors 1–3<br/><strong style='color: var(--burgundy)'>From €2,600/night</strong>",
          priceRate: "€2,600",
          grandTotalInclTaxes: "€10,451.44",
          stayCheckInOut: "Sep 9 → Sep 13",
          nightsLabel: "4",
          bookingSummary: {
            checkInOut: "Sep 9 → Sep 13",
            nights: "4",
            adr: "€2,600",
            total: "€10,451.44",
          },
          images: [
            { src: "https://d2573qu6qrjt8c.cloudfront.net/5CC8889E42F04CCDBACAFCD86C2899B5/5CC8889E42F04CCDBACAFCD86C2899B5.JPEG", alt: "Superior Pinewood Room King" },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "290–365 sq ft in Heritage Building (floors 1–3)",
                "King bed with premium linens",
                "Deluxe marble bathroom with sitting area",
                "Accommodates up to 3 adults or 2 adults + 1 child",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Daily breakfast for 2",
                "$100 hotel credit",
                "Complimentary internet",
                "Late check-out (subject to availability)",
              ],
            },
          ],

          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=D1KPP6&rate=PP6&hotel=1079&checkin=2026-09-09&checkout=2026-09-13&guests=2&children=0&rooms=1",
        },
      ],
    },

    // ── Hotel 7: The Maybourne Riviera ──
    {
      hero: {
        imageUrl: "https://whatahotel.com/content/hotels/5051/homepage-panoramic-suite-shot_1920x1275.jpg",
        alt: "The Maybourne Riviera — Roquebrune-Cap-Martin, France",
        hotel: "The Maybourne Riviera",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Roquebrune-Cap-Martin, France &nbsp;|&nbsp; Sep 9–13, 2026 · 4 Nights",
      },

      rooms: [
        {
          badgeText: "💰 Stay Four Longer",
          name: "Grand Sea View Studio",
          subtitle:
            "65 sqm (700 sq ft) · King Bed · Sea View Terrace · Living Area<br/><strong style='color: var(--burgundy)'>Stay Four Longer: €1,312.50/night</strong>",
          priceRate: "€1,312.50",
          stayCheckInOut: "Sep 9 → Sep 13",
          nightsLabel: "4",
          bookingSummary: {
            checkInOut: "Sep 9 → Sep 13",
            nights: "4",
            adr: "€1,312.50",
            total: "€5,250",
          },
          grandTotalInclTaxes: "€5,250",
          images: [
            { src: "https://d2573qu6qrjt8c.cloudfront.net/A0AC8837AD864579B6787DDE1B8313EE/A0AC8837AD864579B6787DDE1B8313EE.JPEG", alt: "Grand Sea View Studio" },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "65 sqm (700 sq ft) studio with spacious living area",
                "King or twin bed configuration",
                "Sea view terrace",
                "Modern design with premium amenities",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "Complimentary full breakfast for 2 daily",
                "$100 resort credit (spa, dining, bar)",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],

          bookUrl:
            "https://whatahotel.com/booking/showRates.cfm?hotelID=5051&checkIn=2026-09-09&checkOut=2026-09-13&guests=2&children=0&rooms=1",
        },
      ],
    },

    // ── Hotel 8: Hotel Royal Riviera ──
    {
      hero: {
        imageUrl: "https://www.whatahotel.com/content/hotels/1062/f8d2b682086256b532c42d741406bfd6.jpg",
        alt: "Hotel Royal Riviera — Saint-Jean-Cap-Ferrat, France",
        hotel: "Hotel Royal Riviera",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Saint-Jean-Cap-Ferrat, France &nbsp;|&nbsp; Sep 9–13, 2026 · 4 Nights",
      },

      rooms: [
        // Superior Orangerie Garden View Terrace
        {
          badgeText: "🏨 Room Option 1",
          name: "Superior Orangerie Garden View Terrace",
          subtitle:
            "30 sqm (323 sq ft) · King or Twin · Orangerie Building · Garden View<br/><strong style='color: var(--burgundy)'>From €1,285.50/night</strong>",
          priceRate: "€1,285.50",
          grandTotalInclTaxes: "€5,179.52",
          stayCheckInOut: "Sep 9 → Sep 13",
          nightsLabel: "4",
          bookingSummary: {
            checkInOut: "Sep 9 → Sep 13",
            nights: "4",
            adr: "€1,285.50",
            total: "€5,179.52",
          },
          images: [
            { src: "https://d2573qu6qrjt8c.cloudfront.net/CD098C23CB0B4B4786BFF5A97BFC537C/CD098C23CB0B4B4786BFF5A97BFC537C.jpg", alt: "Superior Orangerie Garden View Terrace" },
            { src: "https://d2573qu6qrjt8c.cloudfront.net/72449D85DA7441C9B2F304D151BF824E/72449D85DA7441C9B2F304D151BF824E.jpg", alt: "Superior Orangerie Garden View Terrace" },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "30 sqm (323 sq ft) in Orangerie building",
                "King or twin bed with baby cot available",
                "Garden view with terrace or balcony",
                "Classic French Riviera décor",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "American buffet breakfast for 2 daily",
                "$100 spa credit per stay",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],

          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=C1K2SH&rate=2SH&hotel=1062&checkin=2026-09-09&checkout=2026-09-13&guests=2&children=0&rooms=1",
        },
        // Superior Sea and Garden View Historic Bldg
        {
          badgeText: "🏨 Room Option 2",
          name: "Superior Sea and Garden View Historic Bldg",
          subtitle:
            "26 sqm (301 sq ft) · King or Twin · Historic Building · Sea & Garden View<br/><strong style='color: var(--burgundy)'>From €1,305.50/night</strong>",
          priceRate: "€1,305.50",
          grandTotalInclTaxes: "€5,259.52",
          stayCheckInOut: "Sep 9 → Sep 13",
          nightsLabel: "4",
          bookingSummary: {
            checkInOut: "Sep 9 → Sep 13",
            nights: "4",
            adr: "€1,305.50",
            total: "€5,259.52",
          },
          images: [
            { src: "https://d2573qu6qrjt8c.cloudfront.net/3FB88E4A589042D4943313DB2FD669A7/3FB88E4A589042D4943313DB2FD669A7.jpg", alt: "Superior Sea and Garden View Historic Bldg" },
            { src: "https://d2573qu6qrjt8c.cloudfront.net/A893C00C417842A08F5E54E5EE4A5F0B/A893C00C417842A08F5E54E5EE4A5F0B.jpg", alt: "Superior Sea and Garden View Historic Bldg" },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "26 sqm (301 sq ft) in historic building",
                "King or twin bed with baby cot available",
                "Sea and garden views",
                "Elegant French Riviera style",
              ],
            },
            {
              title: "Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade (subject to availability at check-in)",
                "American buffet breakfast for 2 daily",
                "$100 spa credit per stay",
                "Complimentary WiFi",
                "Late check-out (subject to availability)",
              ],
            },
          ],

          bookUrl:
            "https://whatahotel.com/booking/booking_info.cfm?room=D**2SH&rate=2SH&hotel=1062&checkin=2026-09-09&checkout=2026-09-13&guests=2&children=0&rooms=1",
        },
      ],
    },
  ],

};
