"use client";

import Image from 'next/image';
import React, { useRef } from 'react';

interface TechnologiesProps {
  className?: string;
}

const Technologies: React.FC<TechnologiesProps> = ({ className }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const technologies = [
    '/technologies/Union.png',
    '/technologies/Union-1.png', 
    '/technologies/Union-2.png',
    '/technologies/Union-3.png',
    '/technologies/Union-4.png',
    '/technologies/Union-5.png',
    '/technologies/Union-6.png',
  ];

  return (
    <div className={`w-full py-8 ${className}`}>
      <div className="flex justify-center">
        <div 
          ref={scrollContainerRef}
          className="flex items-center space-x-16 md:space-x-16 overflow-x-auto scrollbar-hide px-4 md:px-0 cursor-grab active:cursor-grabbing touch-pan-x"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {technologies.map((tech, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                width={300}
                height={300}
                src={tech}
                alt={`Technology ${index + 1}`}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
