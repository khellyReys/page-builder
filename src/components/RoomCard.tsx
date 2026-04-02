import type { Room } from "../types";
import { ProposalInvestment } from "./ProposalInvestment";

export type { Room as RoomData } from "../types";

type Props = {
  room: Room;
};

export function RoomCard({ room }: Props) {
  const validRoomImages = room.images.filter((img) => isValidRoomImage(img.src));
  const showGalleryBlock = validRoomImages.length > 0;

  const highlightItems = room.features
    .filter((f) => f.icon === "door-open")
    .flatMap((f) => f.items);

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

      {!room.hideGallery && showGalleryBlock ? (
        <div className="room-gallery-block">
          <div className="room-imgs">
            {validRoomImages.map((img) => (
              <figure key={img.src} className="room-img">
                <img src={img.src} alt={img.alt} />
              </figure>
            ))}
          </div>
        </div>
      ) : null}

      {highlightItems.length > 0 && (
        <div className="room-features-section">
          <div className="feat-grid">
            <div className="feat-box">
              <div className="perks-section room-feature-perks">
                <h3 className="section-sec-title perks-section-title room-feature-perks-title">
                  <i
                    className="fas fa-door-open room-feature-perks-icon"
                    aria-hidden="true"
                  />
                  <span>Room Highlights</span>
                </h3>
                <div className="perks-items-wrap">
                  <ul className="perks-ul">
                    {highlightItems.map((item) => (
                      <li key={item} className="perk-li">
                        <i className="fas fa-circle" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
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
          Book Now
        </a>
        <p className="btn-sub room-book-hint">
          Secure booking opens on WhataHotel.com in a new tab.
        </p>
      </div>
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
