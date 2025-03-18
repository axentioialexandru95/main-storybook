import React from 'react';

const BottomNavigation: React.FC = () => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 max-w-fit ">
      <nav className="flex items-center justify-between bg-gray-100 rounded-full px-5 py-3">
        <div className="flex items-center gap-8">
          <a href="#how-it-works" className="text-gray-900 text-sm font-medium">
            How it works
          </a>
          <a href="#work" className="text-gray-900 text-sm font-medium hidden sm:inline-block">
            Work
          </a>
          <a href="#pricing" className="text-gray-900 text-sm font-medium hidden sm:inline-block">
            Pricing
          </a>
        </div>
        <a
          href="#connect"
          className="bg-primary-500 ml-4 text-white px-5 py-2 rounded-full text-sm font-medium"
        >
          Connect on X
        </a>
      </nav>
    </div>
  );
};

export default BottomNavigation;
