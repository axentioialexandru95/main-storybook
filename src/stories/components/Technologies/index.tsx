import Image from 'next/image';
import React from 'react';

interface TechnologiesProps {
  className?: string;
}

const Technologies: React.FC<TechnologiesProps> = ({ className }) => {
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
        <div className="flex items-center space-x-16">
          {technologies.map((tech, index) => (
            <Image
              key={index}
              width={300}
              height={300}
              src={tech}
              alt={`Technology ${index + 1}`}
              className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
