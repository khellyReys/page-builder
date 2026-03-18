type Props = {
  imageUrl: string;
  alt: string;
  hotel: string;
  locationHtml: string;
};

export function HeroSection({ imageUrl, alt, hotel, locationHtml }: Props) {
  return (
    <div className="hero">
      <img src={imageUrl} alt={alt} />
      <div className="hero-badge">
        <div className="hero-hotel">{hotel}</div>
        <div
          className="hero-loc"
          dangerouslySetInnerHTML={{
            __html: locationHtml,
          }}
        />
      </div>
    </div>
  );
}
