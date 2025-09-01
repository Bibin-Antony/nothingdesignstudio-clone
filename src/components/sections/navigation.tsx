"use client";

import Link from "next/link";
import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-background"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
    >
      <nav className="flex w-full items-center justify-between px-5 py-4">
        <motion.div
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }
          }}
        >
          <Link
            href="/"
            className="text-xs font-medium uppercase tracking-wider text-foreground transition-opacity hover:opacity-80"
          >
            NOTHING STUDIO
          </Link>
        </motion.div>
        <motion.button 
          className="text-xs font-medium uppercase tracking-wider text-foreground transition-opacity hover:opacity-80"
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }
          }}
          whileTap={{ scale: 0.95 }}
        >
          MENU
        </motion.button>
      </nav>
    </motion.header>
  );
};

export default Navigation;