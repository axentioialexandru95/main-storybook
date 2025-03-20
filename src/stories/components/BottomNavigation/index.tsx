'use client';

import React, { useState, useEffect } from 'react';

const BottomNavigation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the height of the first section (Hero section)
      const firstSection = document.getElementById('home');
      if (firstSection) {
        const firstSectionHeight = firstSection.offsetHeight;
        // Show the navigation after scrolling past the first section
        setIsVisible(window.scrollY > firstSectionHeight * 0.8);
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 max-w-[95%] sm:max-w-fit w-[95%] sm:w-auto transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <nav className="flex items-center justify-between bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-full px-3 sm:px-5 py-2 sm:py-3 shadow-lg">
        {/* Mobile view - Only Services and Book a meeting */}
        <div className="flex md:hidden items-center justify-between w-full">
          <a
            href="#services"
            className="text-gray-300 hover:text-white text-sm font-medium py-2 px-4 whitespace-nowrap"
          >
            Services
          </a>
          <a
            href="#contact"
            className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200"
          >
            Book a meeting
          </a>
        </div>

        {/* Desktop view - Multiple links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-gray-300 hover:text-white text-sm font-medium whitespace-nowrap"
          >
            Services
          </a>
          <a
            href="#features"
            className="text-gray-300 hover:text-white text-sm font-medium whitespace-nowrap"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-white text-sm font-medium whitespace-nowrap"
          >
            About
          </a>
          <a
            href="#contact"
            className="bg-primary-500 hover:bg-primary-600 ml-2 text-white px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200"
          >
            Book a meeting
          </a>
        </div>
      </nav>
    </div>
  );
};

export default BottomNavigation;
