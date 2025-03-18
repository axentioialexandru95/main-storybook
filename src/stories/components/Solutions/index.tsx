import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Card, Button } from 'flowbite-react';

interface SolutionCardProps {
  title: string;
  description: string;
  imageSrc: string;
  index: number;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, imageSrc, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="h-full"
    >
      <Card className="h-full bg-surface border-none relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="p-4 relative z-10">
          <motion.h3 
            className="text-xl font-bold mb-2 text-text group-hover:text-primary transition-all duration-300"
            animate={isInView ? { 
              x: [0, 0],
              opacity: [0, 1]
            } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-text-muted text-sm mb-4"
            animate={isInView ? { 
              x: [20, 0],
              opacity: [0, 1]
            } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {description}
          </motion.p>
          
          <motion.div 
            className="flex space-x-3 mb-4"
            animate={isInView ? { 
              x: [20, 0],
              opacity: [0, 1]
            } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.span 
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            ></motion.span>
            <motion.span 
              className="w-2 h-2 rounded-full bg-secondary"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, delay: 0.3, repeat: Infinity, repeatType: "reverse" }}
            ></motion.span>
            <motion.span 
              className="w-2 h-2 rounded-full bg-phantom"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, delay: 0.6, repeat: Infinity, repeatType: "reverse" }}
            ></motion.span>
          </motion.div>
        </div>
        
        <div className="relative h-[300px] mt-2 overflow-hidden rounded-lg group-hover:shadow-md transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-50 z-10"></div>
          <Image 
            src={imageSrc} 
            alt={title} 
            fill
            className="object-cover transition-all duration-normal group-hover:scale-105 z-0"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <motion.div 
            className="absolute bottom-4 left-4 z-20"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                color="blue"
                className="bg-primary text-text hover:bg-primary-light transition-all duration-300"
              >
                View Case Study
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

const Solutions: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <section id="solutions" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        
        {/* Animated shapes */}
        <motion.div 
          className="absolute top-40 left-20 w-96 h-96 rounded-full bg-primary/5"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Floating lines */}
        {[...Array(8)].map((_, i) => (
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
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <motion.div 
            className="md:max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              animate={{ 
                y: [0, -5, 0]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              A glimpse into the <span className="text-primary">Solutions</span> I&apos;ve Engineered
            </motion.h2>
            <p className="text-lg text-text-muted">
              Here are some MVPs I&apos;ve brought to life, turning visionary ideas into impactful digital solutions.
            </p>
          </motion.div>
          
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="px-5 py-3 bg-primary text-text rounded-lg">
              <motion.span 
                className="font-semibold"
                animate={{ 
                  y: [0, -2, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                9+ years
              </motion.span> of experience
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SolutionCard 
            index={0}
            title="Robin Games"
            description="Provides faster connection with friends, family and communities of people who share your interests. Connecting with your friends and family, as well as discovering new ones is easy with Robin Games."
            imageSrc="https://api.imagepig.com/xl?prompt=A modern gaming dashboard interface with dark theme, showing game statistics, player avatages, and colorful charts. Professional UI design, high quality"
          />
          
          <SolutionCard 
            index={1}
            title="Mail management system"
            description="Provides faster connection with friends, family and communities of people who share your interests. Connecting with your friends and family, as well as discovering new ones is easy with this Email."
            imageSrc="https://api.imagepig.com/xl?prompt=A sleek email management dashboard with dark theme, showing inbox, folders, and email preview. Professional UI design, high quality"
          />
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              color="gray"
              className="bg-surface-dark text-text transition-all duration-300"
              size="lg"
            >
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions; 