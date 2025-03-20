'use client';

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface TechnologiesProps {
  className?: string;
}

interface TechItem {
  icon: string;
  name: string;
}

const Technologies: React.FC<TechnologiesProps> = ({ className }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isMobile, setIsMobile] = useState(false);

  const technologies: TechItem[] = [
    { icon: '/technologies/Union.png', name: 'React' },
    { icon: '/technologies/Union-1.png', name: 'Angular' },
    { icon: '/technologies/Union-2.png', name: 'Vue.js' },
    { icon: '/technologies/Union-3.png', name: 'Node.js' },
    { icon: '/technologies/Union-4.png', name: 'Python' },
    { icon: '/technologies/Union-5.png', name: 'AWS' },
    { icon: '/technologies/Union-6.png', name: 'Docker' },
  ];

  // Additional technologies for mobile slider to create a better infinite scroll effect
  const mobileExtraTechnologies: TechItem[] = [
    { icon: '/technologies/Union.png', name: 'Next.js' },
    { icon: '/technologies/Union-2.png', name: 'TypeScript' },
    { icon: '/technologies/Union-4.png', name: 'JavaScript' },
  ];

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Autoplay animation for mobile
  useEffect(() => {
    if (isMobile && containerRef.current) {
      const startAutoplay = async () => {
        const containerWidth = containerRef.current?.scrollWidth || 0;
        const viewportWidth = containerRef.current?.offsetWidth || 0;
        const scrollDistance = containerWidth - viewportWidth;

        // Reset position before starting new animation
        await controls.start({ x: 0, transition: { duration: 0 } });

        // Animate to end
        await controls.start({
          x: -scrollDistance,
          transition: {
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          },
        });
      };

      startAutoplay();
    }

    return () => {
      controls.stop();
    };
  }, [controls, isMobile]);

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

  // Render desktop layout
  const renderDesktopLayout = () => (
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
  );

  // Render mobile slider
  const renderMobileSlider = () => (
    <div className="relative">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-12 h-full z-10 bg-gradient-to-r from-[#0E0D29] to-transparent pointer-events-none" />

      <div ref={containerRef} className="overflow-hidden">
        <motion.div className="flex gap-8" animate={controls}>
          {[...technologies, ...mobileExtraTechnologies].map((tech, index) => (
            <motion.div key={index} className="relative group flex-shrink-0">
              <div className="relative flex flex-col items-center">
                <div className="relative mb-3">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={300}
                    height={300}
                    className="h-12 w-auto"
                    draggable={false}
                  />
                </div>

                {/* Tech name */}
                <span className="text-sm font-medium text-gray-400">{tech.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-12 h-full z-10 bg-gradient-to-l from-[#0E0D29] to-transparent pointer-events-none" />
    </div>
  );

  return (
    <section
      className={`py-12 sm:py-16 border-t border-b border-[#201F45] bg-[#0E0D29] overflow-hidden ${className}`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="w-full"
        >
          {isMobile ? renderMobileSlider() : renderDesktopLayout()}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
