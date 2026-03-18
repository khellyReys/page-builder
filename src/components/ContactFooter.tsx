type Props = {
  email: string;
  footerHtml: string;
};

export function ContactFooter({ email, footerHtml }: Props) {
  return (
    <div className="contact">
      <div className="contact-hed">Questions? We&rsquo;re Here to Help.</div>
      <div className="contact-mail">{email}</div>
      <div
        className="contact-foot"
        dangerouslySetInnerHTML={{ __html: footerHtml }}
      />
    </div>
  );
}
