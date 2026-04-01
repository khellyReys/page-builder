# Agent instructions (WhataHotel proposal site)

## Canonical docs

1. **`docs/whatahotel-agent-new-promo.md`** — start here for new promos (images, workflow, Netlify limits).
2. **`docs/whatahotel-design-ssot.md`** — full single source of truth; read in sections if the environment cannot load the whole file.
3. **`docs/netlify-agent-project-context.txt`** — paste into **Netlify → Site configuration → Agent runs → Project context** (~3k char cap). Keep in sync with the “Netlify Project Context” section of the SSOT.

## Copy and labels (do not regress)

The SSOT section **“Client-approved copy & labels (do not regress)”** is mandatory. It defines:

- Page section **Exclusive Perks** and `gift` **`title: "Exclusive Perks"`** in data
- **Rate Comparisons** (not “Booking summary / Comparison overview”) for the combined table
- **Rate & pricing breakdown** in the room card (not “Investment summary”; no per-room Preferred Partner line)

**Multi-hotel data:** Optional destination photo uses **`hotels[0].hero.cityImageUrl` / `cityImageAlt` only** (one shared strip in the UI). See SSOT **Proposal page layout** for `HotelSectionDivider` and full order.

Cursor loads **`.cursor/rules/whatahotel-proposal-copy.mdc`** for the same rules.

## Scope

- **Data-only agents (e.g. Netlify):** edit only `src/data/promo-N.ts` and `src/data/promos.ts` unless the task explicitly includes UI work.
- Do not use existing `promo-*.ts` files as templates; build from `src/types.ts` + docs.
