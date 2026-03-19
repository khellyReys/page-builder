import type { RoomData } from "./RoomCard";

type Props = {
  rooms: RoomData[];
};

export function ComparisonOverview({ rooms }: Props) {
  // Don't render if no rooms have comparison data
  if (!rooms.length || !rooms[0].comparison?.length) return null;

  return (
    <div className="comparison-overview">
      <div className="co-header">
        <h2 className="co-title">Rate Comparison Overview</h2>
        <p className="co-sub">
          Standard rate vs. your exclusive WhataHotel! rate
        </p>
      </div>

      <div className="co-table-wrap">
        <table className="co-table">
          <thead>
            <tr>
              <th className="co-th co-th-label" />
              {rooms.map((room) => (
                <th
                  key={room.badgeText}
                  className="co-th"
                  dangerouslySetInnerHTML={{ __html: room.badgeText }}
                />
              ))}
            </tr>
            {/* Room name row */}
            <tr className="co-name-row">
              <td className="co-td co-td-label">Room</td>
              {rooms.map((room) => (
                <td
                  key={room.badgeText}
                  className="co-td co-td-name"
                  dangerouslySetInnerHTML={{ __html: room.name }}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {rooms[0].comparison.map((row, rowIndex) => (
              <tr
                key={row.label}
                className={`co-tr${row.highlight ? " co-tr-highlight" : ""}`}
              >
                <td className="co-td co-td-label">{row.label}</td>
                {rooms.map((room) => {
                  const cell = room.comparison[rowIndex];
                  return (
                    <td key={room.badgeText} className="co-td">
                      {/* Standard rate — shown with muted strikethrough */}
                      {cell?.standard ? (
                        <span className="co-standard">{cell.standard}</span>
                      ) : null}
                      {/* WhataHotel rate — always shown */}
                      <span
                        className={`co-whatahotel${row.highlight ? " co-save" : ""}`}
                      >
                        {cell?.whatahotel ?? "—"}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}

            {/* Book buttons row */}
            <tr className="co-tr co-tr-book">
              <td className="co-td co-td-label" />
              {rooms.map((room) => (
                <td key={room.badgeText} className="co-td">
                  <a
                    href={room.bookUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="co-btn-book"
                  >
                    {room.bookLabel}
                  </a>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}