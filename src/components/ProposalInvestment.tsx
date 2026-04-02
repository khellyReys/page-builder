import type { Room } from "../types";

type Props = {
  room: Room;
};

function cleanPriceRate(rate: string): string {
  return rate.replace(/\s*\/\s*night\s*$/i, "").trim();
}

function grandSubline(room: Room): string | null {
  if (room.nightsLabel && room.stayCheckInOut) {
    const n = Number(room.nightsLabel);
    const nk = Number.isFinite(n) && n === 1 ? "Night" : "Nights";
    return `${room.nightsLabel} ${nk} · ${room.stayCheckInOut}`;
  }
  return null;
}

export function ProposalInvestment({ room }: Props) {
  const displayRate = cleanPriceRate(room.priceRate);
  const grandAmount = room.grandTotalInclTaxes;
  const grandSub = grandSubline(room);

  return (
    <div className="investment-block proposal-investment">
      <h3 className="section-sec-title">Rate &amp; pricing breakdown</h3>

      <div className="proposal-inv-grid">
        <div className="proposal-inv-card proposal-inv-adr">
          <div className="proposal-inv-card-label">Avg. Daily Rate (ADR)</div>
          <div className="proposal-inv-card-hero">{displayRate}</div>
          <div className="proposal-inv-card-sub">Per night</div>
        </div>
        <div className="proposal-inv-card proposal-inv-grand">
          <div className="proposal-inv-card-label">
            Grand Total (incl. taxes &amp; fees)
          </div>
          <div className="proposal-inv-card-hero proposal-inv-grand-amount">
            {grandAmount}
          </div>
          {grandSub ? (
            <div className="proposal-inv-card-sub">{grandSub}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
