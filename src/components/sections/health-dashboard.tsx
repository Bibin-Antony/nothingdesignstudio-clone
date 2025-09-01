"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from 'framer-motion';

interface Metric {
  name: string;
  category?: string;
  value?: string;
  date: string;
  top: string;
  sliderValue?: number;
  sliderColor?: 'yellow' | 'gray';
  isFaded?: boolean;
}

const METRICS_DATA: Metric[] = [
  {
    name: "Cardiovascular",
    value: "High",
    date: "Jun 17, 2023",
    top: "8%",
  },
  {
    name: "Alanine Aminotransferase",
    category: "Cardiovascular",
    date: "May 18, 2023",
    top: "23.5%",
    sliderValue: 55,
    sliderColor: "yellow",
  },
  {
    name: "Folic Acid",
    category: "Cardiovascular",
    date: "Apr 29, 2023",
    top: "39%",
    sliderValue: 30,
    sliderColor: "gray",
  },
  {
    name: "Albumin",
    category: "Cardiovascular",
    date: "Apr 19, 2023",
    top: "54.5%",
    sliderValue: 65,
    sliderColor: "gray",
  },
  {
    name: "Vitamin D",
    category: "Cardiovascular",
    date: "Mar 12, 2023",
    top: "70%",
    sliderValue: 80,
    sliderColor: "gray",
  },
  {
    name: "Zinc",
    category: "Cardiovascular",
    date: "Feb 03, 2023",
    top: "85.5%",
    sliderValue: 20,
    sliderColor: "gray",
  },
  {
    name: "Dopamine",
    category: "Cardiovascular",
    date: "Apr 15, 2023",
    top: "98%",
    isFaded: true,
  },
];

const MetricSlider = ({ value, color }: { value: number; color: 'yellow' | 'gray' }) => (
  <div className="relative w-24 h-0.5 bg-zinc-300 rounded-full">
    <motion.div
      className="absolute top-0 left-0 h-full bg-zinc-400 rounded-full"
      initial={{ width: 0 }}
      animate={{ width: `${value}%` }}
      transition={{ 
        duration: 1.2, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.5 
      }}
    />
    <motion.div
      className="absolute h-2.5 w-2.5 -top-1 rounded-full border-2 border-white"
      style={{
        backgroundColor: color === 'yellow' ? '#facc15' : '#a1a1aa',
      }}
      initial={{ left: '-5px' }}
      animate={{ left: `calc(${value}% - 5px)` }}
      transition={{ 
        duration: 1.2, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.5 
      }}
    />
  </div>
);

const HealthDashboard = () => {
    return (
        <motion.div 
            className="relative w-full aspect-[1240/1532] rounded-3xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
                duration: 1, 
                ease: [0.25, 0.46, 0.45, 0.94] 
            }}
        >
            <Image
                src="https://framerusercontent.com/images/IAtBTKb3qsSwMxf1diR5zBijS4.png"
                alt="Portrait of a person forming the background of a health dashboard"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="z-0"
            />
            <div className="absolute inset-0 z-10 px-4 py-6 sm:px-6"> 
                {METRICS_DATA.map((metric, index) => (
                    <motion.div
                        key={index}
                        className={`absolute flex items-center justify-between p-3 bg-[#F5F1ED]/80 backdrop-blur-[3px] rounded-xl text-zinc-900 transition-opacity`}
                        style={{
                            top: metric.top,
                            left: '5%',
                            right: '5%',
                            opacity: metric.isFaded ? 0.6 : 1,
                            transform: 'translateY(-50%)',
                        }}
                        initial={{ opacity: 0, x: -50, scale: 0.9 }}
                        whileInView={{ opacity: metric.isFaded ? 0.6 : 1, x: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ 
                            duration: 0.8, 
                            ease: [0.25, 0.46, 0.45, 0.94],
                            delay: index * 0.1 + 0.3
                        }}
                        whileHover={{ 
                            scale: 1.02,
                            backgroundColor: 'rgba(245, 241, 237, 0.9)',
                            transition: { duration: 0.2 }
                        }}
                    >
                        <div>
                            <p className="font-medium text-[15px] leading-tight text-black">{metric.name}</p>
                            {metric.category && <p className="text-xs text-zinc-600">{metric.category}</p>}
                        </div>
                        <div className="flex items-center gap-4 sm:gap-6">
                            {metric.sliderValue && metric.sliderColor && (
                                <div className="hidden lg:block">
                                    <MetricSlider value={metric.sliderValue} color={metric.sliderColor} />
                                </div>
                            )}
                            {metric.value && <p className="text-xs font-medium text-zinc-600 px-2">{metric.value}</p>}
                            <p className="text-[11px] text-zinc-500 w-16 text-right whitespace-nowrap">{metric.date}</p>
                            <motion.div
                                whileHover={{ scale: 1.2, rotate: 180 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Star className="h-4 w-4 text-zinc-800" fill="currentColor" />
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default HealthDashboard;