type Props = {
  title: string;
  client: string;
  dates: string;
};

export function Masthead({ title, client, dates }: Props) {
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
        <img
          src="https://whatahotel.com/content/general/wah_logo.jpg"
          alt="What A Hotel!"
        />
        <div className="mast-byline">by Lorraine Travel</div>
      </div>
    </div>
  );
}
