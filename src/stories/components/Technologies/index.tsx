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
    <div className={`w-full overflow-hidden py-8 ${className}`}>
      <div className="relative w-full">
        <div className="animate-infinite-scroll flex items-center space-x-16 whitespace-nowrap">
          {/* First set of images */}
          {technologies.map((tech, index) => (
            <img
              key={`first-${index}`}
              src={tech}
              alt={`Technology ${index + 1}`}
              className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 inline-block"
            />
          ))}
          {/* Duplicate set for seamless loop */}
          {technologies.map((tech, index) => (
            <img
              key={`second-${index}`}
              src={tech}
              alt={`Technology ${index + 1}`}
              className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 inline-block"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
