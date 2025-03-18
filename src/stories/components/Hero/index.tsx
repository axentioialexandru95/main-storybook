import React, { useEffect, useState } from 'react';
import { Button } from 'flowbite-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Transform your ideas into successful MVPs with expert Laravel development.";
  
  useEffect(() => {
    setTypedText(fullText);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden dark:bg-background bg-phantom-white">
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="glass p-10 mb-10">
            <h1 className="text-4xl md:text-5xl font-heavy mb-6 leading-tight dark:text-text text-gray-900">
              Building <span className="text-primary inline-block">Exceptional</span> Digital Experiences with Laravel
            </h1>
            
            <p className="text-lg md:text-xl dark:text-text-muted text-gray-700 mb-10">
              {typedText}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button 
                color="blue"
                className="bg-primary dark:text-text text-white hover:bg-primary-light transition-all duration-300"
                size="lg"
              >
                Book a Call
              </Button>
              
              <Button 
                color="gray"
                className="glass dark:text-text text-gray-700 transition-all duration-300 border-0"
                size="lg"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                </svg>
                Watch Video
              </Button>
            </div>
          </div>
          
          <div className="glass p-4 rounded-lg max-w-md">
            <span className="dark:text-text-muted text-gray-700 text-sm">
              We&apos;re on it—expect a quick response!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
