"use client";

import Image from 'next/image';
import { Pill, Moon, Dumbbell, Leaf, Footprints, type LucideProps } from 'lucide-react';
import { ElementType } from 'react';
import { motion } from 'framer-motion';

// Using a type for activity data for better type safety and readability
interface Activity {
  icon: ElementType<LucideProps>;
  name: string;
  frequency: string;
  iconColor: string;
}

// Data for the wellness activities cards, recreated from screenshot
const activitiesData: Activity[] = [
  { icon: Pill, name: 'Ashwagandha', frequency: 'Take 1 pill everyday', iconColor: 'text-purple-400' },
  { icon: Moon, name: 'Full body massage', frequency: 'Once a month at evening', iconColor: 'text-slate-500' },
  { icon: Pill, name: 'Iron Supplements', frequency: 'Take 2 pills everyday', iconColor: 'text-red-500' },
  { icon: Dumbbell, name: 'Weight lifting', frequency: '3 times a week', iconColor: 'text-green-500' },
  { icon: Leaf, name: 'Fresh Air', frequency: 'Every Morning / Night', iconColor: 'text-teal-400' },
  { icon: Footprints, name: 'Running / Walking', frequency: '3 times a week', iconColor: 'text-orange-400' },
];

const WellnessActivityCard = ({ activity, index }: { activity: Activity; index: number }) => {
  const { icon: Icon, name, frequency, iconColor } = activity;
  return (
    <motion.div 
      className="bg-[#E8E8ED] rounded-xl p-4 flex items-center justify-between gap-4"
      initial={{ opacity: 0, x: -30, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.1 
      }}
      whileHover={{ 
        scale: 1.02,
        backgroundColor: '#E0E0E5',
        transition: { duration: 0.2 }
      }}
    >
      <div className="flex items-center gap-4">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ duration: 0.2 }}
        >
          <Icon className={`h-6 w-6 shrink-0 ${iconColor}`} strokeWidth={1.5} />
        </motion.div>
        <p className="font-medium text-black text-[15px] leading-[1.2]">{name}</p>
      </div>
      <p className="text-sm text-medium-gray text-right">{frequency}</p>
    </motion.div>
  );
};

const WellnessActivities = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
      <motion.div 
        className="bg-light-gray rounded-3xl p-6 flex flex-col gap-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.8, 
          ease: [0.25, 0.46, 0.45, 0.94] 
        }}
      >
        {activitiesData.map((activity, index) => (
          <WellnessActivityCard key={activity.name} activity={activity} index={index} />
        ))}
      </motion.div>
      <motion.div 
        className="relative aspect-[628/798] w-full rounded-3xl overflow-hidden"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
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
          src="https://framerusercontent.com/images/h1ACEcv8hNMLfDNoOH0swFhs1A.png"
          alt="App interface on a phone held in hand"
          fill
          className="object-cover"
        />
      </motion.div>
    </div>
  );
};

export default WellnessActivities;