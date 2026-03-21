import type { Room } from "../types";
import { DEFAULT_ROOM_IMAGE } from "../constants";
import { RoomMetaStrip } from "./RoomMetaStrip";
import { ProposalInvestment } from "./ProposalInvestment";
import { ExperienceMore } from "./ExperienceMore";

export type { Room as RoomData } from "../types";

type Props = {
  room: Room;
};

export function RoomCard({ room }: Props) {
  const showGalleryHead =
    Boolean(
      room.galleryTitle ||
        room.gallerySubtitle ||
        room.images.some((img) => img.caption),
    );

  const galleryHeading =
    room.galleryTitle ?? (showGalleryHead ? "Suite gallery" : undefined);

  const galleryImages =
    room.images.length > 0
      ? room.images
      : [
          {
            src: DEFAULT_ROOM_IMAGE,
            alt: stripPlain(room.name),
          },
        ];

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

      <RoomMetaStrip facts={room.quickFacts ?? []} />

      <div className="room-gallery-block">
        {showGalleryHead ? (
          <div className="gallery-head">
            {galleryHeading ? (
              <h3 className="section-sec-title gallery-title">
                {galleryHeading}
              </h3>
            ) : null}
            {room.gallerySubtitle ? (
              <p className="section-sec-sub gallery-sub">{room.gallerySubtitle}</p>
            ) : null}
          </div>
        ) : null}
        <div className="room-imgs">
          {galleryImages.map((img) => (
            <figure key={img.src} className="room-img">
              <img src={img.src} alt={img.alt} />
              {img.caption ? (
                <figcaption className="room-img-caption">{img.caption}</figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </div>

      <ProposalInvestment room={room} />

      <div className="perks-section">
        <h3 className="section-sec-title perks-section-title">
          Exclusive perks &amp; inclusions
        </h3>
        <p className="section-sec-sub perks-section-sub">
          Included with every booking through Lorraine Travel — at no additional
          cost
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

      {room.experienceMore ? (
        <ExperienceMore block={room.experienceMore} />
      ) : null}
    </>
  );
}

function stripPlain(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim() || "Room";
}
