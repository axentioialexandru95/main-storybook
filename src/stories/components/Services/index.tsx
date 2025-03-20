'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { CanvasTiles } from '@/components/ui/canvas-tiles';
import { CanvasTilesRef } from '@/components/ui/canvas-tiles';

// Service card interface
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  size?: 'small' | 'medium' | 'large'; // Size variant for the bento grid
}

// Component for individual service cards
const ServiceCard: React.FC<Service> = ({ title, description, icon }) => {
  return (
    <motion.div
      className="bg-[#0E0D29] border border-[#201F45] rounded-xl p-8 h-full flex flex-col"
      whileHover={{
        y: -5,
        boxShadow: '0 10px 25px -5px rgba(25, 25, 254, 0.2)',
        borderColor: 'rgba(25, 25, 254, 0.3)',
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="text-primary-500 mb-6">{icon}</div>
      <h3 className="font-bold text-white mb-3 text-xl">{title}</h3>
      <p className="text-gray-400 flex-grow text-sm">{description}</p>
    </motion.div>
  );
};

// Custom icons
const WebsiteIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 10V8C20 4 18 2 14 2H10C6 2 4 4 4 8V16C4 20 6 22 10 22H14"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 17.5C22 19.43 20.43 21 18.5 21C16.57 21 15 19.43 15 17.5C15 15.57 16.57 14 18.5 14C20.43 14 22 15.57 22 17.5Z"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 17.5H18.5"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.5 14V17.5"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 11H12.5"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 16H10.5"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 6H14.5"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LandingPageIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 22H22"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.95 22L3 9.97C3 9.36 3.29 8.78 3.77 8.4L10.77 2.95C11.49 2.39 12.5 2.39 13.23 2.95L20.23 8.39C20.72 8.77 21 9.35 21 9.97V22"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    />
    <path
      d="M15.5 11H8.5C7.67 11 7 11.67 7 12.5V22H17V12.5C17 11.67 16.33 11 15.5 11Z"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    />
    <path
      d="M10 16.25V17.75"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 15.25V17.75"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 16.25V17.75"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WebAppIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.5 8.5V15.5"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.5 12H15.5"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.5 15.5V8.5"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 12H5.5"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 5.5V8.5"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 18.5V15.5"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EcommerceIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.39999 6.5H15.6C19 6.5 19.34 8.09 19.57 10.03L20.47 17.53C20.76 19.99 20 22 16.5 22H7.50999C3.99999 22 3.23999 19.99 3.53999 17.53L4.44 10.03C4.66 8.09 4.99999 6.5 8.39999 6.5Z"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 8V4.5C8 3 9 2 10.5 2H13.5C15 2 16 3 16 4.5V8"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.41 17.03H8"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MobileIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 10V8C20 4 18 2 14 2H10C6 2 4 4 4 8V16C4 20 6 22 10 22H14"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 2V5"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 2V5"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 18.5V19"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 12.03V14.07C22 15.07 21.75 15.88 21.3 16.5C20.63 17.5 19.43 18 17.8 18H13.5C12.6 18 11.65 17.75 11 17.23C10.15 16.57 9.70001 15.52 9.70001 14.07V12.03C9.70001 10.57 10.15 9.53001 11 8.87001C11.65 8.35001 12.6 8.10001 13.5 8.10001H17.8C20.13 8.10001 22 9.97001 22 12.03Z"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.28 10.7C11.2 11.47 11.08 12.45 11 13H20.04C20.07 12.91 20.09 12.81 20.1 12.71C20.18 12.2 20.22 11.59 19.99 11.01C19.73 10.32 19.18 9.76001 18 9.76001H14C13.32 9.76001 12.7 10.23 12.29 10.7H12.28Z"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MvpIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.73 2C14.14 2 13.5 2.64 13.5 4.23V8.27C13.5 9.86 14.14 10.5 15.73 10.5H19.77C21.36 10.5 22 9.86 22 8.27V4.23C22 2.64 21.36 2 19.77 2"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 19V17.5C22 15.93 21.93 15 20.5 15H16C14.5 15 13.5 15.93 13.5 17.5V21.5"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 8V19C2 20.67 3.33 22 5 22H13.5"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 12V14.5"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 11H9.42C9.73 11 10.01 10.73 10.01 10.42V8"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 3H6"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 3H9"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 6H5"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 6H7"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ErpIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.05 2.53L4.03 6.46C2.1 7.72 2.1 10.54 4.03 11.8L10.05 15.73C11.13 16.44 12.91 16.44 13.99 15.73L19.98 11.8C21.9 10.54 21.9 7.73 19.98 6.47L13.99 2.54C12.91 1.82 11.13 1.82 10.05 2.53Z"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.63 13.08L5.62 17.77C5.62 19.04 6.6 20.4 7.8 20.8L10.99 21.86C11.54 22.04 12.45 22.04 13.01 21.86L16.2 20.8C17.4 20.4 18.38 19.04 18.38 17.77V13.13"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.4 15V9"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Main Services component
const Services: React.FC = () => {
  const tilesRef = useRef<CanvasTilesRef>(null);

  // Handle mouse movements for canvas animation
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!tilesRef.current) return;

    // Get position relative to the container
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Pass position to tiles component
    tilesRef.current.setHoverPosition({ x, y });
  };

  const handleMouseLeave = () => {
    if (tilesRef.current) {
      tilesRef.current.setHoverPosition(null);
    }
  };

  // Handle touch events for mobile devices
  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    if (!tilesRef.current || e.touches.length === 0) return;

    // Get position relative to the container
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    // Pass position to tiles component
    tilesRef.current.setHoverPosition({ x, y });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    if (!tilesRef.current || e.touches.length === 0) return;

    // Get position relative to the container
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    // Pass position to tiles component
    tilesRef.current.setHoverPosition({ x, y });
  };

  const handleTouchEnd = () => {
    // Let the internal component handle the timeout and cleanup
  };

  // Service data
  const services = [
    {
      title: 'Website Development',
      description:
        'Custom websites optimized for performance and user experience with responsive design and modern technologies. We create eye-catching, fast-loading websites that drive results, focusing on both aesthetics and conversion optimization.',
      icon: <WebsiteIcon />,
    },
    {
      title: 'Landing Pages',
      description: 'Conversion-optimized pages designed for digital campaigns.',
      icon: <LandingPageIcon />,
    },
    {
      title: 'Custom Web Applications',
      description: 'Tailor-made web applications for specific business needs.',
      icon: <WebAppIcon />,
    },
    {
      title: 'E-commerce Solutions',
      description:
        'Custom online stores with scalable functionality, secure payment processing, and inventory management. We build seamless shopping experiences that drive sales and customer loyalty.',
      icon: <EcommerceIcon />,
    },
    {
      title: 'Mobile Applications',
      description: 'Android & iOS apps tailored to your business requirements.',
      icon: <MobileIcon />,
    },
    {
      title: 'MVP Development',
      description:
        'Rapid development of minimum viable products to validate ideas and get to market faster. We help startups and innovators build, test, and iterate quickly while minimizing costs and risks.',
      icon: <MvpIcon />,
    },
    {
      title: 'ERP / CRM Systems',
      description:
        'Custom business management systems to streamline operations and enhance customer relationships. Our solutions centralize your data and automate key business processes for maximum efficiency.',
      icon: <ErpIcon />,
    },
  ];

  // Animation variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      className="relative py-20 overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Canvas Background */}
      <div className="absolute inset-0 z-0">
        <CanvasTiles
          ref={tilesRef}
          rows={16}
          cols={16}
          className="w-full h-full"
          primaryColor="rgba(25, 25, 254, 0.15)"
          secondaryColor="rgba(30, 30, 30, 0.05)"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95 z-[1]"></div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Web & App <span className="text-primary-500">Development</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transforming your ideas into powerful digital solutions
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Layout - Exactly matching the reference image */}
        <motion.div
          className="grid grid-cols-12 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* First Row */}
          <motion.div className="col-span-12 md:col-span-5" variants={itemVariants}>
            <ServiceCard
              title={services[0].title}
              description={services[0].description}
              icon={services[0].icon}
            />
          </motion.div>

          <motion.div className="col-span-6 md:col-span-3" variants={itemVariants}>
            <ServiceCard
              title={services[1].title}
              description={services[1].description}
              icon={services[1].icon}
            />
          </motion.div>

          <motion.div className="col-span-6 md:col-span-4" variants={itemVariants}>
            <ServiceCard
              title={services[2].title}
              description={services[2].description}
              icon={services[2].icon}
            />
          </motion.div>

          {/* Second Row */}
          <motion.div className="col-span-12 md:col-span-8" variants={itemVariants}>
            <ServiceCard
              title={services[3].title}
              description={services[3].description}
              icon={services[3].icon}
            />
          </motion.div>

          <motion.div className="col-span-12 md:col-span-4" variants={itemVariants}>
            <ServiceCard
              title={services[4].title}
              description={services[4].description}
              icon={services[4].icon}
            />
          </motion.div>

          {/* Third Row */}
          <motion.div className="col-span-12 md:col-span-4" variants={itemVariants}>
            <ServiceCard
              title={services[5].title}
              description={services[5].description}
              icon={services[5].icon}
            />
          </motion.div>

          <motion.div className="col-span-12 md:col-span-8" variants={itemVariants}>
            <ServiceCard
              title={services[6].title}
              description={services[6].description}
              icon={services[6].icon}
            />
          </motion.div>
        </motion.div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a
              href="#contact"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg text-lg shadow-[0_0_15px_rgba(25,25,254,0.5)] hover:shadow-[0_0_20px_rgba(25,25,254,0.7)] transition-all duration-300"
            >
              Start Your Project →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
