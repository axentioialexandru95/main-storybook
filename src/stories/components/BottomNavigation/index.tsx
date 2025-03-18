import React from 'react';
import { motion } from 'framer-motion';
import { Navbar, Button } from 'flowbite-react';
import Technologies from '../Technologies';

interface BottomNavigationProps {
  className?: string;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ className = '' }) => {
  return (
    <motion.div 
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-fit ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Technologies className="mb-2" showLabel={false} compact={true} />
      <Navbar 
        fluid
        className="bg-surface border border-border rounded-lg px-4 py-2 shadow-lg backdrop-blur-sm"
      >
        <div className="flex items-center gap-6">
          <Navbar.Link 
            href="#features" 
            className="text-text text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </Navbar.Link>
          <Navbar.Link 
            href="#solutions" 
            className="text-text text-sm font-medium hover:text-primary transition-colors"
          >
            Solutions
          </Navbar.Link>
          <Navbar.Link 
            href="#pricing" 
            className="text-text text-sm font-medium hover:text-primary transition-colors"
          >
            Pricing
          </Navbar.Link>
          <Navbar.Link 
            href="#founder" 
            className="text-text text-sm font-medium hover:text-primary transition-colors hidden sm:inline-block"
          >
            About
          </Navbar.Link>
        </div>
        <Button
          href="#contact"
          color="blue"
          size="sm"
          className="ml-4 bg-primary text-text hover:bg-primary-light"
        >
          Book a Call
        </Button>
      </Navbar>
    </motion.div>
  );
};

export default BottomNavigation;
