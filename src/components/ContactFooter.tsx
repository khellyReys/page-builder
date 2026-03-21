type Props = {
  email: string;
  footerHtml: string;
  advisorName?: string;
};

export function ContactFooter({ email, footerHtml, advisorName }: Props) {
  return (
    <div className="contact">
      <div className="contact-hed">
        {advisorName
          ? "Questions? Contact your advisor"
          : "Questions? We&rsquo;re Here to Help."}
      </div>
      {advisorName ? (
        <div className="contact-advisor">{advisorName}</div>
      ) : null}
      <div className="contact-mail">{email}</div>
      <div
        className="contact-foot"
        dangerouslySetInnerHTML={{ __html: footerHtml }}
      />
    </div>
  );
}
