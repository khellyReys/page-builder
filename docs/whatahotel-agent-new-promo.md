# New promo — agent guide

## Step 1: Create the data file

```ts
import { createPromo } from "../lib/promoFactory";

export const promoN = createPromo({
  id: "promo-N",
  title: "Easter Vacation",
  dates: "Apr 5–9, 2026",
  client: "The Smith Family",           // optional, "" if not provided
  cityImageUrl: "https://example.com/city.jpg",  // optional
  cityImageAlt: "Fort Lauderdale",               // optional
  hotels: [
    {
      name: "Conrad Fort Lauderdale Beach",
      location: "Fort Lauderdale, Florida, United States",
      heroImageUrl: "https://whatahotel.com/content/hotels/3333/hero.jpg",
      heroAlt: "Conrad Fort Lauderdale Beach aerial view",
      rooms: [
        {
          name: "Junior Suite Partial Ocean View",
          subtitle: "Partial Ocean View",
          badgeText: "Exclusive Rate",
          adr: "$458.63",
          grandTotal: "$2,253.79",
          nights: 4,
          checkIn: "2026-04-05",
          checkOut: "2026-04-09",
          bookUrl: "https://www.whatahotel.com/booking/booking_info.cfm?room=A11CBPC&rate=I70&hotel=3333&checkin=2026-04-05&checkout=2026-04-09&guests=2&children=0&rooms=1",
          images: [
            { src: "https://d2573qu6qrjt8c.cloudfront.net/HASH/HASH.JPEG", alt: "Junior Suite" },
          ],
          roomHighlights: [
            "Junior Suite with partial ocean view",
            "Accommodates 2 guests",
          ],
          perks: [
            "A Room Category Upgrade if available at Check-in",
            "Continental Breakfast x 2 Daily",
            "A $100 Food & Beverage Credit",
            "Free WiFi",
            "Late Check-out, subject to availability",
          ],
        },
        // ... more rooms (max 3)
      ],
    },
    // ... more hotels for multi-hotel promos
  ],
});
```

## Step 2: Register in promos.ts

```ts
import { promoN } from "./promo-N";
// add to the rawPromos array
```

## Step 3: Build

```bash
npm run build
```

---

## What the agent provides

| Field | Where from | Example |
|---|---|---|
| `id` | Next free number from `promos.ts` | `"promo-35"` |
| `title` | User or destination name | `"Easter Vacation"` |
| `dates` | Booking page dates | `"Apr 5–9, 2026"` |
| `client` | User (optional) | `""` if not given |
| `cityImageUrl` | User-supplied city photo (optional) | URL |
| `hotel.name` | Booking page `<h1>` | `"Conrad Fort Lauderdale Beach"` |
| `hotel.location` | Booking page, plain text | `"Fort Lauderdale, Florida, United States"` |
| `hotel.heroImageUrl` | `<ul id="subSlides">` background-image + prepend `https://whatahotel.com` | URL |
| `hotel.heroAlt` | Short hotel description | `"Conrad aerial view"` |
| `room.name` | Room name from booking page | `"Junior Suite Partial Ocean View"` |
| `room.subtitle` | Short descriptor | `"Partial Ocean View"` |
| `room.badgeText` | Marketing line between "WhataHotel!" and "More Info"; else `"Exclusive Rate"` | `"3rd Night Free W Bkfst"` |
| `room.adr` | Nightly rate with currency, no "/night" | `"$458.63"` |
| `room.grandTotal` | Tax-inclusive grand total from booking page | `"$2,253.79"` |
| `room.nights` | Number of nights | `4` |
| `room.checkIn` | ISO date | `"2026-04-05"` |
| `room.checkOut` | ISO date | `"2026-04-09"` |
| `room.bookUrl` | Full booking URL (prepend `https://www.whatahotel.com` to relative href) | URL |
| `room.images` | From `<a href>` in `ul.booking-img-list` (NOT `<img src>`), max 2 per room | `[{ src, alt }]` |
| `room.roomHighlights` | 2-3 bullets about the room | `["Ocean view", "King bed"]` |
| `room.perks` | Exclusive Perks items from perks section | `["Room Upgrade...", "Breakfast..."]` |

## What the factory handles (agent must NOT set)

Everything else: all section headings, button labels, formatting, pricing alignment, feature block structure, booking summary, check-in/out formatting, gallery visibility, portal values.

---

## Image extraction

### Hero image (`heroImageUrl`)

1. Find `<ul id="subSlides">` in HTML.
2. Read `background-image: url(...)` from the first `<li>`.
3. Prepend `https://whatahotel.com` (URL is relative).

### Room images (`images[]`)

1. For each room, find `.bookingItem` > `ul.booking-img-list`.
2. Extract `<a href>` URLs — **never** `<img src>` (those are thumbnails).
3. Max 2 per room. Valid CDNs: `d2573qu6qrjt8c.cloudfront.net` or `d321ocj5nbe62c.cloudfront.net`.
4. Skip `/img/paceholder.jpg` — pass empty array instead.

---

## Multi-hotel promos

When the user provides 2+ booking URLs with different hotel IDs:
- Each URL = one `HotelInput` in `hotels[]`.
- Data from each URL stays in its own entry. Never cross hotel data.
- Single vs multi-hotel is auto-detected by the factory.

---

## Defaults

- **Rooms:** 3 lowest-priced standard room types.
- **Promo id:** next free `promo-N` from `promos.ts`.
- **Client:** `""` if not provided.

---

## Scope restrictions

- Edit only `src/data/promo-N.ts` and `src/data/promos.ts`.
- Never edit `src/types.ts`, `src/components/`, or `src/lib/promoFactory.ts`.
- Never copy from existing `promo-*.ts` files.
