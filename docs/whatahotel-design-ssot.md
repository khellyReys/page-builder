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
    ComparisonOverview.tsx  ← Renders after all room cards, before AppDownload
    AppDownload.tsx         ← App store download section (always rendered)
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
  comparison: ComparisonRow[]; // See Comparison Overview section below
  bookUrl: string;
  bookLabel: string;
}

interface ComparisonRow {
  label: string; // e.g. "Nightly Rate", "3-Night Total", "You Save"
  standard: string; // e.g. "€1,700/night" — the BAR/standard rate
  whatahotel: string; // e.g. "€1,530/night" — the WhataHotel exclusive rate
  highlight?: boolean; // true for the "You Save" row — renders with accent color
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

- Include `$` sign (or relevant currency symbol)
- Include cents if the rate is fractional: `"$996.67"`, `"€1,530.00"`
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

---

## Savings Block Rules ⚠️

The `savings` object must reflect **all three** of the following — per-night comparison, total for the stay, and savings amount. Never show only the total.

### `savings.leftLabel` ⚠️ Critical

This field is rendered via `dangerouslySetInnerHTML`. It **must always** use a `<span>` wrapper around the rate label:

```ts
leftLabel: "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>";
leftLabel: "2 Nights &nbsp;|&nbsp; <span>Special Offer Rate</span>";
```

Never write: `"3 Nights | WhataHotel! Exclusive Rate"` — the span styling will be missing.

### `savings.leftSub`

Must include **all three** data points — per-night breakdown, total calculation, and savings — using `<strong>` for amounts:

```ts
// Full format:
leftSub: "Standard rate: €1,700/night &times; 3 = €5,100 &mdash; WhataHotel! rate: €1,530/night &times; 3 = €4,590 &mdash; you save <strong>€510</strong>";

// Shorter format when space is tight:
leftSub: "€1,700 standard vs €1,530 WhataHotel! rate &times; 3 nights &mdash; you save <strong>€510</strong>";
```

Never omit the savings amount. Never show only the total without the per-night context.

### `savings.rightLabel`

Use `"(excl. taxes)"` when taxes are not included in the total.  
Use `"(incl. taxes)"` when taxes are included.

### `savings.rightValue`

This is the **WhataHotel! total** for the full stay, not the standard rate total.  
Format: `"€4,590"` or `"$2,990.01"` — match the currency of the booking page.

---

## Comparison Overview ⚠️ Required on Every Room

Each room must include a `comparison` array. This powers the `<ComparisonOverview />` component, which renders **below all room cards and above `<AppDownload />`**.

The comparison table shows a side-by-side breakdown of Standard Rate vs. WhataHotel! Rate for every room option featured in the promo.

### How to populate `comparison`

Always include exactly **3 rows** per room:

```ts
comparison: [
  {
    label: "Nightly Rate",
    standard: "€1,700/night",   // BAR rate from the page
    whatahotel: "€1,530/night", // SEASONAL OFFER / lowest rate
  },
  {
    label: `${N}-Night Total`,  // e.g. "3-Night Total"
    standard: "€5,100",         // BAR rate × number of nights
    whatahotel: "€4,590",       // WhataHotel rate × number of nights (= priceTotal amount)
  },
  {
    label: "You Save",
    standard: "",               // leave blank for "You Save" row
    whatahotel: "€510",         // difference: standard total − WhataHotel total
    highlight: true,            // renders row in accent/burgundy color
  },
],
```

### Where to extract rates

- **Standard rate** (`standard`) → the **BAR** rate row on the booking page (labeled `+ WhataHotel! + BAR + ...`)
- **WhataHotel rate** (`whatahotel`) → the **SEASONAL OFFER** rate row (labeled `+ WhataHotel! + SEASONAL OFFER + ...`)
- If no BAR rate exists (only one rate variant), set `standard` to `""` and omit the `highlight` row, or note this with `// AGENT NOTE`

### Placement in `PromoPage.tsx`

```tsx
// Single-hotel
<div className="body">
  {promo.rooms!.map((room) => <RoomCard key={room.badgeText} room={room} />)}
</div>
<ComparisonOverview rooms={promo.rooms!} nights={N} />  {/* ← after room cards */}
<AppDownload />
<ContactFooter ... />

// Multi-hotel — one ComparisonOverview per hotel, after its rooms
{promo.hotels.map((hotel, index) => (
  <div key={index}>
    <HeroSection ... />
    <OfferBanner ... />
    <div className="body">
      {hotel.rooms.map((room) => <RoomCard key={room.badgeText} room={room} />)}
    </div>
    <ComparisonOverview rooms={hotel.rooms} nights={N} />  {/* ← after each hotel's rooms */}
  </div>
))}
<AppDownload />
<ContactFooter ... />
```

---

## Room Images ⚠️ Always Scrape from Page — Never Default to Placeholder

Each `.bookingItem` on the WhataHotel booking page contains `<img>` tags with full CloudFront URLs:

```html
<img
  src="https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/164/472/391/DeluxeRoom_204_ThePeninsulaParis_(c)WillPryce_HD_P.jpg"
/>
<img
  src="https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/164/472/597/DeluxeRoom_204_Bathroom_ThePeninsulaParis_(c)WillPryce_HD_P.jpg"
/>
```

### Rules

- Always use the **first 2 image URLs** from the room's image list in the page HTML
- Some rooms have 2 images, some have 3 — always take the first 2
- The `alt` text should match the room name (e.g. `"Deluxe Room 1 King Bed"`)
- The placeholder `https://www.whatahotel.com/img/paceholder.jpg` is **only** a last resort when the page genuinely has no images for a room — this should be rare
- Image URLs from the booking page are on the `d321ocj5nbe62c.cloudfront.net` CDN — use them as-is, no modification needed
- The same image URL may be reused across rooms if the hotel uses a shared bathroom/detail shot — this is acceptable

### Example

```ts
images: [
  {
    src: "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/164/472/391/DeluxeRoom_204_ThePeninsulaParis_(c)WillPryce_HD_P.jpg",
    alt: "Deluxe Room — The Peninsula Paris",
  },
  {
    src: "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/164/472/597/DeluxeRoom_204_Bathroom_ThePeninsulaParis_(c)WillPryce_HD_P.jpg",
    alt: "Deluxe Room Bathroom — The Peninsula Paris",
  },
],
```

---

## Booking URL Rules ⚠️ Critical

### Rate variants on the same room

The booking page often shows **multiple rate rows per room type** — typically a lower SEASONAL OFFER rate and a higher BAR rate:

```
SEASONAL OFFER — Deluxe Room 1 King    €1,530/night  → room=A1KP77
BAR            — Deluxe Room 1 King    €1,700/night  → room=A1KP76
```

**Always use the SEASONAL OFFER (lowest) rate URL as the `bookUrl`.**  
The BAR rate URL is only used for the `comparison[].standard` value — never as the `bookUrl`.

Add a comment when multiple variants exist:

```ts
// AGENT NOTE: 2 rate variants — SEASONAL OFFER €1,530 (A1KP77) and BAR €1,700 (A1KP76). Using lowest.
```

### Construct booking URLs correctly

Each room's booking URL comes from the `href` on its "Book Now" link:

```html
<a
  href="/booking/booking_info.cfm?room=A1KP77&rate=PJ8&hotel=2881&checkin=2026-04-02&checkout=2026-04-03&guests=2&children=0&rooms=1"
  >Book Now</a
>
```

Prepend `https://www.whatahotel.com` to make it absolute:

```ts
bookUrl: "https://www.whatahotel.com/booking/booking_info.cfm?room=A1KP77&rate=PJ8&hotel=2881&checkin=2026-04-02&checkout=2026-04-03&guests=2&children=0&rooms=1";
```

Each room type has a **unique `room` code** (e.g. `A1KP77`, `A13P77`, `P1KP77`). Never reuse the same `room` code across different room types.

---

## App Download Section ⚠️ Required on Every Promo Page

Every promo page **must** include the `<AppDownload />` component after `<ComparisonOverview />` and before `<ContactFooter />`.

### App Store Links (hardcoded in component — never change)

- **iOS:** `https://apps.apple.com/ph/app/whatahotel/id6759237169`
- **Android:** `https://play.google.com/store/apps/details?id=com.whatahotel.app`
- **Heading copy:** "Download our app for more promos" — never change this text

### Rules

- `AppDownload` takes no props — links are hardcoded inside the component
- Placement order: RoomCards → ComparisonOverview → AppDownload → ContactFooter
- Never omit from any promo page — single-hotel or multi-hotel
- Never change the app store URLs

---

## HTML Entities Reference

Use these in strings rendered via `dangerouslySetInnerHTML` (hero location, offer description, subtitle, leftLabel, leftSub):

| Entity     | Output  | Use for                    |
| ---------- | ------- | -------------------------- |
| `&nbsp;`   | (space) | spacing around `\|`        |
| `&amp;`    | &       | ampersands in HTML strings |
| `&mdash;`  | —       | em dashes                  |
| `&middot;` | ·       | bullet separators          |
| `&times;`  | ×       | multiplication             |

Use plain characters (—, ·, ×, &) inside **plain text fields** like `items[]`, `bookLabel`, `title`, `dates`.

---

## Multi-Hotel Detection

Use `hotels[]` (not flat `hero/offer/rooms`) when:

- The proposal contains two or more distinct hotels
- There are two or more different hotel names
- There are two or more different hotel IDs in booking URLs

In multi-hotel mode:

- `thumbnailUrl` → use the first hotel's hero image
- `portalTotalValue` → lowest room total across ALL hotels
- Each hotel in `hotels[]` gets its own complete `hero`, `offer`, and `rooms[]`

---

## Clarification Protocol — What to Ask Before Creating a Promo

### Step 1 — Always fetch the URL first

If the user provides a WhataHotel! booking URL (`https://www.whatahotel.com/booking/showRates.cfm?hotelID=XXXX&...`), **fetch and read the full page HTML before doing anything else**. The page contains all the data needed:

- **Room names** — in `<h3>` tags inside each `.bookingItem`
- **Rate variants** — each room has multiple rows: look for `SEASONAL OFFER` (lowest) and `BAR` (standard/higher)
- **Nightly rates** — in `<h4>Starting at: <b>X,XXX.00 EUR/USD</b>` (lowest) and in individual rate rows
- **N-night totals** — in `Total¹ for N Nights: X,XXX.XX` inside the expanded rate info
- **Room images** — `<img>` tags inside each room's image list; use the first 2 per room; URLs are on `d321ocj5nbe62c.cloudfront.net`
- **Room-specific booking URLs** — in `href="/booking/booking_info.cfm?room=ROOMCODE&rate=RATE&hotel=HOTELID&..."` on each "Book Now" link; prepend `https://www.whatahotel.com`
- **Hero image** — in the `<ul id="subSlides">` background-image style — prepend `https://www.whatahotel.com`
- **Hotel name** — in `<h1>` tag
- **Perks** — in `.perksList` or the "Exclusive Complimentary Perks" section
- **Cancellation policy** — in the expanded rate info per room
- **Check-in / check-out dates** — from the URL parameters or the `<h4>` summary at the top

### Step 2 — Extract rates correctly (SEASONAL OFFER vs BAR)

Each room type appears twice in the rate table:

```
Row 1: SEASONAL OFFER — lower rate  → use for bookUrl, priceRate, whatahotel column
Row 2: BAR            — higher rate → use for priceStrike, standard column only
```

If only one rate variant exists (no BAR row), set `priceStrike: ""` and set `comparison[0].standard` to `""`.

### Step 3 — Build booking URLs

```
https://www.whatahotel.com/booking/booking_info.cfm?room=ROOMCODE&rate=RATE&hotel=HOTELID&checkin=YYYY-MM-DD&checkout=YYYY-MM-DD&guests=2&children=0&rooms=1
```

Extract `room`, `rate`, and `hotel` from the SEASONAL OFFER row's "Book Now" `href` for each room type.

### Step 4 — Extract room images

Find the `<img>` tags in the image slider for each `.bookingItem`. Take the first 2. Use the full CloudFront URL as-is.

### Step 5 — Select the rooms to show

The limit is **max 3 rooms per promo**. When the page has more than 3 rooms:

- Always pick the **3 lowest-priced** standard room options
- Skip ADA/accessible variants if a standard equivalent exists at the same price
- Skip villas unless the user specifically requests them

### Step 6 — Build the comparison array

For each room, compute:

```
standard nightly  = BAR rate (e.g. €1,700)
whatahotel nightly = SEASONAL OFFER rate (e.g. €1,530)
standard total    = standard nightly × N nights
whatahotel total  = whatahotel nightly × N nights  (= priceTotal amount)
savings           = standard total − whatahotel total
```

### Step 7 — Ask only if still missing after fetching

Only ask the user for clarification if these cannot be inferred from the page:

1. **Promo ID / number** — always ask, cannot be inferred
2. **Client name** — ask if not mentioned by user
3. **Which 3 rooms to feature** — ask only if the user has a preference; otherwise default to 3 lowest-priced standard rooms

### Never hallucinate

Never invent room names, rates, features, images, or URLs. Everything must come from the fetched page. If the page cannot be fetched, tell the user and ask them to paste the HTML.

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
- Never change component files (RoomCard, HeroSection, ComparisonOverview, etc.) unless explicitly asked
- savings.leftLabel MUST always wrap the rate label in <span> tags
- savings.leftSub MUST include per-night breakdown, total, AND savings amount — never just the total
- Always use "" not undefined for empty priceStrike
- contact is always: sharedContact (never inline)
- Multi-hotel promos use hotels[] — never mix with flat hero/offer/rooms

ROOM IMAGES — CRITICAL:
- Always scrape the first 2 <img> URLs from each room's image list on the booking page
- Images are on the d321ocj5nbe62c.cloudfront.net CDN — use them as-is
- NEVER default to the placeholder (https://www.whatahotel.com/img/paceholder.jpg) unless the page genuinely has no images for that room

BOOKING URLS — CRITICAL:
- Each room type has two rate rows: SEASONAL OFFER (lowest) and BAR (higher)
- Use the SEASONAL OFFER "Book Now" href as the bookUrl — prepend https://www.whatahotel.com
- Use the BAR rate only for priceStrike and comparison[].standard — never as bookUrl
- Add // AGENT NOTE comment when multiple variants exist

COMPARISON OVERVIEW — REQUIRED:
- Every room must have a comparison[] array with exactly 3 rows: Nightly Rate, N-Night Total, You Save
- standard = BAR rate; whatahotel = SEASONAL OFFER rate
- You Save row: highlight: true, standard: "", whatahotel = standard total minus whatahotel total
- ComparisonOverview renders after all room cards for that hotel, before AppDownload

HERO IMAGE:
- Found in subSlides background-image style — prepend https://www.whatahotel.com

ROOM SELECTION:
- Show the 3 lowest-priced standard rooms; skip ADA/accessible variants and villas unless requested

LAYOUT ORDER (per hotel section):
- HeroSection → OfferBanner → RoomCards → ComparisonOverview → [AppDownload → ContactFooter at end]

- Never hallucinate room data — if page cannot be fetched, tell the user and ask them to paste the HTML
- If any data is missing, add an // AGENT NOTE: comment listing what needs to be filled in
- Branch naming: promo-N-YYYYMMDD (e.g. promo-7-20260318)
- PR title must start with: "promo-N — Hotel Name" (e.g. "promo-7 — The Peninsula Paris")
```

---

## New Promo Checklist

- [ ] Create `src/data/promo-N.ts` with correct `id`, `title`, `client`, `dates`
- [ ] All rooms have exactly 2 feature blocks (door-open + gift)
- [ ] All `leftLabel` strings use `<span>` wrapper
- [ ] `leftSub` includes per-night breakdown, total calculation, AND savings amount
- [ ] `priceStrike` is `""` not omitted when no strikethrough exists
- [ ] `portalTotalValue` matches the lowest WhataHotel! total in the data
- [ ] Room images scraped from page (CloudFront CDN URLs) — placeholder only used if page has no images
- [ ] Each room has a `comparison[]` array with 3 rows: Nightly Rate, N-Night Total, You Save
- [ ] `comparison[].standard` uses BAR rate; `comparison[].whatahotel` uses SEASONAL OFFER rate
- [ ] `comparison[2].highlight` is `true` for the You Save row
- [ ] Multi-hotel promos use `hotels[]` not flat structure
- [ ] Each room's `bookUrl` uses the SEASONAL OFFER (lowest) rate's unique room code
- [ ] BAR rate used only for `priceStrike` and `comparison[].standard` — never as `bookUrl`
- [ ] `// AGENT NOTE` comment added when multiple rate variants exist per room
- [ ] No room data was hallucinated — all rates, names, images, and URLs came from fetched page
- [ ] If any data is missing, `// AGENT NOTE:` comment is present listing what needs updating
- [ ] `<ComparisonOverview />` is present after last room card(s), before `<AppDownload />`
- [ ] `<AppDownload />` is present after `<ComparisonOverview />`, before `<ContactFooter />`
- [ ] Promo registered in `src/data/promos.ts`
- [ ] Committed to GitHub and verified live on Netlify

---

_WhataHotel! / Lorraine Travel · Updated March 2026_
