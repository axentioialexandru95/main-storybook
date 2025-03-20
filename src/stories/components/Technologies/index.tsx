'use client';

import Image from 'next/image';
import React, { useRef, useState } from 'react';
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
      name: 'Laravel',
    },
    {
      icon: '/technologies/Union-1.png',
      name: 'Filament',
    },
    {
      icon: '/technologies/Union-2.png',
      name: 'Next.js',
    },
    {
      icon: '/technologies/Union-3.png',
      name: 'React',
    },
    {
      icon: '/technologies/Union-4.png',
      name: 'Typescript',
    },
    {
      icon: '/technologies/Union-5.png',
      name: 'Payload',
    },
    {
      icon: '/technologies/Union-6.png',
      name: 'Javascript',
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
      className={`py-20 border-t border-b border-[#201F45] bg-gradient-to-b from-black to-[#0c0c20] ${className}`}
    >
      <motion.div
        className="max-w-screen-xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={300}
                  height={300}
                  className={`h-14 w-auto transition-all duration-300 ${hovered === index ? '' : 'grayscale opacity-60'}`}
                  draggable={false}
                />

                {/* Glow effect */}
                <div
                  className={`absolute -inset-1 rounded-full bg-primary-500/20 blur-md transition-opacity duration-300 ${hovered === index ? 'opacity-100' : 'opacity-0'}`}
                  style={{ zIndex: -1 }}
                />
              </div>

              {/* Tech name tooltip */}
              <div
                className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-[#0E0D29] text-white text-xs font-medium py-1 px-3 rounded border border-[#201F45] transition-all duration-200 ${
                  hovered === index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Technologies;
