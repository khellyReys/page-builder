# WhataHotel! Proposal Site — Single Source of Truth

> **For:** Lorraine Travel / WhataHotel!  
> **Stack:** React + TypeScript + Vite · Deployed on Netlify via GitHub  
> **Last updated:** March 2026

---

## How the Site Works

All proposal pages are powered by a single React app. There are no individual HTML files per proposal. Instead:

- Each proposal is a **TypeScript data file** in `src/data/promo-N.ts`
- All promos are registered in `src/data/promos.ts`
- The React router renders each promo at `/promo/promo-N`
- The portal homepage at `/` is built automatically from the same data

**To add a new proposal: create a data file. That's it.**  
No HTML files. No new folders. No template copying.

---

## File Structure

```
src/
  data/
    promo-1.ts        ← Naples, Florida
    promo-2.ts        ← ...
    promo-N.ts        ← New proposals go here
    promos.ts         ← Central registry — import + export all promos here
    contact.ts        ← Shared contact block (sharedContact)
  types.ts            ← Promo, HotelBlock, Room, etc. type definitions
  components/
    Masthead.tsx
    HeroSection.tsx
    OfferBanner.tsx
    RoomCard.tsx
    AppDownload.tsx   ← App store download section (always rendered)
    ContactFooter.tsx
  pages/
    PromoPage.tsx     ← Renders single or multi-hotel promos
    PortalPage.tsx    ← Homepage portal list
```

---

## The Promo Type

Every promo file exports a `Promo` object. There are two modes:

### Single-Hotel Promo

Use when the proposal covers one hotel. Populate `hero`, `offer`, and `rooms` directly.

### Multi-Hotel Promo

Use when the proposal covers two or more hotels. Populate `hotels[]` instead. Each entry in `hotels[]` has its own `hero`, `offer`, and `rooms[]`.

**Never mix both.** A promo either uses `hero/offer/rooms` OR `hotels[]`, never both.

---

## Full Type Reference

```ts
interface Promo {
  id: string; // e.g. "promo-7"
  title: string; // e.g. "Laguna Beach, California"
  client: string; // e.g. "The Sentz Family" or ""
  dates: string; // e.g. "June 2 – 5, 2026 | 3 Nights | 3 Room Options"
  thumbnailUrl: string; // Portal card image
  portalTotalLabel: string; // e.g. "Starting From" or "Combined Total"
  portalTotalValue: string; // e.g. "$2,990.01"

  // Single-hotel only
  hero?: HeroBlock;
  offer?: OfferBlock;
  rooms?: Room[];

  // Multi-hotel only
  hotels?: HotelBlock[];

  contact: Contact; // Always: sharedContact
}

interface HotelBlock {
  hero: HeroBlock;
  offer: OfferBlock;
  rooms: Room[];
}

interface HeroBlock {
  imageUrl: string;
  alt: string;
  hotel: string;
  location: string; // HTML string with <i> icon tag
}

interface OfferBlock {
  heading: string;
  description: string; // HTML allowed
  pills: string[]; // Each starts with "✔ "
}

interface Room {
  badgeText: string;
  name: string; // HTML allowed (<br/>)
  subtitle: string; // HTML allowed (<br/>, <strong>)
  priceLabel: string;
  priceRate: string; // e.g. "$996.67" — no "/night" suffix
  priceStrike: string; // Crossed-out rate or "" if none
  priceTotal: string; // e.g. "3-Night Total: $2,990.01"
  images: { src: string; alt: string }[];
  features: {
    title: string;
    icon: string; // FontAwesome icon name without "fa-"
    items: string[]; // Plain text only — no HTML inside items
  }[];
  savings: {
    leftLabel: string; // MUST use <span> — see rules below
    leftSub: string; // HTML allowed (<strong>)
    rightLabel: string;
    rightValue: string;
  };
  bookUrl: string;
  bookLabel: string;
}
```

---

## Field Rules — Follow Exactly

### `id`

Format: `"promo-N"` where N is the next number in sequence. Check `promos.ts` for the current highest number.

### `title`

Destination-first. Examples:

- `"Laguna Beach, California"`
- `"New York City — Two Hotel Options"`
- `"Aman New York — Ultra-Luxury Urban Sanctuary"`

### `dates`

Always: `"Month D – D, YYYY | N Nights | N Room Options"`  
Or for multi-room: `"Month D – D, YYYY | N Nights | Hotel Name"`

### `portalTotalLabel` / `portalTotalValue`

- Single hotel, one room type → `"Starting From"` + lowest total
- Multiple room types → `"Starting From"` + lowest total across all rooms
- Multi-unit (connecting rooms) → `"Combined Total"` + sum of both units
- `portalTotalValue` is always formatted as `"$X,XXX.XX"`

### `hero.location`

Always format as:

```ts
"<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>ADDRESS &nbsp;|&nbsp; DESCRIPTOR";
```

### `offer.pills`

Each pill starts with `"✔ "` (checkmark + space). Plain text only inside pills.

### `badgeText`

Use the appropriate emoji + label:

- Standard rooms: `"🏨 Option 1"`, `"🏨 Option 2"`, etc.
- Residences/suites: `"🏨 Residence 1"`, `"🏨 Residence 2"`, etc.
- Multi-hotel, single hotel rooms: `"🏨 Hotel Option 1 — Room 1"`, etc.
- Multi-hotel, suites: `"🏨 Hotel Option 2 — Suite 1"`, etc.
- Connecting units (family): `"🛏️ Unit 1 — Parents"`, `"🛏️ Unit 2 — Kids"`, etc.

### `name`

Use `<br/>` for line breaks. Example: `"Three-Bedroom Home<br/>Central Park View"`

### `subtitle`

Use `<br/>` for line breaks. Always end with a colored highlight:

```ts
"<strong style='color: var(--burgundy)'>Best Value — From $X,XXX/night</strong>";
```

### `priceRate`

- Include `$` sign
- Include cents if the rate is fractional: `"$996.67"`, `"$1,341.33"`
- No `/night` suffix — the component adds that
- No `.00` needed for whole numbers: `"$1,215"` not `"$1,215.00"`

### `priceStrike`

- If there's a strikethrough rate: `"Standard: $1,472.50/night"`
- If there's no strikethrough: `""` — never omit the field

### `features`

Always exactly **2 feature blocks** per room:

1. Room/Suite/Residence Features — `icon: "door-open"`
2. WhataHotel! Exclusive Perks — `icon: "gift"`

Feature items are **plain text only** — no HTML tags inside `items[]` strings.

### `savings.leftLabel` ⚠️ Critical

This field is rendered via `dangerouslySetInnerHTML`. It **must always** use a `<span>` wrapper around the rate label:

```ts
leftLabel: "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>";
leftLabel: "2 Nights &nbsp;|&nbsp; <span>Special Offer Rate</span>";
leftLabel: "8 Nights | 6 Paid + 2 FREE Nights"; // span optional if no rate label
```

Never write: `"3 Nights | WhataHotel! Exclusive Rate"` — the span styling will be missing.

### `savings.leftSub`

HTML is allowed. Use `<strong>` for savings amounts:

```ts
leftSub: "Standard rate: $1,472.50 × 2 = $3,386.39 — you save <strong>$338.51</strong>";
leftSub: "Includes all WhataHotel! exclusive perks &mdash; breakfast, spa credit &amp; more";
```

### `savings.rightLabel`

Use `"(excl. taxes)"` when taxes are not included in the total.  
Use `"(incl. taxes)"` when taxes are included.

### `images`

- Always provide 2 image objects per room
- If no real image URL is available, use: `"https://www.whatahotel.com/img/paceholder.jpg"`
- Never leave `src` blank

### `bookUrl` ⚠️ Critical

The booking URL must always use the **room-specific `hotelID`** from the source HTML. Rules:

- Each room gets its own unique `bookUrl` — never reuse the same URL across different rooms
- The `hotelID` query parameter identifies the specific room — always preserve it exactly
- If a room has **multiple booking IDs or rate variants**, always use the one with the **lowest price**
- Never use a generic hotel-level URL when a room-specific ID is available

**Correct — each room has its own unique hotelID:**

```ts
// Room 1
bookUrl: "https://www.whatahotel.com/booking/showRates.cfm?hotelID=6438&checkIn=2026-04-26&checkOut=2026-04-29&guests=2&children=0&rooms=1";
// Room 2
bookUrl: "https://www.whatahotel.com/booking/showRates.cfm?hotelID=6440&checkIn=2026-04-26&checkOut=2026-04-29&guests=2&children=0&rooms=1";
```

**Wrong — same hotelID reused across multiple rooms:**

```ts
// Room 1
bookUrl: "https://www.whatahotel.com/booking/showRates.cfm?hotelID=3103&..."; // ❌
// Room 2
bookUrl: "https://www.whatahotel.com/booking/showRates.cfm?hotelID=3103&..."; // ❌ same ID
```

**When multiple rate IDs exist for one room**, compare the nightly rates and use the URL associated with the lowest one. Add a comment above the room object:

```ts
// AGENT NOTE: Room had 2 rate variants ($1,325 and $1,472) — used lowest ($1,325), hotelID=3103
```

### `contact`

Always: `contact: sharedContact` — never inline the contact data.

---

## App Download Section ⚠️ Required on Every Promo Page

Every promo page **must** include the `<AppDownload />` component. It renders after the last room card and before the `<ContactFooter />`.

### Placement in `PromoPage.tsx`

```tsx
// Single-hotel
<div className="body">
  {promo.rooms!.map((room) => <RoomCard key={room.badgeText} room={room} />)}
</div>
<AppDownload />           {/* ← always here */}
<ContactFooter ... />

// Multi-hotel — AppDownload goes outside the hotels loop, after all hotels
{promo.hotels.map((hotel, index) => (
  <div key={index}>
    <HeroSection ... />
    <OfferBanner ... />
    <div className="body">
      {hotel.rooms.map((room) => <RoomCard key={room.badgeText} room={room} />)}
    </div>
  </div>
))}
<AppDownload />           {/* ← after all hotels, before footer */}
<ContactFooter ... />
```

### App Store Links (hardcoded in component — never change)

- **iOS:** `https://apps.apple.com/ph/app/whatahotel/id6759237169`
- **Android:** `https://play.google.com/store/apps/details?id=com.whatahotel.app`
- **Heading copy:** "Download our app for more promos" — never change this text

### Rules

- `AppDownload` takes no props — links are hardcoded inside the component
- Never move it above the room cards or below the `ContactFooter`
- Never omit it from any promo page — single-hotel or multi-hotel
- Never change the app store URLs

---

Use these in strings rendered via `dangerouslySetInnerHTML` (hero location, offer description, subtitle, leftLabel, leftSub):

| Entity     | Output             | Use for                    |
| ---------- | ------------------ | -------------------------- |
| `&nbsp;`   | non-breaking space | spacing around `\|`        |
| `&amp;`    | &                  | ampersands in HTML strings |
| `&mdash;`  | —                  | em dashes                  |
| `&middot;` | ·                  | bullet separators          |
| `&times;`  | ×                  | multiplication             |

Use plain characters (—, ·, ×, &) inside **plain text fields** like `items[]`, `bookLabel`, `title`, `dates`.

---

## Multi-Hotel Detection

Use `hotels[]` (not flat `hero/offer/rooms`) when:

- The proposal contains two or more distinct hotels
- There are two or more different hotel names
- There are two or more different `hotelID` values in booking URLs

In multi-hotel mode:

- `thumbnailUrl` → use the first hotel's hero image
- `portalTotalValue` → lowest room total across ALL hotels
- Each hotel in `hotels[]` gets its own complete `hero`, `offer`, and `rooms[]`

---

## Registering a New Promo

After creating `src/data/promo-N.ts`, update `src/data/promos.ts`:

```ts
import { promo1 } from "./promo-1";
import { promo2 } from "./promo-2";
// ... existing imports
import { promoN } from "./promo-N"; // ← add this

export const promos: Promo[] = [
  promo1,
  promo2,
  // ... existing promos
  promoN, // ← add this at the end
];
```

Once committed to GitHub, Netlify auto-deploys in ~30 seconds. The new promo is live at:

```
https://<your-site>/promo/promo-N
```

---

## Editing an Existing Promo

Edit the relevant `src/data/promo-N.ts` file directly. Commit to GitHub. Netlify rebuilds automatically.

---

## Netlify Project Context (Agent Prompt)

Paste this into **Netlify → Site configuration → Agent runs → Project context**:

```
You are maintaining the WhataHotel! by Lorraine Travel proposal site — a React + TypeScript app deployed on Netlify.

Read /docs/whatahotel-design-ssot.md before every task. It is the Single Source of Truth.

Key rules:
- New proposals = new src/data/promo-N.ts file + register in src/data/promos.ts
- Never create HTML files or new folders — this is a React SPA
- Never change component files (RoomCard, HeroSection, etc.) unless explicitly asked
- savings.leftLabel MUST always wrap the rate label in <span> tags
- Always use "" not undefined for empty priceStrike
- Placeholder images: https://www.whatahotel.com/img/paceholder.jpg
- contact is always: sharedContact (never inline)
- Multi-hotel promos use hotels[] — never mix with flat hero/offer/rooms
- bookUrl must use the room-specific hotelID — never reuse the same URL across rooms
- If a room has multiple rate variants, always use the lowest priced booking URL
- Always include <AppDownload /> after the last room card, before <ContactFooter />
- Branch naming: promo-N-YYYYMMDD (e.g. promo-7-20260318)
- PR title must start with: "promo-N — Hotel Name" (e.g. "promo-7 — Montage Laguna Beach")
```

---

## New Promo Checklist

- [ ] Create `src/data/promo-N.ts` with correct `id`, `title`, `client`, `dates`
- [ ] All rooms have exactly 2 feature blocks (door-open + gift)
- [ ] All `leftLabel` strings use `<span>` wrapper
- [ ] `priceStrike` is `""` not omitted when no strikethrough exists
- [ ] `portalTotalValue` matches the lowest total in the data
- [ ] Placeholder images used where real URLs unavailable
- [ ] Multi-hotel promos use `hotels[]` not flat structure
- [ ] Each room has its own unique `bookUrl` with room-specific `hotelID`
- [ ] If multiple rate variants exist per room, lowest price URL was used
- [ ] `<AppDownload />` is present after last room card, before `<ContactFooter />`
- [ ] Promo registered in `src/data/promos.ts`
- [ ] Committed to GitHub and verified live on Netlify

---

_WhataHotel! / Lorraine Travel · Updated March 2026_
