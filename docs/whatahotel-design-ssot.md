# WhataHotel! Proposal Site — Single Source of Truth

> **Stack:** React + TypeScript + Vite — Deployed on Netlify via GitHub
> **Last updated:** April 2026

---

## How to create a new promo

Use `createPromo()` from `src/lib/promoFactory.ts`. The agent provides only raw data. The factory handles all formatting, labels, pricing alignment, and layout structure.

See `docs/whatahotel-agent-new-promo.md` for the complete guide with examples.

---

## Agent data contract

```ts
import { createPromo } from "../lib/promoFactory";
import type { PromoInput, HotelInput, RoomInput } from "../lib/promoFactory";
```

### PromoInput

| Field | Required | Example |
|---|---|---|
| `id` | Yes | `"promo-35"` |
| `title` | Yes | `"Easter Vacation"` |
| `dates` | Yes | `"Apr 5–9, 2026"` |
| `client` | No | `""` if not given |
| `hotels` | Yes | Array of `HotelInput` |
| `cityImageUrl` | No | Destination photo URL |
| `cityImageAlt` | No | `"Fort Lauderdale"` |

### HotelInput

| Field | Required | Example |
|---|---|---|
| `name` | Yes | `"Conrad Fort Lauderdale Beach"` |
| `location` | Yes | `"Fort Lauderdale, Florida, United States"` |
| `heroImageUrl` | Yes | `"https://whatahotel.com/content/hotels/3333/hero.jpg"` |
| `heroAlt` | Yes | `"Conrad aerial view"` |
| `rooms` | Yes | Array of `RoomInput` (max 3) |

### RoomInput

| Field | Required | Example |
|---|---|---|
| `name` | Yes | `"Junior Suite Partial Ocean View"` |
| `subtitle` | Yes | `"Partial Ocean View"` |
| `badgeText` | Yes | `"Exclusive Rate"` or `"3rd Night Free W Bkfst"` |
| `adr` | Yes | `"$458.63"` (price only, no "/night") |
| `grandTotal` | Yes | `"$2,253.79"` (incl. taxes & fees) |
| `nights` | Yes | `4` (number) |
| `checkIn` | Yes | `"2026-04-05"` (ISO date) |
| `checkOut` | Yes | `"2026-04-09"` (ISO date) |
| `bookUrl` | Yes | Full WhataHotel booking URL |
| `images` | No | `[{ src, alt }]` from `<a href>` in booking page |
| `roomHighlights` | Yes | `["Ocean view with king bed", "2 guests"]` |
| `perks` | Yes | `["Room Upgrade...", "Breakfast x 2 Daily"]` |

---

## Page sections

### Single hotel

1. **Masthead** — title, dates, client, logo
2. **City Image** — optional, when `cityImageUrl` is set
3. **Hotel Identity** — 5 stars + hotel name + location
4. **Hotel Hero Image** — framed property photo
5. **Room Cards** (repeated per room):
   - Badge + Name + Subtitle
   - Room Gallery (optional, when images provided)
   - Room Highlights (hardcoded heading)
   - Rate & pricing breakdown (2-column: ADR + Grand Total)
   - Book Now button
6. **Exclusive Perks** — deduped from all rooms
7. **Rate Comparisons** — table with all rooms
8. **App Download** — hardcoded
9. **Contact Footer** — hardcoded

### Multi hotel

1. **Masthead**
2. **City Image** — optional
3. Per hotel:
   - **Hotel Section Divider** (auto when 2+ hotels)
   - **Hotel Identity**
   - **Hotel Hero Image**
   - **Room Cards**
   - **Exclusive Perks** (per hotel, only if hotels differ)
4. **Exclusive Perks** — once before table, if all hotels share the same perks
5. **Rate Comparisons** — one combined table
6. **App Download**
7. **Contact Footer**

---

## Hardcoded text and labels

These are baked into the components. The agent never provides them.

| Text | Component |
|---|---|
| "by Lorraine Travel" | Masthead |
| WhataHotel logo + link | Masthead |
| "Destination" | CityHeroImage |
| 5 stars (★★★★★) | HotelIdentity |
| "Room Highlights" | RoomCard |
| "Rate & pricing breakdown" | ProposalInvestment |
| "Avg. Daily Rate (ADR)" | ProposalInvestment |
| "Per night" | ProposalInvestment |
| "Grand Total (incl. taxes & fees)" | ProposalInvestment + ComparisonOverview |
| "Book Now" | RoomCard |
| "Secure booking opens on WhataHotel.com in a new tab." | RoomCard |
| "Exclusive Perks" | PromoPage |
| "Rate Comparisons" | ComparisonOverview |
| Table headers: Hotel, Room category, Check-in/out, Nights, ADR, Grand Total | ComparisonOverview |
| "WhataHotel! Mobile App" + "Download our app for more promos" | AppDownload |
| App Store / Google Play links | AppDownload |
| "Questions? Contact your advisor" | ContactFooter |
| "Lorraine Travel" | ContactFooter |
| "Reservations@WhataHotel.com" | ContactFooter |

---

## Image extraction

### Hero image

1. Find `<ul id="subSlides">` in booking page HTML.
2. Read `background-image: url(...)` from the first `<li>`.
3. URL is relative — prepend `https://whatahotel.com`.

### Room images

1. For each room, find `.bookingItem` > `ul.booking-img-list`.
2. Extract `<a href>` URLs — never `<img src>` (thumbnails).
3. Max 2 per room.
4. Valid CDNs: `d2573qu6qrjt8c.cloudfront.net` or `d321ocj5nbe62c.cloudfront.net`.
5. Skip `/img/paceholder.jpg` — pass empty array.

---

## Booking URL construction

Each room's booking URL comes from the "Book Now" link `href` on the booking page. Prepend `https://www.whatahotel.com` to make it absolute.

When multiple rate variants exist (SEASONAL OFFER vs BAR), use the lowest (SEASONAL OFFER) rate for `bookUrl` and `adr`.

---

## Multi-hotel rules

- 2+ URLs with different hotel IDs = multi-hotel promo.
- Each URL = one `HotelInput`. Data never crosses between hotels.
- The factory auto-detects single vs multi from `hotels.length`.

---

## File structure

```
src/
  data/
    promo-N.ts        — Each promo uses createPromo()
    promos.ts         — Central registry
  types.ts            — Promo, Room, HotelBlock, HeroBlock
  lib/
    promoFactory.ts   — createPromo() factory (agent data contract)
    promoNormalizer.ts — Runtime normalization
    html.ts           — stripHtml helper
  components/
    Masthead.tsx, CityHeroImage.tsx, HotelSectionDivider.tsx,
    HotelIdentity.tsx, HeroSection.tsx, RoomCard.tsx,
    ProposalInvestment.tsx, ComparisonOverview.tsx,
    AppDownload.tsx, ContactFooter.tsx
  pages/
    PromoPage.tsx     — Renders single or multi-hotel promos
    Portal.tsx        — Homepage portal list
```

---

## Agent scope

- **Edit only:** `src/data/promo-N.ts` and `src/data/promos.ts`.
- **Never edit:** `src/types.ts`, `src/components/`, `src/lib/promoFactory.ts`.
- **Never copy** from existing promo files. Always use `createPromo()`.

---

## Netlify Project Context

Paste `docs/netlify-agent-project-context.txt` into Netlify > Site configuration > Agent runs > Project context.

---

_WhataHotel! / Lorraine Travel — Updated April 2026_
