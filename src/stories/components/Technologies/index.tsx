import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface TechnologyProps {
  imageSrc: string;
  name: string;
  delay?: number;
}

const Technology: React.FC<TechnologyProps> = ({ imageSrc, name, delay = 0 }) => {
  return (
    <motion.div 
      className="flex flex-col items-center mx-4 md:mx-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: delay,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="relative w-10 h-10 md:w-12 md:h-12 mb-2">
        <Image 
          src={imageSrc} 
          alt={name} 
          fill 
          className="object-contain"
        />
      </div>
      <span className="text-text text-sm md:text-base font-medium">{name}</span>
    </motion.div>
  );
};

interface TechnologiesProps {
  className?: string;
  showLabel?: boolean;
  compact?: boolean;
}

const Technologies: React.FC<TechnologiesProps> = ({ 
  className = '', 
  showLabel = true,
  compact = false
}) => {
  // Background animation elements
  const FloatingLines = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      
      {/* Floating lines */}
      {[...Array(compact ? 3 : 5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-primary/10"
          style={{
            width: `${Math.random() * 200 + 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            rotate: `${Math.random() * 360}deg`,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            width: [`${Math.random() * 200 + 100}px`, `${Math.random() * 300 + 200}px`, `${Math.random() * 200 + 100}px`],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );

  return (
    <section className={`${compact ? 'py-6' : 'py-16'} relative overflow-hidden ${className}`}>
      <FloatingLines />
      
      <div className="container relative z-10">
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {showLabel && (
            <motion.h3 
              className="text-center text-lg text-text-muted uppercase tracking-wider mb-10"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Technologies I Work With:
            </motion.h3>
          )}
          
          <div className={`flex flex-wrap justify-center items-center ${compact ? 'gap-4' : 'gap-6 md:gap-10'}`}>
            <Technology 
              imageSrc="/technologies/Union.png" 
              name="React"
              delay={0.1}
            />
            <Technology 
              imageSrc="/technologies/Union-1.png" 
              name="TypeScript"
              delay={0.2}
            />
            <Technology 
              imageSrc="/technologies/Union-2.png" 
              name="Payload"
              delay={0.3}
            />
            <Technology 
              imageSrc="/technologies/Union-3.png" 
              name="Laravel"
              delay={0.4}
            />
            <Technology 
              imageSrc="/technologies/Union-4.png" 
              name="MySQL"
              delay={0.5}
            />
          </div>
          
          {!compact && (
            <motion.div 
              className="w-full max-w-md h-px bg-text-muted/20 mt-12"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
