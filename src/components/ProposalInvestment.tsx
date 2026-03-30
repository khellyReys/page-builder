import type { Room } from "../types";
import { SavingsBreakdown } from "./SavingsBreakdown";

type Props = {
  room: Room;
};

/** When incl.-tax total is shown, drop excl.-tax phrasing from sublines (data may still carry legacy copy). */
function stripExclTaxVerbiage(s: string): string {
  return s
    .replace(/\s*[·•]\s*excl\.?\s*taxes?(?:\s*(?:&|and)\s*fees?)?[^·•]*/gi, "")
    .replace(/\bexcl\.?\s*taxes?(?:\s*(?:&|and)\s*fees?)?\b/gi, "")
    .replace(/¹\s*$/g, "")
    .replace(/\s*[·•]\s*$/g, "")
    .replace(/^\s*[·•]\s*/g, "")
    .trim();
}

function adrLine(room: Room): string {
  if (room.priceLabel) {
    return room.priceLabel
      .replace(/\s*[·•]\s*(?:excl|incl)\.?\s*taxes?(?:\s*(?:&|and)\s*fees?)?/gi, "")
      .replace(/\b(?:excluding|including)\s+taxes?(?:\s*(?:&|and)\s*fees?)?/gi, "")
      .trim();
  }
  return "Per night";
}

function grandSubline(room: Room, hasInclTaxGrand: boolean): string | null {
  if (hasInclTaxGrand) {
    if (room.stayTotalExclSub) {
      const cleaned = stripExclTaxVerbiage(room.stayTotalExclSub);
      if (cleaned) return cleaned;
    }
    if (room.nightsLabel && room.stayCheckInOut) {
      const n = Number(room.nightsLabel);
      const nk = Number.isFinite(n) && n === 1 ? "Night" : "Nights";
      return `${room.nightsLabel} ${nk} · ${room.stayCheckInOut}`;
    }
    if (room.nightsLabel) {
      const n = Number(room.nightsLabel);
      const nk = Number.isFinite(n) && n === 1 ? "Night" : "Nights";
      return `${room.nightsLabel} ${nk}`;
    }
    return null;
  }
  if (room.stayTotalExclSub) return room.stayTotalExclSub;
  if (room.nightsLabel) {
    const n = Number(room.nightsLabel);
    const nk = Number.isFinite(n) && n === 1 ? "Night" : "Nights";
    return `${room.nightsLabel} ${nk}`;
  }
  return null;
}

export function ProposalInvestment({ room }: Props) {
  const partnerLine = "What A Hotel! · Preferred Partner";
  const hasInclTaxGrand = Boolean(room.grandTotalInclTaxes);

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

  const adrSub = adrLine(room);
  // Use only canonical total fields for Grand Total; avoid excl.-tax display fields.
  const grandAmount =
    room.grandTotalInclTaxes ??
    room.bookingSummary?.total ??
    room.savings.rightValue ??
    "—";
  const grandCardLabel = hasInclTaxGrand
    ? (room.grandTotalInclTaxesLabel ?? "Grand Total (incl. taxes & fees)")
    : "Grand Total";
  const grandSub = grandSubline(room, hasInclTaxGrand);

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

      <div className="proposal-inv-grid proposal-inv-grid--three">
        <div className="proposal-inv-card proposal-inv-adr">
          <div className="proposal-inv-card-label">Avg. Daily Rate (ADR)</div>
          <div className="proposal-inv-card-hero">{room.priceRate}</div>
          <div className="proposal-inv-card-sub">{adrSub}</div>
        </div>
        <div className="proposal-inv-card proposal-inv-grand">
          <div className="proposal-inv-card-label">{grandCardLabel}</div>
          <div className="proposal-inv-card-hero proposal-inv-grand-amount">
            {grandAmount}
          </div>
          {grandSub ? (
            <div className="proposal-inv-card-sub">{grandSub}</div>
          ) : null}
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
