import React from 'react';

const BottomNavigation: React.FC = () => {
  return (
    <div className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 max-w-[95%] sm:max-w-fit w-[95%] sm:w-auto">
      <nav className="flex items-center justify-between bg-gray-100 rounded-full px-3 sm:px-5 py-2 sm:py-3">
        <div className="flex items-center gap-3 sm:gap-8">
          <a
            href="#services"
            className="text-gray-900 text-xs sm:text-sm font-medium whitespace-nowrap"
          >
            Services
          </a>
          <a
            href="#work"
            className="text-gray-900 text-xs sm:text-sm font-medium hidden xs:inline-block whitespace-nowrap"
          >
            Work
          </a>
          <a
            href="#features"
            className="text-gray-900 text-xs sm:text-sm font-medium hidden sm:inline-block whitespace-nowrap"
          >
            Features
          </a>
        </div>
        <a
          href="#"
          className="bg-primary-500 ml-2 sm:ml-4 text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap"
        >
          Book a meeting
        </a>
      </nav>
    </div>
  );
};

export default BottomNavigation;
