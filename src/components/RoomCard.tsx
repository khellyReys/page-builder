import type { RoomKeyAttribute } from "../types";
import { RoomOverviewGrid } from "./RoomOverviewGrid";

export type ComparisonRow = {
  label: string;
  standard: string;
  whatahotel: string;
  highlight?: boolean;
};

export type RoomData = {
  badgeText: string;
  name: string;
  subtitle: string;
  priceLabel?: string;
  priceRate: string;
  priceStrike?: string;
  priceTotal: string;
  keyAttributes?: RoomKeyAttribute[];
  galleryTitle?: string;
  gallerySubtitle?: string;
  images: Array<{ src: string; alt: string; caption?: string }>;
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
  savingsBreakdown?: {
    nights: string;
    paidNights: number;
    freeNights: number;
    standardRate: string;
    standardTotal: string;
    whatahotelRate: string;
    whatahotelTotal: string;
    savingsAmount: string;
    savingsPercentage?: string;
  };
  comparison?: ComparisonRow[];
  bookUrl: string;
  bookLabel: string;
};

type Props = {
  room: RoomData;
};

import { SavingsBreakdown } from "./SavingsBreakdown";

export function RoomCard({ room }: Props) {
  const showGalleryHead =
    Boolean(room.galleryTitle ||
      room.gallerySubtitle ||
      room.images.some((img) => img.caption));

  const galleryHeading =
    room.galleryTitle ?? (showGalleryHead ? "Suite gallery" : undefined);

  return (
    <>
      <div className="room-label">
        <div
          className="room-label-badge"
          dangerouslySetInnerHTML={{ __html: room.badgeText }}
        />
        <div className="room-label-line" />
      </div>

      <div className="room-intro">
        <div
          className="room-name"
          dangerouslySetInnerHTML={{ __html: room.name }}
        />
        <div
          className="room-sub"
          dangerouslySetInnerHTML={{ __html: room.subtitle }}
        />
      </div>

      {room.keyAttributes?.length ? (
        <RoomOverviewGrid attributes={room.keyAttributes} />
      ) : null}

      <div className="room-gallery-block">
        {showGalleryHead ? (
          <div className="gallery-head">
            {galleryHeading ? (
              <h3 className="section-sec-title gallery-title">{galleryHeading}</h3>
            ) : null}
            {room.gallerySubtitle ? (
              <p className="section-sec-sub gallery-sub">{room.gallerySubtitle}</p>
            ) : null}
          </div>
        ) : null}
        <div className="room-imgs">
          {room.images.map((img) => (
            <figure key={img.src} className="room-img">
              <img src={img.src} alt={img.alt} />
              {img.caption ? (
                <figcaption className="room-img-caption">{img.caption}</figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </div>

      <div className="investment-block">
        <h3 className="section-sec-title">Investment summary</h3>
        <p className="section-sec-sub investment-sub">
          Rate &amp; pricing breakdown
        </p>
        <p className="investment-partner">What A Hotel! · Preferred Partner</p>

        {room.savingsBreakdown ? (
          <SavingsBreakdown breakdown={room.savingsBreakdown} />
        ) : (
          <div className="investment-price-row">
            <div className="price-card">
              {room.priceLabel ? (
                <div className="pc-label">{room.priceLabel}</div>
              ) : null}
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
        )}
      </div>

      <div className="perks-section">
        <h3 className="section-sec-title perks-section-title">
          Exclusive perks &amp; inclusions
        </h3>
        <p className="section-sec-sub perks-section-sub">
          Included with bookings through Lorraine Travel — at no additional cost
        </p>
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
        Clicking &quot;Book Now&quot; opens the WhataHotel! secure booking page
      </p>
    </>
  );
}
