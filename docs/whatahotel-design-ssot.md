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
  specialOffer?: SpecialOffer;
  priceSummary?: PriceSummary;

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

interface SpecialOffer {
  title: string; // e.g. "EXCLUSIVE: STAY LONGER — 4TH NIGHT FREE!"
  description: string; // e.g. "Your dates qualify for..."
  highlights: Array<{
    icon: string; // FontAwesome icon name (e.g. "check", "star", "gift")
    text: string; // e.g. "Qualifies Oct 12–20"
  }>;
  validityText?: string; // e.g. "Valid May 7 – Nov 19, 2026 (selected dates)"
}

interface PriceSummary {
  items: Array<{
    label: string; // e.g. "Unit 1 — Parents' Suite"
    sqft?: string; // e.g. "1,108 sq ft"
    bedConfig?: string; // e.g. "1 King + Sofabed"
    whatahotelRate: string; // e.g. "$2,100.00"
    regularRate: string; // Struck-through rate, e.g. "$2,800.00"
    total: string; // e.g. "$18,648.00"
  }>;
  totalSavings?: string; // e.g. "$5,849.90"
  grandTotal?: string; // e.g. "$24,947.25"
  savingsNote?: string; // HTML allowed, e.g. "All prices exclude taxes..."
}

interface SavingsBreakdown {
  nights: string; // e.g. "8 Nights"
  paidNights: number; // e.g. 6
  freeNights: number; // e.g. 2
  standardRate: string; // e.g. "$2,800/night"
  standardTotal: string; // e.g. "$22,400"
  whatahotelRate: string; // e.g. "$1,483/night"
  whatahotelTotal: string; // e.g. "$18,648"
  savingsAmount: string; // e.g. "$3,752.00"
  savingsPercentage?: string; // e.g. "16.8%"
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
  savingsBreakdown?: SavingsBreakdown; // Detailed breakdown: paid/free nights, standard vs WhataHotel rates
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

## SavingsBreakdown (Per-Room) ⚠️ Optional but Recommended

The `<SavingsBreakdown />` component displays a detailed pricing breakdown **within each room card** — showing the impact of free nights, special offers, or rate differences.

### When to use

- Multi-night stays with special promotions (e.g., "4th Night Free")
- When you want to show standard rate vs WhataHotel! rate comparison at the room level
- To replace long, cluttered text descriptions in the `savings.leftSub` field

### How to populate `savingsBreakdown`

Add optional `savingsBreakdown` field to each `Room`:

```ts
savingsBreakdown?: {
  nights: "8 Nights",
  paidNights: 6,
  freeNights: 2,
  standardRate: "$2,800",
  standardTotal: "$22,400",
  whatahotelRate: "$1,483",
  whatahotelTotal: "$18,648.00",
  savingsAmount: "$3,752.00",
  savingsPercentage: "16.8%",
};
```

### Placement in RoomCard

The component renders **between the price card and room images**:

```
Price Card (name, rate, total)
    ↓
[SavingsBreakdown] ← NEW (optional)
    ↓
Room Images
    ↓
Features
    ↓
Savings Bar (legacy)
    ↓
Book Button
```

### Rules

- All fields are **required strings** except `savingsPercentage` (optional)
- `nights`: e.g., `"4 Nights"`, `"8 Nights"`
- `paidNights` / `freeNights`: numbers only (e.g., 6, 2)
- Rates: include currency (e.g., `"$2,800"`, `"€1,530"`)
- Totals: formatted price (e.g., `"$22,400"`, `"€4,590.00"`)
- `savingsAmount`: always show currency and cents if fractional
- `savingsPercentage`: optional, e.g., `"16.8%"` or omit

---

## SpecialOfferBox (Promo-Level) ⚠️ Optional

The `<SpecialOfferBox />` component highlights key promotions or special terms ** below the OfferBanner and above room cards**.

### When to use

- "4th Night Free" offers
- Exclusive cancellation policies
- Limited-time promotions
- Multi-night discounts

### How to populate `specialOffer`

Add optional `specialOffer` field to the `Promo`:

```ts
specialOffer?: {
  title: "EXCLUSIVE: STAY LONGER — 4TH NIGHT FREE!",
  description: "Your August 12–20 dates qualify for the Four Seasons' 'Fourth Night Free' promotion. On an 8-night stay, each room earns TWO (2) completely free nights.",
  highlights: [
    { icon: "check", text: "Qualifies Aug 12–20" },
    { icon: "check", text: "2 Free Nights × 2 Rooms" },
    { icon: "star", text: "Combinable with WhataHotel! Perks" },
  ],
  validityText: "Valid May 7 – Nov 19, 2026 (selected dates). Subject to availability at booking.",
};
```

### Placement in PromoPage

```tsx
<OfferBanner ... />
{promo.specialOffer && (
  <div className="body">
    <SpecialOfferBox offer={promo.specialOffer} />
  </div>
)}
<div className="body">
  {promo.rooms!.map((room) => <RoomCard ... />)}
</div>
```

### Rules

- `title`: MUST USE `text-transform: uppercase` — typically starts with "EXCLUSIVE:"
- `description`: Plain text or simple formatting (HTML allowed but keep it minimal)
- `highlights[]`: Array of icon + text pairs; icons are FontAwesome names (e.g., `"check"`, `"star"`, `"gift"`)
- `validityText`: Optional, appears in italics at bottom

---

## PriceSummaryTable (Multi-Unit Totals) ⚠️ Optional

The `<PriceSummaryTable />` component shows a **consolidated pricing table** for **all room units combined** — ideal for multi-unit properties or connecting rooms.

### When to use

- Connecting units (parents' room + kids' room)
- Properties with multiple standard room options
- When you need to show combined grand total + total savings

### How to populate `priceSummary`

Add optional `priceSummary` field to the `Promo`:

```ts
priceSummary?: {
  items: [
    {
      label: "Unit 1 — Parents' Suite",
      sqft: "1,108 sq ft",
      bedConfig: "1 King + Sofabed",
      whatahotelRate: "$2,100.00",
      regularRate: "$2,800.00",
      total: "$18,648.00",
    },
    {
      label: "Unit 2 — Kids' Connecting Room",
      sqft: "532 sq ft",
      bedConfig: "2 Queens",
      whatahotelRate: "$709.38",
      regularRate: "$945.63",
      total: "$6,299.25",
    },
  ],
  totalSavings: "$5,849.90",
  grandTotal: "$24,947.25",
  savingsNote: "💰 Total savings vs. regular rate across both units. All prices exclude taxes & resort fees.",
};
```

### Placement in PromoPage

```tsx
{promo.rooms!.map((room) => <RoomCard ... />)}
<ComparisonOverview rooms={promo.rooms!} />
{promo.priceSummary && (
  <div className="body">
    <PriceSummaryTable
      items={promo.priceSummary.items}
      totalSavings={promo.priceSummary.totalSavings}
      grandTotal={promo.priceSummary.grandTotal}
      savingsNote={promo.priceSummary.savingsNote}
    />
  </div>
)}
<AppDownload />
<ContactFooter ... />
```

### Rules

- `items`: Array of pricing rows; each row represents one unit/room option
- `label`: e.g., `"Unit 1 — Parents' Suite"`, `"Room Option 1"`, `"Deluxe Ocean View"`
- `sqft` / `bedConfig`: Optional; provide if available for clarity
- `whatahotelRate`: The special/exclusive rate (e.g., `"$2,100.00"`)
- `regularRate`: Standard BAR rate; will be displayed with strikethrough
- `total`: Final cost for this unit (e.g., `"$18,648.00"` for 8-night stay)
- `totalSavings`: Sum of all savings across units (e.g., `"$5,849.90"`)
- `grandTotal`: Sum of all unit totals (e.g., `"$24,947.25"`)
- `savingsNote`: Optional; can include HTML (e.g., emoji, <strong>, HTML entities)

---

## Room Images ⚠️ Always Scrape from Page — Never Default to Placeholder

Each `.bookingItem` on the WhataHotel booking page contains an image carousel with `<img>` tags containing full CloudFront URLs.

### HTML Structure

```html
<div class="bookingItem">
  <div class="roomHeader">...</div>
  <div class="carousel">
    <!-- or .imageSlider or similar image container -->
    <img
      src="https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/164/472/391/DeluxeRoom_204_ThePeninsulaParis_(c)WillPryce_HD_P.jpg"
      alt="Deluxe Room"
    />
    <img
      src="https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/164/472/597/DeluxeRoom_204_Bathroom_ThePeninsulaParis_(c)WillPryce_HD_P.jpg"
      alt="Bathroom"
    />
    <img src="https://d321ocj5nbe62c.cloudfront.net/..." alt="..." />
    <!-- 3rd image; we only use first 2 -->
  </div>
  <div class="rates">...</div>
</div>
```

### CSS Selector Rules

- **Find all room images where they live**: Within each `.bookingItem`, look for `<img>` tags located in an image carousel/slider container
- **Selector may vary** — the container can be `.imageSlider`, `.carousel`, `.images`, or an unlabeled `<div>` near the room header
- **Handle both `src` and `data-src`** — some images use lazy-loading with `data-src` attributes. Always check for:
  - `<img src="https://d321ocj5nbe62c.cloudfront.net/...">` ← Standard
  - `<img data-src="https://d321ocj5nbe62c.cloudfront.net/...">` ← Lazy-loaded; use `data-src` value if `src` is missing
- **Size filtering** — Skip images with width or height below 200px (likely icons/logos); only use room photos

### Rules

- Always extract the **first 2 image URLs** from the room's image list
- ALL images must be from `d321ocj5nbe62c.cloudfront.net` CDN; use URLs as-is (never modify the URL)
- Extract the `alt` text from the `<img>` tag and use it as-is, or use the room name if `alt` is blank
- If a room has fewer than 2 images available, use what's there (e.g., just 1 image) — do NOT pad with placeholder
- The placeholder `https://www.whatahotel.com/img/paceholder.jpg` is **only** used if the page genuinely has zero images for a room type — this is rare
- The same image URL may be reused across room types if the hotel uses a shared bathroom/detail shot — this is acceptable and expected

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

### Common Image Extraction Mistakes ⚠️

| Mistake                            | Fix                                                                                                                          |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Using nav/header logo images       | Check image width/height: skip those < 200px; be selective about closeness to room header                                    |
| Missing lazy-loaded images         | Check both `src` AND `data-src` attributes; modern pages use lazy-loading                                                    |
| Using placeholder URLs             | Never use image URLs from `whatahotel.com/img/` domain; ALL room images must come from `d321ocj5nbe62c.cloudfront.net`       |
| Only finding 1 image when 2 exist  | Make sure you're extracting from the image carousel, not just the first `<img>` on the page                                  |
| Using wrong CDN format             | Some pages might have Amazon S3 URLs or other CDNs; verify the full URL starts with `https://d321ocj5nbe62c.cloudfront.net/` |
| Extracting images from page header | The hero/page banner images are NOT room images; look within each `.bookingItem` row only                                    |

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

⚠️ **This is critical — missing images is the most common error.**

For each room row in the table:

1. **Locate the room's image carousel**: Scroll to the room row and find the image slider/carousel container. It will be in or near the room's header area.
2. **Extract all `<img>` tags** with width/height >= 200px (skip icons/logos)
3. **Check both `src` and `data-src`** attributes:
   - If `<img src="https://d321ocj5nbe62c.cloudfront.net/..."` exists, use the `src` URL
   - If `src` is missing/placeholder but `data-src="https://d321ocj5nbe62c.cloudfront.net/..."` exists, use `data-src`
   - If both are placeholder/missing, move to the next image
4. **Take the first 2 valid CloudFront URLs**
5. **Validate**: All URLs must start with `https://d321ocj5nbe62c.cloudfront.net/` (not whatahotel.com or other CDN)
6. **Use alt text**: Extract the `alt` attribute from each `<img>` tag; if blank, derive from room name (e.g., "Deluxe Room — Hotel Name")

**Troubleshooting**:

- If you find 0 images after this process, use the placeholder URL `https://www.whatahotel.com/img/paceholder.jpg` (rare)
- If first image is tiny/pixelated, skip it and use the 2nd image instead
- If you see only 1 image per room, include only 1 URL

**Example result**:

```ts
images: [
  {
    src: "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/164/472/391/DeluxeRoom_204_ThePeninsulaParis_(c)WillPryce_HD_P.jpg",
    alt: "Deluxe Room — The Peninsula Paris",
  },
  {
    src: "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/164/472/597/DeluxeRoom_204_Bathroom_ThePeninsulaParis_(c)WillPryce_HD_P.jpg",
    alt: "Bathroom — The Peninsula Paris",
  },
];
```

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

## Netlify Project Context (Agent Prompt) — Token-Optimized for Efficiency

Paste this into **Netlify → Site configuration → Agent runs → Project context**:

```
🚨 TOKEN EFFICIENCY RULES — MANDATORY 🚨

MISSION: Create WhataHotel! proposal data files following the SSOT only.
SINGLE FETCH. DIRECT CREATION. ZERO REFETCHING. ZERO VERIFICATION FETCHES.

CONSTRAINTS:
- React SPA — only create src/data/promo-N.ts files
- Register every new promo in src/data/promos.ts (import + export)
- Never modify component files
- Never create HTML files or folders

⛔ CRITICAL: FETCH THE PAGE EXACTLY ONCE AND NEVER AGAIN
- First action: Fetch https://www.whatahotel.com/booking/showRates.cfm?... URL provided by user
- Parse the HTML completely in one pass (rooms, rates, images, perks, everything)
- Store the parsed data in memory
- Do NOT re-fetch for "verification", "checking", "validating", or any other reason
- Do NOT fetch existing promo files for "reference" — use the SSOT examples only
- Do NOT fetch the hero image separately — extract it during the initial HTML parse
- Each token spent on extra fetches = wasted cost

WORKFLOW (ALWAYS FOLLOW THIS ORDER):
1. Ask user for the booking page URL (only question needed)
2. Fetch the URL ONCE — extract rooms, rates, images, hero, perks, totals (all in one parse)
3. Read /docs/whatahotel-design-ssot.md for structure only (do not fetch from it)
4. Build the complete promo object using only:
   - The parsed HTML data (cached in memory)
   - The SSOT structure rules
5. Register in src/data/promos.ts
6. Commit with branch name: promo-N-YYYYMMDD
7. Done — finished

EXTRACTION RULES (COMPLETE IN ONE PASS):

From <h1>: Hotel name
From <h4>: Starting-at rate per night (lowest SEASONAL OFFER)
From rate table rows:
  - SEASONAL OFFER: lowest rate → bookUrl source
  - BAR: higher rate → priceStrike source
From <h3> inside .bookingItem: Room names
From .bookingItem images (first 2 only):
  - Check src attribute for d321ocj5nbe62c.cloudfront.net URL
  - If src is placeholder, check data-src attribute (lazy-loaded)
  - Skip images < 200px; validate CDN domain
From <a href="/booking/booking_info.cfm...">: Extract room code, rate code, hotel ID
From page totals: N-night cost for each rate variant
From hero section: Background image URL

REQUIRED DATA STRUCTURE:

Single-Hotel Promo:
- id, title, client, dates, thumbnailUrl, portalTotalLabel, portalTotalValue
- hero: imageUrl, alt, hotel, location
- offer: heading, description, pills[]
- rooms[]: badgeText, name, subtitle, priceLabel, priceRate, priceStrike, priceTotal, images[], features[], savings, bookUrl, bookLabel
- contact: sharedContact

Multi-Hotel Promo:
- Same as above but wrap each hotel's sections in hotels[]

MANDATORY FIELDS (NEVER OMIT):
- priceStrike: use "" (empty string) if no BAR rate exists
- images: exactly 2 URLs per room, from d321ocj5nbe62c.cloudfront.net only
- comparison[]: 3 rows [Nightly Rate, N-Night Total, You Save] with standard/whatahotel rates
- savings.leftLabel: must wrap rate name in <span>
- savings.leftSub: must show "Standard: X/night (total: Y) — WhataHotel!: A/night (total: B) — you save Z"

OPTIONAL COMPONENTS (use if applicable):
- savingsBreakdown?: For free-night promos or complex pricing breakdowns
- specialOffer?: For highlighted promotions or cancellation policies
- priceSummary?: For multi-unit or package pricing tables

⚠️ FORBIDDEN ACTIONS (THESE WASTE TOKENS):
- ❌ Do NOT "check" an existing promo file for reference — use the SSOT examples
- ❌ Do NOT fetch the hero image separately — extract from initial page parse
- ❌ Do NOT re-read the booking page after initial fetch
- ❌ Do NOT verify data by fetching again
- ❌ Do NOT find/read src/data/promo-9.ts for examples — refer to SSOT sections instead
- ❌ Do NOT run verification commands after building the file
- ❌ Do NOT browse the project directory — only edit needed files

✅ CORRECT FLOW:
- Fetch the URL once
- Parse everything in one pass
- Build the TypeScript file from cached parsed data + SSOT rules
- Register in promos.ts
- Commit
- Done

EXTRACTION COMPLETE IN ONE PASS:

From <h1>: Hotel name
From <h4>: Starting-at rate per night (lowest SEASONAL OFFER)
From rate table rows:
  - SEASONAL OFFER: lowest rate → bookUrl source
  - BAR: higher rate → priceStrike source
From <h3> inside .bookingItem: Room names
From .bookingItem images (first 2 only):
  - Check src attribute for d321ocj5nbe62c.cloudfront.net URL
  - If src is placeholder, check data-src attribute (lazy-loaded)
  - Skip images < 200px; validate CDN domain
From <a href="/booking/booking_info.cfm...">: Extract room code, rate code, hotel ID
From page totals: N-night cost for each rate variant
From hero section background-image: Extract and prepend https://www.whatahotel.com

REQUIRED DATA STRUCTURE:

Single-Hotel Promo:
- id, title, client, dates, thumbnailUrl, portalTotalLabel, portalTotalValue
- hero: imageUrl, alt, hotel, location
- offer: heading, description, pills[]
- rooms[]: badgeText, name, subtitle, priceLabel, priceRate, priceStrike, priceTotal, images[], features[], comparison[], savings, bookUrl, bookLabel
- contact: sharedContact

Multi-Hotel Promo:
- Same as above but wrap each hotel's sections in hotels[]

MANDATORY FIELDS (NEVER OMIT):
- priceStrike: use "" (empty string) if no BAR rate exists
- images: exactly 2 URLs per room, from d321ocj5nbe62c.cloudfront.net only
- comparison[]: 3 rows [Nightly Rate, N-Night Total, You Save] with standard/whatahotel rates
- savings.leftLabel: must wrap rate name in <span>
- savings.leftSub: must show "Standard: X/night (total: Y) — WhataHotel!: A/night (total: B) — you save Z"

CODE EXAMPLES IN SSOT:
- Clarification Protocol: Step-by-step extraction checklist
- Comparison Array section: Exact rate calculation examples
- promo-9.ts: Reference file with proper CloudFront URLs

FINAL WORKFLOW:

1. Ask user: "What is the WhataHotel booking page URL?"
2. Fetch that URL exactly once — parse complete HTML
3. Extract: hotel name, rates, rooms, images, perks, totals (all from that one fetch)
4. Use SSOT structure rules to build the TypeScript object
5. Create src/data/promo-N.ts
6. Update src/data/promos.ts with import + export
7. Commit with branch: promo-N-YYYYMMDD
8. Push to GitHub
9. Netlify deploys automatically
10. Done — no additional fetches, no verification steps
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
- [ ] `<ComparisonOverview />` is present after last room card(s), before optional components & `<AppDownload />`
- [ ] `[OPTIONAL]` `savingsBreakdown` field present in rooms if detailed pricing breakdown is needed (e.g., free nights promo)
- [ ] `[OPTIONAL]` `specialOffer` field present in promo if special promotion/offer exists to highlight
- [ ] `[OPTIONAL]` `priceSummary` field present in promo if multi-unit pricing table is needed
- [ ] If optional components used: data is complete and formatted correctly (see SavingsBreakdown, SpecialOfferBox, PriceSummaryTable sections)
- [ ] `<AppDownload />` is present after `<ComparisonOverview />` and before `<ContactFooter />`
- [ ] Promo registered in `src/data/promos.ts`
- [ ] Committed to GitHub and verified live on Netlify

---

_WhataHotel! / Lorraine Travel · Updated March 2026_
