'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { CanvasTiles } from '@/components/ui/canvas-tiles';
import { CanvasTilesRef } from '@/components/ui/canvas-tiles';

// Custom icons for About section
const SpeedIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
      fill="#4646FF"
    />
  </svg>
);

const AdaptIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.2 22H6.8C4.4 22 3.5 21.05 3.5 18.55V5.45C3.5 2.95 4.4 2 6.8 2H17.2C19.6 2 20.5 2.95 20.5 5.45V18.55C20.5 21.05 19.6 22 17.2 22Z"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 18.5C14.2091 18.5 16 16.7091 16 14.5C16 12.2909 14.2091 10.5 12 10.5C9.79086 10.5 8 12.2909 8 14.5C8 16.7091 9.79086 18.5 12 18.5Z"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 6H16"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClientIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.97 14.44C18.34 14.67 19.85 14.43 20.91 13.72C22.32 12.78 22.32 11.24 20.91 10.3C19.84 9.59 18.31 9.35 16.94 9.59"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.97 7.16C6.03 7.15 6.1 7.15 6.16 7.16C7.54 7.11 8.64 5.98 8.64 4.58C8.64 3.15 7.49 2 6.06 2C4.63 2 3.48 3.16 3.48 4.58C3.49 5.98 4.59 7.11 5.97 7.16Z"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 14.44C5.63 14.67 4.12 14.43 3.06 13.72C1.65 12.78 1.65 11.24 3.06 10.3C4.13 9.59 5.66 9.35 7.03 9.59"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.33 13.45 9.33 12.05C9.33 10.62 10.48 9.47 11.91 9.47C13.34 9.47 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.09 17.78C7.68 18.72 7.68 20.26 9.09 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.09 17.78Z"
      stroke="#4646FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Main About component
const About: React.FC = () => {
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
      id="about"
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
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-primary-500">PhantomTech</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Software that moves at your speed
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Technology that <span className="text-primary-500">adapts to you</span>
            </h3>
            <p className="text-gray-400 mb-6">
              We believe that great technology should work for you, not against you. At PhantomTech,
              we build
              <span className="text-white font-semibold"> smart, scalable, and intuitive</span>{' '}
              solutions that adapt to your workflow.
            </p>
            <p className="text-gray-400">
              No unnecessary complexity, no bloated features—just technology that
              <span className="text-white font-semibold">
                {' '}
                adapts, simplifies, and accelerates
              </span>{' '}
              your business, handling the complexity so you can focus on what truly matters.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#0E0D29] border border-[#201F45] rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Who We Work With</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="text-primary-500 mr-4 mt-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12L10 17L20 7"
                      stroke="#4646FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-gray-400">
                  <span className="text-white font-medium">SMEs & solopreneurs</span> looking for
                  better ways to manage their business
                </p>
              </li>
              <li className="flex items-start">
                <div className="text-primary-500 mr-4 mt-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12L10 17L20 7"
                      stroke="#4646FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-gray-400">
                  <span className="text-white font-medium">E-commerce founders</span> who need
                  customized solutions beyond template platforms
                </p>
              </li>
              <li className="flex items-start">
                <div className="text-primary-500 mr-4 mt-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12L10 17L20 7"
                      stroke="#4646FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-gray-400">
                  <span className="text-white font-medium">Freelancers & agencies</span> tired of
                  tool overload and juggling multiple platforms
                </p>
              </li>
              <li className="flex items-start">
                <div className="text-primary-500 mr-4 mt-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12L10 17L20 7"
                      stroke="#4646FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-gray-400">
                  <span className="text-white font-medium">Logistics & small manufacturing</span>{' '}
                  businesses that want efficient systems without enterprise complexity
                </p>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            variants={itemVariants}
            className="bg-[#0E0D29] border border-[#201F45] rounded-xl p-8 h-full flex flex-col"
            whileHover={{
              y: -5,
              boxShadow: '0 10px 25px -5px rgba(25, 25, 254, 0.2)',
              borderColor: 'rgba(25, 25, 254, 0.3)',
            }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-primary-500 mb-6">
              <SpeedIcon />
            </div>
            <h3 className="font-bold text-white mb-3 text-xl">Simple, Streamlined Workflows</h3>
            <p className="text-gray-400 flex-grow text-sm">
              Because software should make work easier, not harder. We deliver intuitive tools
              designed to help you get things done.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-[#0E0D29] border border-[#201F45] rounded-xl p-8 h-full flex flex-col"
            whileHover={{
              y: -5,
              boxShadow: '0 10px 25px -5px rgba(25, 25, 254, 0.2)',
              borderColor: 'rgba(25, 25, 254, 0.3)',
            }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-primary-500 mb-6">
              <AdaptIcon />
            </div>
            <h3 className="font-bold text-white mb-3 text-xl">Fast Delivery</h3>
            <p className="text-gray-400 flex-grow text-sm">
              Time is money. We focus on affordable, custom solutions tailored to businesses that
              move fast and need technology that keeps up.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-[#0E0D29] border border-[#201F45] rounded-xl p-8 h-full flex flex-col"
            whileHover={{
              y: -5,
              boxShadow: '0 10px 25px -5px rgba(25, 25, 254, 0.2)',
              borderColor: 'rgba(25, 25, 254, 0.3)',
            }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-primary-500 mb-6">
              <ClientIcon />
            </div>
            <h3 className="font-bold text-white mb-3 text-xl">Solutions Built for Growth</h3>
            <p className="text-gray-400 flex-grow text-sm">
              We build exactly what you need without the fluff, ensuring you&apos;re always one step
              ahead with intelligent, efficient, and accessible software.
            </p>
          </motion.div>
        </motion.div>

        <div className="mt-12 text-center">
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
              Let&apos;s Build Something Extraordinary →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
