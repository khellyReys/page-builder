import type { Room } from "../types";
import { SavingsBreakdown } from "./SavingsBreakdown";

type Props = {
  room: Room;
};

export function ProposalInvestment({ room }: Props) {
  const partnerLine = "What A Hotel! · Preferred Partner";

  if (room.savingsBreakdown) {
    return (
      <div className="investment-block proposal-investment">
        <h3 className="section-sec-title">Investment summary</h3>
        <p className="section-sec-sub investment-sub">
          Rate &amp; pricing breakdown
        </p>
        {room.investmentContextLine ? (
          <p
            className="proposal-inv-context"
            dangerouslySetInnerHTML={{
              __html: room.investmentContextLine,
            }}
          />
        ) : null}
        <SavingsBreakdown breakdown={room.savingsBreakdown} />
        <p className="proposal-inv-partner">{partnerLine}</p>
      </div>
    );
  }

  const adrSub =
    room.priceLabel && room.priceLabel.toLowerCase().includes("excl")
      ? room.priceLabel
      : "Per night · excl. taxes & fees";

  const grandAmount = room.stayTotalExclAmount ?? room.priceTotal;
  const grandSub =
    room.stayTotalExclSub ??
    (room.nightsLabel
      ? `${room.nightsLabel} ${Number(room.nightsLabel) === 1 ? "Night" : "Nights"} · excl. taxes & fees¹`
      : null);

  return (
    <div className="investment-block proposal-investment">
      <h3 className="section-sec-title">Investment summary</h3>
      <p className="section-sec-sub investment-sub">
        Rate &amp; pricing breakdown
      </p>
      {room.investmentContextLine ? (
        <p
          className="proposal-inv-context"
          dangerouslySetInnerHTML={{ __html: room.investmentContextLine }}
        />
      ) : null}

      <div className="proposal-inv-grid">
        <div className="proposal-inv-col proposal-inv-col-primary">
          <div className="proposal-inv-card proposal-inv-adr">
            <div className="proposal-inv-card-label">Avg. Daily Rate (ADR)</div>
            <div className="proposal-inv-card-hero">{room.priceRate}</div>
            <div className="proposal-inv-card-sub">{adrSub}</div>
          </div>
          <div className="proposal-inv-card proposal-inv-nights">
            <div className="proposal-inv-card-label">Nights</div>
            <div className="proposal-inv-nights-count">
              {room.nightsLabel ?? "—"}
            </div>
            <div className="proposal-inv-nights-range">
              {room.stayCheckInOut ?? "—"}
            </div>
          </div>
        </div>
        <div className="proposal-inv-col proposal-inv-col-total">
          <div className="proposal-inv-card proposal-inv-grand">
            <div className="proposal-inv-card-label">Grand Total</div>
            <div className="proposal-inv-card-hero proposal-inv-grand-amount">
              {grandAmount}
            </div>
            {grandSub ? (
              <div className="proposal-inv-card-sub">{grandSub}</div>
            ) : null}
          </div>
        </div>
      </div>

      {room.priceStrike ? (
        <div className="proposal-inv-bar">
          <span className="proposal-inv-bar-label">Standard reference</span>
          <span className="proposal-inv-bar-val">{room.priceStrike}</span>
        </div>
      ) : null}

      {room.grandTotalInclTaxes ? (
        <div className="proposal-inv-incl">
          <div className="proposal-inv-incl-label">
            {room.grandTotalInclTaxesLabel ??
              "Grand total (incl. taxes & fees)"}
          </div>
          <div className="proposal-inv-incl-val">{room.grandTotalInclTaxes}</div>
        </div>
      ) : null}

      {room.includedValueLines?.length ? (
        <div className="included-value-stack">
          {room.includedValueLines.map((line, i) => (
            <div key={`${line.label}-${i}`} className="iv-block">
              <div className="iv-line">
                <div className="iv-line-main">
                  <span className="iv-label">{line.label}</span>
                  <span className="iv-value">{line.value}</span>
                </div>
                {line.detail ? (
                  <div className="iv-detail">{line.detail}</div>
                ) : null}
              </div>
              {i < room.includedValueLines!.length - 1 ? (
                <div className="iv-op" aria-hidden="true">
                  +
                </div>
              ) : null}
            </div>
          ))}
          {(room.includedValueTotal || room.includedValueTotalLabel) && (
            <>
              <div className="iv-op iv-op-eq" aria-hidden="true">
                =
              </div>
              <div className="iv-total">
                <div className="iv-total-label">
                  {room.includedValueTotalLabel ?? "Total included value"}
                </div>
                <div className="iv-total-row">
                  <span className="iv-total-val">{room.includedValueTotal}</span>
                  {room.includedValueTotalDetail ? (
                    <span className="iv-total-detail">
                      {room.includedValueTotalDetail}
                    </span>
                  ) : null}
                </div>
              </div>
            </>
          )}
        </div>
      ) : null}

      <p className="proposal-inv-partner">{partnerLine}</p>
    </div>
  );
}
