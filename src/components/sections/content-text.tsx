"use client";

import { motion } from 'framer-motion';

const ContentText = () => {
  return (
    <section className="bg-black text-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 xl:px-0">
        <div className="max-w-4xl mx-auto">
          <motion.p 
            className="text-lg md:text-xl leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
          >
            We believe that wellbeing is a fundamental aspect of human life that encompasses physical, 
            mental, and emotional health. It is about feeling good, functioning well, and having a 
            sense of purpose and meaning in life. Wellbeing is not just the absence of illness or 
            disease, but rather a positive state of being that allows individuals to thrive and 
            reach their full potential.
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2 
            }}
          >
            At our core, we understand that wellbeing is a multifaceted concept that requires a 
            holistic approach. We recognize that each person is unique and has different needs, 
            preferences, and circumstances that influence their wellbeing journey. That's why we 
            are committed to providing personalized and evidence-based solutions that empower 
            individuals to take control of their health and wellbeing.
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.4 
            }}
          >
            Our mission is to make wellbeing accessible, affordable, and achievable for everyone. 
            We believe that by investing in our wellbeing, we can create a better world for 
            ourselves and future generations. Join us on this journey towards a healthier, 
            happier, and more fulfilling life.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ContentText;