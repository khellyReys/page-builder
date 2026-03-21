# WhataHotel! Proposal Site — Single Source of Truth

> **For:** Lorraine Travel / WhataHotel!  
> **Stack:** React + TypeScript + Vite · Deployed on Netlify via GitHub  
> **Last updated:** March 2026 — **keep in sync with `src/types.ts` and `src/components/`**

---

## Production readiness (agents & maintainers)

| Area | Status | Notes |
|------|--------|--------|
| **Build / types** | OK | `npm run build` should pass before merge. |
| **Data-only workflow** | OK | New promos are TS data + `promos.ts` registry; no per-promo routes. |
| **SSOT doc** | **Must stay aligned** | This file previously drifted from the app (file names, room layout, optional fields). Sections below are updated; **re-verify after UI changes.** |
| **Redundancy** | Mitigated | If `savingsBreakdown` is set, the default **ADR / nights / grand total** investment layout is replaced by `<SavingsBreakdown />`. There is **no** savings strip under the room card; totals appear in the **booking summary** table and investment block. |
| **Gaps to improve** | Optional | Automated CI (`build` + lint), visual regression for proposal layouts, optional validation that `bookingSummary` or fallbacks (`stayCheckInOut`, `nightsLabel`, `savings.rightValue`) are populated. |

**Ready for production** as a Netlify-hosted SPA **if** agents follow this SSOT and you run a build on PRs. The main risk is **stale agent prompts** (Netlify project context) — update the block at the end of this doc when rules change.

---

## How the Site Works

All proposal pages are powered by a single React app. There are no individual HTML files per proposal. Instead:

- Each proposal is a **TypeScript data file** in `src/data/promo-N.ts`
- All promos are registered in `src/data/promos.ts`
- The React router renders each promo at `/promo/promo-N`
- The portal homepage at `/` is built automatically from the same data

**To add a new proposal: create a data file. That's it.**  
No HTML files. No new folders. No template copying.

**Portal ordering:** The homepage (`/`) sorts proposals by **`createdAt` (newest first)**. Order of imports in `promos.ts` does not control display order.

### Recommended agent workflow (new promos)

Use this order so you know **what to extract** before you touch the booking page:

1. **Read this SSOT** (`docs/whatahotel-design-ssot.md`) — field rules, booking-summary row data, investment block fields, `savings` (still required by types), optional `comparison[]` (legacy). Optionally skim **`src/types.ts`** for the exact TypeScript contract.
2. **Get the WhataHotel booking page URL** from the user (and promo id / client name if needed).
3. **Fetch that URL exactly once** — parse HTML in one pass (rooms, rates, images, hero, perks, totals). No re-fetch for “verification.”
4. **Create** `src/data/promo-N.ts` from parsed data + SSOT rules.
5. **Register** in `src/data/promos.ts` (import + add to `promos` array). Set **`createdAt`** (ISO 8601) for portal ordering.
6. **Commit / push** — Netlify deploys from GitHub.

Reading the docs first is **not** a network fetch; the **single-fetch rule** applies only to the **booking page** (and any other live URLs you must retrieve).

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
  constants.ts        ← DEFAULT_HERO_IMAGE, DEFAULT_ROOM_IMAGE (fallbacks)
  types.ts            ← Promo, HotelBlock, Room, etc. type definitions
  lib/
    html.ts           ← stripHtml helper (booking table fallbacks)
  components/
    Masthead.tsx
    HeroSection.tsx           ← Hero image only (no overlay text)
    HotelIdentity.tsx         ← Stars + hotel name + location below hero
    OfferBanner.tsx
    RoomMetaStrip.tsx         ← Optional quickFacts strip (Room Category, Suite Size, …)
    ProposalInvestment.tsx   ← ADR / nights / grand total + book CTA in grid (or SavingsBreakdown + CTA below)
    RoomCard.tsx              ← Room flow: label, intro, meta, gallery, investment, perks, ExperienceMore
    ExperienceMore.tsx      ← Optional spending-credit style block
    RoomOverviewGrid.tsx      ← Key-attribute grid (after table + footnote; book link is in ProposalInvestment)
    SavingsBreakdown.tsx      ← Standard vs WhataHotel! breakdown (optional per room)
    ComparisonOverview.tsx    ← Booking summary table — requires `hotelName` + `rooms`
    SpecialOfferBox.tsx
    PriceSummaryTable.tsx
    PromoCard.tsx
    AppDownload.tsx           ← App store section (always rendered on promo pages)
    ContactFooter.tsx
  pages/
    PromoPage.tsx     ← Renders single or multi-hotel promos (table → footnote → overview; book in investment block)
    Portal.tsx          ← Homepage portal list (not PortalPage.tsx)
```

---

## Proposal page layout (reference)

Target UX matches **[pro.whatahotel.com/best-proposal-sample](https://pro.whatahotel.com/best-proposal-sample)** (Travel Proposal pattern).

**Single-hotel render order (`PromoPage.tsx`):**

1. `Masthead` — logo links to `https://www.whatahotel.com/`
2. `HeroSection` — full-width image (`hero.imageUrl` or `DEFAULT_HERO_IMAGE` from `src/constants.ts`)
3. `HotelIdentity` — star row, `hero.hotel`, `hero.location` (HTML)
4. `OfferBanner` — only if `offer` exists and **`!offer.hidden`** and **`!promo.suppressOfferBanner`**
5. `SpecialOfferBox` — optional, promo-level
6. `RoomCard` for each room — includes **`ProposalInvestment`**, which renders **`bookUrl` / `bookLabel`** (bottom-right cell of the 2×2 pricing grid, or below `SavingsBreakdown` when that mode is used)
7. `ComparisonOverview` — **booking summary** table columns: Hotel · Room category · Check-in/out · Nights · ADR · Total (`rooms` + **`hotelName`** from `hero.hotel`)
8. Optional `promo.pricingFootnote` (HTML) — e.g. taxes disclaimer
9. `RoomOverviewGrid` per room when `keyAttributes` is set
10. Optional `PriceSummaryTable`
11. `AppDownload` — unchanged
12. `ContactFooter`

**Multi-hotel:** For **each** `hotels[]` entry, repeat steps 2–9 (through that hotel’s `RoomOverviewGrid`). **`specialOffer`** is rendered **once** before the hotel loop. **`promo.pricingFootnote`** appears after the **last** hotel’s booking table (current `PromoPage` behavior). After all hotels: step 10 → 11 → 12 (optional price summary, then `AppDownload`, then `ContactFooter`).

**Default images:** Empty `images[]` uses `DEFAULT_ROOM_IMAGE`; missing hero URL uses `DEFAULT_HERO_IMAGE`.

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
  createdAt: string; // ISO 8601 — required; portal sorts newest first
  mastheadEyebrow?: string; // e.g. "Travel proposal" — small label above title
  title: string; // e.g. "Laguna Beach, California"
  client: string; // e.g. "The Sentz Family" or ""
  dates: string; // e.g. "June 2 – 5, 2026 | 3 Nights | 3 Room Options"
  thumbnailUrl?: string; // Portal card image
  portalTotalLabel?: string; // e.g. "Starting From" or "Combined Total"
  portalTotalValue?: string; // e.g. "$2,990.01"

  // Single-hotel only
  hero?: HeroBlock;
  offer?: OfferBlock;
  rooms?: Room[];
  specialOffer?: SpecialOffer;
  priceSummary?: PriceSummary;

  // Multi-hotel only
  hotels?: HotelBlock[];

  /** HTML footnote after booking summary (e.g. taxes disclaimer). */
  pricingFootnote?: string;
  /** When true, `OfferBanner` is not rendered. */
  suppressOfferBanner?: boolean;

  contact: Contact; // Usually sharedContact; may include advisorName
}

interface Contact {
  email: string;
  footerHtml: string;
  advisorName?: string; // e.g. "Lorraine Travel" — shown above email when set
}

interface HotelBlock {
  hero: HeroBlock;
  offer: OfferBlock;
  rooms: Room[];
}

interface HeroBlock {
  imageUrl: string; // App uses DEFAULT_HERO_IMAGE if missing/empty
  alt: string;
  hotel: string;
  location: string; // HTML string with <i> icon tag — shown in HotelIdentity below hero
}

interface OfferBlock {
  heading: string;
  description: string; // HTML allowed
  pills: string[]; // Each starts with "✔ "
  /** When true, banner is hidden (matches slim proposal pages). */
  hidden?: boolean;
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
  /** Optional: full stay total incl. taxes & fees (standard side) — from booking page */
  standardTotalInclTaxes?: string; // e.g. "$24,100.00"
  /** Optional: full stay total incl. taxes & fees (WhataHotel side) */
  whatahotelTotalInclTaxes?: string; // e.g. "$20,200.00"
  savingsAmount: string; // e.g. "$3,752.00"
  savingsPercentage?: string; // e.g. "16.8%"
}

interface Room {
  badgeText: string;
  name: string; // HTML allowed (<br/>)
  subtitle: string; // HTML allowed (<br/>, <strong>)
  priceLabel?: string; // Optional ADR subline override (e.g. excl. taxes wording)
  priceRate: string; // e.g. "$996.67" — no "/night" suffix (shown as ADR)
  priceStrike?: string; // Crossed-out BAR reference; omit or "" if none
  /** Stay total excluding taxes — fallback copy for Grand Total if stayTotalExclAmount omitted */
  priceTotal: string;
  /** Large Grand Total figure (excl. taxes), e.g. "€35,541" */
  stayTotalExclAmount?: string;
  /** Subline under Grand Total, e.g. "3 Nights · excl. taxes & fees¹" */
  stayTotalExclSub?: string;
  /** Context line under "Rate & pricing breakdown" (HTML) */
  investmentContextLine?: string;
  /** Top strip before gallery: Room Category, Suite Size, Floor, Occupancy, … */
  quickFacts?: Array<{ label: string; value: string }>;
  stayCheckInOut?: string; // e.g. "Apr 27 → Apr 30" — booking table + investment
  nightsLabel?: string; // e.g. "3"
  includedValueLines?: Array<{ label: string; value: string; detail?: string }>;
  includedValueTotalLabel?: string;
  includedValueTotal?: string;
  includedValueTotalDetail?: string;
  experienceMore?: ExperienceMoreBlock; // Optional spending-credit style section
  pricingFootnote?: string; // Rare: per-room footnote (prefer promo.pricingFootnote)
  overviewTitle?: string; // Room overview `<h3>` override
  overviewSubtitle?: string;
  bookingSummary?: {
    checkInOut: string;
    nights: string;
    adr: string;
    total: string;
  };
  grandTotalInclTaxes?: string;
  grandTotalInclTaxesLabel?: string;
  keyAttributes?: Array<{ label: string; value: string; sub?: string }>; // After table + footnote; book CTA is in ProposalInvestment
  galleryTitle?: string;
  gallerySubtitle?: string;
  images: Array<{ src: string; alt: string; caption?: string }>; // [] → default room image
  features: {
    title: string;
    icon: string;
    items: string[];
  }[];
  /** Still required by TypeScript. `rightValue` is used as booking-table **Total** when `bookingSummary` is omitted. The narrative strip is not rendered. */
  savings: {
    leftLabel: string; // Keep populated for parity / future use; wrap rate in <span>
    leftSub: string;
    rightLabel: string;
    rightValue: string;
    rightInclTaxesLabel?: string; // Not shown in current UI
    rightInclTaxesValue?: string;
  };
  savingsBreakdown?: SavingsBreakdown; // Replaces default ADR / nights / grand total layout
  /** Legacy BAR vs WH rows — not used by the booking summary table; optional to keep for archives */
  comparison?: ComparisonRow[];
  bookUrl: string;
  bookLabel: string;
}

interface ExperienceMoreBlock {
  title: string;
  subtitle?: string;
  leadAmount?: string;
  descriptionHtml?: string;
  validityLine?: string;
  stackNoteHtml?: string;
  alsoIncludesTitle?: string;
  alsoIncludes?: string[];
  applicableTitle?: string;
  applicable?: string[];
  termsHtml?: string;
}

/** Legacy — optional. Booking table does not read this. */
interface ComparisonRow {
  label: string;
  standard: string;
  whatahotel: string;
  highlight?: boolean;
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

### `offer.hidden` / `promo.suppressOfferBanner`

- Set **`offer.hidden: true`** to hide the banner while keeping offer data in the file.
- Set **`promo.suppressOfferBanner: true`** to hide the banner for the whole promo (e.g. slim Travel Proposal layout).

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
- No `/night` suffix — the investment block labels this as **ADR**
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

## Savings object (`room.savings`) ⚠️

The `savings` object is **still required** by TypeScript. **`savings.rightValue`** is used as the booking table **Total** when `bookingSummary` is omitted. The **burgundy narrative strip** (left label / left sub) is **not rendered** in the current proposal UI — keep fields populated anyway for parity, exports, and future layout options.

### `savings.leftLabel` ⚠️ Critical (data quality)

Use `dangerouslySetInnerHTML`-safe HTML. It **must always** use a `<span>` wrapper around the rate label:

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

**WhataHotel! stay total** (typically excl. taxes), e.g. `"€35,541"` or `"$2,990.01"`. Must align with **`stayTotalExclAmount`** / **`priceTotal`** when possible. Used as the **Total** column in `<ComparisonOverview />` unless `room.bookingSummary.total` is set.

### `savings.rightInclTaxesLabel` / `savings.rightInclTaxesValue` (optional)

Optional fields on the type; **the current UI does not render a savings strip.** Prefer **`grandTotalInclTaxes`** on the room (inside the investment block) or incl.-tax lines on **`savingsBreakdown`** when you need tax-inclusive totals visible.

### `grandTotalInclTaxes` / `grandTotalInclTaxesLabel` (optional)

When using the default **ProposalInvestment** layout (no `savingsBreakdown`), set `grandTotalInclTaxes` to show **grand total incl. taxes & fees** below the excl.-tax totals. Default label: `"Grand total (incl. taxes & fees)"`.

When `savingsBreakdown` is present, use `standardTotalInclTaxes` / `whatahotelTotalInclTaxes` on the breakdown for column-level incl.-tax amounts.

---

## Booking summary (`ComparisonOverview`) ⚠️ Required for production-quality promos

`<ComparisonOverview />` renders the **Booking summary / Comparison overview** table (columns: **Hotel · Room category · Check-in / out · Nights · ADR · Total**). It is shown **after all `RoomCard`s for that hotel** and **requires**:

- `rooms={...}`
- `hotelName={...}` — use `hero.hotel` (plain string; repeats in each row).

### Row data

**Preferred:** set `room.bookingSummary` for full control:

```ts
bookingSummary: {
  checkInOut: "Apr 27 → Apr 30",
  nights: "3",
  adr: "€11,847",
  total: "€35,541",
},
```

**Fallbacks** (if `bookingSummary` is omitted):

- **Room category** — plain text from `room.name` (HTML stripped)
- **Check-in / out** — `stayCheckInOut` or `"—"`
- **Nights** — `nightsLabel` or `"—"`
- **ADR** — `priceRate`
- **Total** — `savings.rightValue`

Populate `stayCheckInOut`, `nightsLabel`, and `savings.rightValue` (or `bookingSummary`) so the table never shows meaningless placeholders.

### Legacy `comparison[]` (optional)

The old **Standard vs WhataHotel** row model (`comparison[]`) is **not** consumed by this table. You may still store it for documentation or future use. Rate extraction rules (BAR vs SEASONAL OFFER) remain valid for filling **`priceStrike`**, **`priceRate`**, and **`savings.rightValue`**.

### Placement (implemented in `PromoPage.tsx`)

`PromoPage` renders: all room cards (each card’s **`ProposalInvestment`** includes the **Book** link for that room) → `<ComparisonOverview rooms={...} hotelName={...} />` → optional `pricingFootnote` → `RoomOverviewGrid` when `keyAttributes` is set → optional `PriceSummaryTable` → `AppDownload` → `ContactFooter`.

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
  // optional: standardTotalInclTaxes, whatahotelTotalInclTaxes — see “Example with incl.-tax totals” below
  whatahotelRate: "$1,483",
  whatahotelTotal: "$18,648.00",
  savingsAmount: "$3,752.00",
  savingsPercentage: "16.8%",
};
```

### Placement in RoomCard (actual render order)

```
Room label + intro (name, subtitle)
    ↓
[RoomMetaStrip] ← optional quickFacts (Room Category, Suite Size, …)
    ↓
Gallery (optional headings + images; empty images[] → default room photo)
    ↓
Investment summary (ProposalInvestment)
  — If savingsBreakdown: context line → SavingsBreakdown → **Book** (`bookUrl` / `bookLabel`) + hint → partner line
  — Else: context line → **2×2 grid:** ADR | Grand total / Nights | **Book** (+ hint) → optional value stack, BAR line, incl.-tax block → partner line
    ↓
Exclusive perks & inclusions (feature columns)
    ↓
[ExperienceMore] ← optional
    ↓
(PromoPage) Booking summary table → footnote → RoomOverviewGrid(keyAttributes) — **no** separate book row below the table
```

### Rules

- All fields are **required strings** except `savingsPercentage`, `standardTotalInclTaxes`, and `whatahotelTotalInclTaxes` (optional)
- **Do not** duplicate nightly/total pricing: if `savingsBreakdown` is present, the **default ADR / nights / grand total grid is not shown** (data may still include `priceRate` / `priceTotal` / `savings.rightValue` for the booking table and fallbacks).
- `nights`: e.g., `"4 Nights"`, `"8 Nights"`
- `paidNights` / `freeNights`: numbers only (e.g., 6, 2)
- Rates: include currency (e.g., `"$2,800"`, `"€1,530"`)
- Totals: formatted price (e.g., `"$22,400"`, `"€4,590.00"`)
- `savingsAmount`: always show currency and cents if fractional
- `savingsPercentage`: optional, e.g., `"16.8%"` or omit
- **Incl. taxes (optional, recommended when the booking page shows them):** set `standardTotalInclTaxes` and `whatahotelTotalInclTaxes` to the formatted grand totals for each column (amount strings only; the UI adds the small caption **Incl. taxes & fees**). Source these from the same booking confirmation / room line the guest would see on whatahotel.com.

### Example with incl.-tax totals

```ts
savingsBreakdown: {
  nights: "8 Nights",
  paidNights: 6,
  freeNights: 2,
  standardRate: "$2,800",
  standardTotal: "$22,400",
  standardTotalInclTaxes: "$24,100.00",
  whatahotelRate: "$1,483",
  whatahotelTotal: "$18,648.00",
  whatahotelTotalInclTaxes: "$20,200.00",
  savingsAmount: "$3,752.00",
  savingsPercentage: "16.8%",
};
```

---

## SpecialOfferBox (Promo-Level) ⚠️ Optional

The `<SpecialOfferBox />` component highlights key promotions or special terms **below the offer banner (if any) and above room cards**. On **multi-hotel** promos it is rendered **once** before the hotel loop (not repeated per hotel).

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

`PromoPage` already wires the full flow. Conceptually (single-hotel):

```tsx
{promo.rooms!.map((room) => <RoomCard key={room.badgeText} room={room} />)}
<ComparisonOverview rooms={promo.rooms!} hotelName={promo.hero!.hotel} />
{/* footnote + RoomOverviewGrid — book CTAs are inside ProposalInvestment; see Proposal page layout section */}
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
The BAR rate URL is only used for **`priceStrike`** (and optional legacy `comparison[].standard`) — **never** as the `bookUrl`.

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

Every promo page **must** include the `<AppDownload />` component after the booking section (table, footnote, room overview grids, optional price summary) and before `<ContactFooter />`. Primary **Book** links live in each room’s **Investment summary** (`ProposalInvestment`), not below the table.

### App Store Links (hardcoded in component — never change)

- **iOS:** `https://apps.apple.com/ph/app/whatahotel/id6759237169`
- **Android:** `https://play.google.com/store/apps/details?id=com.whatahotel.app`
- **Heading copy:** "Download our app for more promos" — never change this text

### Rules

- `AppDownload` takes no props — links are hardcoded inside the component
- Placement order: RoomCards (book link inside investment block) → ComparisonOverview (booking table) → footnote → RoomOverviewGrid(s) → optional PriceSummaryTable → AppDownload → ContactFooter
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

If only one rate variant exists (no BAR row), set `priceStrike: ""`. If you still maintain legacy `comparison[]`, set `comparison[0].standard` to `""`.

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
  promoN, // ← add; array order does not control portal sort
];
```

- Set **`createdAt`** to the real creation time (ISO string). The **portal lists newest first** by `createdAt`, not by position in this array.

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

⛔ CRITICAL: FETCH THE BOOKING PAGE EXACTLY ONCE — NEVER RE-FETCH
- After you have read the SSOT (see workflow step 1), fetch https://www.whatahotel.com/booking/showRates.cfm?... (or URL from user) **once**
- Parse the HTML completely in one pass (rooms, rates, images, hero, perks, everything)
- Store the parsed data in memory
- Do NOT re-fetch for "verification", "checking", "validating", or any other reason
- Do NOT fetch existing promo files for "reference" — use the SSOT sections only
- Do NOT fetch the hero image separately — extract it during the initial HTML parse
- Reading this SSOT doc from disk/repo is NOT a network fetch — do that first so you know what fields to fill

WORKFLOW (ALWAYS FOLLOW THIS ORDER):
1. Read /docs/whatahotel-design-ssot.md for structure and rules (optional: src/types.ts for types). Do not skip — you need booking-summary fields, `savings`, investment block fields, and optional legacy `comparison[]` before extracting.
2. Ask user for the booking page URL (and promo id / client if required)
3. Fetch that URL ONCE — extract rooms, rates, images, hero, perks, totals (all in one parse)
4. Build the complete promo object using only:
   - The parsed HTML data (cached in memory)
   - The SSOT structure rules
5. Create src/data/promo-N.ts and register in src/data/promos.ts (import + array entry). Set createdAt (ISO 8601).
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
- id, createdAt (ISO), title, client, dates, thumbnailUrl, portalTotalLabel, portalTotalValue
- hero: imageUrl, alt, hotel, location
- offer: heading, description, pills[]
- rooms[]: badgeText, name, subtitle, priceRate, priceTotal, images[], features[], savings, bookUrl, bookLabel
- priceLabel?: optional; priceStrike: "" if no BAR
- quickFacts?, stayCheckInOut?, nightsLabel?, stayTotalExclAmount?, stayTotalExclSub?, investmentContextLine?, bookingSummary?, experienceMore? — see Full Type Reference
- comparison[]: optional legacy (not used by booking table)
- pricingFootnote? on promo (HTML)
- contact: sharedContact (optional advisorName on contact)

Multi-Hotel Promo:
- Same as above but wrap each hotel's sections in hotels[]

MANDATORY FIELDS (NEVER OMIT):
- createdAt: ISO 8601 string for portal ordering
- priceStrike: use "" (empty string) if no BAR rate exists
- images: exactly 2 URLs per room, from d321ocj5nbe62c.cloudfront.net only (unless documented exception)
- booking table: set `bookingSummary` **or** `stayCheckInOut` + `nightsLabel` + `savings.rightValue` (and ADR from `priceRate`)
- savings.leftLabel: must wrap rate name in <span> (data quality)
- savings.leftSub: must show "Standard: X/night (total: Y) — WhataHotel!: A/night (total: B) — you save Z" (data quality)

OPTIONAL COMPONENTS (use if applicable):
- savingsBreakdown?: If set, investment block uses `<SavingsBreakdown />` instead of the ADR / nights / grand total grid
- specialOffer?: For highlighted promotions or cancellation policies
- priceSummary?: For multi-unit or package pricing tables
- mastheadEyebrow?, keyAttributes?, galleryTitle?, image captions — layout polish

⚠️ FORBIDDEN ACTIONS (THESE WASTE TOKENS):
- ❌ Do NOT "check" an existing promo file for reference — use the SSOT examples
- ❌ Do NOT fetch the hero image separately — extract from initial page parse
- ❌ Do NOT re-read the booking page after initial fetch
- ❌ Do NOT verify data by fetching again
- ❌ Do NOT find/read src/data/promo-9.ts for examples — refer to SSOT sections instead
- ❌ Do NOT run verification commands after building the file
- ❌ Do NOT browse the project directory — only edit needed files

✅ CORRECT FLOW:
- Read SSOT (and types) first — know the target schema
- Fetch the booking URL once
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
- id, createdAt (ISO), title, client, dates, thumbnailUrl, portalTotalLabel, portalTotalValue
- hero: imageUrl, alt, hotel, location
- offer: heading, description, pills[]
- rooms[]: badgeText, name, subtitle, priceRate, priceStrike, priceTotal, images[], features[], savings, bookUrl, bookLabel
- priceLabel?: optional
- quickFacts?, bookingSummary?, stayCheckInOut?, nightsLabel?, investment fields — see Full Type Reference
- pricingFootnote?, suppressOfferBanner?, offer.hidden? as needed
- contact: sharedContact

Multi-Hotel Promo:
- Same as above but wrap each hotel's sections in hotels[]

MANDATORY FIELDS (NEVER OMIT):
- createdAt (ISO 8601)
- priceStrike: use "" (empty string) if no BAR rate exists
- images: exactly 2 URLs per room, from d321ocj5nbe62c.cloudfront.net only (or empty array → app placeholder)
- booking table data: `bookingSummary` **or** valid fallbacks (`stayCheckInOut`, `nightsLabel`, `savings.rightValue`, `priceRate`)
- savings.leftLabel: must wrap rate name in <span>
- savings.leftSub: must show "Standard: X/night (total: Y) — WhataHotel!: A/night (total: B) — you save Z"

CODE EXAMPLES IN SSOT:
- Clarification Protocol: Step-by-step extraction checklist
- Booking summary section: `bookingSummary` + fallbacks
- CloudFront image rules: see "Step 4 — Extract room images" in this doc

FINAL WORKFLOW:

1. Read this SSOT (and optionally src/types.ts)
2. Ask user: "What is the WhataHotel booking page URL?" (and id / client if needed)
3. Fetch that URL exactly once — parse complete HTML
4. Extract: hotel name, rates, rooms, images, perks, totals (all from that one fetch)
5. Use SSOT structure rules to build the TypeScript object
6. Create src/data/promo-N.ts
7. Update src/data/promos.ts with import + export; set createdAt
8. Commit with branch: promo-N-YYYYMMDD
9. Push to GitHub
10. Netlify deploys automatically
11. Done — no additional fetches, no verification steps
```

---

## New Promo Checklist

- [ ] **Read** this SSOT (and `src/types.ts` if needed) before building data — know booking table fields, `savings`, investment block, optional legacy `comparison[]`
- [ ] Create `src/data/promo-N.ts` with correct `id`, **`createdAt` (ISO 8601)**, `title`, `client`, `dates`
- [ ] All rooms have exactly 2 feature blocks (door-open + gift)
- [ ] All `savings.leftLabel` strings use `<span>` wrapper
- [ ] `savings.leftSub` includes per-night breakdown, total calculation, AND savings amount (data quality)
- [ ] `savings.rightValue` matches stay total used in the booking table (or set `bookingSummary.total`)
- [ ] `priceStrike` is `""` not omitted when no strikethrough exists
- [ ] `portalTotalValue` matches the lowest WhataHotel! total in the data
- [ ] Room images scraped from page (CloudFront CDN URLs) — empty `images[]` uses app default photo
- [ ] Booking table: `bookingSummary` **or** `stayCheckInOut` + `nightsLabel` + `priceRate` + `savings.rightValue` populated
- [ ] Optional: `quickFacts`, `investmentContextLine`, `stayTotalExclAmount` / `stayTotalExclSub` for sample-style investment block
- [ ] Multi-hotel promos use `hotels[]` not flat structure
- [ ] Each room's `bookUrl` uses the SEASONAL OFFER (lowest) rate's unique room code
- [ ] BAR rate used only for `priceStrike` (and optional legacy `comparison[]`) — never as `bookUrl`
- [ ] `// AGENT NOTE` comment added when multiple rate variants exist per room
- [ ] No room data was hallucinated — all rates, names, images, and URLs came from fetched page
- [ ] If any data is missing, `// AGENT NOTE:` comment is present listing what needs updating
- [ ] `PromoPage` flow satisfied: room cards (with book CTA in `ProposalInvestment`) → booking table → optional `pricingFootnote` → `RoomOverviewGrid` → optional price summary → `<AppDownload />` → `<ContactFooter />` (handled by app when promo is registered)
- [ ] `[OPTIONAL]` `savingsBreakdown` field present in rooms if detailed pricing breakdown is needed (e.g., free nights promo)
- [ ] `[OPTIONAL]` `specialOffer` field present in promo if special promotion/offer exists to highlight
- [ ] `[OPTIONAL]` `priceSummary` field present in promo if multi-unit pricing table is needed
- [ ] If optional components used: data is complete and formatted correctly (see SavingsBreakdown, SpecialOfferBox, PriceSummaryTable sections)
- [ ] `<AppDownload />` remains on every promo route (component-level; do not remove from `PromoPage`)
- [ ] Promo registered in `src/data/promos.ts`
- [ ] Committed to GitHub and verified live on Netlify

---

_WhataHotel! / Lorraine Travel · Updated March 2026_
