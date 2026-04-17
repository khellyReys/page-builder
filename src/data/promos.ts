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
import { promo26 } from "./promo-26";
import { promo27 } from "./promo-27";
import { promo28 } from "./promo-28";
import { promo29 } from "./promo-29";
import { promo30 } from "./promo-30";
import { promo31 } from "./promo-31";
import { promo32 } from "./promo-32";
import { promo33 } from "./promo-33";
import { promo34 } from "./promo-34";
import { promo35 } from "./promo-35";
import { promo36 } from "./promo-36";
import { promo37 } from "./promo-37";
import { promo38 } from "./promo-38";
import { promo39 } from "./promo-39";
import { promo40 } from "./promo-40";
import { promo41 } from "./promo-41";
import { promo42 } from "./promo-42";
import { promo43 } from "./promo-43";
import { promo44 } from "./promo-44";
import { promo45 } from "./promo-45";
import { promo46 } from "./promo-46";
import { promo47 } from "./promo-47";
import { promo48 } from "./promo-48";
import { promo49 } from "./promo-49";
import { promo50 } from "./promo-50";
import { promo51 } from "./promo-51";
import { promo52 } from "./promo-52";
import { promo53 } from "./promo-53";
import { promo54 } from "./promo-54";
import { promo55 } from "./promo-55";
import { promo56 } from "./promo-56";

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
  promo26,
  promo27,
  promo28,
  promo29,
  promo30,
  promo31,
  promo32,
  promo33,
  promo34,
  promo35,
  promo36,
  promo37,
  promo38,
  promo39,
  promo40,
  promo41,
  promo42,
  promo43,
  promo44,
  promo45,
  promo46,
  promo47,
  promo48,
  promo49,
  promo50,
  promo51,
  promo52,
  promo53,
  promo54,
  promo55,
  promo56,
];

/** Normalize room totals / nights so booking summary stays consistent across all cards and tables. */
export const promos: Promo[] = normalizePromos(rawPromos);
