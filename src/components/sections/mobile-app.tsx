"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const MobileAppSection = () => {
  return (
    <motion.div 
      className="relative w-full aspect-[1240/1532] rounded-3xl overflow-hidden"
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 1, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
      }}
    >
      <Image
        src="https://framerusercontent.com/images/h1ACEcv8hNMLfDNoOH0swFhs1A.png"
        alt="Mobile app interface showcasing health tracking features on a smartphone held in hand"
        fill
        className="object-cover"
        quality={100}
      />
    </motion.div>
  );
};

export default MobileAppSection;