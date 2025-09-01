"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const SuperpowerBillboard = () => {
  return (
    <section className="bg-black py-10">
      <div className="container">
        <motion.div 
          className="w-full overflow-hidden rounded-2xl"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94] 
          }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
          }}
        >
          <Image
            src="https://framerusercontent.com/images/505WP7u4ru6Zhz1Akjz0AHoqXaE.png"
            alt="A large orange billboard in a subway setting. It displays the word 'superpower' in bold white lowercase text, the tagline 'A new dawn for healthcare.', and a silhouette of a person in motion."
            width={2800}
            height={1575}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SuperpowerBillboard;