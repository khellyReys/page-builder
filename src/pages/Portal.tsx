import { useState, useMemo, useEffect } from "react";
import { promos } from "../data/promos";
import { PromoCard } from "../components/PromoCard";
import { ContactFooter } from "../components/ContactFooter";
import { portalContactFootnoteHtml } from "../data/contact";

const PAGE_SIZE = 6;

function formatCreatedLabel(iso: string) {
  try {
    return new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
      new Date(iso),
    );
  } catch {
    return iso;
  }
}

export default function Portal() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const getHero = (promo: (typeof promos)[number]) =>
    promo.hero ?? promo.hotels?.[0]?.hero;

  const filteredSorted = useMemo(() => {
    const searchLower = searchTerm.toLowerCase();
    const filtered = promos.filter((promo) => {
      const hero = getHero(promo);
      return (
        promo.title.toLowerCase().includes(searchLower) ||
        promo.client.toLowerCase().includes(searchLower) ||
        (hero?.hotel.toLowerCase().includes(searchLower) ?? false) ||
        (hero?.location
          .replace(/<[^>]+>/g, "")
          .toLowerCase()
          .includes(searchLower) ?? false) ||
        promo.dates.toLowerCase().includes(searchLower)
      );
    });
    return [...filtered].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  }, [searchTerm]);

  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredSorted.length / PAGE_SIZE) || 1,
  );

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredSorted.slice(start, start + PAGE_SIZE);
  }, [filteredSorted, page]);

  const rangeStart =
    filteredSorted.length === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const rangeEnd = Math.min(page * PAGE_SIZE, filteredSorted.length);

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
          {filteredSorted.length > 0 ? (
            pageItems.map((promo, index) => {
              const hero = getHero(promo);
              return (
                <PromoCard
                  key={promo.id}
                  id={promo.id}
                  hotel={hero?.hotel ?? promo.title}
                  location={(hero?.location ?? "").replace(/<[^>]+>/g, "")}
                  client={promo.client}
                  dates={promo.dates}
                  createdLabel={formatCreatedLabel(promo.createdAt)}
                  thumbnail={promo.thumbnailUrl ?? hero?.imageUrl ?? ""}
                  totalLabel={promo.portalTotalLabel ?? "Estimate"}
                  totalValue={promo.portalTotalValue ?? ""}
                  delay={index * 0.2}
                />
              );
            })
          ) : (
            <div className="portal-empty">
              <i
                className={
                  promos.length === 0 && !searchTerm
                    ? "fas fa-folder-open"
                    : "fas fa-search"
                }
                aria-hidden={true}
              />
              <div className="portal-empty-title">
                {promos.length === 0 && !searchTerm
                  ? "No proposals yet. Add a promo in src/data/ and register it in promos.ts."
                  : `No proposals found matching "${searchTerm}"`}
              </div>
              {(promos.length > 0 || searchTerm) && (
                <div className="portal-empty-hint">
                  Try searching by destination, client name, hotel, or dates
                </div>
              )}
            </div>
          )}
        </div>

        {filteredSorted.length > 0 && (
          <div className="portal-pagination">
            <div className="portal-pagination-info">
              Showing {rangeStart}–{rangeEnd} of {filteredSorted.length}
            </div>
            <div className="portal-pagination-controls">
              <button
                type="button"
                className="portal-pagination-btn"
                disabled={page <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                <i className="fas fa-chevron-left" style={{ marginRight: 6 }} />
                Previous
              </button>
              <span className="portal-pagination-page">
                Page {page} of {totalPages}
              </span>
              <button
                type="button"
                className="portal-pagination-btn"
                disabled={page >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              >
                Next
                <i className="fas fa-chevron-right" style={{ marginLeft: 6 }} />
              </button>
            </div>
          </div>
        )}
      </div>

      <ContactFooter footerHtml={portalContactFootnoteHtml} />
    </div>
  );
}
