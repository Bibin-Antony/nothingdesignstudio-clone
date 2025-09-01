import Image from "next/image";

const HeroImage = () => {
  const imageUrl = "https://framerusercontent.com/images/biu2rGogHf9SfFhyx55xAWOR2lU.png";
  const imageAlt = "A striking image featuring a black silhouette of a person's profile against a vibrant orange-to-red gradient background, creating a dramatic and high-contrast visual.";

  return (
    <section className="bg-background">
      <div className="container py-3">
        <div className="relative w-full overflow-hidden rounded-3xl aspect-[2/1]">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroImage;