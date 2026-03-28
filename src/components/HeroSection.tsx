type Props = {
  imageUrl: string;
  alt: string;
};

export function HeroSection({ imageUrl, alt }: Props) {
  return (
    <div className="hero hero--property">
      <div className="hero-property-frame">
        <div className="hero-property-accent" aria-hidden="true" />
        <img src={imageUrl} alt={alt} />
        <div className="hero-property-caption" aria-hidden="true">
          {alt}
        </div>
      </div>
    </div>
  );
}
