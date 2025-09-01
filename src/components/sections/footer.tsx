"use client";

import Link from 'next/link';
import { SVGProps } from 'react';
import { motion } from 'framer-motion';

const FramerLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Framer Logo"
    {...props}
  >
    <path d="M0 0H7V7H0V0Z" fill="black" />
    <path d="M7 0H14V7H7V0Z" fill="black" />
    <path d="M0 7H7V14H0V7Z" fill="black" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden font-primary">
      <motion.div 
        className="absolute inset-0 flex justify-center items-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ 
          duration: 1.5, 
          ease: [0.25, 0.46, 0.45, 0.94] 
        }}
      >
        <h1 className="text-[140px] sm:text-[200px] lg:text-[260px] font-black text-[#222222] leading-[0.8] tracking-[-0.05em] select-none text-center whitespace-nowrap">
          NOTHING
        </h1>
      </motion.div>
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-10 pt-32 pb-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-24 md:mb-32">
          <motion.div 
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
          >
            <motion.p 
              className="text-lg font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2 
              }}
            >
              WE ARE NOTHING,<br />
              BUT SOMETHING ELSE!
            </motion.p>
            <motion.p 
              className="text-lg font-medium max-w-lg text-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.4 
              }}
            >
              We strive for the extraordinary in every project fueled by a tremendous passion for design.
            </motion.p>
          </motion.div>
          <motion.div 
            className="text-lg font-medium flex flex-col gap-2 items-start lg:items-end flex-shrink-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2 
            }}
          >
            <motion.a 
              href="mailto:HELLO@NOTHING.STUDIO" 
              className="hover:text-primary transition-colors uppercase"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              HELLO@NOTHING.STUDIO
            </motion.a>
            <motion.a 
              href="tel:+01123456789" 
              className="hover:text-primary transition-colors uppercase"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              +01 123456789
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom links */}
        <motion.div 
          className="flex flex-wrap justify-between items-center gap-y-6 gap-x-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.4 
          }}
        >
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase font-medium tracking-wider">
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                PRIVACY POLICY
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/cookie-policy" className="hover:text-primary transition-colors">
                COOKIE POLICY
              </Link>
            </motion.li>
          </ul>

          <div className="flex flex-wrap items-center justify-end gap-x-10 gap-y-4">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase font-medium tracking-wider">
              <motion.li
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <a href="https://twitter.com/basit_designs" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  TWITTER
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <a href="https://www.linkedin.com/in/basitakhan/?originalSubdomain=sa" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  LINKEDIN
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <a href="https://www.instagram.com/basit.designs/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  INSTAGRAM
                </a>
              </motion.li>
            </ul>
            
            <motion.a 
              href="https://www.framer.com"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#f5f5f5',
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Made in</span>
              <FramerLogo className="inline-block" />
              <span>Framer</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;