"use client";

import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  'logoipsum.',
  'logoipsum+',
  'IPSUM™',
  'Lillll.com',
  'LOGO IPSUM',
  'logoipsum',
  'logoipsum',
];

const ClientsSection = () => {
  return (
    <section className="bg-black text-white py-20 md:py-32 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <motion.article 
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94] 
          }}
        >
          <motion.p 
            className="text-lg leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2 
            }}
          >
            We are always open for new and exciting opportunities and we are never not on the lookout for talents and bright minds.
          </motion.p>
          <motion.p 
            className="text-xs font-medium tracking-widest uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.4 
            }}
          >
            [ OUR CLIENTS ]
          </motion.p>
        </motion.article>
      </div>

      <motion.div 
        className="w-full inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 1, 
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.6 
        }}
      >
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 animate-infinite-scroll">
          {logos.map((logo, index) => (
            <motion.li 
              key={`logo-a-${index}`} 
              className="flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: index * 0.1 + 0.8 
              }}
            >
              <span className={`text-3xl lg:text-4xl whitespace-nowrap ${logo === 'IPSUM™' ? 'font-black tracking-wider' : 'font-bold'}`}>
                {logo}
              </span>
            </motion.li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 animate-infinite-scroll" aria-hidden="true">
          {logos.map((logo, index) => (
            <li key={`logo-b-${index}`} className="flex-shrink-0">
              <span className={`text-3xl lg:text-4xl whitespace-nowrap ${logo === 'IPSUM™' ? 'font-black tracking-wider' : 'font-bold'}`}>
                {logo}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default ClientsSection;