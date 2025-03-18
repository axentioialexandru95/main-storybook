import React from 'react';
import Image from 'next/image';

interface FeaturesProps {
  className?: string;
}

const Features: React.FC<FeaturesProps> = ({ className }) => {
  const features = [
    {
      title: 'Effortless Integrations',
      description: 'From payment gateways to user authentication and email marketing tools, we take care of all essential integrations to ensure your MVP works like a dream—seamlessly and efficiently.',
      icon: '/features/icon-puzzle.svg',
    },
    {
      title: 'All-in-One Solution',
      description: "Your MVP includes a sleek web application, high-converting landing pages, and SEO-ready content. Designed for rapid launch and effortless scalability, it's everything you need in one streamlined package.",
      icon: '/features/icon-gift.svg',
    },
    {
      title: 'Cutting-Edge, Scalable Tech',
      description: 'Harnessing the power of the latest technologies and AI, we ensure your MVP is not just fast and reliable but also primed for seamless growth.',
      icon: '/features/icon-flame.svg',
    },
  ];
  
  return (
    <section className={`py-60 ${className}`}>
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex flex-col align-middle lg:flex-row items-start gap-12">
          <div className="lg:w-1/3  my-auto ">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white  ">
              From Concept to Launch in <span className="inline-block bg-blue-600 px-4 py-1 my-2">Weeks</span> Not Months
            </h2>
            <p className="text-gray-400 text-lg font-normal leading-relaxed">
              Fuel your idea with rapid MVP development. We take your concept and deliver a market-ready product in 3-4 weeks, giving you the speed and edge to thrive in today&apos;s fast-moving tech world.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 gap-[80px]">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row items-start gap-6"
              >
                <div className="bg-blue-600 w-16 h-16 flex items-center justify-center rounded-md shrink-0">
                  <Image width={100} height={100} src={feature.icon} alt={feature.title} className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400 font-normal leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 