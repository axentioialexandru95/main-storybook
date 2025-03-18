import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, Button } from 'flowbite-react';

interface FounderProps {
  className?: string;
}

const Founder: React.FC<FounderProps> = ({ className = '' }) => {
  return (
    <section id="founder" className={`section ${className}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-neo-flat bg-surface overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <motion.h2 
                  className="section-title text-text mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Meet the <span className="text-primary">Founder</span>
                </motion.h2>
                
                <motion.p 
                  className="text-text-muted mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  With over 9 years of experience in Laravel development, I&apos;ve helped numerous startups transform their ideas into successful MVPs. My expertise lies in building scalable, efficient, and user-friendly web applications that drive business growth.
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Button 
                    color="blue"
                    className="shadow-neo-flat hover:shadow-neo-convex active:shadow-neo-pressed bg-primary text-text hover:bg-primary-light transform hover:-translate-y-1 active:translate-y-0"
                  >
                    Book a Call
                  </Button>
                  
                  <Button 
                    color="gray"
                    className="shadow-neo-flat hover:shadow-neo-convex active:shadow-neo-pressed bg-surface text-text border-border hover:bg-surface-light transform hover:-translate-y-1 active:translate-y-0"
                  >
                    View Portfolio
                  </Button>
                </motion.div>
              </div>
              
              <div className="relative h-[400px] md:h-auto shadow-neo-flat rounded-lg overflow-hidden">
                <Image
                  src="https://api.imagepig.com/xl?prompt=A professional portrait of a male tech founder in his 30s, wearing a casual business attire, standing confidently with arms crossed, against a dark background. High quality, professional lighting, serious expression"
                  alt="Founder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder; 