import React from 'react';
import { Carousel } from 'flowbite-react';

interface TechnologiesProps {
  className?: string;
}

const Technologies: React.FC<TechnologiesProps> = ({ className }) => {
  return (
    <div className={`w-full bg-black py-8 ${className}`}>
      <Carousel 
        slideInterval={3000}
        className="h-24"
        indicators={false}
        leftControl=" "
        rightControl=" "
      >
        <div className="flex items-center justify-center space-x-16 px-4">
          <img src="/technologies/1.png" alt="Technology 1" className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/technologies/2.png" alt="Technology 2" className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/technologies/3.png" alt="Technology 3" className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/technologies/4.png" alt="Technology 4" className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" />

        </div>
        <div className="flex items-center justify-center space-x-16 px-4">
          <img src="/technologies/5.png" alt="Technology 5" className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/technologies/6.png" alt="Technology 6" className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/technologies/7.png" alt="Technology 7" className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
        </div>
      </Carousel>
    </div>
  );
};

export default Technologies;