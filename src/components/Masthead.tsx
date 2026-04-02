type Props = {
  title: string;
  client: string;
  dates: string;
  logoHref?: string;
};

export function Masthead({ title, client, dates, logoHref }: Props) {
  const logo = (
    <>
      <img
        src="https://whatahotel.com/content/general/wah_logo.jpg"
        alt="What A Hotel!"
      />
      <div className="mast-byline">by Lorraine Travel</div>
    </>
  );

  return (
    <div className="masthead">
      <div className="mast-info">
        <div
          className="mast-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className="mast-client">{client}</div>
        <div className="mast-dates">{dates}</div>
      </div>
      <div className="mast-sep" />
      <div className="mast-logo">
        {logoHref ? (
          <a href={logoHref} target="_blank" rel="noreferrer">
            {logo}
          </a>
        ) : (
          logo
        )}
      </div>
    </div>
  );
}
