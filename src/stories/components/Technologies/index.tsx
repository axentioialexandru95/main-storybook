'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TechnologiesProps {
  className?: string;
}

interface TechItem {
  icon: string;
  name: string;
}

const Technologies: React.FC<TechnologiesProps> = ({ className }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const technologies: TechItem[] = [
    {
      icon: '/technologies/Union.png',
      name: 'React',
    },
    {
      icon: '/technologies/Union-1.png',
      name: 'Angular',
    },
    {
      icon: '/technologies/Union-2.png',
      name: 'Vue.js',
    },
    {
      icon: '/technologies/Union-3.png',
      name: 'Node.js',
    },
    {
      icon: '/technologies/Union-4.png',
      name: 'Python',
    },
    {
      icon: '/technologies/Union-5.png',
      name: 'AWS',
    },
    {
      icon: '/technologies/Union-6.png',
      name: 'Docker',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      className={`py-12 sm:py-16 border-t border-b border-[#201F45] bg-[#0E0D29] ${className}`}
    >
      <motion.div
        className="max-w-screen-xl mx-auto px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative flex flex-col items-center">
                <div className="relative mb-3">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={300}
                    height={300}
                    className={`h-12 sm:h-14 w-auto transition-all duration-300 ${hovered === index ? '' : 'grayscale opacity-60'}`}
                    draggable={false}
                  />

                  {/* Glow effect */}
                  <div
                    className={`absolute -inset-1 rounded-full bg-primary-500/20 blur-md transition-opacity duration-300 ${hovered === index ? 'opacity-100 shadow-[0_0_15px_rgba(25,25,254,0.3)]' : 'opacity-0'}`}
                    style={{ zIndex: -1 }}
                  />
                </div>

                {/* Tech name */}
                <span
                  className={`text-sm font-medium transition-colors duration-200 ${hovered === index ? 'text-primary-500' : 'text-gray-400'}`}
                >
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Technologies;
