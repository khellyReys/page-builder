import type { Promo } from "../types";
import { promo1 } from "./promo-1";
import { promo2 } from "./promo-2";
import { promo3 } from "./promo-3";
import { promo4 } from "./promo-4";

/** Register new proposals here: `import { promoN } from "./promo-N";` then add to the array. */
export const promos: Promo[] = [promo1, promo2, promo3, promo4];
