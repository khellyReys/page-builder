import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { promos } from "../data/promos";
import { DEFAULT_HERO_IMAGE } from "../constants";
import { Masthead } from "../components/Masthead";
import { HeroSection } from "../components/HeroSection";
import { CityHeroImage } from "../components/CityHeroImage";
import { HotelIdentity } from "../components/HotelIdentity";
import { OfferBanner } from "../components/OfferBanner";
import { SpecialOfferBox } from "../components/SpecialOfferBox";
import { RoomCard } from "../components/RoomCard";
import {
  ComparisonOverview,
  type RoomGroup,
} from "../components/ComparisonOverview";
import { PriceSummaryTable } from "../components/PriceSummaryTable";
import { AppDownload } from "../components/AppDownload";
import { ContactFooter } from "../components/ContactFooter";
import { RoomOverviewGrid } from "../components/RoomOverviewGrid";
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

/** Single-hotel promos: one deduped block after all room cards, before the booking table. */
function renderSingleHotelPerks(rooms: Room[]) {
  const items = collectGiftPerkItems(rooms);
  if (!items.length) return null;

  return (
    <div className="body body-perks">
      <div className="perks-section">
        <h3 className="section-sec-title perks-section-title">
          Exclusive perks &amp; inclusions
        </h3>
        <p className="section-sec-sub perks-section-sub">
          Included with every booking through Lorraine Travel — at no additional
          cost
        </p>
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

/** Multi-hotel promos: one deduped block per hotel, directly under that hotel's room cards (not above the combined table). */
function renderPerHotelPerks(rooms: Room[], hotelName: string) {
  const items = collectGiftPerkItems(rooms);
  if (!items.length) return null;

  return (
    <div className="body body-perks body-perks--after-hotel">
      <div className="perks-section">
        <h3 className="section-sec-title perks-section-title">
          Exclusive perks &amp; inclusions
        </h3>
        <p className="section-sec-sub perks-section-sub">
          Included when you book <strong>{hotelName}</strong> through Lorraine
          Travel — at no additional cost
        </p>
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
  footnoteHtml,
  entries,
}: {
  rooms?: Room[];
  hotelName?: string;
  footnoteHtml?: string;
  /** When provided, renders a combined multi-hotel table instead. */
  entries?: RoomGroup[];
}) {
  const allRooms = entries
    ? entries.flatMap((e) => e.rooms)
    : rooms ?? [];
  if (!allRooms.length) return null;

  return (
    <>
      {entries ? (
        <ComparisonOverview entries={entries} />
      ) : (
        <ComparisonOverview rooms={rooms!} hotelName={hotelName!} />
      )}
      {footnoteHtml ? (
        <div className="body">
          <div
            className="pricing-footnote"
            dangerouslySetInnerHTML={{ __html: footnoteHtml }}
          />
        </div>
      ) : null}
      {allRooms.map((room) =>
        room.keyAttributes?.length ? (
          <div key={room.badgeText} className="body">
            <RoomOverviewGrid
              title={room.overviewTitle}
              subtitle={room.overviewSubtitle}
              attributes={room.keyAttributes}
            />
          </div>
        ) : null,
      )}
    </>
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

  const showOffer = (o: { hidden?: boolean } | undefined) =>
    Boolean(o && !promo.suppressOfferBanner && !o.hidden);

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
    const description =
      promo.hotels[0]?.offer?.description?.replace(/<[^>]*>/g, "") ||
      "Exclusive hotel proposal with premium room options and special perks.";
    const currentUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}/promo/${promo.id}`
        : "";

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
          eyebrow={promo.mastheadEyebrow}
        />

        {promo.specialOffer ? (
          <div className="body">
            <SpecialOfferBox offer={promo.specialOffer} />
          </div>
        ) : null}

        {promo.hotels.map((hotel, index) => {
          return (
            <div key={index}>
              {hotel.hero.cityImageUrl ? (
                <CityHeroImage
                  imageUrl={hotel.hero.cityImageUrl}
                  alt={hotel.hero.cityImageAlt ?? "Destination"}
                />
              ) : null}
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
              {showOffer(hotel.offer) ? (
                <OfferBanner
                  heading={hotel.offer.heading}
                  description={hotel.offer.description}
                  pills={hotel.offer.pills}
                />
              ) : null}
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
              {renderPerHotelPerks(hotel.rooms, hotel.hero.hotel)}
            </div>
          );
        })}
        <ProposalBookingSection
          entries={combinedHotelEntries}
          footnoteHtml={promo.pricingFootnote}
        />

        {promo.priceSummary ? (
          <div className="body">
            <PriceSummaryTable
              items={promo.priceSummary.items}
              totalSavings={promo.priceSummary.totalSavings}
              grandTotal={promo.priceSummary.grandTotal}
              savingsNote={promo.priceSummary.savingsNote}
            />
          </div>
        ) : null}

        <AppDownload />

        <ContactFooter />
      </div>
    );
  }

  // ── Single-hotel promo ───────────────────────────────────────────
  const heroImage =
    promo.hero?.imageUrl || promo.thumbnailUrl || DEFAULT_HERO_IMAGE;
  const description =
    promo.offer?.description?.replace(/<[^>]*>/g, "") ||
    "Exclusive hotel proposal with premium room options and special perks.";
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
        eyebrow={promo.mastheadEyebrow}
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
      {showOffer(promo.offer) ? (
        <OfferBanner
          heading={promo.offer!.heading}
          description={promo.offer!.description}
          pills={promo.offer!.pills}
        />
      ) : null}

      {promo.specialOffer ? (
        <div className="body">
          <SpecialOfferBox offer={promo.specialOffer} />
        </div>
      ) : null}

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
      {renderSingleHotelPerks(promo.rooms!)}
      <ProposalBookingSection
        entries={singleHotelEntries}
        footnoteHtml={promo.pricingFootnote}
      />

      {promo.priceSummary ? (
        <div className="body">
          <PriceSummaryTable
            items={promo.priceSummary.items}
            totalSavings={promo.priceSummary.totalSavings}
            grandTotal={promo.priceSummary.grandTotal}
            savingsNote={promo.priceSummary.savingsNote}
          />
        </div>
      ) : null}

      <AppDownload />

      <ContactFooter />
    </div>
  );
}
