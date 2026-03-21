type Props = {
  hotel: string;
  locationHtml: string;
  /** Default 5 to match luxury hotel proposals. */
  stars?: number;
};

export function HotelIdentity({
  hotel,
  locationHtml,
  stars = 5,
}: Props) {
  return (
    <div className="hotel-identity">
      <div className="hotel-stars" aria-hidden="true">
        {Array.from({ length: stars }, (_, i) => (
          <span key={i} className="hotel-star">
            ★
          </span>
        ))}
      </div>
      <h2 className="hotel-identity-name">{hotel}</h2>
      <div
        className="hotel-identity-loc"
        dangerouslySetInnerHTML={{ __html: locationHtml }}
      />
    </div>
  );
}
