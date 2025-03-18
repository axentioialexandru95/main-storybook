import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, Button, Badge } from 'flowbite-react';

interface PricingFeatureProps {
  feature: string;
  included: boolean;
}

const PricingFeature: React.FC<PricingFeatureProps> = ({ feature, included }) => {
  return (
    <div className="flex items-center py-2">
      <motion.div 
        className={`mr-3 flex-shrink-0 ${included ? 'text-primary' : 'text-text-muted'}`}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
      >
        {included ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
          </svg>
        )}
      </motion.div>
      <span className={included ? 'text-text' : 'text-text-muted'}>{feature}</span>
    </div>
  );
};

interface PricingTierProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: { feature: string; included: boolean }[];
  popular?: boolean;
  ctaText: string;
  index: number;
}

const PricingTier: React.FC<PricingTierProps> = ({ 
  title, 
  price, 
  period = '/month', 
  description, 
  features, 
  popular = false,
  ctaText,
  index
}) => {
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
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <Card className={`h-full relative overflow-hidden ${popular ? 'border-primary border-2' : 'border-none'} bg-surface`}>
        {popular && (
          <div className="absolute top-0 right-0">
            <div className="relative">
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <motion.div 
                  className="absolute top-0 right-0 transform rotate-45 translate-y-2 -translate-x-2 w-16 bg-primary text-center py-1 text-xs font-semibold text-text"
                  animate={{ 
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Popular
                </motion.div>
              </div>
            </div>
          </div>
        )}
        
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2 text-text">{title}</h3>
            <p className="text-text-muted mb-4">{description}</p>
            <div className="flex items-end mb-4">
              <motion.span 
                className="text-4xl font-bold text-primary"
                animate={popular ? { 
                  y: [0, -3, 0]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {price}
              </motion.span>
              <span className="text-text-muted ml-1">{period}</span>
            </div>
          </div>
          
          <div className="mb-8">
            {features.map((feature, i) => (
              <PricingFeature key={i} feature={feature.feature} included={feature.included} />
            ))}
          </div>
          
          <div className="mt-auto">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                color={popular ? "blue" : "gray"}
                className={`w-full ${popular 
                  ? 'bg-primary text-text hover:bg-primary-light' 
                  : 'bg-surface-dark text-text'} 
                  transition-all duration-300`}
                size="lg"
              >
                {ctaText}
              </Button>
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const Pricing: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <section id="pricing" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Animated shapes */}
        <motion.div 
          className="absolute top-40 right-20 w-96 h-96 rounded-full bg-primary/5"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-secondary/5"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Floating dots */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
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
            Transparent Pricing Plans
          </motion.h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Choose the perfect plan for your project needs with our flexible pricing options.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PricingTier
            index={0}
            title="Starter"
            price="$2,999"
            description="Perfect for small projects and MVPs"
            features={[
              { feature: "Custom Laravel Development", included: true },
              { feature: "Responsive Design", included: true },
              { feature: "Basic Authentication", included: true },
              { feature: "Database Integration", included: true },
              { feature: "API Development", included: false },
              { feature: "Payment Gateway Integration", included: false },
              { feature: "Advanced Security Features", included: false },
              { feature: "Ongoing Support", included: false }
            ]}
            ctaText="Get Started"
          />
          
          <PricingTier
            index={1}
            title="Professional"
            price="$5,999"
            description="Ideal for growing businesses"
            features={[
              { feature: "Custom Laravel Development", included: true },
              { feature: "Responsive Design", included: true },
              { feature: "Advanced Authentication", included: true },
              { feature: "Database Integration", included: true },
              { feature: "API Development", included: true },
              { feature: "Payment Gateway Integration", included: true },
              { feature: "Advanced Security Features", included: false },
              { feature: "Ongoing Support", included: false }
            ]}
            popular={true}
            ctaText="Choose Plan"
          />
          
          <PricingTier
            index={2}
            title="Enterprise"
            price="$9,999"
            description="For complex, large-scale applications"
            features={[
              { feature: "Custom Laravel Development", included: true },
              { feature: "Responsive Design", included: true },
              { feature: "Advanced Authentication", included: true },
              { feature: "Database Integration", included: true },
              { feature: "API Development", included: true },
              { feature: "Payment Gateway Integration", included: true },
              { feature: "Advanced Security Features", included: true },
              { feature: "Ongoing Support", included: true }
            ]}
            ctaText="Contact Us"
          />
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-text-muted">
            Need a custom solution? <a href="#contact" className="text-primary hover:text-primary-light underline">Contact us</a> for a personalized quote.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 