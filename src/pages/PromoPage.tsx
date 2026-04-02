import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { promos } from "../data/promos";
import { DEFAULT_HERO_IMAGE } from "../constants";
import { Masthead } from "../components/Masthead";
import { HeroSection } from "../components/HeroSection";
import { CityHeroImage } from "../components/CityHeroImage";
import { HotelSectionDivider } from "../components/HotelSectionDivider";
import { HotelIdentity } from "../components/HotelIdentity";
import { RoomCard } from "../components/RoomCard";
import {
  ComparisonOverview,
  type RoomGroup,
} from "../components/ComparisonOverview";
import { AppDownload } from "../components/AppDownload";
import { ContactFooter } from "../components/ContactFooter";
import type { Room } from "../types";

function collectGiftPerkItems(rooms: Room[]): string[] {
  return Array.from(
    new Set(
      rooms
        .flatMap((room) => room.features)
        .filter((feature) => feature.icon === "gift")
        .flatMap((feature) => feature.items)
        .map((item) => item.trim())
        .filter(Boolean),
    ),
  );
}

function arraysEqual(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  return a.every((v, i) => v === b[i]);
}

/** True when every hotel in the promo shares the exact same perks list. */
function allHotelsSharePerks(hotelRoomSets: Room[][]): boolean {
  const perksPerHotel = hotelRoomSets.map(collectGiftPerkItems);
  if (perksPerHotel.length <= 1) return true;
  return perksPerHotel.every((p) => arraysEqual(p, perksPerHotel[0]));
}

function renderPerksBlock(items: string[], extraClass?: string) {
  if (!items.length) return null;
  return (
    <div className={`body body-perks${extraClass ? ` ${extraClass}` : ""}`}>
      <div className="perks-section">
        <h3 className="section-sec-title perks-section-title">
          Exclusive Perks
        </h3>
        <div className="perks-items-wrap">
          <ul className="perks-ul">
            {items.map((item) => (
              <li key={item} className="perk-li">
                <i className="fas fa-circle" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ProposalBookingSection({
  rooms,
  hotelName,
  entries,
}: {
  rooms?: Room[];
  hotelName?: string;
  /** When provided, renders a combined multi-hotel table instead. */
  entries?: RoomGroup[];
}) {
  const allRooms = entries
    ? entries.flatMap((e) => e.rooms)
    : rooms ?? [];
  if (!allRooms.length) return null;

  return entries ? (
    <ComparisonOverview entries={entries} />
  ) : (
    <ComparisonOverview rooms={rooms!} hotelName={hotelName!} />
  );
}

export default function PromoPage() {
  const { promoId } = useParams<{ promoId: string }>();
  const promo = promos.find((p) => p.id === promoId);

  if (!promo) {
    return (
      <div className="wrap">
        <Helmet>
          <title>Proposal Not Found — WhataHotel! Proposals</title>
          <meta
            name="description"
            content="The proposal you're looking for could not be found."
          />
          <meta property="og:title" content="Proposal Not Found" />
          <meta
            property="og:description"
            content="The proposal you're looking for could not be found."
          />
        </Helmet>
        <div className="masthead">
          <div className="mast-info">
            <div className="mast-title">Proposal Not Found</div>
            <div className="mast-sub">
              We couldn&apos;t locate this proposal.
            </div>
          </div>
          <div className="mast-sep" />
          <div className="mast-logo">
            <a
              href="https://www.whatahotel.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://whatahotel.com/content/general/wah_logo.jpg"
                alt="What A Hotel!"
              />
              <div className="mast-byline">by Lorraine Travel</div>
            </a>
          </div>
        </div>
        <div className="body">
          <p>
            <Link to="/">Return to the Proposal Portal</Link>
          </p>
        </div>
      </div>
    );
  }

  // ── Multi-hotel promo ────────────────────────────────────────────
  if (promo.hotels && promo.hotels.length > 0) {
    const combinedHotelEntries: RoomGroup[] = promo.hotels
      .filter((hotel) => hotel.rooms.length > 0)
      .map((hotel) => ({
        rooms: hotel.rooms,
        hotelName: hotel.hero.hotel,
      }));

    const heroImage =
      promo.hotels[0]?.hero?.imageUrl ||
      promo.thumbnailUrl ||
      DEFAULT_HERO_IMAGE;
    const description = `${promo.title} — Exclusive hotel proposal with premium room options and special perks.`;
    const currentUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}/promo/${promo.id}`
        : "";

    const firstHotelHero = promo.hotels[0]?.hero;
    const sharedCityImageUrl = firstHotelHero?.cityImageUrl;
    const sharedCityImageAlt = firstHotelHero?.cityImageAlt;

    const hotelRoomSets = promo.hotels.map((h) => h.rooms);
    const perksAreShared = allHotelsSharePerks(hotelRoomSets);
    const sharedPerks = perksAreShared
      ? collectGiftPerkItems(hotelRoomSets.flat())
      : [];

    return (
      <div className="wrap">
        <Helmet>
          <title>{promo.title} — WhataHotel! Proposals</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={promo.title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={heroImage} />
          <meta property="og:url" content={currentUrl} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={promo.title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={heroImage} />
        </Helmet>
        <Masthead
          title={promo.title}
          client={promo.client}
          dates={promo.dates}
          logoHref="https://www.whatahotel.com/"
        />

        {sharedCityImageUrl ? (
          <CityHeroImage
            imageUrl={sharedCityImageUrl}
            alt={sharedCityImageAlt ?? "Destination"}
          />
        ) : null}

        {promo.hotels.map((hotel, index) => {
          const showHotelDivider = promo.hotels!.length > 1;
          return (
            <div key={index}>
              {showHotelDivider ? <HotelSectionDivider /> : null}
              <div className="body body-above-hero">
                <HotelIdentity
                  hotel={hotel.hero.hotel}
                  locationHtml={hotel.hero.location}
                />
              </div>
              <HeroSection
                imageUrl={hotel.hero.imageUrl || DEFAULT_HERO_IMAGE}
                alt={hotel.hero.alt}
              />
              <div className="body">
                {hotel.rooms.length ? (
                  hotel.rooms.map((room) => (
                    <RoomCard key={room.badgeText} room={room} />
                  ))
                ) : (
                  <p style={{ margin: "32px 0", textAlign: "center" }}>
                    This proposal is under construction. Check back soon for room
                    details.
                  </p>
                )}
              </div>
              {!perksAreShared &&
                renderPerksBlock(
                  collectGiftPerkItems(hotel.rooms),
                  "body-perks--after-hotel",
                )}
            </div>
          );
        })}
        {perksAreShared && renderPerksBlock(sharedPerks)}
        <ProposalBookingSection entries={combinedHotelEntries} />

        <AppDownload />

        <ContactFooter />
      </div>
    );
  }

  // ── Single-hotel promo ───────────────────────────────────────────
  const heroImage =
    promo.hero?.imageUrl || promo.thumbnailUrl || DEFAULT_HERO_IMAGE;
  const description = `${promo.title} — Exclusive hotel proposal with premium room options and special perks.`;
  const currentUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/promo/${promo.id}`
      : "";
  const singleHotelEntries: RoomGroup[] = [
    { rooms: promo.rooms!, hotelName: promo.hero!.hotel },
  ];

  return (
    <div className="wrap">
      <Helmet>
        <title>{promo.title} — WhataHotel! Proposals</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={promo.title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={heroImage} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={promo.title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={heroImage} />
      </Helmet>
      <Masthead
        title={promo.title}
        client={promo.client}
        dates={promo.dates}
        logoHref="https://www.whatahotel.com/"
      />
      {promo.hero!.cityImageUrl ? (
        <CityHeroImage
          imageUrl={promo.hero!.cityImageUrl}
          alt={promo.hero!.cityImageAlt ?? "Destination"}
        />
      ) : null}
      <div className="body body-above-hero">
        <HotelIdentity
          hotel={promo.hero!.hotel}
          locationHtml={promo.hero!.location}
        />
      </div>
      <HeroSection imageUrl={heroImage} alt={promo.hero!.alt} />

      <div className="body">
        {promo.rooms!.length ? (
          promo.rooms!.map((room) => (
            <RoomCard key={room.badgeText} room={room} />
          ))
        ) : (
          <p style={{ margin: "32px 0", textAlign: "center" }}>
            This proposal is under construction. Check back soon for room
            details.
          </p>
        )}
      </div>
      {renderPerksBlock(collectGiftPerkItems(promo.rooms!))}
      <ProposalBookingSection entries={singleHotelEntries} />

      <AppDownload />

      <ContactFooter />
    </div>
  );
}
