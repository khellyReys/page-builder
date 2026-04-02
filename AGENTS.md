# Agent instructions (WhataHotel proposal site)

## How to create a new promo

1. Read `docs/whatahotel-agent-new-promo.md` (short guide with image extraction rules).
2. Fetch the WhataHotel booking URL once. Parse the full HTML.
3. Create `src/data/promo-N.ts` using `createPromo()` from `src/lib/promoFactory.ts`.
4. Register in `src/data/promos.ts` (import + add to array).
5. Run `npm run build` to verify.

## What the agent provides

```
PromoInput: id, title, dates, client?, cityImageUrl?, cityImageAlt?
  HotelInput[]: name, location, heroImageUrl, heroAlt
    RoomInput[]: name, subtitle, badgeText, adr, grandTotal,
                 nights, checkIn, checkOut, bookUrl,
                 images?, roomHighlights[], perks[]
```

Everything else (labels, formatting, layout, pricing alignment) is hardcoded in the components and handled by the factory. The agent never sets UI labels, section headings, or structural fields.

## Rules

- **Only edit** `src/data/promo-N.ts` and `src/data/promos.ts`.
- **Never edit** `src/types.ts`, `src/components/`, or `src/lib/promoFactory.ts`.
- **Never copy** from existing `promo-*.ts` files. Always use `createPromo()`.
- **Images:** hero from `<ul id="subSlides">` background-image (prepend `https://whatahotel.com`). Room images from `<a href>` in `ul.booking-img-list` (NOT `<img src>`), max 2 per room.
- **Rates:** `adr` = price only with currency symbol, no "/night". `grandTotal` = tax-inclusive total from the booking page.
- **badgeText:** extract from marketing line between "WhataHotel!" and "More Info". Fallback: `"Exclusive Rate"`. Never `"Hotel Option X"`.
- **Multi-hotel:** each booking URL = one `HotelInput`. Data from each URL stays in its own entry.

## Netlify agent

Paste `docs/netlify-agent-project-context.txt` into Netlify > Site configuration > Agent runs > Project context.
