/** Canonical proposal footer — not driven by promo data (agents must not duplicate this). */
const ADVISOR_HEADING = "Questions? Contact your advisor";
const ADVISOR_ORG = "Lorraine Travel";
const ADVISOR_EMAIL = "Reservations@WhataHotel.com";

type Props = {
  /** Portal only: optional grey line below the hardcoded advisor block. */
  footerHtml?: string;
};

export function ContactFooter({ footerHtml }: Props) {
  return (
    <div className="contact">
      <div className="contact-hed">{ADVISOR_HEADING}</div>
      <div className="contact-advisor">{ADVISOR_ORG}</div>
      <div className="contact-mail">
        <a href={`mailto:${ADVISOR_EMAIL}`} className="contact-mail-link">
          {ADVISOR_EMAIL}
        </a>
      </div>
      {footerHtml?.trim() ? (
        <div
          className="contact-foot"
          dangerouslySetInnerHTML={{ __html: footerHtml }}
        />
      ) : null}
    </div>
  );
}
