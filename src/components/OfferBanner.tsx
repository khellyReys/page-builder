type Props = {
  heading: string;
  description: string;
  pills: string[];
};

export function OfferBanner({ heading, description, pills }: Props) {
  return (
    <div className="offer-banner">
      <div className="offer-accent" />
      <div>
        <div className="offer-hed">{heading}</div>
        <div
          className="offer-sub"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="offer-pills">
          {pills.map((pill) => (
            <span key={pill} className="pill">
              {pill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
