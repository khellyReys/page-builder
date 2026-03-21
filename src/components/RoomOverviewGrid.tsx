import type { RoomKeyAttribute } from "../types";

type Props = {
  attributes: RoomKeyAttribute[];
};

export function RoomOverviewGrid({ attributes }: Props) {
  if (!attributes.length) return null;

  return (
    <section className="room-overview" aria-label="Room overview">
      <h3 className="section-sec-title">Room overview</h3>
      <p className="section-sec-sub room-overview-sub">
        Key attributes for this category
      </p>
      <ul className="room-overview-grid">
        {attributes.map((attr) => (
          <li key={attr.label} className="room-overview-cell">
            <div className="room-overview-label">{attr.label}</div>
            <div className="room-overview-value">{attr.value}</div>
            {attr.sub ? (
              <div className="room-overview-subval">{attr.sub}</div>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
