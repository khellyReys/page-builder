type Props = {
  imageUrl: string;
  alt: string;
};

export function HeroSection({ imageUrl, alt }: Props) {
  return (
    <div className="hero">
      <img src={imageUrl} alt={alt} />
    </div>
  );
}
