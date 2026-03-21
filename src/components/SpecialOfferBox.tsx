import type { SpecialOffer } from "../types";

type Props = {
  offer: SpecialOffer;
};

export function SpecialOfferBox({ offer }: Props) {
  return (
    <div className="special-offer-box">
      <div className="sof-accent" />
      <div className="sof-content">
        <h2 className="sof-title">{offer.title}</h2>
        <p className="sof-description">{offer.description}</p>

        {offer.highlights && offer.highlights.length > 0 && (
          <ul className="sof-highlights">
            {offer.highlights.map((highlight) => (
              <li key={highlight.text} className="sof-highlight-item">
                <i className={`fas fa-${highlight.icon}`} />
                <span>{highlight.text}</span>
              </li>
            ))}
          </ul>
        )}

        {offer.validityText && (
          <p className="sof-validity">{offer.validityText}</p>
        )}
      </div>
    </div>
  );
}
