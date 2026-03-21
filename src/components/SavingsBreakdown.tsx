import type { SavingsBreakdown } from "../types";

type Props = {
  breakdown: SavingsBreakdown;
};

export function SavingsBreakdown({ breakdown }: Props) {
  return (
    <div className="savings-breakdown">
      <div className="sb-header">
        <div className="sb-duration">
          <span className="sb-nights-label">{breakdown.nights}</span>
          <span className="sb-nights-detail">
            {breakdown.paidNights} Paid + {breakdown.freeNights} FREE
          </span>
        </div>
      </div>

      <div className="sb-comparison">
        <div className="sb-rate-box sb-standard">
          <div className="sbr-label">Standard Rate</div>
          <div className="sbr-rate">{breakdown.standardRate}/night</div>
          <div className="sbr-total">{breakdown.standardTotal}</div>
        </div>

        <div className="sb-vs">vs</div>

        <div className="sb-rate-box sb-whatahotel">
          <div className="sbr-label">WhataHotel! Rate</div>
          <div className="sbr-rate">{breakdown.whatahotelRate}/night</div>
          <div className="sbr-total">{breakdown.whatahotelTotal}</div>
        </div>
      </div>

      <div className="sb-savings">
        <i className="fas fa-check-circle" />
        <div className="sb-save-text">
          <div className="sb-save-label">You Save</div>
          <div className="sb-save-amount">
            {breakdown.savingsAmount}
            {breakdown.savingsPercentage && (
              <span className="sb-save-pct">
                ({breakdown.savingsPercentage})
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
