"use client";

import Image from "next/image";
import { motion } from 'framer-motion';

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
      <motion.div 
        className="relative aspect-[5/4] w-full flex-1 overflow-hidden rounded-2xl"
        initial={{ opacity: 0, x: -40, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.8, 
          ease: [0.25, 0.46, 0.45, 0.94] 
        }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
        }}
      >
        <Image
          src="https://framerusercontent.com/images/gnb1sKI7uKdF2LL9UjOGhxVM4.png"
          alt="Close-up of a white textured towel with a 'superpower' brand tag"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>

      {/* Right Image: The storefront display. */}
      <motion.div 
        className="relative aspect-[5/4] w-full flex-1 overflow-hidden rounded-2xl"
        initial={{ opacity: 0, x: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.8, 
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2 
        }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
        }}
      >
        <Image
          src="https://framerusercontent.com/images/X4NxZVwAAf4Z4kKhOXD1A7bxN0.png"
          alt="A storefront window display at night with a glowing orange sign for 'superpower'"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  );
};

export default StorefrontDisplay;