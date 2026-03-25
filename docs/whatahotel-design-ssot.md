# WhataHotel! Proposal Site ? Single Source of Truth

> **For:** Lorraine Travel / WhataHotel!  
> **Stack:** React + TypeScript + Vite ? Deployed on Netlify via GitHub  
> **Last updated:** March 2026 ? **keep in sync with `src/types.ts` and `src/components/`**

---

## Production readiness (agents & maintainers)

| Area | Status | Notes |
|------|--------|--------|
| **Build / types** | OK | `npm run build` should pass before merge. |
| **Data-only workflow** | OK | New promos are TS data + `promos.ts` registry; no per-promo routes. |
| **SSOT doc** | **Must stay aligned** | This file previously drifted from the app (file names, room layout, optional fields). Sections below are updated; **re-verify after UI changes.** |
| **Redundancy** | Mitigated | If `savingsBreakdown` is set, the default **ADR / nights / grand total** investment layout is replaced by `<SavingsBreakdown />`. There is **no** savings strip under the room card; totals appear in the **booking summary** table and investment block. |
| **Gaps to improve** | Optional | Automated CI (`build` + lint), visual regression for proposal layouts, optional validation that `bookingSummary` or fallbacks (`stayCheckInOut`, `nightsLabel`, `savings.rightValue`) are populated. |

**Ready for production** as a Netlify-hosted SPA **if** agents follow this SSOT and you run a build on PRs. The main risk is **stale agent prompts** (Netlify project context) ? update the block at the end of this doc when rules change.

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

1. **Read this SSOT** (`docs/whatahotel-design-ssot.md`) ? field rules, booking-summary row data, investment block fields, `savings` (still required by types), optional `comparison[]` (legacy). Optionally skim **`src/types.ts`** for the exact TypeScript contract.
2. **Get the WhataHotel booking page URL** from the user (and promo id / client name if needed).
3. **Fetch that URL exactly once** ? parse HTML in one pass (rooms, rates, images, hero, perks, totals). No re-fetch for ?verification.?
4. **Create** `src/data/promo-N.ts` from parsed data + SSOT rules.
5. **Register** in `src/data/promos.ts` (import + add to `promos` array). Set **`createdAt`** (ISO 8601) for portal ordering.
6. **Commit / push** ? Netlify deploys from GitHub.

Reading the docs first is **not** a network fetch; the **single-fetch rule** applies only to the **booking page** (and any other live URLs you must retrieve).

---

## File Structure

```
src/
  data/
    promo-1.ts        ? Naples, Florida
    promo-2.ts        ? ...
    promo-N.ts        ? New proposals go here
    promos.ts         ? Central registry ? import + export all promos here
    contact.ts        ? Shared contact block (sharedContact)
  constants.ts        ? DEFAULT_HERO_IMAGE, DEFAULT_ROOM_IMAGE (fallbacks)
  types.ts            ? Promo, HotelBlock, Room, etc. type definitions
  lib/
    html.ts           ? stripHtml helper (booking table fallbacks)
  components/
    Masthead.tsx
    HeroSection.tsx           ? Hero image only (no overlay text)
    HotelIdentity.tsx         ? Stars + hotel name + location above hero
    OfferBanner.tsx
    RoomMetaStrip.tsx         ? Optional quickFacts strip (Room Category, Suite Size, ?)
    ProposalInvestment.tsx   ? ADR / Grand total / Nights (3-column grid); no book button inside
    RoomCard.tsx              ? ? investment ? Exclusive perks ? **Book** CTA ? optional ExperienceMore
    ExperienceMore.tsx      ? Optional spending-credit style block
    RoomOverviewGrid.tsx      ? Key-attribute grid (after table + footnote; book link is in RoomCard after perks)
    SavingsBreakdown.tsx      ? Standard vs WhataHotel! breakdown (optional per room)
    ComparisonOverview.tsx    ? Booking summary table ? requires `hotelName` + `rooms`
    SpecialOfferBox.tsx
    PriceSummaryTable.tsx
    PromoCard.tsx
    AppDownload.tsx           ? App store section (always rendered on promo pages)
    ContactFooter.tsx
  pages/
    PromoPage.tsx     ? Renders single or multi-hotel promos (table ? footnote ? overview; book CTA is in RoomCard)
    Portal.tsx          ? Homepage portal list (not PortalPage.tsx)
```

---

## Proposal page layout (reference)

Target UX matches **[pro.whatahotel.com/best-proposal-sample](https://pro.whatahotel.com/best-proposal-sample)** (Travel Proposal pattern).

**Single-hotel render order (`PromoPage.tsx`):**

1. `Masthead` ? logo links to `https://www.whatahotel.com/`
2. `HotelIdentity` ? star row, `hero.hotel`, `hero.location` (HTML) ? displayed **above** the hero image for prominence
3. `HeroSection` ? full-width image (`hero.imageUrl` or `DEFAULT_HERO_IMAGE` from `src/constants.ts`)
4. `OfferBanner` ? only if `offer` exists and **`!offer.hidden`** and **`!promo.suppressOfferBanner`**
5. `SpecialOfferBox` ? optional, promo-level
6. `RoomCard` for each room:
   - `RoomMetaStrip` ? optional `quickFacts` strip
   - Gallery images
   - **Room Features** (`features` with `icon: "door-open"`) ? displayed in a card below the gallery images, before the investment block
   - **`ProposalInvestment`** ? 3-column **ADR ? Grand Total (incl. taxes & fees) ? Nights** grid; when `grandTotalInclTaxes` is set it is the canonical total shown in the card (no separate incl.-tax block below)
   - **Exclusive Perks** (`features` with `icon: "gift"`) ? centered list after the investment block, separated from room features
   - Primary **`bookUrl` / `bookLabel`** CTA (after perks, before optional `ExperienceMore`)
7. `ComparisonOverview` ? **booking summary** table columns: Hotel ? Room category ? Check-in/out ? Nights ? ADR ? **Grand Total (incl. taxes & fees)** (`rooms` + **`hotelName`** from `hero.hotel`)
8. Optional `promo.pricingFootnote` (HTML) ? e.g. taxes disclaimer
9. `RoomOverviewGrid` per room when `keyAttributes` is set
10. Optional `PriceSummaryTable`
11. `AppDownload` ? unchanged
12. `ContactFooter`

**Multi-hotel:** For **each** `hotels[]` entry, repeat steps 2?9 (through that hotel?s `RoomOverviewGrid`). **`specialOffer`** is rendered **once** before the hotel loop. **`promo.pricingFootnote`** appears after the **last** hotel?s booking table (current `PromoPage` behavior). After all hotels: step 10 ? 11 ? 12 (optional price summary, then `AppDownload`, then `ContactFooter`). Hotel name appears **above** the hero image for each hotel.

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
  createdAt: string; // ISO 8601 ? required; portal sorts newest first
  mastheadEyebrow?: string; // e.g. "Travel proposal" ? small label above title
  title: string; // e.g. "Laguna Beach, California"
  client: string; // e.g. "The Sentz Family" or ""
  dates: string; // e.g. "June 2 ? 5, 2026 | 3 Nights | 3 Room Options"
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
  advisorName?: string; // e.g. "Lorraine Travel" ? shown above email when set
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
  location: string; // HTML string with <i> icon tag ? shown in HotelIdentity above hero
}

interface OfferBlock {
  heading: string;
  description: string; // HTML allowed
  pills: string[]; // Each starts with "? "
  /** When true, banner is hidden (matches slim proposal pages). */
  hidden?: boolean;
}

interface SpecialOffer {
  title: string; // e.g. "EXCLUSIVE: STAY LONGER ? 4TH NIGHT FREE!"
  description: string; // e.g. "Your dates qualify for..."
  highlights: Array<{
    icon: string; // FontAwesome icon name (e.g. "check", "star", "gift")
    text: string; // e.g. "Qualifies Oct 12?20"
  }>;
  validityText?: string; // e.g. "Valid May 7 ? Nov 19, 2026 (selected dates)"
}

interface PriceSummary {
  items: Array<{
    label: string; // e.g. "Unit 1 ? Parents' Suite"
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
  /** Optional: full stay total incl. taxes & fees (standard side) ? from booking page */
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
  priceRate: string; // e.g. "$996.67" ? no "/night" suffix (shown as ADR)
  priceStrike?: string; // Crossed-out BAR reference; omit or "" if none
  /** Stay total excluding taxes ? fallback copy for Grand Total if stayTotalExclAmount omitted */
  priceTotal: string;
  /** Large Grand Total figure (excl. taxes), e.g. "?35,541" */
  stayTotalExclAmount?: string;
  /** Subline under Grand Total, e.g. "3 Nights ? excl. taxes & fees?" */
  stayTotalExclSub?: string;
  /** Context line under "Rate & pricing breakdown" (HTML) */
  investmentContextLine?: string;
  /** Top strip before gallery: Room Category, Suite Size, Floor, Occupancy, ? */
  quickFacts?: Array<{ label: string; value: string }>;
  stayCheckInOut?: string; // e.g. "Apr 27 ? Apr 30" ? booking table + investment
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
  keyAttributes?: Array<{ label: string; value: string; sub?: string }>; // After table + footnote; book CTA is in RoomCard (after perks)
  galleryTitle?: string;
  gallerySubtitle?: string;
  images: Array<{ src: string; alt: string; caption?: string }>; // [] ? default room image
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
  /** Legacy BAR vs WH rows ? not used by the booking summary table; optional to keep for archives */
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

/** Legacy ? optional. Booking table does not read this. */
interface ComparisonRow {
  label: string;
  standard: string;
  whatahotel: string;
  highlight?: boolean;
}
```

---

## Field Rules ? Follow Exactly

### `id`

Format: `"promo-N"` where N is the next number in sequence. Check `promos.ts` for the current highest number.

### `title`

Destination-first. Examples:

- `"Laguna Beach, California"`
- `"New York City ? Two Hotel Options"`
- `"Aman New York ? Ultra-Luxury Urban Sanctuary"`

### `dates`

Always: `"Month D ? D, YYYY | N Nights | N Room Options"`  
Or for multi-room: `"Month D ? D, YYYY | N Nights | Hotel Name"`

### `portalTotalLabel` / `portalTotalValue`

- Single hotel, one room type ? `"Starting From"` + lowest total
- Multiple room types ? `"Starting From"` + lowest total across all rooms
- Multi-unit (connecting rooms) ? `"Combined Total"` + sum of both units
- `portalTotalValue` is always formatted as `"$X,XXX.XX"`

### `hero.location`

Always format as:

```ts
"<i class='fas fa-map-marker-alt' style='margin-right:5px'></i>ADDRESS &nbsp;|&nbsp; DESCRIPTOR";
```

### `offer.pills`

Each pill starts with `"? "` (checkmark + space). Plain text only inside pills.

### `offer.hidden` / `promo.suppressOfferBanner`

- Set **`offer.hidden: true`** to hide the banner while keeping offer data in the file.
- Set **`promo.suppressOfferBanner: true`** to hide the banner for the whole promo (e.g. slim Travel Proposal layout).

### `badgeText`

Use the appropriate emoji + label:

- Standard rooms: `"?? Option 1"`, `"?? Option 2"`, etc.
- Residences/suites: `"?? Residence 1"`, `"?? Residence 2"`, etc.
- Multi-hotel, single hotel rooms: `"?? Hotel Option 1 ? Room 1"`, etc.
- Multi-hotel, suites: `"?? Hotel Option 2 ? Suite 1"`, etc.
- Connecting units (family): `"??? Unit 1 ? Parents"`, `"??? Unit 2 ? Kids"`, etc.

### `name`

Use `<br/>` for line breaks. Example: `"Three-Bedroom Home<br/>Central Park View"`

### `subtitle`

Use `<br/>` for line breaks. Always end with a colored highlight:

```ts
"<strong style='color: var(--burgundy)'>Best Value ? From $X,XXX/night</strong>";
```

### `priceRate`

- Include `$` sign (or relevant currency symbol)
- Include cents if the rate is fractional: `"$996.67"`, `"?1,530.00"`
- No `/night` suffix ? the investment block labels this as **ADR**
- No `.00` needed for whole numbers: `"$1,215"` not `"$1,215.00"`

### `priceStrike`

- If there's a strikethrough rate: `"Standard: $1,472.50/night"`
- If there's no strikethrough: `""` ? never omit the field

### `features`

Always exactly **2 feature blocks** per room:

1. **Room/Suite/Residence Features** ? `icon: "door-open"` ? rendered in a card section **directly below the room gallery images**, before the investment block
2. **WhataHotel! Exclusive Perks** ? `icon: "gift"` ? rendered as a **centered list after the investment block**, visually separated from room features

These two blocks are rendered in **different positions** in the RoomCard. The `RoomCard` splits `features` by icon: `icon !== "gift"` ? room features section; `icon === "gift"` ? perks section.

Feature items are **plain text only** ? no HTML tags inside `items[]` strings.

---

## Savings object (`room.savings`) ??

The `savings` object is **still required** by TypeScript. **`savings.rightValue`** is used as the booking table **Total** when `bookingSummary` is omitted. The **burgundy narrative strip** (left label / left sub) is **not rendered** in the current proposal UI ? keep fields populated anyway for parity, exports, and future layout options.

### `savings.leftLabel` ?? Critical (data quality)

Use `dangerouslySetInnerHTML`-safe HTML. It **must always** use a `<span>` wrapper around the rate label:

```ts
leftLabel: "3 Nights &nbsp;|&nbsp; <span>WhataHotel! Exclusive Rate</span>";
leftLabel: "2 Nights &nbsp;|&nbsp; <span>Special Offer Rate</span>";
```

Never write: `"3 Nights | WhataHotel! Exclusive Rate"` ? the span styling will be missing.

### `savings.leftSub`

Must include **all three** data points ? per-night breakdown, total calculation, and savings ? using `<strong>` for amounts:

```ts
// Full format:
leftSub: "Standard rate: ?1,700/night &times; 3 = ?5,100 &mdash; WhataHotel! rate: ?1,530/night &times; 3 = ?4,590 &mdash; you save <strong>?510</strong>";

// Shorter format when space is tight:
leftSub: "?1,700 standard vs ?1,530 WhataHotel! rate &times; 3 nights &mdash; you save <strong>?510</strong>";
```

Never omit the savings amount. Never show only the total without the per-night context.

### `savings.rightLabel`

Use `"(excl. taxes)"` when taxes are not included in the total.  
Use `"(incl. taxes)"` when taxes are included.

### `savings.rightValue`

**WhataHotel! stay total** (typically excl. taxes). Used as the **Grand Total** column in `<ComparisonOverview />` only when both `grandTotalInclTaxes` and `bookingSummary.total` are absent. Per the Pricing Consistency rules, `savings.rightValue` should always equal `grandTotalInclTaxes`.

### `savings.rightInclTaxesLabel` / `savings.rightInclTaxesValue` (optional)

Optional fields on the type; **the current UI does not render a savings strip.** Prefer **`grandTotalInclTaxes`** on the room (inside the investment block) or incl.-tax lines on **`savingsBreakdown`** when you need tax-inclusive totals visible.

### `grandTotalInclTaxes` / `grandTotalInclTaxesLabel` (optional)

When using the default **ProposalInvestment** layout (no `savingsBreakdown`), set `grandTotalInclTaxes` to the tax-inclusive stay total from the booking page.

**UI behavior when `grandTotalInclTaxes` is set:**
- The **Grand Total card** in the 3-column grid displays `grandTotalInclTaxes` directly ? it IS the grand total. There is only one Grand Total number on the page.
- The card label changes to `"Grand Total (incl. taxes & fees)"` (or `grandTotalInclTaxesLabel` if provided).
- The ADR subline drops "excl. taxes" wording (shows **"Per night"**).
- There is **no** separate incl.-tax block below the grid ? the card is the canonical total.

> Do NOT set `grandTotalInclTaxes` to a different value than `bookingSummary.total` ? they must be the same number everywhere on the page.

When `savingsBreakdown` is present, use `standardTotalInclTaxes` / `whatahotelTotalInclTaxes` on the breakdown for column-level incl.-tax amounts.

---

## Pricing Consistency ? Cross-Field Alignment ?? MANDATORY

The WhataHotel booking page always displays a **tax-inclusive grand total** for the stay. This is the number the client actually pays. It must be **the same number that appears in every section of the proposal page that shows a total** ? the investment block, the booking summary table, the portal card, and any summary row.

**This is the most common source of errors by the AI agent. Follow these rules without exception.**

### Rule 1 ? Grand Total IS the tax-included price

When the booking page shows a tax-inclusive total for the stay, populate `grandTotalInclTaxes` with that amount. This field is **mandatory whenever the booking page displays it** ? it is NOT optional.

> ? Never feature the excl.-tax total as the "Grand Total" when an incl.-tax total is available.

### Rule 2 ? Booking summary table Total MUST match `grandTotalInclTaxes`

The **Total** column in `<ComparisonOverview />` (the Booking summary / Comparison overview table) must show the **same number** as `grandTotalInclTaxes`. Always set `bookingSummary.total` explicitly to that incl.-tax amount:

```ts
// ? CORRECT ? all fields agree on the same canonical total
grandTotalInclTaxes: "$20,200.00",
bookingSummary: {
  checkInOut: "Aug 12 ? Aug 20",
  nights: "8",
  adr: "$1,483",
  total: "$20,200.00",   // ? same as grandTotalInclTaxes
},
savings: {
  rightValue: "$20,200.00",   // ? same as grandTotalInclTaxes
  ...
},
portalTotalValue: "$20,200.00",   // ? same as grandTotalInclTaxes
```

```ts
// ? WRONG ? fields disagree; client sees different totals on the same page
grandTotalInclTaxes: "$20,200.00",
bookingSummary: {
  total: "$18,648.00",   // ? excl.-tax ? contradicts the investment block
},
savings: {
  rightValue: "$18,648.00",   // ? excl.-tax fallback ? contradicts booking table
},
portalTotalValue: "$18,648.00",   // ? wrong source
```

### Rule 3 ? `savings.rightValue` must equal `bookingSummary.total`

`savings.rightValue` is the booking table's fallback Total (used when `bookingSummary` is absent). Even when `bookingSummary` IS set, `savings.rightValue` must always carry the same number ? never a different tax variant of the same stay.

### Rule 4 ? `portalTotalValue` uses the incl.-tax total

The portal card (homepage) shows `portalTotalValue` as the featured price. Source it from `grandTotalInclTaxes` (or the lowest incl.-tax total across all rooms for a multi-room promo). Never use an excl.-tax amount here.

### Rule 5 ? When using `savingsBreakdown`, align `whatahotelTotalInclTaxes`

When `savingsBreakdown` is present (the SavingsBreakdown layout replaces the default investment grid), the canonical incl.-tax total is `savingsBreakdown.whatahotelTotalInclTaxes`. Use that same value for `bookingSummary.total`, `savings.rightValue`, and `portalTotalValue`.

### Rule 6 ? Excl.-tax amounts stay in their own fields ? never cross-populate

The excl.-tax stay total belongs only in `priceTotal`, `stayTotalExclAmount`, and `stayTotalExclSub`. **Never copy an excl.-tax total into `bookingSummary.total`, `savings.rightValue`, or `portalTotalValue`** when an incl.-tax total is available.

### Rule 7 ? When the page shows NO tax-inclusive total, be consistent excl.-tax

If the booking page does not display a tax-inclusive total, omit `grandTotalInclTaxes` and use the excl.-tax total consistently across `bookingSummary.total`, `savings.rightValue`, and `portalTotalValue`. Add a `pricingFootnote` noting that taxes are excluded.

### Consistency summary table

| Field | Must equal |
|-------|-----------|
| `grandTotalInclTaxes` | Tax-incl. stay total from booking page |
| `bookingSummary.total` | Same as `grandTotalInclTaxes` |
| `savings.rightValue` | Same as `bookingSummary.total` / `grandTotalInclTaxes` |
| `portalTotalValue` | Same as `grandTotalInclTaxes` (lowest across rooms for multi-room) |
| `savingsBreakdown.whatahotelTotalInclTaxes` | Tax-incl. stay total (when using `savingsBreakdown`) |

> **Quick self-check before writing the file:** Search your draft for all occurrences of price amounts. Each room's canonical total should appear as exactly the same string in `grandTotalInclTaxes`, `bookingSummary.total`, `savings.rightValue`, and `portalTotalValue`. If any differ, correct them before committing.

---

## Booking summary (`ComparisonOverview`) ?? Required for production-quality promos

`<ComparisonOverview />` renders the **Booking summary / Comparison overview** table (columns: **Hotel ? Room category ? Check-in / out ? Nights ? ADR ? Grand Total (incl. taxes & fees)**). It is shown **after all `RoomCard`s for that hotel** and **requires**:

- `rooms={...}`
- `hotelName={...}` ? use `hero.hotel` (plain string; repeats in each row).

### Grand Total column ? data priority

The Grand Total column always shows the **tax-inclusive total** using this priority:

1. `room.grandTotalInclTaxes` ? **always preferred**; the authoritative incl.-tax total
2. `room.bookingSummary.total` ? fallback (per pricing consistency rules, should equal `grandTotalInclTaxes`)
3. `room.savings.rightValue` ? legacy fallback only

> Per the Pricing Consistency rules, all three should be the same number. If they differ, fix the data.

### Row data

**Preferred:** set `room.bookingSummary` for full control (`total` must be the tax-inclusive grand total):

```ts
bookingSummary: {
  checkInOut: "Apr 27 -> Apr 30",
  nights: "3",
  adr: "EUR 11,847",
  total: "EUR 35,541",   // <- must equal grandTotalInclTaxes
},
grandTotalInclTaxes: "EUR 35,541",   // <- same number
```

**Fallbacks** (if `bookingSummary` is omitted):

- **Room category** ? plain text from `room.name` (HTML stripped)
- **Check-in / out** ? `stayCheckInOut` or `"?"`
- **Nights** ? `nightsLabel` or `"?"`
- **ADR** ? `priceRate`
- **Grand Total** ? `grandTotalInclTaxes` ? then `savings.rightValue`

Populate `stayCheckInOut`, `nightsLabel`, and `grandTotalInclTaxes` (or `bookingSummary`) so the table never shows meaningless placeholders.

### Legacy `comparison[]` (optional)

The old **Standard vs WhataHotel** row model (`comparison[]`) is **not** consumed by this table. You may still store it for documentation or future use. Rate extraction rules (BAR vs SEASONAL OFFER) remain valid for filling **`priceStrike`**, **`priceRate`**, and **`savings.rightValue`**.

### Placement (implemented in `PromoPage.tsx`)

`PromoPage` renders: all room cards (each **`RoomCard`** includes the **Book** link for that room **after Exclusive perks**) ? `<ComparisonOverview rooms={...} hotelName={...} />` ? optional `pricingFootnote` ? `RoomOverviewGrid` when `keyAttributes` is set ? optional `PriceSummaryTable` ? `AppDownload` ? `ContactFooter`.

---

## SavingsBreakdown (Per-Room) ?? Optional but Recommended

The `<SavingsBreakdown />` component displays a detailed pricing breakdown **within each room card** ? showing the impact of free nights, special offers, or rate differences.

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
  // optional: standardTotalInclTaxes, whatahotelTotalInclTaxes ? see ?Example with incl.-tax totals? below
  whatahotelRate: "$1,483",
  whatahotelTotal: "$18,648.00",
  savingsAmount: "$3,752.00",
  savingsPercentage: "16.8%",
};
```

### Placement in RoomCard (actual render order)

```
Room label + intro (name, subtitle)
    |
[RoomMetaStrip] -- optional quickFacts (Room Category, Suite Size, ...)
    |
Gallery (optional headings + images; empty images[] -> default room photo)
    |
Room Features (features with icon: "door-open") -- card section below gallery
    |
Investment summary (ProposalInvestment)
  -- If savingsBreakdown: context line -> SavingsBreakdown -> partner line
  -- Else: context line -> 3-column grid: ADR | Grand Total (incl. taxes & fees) | Nights -> BAR line -> partner line
     NOTE: when grandTotalInclTaxes is set it IS the Grand Total card value (no separate block below)
    |
Exclusive perks & inclusions (features with icon: "gift") -- CENTERED list, separate from room features
    |
**Book** (`bookUrl` / `bookLabel`) + secure-booking hint
    |
[ExperienceMore] -- optional
    |
(PromoPage) Booking summary table (Grand Total col = grandTotalInclTaxes) -> footnote -> RoomOverviewGrid(keyAttributes) -- no separate book row below the table
```

### Rules

- All fields are **required strings** except `savingsPercentage`, `standardTotalInclTaxes`, and `whatahotelTotalInclTaxes` (optional)
- **Do not** duplicate nightly/total pricing: if `savingsBreakdown` is present, the **default ADR / nights / grand total grid is not shown** (data may still include `priceRate` / `priceTotal` / `savings.rightValue` for the booking table and fallbacks).
- `nights`: e.g., `"4 Nights"`, `"8 Nights"`
- `paidNights` / `freeNights`: numbers only (e.g., 6, 2)
- Rates: include currency (e.g., `"$2,800"`, `"?1,530"`)
- Totals: formatted price (e.g., `"$22,400"`, `"?4,590.00"`)
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

## SpecialOfferBox (Promo-Level) ?? Optional

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
  title: "EXCLUSIVE: STAY LONGER ? 4TH NIGHT FREE!",
  description: "Your August 12?20 dates qualify for the Four Seasons' 'Fourth Night Free' promotion. On an 8-night stay, each room earns TWO (2) completely free nights.",
  highlights: [
    { icon: "check", text: "Qualifies Aug 12?20" },
    { icon: "check", text: "2 Free Nights ? 2 Rooms" },
    { icon: "star", text: "Combinable with WhataHotel! Perks" },
  ],
  validityText: "Valid May 7 ? Nov 19, 2026 (selected dates). Subject to availability at booking.",
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

- `title`: MUST USE `text-transform: uppercase` ? typically starts with "EXCLUSIVE:"
- `description`: Plain text or simple formatting (HTML allowed but keep it minimal)
- `highlights[]`: Array of icon + text pairs; icons are FontAwesome names (e.g., `"check"`, `"star"`, `"gift"`)
- `validityText`: Optional, appears in italics at bottom

---

## PriceSummaryTable (Multi-Unit Totals) ?? Optional

The `<PriceSummaryTable />` component shows a **consolidated pricing table** for **all room units combined** ? ideal for multi-unit properties or connecting rooms.

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
      label: "Unit 1 ? Parents' Suite",
      sqft: "1,108 sq ft",
      bedConfig: "1 King + Sofabed",
      whatahotelRate: "$2,100.00",
      regularRate: "$2,800.00",
      total: "$18,648.00",
    },
    {
      label: "Unit 2 ? Kids' Connecting Room",
      sqft: "532 sq ft",
      bedConfig: "2 Queens",
      whatahotelRate: "$709.38",
      regularRate: "$945.63",
      total: "$6,299.25",
    },
  ],
  totalSavings: "$5,849.90",
  grandTotal: "$24,947.25",
  savingsNote: "?? Total savings vs. regular rate across both units. All prices exclude taxes & resort fees.",
};
```

### Placement in PromoPage

`PromoPage` already wires the full flow. Conceptually (single-hotel):

```tsx
{promo.rooms!.map((room) => <RoomCard key={room.badgeText} room={room} />)}
<ComparisonOverview rooms={promo.rooms!} hotelName={promo.hero!.hotel} />
{/* footnote + RoomOverviewGrid ? book CTAs are in RoomCard after perks; see Proposal page layout section */}
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
- `label`: e.g., `"Unit 1 ? Parents' Suite"`, `"Room Option 1"`, `"Deluxe Ocean View"`
- `sqft` / `bedConfig`: Optional; provide if available for clarity
- `whatahotelRate`: The special/exclusive rate (e.g., `"$2,100.00"`)
- `regularRate`: Standard BAR rate; will be displayed with strikethrough
- `total`: Final cost for this unit (e.g., `"$18,648.00"` for 8-night stay)
- `totalSavings`: Sum of all savings across units (e.g., `"$5,849.90"`)
- `grandTotal`: Sum of all unit totals (e.g., `"$24,947.25"`)
- `savingsNote`: Optional; can include HTML (e.g., emoji, <strong>, HTML entities)

---

## Room Images ?? Always Scrape from Page ? Never Default to Placeholder

Each `.bookingItem` on the WhataHotel booking page contains an image carousel inside `<ul class="booking-img-list">`. Images are wrapped in `<a>` tags whose `href` holds the **full-resolution URL**.

### Two CDN Domains (both valid)

WhataHotel uses **two different CloudFront CDNs** depending on the hotel. Both are valid:

| CDN domain | URL pattern | Example |
|---|---|---|
| `d2573qu6qrjt8c.cloudfront.net` | `/{HASH}/{HASH}.JPEG` | Most hotels (newer format) |
| `d321ocj5nbe62c.cloudfront.net` | `/imageRepo/7/0/{path}/{file}.jpg` | Some older hotels |

**Do NOT reject URLs from either CDN.** Accept any URL on `d2573qu6qrjt8c.cloudfront.net` OR `d321ocj5nbe62c.cloudfront.net`.

### HTML Structure (actual markup)

```html
<div class="bookingItem">
  <div class="bookingItem-img">
    <ul class="booking-img-list" data-cycle-speed="2000" data-cycle-slides="li">

      <li>
        <a href="https://d2573qu6qrjt8c.cloudfront.net/{HASH_A}/{HASH_A}.JPEG"
           class="modalRooms roomImg" rel="gal" data-room-group="771" title="Room Name">
          <img src="https://d2573qu6qrjt8c.cloudfront.net/{HASH_A}/{HASH_A}.JPEG"
               alt="Room Name" loading="lazy" data-source="ama">
        </a>
        <span><strong>Room Name</strong></span>
      </li>

      <li>
        <a href="https://d2573qu6qrjt8c.cloudfront.net/{HASH_B}/{HASH_B}.JPEG"
           class="modalRooms roomImg" rel="gal" data-room-group="771" title="Room Name">
          <img src="https://d2573qu6qrjt8c.cloudfront.net/{HASH_B}/E.JPEG"
               alt="Room Name" loading="lazy" data-source="ama">
        </a>
        <!-- NOTE: <img src> is a THUMBNAIL (/E.JPEG); always use <a href> instead -->
      </li>

    </ul>
    <p class="smallType"><i>Actual room layout, furnishings & views may differ...</i></p>
  </div>
  <div class="bookingItem-content">
    <h3>Room Name</h3>
    <!-- rates, booking links, etc. -->
  </div>
</div>
```

**When a room has zero images** (e.g., Grace Santorini), the carousel falls back to:

```html
<li><a><img src="/img/paceholder.jpg" alt="Room image not available" loading="lazy"></a></li>
```

### ?? CRITICAL: Always Use `<a href>`, NOT `<img src>`

On the newer CDN (`d2573qu6qrjt8c`), the `<img src>` for the 2nd+ image in a carousel is often a **truncated thumbnail** ending in `/E.JPEG`. The `<a href>` **always** contains the full-resolution URL.

| Attribute | URL example | Use this? |
|---|---|---|
| `<a href="...">` | `.../{HASH}/{HASH}.JPEG` (full-resolution) | **YES ? always** |
| `<img src="...">` | `.../{HASH}/E.JPEG` (truncated thumbnail) | **NO ? often truncated** |

**Extraction priority:**
1. Use the `<a href>` URL from each `<li>` inside `<ul class="booking-img-list">`
2. Only fall back to `<img src>` if there is no wrapping `<a>` tag (older page format)
3. Skip any `<a>` without an `href` or with `href` pointing to `/img/paceholder.jpg`

### CSS Selector Rules

- **Primary selector**: `.bookingItem .bookingItem-img ul.booking-img-list li a.modalRooms[href]`
- **Fallback selector**: `.bookingItem .bookingItem-img ul.booking-img-list li a[href]` (some pages omit the `modalRooms` class)
- **Image URL source**: Read from the `<a>` tag's `href` attribute, NOT from the `<img>` tag's `src`
- **Alt text**: Read from the `<img>` tag's `alt` attribute inside the `<a>`, or from the `<a>` tag's `title` attribute, or derive from the room name
- **Skip placeholders**: If `href` is missing, empty, or points to `/img/paceholder.jpg`, that room has no real images

### Rules

- Always extract the **first 2 image URLs** from the room's `<a href>` links inside `booking-img-list`
- ALL room images must be from either `d2573qu6qrjt8c.cloudfront.net` or `d321ocj5nbe62c.cloudfront.net` CDN; use URLs as-is (never modify the URL)
- Extract the `alt` text from the `<img>` tag and use it as-is, or use the room name if `alt` is blank or generic
- If a room has fewer than 2 images available, use what's there (e.g., just 1 image) ? do NOT pad with placeholder
- Some hotels have **zero room images** for all room types (the page shows `/img/paceholder.jpg`). In that case, leave `images: []` and the app will use `DEFAULT_ROOM_IMAGE`. This is not rare ? it happens for entire hotels.
- The same image URL may be reused across room types if the hotel uses a shared bathroom/detail shot ? this is acceptable and expected

### Example (newer CDN ? most common)

```ts
// URLs extracted from <a href> inside ul.booking-img-list (NOT from <img src>)
images: [
  {
    src: "https://d2573qu6qrjt8c.cloudfront.net/{HASH_A}/{HASH_A}.JPEG",
    alt: "Room Name",
  },
  {
    src: "https://d2573qu6qrjt8c.cloudfront.net/{HASH_B}/{HASH_B}.JPEG",
    alt: "Room Name",
  },
],
```

### Example (older CDN ? some hotels)

```ts
images: [
  {
    src: "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/164/472/391/DeluxeRoom_204_ThePeninsulaParis_(c)WillPryce_HD_P.jpg",
    alt: "Deluxe Room ? The Peninsula Paris",
  },
  {
    src: "https://d321ocj5nbe62c.cloudfront.net/imageRepo/7/0/164/472/597/DeluxeRoom_204_Bathroom_ThePeninsulaParis_(c)WillPryce_HD_P.jpg",
    alt: "Deluxe Room Bathroom ? The Peninsula Paris",
  },
],
```

### Common Image Extraction Mistakes ??

| Mistake                            | Fix                                                                                                                          |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Using `<img src>` instead of `<a href>` | `<img src>` is often a truncated thumbnail (`/E.JPEG`). **Always extract from `<a href>`** which has the full-resolution URL |
| Rejecting `d2573qu6qrjt8c` CDN URLs | Both `d2573qu6qrjt8c.cloudfront.net` and `d321ocj5nbe62c.cloudfront.net` are valid WhataHotel CDNs                          |
| Using nav/header logo images       | Only look inside `.bookingItem .bookingItem-img ul.booking-img-list`; never pull from page header or nav                     |
| Using placeholder URLs             | Skip any `href` pointing to `/img/paceholder.jpg`; leave `images: []` and let the app use `DEFAULT_ROOM_IMAGE`              |
| Only finding 1 image when 2+ exist | Make sure you're iterating all `<li>` elements inside `ul.booking-img-list`, not just the first `<img>` on the page          |
| Extracting images from page header | The hero/page banner images are NOT room images; look within each `.bookingItem` row only                                    |
| Leaving `hero.imageUrl` blank      | Extract from `<ul id="subSlides">` background-image; prepend `https://whatahotel.com`; if truly absent, add `// AGENT NOTE` |

---

## Booking URL Rules ?? Critical

### Rate variants on the same room

The booking page often shows **multiple rate rows per room type** ? typically a lower SEASONAL OFFER rate and a higher BAR rate:

```
SEASONAL OFFER ? Deluxe Room 1 King    ?1,530/night  ? room=A1KP77
BAR            ? Deluxe Room 1 King    ?1,700/night  ? room=A1KP76
```

**Always use the SEASONAL OFFER (lowest) rate URL as the `bookUrl`.**  
The BAR rate URL is only used for **`priceStrike`** (and optional legacy `comparison[].standard`) ? **never** as the `bookUrl`.

Add a comment when multiple variants exist:

```ts
// AGENT NOTE: 2 rate variants ? SEASONAL OFFER ?1,530 (A1KP77) and BAR ?1,700 (A1KP76). Using lowest.
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

## App Download Section ?? Required on Every Promo Page

Every promo page **must** include the `<AppDownload />` component after the booking section (table, footnote, room overview grids, optional price summary) and before `<ContactFooter />`. Primary **Book** links live in each **`RoomCard`** (**after Exclusive perks**, before `ExperienceMore`), not below the booking table.

### App Store Links (hardcoded in component ? never change)

- **iOS:** `https://apps.apple.com/ph/app/whatahotel/id6759237169`
- **Android:** `https://play.google.com/store/apps/details?id=com.whatahotel.app`
- **Heading copy:** "Download our app for more promos" ? never change this text

### Rules

- `AppDownload` takes no props ? links are hardcoded inside the component
- Placement order: RoomCards (book CTA after perks inside each card) ? ComparisonOverview (booking table) ? footnote ? RoomOverviewGrid(s) ? optional PriceSummaryTable ? AppDownload ? ContactFooter
- Never omit from any promo page ? single-hotel or multi-hotel
- Never change the app store URLs

---

## HTML Entities Reference

Use these in strings rendered via `dangerouslySetInnerHTML` (hero location, offer description, subtitle, leftLabel, leftSub):

| Entity     | Output  | Use for                    |
| ---------- | ------- | -------------------------- |
| `&nbsp;`   | (space) | spacing around `\|`        |
| `&amp;`    | &       | ampersands in HTML strings |
| `&mdash;`  | ?       | em dashes                  |
| `&middot;` | ?       | bullet separators          |
| `&times;`  | ?       | multiplication             |

Use plain characters (?, ?, ?, &) inside **plain text fields** like `items[]`, `bookLabel`, `title`, `dates`.

---

## Multi-Hotel Detection

Use `hotels[]` (not flat `hero/offer/rooms`) when:

- The proposal contains two or more distinct hotels
- There are two or more different hotel names
- There are two or more different hotel IDs in booking URLs

In multi-hotel mode:

- `thumbnailUrl` ? use the first hotel's hero image
- `portalTotalValue` ? lowest room total across ALL hotels (use incl.-tax totals ? see Pricing Consistency rules)
- Each hotel in `hotels[]` gets its own complete `hero`, `offer`, and `rooms[]`

---

## Multi-Hotel Workflow ?? ? Two or More URLs

When the user provides **two or more WhataHotel! booking URLs**, follow this workflow. Deviating from it causes cross-hotel data contamination ? the most common multi-hotel agent error.

### Step 0 ? Identify the mode before fetching

Count the distinct hotel IDs in the URLs the user provides:

- **1 URL (or multiple URLs with the same `hotelID`)** ? Single-hotel promo. Use flat `hero`, `offer`, `rooms[]`. Apply the standard single-hotel workflow.
- **2+ URLs with different `hotelID` values** ? Multi-hotel promo. Use `hotels[]`. Apply the multi-hotel workflow below.

Never use `hotels[]` for a single hotel. Never use flat structure for multiple hotels.

### Step 1 ? Read the SSOT first (same as always)

Read `docs/whatahotel-design-ssot.md` before any fetching. Know the full schema for `HotelBlock` and its sub-fields before you start.

### Step 2 ? Fetch each URL exactly once, in sequence

For **N hotel URLs**, perform **exactly N fetches** ? one per hotel, never more:

```
URL 1 ? fetch once ? parse completely ? store as Hotel A data
URL 2 ? fetch once ? parse completely ? store as Hotel B data
(URL 3 ? fetch once ? parse completely ? store as Hotel C data, etc.)
```

**Never re-fetch any URL.** Parse each page completely in one pass (hotel name, hero image, all room names, all rates, all images, all booking URLs, all perks) before moving to the next.

### Step 3 ? Strict data isolation: one URL = one hotels[] entry

This is the most critical rule for multi-hotel promos:

> **Data extracted from Hotel A's URL goes ONLY into `hotels[0]`. Data from Hotel B's URL goes ONLY into `hotels[1]`. Data never crosses between hotels.**

Specifically:
- Hotel A's `hero.imageUrl`, `hero.hotel`, `hero.location` ? `hotels[0].hero` only
- Hotel A's room names, rates, images, perks, booking URLs ? `hotels[0].rooms[]` only
- Hotel B's `hero.imageUrl`, `hero.hotel`, `hero.location` ? `hotels[1].hero` only
- Hotel B's room names, rates, images, perks, booking URLs ? `hotels[1].rooms[]` only

Never copy a room's `bookUrl` from one hotel block into another. The `hotel` query parameter in the URL is different for each hotel.

### Step 4 ? Each hotel gets its own complete section

Every entry in `hotels[]` must be fully populated with:

```ts
hotels: [
  {
    // Hotel A ? from URL 1 only
    hero: {
      imageUrl: "...",           // from URL 1 hero section
      alt: "...",
      hotel: "Hotel A Name",    // from URL 1 <h1>
      location: "<i class='fas fa-map-marker-alt'...></i>ADDRESS | DESCRIPTOR",
    },
    offer: {
      heading: "...",           // from URL 1 perks section
      description: "...",
      pills: ["? ...", "? ..."],
      hidden: false,            // or true to hide the banner
    },
    rooms: [
      // All rooms from URL 1 only ? max 3, lowest-priced standard rooms
      {
        badgeText: "?? Hotel Option 1 ? Room 1",
        // ... all room fields from URL 1
        bookingSummary: {
          checkInOut: "...",
          nights: "...",
          adr: "...",
          total: "...",        // must match grandTotalInclTaxes
        },
        grandTotalInclTaxes: "...",
      },
    ],
  },
  {
    // Hotel B ? from URL 2 only
    hero: {
      imageUrl: "...",          // from URL 2 hero section
      hotel: "Hotel B Name",   // from URL 2 <h1>
      // ...
    },
    offer: { /* from URL 2 perks */ },
    rooms: [
      // All rooms from URL 2 only ? max 3
      {
        badgeText: "?? Hotel Option 2 ? Room 1",
        // ...
      },
    ],
  },
],
```

### Step 5 ? Each hotel's ComparisonOverview uses its own `hotelName`

The `<ComparisonOverview />` booking table is rendered once per hotel, immediately after that hotel's room cards. It receives:
- `rooms={hotels[N].rooms}` ? that hotel's rooms only
- `hotelName={hotels[N].hero.hotel}` ? that hotel's name only

**Hotel A's room cards + Hotel A's booking table ? then Hotel B's room cards + Hotel B's booking table.** They are never combined into one table.

### Step 6 ? badgeText for multi-hotel

Use this format so the client can tell which room belongs to which hotel:

```
Hotel Option 1 rooms ? "?? Hotel Option 1 ? Room 1", "?? Hotel Option 1 ? Room 2"
Hotel Option 2 rooms ? "?? Hotel Option 2 ? Room 1", "?? Hotel Option 2 ? Room 2"
```

Or if hotels have custom names (e.g. "Four Seasons" and "Aman"):
```
"?? Four Seasons ? Deluxe"
"?? Aman ? Garden Suite"
```

### Step 7 ? Promo-level fields for multi-hotel

These live at the root `Promo` level (outside `hotels[]`):

| Field | Rule |
|-------|------|
| `id` | Same format: `"promo-N"` |
| `title` | Reflect both hotels, e.g. `"New York City ? Two Hotel Options"` |
| `dates` | Use the dates from both hotels (if same dates, state once; if different, note both) |
| `thumbnailUrl` | First hotel's hero image URL |
| `portalTotalLabel` | `"Starting From"` |
| `portalTotalValue` | Lowest `grandTotalInclTaxes` across ALL rooms across ALL hotels |
| `specialOffer` | Optional; rendered once before the hotel loop ? not per-hotel |
| `pricingFootnote` | Rendered after the last hotel's booking table ? cover both hotels if needed |
| `priceSummary` | Optional; rendered after all hotels ? use for a combined total across hotels |
| `contact` | `sharedContact` |

### Step 8 ? Pricing consistency applies per room, per hotel

The pricing consistency rules (see "Pricing Consistency" section) apply to each room independently, regardless of which hotel it belongs to. For multi-hotel promos:

- Check each `hotels[0].rooms[N]` against its own `grandTotalInclTaxes`
- Check each `hotels[1].rooms[N]` against its own `grandTotalInclTaxes`
- `portalTotalValue` = lowest `grandTotalInclTaxes` across ALL rooms across ALL hotels

### Common multi-hotel agent errors ??

| Error | What happens | Fix |
|-------|-------------|-----|
| Using Hotel A's rooms in `hotels[1]` | Hotel B shows Hotel A's rates and images | Strict data isolation: one URL = one hotels[] entry |
| Using Hotel A's `bookUrl` for Hotel B rooms | Guest books wrong hotel | Each room's `bookUrl` must have the `hotel=` param from its own URL |
| Same `hero.imageUrl` for both hotels | Both hotel sections show the same hero photo | Extract hero from each URL's own `<ul id="subSlides">` |
| One combined ComparisonOverview for all rooms | Booking table mixes hotels | Each hotel gets its own `ComparisonOverview` with its own `rooms` and `hotelName` |
| Re-fetching URL 1 to "verify" Hotel B data | Wastes tokens, may corrupt data | Parse each URL completely in one pass; never re-fetch |
| Copying Hotel A's `offer.pills` to Hotel B | Hotel B shows Hotel A's perks | Each hotel's `offer` comes from its own URL's perks section |

---

## Clarification Protocol ? What to Ask Before Creating a Promo

### Step 1 ? Always fetch the URL first

If the user provides a WhataHotel! booking URL (`https://www.whatahotel.com/booking/showRates.cfm?hotelID=XXXX&...`), **fetch and read the full page HTML before doing anything else**. The page contains all the data needed:

- **Room names** ? in `<h3>` tags inside each `.bookingItem`
- **Rate variants** ? each room has multiple rows: look for `SEASONAL OFFER` (lowest) and `BAR` (standard/higher)
- **Nightly rates** ? in `<h4>Starting at: <b>X,XXX.00 EUR/USD</b>` (lowest) and in individual rate rows
- **N-night totals** ? in `Total? for N Nights: X,XXX.XX` inside the expanded rate info
- **Room images** ? `<a href>` URLs (NOT `<img src>`) inside each room's `<ul class="booking-img-list">`; use the first 2 per room; URLs are on `d2573qu6qrjt8c.cloudfront.net` or `d321ocj5nbe62c.cloudfront.net`
- **Room-specific booking URLs** ? in `href="/booking/booking_info.cfm?room=ROOMCODE&rate=RATE&hotel=HOTELID&..."` on each "Book Now" link; prepend `https://www.whatahotel.com`
- **Hero image** ?? ? in the `<ul id="subSlides">` background-image style ? prepend `https://whatahotel.com` ? **must never be blank** (see Step 4b)
- **Hotel name** ? in `<h1>` tag
- **Perks** ? in `.perksList` or the "Exclusive Complimentary Perks" section
- **Cancellation policy** ? in the expanded rate info per room
- **Check-in / check-out dates** ? from the URL parameters or the `<h4>` summary at the top

### Step 2 ? Extract rates correctly (SEASONAL OFFER vs BAR)

Each room type appears twice in the rate table:

```
Row 1: SEASONAL OFFER ? lower rate  ? use for bookUrl, priceRate, whatahotel column
Row 2: BAR            ? higher rate ? use for priceStrike, standard column only
```

If only one rate variant exists (no BAR row), set `priceStrike: ""`. If you still maintain legacy `comparison[]`, set `comparison[0].standard` to `""`.

### Step 3 ? Build booking URLs

```
https://www.whatahotel.com/booking/booking_info.cfm?room=ROOMCODE&rate=RATE&hotel=HOTELID&checkin=YYYY-MM-DD&checkout=YYYY-MM-DD&guests=2&children=0&rooms=1
```

Extract `room`, `rate`, and `hotel` from the SEASONAL OFFER row's "Book Now" `href` for each room type.

### Step 4 ? Extract room images

?? **This is critical ? missing images is the most common error.**

For each `.bookingItem` on the page:

1. **Locate the image carousel**: Find `<ul class="booking-img-list">` inside `<div class="bookingItem-img">`
2. **Extract the `<a href>` URL** from each `<li>` ? this is the full-resolution image. **Do NOT use the `<img src>`** (it is often a truncated thumbnail ending in `/E.JPEG`)
3. **Validate the URL**: Must be on `d2573qu6qrjt8c.cloudfront.net` (newer, most common) OR `d321ocj5nbe62c.cloudfront.net` (older, some hotels). Both are valid CloudFront CDNs.
4. **Skip placeholders**: If the `<a>` has no `href`, or `href` contains `/img/paceholder.jpg`, that room has zero images ? set `images: []`
5. **Take the first 2 valid CloudFront URLs** from the `<a href>` attributes
6. **Use alt text**: Extract the `alt` attribute from the `<img>` inside the `<a>`, or use the `<a title>` attribute, or derive from room name

**Troubleshooting**:

- If you find 0 images for a room, set `images: []` (the app uses `DEFAULT_ROOM_IMAGE`). Some hotels have zero images for **all** room types ? this is normal.
- If you see only 1 image per room, include only 1 URL
- Never use URLs from `/img/paceholder.jpg` ? this is the site's own placeholder for missing images

**Example result** (newer CDN):

```ts
images: [
  {
    src: "https://d2573qu6qrjt8c.cloudfront.net/5F327DB69E3542848C2F8F70947780BB/5F327DB69E3542848C2F8F70947780BB.JPEG",
    alt: "Superior Room with Garden",
  },
  {
    src: "https://d2573qu6qrjt8c.cloudfront.net/8286C351F2B3426D911709F2EB5C8016/8286C351F2B3426D911709F2EB5C8016.JPEG",
    alt: "Superior Room with Garden",
  },
];
```

### Step 4b ? Extract hero image

?? **`hero.imageUrl` must NEVER be blank.** The app has a `DEFAULT_HERO_IMAGE` fallback, but the agent must still always attempt extraction ? the default is a generic photo, not the actual hotel.

**Where to find it:** The hero/banner image is in the page's `<ul id="subSlides">` element as an inline `background-image` style on a `<li class="headerSlide">`:

```html
<header class="subHead">
  <!-- SlideShow Background -->
  <ul id="subSlides" class="cycle-slideshow center" data-cycle-speed="1000" data-cycle-slides="li">
    <li class="headerSlide" style="background-image: url(/content/hotels/{HOTEL_ID}/{filename}.jpg)"></li>
  </ul>
</header>
```

The URL path follows the pattern `/content/hotels/{hotelID}/{filename}.jpg` (NOT `/imageRepo/...`). The `{HOTEL_ID}` matches the `hotelID` query parameter in the booking page URL.

**Extraction rules:**

1. Find `<ul id="subSlides">` and extract the `background-image: url(...)` from the first `<li>` style attribute
2. The URL is **relative** (starts with `/content/...`) ? prepend `https://whatahotel.com` to get the full URL (both `https://whatahotel.com` and `https://www.whatahotel.com` work; either is fine)
3. If `subSlides` is missing, look for the largest `<img>` in the page header/banner area (above the room table)
4. Check both `style="background-image: url(...)"` and `data-bg="..."` attributes (lazy-loading variant)
5. Validate: the final URL should start with `https://whatahotel.com/content/` or `https://www.whatahotel.com/content/`

**If extraction fails:** Set `hero.imageUrl` to `""` (the app falls back to `DEFAULT_HERO_IMAGE` from `src/constants.ts`) **AND** add an `// AGENT NOTE: hero image not found on page ? using default` comment in the data file. This should be rare.

**Never leave `imageUrl` blank without a comment.** If the field is `""`, the agent note must explain why.

Also set `thumbnailUrl` to the hero image URL (same value) so the portal card shows the correct hotel photo.

### Step 5 ? Select the rooms to show

The limit is **max 3 rooms per promo**. When the page has more than 3 rooms:

- Always pick the **3 lowest-priced** standard room options
- Skip ADA/accessible variants if a standard equivalent exists at the same price
- Skip villas unless the user specifically requests them

### Step 6 ? Build the comparison array

For each room, compute:

```
standard nightly  = BAR rate (e.g. ?1,700)
whatahotel nightly = SEASONAL OFFER rate (e.g. ?1,530)
standard total    = standard nightly ? N nights
whatahotel total  = whatahotel nightly ? N nights  (= priceTotal amount)
savings           = standard total ? whatahotel total
```

### Step 7 ? Ask only if still missing after fetching

Only ask the user for clarification if these cannot be inferred from the page:

1. **Promo ID / number** ? always ask, cannot be inferred
2. **Client name** ? ask if not mentioned by user
3. **Which 3 rooms to feature** ? ask only if the user has a preference; otherwise default to 3 lowest-priced standard rooms

### Never hallucinate

Never invent room names, rates, features, images, or URLs. Everything must come from the fetched page. If the page cannot be fetched, tell the user and ask them to paste the HTML.

---

## Registering a New Promo

After creating `src/data/promo-N.ts`, update `src/data/promos.ts`:

```ts
import { promo1 } from "./promo-1";
import { promo2 } from "./promo-2";
// ... existing imports
import { promoN } from "./promo-N"; // ? add this

export const promos: Promo[] = [
  promo1,
  promo2,
  // ... existing promos
  promoN, // ? add; array order does not control portal sort
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

## Netlify Project Context (Agent Prompt) ? Token-Optimized for Efficiency

Paste this into **Netlify ? Site configuration ? Agent runs ? Project context**:

```
?? TOKEN EFFICIENCY RULES ? MANDATORY ??

MISSION: Create WhataHotel! proposal data files following the SSOT only.
ONE FETCH PER HOTEL URL. DIRECT CREATION. ZERO RE-FETCHING. ZERO VERIFICATION FETCHES.

CONSTRAINTS:
- React SPA ? only create src/data/promo-N.ts files
- Register every new promo in src/data/promos.ts (import + export)
- Never modify component files
- Never create HTML files or folders

? CRITICAL FETCH RULES:
- Read the SSOT first (docs/whatahotel-design-ssot.md) ? this is NOT a network fetch
- For EACH hotel URL the user provides: fetch it EXACTLY ONCE, parse completely in one pass
- 1 hotel URL ? 1 fetch total | 2 hotel URLs ? 2 fetches total | N URLs ? N fetches total
- Do NOT re-fetch any URL for "verification", "checking", or any other reason
- Do NOT fetch the hero image separately ? extract it during each page's initial parse
- Do NOT fetch existing promo files for reference ? use the SSOT only

SINGLE vs MULTI-HOTEL DETECTION (decide before fetching):
- User provides 1 URL, or multiple URLs with the same hotelID ? SINGLE-HOTEL promo (flat hero/offer/rooms)
- User provides 2+ URLs with different hotelIDs ? MULTI-HOTEL promo (hotels[] array)
Never use hotels[] for one hotel. Never use flat structure for multiple hotels.

WORKFLOW ? SINGLE HOTEL (1 URL):
1. Read /docs/whatahotel-design-ssot.md
2. Ask user for URL (and promo id / client if needed)
3. Fetch that URL ONCE ? extract hotel name, hero, rooms, rates, images, perks, totals
4. Build promo object with flat hero, offer, rooms[]
5. Create src/data/promo-N.ts; register in src/data/promos.ts; set createdAt (ISO 8601)
6. Commit: promo-N-YYYYMMDD
7. Done

WORKFLOW ? MULTI-HOTEL (2+ URLs):
1. Read /docs/whatahotel-design-ssot.md
2. Ask user for ALL hotel URLs + promo id + client name
3. Fetch URL 1 ONCE ? parse completely ? store as Hotel A data (all rooms, rates, images, hero, perks)
4. Fetch URL 2 ONCE ? parse completely ? store as Hotel B data (all rooms, rates, images, hero, perks)
   (Repeat for URL 3, 4, etc. ? one fetch per URL, never re-fetch)
5. DATA ISOLATION ? MANDATORY: data from Hotel A URL goes ONLY into hotels[0]; data from Hotel B URL goes ONLY into hotels[1]. NEVER mix data across hotels.
6. Build promo object with hotels[] array; each entry has its own hero, offer, rooms[]
7. Create src/data/promo-N.ts; register in src/data/promos.ts; set createdAt (ISO 8601)
8. Commit: promo-N-YYYYMMDD
9. Done

EXTRACTION RULES (per URL, complete in one pass):

From <h1>: Hotel name ? hero.hotel (for THIS hotel only)
From <h4>: Starting-at rate per night (lowest SEASONAL OFFER)
From rate table rows:
  - SEASONAL OFFER: lowest rate ? bookUrl source
  - BAR: higher rate ? priceStrike source
From <h3> inside .bookingItem: Room names (for THIS hotel only)
From .bookingItem images (first 2 only, for THIS hotel only):
  - Extract from <a href> (NOT <img src>) inside ul.booking-img-list
  - Valid CDNs: d2573qu6qrjt8c.cloudfront.net (most hotels) or d321ocj5nbe62c.cloudfront.net (older hotels)
  - If <a> has no href or href is /img/paceholder.jpg, set images: []
  - Skip images < 200px; validate CDN domain
From <a href="/booking/booking_info.cfm...">: Extract room code, rate code, hotel ID (for THIS hotel only)
From page totals: N-night cost for each rate variant
From hero section: Background image URL ? hero.imageUrl (for THIS hotel only)
From perks section: offer.heading, offer.description, offer.pills[] (for THIS hotel only)

REQUIRED DATA STRUCTURE:

Single-Hotel Promo (1 URL):
- id, createdAt (ISO), title, client, dates, thumbnailUrl, portalTotalLabel, portalTotalValue
- hero: imageUrl, alt, hotel, location
- offer: heading, description, pills[]
- rooms[]: badgeText, name, subtitle, priceRate, priceTotal, images[], features[], savings, bookUrl, bookLabel
- priceLabel?: optional; priceStrike: "" if no BAR
- quickFacts?, stayCheckInOut?, nightsLabel?, stayTotalExclAmount?, stayTotalExclSub?, investmentContextLine?, bookingSummary?, experienceMore? ? see Full Type Reference
- pricingFootnote? on promo (HTML)
- contact: sharedContact

Multi-Hotel Promo (2+ URLs):
- id, createdAt (ISO), title (mention both hotels), client, dates, thumbnailUrl (first hotel hero), portalTotalLabel ("Starting From"), portalTotalValue (lowest grandTotalInclTaxes across ALL hotels/rooms)
- hotels: [
    {  // hotels[0] ? data from URL 1 ONLY
      hero: { imageUrl, alt, hotel, location },   // from URL 1
      offer: { heading, description, pills[] },   // from URL 1 perks
      rooms: [                                    // from URL 1 only; max 3
        { badgeText: "?? Hotel Option 1 ? Room 1", ...all room fields..., bookUrl: "...hotel=HOTEL_A_ID..." },
        { badgeText: "?? Hotel Option 1 ? Room 2", ... },
      ],
    },
    {  // hotels[1] ? data from URL 2 ONLY
      hero: { imageUrl, alt, hotel, location },   // from URL 2
      offer: { heading, description, pills[] },   // from URL 2 perks
      rooms: [                                    // from URL 2 only; max 3
        { badgeText: "?? Hotel Option 2 ? Room 1", ...all room fields..., bookUrl: "...hotel=HOTEL_B_ID..." },
      ],
    },
  ]
- specialOffer?: optional, promo-level (rendered ONCE before hotel loop)
- priceSummary?: optional, promo-level (rendered after all hotels)
- pricingFootnote?: promo-level (rendered after last hotel's booking table)
- contact: sharedContact

MULTI-HOTEL DATA ISOLATION ? CRITICAL:
- hotels[0].hero.imageUrl ? from URL 1 ONLY
- hotels[0].rooms[].bookUrl ? must contain hotel=HOTEL_A_ID from URL 1
- hotels[1].hero.imageUrl ? from URL 2 ONLY
- hotels[1].rooms[].bookUrl ? must contain hotel=HOTEL_B_ID from URL 2
- If hotel IDs match between hotels[], you have a bug ? fix before committing

MULTI-HOTEL COMPARISONOVERVIEW (booking table):
Each hotel's ComparisonOverview is rendered separately after that hotel's room cards.
- hotels[0] rooms ? their own booking table with hotelName = hotels[0].hero.hotel
- hotels[1] rooms ? their own booking table with hotelName = hotels[1].hero.hotel
Never combine rooms from different hotels into one table.

MANDATORY FIELDS (NEVER OMIT ? applies to every room in every hotel):
- createdAt: ISO 8601 string for portal ordering
- priceStrike: use "" (empty string) if no BAR rate exists
- images: up to 2 URLs per room from <a href> in ul.booking-img-list (CDN: d2573qu6qrjt8c or d321ocj5nbe62c); empty array if hotel has no room images
- booking table: set `bookingSummary` OR `stayCheckInOut` + `nightsLabel` + `savings.rightValue` (and ADR from `priceRate`)
- savings.leftLabel: must wrap rate name in <span> (data quality)
- savings.leftSub: must show "Standard: X/night (total: Y) ? WhataHotel!: A/night (total: B) ? you save Z" (data quality)

?? PRICING CONSISTENCY ? MANDATORY (most common agent error):
The tax-inclusive total shown on the booking page IS the canonical grand total. It must be the SAME number in every field that shows a total. Before committing, verify for each room:
- grandTotalInclTaxes = tax-incl. stay total from booking page (NEVER omit when page shows it)
- bookingSummary.total = SAME as grandTotalInclTaxes (never the excl.-tax amount)
- savings.rightValue = SAME as bookingSummary.total / grandTotalInclTaxes
- portalTotalValue = SAME as grandTotalInclTaxes (or lowest across rooms for multi-room)
If savingsBreakdown is used: whatahotelTotalInclTaxes = tax-incl. total; bookingSummary.total and savings.rightValue must equal that same amount.

WRONG (fields disagree ? agent error):
  grandTotalInclTaxes: "$20,200.00"
  bookingSummary.total: "$18,648.00"   ? excl.-tax ? WRONG
  savings.rightValue: "$18,648.00"     ? excl.-tax ? WRONG
  portalTotalValue: "$18,648.00"       ? excl.-tax ? WRONG

CORRECT (all fields agree):
  grandTotalInclTaxes: "$20,200.00"
  bookingSummary.total: "$20,200.00"   ? same ?
  savings.rightValue: "$20,200.00"     ? same ?
  portalTotalValue: "$20,200.00"       ? same ?

OPTIONAL COMPONENTS (use if applicable):
- savingsBreakdown?: If set, investment block uses `<SavingsBreakdown />` instead of the ADR / nights / grand total grid
- specialOffer?: For highlighted promotions or cancellation policies
- priceSummary?: For multi-unit or package pricing tables
- mastheadEyebrow?, keyAttributes?, galleryTitle?, image captions ? layout polish

?? FORBIDDEN ACTIONS (THESE WASTE TOKENS):
- ? Do NOT "check" an existing promo file for reference ? use the SSOT examples
- ? Do NOT fetch the hero image separately ? extract from initial page parse
- ? Do NOT re-read the booking page after initial fetch
- ? Do NOT verify data by fetching again
- ? Do NOT find/read src/data/promo-9.ts for examples ? refer to SSOT sections instead
- ? Do NOT run verification commands after building the file
- ? Do NOT browse the project directory ? only edit needed files

? CORRECT FLOW ? SINGLE HOTEL:
- Read SSOT first
- Fetch the 1 hotel URL once; parse everything in one pass
- Build TypeScript file from parsed data + SSOT rules
- Register in promos.ts; commit; done

? CORRECT FLOW ? MULTI-HOTEL:
- Read SSOT first
- Fetch URL 1 once; parse completely; store Hotel A data
- Fetch URL 2 once; parse completely; store Hotel B data
- Build hotels[] ? Hotel A data into hotels[0] ONLY; Hotel B data into hotels[1] ONLY
- Verify: hotels[0].rooms[].bookUrl has Hotel A's hotel ID; hotels[1] has Hotel B's hotel ID
- Register in promos.ts; commit; done

REQUIRED DATA STRUCTURE:

Single-Hotel Promo (1 URL):
- id, createdAt (ISO), title, client, dates, thumbnailUrl, portalTotalLabel, portalTotalValue
- hero: imageUrl, alt, hotel, location
- offer: heading, description, pills[]
- rooms[]: badgeText, name, subtitle, priceRate, priceStrike, priceTotal, images[], features[], savings, bookUrl, bookLabel
- priceLabel?: optional
- quickFacts?, bookingSummary?, stayCheckInOut?, nightsLabel?, investment fields ? see Full Type Reference
- pricingFootnote?, suppressOfferBanner?, offer.hidden? as needed
- contact: sharedContact

Multi-Hotel Promo (2+ URLs):
- hotels[] array; each entry has: hero (from that hotel's URL only), offer (from that hotel's URL only), rooms[] (from that hotel's URL only; max 3)
- Data isolation: hotels[0] data comes from URL 1 ONLY; hotels[1] data comes from URL 2 ONLY
- bookUrl in each room must have the hotel ID from that room's own URL
- Each hotel gets its own ComparisonOverview booking table (never combined)

MANDATORY FIELDS (NEVER OMIT ? every room, every hotel):
- createdAt (ISO 8601)
- priceStrike: use "" (empty string) if no BAR rate exists
- images: up to 2 URLs per room from <a href> in ul.booking-img-list (CDN: d2573qu6qrjt8c or d321ocj5nbe62c); empty array if hotel has no room images ? app uses DEFAULT_ROOM_IMAGE
- booking table data: `bookingSummary` OR valid fallbacks (`stayCheckInOut`, `nightsLabel`, `savings.rightValue`, `priceRate`)
- savings.leftLabel: must wrap rate name in <span>
- savings.leftSub: must show "Standard: X/night (total: Y) ? WhataHotel!: A/night (total: B) ? you save Z"

PRICING CONSISTENCY (applies per room, per hotel ? same rules as above):
- grandTotalInclTaxes = tax-incl. stay total from booking page; NEVER omit when page shows it
- bookingSummary.total = SAME as grandTotalInclTaxes
- savings.rightValue = SAME as grandTotalInclTaxes
- portalTotalValue = lowest grandTotalInclTaxes across ALL rooms across ALL hotels

CODE EXAMPLES IN SSOT:
- Multi-Hotel Workflow: step-by-step for 2+ URLs (see "Multi-Hotel Workflow" section)
- Clarification Protocol: step-by-step extraction checklist
- Booking summary section: `bookingSummary` + fallbacks
- CloudFront image rules: see "Step 4 ? Extract room images" in this doc

FINAL WORKFLOW ? SINGLE HOTEL:
1. Read SSOT; ask user for URL + id + client
2. Fetch URL once; parse completely
3. Build promo with flat hero/offer/rooms[]
4. Create src/data/promo-N.ts; update promos.ts; set createdAt
5. Commit promo-N-YYYYMMDD; push; Netlify deploys; done

FINAL WORKFLOW ? MULTI-HOTEL:
1. Read SSOT; ask user for ALL URLs + id + client
2. Fetch URL 1 once ? parse completely ? Hotel A data in memory
3. Fetch URL 2 once ? parse completely ? Hotel B data in memory
4. Build promo with hotels[]: hotels[0] = Hotel A data ONLY; hotels[1] = Hotel B data ONLY
5. Verify hotel IDs differ between hotels[0] and hotels[1] bookUrls
6. Create src/data/promo-N.ts; update promos.ts; set createdAt
7. Commit promo-N-YYYYMMDD; push; Netlify deploys; done
```

---

## New Promo Checklist

- [ ] **Read** this SSOT (and `src/types.ts` if needed) before building data ? know booking table fields, `savings`, investment block, optional legacy `comparison[]`
- [ ] Create `src/data/promo-N.ts` with correct `id`, **`createdAt` (ISO 8601)**, `title`, `client`, `dates`
- [ ] All rooms have exactly 2 feature blocks (door-open + gift)
- [ ] All `savings.leftLabel` strings use `<span>` wrapper
- [ ] `savings.leftSub` includes per-night breakdown, total calculation, AND savings amount (data quality)
- [ ] `priceStrike` is `""` not omitted when no strikethrough exists
- [ ] **Hero image** scraped from page (`hero.imageUrl` populated) ? if truly missing, set `""` with `// AGENT NOTE` explaining why; `thumbnailUrl` matches hero image
- [ ] Room images scraped from page (CloudFront CDN URLs) ? empty `images[]` uses app default photo
- [ ] Booking table: `bookingSummary` **or** `stayCheckInOut` + `nightsLabel` + `priceRate` + `savings.rightValue` populated
- [ ] Optional: `quickFacts`, `investmentContextLine`, `stayTotalExclAmount` / `stayTotalExclSub` for sample-style investment block
- [ ] Multi-hotel promos use `hotels[]` not flat structure
- [ ] Each room's `bookUrl` uses the SEASONAL OFFER (lowest) rate's unique room code
- [ ] BAR rate used only for `priceStrike` (and optional legacy `comparison[]`) ? never as `bookUrl`
- [ ] `// AGENT NOTE` comment added when multiple rate variants exist per room
- [ ] No room data was hallucinated ? all rates, names, images, and URLs came from fetched page
- [ ] If any data is missing, `// AGENT NOTE:` comment is present listing what needs updating
- [ ] `PromoPage` flow satisfied: room cards (book CTA **after Exclusive perks** in `RoomCard`) ? booking table ? optional `pricingFootnote` ? `RoomOverviewGrid` ? optional price summary ? `<AppDownload />` ? `<ContactFooter />` (handled by app when promo is registered)
- [ ] `[OPTIONAL]` `savingsBreakdown` field present in rooms if detailed pricing breakdown is needed (e.g., free nights promo)
- [ ] `[OPTIONAL]` `specialOffer` field present in promo if special promotion/offer exists to highlight
- [ ] `[OPTIONAL]` `priceSummary` field present in promo if multi-unit pricing table is needed
- [ ] If optional components used: data is complete and formatted correctly (see SavingsBreakdown, SpecialOfferBox, PriceSummaryTable sections)
- [ ] `<AppDownload />` remains on every promo route (component-level; do not remove from `PromoPage`)
- [ ] Promo registered in `src/data/promos.ts`
- [ ] Committed to GitHub and verified live on Netlify

### ?? Pricing Consistency Self-Check (run before committing)

For **each room**, verify all four of these hold. If any do not match, fix them before committing:

- [ ] **`grandTotalInclTaxes`** is populated with the tax-inclusive stay total from the booking page ? never omitted when the page shows it
- [ ] **`bookingSummary.total`** equals `grandTotalInclTaxes` (same formatted string, e.g. `"$20,200.00"`)
- [ ] **`savings.rightValue`** equals `bookingSummary.total` / `grandTotalInclTaxes` (same number ? not the excl.-tax amount)
- [ ] **`portalTotalValue`** equals `grandTotalInclTaxes` for single-room promos, or the lowest `grandTotalInclTaxes` across all rooms/hotels for multi-room or multi-hotel promos
- [ ] **If using `savingsBreakdown`:** `whatahotelTotalInclTaxes` is set, and `bookingSummary.total` + `savings.rightValue` both equal that same amount

### ?? Multi-Hotel Self-Check (run before committing ? multi-hotel promos only)

- [ ] `hotels[]` is used (not flat `hero/offer/rooms`) ? confirmed the user provided 2+ URLs with different `hotelID` values
- [ ] Every room in `hotels[0]` has a `bookUrl` containing the Hotel A `hotel=` ID from URL 1
- [ ] Every room in `hotels[1]` has a `bookUrl` containing the Hotel B `hotel=` ID from URL 2
- [ ] `hotels[0].hero.imageUrl` comes from URL 1's hero section ? not from URL 2
- [ ] `hotels[1].hero.imageUrl` comes from URL 2's hero section ? not from URL 1
- [ ] `hotels[0].offer.pills[]` lists Hotel A's perks ? not Hotel B's
- [ ] `hotels[1].offer.pills[]` lists Hotel B's perks ? not Hotel A's
- [ ] No room name, rate, or image from Hotel A appears anywhere inside `hotels[1]`, and vice versa
- [ ] `thumbnailUrl` uses the first hotel's (`hotels[0]`) hero image
- [ ] `portalTotalValue` is the lowest `grandTotalInclTaxes` across ALL rooms across ALL hotels
- [ ] `title` references both hotels (e.g. `"New York City ? Two Hotel Options"`) or both destinations
- [ ] `badgeText` clearly identifies hotel and room number: `"?? Hotel Option 1 ? Room 1"`, `"?? Hotel Option 2 ? Room 1"`, etc.

---

_WhataHotel! / Lorraine Travel ? Updated March 2026_
