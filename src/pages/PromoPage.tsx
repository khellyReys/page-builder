import { useParams, Link } from "react-router-dom";
import { promos } from "../data/promos";
import { Masthead } from "../components/Masthead";
import { HeroSection } from "../components/HeroSection";
import { OfferBanner } from "../components/OfferBanner";
import { RoomCard } from "../components/RoomCard";
import { ContactFooter } from "../components/ContactFooter";

export default function PromoPage() {
  const { promoId } = useParams<{ promoId: string }>();
  const promo = promos.find((p) => p.id === promoId);

  if (!promo) {
    return (
      <div className="wrap">
        <div className="masthead">
          <div className="mast-info">
            <div className="mast-title">Proposal Not Found</div>
            <div className="mast-sub">
              We couldn&apos;t locate this proposal.
            </div>
          </div>
          <div className="mast-sep" />
          <div className="mast-logo">
            <img
              src="https://whatahotel.com/content/general/wah_logo.jpg"
              alt="What A Hotel!"
            />
            <div className="mast-byline">by Lorraine Travel</div>
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
    return (
      <div className="wrap">
        <Masthead
          title={promo.title}
          client={promo.client}
          dates={promo.dates}
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
          </div>
        ))}

        <ContactFooter
          email={promo.contact.email}
          footerHtml={promo.contact.footerHtml}
        />
      </div>
    );
  }

  // ── Single-hotel promo ───────────────────────────────────────────
  return (
    <div className="wrap">
      <Masthead title={promo.title} client={promo.client} dates={promo.dates} />
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

      <ContactFooter
        email={promo.contact.email}
        footerHtml={promo.contact.footerHtml}
      />
    </div>
  );
}
