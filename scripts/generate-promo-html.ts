/**
 * After `vite build`, generates one static HTML file per promo under dist/promo/:id/index.html
 * with Open Graph / Twitter meta tags pointing at the hero/banner image.
 *
 * Social crawlers often do not execute JavaScript, so they only see the first HTML response —
 * this gives them correct og:image without SSR.
 */
import { readFileSync, mkdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { Promo } from "../src/types.ts";
import { promos } from "../src/data/promos.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const distIndex = join(root, "dist", "index.html");

const DEFAULT_OG_IMAGE =
  "https://www.whatahotel.com/content/general/wah_logo.jpg";

function escapeAttr(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function absoluteImageUrl(url: string, siteOrigin: string): string {
  const t = url.trim();
  if (!t) return DEFAULT_OG_IMAGE;
  if (/^https?:\/\//i.test(t)) return t;
  const base = siteOrigin.replace(/\/$/, "");
  const path = t.startsWith("/") ? t : `/${t}`;
  return `${base}${path}`;
}

function replaceMetaBlock(
  html: string,
  pattern: RegExp,
  replacement: string,
): string {
  return html.replace(pattern, replacement);
}

function getHeroImage(promo: Promo): string {
  if (promo.hotels && promo.hotels.length > 0) {
    return (
      promo.hotels[0]?.hero?.imageUrl ||
      promo.thumbnailUrl ||
      ""
    );
  }
  return promo.hero?.imageUrl || promo.thumbnailUrl || "";
}

function getDescription(promo: Promo): string {
  let raw = "";
  if (promo.hotels && promo.hotels.length > 0) {
    raw =
      promo.hotels[0]?.offer?.description?.replace(/<[^>]*>/g, "") || "";
  } else {
    raw = promo.offer?.description?.replace(/<[^>]*>/g, "") || "";
  }
  const text =
    raw.trim() ||
    "Exclusive hotel proposal with premium room options and special perks.";
  return text.length > 300 ? `${text.slice(0, 297)}…` : text;
}

function injectOgMeta(html: string, promo: Promo, siteOrigin: string): string {
  const pageTitle = `${promo.title} — WhataHotel! Proposals`;
  const description = getDescription(promo);
  const image = absoluteImageUrl(getHeroImage(promo), siteOrigin);
  const canonical = `${siteOrigin.replace(/\/$/, "")}/promo/${promo.id}`;

  let out = html;

  out = out.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(pageTitle)}</title>`);

  out = replaceMetaBlock(
    out,
    /<meta\s+name="description"[\s\S]*?\/>/,
    `<meta name="description" content="${escapeAttr(description)}" />`,
  );

  out = replaceMetaBlock(
    out,
    /<meta\s+property="og:title"[\s\S]*?\/>/,
    `<meta property="og:title" content="${escapeAttr(promo.title)}" />`,
  );

  out = replaceMetaBlock(
    out,
    /<meta\s+property="og:description"[\s\S]*?\/>/,
    `<meta property="og:description" content="${escapeAttr(description)}" />`,
  );

  out = replaceMetaBlock(
    out,
    /<meta\s+property="og:image"[\s\S]*?\/>/,
    `<meta property="og:image" content="${escapeAttr(image)}" />`,
  );

  if (!out.includes('property="og:url"')) {
    out = replaceMetaBlock(
      out,
      /<meta\s+property="og:type"[\s\S]*?\/>/,
      `<meta property="og:url" content="${escapeAttr(canonical)}" />\n    <meta property="og:type" content="website" />`,
    );
  } else {
    out = replaceMetaBlock(
      out,
      /<meta\s+property="og:url"[\s\S]*?\/>/,
      `<meta property="og:url" content="${escapeAttr(canonical)}" />`,
    );
  }

  out = replaceMetaBlock(
    out,
    /<meta\s+name="twitter:title"[\s\S]*?\/>/,
    `<meta name="twitter:title" content="${escapeAttr(promo.title)}" />`,
  );

  out = replaceMetaBlock(
    out,
    /<meta\s+name="twitter:description"[\s\S]*?\/>/,
    `<meta name="twitter:description" content="${escapeAttr(description)}" />`,
  );

  out = replaceMetaBlock(
    out,
    /<meta\s+name="twitter:image"[\s\S]*?\/>/,
    `<meta name="twitter:image" content="${escapeAttr(image)}" />`,
  );

  if (!out.includes('rel="canonical"')) {
    out = out.replace(
      /<meta charset="UTF-8" \/>/,
      `<meta charset="UTF-8" />\n    <link rel="canonical" href="${escapeAttr(canonical)}" />`,
    );
  }

  return out;
}

function resolveSiteOrigin(): string {
  const fromEnv =
    process.env.URL?.trim() || process.env.DEPLOY_PRIME_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  console.warn(
    "generate-promo-html: URL / DEPLOY_PRIME_URL unset — using http://localhost:8888 for og:url (Netlify sets URL automatically on deploy).",
  );
  return "http://localhost:8888";
}

function main() {
  if (!existsSync(distIndex)) {
    console.error(
      "generate-promo-html: dist/index.html not found. Run vite build first.",
    );
    process.exit(1);
  }

  const siteOrigin = resolveSiteOrigin();
  const template = readFileSync(distIndex, "utf8");

  if (promos.length === 0) {
    console.log("generate-promo-html: no promos in promos.ts — skipping.");
    return;
  }

  for (const promo of promos) {
    const dir = join(root, "dist", "promo", promo.id);
    mkdirSync(dir, { recursive: true });
    const html = injectOgMeta(template, promo, siteOrigin);
    writeFileSync(join(dir, "index.html"), html, "utf8");
    console.log(`generate-promo-html: wrote dist/promo/${promo.id}/index.html`);
  }
}

main();
