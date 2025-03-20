import React from 'react';
import Image from 'next/image';

interface FeaturesProps {
  className?: string;
}

const Features: React.FC<FeaturesProps> = ({ className }) => {
  const features = [
    {
      title: 'Effortless Integrations',
      description:
        'From payment gateways to user authentication and email marketing tools, we take care of all essential integrations to ensure your MVP works like a dream—seamlessly and efficiently.',
      icon: '/features/icon-puzzle.svg',
    },
    {
      title: 'All-in-One Solution',
      description:
        "Your MVP includes a sleek web application, high-converting landing pages, and SEO-ready content. Designed for rapid launch and effortless scalability, it's everything you need in one streamlined package.",
      icon: '/features/icon-gift.svg',
    },
    {
      title: 'Cutting-Edge, Scalable Tech',
      description:
        'Harnessing the power of the latest technologies and AI, we ensure your MVP is not just fast and reliable but also primed for seamless growth.',
      icon: '/features/icon-flame.svg',
    },
  ];

  return (
    <section className={`py-16 sm:py-20 md:py-28 lg:py-36 ${className}`}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-10 lg:gap-12">
          <div className="w-full lg:w-1/3 my-auto mb-10 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-white">
              From Concept to Launch in{' '}
              <span className="inline-block bg-blue-600 px-2 sm:px-3 md:px-4 py-1 my-1 sm:my-2">
                Weeks
              </span>{' '}
              Not Months
            </h2>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg font-normal leading-relaxed">
              Fuel your idea with rapid MVP development. We take your concept and deliver a
              market-ready product in 3-4 weeks, giving you the speed and edge to thrive in
              today&apos;s fast-moving tech world.
            </p>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="bg-blue-600 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-md shrink-0 mb-3 sm:mb-0">
                  <Image
                    width={300}
                    height={300}
                    src={feature.icon}
                    alt={feature.title}
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base font-normal leading-relaxed">
                    {feature.description}
                  </p>
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
