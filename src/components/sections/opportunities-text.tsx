"use client";

import React from 'react';
import { motion } from 'framer-motion';

const OpportunitiesText = () => {
  return (
    <section className="bg-background py-24 text-foreground md:py-32">
      <div className="container mx-auto px-4 md:px-8 xl:px-0">
        <motion.p 
          className="mx-auto max-w-4xl text-center text-3xl font-medium leading-tight md:text-5xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94] 
          }}
        >
          We are always open for new and exciting opportunities and we are never not on the lookout for talents and bright minds.
        </motion.p>
      </div>
    </section>
  );
};

export default OpportunitiesText;