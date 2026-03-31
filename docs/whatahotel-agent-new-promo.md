# New promo — agent quick guide

**Read this file first.** The full design SSOT (`whatahotel-design-ssot.md`) is **longer than most tools’ single-file read limits** (~15k+ tokens). Agents that load the entire SSOT often fail mid-read and **miss image rules** entirely.

**Which doc is “the” SSOT?** There is **one** canonical spec: **`docs/whatahotel-design-ssot.md`**. This file is a **short agent companion** (workflow, images, Netlify limits). **`docs/netlify-agent-project-context.txt`** is a **compressed** copy of the same rules for Netlify?s character cap ? if anything disagrees, **trust the full SSOT + `src/types.ts` + `PromoPage.tsx`**.

---

## Read order (do this every time)

1. **Read this file** end-to-end (you are here).
2. **`src/types.ts`** — confirm `Promo`, `Room`, `HeroBlock` required fields; this is the **canonical shape** for new data.
3. **Full SSOT only in chunks** if needed — use the [SSOT section index](#ssot-section-index-line-ranges) below and `offset`/`limit` (or search), never assume you saw “Room Images” without opening that section.
4. **Do not** open any **existing** `src/data/promo-*.ts` as a reference (even after a glob to pick the next id — use **`promos.ts` imports only** to infer the next `promo-N`). Older files can predate current layout (`cityImageUrl`, `CityHeroImage`, framed `HeroSection`, etc.). Construct each promo from **types + this guide + SSOT**, not from another promo file. The only promo TS files you read are **`promos.ts`** and the **new** `promo-N.ts` you create.

### `types.ts` vs docs — do not patch types in data-only runs

After you read **`src/types.ts`**, treat it as **authoritative**. On **main**, `HeroBlock` includes optional **`cityImageUrl`** and **`cityImageAlt`** (see `CityHeroImage` on the proposal page).

If your checkout’s `HeroBlock` **still** lacks those fields while docs mention them:

- **Do not** edit `src/types.ts` or `src/components/` when your job is **only** new promo data (e.g. Netlify agent scope).
- **Stop** and report: branch is behind `main` — merge or rebase first.

Never add types or components ad hoc in a data-only run; that bypasses review.

---

## Minimal user prompt (agents: full rules still apply)

The user may send **only**:

1. A **WhataHotel booking URL** (`showRates.cfm`, `booking_info.cfm`, etc.), and  
2. Optionally a **second URL** with a short line like *“create a promo”*, *“use this as the city image”*, or *“destination photo”*.

**You must still:** fetch that booking URL **once**, parse **full HTML**, extract **subSlides** + **booking-img-list**, build a complete `Promo`, register in `promos.ts`, and run `npm run build`. Do **not** skip image extraction because the user was brief.

| User intent | What you do |
|-------------|-------------|
| Single booking link only | Full promo; **no** `cityImageUrl` unless they also pass a city URL. |
| Booking link + separate image URL labeled city/destination | Second URL → **`hero.cityImageUrl`** + **`hero.cityImageAlt`** only. **Never** put it in `hero.imageUrl`, `thumbnailUrl`, or `rooms[].images[]` when the page has hotel assets. |
| `cityImageAlt` not given | Derive from hotel location / title (e.g. `"Amsterdam, Netherlands"`). |

**Defaults when the user does not specify:**

- **Rooms:** feature the **3 lowest-priced** room types on the page (SSOT default).  
- **Promo id:** if they did not give `promo-N`, open `src/data/promos.ts` and use the **next free** `promo-N` (or ask once if unclear).  
- **Client:** `""` if not provided.

**Example (minimal — valid user message):**

```text
Create a promo.

https://www.whatahotel.com/booking/showRates.cfm?hotelID=2772&checkIn=2026-08-24&checkOut=2026-08-27&guests=2&children=0&rooms=1

City image: https://example.com/amsterdam.jpg
```

---

## Images — mandatory (most common failure)

**Never ship `images: []` for every room and a wrong/missing hero** if the live booking page has carousels. Extract from **raw HTML** of the fetched URL. If your fetch returns no `subSlides` / no `booking-img-list`, the HTML may be truncated or JS-rendered — fix the fetch or ask the user to paste HTML; do not guess URLs.

### A) Property hero — `hero.imageUrl` + `thumbnailUrl`

| Step | Action |
|------|--------|
| 1 | In HTML, find `<ul id="subSlides">`. |
| 2 | On the first `<li>` (often `headerSlide`), read `style="background-image: url(...)"`. |
| 3 | URL is usually **relative** (e.g. `/content/hotels/{id}/file.jpg`) → prepend **`https://whatahotel.com`**. |
| 4 | Set **`hero.imageUrl`** and **`thumbnailUrl`** to that **full** URL. |
| 5 | `hero.alt` = short hotel/property description (this image is the **hotel** hero, not the city). |

If `subSlides` is missing after a real browser-equivalent fetch, note with `// AGENT NOTE:` and leave `hero.imageUrl: ""` (app falls back to `DEFAULT_HERO_IMAGE`).

### B) Room galleries — `rooms[].images[]`

| Step | Action |
|------|--------|
| 1 | For each room block, find `.bookingItem` → `.bookingItem-img` → `ul.booking-img-list`. |
| 2 | For each `<li>`, take the **`<a href="...">`** URL — **not** `<img src>`. |
| 3 | On CDN `d2573qu6qrjt8c.cloudfront.net`, `<img src>` is often **`/E.JPEG`** (thumbnail). **`<a href>` has the full JPEG.** |
| 4 | Collect up to **2** valid `href`s per room; skip `/img/paceholder.jpg` or empty `href`. |
| 5 | Valid hosts: **`d2573qu6qrjt8c.cloudfront.net`** or **`d321ocj5nbe62c.cloudfront.net`**. |

```ts
// Correct pattern (URLs from <a href>)
images: [
  { src: "https://d2573qu6qrjt8c.cloudfront.net/…/….JPEG", alt: "Duplex Room" },
  { src: "https://d2573qu6qrjt8c.cloudfront.net/…/….JPEG", alt: "Duplex Room" },
],
```

**Wrong:** copying one user-supplied city/landscape URL into every `images[]` or into `hero.imageUrl` when the page has real hotel/room assets.

### C) City / destination image (user-supplied only)

If the user gives a **city** image URL:

| Field | Use |
|-------|-----|
| `hero.cityImageUrl` | That URL |
| `hero.cityImageAlt` | e.g. `"Amsterdam, Netherlands"` |

**Do not** put the city URL in `hero.imageUrl` or `rooms[].images[]`. Property hero stays from **`subSlides`**; room images stay from **`booking-img-list`**.

---

## Layout (current app behavior)

1. `Masthead`
2. Optional **`CityHeroImage`** — full-bleed when `hero.cityImageUrl` is set; then “Destination” label row
3. `HotelIdentity` (stars, name, location)
4. **`HeroSection`** — **inset** framed property photo (`hero.imageUrl`), not edge-to-edge
5. `OfferBanner` … room cards … then **once per promo** (not per hotel): **Exclusive perks & inclusions** (deduped from all rooms’ `gift` features) **above** a single **Booking summary / Comparison overview** table. Book CTAs stay inside each **`RoomCard`**.

**Data:** Keep `features` with `icon: "gift"` on each room as today; the UI aggregates them into one section. Multi-hotel promos still use one combined table with the correct `hero.hotel` per row (from each `hotels[]` entry).

---

## Workflow checklist

1. User booking URL (e.g. `showRates.cfm` or `booking_info.cfm`) — **fetch once**, full HTML.
2. Parse in one pass: hotel name, **hero (`subSlides`)**, **per-room `booking-img-list`**, rates, lowest `bookUrl`, perks, totals.
3. Set `badgeText` from the room marketing line:
   - Source line pattern is usually: `WhataHotel! [PROMO PHRASE] [ROOM NAME] - More Info`.
   - Extract phrase between `WhataHotel!` and room-name / `More Info` when present (examples: `3RD NIGHT FREE W BKFST`, `LAST NIGHT FREE`, `FREE PARKING`).
   - If no promo phrase exists, use fallback: `badgeText: "Exclusive Rate"`.
   - Never keep generic placeholders like `Hotel Option 1 — Room 1`.
4. Apply **city image** to `cityImageUrl` / `cityImageAlt` only if user provided it.
5. Build `src/data/promo-N.ts`; register in `src/data/promos.ts`; set `createdAt` (ISO 8601).
6. Run **`npm run build`** before merge.
7. Self-verify: **every featured room** has `images.length >= 1` when the source page had carousel links; **hero.imageUrl** is from `subSlides`, not the city URL.

---

## SSOT section index (line ranges)

Use these with **partial reads** of `docs/whatahotel-design-ssot.md` (approximate; re-grep if doc shifts):

| Lines (approx.) | Topic |
|-------------------|--------|
| 90–120 | Proposal page layout |
| 321–410 | Field rules |
| 469–545 | Pricing consistency |
| **811–956** | **Room + hero image extraction (critical)** |
| 958–997 | Booking URL / rate variants |
| 1050–1205 | Multi-hotel workflow |
| 1298–1323 | Registering in `promos.ts` |
| 1405–1421 | New promo checklist |

---

## Troubleshooting: “page has images but HTML doesn’t”

- Confirm the response is **HTML**, not a text summary or markdown table from another tool.
- Search the raw string for `subSlides` and `booking-img-list`.
- `showRates.cfm` should still contain the same hotel markup as other booking flows for that hotel; if not, try the hotel’s main booking/rates page the user can open in a browser.

### Browse / “Fetch web” refuses or returns only a summary

Some tools **refuse** to return full page HTML (copyright policy) or return **structured summaries** instead of markup. For this **authorized** WhataHotel proposal workflow, **do not stop**:

1. **Fetch raw HTML** with a shell HTTP client, e.g. `curl -sL "<booking URL>"` (follow redirects), save to a temp file **once** (same single-fetch rule).
2. **Verify** the file contains `subSlides` and/or `bookingItem` / `booking-img-list` before parsing.
3. **Parse by stable markers** — search for `id="subSlides"`, `booking-img-list`, `booking_info.cfm`, room codes, etc. **Do not** rely on **fixed line ranges** (e.g. `sed -n '381,700p'`): any site update shifts line numbers and breaks extraction.

If `curl` returns a bot challenge or empty shell, say so and ask the user to paste HTML or try from an environment that receives the normal booking page.

---

**Netlify Project context (~3k char limit):** paste text from `docs/netlify-agent-project-context.txt` (also embedded in SSOT under *Netlify Project Context*).

_Keep in sync with `src/types.ts` and `docs/whatahotel-design-ssot.md`._
