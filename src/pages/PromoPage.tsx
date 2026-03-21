import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { promos } from "../data/promos";
import { Masthead } from "../components/Masthead";
import { HeroSection } from "../components/HeroSection";
import { OfferBanner } from "../components/OfferBanner";
import { SpecialOfferBox } from "../components/SpecialOfferBox";
import { RoomCard } from "../components/RoomCard";
import { ComparisonOverview } from "../components/ComparisonOverview";
import { PriceSummaryTable } from "../components/PriceSummaryTable";
import { AppDownload } from "../components/AppDownload";
import { ContactFooter } from "../components/ContactFooter";

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
    const heroImage = promo.hotels[0]?.hero?.imageUrl || promo.thumbnailUrl;
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
        />

        {promo.hotels.map((hotel, index) => (
          <div key={index}>
            <HeroSection
              imageUrl={hotel.hero.imageUrl}
              alt={hotel.hero.alt}
              hotel={hotel.hero.hotel}
              locationHtml={hotel.hero.location}
            />
            <OfferBanner
              heading={hotel.offer.heading}
              description={hotel.offer.description}
              pills={hotel.offer.pills}
            />
            {promo.specialOffer && (
              <div className="body">
                <SpecialOfferBox offer={promo.specialOffer} />
              </div>
            )}
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
            {hotel.rooms.length > 0 && (
              <ComparisonOverview rooms={hotel.rooms} />
            )}
          </div>
        ))}

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

        <ContactFooter
          email={promo.contact.email}
          footerHtml={promo.contact.footerHtml}
        />
      </div>
    );
  }

  // ── Single-hotel promo ───────────────────────────────────────────
  const heroImage = promo.hero?.imageUrl || promo.thumbnailUrl;
  const description =
    promo.offer?.description?.replace(/<[^>]*>/g, "") ||
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
      />
      <HeroSection
        imageUrl={promo.hero!.imageUrl}
        alt={promo.hero!.alt}
        hotel={promo.hero!.hotel}
        locationHtml={promo.hero!.location}
      />
      <OfferBanner
        heading={promo.offer!.heading}
        description={promo.offer!.description}
        pills={promo.offer!.pills}
      />

      {promo.specialOffer && (
        <div className="body">
          <SpecialOfferBox offer={promo.specialOffer} />
        </div>
      )}

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

      {promo.rooms!.length > 0 && <ComparisonOverview rooms={promo.rooms!} />}

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

      <ContactFooter
        email={promo.contact.email}
        footerHtml={promo.contact.footerHtml}
      />
    </div>
  );
}
