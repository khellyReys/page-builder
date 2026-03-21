import type { RoomQuickFact } from "../types";

type Props = {
  facts: RoomQuickFact[];
};

export function RoomMetaStrip({ facts }: Props) {
  if (!facts.length) return null;

  return (
    <div className="room-meta-strip">
      {facts.map((f) => (
        <div key={f.label} className="room-meta-cell">
          <div className="room-meta-label">{f.label}</div>
          <div className="room-meta-value">{f.value}</div>
        </div>
      ))}
    </div>
  );
}
