import type { Promo } from "../types";
import { normalizePromos } from "../lib/promoNormalizer";
import { promo1 } from "./promo-1";
import { promo2 } from "./promo-2";
import { promo3 } from "./promo-3";
import { promo4 } from "./promo-4";
import { promo5 } from "./promo-5";
import { promo6 } from "./promo-6";
import { promo7 } from "./promo-7";
import { promo8 } from "./promo-8";
import { promo9 } from "./promo-9";
import { promo10 } from "./promo-10";
import { promo11 } from "./promo-11";
import { promo12 } from "./promo-12";
import { promo13 } from "./promo-13";
import { promo14 } from "./promo-14";
import { promo15 } from "./promo-15";
import { promo16 } from "./promo-16";
import { promo17 } from "./promo-17";
import { promo18 } from "./promo-18";
import { promo19 } from "./promo-19";
import { promo20 } from "./promo-20";
import { promo21 } from "./promo-21";
import { promo22 } from "./promo-22";
import { promo23 } from "./promo-23";
import { promo24 } from "./promo-24";
import { promo25 } from "./promo-25";

/** Register new proposals here: `import { promoN } from "./promo-N";` then add to the array. */
const rawPromos: Promo[] = [
  promo1,
  promo2,
  promo3,
  promo4,
  promo5,
  promo6,
  promo7,
  promo8,
  promo9,
  promo10,
  promo11,
  promo12,
  promo13,
  promo14,
  promo15,
  promo16,
  promo17,
  promo18,
  promo19,
  promo20,
  promo21,
  promo22,
  promo23,
  promo24,
  promo25,
];

/** Normalize room totals / nights so booking summary stays consistent across all cards and tables. */
export const promos: Promo[] = normalizePromos(rawPromos);
