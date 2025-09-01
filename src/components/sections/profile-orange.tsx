"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const ProfileOrange = () => {
  return (
    <motion.div 
      className="w-full overflow-hidden rounded-2xl md:rounded-3xl"
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 1.2, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
      }}
    >
      <Image
        src="https://framerusercontent.com/images/3qtVdPHZrxX0iUrFxNINFkTAoY.png"
        alt="Side view silhouette of a person against a vibrant orange and red gradient background"
        width={1400}
        height={788}
        className="w-full h-auto object-cover"
      />
    </motion.div>
  );
};

export default ProfileOrange;