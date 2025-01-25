import Hero from '@/stories/components/Hero';
import Navbar from '@/stories/components/Navbar';
import React from 'react';

export const Page: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};
