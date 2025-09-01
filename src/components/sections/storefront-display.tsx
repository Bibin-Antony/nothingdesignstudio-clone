import Image from "next/image";

/**
 * Renders the storefront display section, which consists of two images
 * arranged side-by-side on larger screens and stacked on mobile.
 * The first image is a close-up of branded fabric, and the second
 * is a view of a storefront with "superpower" branding.
 */
const StorefrontDisplay = () => {
  return (
    <div className="flex w-full flex-col gap-6 md:flex-row">
      {/* Left Image: A close-up of branded fabric/towel. */}
      <div className="relative aspect-[5/4] w-full flex-1 overflow-hidden rounded-2xl">
        <Image
          src="https://framerusercontent.com/images/gnb1sKI7uKdF2LL9UjOGhxVM4.png"
          alt="Close-up of a white textured towel with a 'superpower' brand tag"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Right Image: The storefront display. */}
      <div className="relative aspect-[5/4] w-full flex-1 overflow-hidden rounded-2xl">
        <Image
          src="https://framerusercontent.com/images/X4NxZVwAAf4Z4kKhOXD1A7bxN0.png"
          alt="A storefront window display at night with a glowing orange sign for 'superpower'"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
};

export default StorefrontDisplay;