import type { RoomKeyAttribute } from "../types";

type Props = {
  attributes: RoomKeyAttribute[];
  title?: string;
  subtitle?: string;
};

export function RoomOverviewGrid({
  attributes,
  title = "Room overview",
  subtitle = "Key attributes for this category",
}: Props) {
  if (!attributes.length) return null;

  return (
    <section className="room-overview" aria-label="Room overview">
      <h3 className="section-sec-title">{title}</h3>
      <p className="section-sec-sub room-overview-sub">{subtitle}</p>
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
