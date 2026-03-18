export type RoomData = {
  badgeText: string;
  name: string;
  subtitle: string;
  priceLabel: string;
  priceRate: string;
  priceStrike?: string;
  priceTotal: string;
  images: Array<{ src: string; alt: string }>;
  features: Array<{
    title: string;
    icon: string;
    items: string[];
  }>;
  savings: {
    leftLabel: string;
    leftSub: string;
    rightLabel: string;
    rightValue: string;
  };
  bookUrl: string;
  bookLabel: string;
};

type Props = {
  room: RoomData;
};

export function RoomCard({ room }: Props) {
  return (
    <>
      <div className="room-label">
        <div
          className="room-label-badge"
          dangerouslySetInnerHTML={{ __html: room.badgeText }}
        />
        <div className="room-label-line" />
      </div>
      <div className="room-hd">
        <div>
          <div
            className="room-name"
            dangerouslySetInnerHTML={{ __html: room.name }}
          />
          <div
            className="room-sub"
            dangerouslySetInnerHTML={{ __html: room.subtitle }}
          />
        </div>
        <div className="price-card">
          <div className="pc-label">{room.priceLabel}</div>
          <div className="pc-rate">
            {room.priceRate}
            <span className="pc-night">/night</span>
          </div>
          {room.priceStrike ? (
            <div className="pc-strike">{room.priceStrike}</div>
          ) : null}
          <div className="pc-total">{room.priceTotal}</div>
        </div>
      </div>
      <div className="room-imgs">
        {room.images.map((img) => (
          <div key={img.src} className="room-img">
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      <div className="feat-grid">
        {room.features.map((feature) => (
          <div key={feature.title} className="feat-box">
            <div className="feat-title">
              <i className={`fas fa-${feature.icon}`} /> {feature.title}
            </div>
            <ul className="feat-ul">
              {feature.items.map((item) => (
                <li key={item} className="feat-li">
                  <i className="fas fa-circle" /> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="savings-bar">
        <div>
          <div
            className="sb-left"
            dangerouslySetInnerHTML={{ __html: room.savings.leftLabel }}
          />
          <div
            className="sb-sub"
            dangerouslySetInnerHTML={{ __html: room.savings.leftSub }}
          />
        </div>
        <div className="sb-right">
          <div className="sb-right-label">{room.savings.rightLabel}</div>
          <div className="sb-right-val">{room.savings.rightValue}</div>
        </div>
      </div>
      <a
        href={room.bookUrl}
        target="_blank"
        rel="noreferrer"
        className="btn-book"
      >
        {room.bookLabel}
      </a>
      <p className="btn-sub">
        Clicking "Book Now" opens the WhataHotel! secure booking page
      </p>
    </>
  );
}
