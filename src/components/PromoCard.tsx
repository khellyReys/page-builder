import { Link } from "react-router-dom";

type Props = {
  id: string;
  hotel: string;
  location: string;
  client: string;
  dates: string;
  createdLabel: string;
  thumbnail: string;
  totalLabel: string;
  totalValue: string;
  delay?: number;
};

export function PromoCard({
  id,
  hotel,
  location,
  client,
  dates,
  createdLabel,
  thumbnail,
  totalLabel,
  totalValue,
  delay = 0,
}: Props) {
  return (
    <Link
      to={`/promo/${id}`}
      className="card"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="card-thumb">
        <img src={thumbnail} alt={hotel} />
        <div className="card-thumb-overlay" />
        <div className="card-badge">&#10022; Active</div>
        <div className="card-hotel-name">{hotel}</div>
      </div>
      <div className="card-body">
        <div className="card-location">
          <i className="fas fa-map-marker-alt" style={{ marginRight: 5 }} />
          {location}
        </div>
        <div className="card-client">{client}</div>
        <div className="card-dates">{dates}</div>
        <div className="card-created">
          <i className="fas fa-calendar-plus" style={{ marginRight: 5 }} />
          Added {createdLabel}
        </div>
        <div className="card-footer">
          <div>
            <div className="card-total-label">{totalLabel}</div>
            <div className="card-total-val">{totalValue}</div>
          </div>
          <div className="card-cta">
            View <i className="fas fa-arrow-right" style={{ fontSize: 9 }} />
          </div>
        </div>
      </div>
    </Link>
  );
}
