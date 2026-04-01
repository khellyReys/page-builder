# WhataHotel! Proposal Site ? Single Source of Truth

> **For:** Lorraine Travel / WhataHotel!  
> **Stack:** React + TypeScript + Vite ? Deployed on Netlify via GitHub  
> **Last updated:** April 2026 ? **keep in sync with `src/types.ts` and `src/components/`**

### AI agents: read this before the full SSOT

- **This file is large (~15k+ tokens).** Many agent environments **cannot load it in one read** and will error (`exceeds maximum allowed tokens`). If that happens, you did **not** receive image-extraction rules — **stop** and use partial reads (`offset` / `limit`) or search.
- **Start with:** [`docs/whatahotel-agent-new-promo.md`](./whatahotel-agent-new-promo.md) — short guide: **mandatory hero + room image steps**, **city vs property URLs**, workflow, and an **SSOT line-range index** for chunked reads.
- **Then** open only the SSOT sections you need (see **Room Images** ~line 811, **Booking URL Rules** ~line 958, **Multi-Hotel Workflow** ~line 1050).

---

## Client-approved copy & labels (do not regress)

**Product decision (2026):** Redundant headings and boilerplate were removed from the live UI. Agents and maintainers **must not** reintroduce them in **components** or **promo data** without an explicit product change.

| Area | Rule |
|------|------|
| **Exclusive Perks block** | `PromoPage` shows the heading **Exclusive Perks** only (capital **P**). **No** “& inclusions”, **no** Lorraine Travel subline (“included when you book…”). Body copy is **only** the deduped bullets from `features[]` with `icon: "gift"` → `items[]`. |
| **`gift` feature `title` in data** | Use **`"Exclusive Perks"`** on every room’s `icon: "gift"` block. **Do not** use `WhataHotel! Exclusive Perks`, `Exclusive Perks & Inclusions`, or partner wording in `title`. |
| **Rate table (`ComparisonOverview`)** | User-facing heading: **Rate Comparisons**. **Do not** restore the old paired labels “Booking summary” / “Comparison overview” in UI copy. |
| **Room card pricing (`ProposalInvestment`)** | Section heading: **Rate & pricing breakdown** only. **Do not** use “Investment summary”. **Do not** add a per-room “Preferred Partner” / “What A Hotel! · Preferred Partner” line. |
| **Global footer** | Org-level lines stay in `ContactFooter` / `contact.ts`. That is separate from the removed per-room partner line. |

**Pre-merge check:** If you edit `PromoPage.tsx`, `ComparisonOverview.tsx`, `ProposalInvestment.tsx`, or `gift` blocks in `promo-*.ts`, confirm forbidden user-facing strings above are absent.

---

## Production readiness (agents & maintainers)

| Area | Status | Notes |
|------|--------|--------|
| **Build / types** | OK | `npm run build` should pass before merge. |
| **Data-only workflow** | OK | New promos are TS data + `promos.ts` registry; no per-promo routes. |
| **SSOT doc** | **Must stay aligned** | This file previously drifted from the app (file names, room layout, optional fields). Sections below are updated; **re-verify after UI changes.** |
| **Redundancy** | Mitigated | If `savingsBreakdown` is set, the default **ADR / nights / grand total** pricing layout is replaced by `<SavingsBreakdown />`. There is **no** savings strip under the room card; totals appear in the **Rate Comparisons** table and the room **Rate & pricing breakdown** block. |
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

1. **Read** [`docs/whatahotel-agent-new-promo.md`](./whatahotel-agent-new-promo.md) first (image rules + workflow; fits one read). **Then** read this SSOT **in sections** (see AI callout above) or search for headings ? do not rely on a single full-file read. Optionally skim **`src/types.ts`** for the exact TypeScript contract.
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
    contact.ts        ? Portal-only footnote string for `ContactFooter` (proposal footer is hardcoded in the component)
  constants.ts        ? DEFAULT_HERO_IMAGE, DEFAULT_ROOM_IMAGE (fallbacks)
  types.ts            ? Promo, HotelBlock, Room, etc. type definitions
  lib/
    html.ts           ? stripHtml helper (booking table fallbacks)
  components/
    Masthead.tsx
    CityHeroImage.tsx         ? Optional full-bleed destination photo + ?Destination? row (`hero.cityImageUrl`)
    HeroSection.tsx           ? Inset framed **property** hero + caption (`hero.imageUrl`)
    HotelIdentity.tsx         ? Stars + hotel name + location above property hero
    OfferBanner.tsx
    RoomMetaStrip.tsx         ? Optional quickFacts strip (Room Category, Suite Size, ?)
    ProposalInvestment.tsx   ? **Rate & pricing breakdown**: ADR / Grand total / Nights (3-column grid); no book button inside; no “Investment summary” or per-room partner line
    RoomCard.tsx              ? ? investment ? **Book** CTA ? optional ExperienceMore (no perks block in-card)
    ExperienceMore.tsx      ? Optional spending-credit style block
    RoomOverviewGrid.tsx      ? Key-attribute grid (after table + footnote; book link is in RoomCard)
    SavingsBreakdown.tsx      ? Standard vs WhataHotel! breakdown (optional per room)
    ComparisonOverview.tsx    ? Rate Comparisons table ? `entries` (multi-hotel) or `rooms` + `hotelName`
    SpecialOfferBox.tsx
    PriceSummaryTable.tsx
    PromoCard.tsx
    AppDownload.tsx           ? App store section (always rendered on promo pages)
    ContactFooter.tsx
  pages/
    PromoPage.tsx     ? Renders single or multi-hotel promos (per layout below: perks + one global table ? footnote ? overview; book CTA is in RoomCard)
    Portal.tsx          ? Homepage portal list (not PortalPage.tsx)
```

---

## Proposal page layout (reference)

Target UX matches **[pro.whatahotel.com/best-proposal-sample](https://pro.whatahotel.com/best-proposal-sample)** (Travel Proposal pattern).

**Single-hotel render order (`PromoPage.tsx`):**

1. `Masthead` ? logo links to `https://www.whatahotel.com/`
2. Optional `CityHeroImage` ? when `hero.cityImageUrl` is set: **full-bleed** destination photo, then ?Destination? label row (user/agent-supplied URL; **not** from `subSlides`)
3. `HotelIdentity` ? star row, `hero.hotel`, `hero.location` (HTML) ? above the **property** hero
4. `HeroSection` ? **inset** framed property image (`hero.imageUrl` from `<ul id="subSlides">`, or `DEFAULT_HERO_IMAGE`) + caption strip
5. `OfferBanner` ? only if `offer` exists and **`!offer.hidden`** and **`!promo.suppressOfferBanner`**
6. `SpecialOfferBox` ? optional, promo-level
7. `RoomCard` for each room:
   - `RoomMetaStrip` ? optional `quickFacts` strip
   - Gallery images
   - **Room Features** (`features` with `icon: "door-open"`) ? displayed in a card below the gallery images, before the investment block
   - **`ProposalInvestment`** (**Rate & pricing breakdown**) ? 3-column **ADR ? Grand Total (incl. taxes & fees) ? Nights** grid; when `grandTotalInclTaxes` is set it is the canonical total shown in the card (no separate incl.-tax block below)
   - Primary **`bookUrl` / `bookLabel`** CTA (before optional `ExperienceMore`)
8. **Exclusive Perks** (from room `features` with `icon: "gift"`; `RoomCard` does not render `gift` in-card): **single-hotel** ? one deduped section after all room cards, before the table. **Multi-hotel** (`hotels[]`) ? **per hotel**, one deduped section **under that hotel's room cards** (not one merged block above the table). Heading and bullets only ? **no** extra “inclusions” wording or Lorraine Travel subline in the app.
9. One global `ComparisonOverview` ? **Rate Comparisons** table columns: Hotel ? Room category ? Check-in/out ? Nights ? ADR ? **Grand Total (incl. taxes & fees)** (all rooms across the promo)
10. Optional `promo.pricingFootnote` (HTML) ? e.g. taxes disclaimer
11. `RoomOverviewGrid` per room when `keyAttributes` is set
12. Optional `PriceSummaryTable`
13. `AppDownload` ? unchanged
14. `ContactFooter`

**Multi-hotel:** For each `hotels[]` entry, render hotel identity/hero/offer + room cards, then **that hotel's** deduped **Exclusive Perks** section (from its rooms' `gift` features only). After **all** hotels, render one global **Rate Comparisons** table, then optional footnote and room overviews. Layout step **6** (`specialOffer`) remains once before the loop. After global booking content: optional price summary, `AppDownload`, `ContactFooter`.

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

  /** HTML footnote after Rate Comparisons table (e.g. taxes disclaimer). */
  pricingFootnote?: string;
  /** When true, `OfferBanner` is not rendered. */
  suppressOfferBanner?: boolean;
}

interface HotelBlock {
  hero: HeroBlock;
  offer: OfferBlock;
  rooms: Room[];
}

interface HeroBlock {
  imageUrl: string; // Property hero from <ul id="subSlides">; app uses DEFAULT_HERO_IMAGE if missing/empty
  alt: string;
  hotel: string;
  location: string; // HTML string with <i> icon tag ? shown in HotelIdentity above property hero
  /** Optional destination/city image (full-bleed); do NOT reuse for imageUrl or room images */
  cityImageUrl?: string;
  cityImageAlt?: string;
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
  keyAttributes?: Array<{ label: string; value: string; sub?: string }>; // After table + footnote; book CTA is in RoomCard
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
  /** Legacy BAR vs WH rows ? not used by the Rate Comparisons table; optional to keep for archives */
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

Use a source-derived promo label, not placeholders:

- Parse the room marketing line that usually contains: `WhataHotel! ... More Info`.
- If a promo phrase exists between `WhataHotel!` and `More Info` (or before room-name tokens), use that phrase as `badgeText`.
  - Examples: `"3rd Night Free w/ BKFST"`, `"Last Night Free"`, `"Free Parking"`.
- If no promo phrase exists, set `badgeText: "Exclusive Rate"`.
- Never use generic labels such as `"Hotel Option 1 - Room 1"` or `"Option 2"`.

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
2. **Exclusive Perks** ? `icon: "gift"`, **`title: "Exclusive Perks"`** ? consumed by `PromoPage`: **single-hotel** ? one deduped section after all room cards, before the table; **multi-hotel** ? one deduped section per hotel under that hotel's room cards (not one merged block above the table)

`RoomCard` renders only non-gift features (`icon !== "gift"`). Gift features are aggregated by `PromoPage` into deduplicated perks sections per rules above (single-hotel: once before table; multi-hotel: once per hotel under that hotel's cards).

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

The WhataHotel booking page always displays a **tax-inclusive grand total** for the stay. This is the number the client actually pays. It must be **the same number that appears in every section of the proposal page that shows a total** ? the room **Rate & pricing breakdown** block, the **Rate Comparisons** table, the portal card, and any summary row.

**This is the most common source of errors by the AI agent. Follow these rules without exception.**

### Rule 1 ? Grand Total IS the tax-included price

When the booking page shows a tax-inclusive total for the stay, populate `grandTotalInclTaxes` with that amount. This field is **mandatory whenever the booking page displays it** ? it is NOT optional.

> ? Never feature the excl.-tax total as the "Grand Total" when an incl.-tax total is available.

### Rule 2 ? Rate Comparisons table Total MUST match `grandTotalInclTaxes`

The **Total** column in `<ComparisonOverview />` (UI heading **Rate Comparisons**) must show the **same number** as `grandTotalInclTaxes`. Always set `bookingSummary.total` explicitly to that incl.-tax amount:

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

## Rate Comparisons (`ComparisonOverview`) ?? Required for production-quality promos

`<ComparisonOverview />` renders the **Rate Comparisons** table (columns: **Hotel ? Room category ? Check-in / out ? Nights ? ADR ? Grand Total (incl. taxes & fees)**). It is rendered **once per promo** after all room content and perks sections (single-hotel: perks block immediately before this table; multi-hotel: perks already rendered under each hotel) and accepts either:

- `entries={...}` for combined multi-hotel/single-hotel normalized rendering (preferred), or
- `rooms={...}` + `hotelName={...}` for a single group.

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

`PromoPage` renders: **single-hotel:** all room cards ? one **Exclusive Perks** block ? one `<ComparisonOverview ... />`. **Multi-hotel:** for each `hotels[]` entry, that hotel's room cards ? that hotel's **Exclusive Perks** block; after all hotels, one combined `<ComparisonOverview ... />`. Then optional `pricingFootnote` ? `RoomOverviewGrid` when `keyAttributes` is set ? optional `PriceSummaryTable` ? `AppDownload` ? `ContactFooter`. Each **`RoomCard`** includes the **Book** link.

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
Rate & pricing breakdown (ProposalInvestment)
  -- If savingsBreakdown: context line -> SavingsBreakdown
  -- Else: context line -> 3-column grid: ADR | Grand Total (incl. taxes & fees) | Nights -> included value stack when set
     NOTE: when grandTotalInclTaxes is set it IS the Grand Total card value (no separate block below). No per-room partner slogan.
    |
**Book** (`bookUrl` / `bookLabel`) + secure-booking hint
    |
[ExperienceMore] -- optional
    |
(PromoPage) Exclusive Perks (single: deduped once; multi: deduped per hotel under its cards) -> one Rate Comparisons table (Grand Total col = grandTotalInclTaxes) -> footnote -> RoomOverviewGrid(keyAttributes) -- no separate book row below the table
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

The `<SpecialOfferBox />` component highlights key promotions or special terms.

- **Single-hotel (`PromoPage.tsx`):** rendered **after** `OfferBanner` and **before** room cards (below the offer banner when it is shown).
- **Multi-hotel:** rendered **once** immediately **after** `Masthead` and **before** the hotel loop ? so it appears **above** each hotel?s `OfferBanner` / identity block, not below the first hotel?s offer banner. (This matches current `PromoPage` behavior.)

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
{/* PromoPage: Exclusive Perks (layout rules above) then one ComparisonOverview (Rate Comparisons) */}
<ComparisonOverview rooms={promo.rooms!} hotelName={promo.hero!.hotel} />
{/* footnote + RoomOverviewGrid ? book CTAs are in RoomCard; see Proposal page layout section */}
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
<ContactFooter />
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

> **Agents:** This section is **mandatory** for every new promo. If your environment failed a full-file SSOT read, you may have missed it ? read [`whatahotel-agent-new-promo.md`](./whatahotel-agent-new-promo.md) first, then this section.

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

### Hero Image Extraction

The hero/banner image is in `<ul id="subSlides">` as a `background-image` on a `<li class="headerSlide">`:

```html
<ul id="subSlides" class="cycle-slideshow center" data-cycle-speed="1000" data-cycle-slides="li">
  <li class="headerSlide" style="background-image: url(/content/hotels/{HOTEL_ID}/{filename}.jpg)"></li>
</ul>
```

**Rules:**
1. Extract the `background-image: url(...)` value from the first `<li>` inside `<ul id="subSlides">`
2. The URL is **relative** ? prepend `https://whatahotel.com` to get the full URL
3. The path pattern is `/content/hotels/{hotelID}/{filename}.jpg`
4. Set **both** `hero.imageUrl` and `thumbnailUrl` to this full URL
5. If extraction fails, set `hero.imageUrl: ""` with `// AGENT NOTE: hero image not found` ? the app falls back to `DEFAULT_HERO_IMAGE`

### Common Image Mistakes ??

| Mistake | Fix |
|---------|-----|
| Using `<img src>` instead of `<a href>` | `<img src>` is often a truncated thumbnail (`/E.JPEG`). **Always use `<a href>`** |
| Rejecting `d2573qu6qrjt8c` CDN URLs | Both `d2573qu6qrjt8c` and `d321ocj5nbe62c` CloudFront CDNs are valid |
| Using placeholder URLs | Skip `/img/paceholder.jpg`; set `images: []` instead |
| Extracting images from page header | Room images are inside `.bookingItem` only; hero is in `<ul id="subSlides">` |
| Leaving `hero.imageUrl` blank | Extract from `<ul id="subSlides">` background-image; prepend `https://whatahotel.com` |

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

Every promo page **must** include the `<AppDownload />` component after the booking section (room cards, perks per layout rules, table, footnote, room overview grids, optional price summary) and before `<ContactFooter />`. Primary **Book** links live in each **`RoomCard`** (before `ExperienceMore`), not below the booking table.

### App Store Links (hardcoded in component ? never change)

- **iOS:** `https://apps.apple.com/ph/app/whatahotel/id6759237169`
- **Android:** `https://play.google.com/store/apps/details?id=com.whatahotel.app`
- **Heading copy:** "Download our app for more promos" ? never change this text

### Rules

- `AppDownload` takes no props ? links are hardcoded inside the component
- Placement order: **Single-hotel:** RoomCards ? Exclusive Perks ? ComparisonOverview (Rate Comparisons) ? … **Multi-hotel:** (RoomCards ? Exclusive Perks) per hotel, then one ComparisonOverview ? footnote ? RoomOverviewGrid(s) ? optional PriceSummaryTable ? AppDownload ? ContactFooter
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

Read [`docs/whatahotel-agent-new-promo.md`](./whatahotel-agent-new-promo.md) and the **relevant sections** of `docs/whatahotel-design-ssot.md` (see AI callout at top of SSOT ? avoid a single full-file read). Know the schema for `HotelBlock` and its sub-fields before you start.

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

### Step 5 ? One booking table for the whole promo (multi-hotel)

After **all** hotel blocks and room cards, `PromoPage` renders **one** `<ComparisonOverview />` with combined `entries`: each group is `{ rooms: hotels[N].rooms, hotelName: hotels[N].hero.hotel }`. Every row shows the correct hotel name. Do **not** assume a separate table per hotel in the UI (data is still isolated per `hotels[]` entry).

### Step 6 ? badgeText for multi-hotel

Use source-derived promo labels for each room:

```
Hotel A room badges -> "3rd Night Free w/ BKFST", "Exclusive Rate"
Hotel B room badges -> "Last Night Free", "Free Parking"
```

If no promo phrase is present on a room, use `badgeText: "Exclusive Rate"`.
Never use `Hotel Option X - Room X` placeholders.

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
| `pricingFootnote` | Rendered after the global booking table ? cover both hotels if needed |
| `priceSummary` | Optional; rendered after all hotels ? use for a combined total across hotels |
| (none) | Proposal page footer (Lorraine Travel / Reservations) is hardcoded in `ContactFooter` ? not part of `Promo` data |

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
| Wrong `hero.hotel` on a `hotels[]` entry | Rows show the wrong hotel name in the single combined table | Each `hotels[N].hero.hotel` must match that entry's fetched page; rooms stay under that entry only |
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

See **"Room Images"** section above for full rules, HTML structure, and examples.

Quick checklist:
1. Find `<ul class="booking-img-list">` inside each `.bookingItem`
2. Extract from `<a href>` (NOT `<img src>` ? it's often a truncated thumbnail)
3. Take first 2 valid CloudFront URLs per room; set `images: []` if none found
4. Also set `thumbnailUrl` to the hero image URL

### Step 4b ? Extract hero image

See **"Hero Image"** subsection within "Room Images" above for full rules and HTML structure.

Quick checklist:
1. Find `<ul id="subSlides">` ? extract `background-image: url(...)` from the `<li>`
2. Prepend `https://whatahotel.com` to the relative path (e.g. `/content/hotels/{ID}/...`)
3. Set both `hero.imageUrl` and `thumbnailUrl` to this URL

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

## Netlify Project Context (Agent Prompt)

Netlify’s **Project context** field is limited (**~3000 characters**). **Paste the full contents of `docs/netlify-agent-project-context.txt`** (kept in sync with this section; ~2.2k chars) or use the block below. Full rules also live in **`docs/whatahotel-agent-new-promo.md`** and the SSOT (**Room Images** ~line 830+, **Client-approved copy** near top).

Paste into **Netlify ? Site configuration ? Agent runs ? Project context**:

```
WhataHotel Netlify Agent Rules

Scope: ONLY `src/data/promo-N.ts` + `src/data/promos.ts`. Never `src/types.ts` or `src/components/`. Read `docs/whatahotel-agent-new-promo.md` first. Do not use old `promo-*.ts` as template.

Fetch: Each booking URL ONCE; full HTML (not summaries). If tool refuses: `curl -sL` once; parse `subSlides`, `booking-img-list`, `booking_info.cfm`.

Images: Hero = `ul#subSlides` first `li` bg-url → prepend `https://whatahotel.com` → `hero.imageUrl` AND `thumbnailUrl`. Rooms = `.bookingItem` `ul.booking-img-list` `<a href>` only (not `<img src>`), 2/room. CDNs: `d2573qu6qrjt8c` or `d321ocj5nbe62c`. Skip paceholder/logo → `images: []`. City URL → ONLY `hero.cityImageUrl` + `hero.cityImageAlt`.

Rates: ADR =/night no tax note. Grand total INCL taxes/fees when page shows it. `grandTotalInclTaxes=bookingSummary.total=savings.rightValue`. `portalTotalValue` = lowest featured room grand total. Lowest offer → `bookUrl`; prepend `https://www.whatahotel.com`. `priceStrike: ""`. No excl.-tax-as-total copy.

COPY (SSOT “Client-approved copy & labels”): `gift` → always `title: "Exclusive Perks"`. NEVER `WhataHotel! Exclusive Perks`, `& Inclusions`, partner text in title. Perks only in `gift.items[]` — no Lorraine “included when you book…” in data. UI headings are fixed in code (Exclusive Perks, Rate Comparisons, Rate & pricing breakdown).

Layout: 1 hotelID → `hero/offer/rooms`. 2+ → `hotels[]`, isolate per URL. Per room: bookingSummary, `door-open`+`gift`, ISO `createdAt`. badgeText: line with `WhataHotel! … More Info` → phrase between WhataHotel! and More Info (title case); else `"Exclusive Rate"`. Never `Hotel Option X — Room X`. Single-hotel: Exclusive Perks after all rooms → Rate Comparisons table. Multi: perks deduped per hotel under that hotel’s cards → one combined Rate Comparisons table. Concise copy; perks not duplicated in subtitle/offer/footnote.

Defaults: 3 lowest rooms; next id from `promos.ts`; `client: ""` if missing. No `contact` on Promo. Footer hardcoded in `ContactFooter`.

Gate: `npm run build` + Validation Report PASS for: rooms, nights, ADR, grand total, equality, logic, portalTotal, images, build. `PROMO COMPLETE` only if all PASS.
```

---

## New Promo Checklist

### Required

- [ ] Read [`whatahotel-agent-new-promo.md`](./whatahotel-agent-new-promo.md), **SSOT “Client-approved copy & labels”**, and **SSOT image section** (~line 830+) before building data (do not rely on one full SSOT read)
- [ ] `id`, `createdAt` (ISO 8601), `title`, `client`, `dates` populated
- [ ] **Property hero** from `<ul id="subSlides">` ? `hero.imageUrl` and `thumbnailUrl` both set (see "Room Images" section); **not** the city URL
- [ ] If user gave a **city** URL ? `hero.cityImageUrl` + `hero.cityImageAlt` only (never substitute for `hero.imageUrl` or `images[]` when page has assets)
- [ ] **Room images** extracted from `<a href>` in `ul.booking-img-list` (NOT `<img src>`) ? CloudFront CDN URLs; **no** `images: []` for all rooms when the HTML lists carousel links
- [ ] 2 feature blocks per room: `icon: "door-open"` + `icon: "gift"` with **`title: "Exclusive Perks"`** on the gift block (no `WhataHotel!` prefix, no “& Inclusions”)
- [ ] `priceStrike: ""` when no BAR rate exists (never omit the field)
- [ ] `bookUrl` uses SEASONAL OFFER (lowest) rate
- [ ] `bookingSummary` or fallbacks (`stayCheckInOut` + `nightsLabel` + `savings.rightValue`) populated
- [ ] `savings.leftLabel` uses `<span>` wrapper; `savings.leftSub` has full breakdown
- [ ] Pricing consistency: `grandTotalInclTaxes` = `bookingSummary.total` = `savings.rightValue` = `portalTotalValue`
- [ ] Multi-hotel promos use `hotels[]`; data from each URL isolated to its own entry
- [ ] Registered in `src/data/promos.ts`
- [ ] No hallucinated data ? everything from fetched page

---

_WhataHotel! / Lorraine Travel ? Updated April 2026_
