import { useId } from "react";

type Props = {
  imageUrl: string;
  alt: string;
};

export function CityHeroImage({ imageUrl, alt }: Props) {
  const headingId = useId();
  return (
    <section className="city-hero" aria-labelledby={headingId}>
      <div className="city-hero-bleed">
        <img src={imageUrl} alt={alt} loading="lazy" />
      </div>
      <div className="city-hero-header">
        <h2 id={headingId} className="city-hero-heading">
          <span className="city-hero-icon" aria-hidden="true">
            <i className="fas fa-map-marked-alt" />
          </span>
          Destination
        </h2>
        <span className="city-hero-header-line" aria-hidden="true" />
      </div>
    </section>
  );
}
