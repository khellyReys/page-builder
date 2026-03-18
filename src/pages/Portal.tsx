import { useState } from "react";
import { promos } from "../data/promos";
import { PromoCard } from "../components/PromoCard";
import { ContactFooter } from "../components/ContactFooter";
import { sharedContact } from "../data/contact";

export default function Portal() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPromos = promos.filter((promo) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      promo.title.toLowerCase().includes(searchLower) ||
      promo.client.toLowerCase().includes(searchLower) ||
      promo.hero.hotel.toLowerCase().includes(searchLower) ||
      promo.hero.location
        .replace(/<[^>]+>/g, "")
        .toLowerCase()
        .includes(searchLower) ||
      promo.dates.toLowerCase().includes(searchLower)
    );
  });
  return (
    <div className="wrap">
      <div className="masthead">
        <div className="mast-info">
          <div className="mast-title">
            Proposal
            <br />
            Portal
          </div>
          <div className="mast-sub">
            Curated luxury travel proposals
            <br />
            crafted exclusively for each client
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
        <div className="section-label">
          <div className="section-badge">
            <i className="fas fa-folder-open" style={{ marginRight: 7 }} />
            Active Proposals
          </div>
          <div className="section-line" />
        </div>

        <div className="search-container" style={{ marginBottom: "24px" }}>
          <input
            type="text"
            placeholder="Search proposals by destination, client, hotel, or dates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "2px solid var(--burgundy)",
              borderRadius: "8px",
              fontSize: "16px",
              backgroundColor: "white",
              color: "var(--text-dark)",
            }}
          />
        </div>

        <div className="grid">
          {filteredPromos.length > 0 ? (
            filteredPromos.map((promo, index) => (
              <PromoCard
                key={promo.id}
                id={promo.id}
                hotel={promo.hero.hotel}
                location={promo.hero.location.replace(/<[^>]+>/g, "")}
                client={promo.client}
                dates={promo.dates}
                thumbnail={promo.thumbnailUrl ?? promo.hero.imageUrl}
                totalLabel={promo.portalTotalLabel ?? "Estimate"}
                totalValue={promo.portalTotalValue ?? ""}
                delay={index * 0.2}
              />
            ))
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "48px 24px",
                color: "var(--text-muted)",
                fontSize: "18px",
              }}
            >
              <i
                className="fas fa-search"
                style={{ fontSize: "48px", marginBottom: "16px", opacity: 0.5 }}
              />
              <div>No proposals found matching "{searchTerm}"</div>
              <div style={{ fontSize: "14px", marginTop: "8px" }}>
                Try searching by destination, client name, hotel, or dates
              </div>
            </div>
          )}
        </div>
      </div>

      <ContactFooter
        email={sharedContact.email}
        footerHtml={sharedContact.footerHtml}
      />
    </div>
  );
}
