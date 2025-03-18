import BottomNavigation from '@/stories/components/BottomNavigation';
import Hero from '@/stories/components/Hero';
import Navbar from '@/stories/components/Navbar';
import Technologies from '@/stories/components/Technologies';
import React from 'react';

export const Page: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Technologies />
      <BottomNavigation />
    </div>
  );
};
