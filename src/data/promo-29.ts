import type { Promo } from "../types";
import { sharedContact } from "./contact";

export const promo29: Promo = {
  id: "promo-29",
  createdAt: "2026-03-30T12:00:00Z",
  title: "Rick & Robert | Paris \u{1F1EB}\u{1F1F7}",
  client: "Rick & Robert",
  dates: "August 1 \u2013 8, 2026 | 7 Nights | 6 Hotel Options",
  thumbnailUrl: "https://whatahotel.com/content/hotels/2719/327265.jpg",
  portalTotalLabel: "Starting From",
  portalTotalValue: "\u20AC3,018.80",

  hotels: [
    /* ──────────────────────────────────────────────────────────────
       Hotel 1: Grand H\u00F4tel du Palais Royal
       ────────────────────────────────────────────────────────────── */
    {
      hero: {
        imageUrl: "https://whatahotel.com/content/hotels/2719/327265.jpg",
        alt: "Grand H\u00F4tel du Palais Royal exterior",
        hotel: "Grand H\u00F4tel du Palais Royal",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Paris, France &nbsp;|&nbsp; 1st Arrondissement",
      },
      offer: {
        heading: "WhataHotel! Exclusive Rate",
        description: "Exclusive perks included with your stay",
        pills: [
          "\u2713 Upgrade subject to availability at check-in",
          "\u2713 Complimentary continental breakfast for two daily",
          "\u2713 $100 F&B credit",
          "\u2713 Free WiFi",
          "\u2713 Late check-out subject to availability",
        ],
        hidden: true,
      },
      rooms: [
        /* ── Superior Room ── */
        {
          badgeText: "\uD83C\uDFE8 Hotel Option 1 \u2013 Room 1",
          name: "Superior Room",
          subtitle:
            "19 sqm \u00B7 Queen or King bed \u00B7 Shower<br/><strong style='color: var(--burgundy)'>From \u20AC602.86/night</strong>",
          priceRate: "\u20AC602.86",
          priceStrike: "",
          priceTotal: "7-Night Total: \u20AC4,220.00",
          nightsLabel: "7",
          stayCheckInOut: "Aug 1 \u2192 Aug 8",
          bookingSummary: {
            checkInOut: "Aug 1 \u2192 Aug 8",
            nights: "7",
            adr: "\u20AC602.86",
            total: "\u20AC4,220.00",
          },
          grandTotalInclTaxes: "\u20AC4,220.00",
          images: [
            {
              src: "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/167/931/993/Superior_Room_S.jpg",
              alt: "Superior Room",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "19 sqm",
                "Queen or King bed",
                "Shower",
                "Air conditioning",
                "Free WiFi",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Upgrade subject to availability at check-in",
                "Complimentary continental breakfast for two daily",
                "$100 F&B credit",
                "Free WiFi",
                "Late check-out subject to availability",
              ],
            },
          ],
          savings: {
            leftLabel:
              "7 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "\u20AC602.86 avg/night &times; 7 nights &mdash; <strong>\u20AC4,220.00</strong> total incl. taxes &amp; fees",
            rightLabel: "(incl. taxes & fees)",
            rightValue: "\u20AC4,220.00",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=A1Q2SH&rate=2SH&hotel=2719&checkin=2026-08-01&checkout=2026-08-08&guests=2&children=0&rooms=1",
          bookLabel: "Book Now",
        },
        /* ── Superior Room with Balcony ── */
        {
          badgeText: "\uD83C\uDFE8 Hotel Option 1 \u2013 Room 2",
          name: "Superior Room with Balcony",
          subtitle:
            "19 sqm \u00B7 Queen or King \u00B7 Shower or Tub<br/><strong style='color: var(--burgundy)'>From \u20AC652.86/night</strong>",
          priceRate: "\u20AC652.86",
          priceStrike: "",
          priceTotal: "7-Night Total: \u20AC4,570.00",
          nightsLabel: "7",
          stayCheckInOut: "Aug 1 \u2192 Aug 8",
          bookingSummary: {
            checkInOut: "Aug 1 \u2192 Aug 8",
            nights: "7",
            adr: "\u20AC652.86",
            total: "\u20AC4,570.00",
          },
          grandTotalInclTaxes: "\u20AC4,570.00",
          images: [
            {
              src: "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/125/603/769/Superior_room__(9)_S.jpg",
              alt: "Superior Room with Balcony",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "19 sqm",
                "Queen or King bed",
                "Balcony",
                "Shower or tub",
                "Air conditioning",
                "Free WiFi",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Upgrade subject to availability at check-in",
                "Complimentary continental breakfast for two daily",
                "$100 F&B credit",
                "Free WiFi",
                "Late check-out subject to availability",
              ],
            },
          ],
          savings: {
            leftLabel:
              "7 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "\u20AC652.86 avg/night &times; 7 nights &mdash; <strong>\u20AC4,570.00</strong> total incl. taxes &amp; fees",
            rightLabel: "(incl. taxes & fees)",
            rightValue: "\u20AC4,570.00",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=B1K2SH&rate=2SH&hotel=2719&checkin=2026-08-01&checkout=2026-08-08&guests=2&children=0&rooms=1",
          bookLabel: "Book Now",
        },
        /* ── Deluxe Room ── */
        {
          badgeText: "\uD83C\uDFE8 Hotel Option 1 \u2013 Room 3",
          name: "Deluxe Room",
          subtitle:
            "23 sqm \u00B7 Queen or Twin \u00B7 Shower or Tub<br/><strong style='color: var(--burgundy)'>From \u20AC702.86/night</strong>",
          priceRate: "\u20AC702.86",
          priceStrike: "",
          priceTotal: "7-Night Total: \u20AC4,920.00",
          nightsLabel: "7",
          stayCheckInOut: "Aug 1 \u2192 Aug 8",
          bookingSummary: {
            checkInOut: "Aug 1 \u2192 Aug 8",
            nights: "7",
            adr: "\u20AC702.86",
            total: "\u20AC4,920.00",
          },
          grandTotalInclTaxes: "\u20AC4,920.00",
          images: [
            {
              src: "https://d321ocj5nbe62c.cloudfront.net/imageRepo/2/0/67/825/75/Grand_Hotel_du_Palais_Royal_Deluxe_Room_S.jpg",
              alt: "Deluxe Room",
            },
            {
              src: "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/125/813/968/Superior_room__(2)_S.jpg",
              alt: "Deluxe Room",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "23 sqm",
                "Queen or Twin beds",
                "Shower or tub",
                "Air conditioning",
                "Free WiFi",
                "Hairdryer",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Upgrade subject to availability at check-in",
                "Complimentary continental breakfast for two daily",
                "$100 F&B credit",
                "Free WiFi",
                "Late check-out subject to availability",
              ],
            },
          ],
          savings: {
            leftLabel:
              "7 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "\u20AC702.86 avg/night &times; 7 nights &mdash; <strong>\u20AC4,920.00</strong> total incl. taxes &amp; fees",
            rightLabel: "(incl. taxes & fees)",
            rightValue: "\u20AC4,920.00",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=A1K2SH&rate=2SH&hotel=2719&checkin=2026-08-01&checkout=2026-08-08&guests=2&children=0&rooms=1",
          bookLabel: "Book Now",
        },
      ],
    },

    /* ──────────────────────────────────────────────────────────────
       Hotel 2: Hotel du Louvre
       ────────────────────────────────────────────────────────────── */
    {
      hero: {
        imageUrl: "https://whatahotel.com/content/hotels/3641/135005484.jpg",
        alt: "Hotel du Louvre exterior",
        hotel: "Hotel du Louvre",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Paris, France &nbsp;|&nbsp; The Unbound Collection by Hyatt",
      },
      offer: {
        heading: "WhataHotel! Exclusive Rate",
        description: "Exclusive perks included with your stay",
        pills: [
          "\u2713 Room upgrade within 48 hours of booking",
          "\u2713 Complimentary breakfast for two daily",
          "\u2713 $100 hotel credit",
          "\u2713 Free WiFi",
          "\u2713 Late check-out subject to availability",
        ],
        hidden: true,
      },
      rooms: [
        /* ── 1 King View Rate (guaranteed upgrade to Deluxe Room) ── */
        {
          badgeText: "\uD83C\uDFE8 Hotel Option 2 \u2013 Room 1",
          name: "1 King View Rate",
          subtitle:
            "<span style='display:inline-block;background:var(--burgundy);color:#fff;font-weight:700;padding:3px 10px;border-radius:4px;font-size:11px;letter-spacing:0.3px;margin-bottom:4px;'>\u2191 Guaranteed Upgrade to a Deluxe Room</span><br/><strong style='color: var(--burgundy)'>From \u20AC780/night</strong>",
          priceRate: "\u20AC780",
          priceStrike: "",
          priceTotal: "7-Night Total: \u20AC5,623.80",
          nightsLabel: "7",
          stayCheckInOut: "Aug 1 \u2192 Aug 8",
          bookingSummary: {
            checkInOut: "Aug 1 \u2192 Aug 8",
            nights: "7",
            adr: "\u20AC780",
            total: "\u20AC5,623.80",
          },
          grandTotalInclTaxes: "\u20AC5,623.80",
          // AGENT NOTE: User requested custom image instead of page images
          images: [
            {
              src: "https://cdn.kiwicollection.com/media/room_images/PR004311/xl/004311-hotel-du-louvre-standard-view-king3.jpg",
              alt: "1 King View \u2013 Deluxe Room upgrade",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "20 sqm",
                "Paris views",
                "1 King bed",
                "Fully renovated",
                "Marble bathroom",
                "Guaranteed upgrade to Deluxe Room",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room upgrade within 48 hours of booking",
                "Complimentary breakfast for two daily",
                "$100 hotel credit",
                "Free WiFi",
                "Late check-out subject to availability",
              ],
            },
          ],
          savings: {
            leftLabel:
              "7 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "\u20AC780 avg/night &times; 7 nights &mdash; <strong>\u20AC5,623.80</strong> total incl. taxes &amp; fees",
            rightLabel: "(incl. taxes & fees)",
            rightValue: "\u20AC5,623.80",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=N1KU5V&rate=1HZ&hotel=3641&checkin=2026-08-01&checkout=2026-08-08&guests=2&children=0&rooms=1",
          bookLabel: "Book Now",
        },
        /* ── 1 King Deluxe Rate (guaranteed upgrade to Deluxe Room with View) ── */
        {
          badgeText: "\uD83C\uDFE8 Hotel Option 2 \u2013 Room 2",
          name: "1 King Deluxe Rate",
          subtitle:
            "<span style='display:inline-block;background:var(--burgundy);color:#fff;font-weight:700;padding:3px 10px;border-radius:4px;font-size:11px;letter-spacing:0.3px;margin-bottom:4px;'>\u2191 Guaranteed Upgrade to a Deluxe Room with View</span><br/><strong style='color: var(--burgundy)'>From \u20AC804.71/night</strong>",
          priceRate: "\u20AC804.71",
          priceStrike: "",
          priceTotal: "7-Night Total: \u20AC5,796.80",
          nightsLabel: "7",
          stayCheckInOut: "Aug 1 \u2192 Aug 8",
          bookingSummary: {
            checkInOut: "Aug 1 \u2192 Aug 8",
            nights: "7",
            adr: "\u20AC804.71",
            total: "\u20AC5,796.80",
          },
          grandTotalInclTaxes: "\u20AC5,796.80",
          // AGENT NOTE: User requested custom image instead of page images
          images: [
            {
              src: "https://images.trvl-media.com/lodging/1000000/30000/21900/21803/80153b31.jpg?",
              alt: "1 King Deluxe \u2013 Deluxe Room with View upgrade",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "25 sqm",
                "1 King bed",
                "Seating area",
                "Design furniture",
                "Marble bathroom",
                "Guaranteed upgrade to Deluxe Room with View",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room upgrade within 48 hours of booking",
                "Complimentary breakfast for two daily",
                "$100 hotel credit",
                "Free WiFi",
                "Late check-out subject to availability",
              ],
            },
          ],
          savings: {
            leftLabel:
              "7 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "\u20AC804.71 avg/night &times; 7 nights &mdash; <strong>\u20AC5,796.80</strong> total incl. taxes &amp; fees",
            rightLabel: "(incl. taxes & fees)",
            rightValue: "\u20AC5,796.80",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=T1KU5V&rate=1HZ&hotel=3641&checkin=2026-08-01&checkout=2026-08-08&guests=2&children=0&rooms=1",
          bookLabel: "Book Now",
        },
      ],
    },

    /* ──────────────────────────────────────────────────────────────
       Hotel 3: Pavillon Faubourg Saint-Germain
       ────────────────────────────────────────────────────────────── */
    {
      hero: {
        imageUrl:
          "https://whatahotel.com/content/hotels/6301/Pavillon_StGermain.jpg",
        alt: "Pavillon Faubourg Saint-Germain exterior",
        hotel: "Pavillon Faubourg Saint-Germain",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Paris, France &nbsp;|&nbsp; Saint-Germain-des-Pr\u00E9s",
      },
      offer: {
        heading: "WhataHotel! Exclusive Rate",
        description: "Exclusive perks included with your stay",
        pills: [
          "\u2713 Room category upgrade if available at check-in",
          "\u2713 Complimentary daily breakfast for two",
          "\u2713 $100 hotel credit",
          "\u2713 Free Wi-Fi",
          "\u2713 Late check-out based on availability",
        ],
        hidden: true,
      },
      rooms: [
        /* ── Superior Room ── */
        {
          badgeText: "\uD83C\uDFE8 Hotel Option 3 \u2013 Room 1",
          name: "Superior Room",
          subtitle:
            "1 Queen bed \u00B7 Ensuite<br/><strong style='color: var(--burgundy)'>From \u20AC568.57/night</strong>",
          priceRate: "\u20AC568.57",
          priceStrike: "",
          priceTotal: "7-Night Total: \u20AC3,980.00",
          nightsLabel: "7",
          stayCheckInOut: "Aug 1 \u2192 Aug 8",
          bookingSummary: {
            checkInOut: "Aug 1 \u2192 Aug 8",
            nights: "7",
            adr: "\u20AC568.57",
            total: "\u20AC3,980.00",
          },
          grandTotalInclTaxes: "\u20AC3,980.00",
          // AGENT NOTE: Page had only placeholder images; user provided custom image
          images: [
            {
              src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/03/d8/9b/deluxe-pavillon-faubourg.jpg?w=700&h=-1&s=1",
              alt: "Superior Room",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "1 Queen bed",
                "Ensuite bathroom",
                "Free Wi-Fi",
                "Air conditioning",
                "Cable TV",
                "Tea & coffee facilities",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade if available at check-in",
                "Complimentary daily breakfast for two",
                "$100 hotel credit",
                "Free Wi-Fi",
                "Late check-out based on availability",
              ],
            },
          ],
          savings: {
            leftLabel:
              "7 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "\u20AC568.57 avg/night &times; 7 nights &mdash; <strong>\u20AC3,980.00</strong> total incl. taxes &amp; fees",
            rightLabel: "(incl. taxes & fees)",
            rightValue: "\u20AC3,980.00",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=B1Q12S&rate=2SH&hotel=6301&checkin=2026-08-01&checkout=2026-08-08&guests=2&children=0&rooms=1",
          bookLabel: "Book Now",
        },
        /* ── Deluxe Room ── */
        {
          badgeText: "\uD83C\uDFE8 Hotel Option 3 \u2013 Room 2",
          name: "Deluxe Room",
          subtitle:
            "1 King or 1 Queen \u00B7 Ensuite \u00B7 Lounge<br/><strong style='color: var(--burgundy)'>From \u20AC678.57/night</strong>",
          priceRate: "\u20AC678.57",
          priceStrike: "",
          priceTotal: "7-Night Total: \u20AC4,750.00",
          nightsLabel: "7",
          stayCheckInOut: "Aug 1 \u2192 Aug 8",
          bookingSummary: {
            checkInOut: "Aug 1 \u2192 Aug 8",
            nights: "7",
            adr: "\u20AC678.57",
            total: "\u20AC4,750.00",
          },
          grandTotalInclTaxes: "\u20AC4,750.00",
          images: [
            {
              src: "https://d2573qu6qrjt8c.cloudfront.net/171C3068D53346378E0882F975E951A1/171C3068D53346378E0882F975E951A1.JPEG",
              alt: "Deluxe Room",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "1 King or 1 Queen bed",
                "Ensuite bathroom",
                "Lounge area",
                "Free Wi-Fi",
                "Air conditioning",
                "Cable TV",
                "Tea & coffee facilities",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade if available at check-in",
                "Complimentary daily breakfast for two",
                "$100 hotel credit",
                "Free Wi-Fi",
                "Late check-out based on availability",
              ],
            },
          ],
          savings: {
            leftLabel:
              "7 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "\u20AC678.57 avg/night &times; 7 nights &mdash; <strong>\u20AC4,750.00</strong> total incl. taxes &amp; fees",
            rightLabel: "(incl. taxes & fees)",
            rightValue: "\u20AC4,750.00",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=A1K12S&rate=2SH&hotel=6301&checkin=2026-08-01&checkout=2026-08-08&guests=2&children=0&rooms=1",
          bookLabel: "Book Now",
        },
      ],
    },

    /* ──────────────────────────────────────────────────────────────
       Hotel 4: Kimpton St Honore Paris
       ────────────────────────────────────────────────────────────── */
    {
      hero: {
        imageUrl: "https://whatahotel.com/content/hotels/6300/Kimpton_1.jpg",
        alt: "Kimpton St Honore Paris exterior",
        hotel: "Kimpton St Honore Paris",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Paris, France &nbsp;|&nbsp; IHG Hotel",
      },
      offer: {
        heading: "WhataHotel! Exclusive Rate",
        description: "Exclusive perks included with your stay",
        pills: [
          "\u2713 Room category upgrade if available at check-in",
          "\u2713 Complimentary daily breakfast for two",
          "\u2713 \u20AC85 hotel credit",
          "\u2713 Free Wi-Fi",
          "\u2713 Late check-out based on availability",
        ],
        hidden: true,
      },
      rooms: [
        /* ── Essential Room Rate (guaranteed upgrade to King Essential Room) ── */
        {
          badgeText: "\uD83C\uDFE8 Hotel Option 4 \u2013 Room 1",
          name: "Essential Room Rate",
          subtitle:
            "<span style='display:inline-block;background:var(--burgundy);color:#fff;font-weight:700;padding:3px 10px;border-radius:4px;font-size:11px;letter-spacing:0.3px;margin-bottom:4px;'>\u2191 Guaranteed Upgrade to a King Essential Room</span><br/><strong style='color: var(--burgundy)'>From \u20AC633.57/night</strong>",
          priceRate: "\u20AC633.57",
          priceStrike: "",
          priceTotal: "7-Night Total: \u20AC4,598.80",
          nightsLabel: "7",
          stayCheckInOut: "Aug 1 \u2192 Aug 8",
          bookingSummary: {
            checkInOut: "Aug 1 \u2192 Aug 8",
            nights: "7",
            adr: "\u20AC633.57",
            total: "\u20AC4,598.80",
          },
          grandTotalInclTaxes: "\u20AC4,598.80",
          // AGENT NOTE: No booking-img-list on page; user provided custom image
          images: [
            {
              src: "https://media.privateupgrades.com/_data/default-room_image/13/66089/essential-room-kimpton-st-honor-paris-1_400x400_auto.jpg",
              alt: "Essential Room \u2013 Kimpton St Honore",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "25 sqm average",
                "1 King bed (guaranteed upgrade)",
                "Ensuite bathroom",
                "Free Wi-Fi",
                "Air conditioning",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade if available at check-in",
                "Complimentary daily breakfast for two",
                "\u20AC85 hotel credit (once per stay)",
                "Free Wi-Fi",
                "Late check-out based on availability",
                "IHG One Rewards loyalty points earned on booking",
              ],
            },
          ],
          savings: {
            leftLabel:
              "7 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "\u20AC633.57 avg/night &times; 7 nights &mdash; <strong>\u20AC4,598.80</strong> total incl. taxes &amp; fees",
            rightLabel: "(incl. taxes & fees)",
            rightValue: "\u20AC4,598.80",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=CSP2SH&rate=2SH&hotel=6300&checkin=2026-08-01&checkout=2026-08-08&guests=2&children=0&rooms=1",
          bookLabel: "Book Now",
        },
        /* ── Premium Room Rate (guaranteed upgrade to King Premium Room) ── */
        {
          badgeText: "\uD83C\uDFE8 Hotel Option 4 \u2013 Room 2",
          name: "Premium Room Rate",
          subtitle:
            "<span style='display:inline-block;background:var(--burgundy);color:#fff;font-weight:700;padding:3px 10px;border-radius:4px;font-size:11px;letter-spacing:0.3px;margin-bottom:4px;'>\u2191 Guaranteed Upgrade to a King Premium Room</span><br/><strong style='color: var(--burgundy)'>From \u20AC753.57/night</strong>",
          priceRate: "\u20AC753.57",
          priceStrike: "",
          priceTotal: "7-Night Total: \u20AC5,438.80",
          nightsLabel: "7",
          stayCheckInOut: "Aug 1 \u2192 Aug 8",
          bookingSummary: {
            checkInOut: "Aug 1 \u2192 Aug 8",
            nights: "7",
            adr: "\u20AC753.57",
            total: "\u20AC5,438.80",
          },
          grandTotalInclTaxes: "\u20AC5,438.80",
          // AGENT NOTE: No booking-img-list on page; user provided custom image
          images: [
            {
              src: "https://www.momondo.com/himg/9b/7c/ee/leonardo-2135966-PARBC_7087733778_O-456890.jpg",
              alt: "Premium Room \u2013 Kimpton St Honore",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "31 sqm average",
                "1 King bed (guaranteed upgrade)",
                "Ensuite bathroom",
                "Free Wi-Fi",
                "Air conditioning",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "Room category upgrade if available at check-in",
                "Complimentary daily breakfast for two",
                "\u20AC85 hotel credit (once per stay)",
                "Free Wi-Fi",
                "Late check-out based on availability",
                "IHG One Rewards loyalty points earned on booking",
              ],
            },
          ],
          savings: {
            leftLabel:
              "7 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>",
            leftSub:
              "\u20AC753.57 avg/night &times; 7 nights &mdash; <strong>\u20AC5,438.80</strong> total incl. taxes &amp; fees",
            rightLabel: "(incl. taxes & fees)",
            rightValue: "\u20AC5,438.80",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=CPG2SH&rate=2SH&hotel=6300&checkin=2026-08-01&checkout=2026-08-08&guests=2&children=0&rooms=1",
          bookLabel: "Book Now",
        },
      ],
    },

    /* ──────────────────────────────────────────────────────────────
       Hotel 5: Hotel Sofitel Le Faubourg
       ────────────────────────────────────────────────────────────── */
    {
      hero: {
        imageUrl: "https://whatahotel.com/content/hotels/1131/sofitel.jpg",
        alt: "Hotel Sofitel Le Faubourg exterior",
        hotel: "Hotel Sofitel Le Faubourg",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Paris, France &nbsp;|&nbsp; Faubourg Saint-Honor\u00E9",
      },
      offer: {
        heading: "WhataHotel! 4th Night Free",
        description: "Exclusive perks included with your stay",
        pills: [
          "\u2713 Room category upgrade subject to availability",
          "\u2713 Complimentary breakfast for two daily",
          "\u2713 $100 hotel credit",
          "\u2713 Free WiFi",
          "\u2713 Late check-out subject to availability",
        ],
        hidden: true,
      },
      rooms: [
        /* ── Luxury Room (4th Night Free) ── */
        {
          badgeText: "\uD83C\uDFE8 Hotel Option 5 \u2013 Room 1",
          name: "Luxury Room<br/>4th Night Free",
          subtitle:
            "Queen or King bed \u00B7 4th Night Free<br/><strong style='color: var(--burgundy)'>From \u20AC615.43/night avg</strong>",
          priceRate: "\u20AC615.43",
          priceStrike: "",
          priceTotal: "7-Night Total: \u20AC4,471.80",
          nightsLabel: "7",
          stayCheckInOut: "Aug 1 \u2192 Aug 8",
          bookingSummary: {
            checkInOut: "Aug 1 \u2192 Aug 8",
            nights: "7",
            adr: "\u20AC615.43",
            total: "\u20AC4,471.80",
          },
          grandTotalInclTaxes: "\u20AC4,471.80",
          // AGENT NOTE: Page images from tripcdn.com (non-standard CDN); using images from page <a href>
          images: [
            {
              src: "https://ak-d.tripcdn.com/images/0224i120009go750i2E41_R_600_400_R5.webp",
              alt: "Luxury Room",
            },
            {
              src: "https://ak-d.tripcdn.com/images/1mc1812000e05u6x4A4ED_R_600_400_R5.webp",
              alt: "Luxury Room",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "Queen or King bed",
                "Elegant Parisian styling",
                "Ensuite bathroom",
                "Free WiFi",
                "Air conditioning",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "4th Night Free",
                "Room category upgrade subject to availability",
                "Complimentary breakfast for two daily",
                "$100 hotel credit",
                "Free WiFi",
                "Late check-out subject to availability",
              ],
            },
          ],
          savings: {
            leftLabel:
              "7 Nights &nbsp;|&nbsp; <span>WhataHotel! 4th Night Free</span>",
            leftSub:
              "\u20AC615.43 avg/night &times; 7 nights &mdash; <strong>\u20AC4,471.80</strong> total incl. taxes &amp; fees",
            rightLabel: "(incl. taxes & fees)",
            rightValue: "\u20AC4,471.80",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=A1D3LN&rate=3LN&hotel=1131&checkin=2026-08-01&checkout=2026-08-08&guests=2&children=0&rooms=1",
          bookLabel: "Book Now",
        },
      ],
    },

    /* ──────────────────────────────────────────────────────────────
       Hotel 6: SO/Paris
       ────────────────────────────────────────────────────────────── */
    {
      hero: {
        imageUrl:
          "https://whatahotel.com/content/hotels/6343/a7l5_rsr001_00_p_1024x768.jpg",
        alt: "SO/Paris exterior",
        hotel: "SO/Paris",
        location:
          "<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>Paris, France &nbsp;|&nbsp; Place de la Bastille",
      },
      offer: {
        heading: "WhataHotel! 3rd Night Free",
        description: "Exclusive perks included with your stay",
        pills: [
          "\u2713 Room category upgrade subject to availability",
          "\u2713 Complimentary breakfast for two daily",
          "\u2713 $100 hotel credit",
          "\u2713 Free WiFi",
          "\u2713 Late check-out subject to availability",
        ],
        hidden: true,
      },
      rooms: [
        /* ── Collection Rooftop View King (3rd Night Free) ── */
        {
          badgeText: "\uD83C\uDFE8 Hotel Option 6 \u2013 Room 1",
          name: "Collection Rooftop View King<br/>3rd Night Free",
          subtitle:
            "Rooftop views \u00B7 1 King or 2 Single beds<br/><strong style='color: var(--burgundy)'>From \u20AC407.86/night avg</strong>",
          priceRate: "\u20AC407.86",
          priceStrike: "",
          priceTotal: "7-Night Total: \u20AC3,018.80",
          nightsLabel: "7",
          stayCheckInOut: "Aug 1 \u2192 Aug 8",
          bookingSummary: {
            checkInOut: "Aug 1 \u2192 Aug 8",
            nights: "7",
            adr: "\u20AC407.86",
            total: "\u20AC3,018.80",
          },
          grandTotalInclTaxes: "\u20AC3,018.80",
          // AGENT NOTE: Page had only placeholder images; user provided custom image
          images: [
            {
              src: "https://www.ahstatic.com/photos/a7l5_rokgb_00_p_1024x768.jpg",
              alt: "Collection Rooftop View King",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "1 King or 2 Single beds",
                "Rooftop views of Paris",
                "Ensuite bathroom",
                "Free WiFi",
                "Air conditioning",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "3rd Night Free",
                "Room category upgrade subject to availability",
                "Complimentary breakfast for two daily",
                "$100 hotel credit",
                "Free WiFi",
                "Late check-out subject to availability",
              ],
            },
          ],
          savings: {
            leftLabel:
              "7 Nights &nbsp;|&nbsp; <span>WhataHotel! 3rd Night Free</span>",
            leftSub:
              "\u20AC407.86 avg/night &times; 7 nights &mdash; <strong>\u20AC3,018.80</strong> total incl. taxes &amp; fees",
            rightLabel: "(incl. taxes & fees)",
            rightValue: "\u20AC3,018.80",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=A1DSGP&rate=SGP&hotel=6343&checkin=2026-08-01&checkout=2026-08-08&guests=2&children=0&rooms=1",
          bookLabel: "Book Now",
        },
        /* ── Iconic Paris Skyline King (3rd Night Free) ── */
        {
          badgeText: "\uD83C\uDFE8 Hotel Option 6 \u2013 Room 2",
          name: "Iconic Paris Skyline King<br/>3rd Night Free",
          subtitle:
            "Seine &amp; Eiffel Tower views \u00B7 1 King or 2 Single beds<br/><strong style='color: var(--burgundy)'>From \u20AC472.86/night avg</strong>",
          priceRate: "\u20AC472.86",
          priceStrike: "",
          priceTotal: "7-Night Total: \u20AC3,473.80",
          nightsLabel: "7",
          stayCheckInOut: "Aug 1 \u2192 Aug 8",
          bookingSummary: {
            checkInOut: "Aug 1 \u2192 Aug 8",
            nights: "7",
            adr: "\u20AC472.86",
            total: "\u20AC3,473.80",
          },
          grandTotalInclTaxes: "\u20AC3,473.80",
          // AGENT NOTE: Page had only placeholder images; user provided custom image
          images: [
            {
              src: "https://so-hotels.com/wp-content/uploads/sites/19/2022/12/paris-room-sq-800x800-1.jpg",
              alt: "Iconic Paris Skyline King",
            },
          ],
          features: [
            {
              title: "Room Features",
              icon: "door-open",
              items: [
                "1 King or 2 Single beds",
                "River Seine and Eiffel Tower views",
                "Ensuite bathroom",
                "Free WiFi",
                "Air conditioning",
              ],
            },
            {
              title: "WhataHotel! Exclusive Perks",
              icon: "gift",
              items: [
                "3rd Night Free",
                "Room category upgrade subject to availability",
                "Complimentary breakfast for two daily",
                "$100 hotel credit",
                "Free WiFi",
                "Late check-out subject to availability",
              ],
            },
          ],
          savings: {
            leftLabel:
              "7 Nights &nbsp;|&nbsp; <span>WhataHotel! 3rd Night Free</span>",
            leftSub:
              "\u20AC472.86 avg/night &times; 7 nights &mdash; <strong>\u20AC3,473.80</strong> total incl. taxes &amp; fees",
            rightLabel: "(incl. taxes & fees)",
            rightValue: "\u20AC3,473.80",
          },
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=A1KSGP&rate=SGP&hotel=6343&checkin=2026-08-01&checkout=2026-08-08&guests=2&children=0&rooms=1",
          bookLabel: "Book Now",
        },
      ],
    },
  ],

  contact: sharedContact,
};
