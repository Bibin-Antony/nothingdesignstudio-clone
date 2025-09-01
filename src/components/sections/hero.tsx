"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8 xl:px-0">
        <header className="flex flex-col pt-32 pb-12">
          <div className="flex justify-center">
            <motion.h1 
              className="text-center font-black text-white text-[clamp(80px,15vw,180px)] leading-[0.9] -tracking-[0.03em]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2 
              }}
            >
              ELLOS
              <br />
              PROJECT
            </motion.h1>
          </div>

          <motion.figure 
            className="mt-16 w-full"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.4, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.6 
            }}
          >
            <motion.div 
              className="relative mx-auto aspect-[1360/734] w-full max-w-[1360px] overflow-hidden rounded-[32px]"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
              }}
            >
              <Image
                src="https://framerusercontent.com/images/nQgPdbUxUoJC2RAgNnIRCINXWM.png"
                alt="Ellos Project hero image: a silhouette of a person's head and shoulders against a vibrant orange and red gradient background."
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                priority
              />
            </motion.div>
          </motion.figure>

          <motion.div 
            className="mx-auto mt-8 flex w-full max-w-[1360px] items-center justify-between text-xs font-medium uppercase tracking-[0.02em]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 1.2 
            }}
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 1.4 
              }}
            >
              [ ABOUT PROJECTS ]
            </motion.p>
            <div className="flex gap-x-5">
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 1.5 
                }}
              >
                [ BRANDING IDENTITY ]
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 1.6 
                }}
              >
                [ DESIGN ]
              </motion.p>
            </div>
          </motion.div>
        </header>
      </div>
    </section>
  );
};

export default HeroSection;