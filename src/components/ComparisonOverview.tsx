import type { Room } from "../types";
import { stripHtml } from "../lib/html";

/** A group of rooms sharing one hotel name. */
export type RoomGroup = {
  rooms: Room[];
  hotelName: string;
};

type Props =
  | { rooms: Room[]; hotelName: string; entries?: undefined }
  | { entries: RoomGroup[]; rooms?: undefined; hotelName?: undefined };

function bookingRow(room: Room, hotelName: string) {
  // Always show the highest (tax-inclusive) total when available.
  const total =
    room.grandTotalInclTaxes ??
    room.bookingSummary?.total ??
    room.savings?.rightValue ??
    "—";

  if (room.bookingSummary) {
    return {
      hotel: hotelName,
      roomCategory: stripHtml(room.name),
      checkInOut: room.bookingSummary.checkInOut,
      nights: room.bookingSummary.nights,
      adr: room.bookingSummary.adr,
      total,
    };
  }
  return {
    hotel: hotelName,
    roomCategory: stripHtml(room.name),
    checkInOut: room.stayCheckInOut ?? "—",
    nights: room.nightsLabel ?? "—",
    adr: room.priceRate,
    total,
  };
}

export function ComparisonOverview(props: Props) {
  // Normalise to entries array
  const entries: RoomGroup[] = props.entries
    ? props.entries
    : [{ rooms: props.rooms!, hotelName: props.hotelName! }];

  const allRooms = entries.flatMap((e) =>
    e.rooms.map((room) => ({ room, hotelName: e.hotelName })),
  );

  if (!allRooms.length) return null;

  return (
    <div className="comparison-overview booking-summary-overview">
      <div className="proposal-co-header">
        <h2 className="proposal-co-heading">Booking summary</h2>
        <span className="proposal-co-divider" aria-hidden="true">
          ·
        </span>
        <h2 className="proposal-co-heading proposal-co-heading-muted">
          Comparison overview
        </h2>
      </div>

      <div className="co-mobile-cards" aria-label="Booking summary by room">
        {allRooms.map(({ room, hotelName }) => {
          const row = bookingRow(room, hotelName);
          return (
            <div key={room.badgeText} className="co-m-card co-booking-card">
              <div
                className="co-m-card-badge"
                dangerouslySetInnerHTML={{ __html: room.badgeText }}
              />
              <dl className="co-booking-dl">
                <div className="co-booking-dl-row">
                  <dt>Hotel</dt>
                  <dd>{row.hotel}</dd>
                </div>
                <div className="co-booking-dl-row">
                  <dt>Room category</dt>
                  <dd>{row.roomCategory}</dd>
                </div>
                <div className="co-booking-dl-row">
                  <dt>Check-in / out</dt>
                  <dd>{row.checkInOut}</dd>
                </div>
                <div className="co-booking-dl-row">
                  <dt>Nights</dt>
                  <dd>{row.nights}</dd>
                </div>
                <div className="co-booking-dl-row">
                  <dt>ADR</dt>
                  <dd className="co-booking-em">{row.adr}</dd>
                </div>
                <div className="co-booking-dl-row co-booking-dl-row--total">
                  <dt>
                    Grand Total
                    <span className="co-dt-sub">incl. taxes &amp; fees</span>
                  </dt>
                  <dd className="co-booking-em co-booking-total">{row.total}</dd>
                </div>
              </dl>
            </div>
          );
        })}
      </div>

      <div className="co-table-wrap co-table-desktop">
        <table className="co-table co-booking-table">
          <thead>
            <tr>
              <th className="co-th">Hotel</th>
              <th className="co-th">Room category</th>
              <th className="co-th">Check-in / out</th>
              <th className="co-th">Nights</th>
              <th className="co-th">ADR</th>
              <th className="co-th co-th-total-col">
                Grand Total
                <span className="co-th-sub">incl. taxes &amp; fees</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {allRooms.map(({ room, hotelName }) => {
              const row = bookingRow(room, hotelName);
              return (
                <tr key={room.badgeText} className="co-tr">
                  <td className="co-td">{row.hotel}</td>
                  <td className="co-td">{row.roomCategory}</td>
                  <td className="co-td">{row.checkInOut}</td>
                  <td className="co-td">{row.nights}</td>
                  <td className="co-td co-td-em">{row.adr}</td>
                  <td className="co-td co-td-em co-td-total">{row.total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
