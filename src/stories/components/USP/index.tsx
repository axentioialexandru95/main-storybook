'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface USPProps {
  className?: string;
}

const USP: React.FC<USPProps> = ({ className }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Icons for USPs
  const PartnershipIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.16 10.87C9.06 10.86 8.94 10.86 8.83 10.87C6.45 10.79 4.56 8.84 4.56 6.44C4.56 3.99 6.54 2 9 2C11.45 2 13.44 3.99 13.44 6.44C13.43 8.84 11.54 10.79 9.16 10.87Z"
        stroke="#4646FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11"
        stroke="#4646FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.16 14.56C1.74 16.18 1.74 18.82 4.16 20.43C6.91 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.92 12.73 4.16 14.56Z"
        stroke="#4646FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.34 20C19.06 19.85 19.74 19.56 20.3 19.13C21.86 17.96 21.86 16.03 20.3 14.86C19.75 14.44 19.08 14.16 18.37 14"
        stroke="#4646FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const TransparencyIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="#4646FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16V12"
        stroke="#4646FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8H12.01"
        stroke="#4646FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const ExperienceIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 2V5"
        stroke="#4646FF"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 2V5"
        stroke="#4646FF"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 9.09H20.5"
        stroke="#4646FF"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
        stroke="#4646FF"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9955 13.7H12.0045"
        stroke="#4646FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.29431 13.7H8.30329"
        stroke="#4646FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.29431 16.7H8.30329"
        stroke="#4646FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section className={`bg-black relative py-12 sm:py-16 md:py-24 ${className}`}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c20]/20 to-black/0 pointer-events-none"></div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        {/* Intro text */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Custom Solutions for{' '}
            <span className="bg-primary-500 px-2 py-0.5 drop-shadow-[0_0_15px_rgba(25,25,254,0.5)]">
              Unique Challenges
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            At PhantomTech, we create custom tech solutions designed just for you. With over{' '}
            <span className="text-white">9 years of hands-on experience</span>, we work closely with
            you to build systems that are{' '}
            <span className="bg-primary-500 px-2 py-0.5 drop-shadow-[0_0_15px_rgba(25,25,254,0.5)]">
              flexible, scalable
            </span>
            , and truly supportive of your growth.
          </p>
        </motion.div>

        {/* USP Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Card 1 - Practical Partnership */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0E0D29] border border-[#201F45] rounded-xl p-4 sm:p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300"
            whileHover={{
              y: -5,
              boxShadow: '0 10px 30px -15px rgba(70, 70, 255, 0.3)',
              transition: { duration: 0.2 },
            }}
          >
            <div className="text-primary-500 mb-4 sm:mb-6">
              <PartnershipIcon />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
              <span className="border-b-2 border-primary-500 pb-1">Practical Partnership</span>
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              We work side-by-side with you, ensuring our solutions are{' '}
              <span className="text-white">tailor-made</span> for your specific challenges. Unlike
              competitors who offer cookie-cutter products, we build systems that genuinely adapt
              and scale with your business.
            </p>
          </motion.div>

          {/* Card 2 - Transparency Over Hype */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0E0D29] border border-[#201F45] rounded-xl p-4 sm:p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300"
            whileHover={{
              y: -5,
              boxShadow: '0 10px 30px -15px rgba(70, 70, 255, 0.3)',
              transition: { duration: 0.2 },
            }}
          >
            <div className="text-primary-500 mb-4 sm:mb-6">
              <TransparencyIcon />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
              <span className="border-b-2 border-primary-500 pb-1">Transparency Over Hype</span>
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              With us, there are no empty promises. We focus on honest, clear communication, so you
              always know what to expect—delivering real, practical value without overhyping the
              outcome.
            </p>
          </motion.div>

          {/* Card 3 - Proven Experience */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0E0D29] border border-[#201F45] rounded-xl p-4 sm:p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300"
            whileHover={{
              y: -5,
              boxShadow: '0 10px 30px -15px rgba(70, 70, 255, 0.3)',
              transition: { duration: 0.2 },
            }}
          >
            <div className="text-primary-500 mb-4 sm:mb-6">
              <ExperienceIcon />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
              <span className="border-b-2 border-primary-500 pb-1">Proven Experience</span>
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              With over 9 years of hands-on experience, we&apos;ve honed a pragmatic approach
              that&apos;s built on understanding the real-world needs of businesses like yours. Our
              expertise means we can deliver flexible, scalable systems that support your growth.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default USP;
