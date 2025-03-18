import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from 'flowbite-react';
import { FaPlug, FaLayerGroup, FaCode } from 'react-icons/fa';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div 
      ref={ref}
      className="h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.8, 
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
    >
      <Card className="h-full p-6 bg-surface border-none relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="mb-4 text-primary p-3 rounded-full w-14 h-14 flex items-center justify-center bg-surface-light relative z-10">
          <motion.div
            className="text-primary"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            {icon}
          </motion.div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-text group-hover:text-primary transition-all duration-300">{title}</h3>
        <p className="text-text-muted">{description}</p>
      </Card>
    </motion.div>
  );
};

interface FeaturesProps {
  className?: string;
}

const Features: React.FC<FeaturesProps> = ({ className = '' }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  return (
    <section id="features" className={`section ${className}`} ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        
        {/* Animated circles */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/5"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Floating lines */}
        {[...Array(5)].map((_, i) => (
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
        <motion.div 
          className="text-center mb-16"
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
            Why Choose Our Laravel Expertise
          </motion.h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            We deliver exceptional Laravel solutions that drive business growth and user satisfaction.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Feature
            title="Rapid Development"
            description="We build and deploy your MVP quickly without compromising on quality or scalability."
            icon={
              <motion.svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
              </motion.svg>
            }
          />
          
          <Feature
            title="Scalable Architecture"
            description="Our solutions are built to grow with your business, handling increased traffic and data with ease."
            icon={
              <motion.svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
                animate={{ 
                  y: [0, -3, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              >
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707L15.414 4a1 1 0 11-1.414 1.414L13 4.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707L10.586 2A1 1 0 0112 2zm2 7a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L14 11.414l-3 3a1 1 0 11-1.414-1.414l3-3A1 1 0 0114 9z" clipRule="evenodd"></path>
              </motion.svg>
            }
          />
          
          <Feature
            title="Secure Applications"
            description="We implement industry best practices for security to protect your data and your users."
            icon={
              <motion.svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </motion.svg>
            }
          />
          
          <Feature
            title="Performance Optimization"
            description="We fine-tune your application for maximum speed and efficiency, ensuring a smooth user experience."
            icon={
              <motion.svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
                animate={{ 
                  rotate: [0, 180],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
              >
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
              </motion.svg>
            }
          />
          
          <Feature
            title="Custom Solutions"
            description="We tailor our development approach to your specific business needs and goals."
            icon={
              <motion.svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
                animate={{ 
                  rotateY: [0, 180, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path>
              </motion.svg>
            }
          />
          
          <Feature
            title="Ongoing Support"
            description="We provide continuous maintenance and support to ensure your application runs smoothly."
            icon={
              <motion.svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
                animate={{ 
                  scale: [1, 1.2, 1],
                  y: [0, -2, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"></path>
              </motion.svg>
            }
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 