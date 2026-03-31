import type { Room } from "../types";
import { RoomMetaStrip } from "./RoomMetaStrip";
import { ProposalInvestment } from "./ProposalInvestment";
import { ExperienceMore } from "./ExperienceMore";

export type { Room as RoomData } from "../types";

type Props = {
  room: Room;
};

export function RoomCard({ room }: Props) {
  const validRoomImages = room.images.filter((img) => isValidRoomImage(img.src));
  const showGalleryHead =
    Boolean(
      room.galleryTitle ||
        room.gallerySubtitle ||
        validRoomImages.some((img) => img.caption),
    );

  const galleryHeading =
    room.galleryTitle ?? (showGalleryHead ? "Suite gallery" : undefined);

  const galleryImages = validRoomImages;
  const showGalleryBlock = galleryImages.length > 0;

  const roomFeatures = room.features.filter((f) => f.icon !== "gift");
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

      {!room.hideGallery && showGalleryBlock ? (
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
      ) : null}

      {roomFeatures.length > 0 && (
        <div className="room-features-section">
          <div className="feat-grid">
            {roomFeatures.map((feature) => (
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
      )}

      <ProposalInvestment room={room} />

      <div className="room-book-cta">
        <a
          href={room.bookUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-book room-book-link"
        >
          {room.bookLabel}
        </a>
        <p className="btn-sub room-book-hint">
          Secure booking opens on WhataHotel.com in a new tab.
        </p>
      </div>

      {room.experienceMore ? (
        <ExperienceMore block={room.experienceMore} />
      ) : null}
    </>
  );
}

function isValidRoomImage(src: string): boolean {
  const value = src.trim().toLowerCase();
  if (!value) return false;
  if (value.includes("paceholder.jpg")) return false;
  if (value.includes("wah_logo")) return false;
  if (value.includes("/content/general/wah_logo")) return false;
  return true;
}
