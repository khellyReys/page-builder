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
        <div className="sb-rate-box sb-whatahotel">
          <div className="sbr-label">WhataHotel! Rate</div>
          <div className="sbr-rate">{breakdown.whatahotelRate}/night</div>
          <div className="sbr-total">{breakdown.whatahotelTotal}</div>
          {breakdown.whatahotelTotalInclTaxes ? (
            <div className="sbr-total-incl-wrap">
              <div className="sbr-total-incl-hint">Incl. taxes &amp; fees</div>
              <div className="sbr-total-incl sbr-total-incl-wh">
                {breakdown.whatahotelTotalInclTaxes}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
