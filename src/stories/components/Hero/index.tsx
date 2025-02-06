import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-normal text-white mb-4 flex flex-col md:block">
          Your Ideas,
          <span className="mt-2 md:mt-0">
            {' '}
            Engineered to{' '}
            <span className="inline-block bg-primary-500 px-4 py-1 mt-2 md:mt-2">
              Thrive <span>Digitally</span>
            </span>
          </span>
        </h1>

        <p className="text-2xl md:text-3xl text-gray-300 mb-8">
          Build Your MVP with Unmatched Laravel Expertise
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg text-lg">
            Book a Call →
          </button>
          <button className="border border-gray-600 hover:border-gray-400 text-white px-8 py-3 rounded-lg text-lg">
            <span className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Watch video
            </span>
          </button>
        </div>

        <p className="text-gray-400 mt-4">We&apos;re on it—expect a quick response!</p>
      </div>
    </section>
  );
};

export default Hero;
