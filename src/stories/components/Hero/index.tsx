import React from 'react';

const TechnologyShowcase: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900 text-center text-white">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-6">Our Technologies</h2>

      {/* Slider Container */}
      <div id="technology-carousel" className="relative max-w-4xl mx-auto">
        {/* Carousel Wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80">
          {/* Slide 1 */}
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item
          >
            <img
              src="/technologies/react.png"
              {/* Slide 1 */}
            <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item
            >
            <img
            src='/technologies/1.png'
            alt="Technology 1"
            className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
          {/* Slide 2 */}
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item
          >
            <img
              src="/technologies/2.png"
              alt="Technology 2"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
          {/* Slide 3 */}
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item
          >
            <img
              src="/technologies/3.png"
              alt="Technology 3"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
          {/* Slide 4 */}
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item
          >
            <img
              src="/technologies/4.png"
              alt="Technology 4"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
          {/* Slide 5 */}
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item
          >
            <img
              src="/technologies/5.png"
              alt="Technology 5"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
          {/* Slide 6 */}
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item
          >
            <img
              src="/technologies/6.png"
              alt="Technology 6"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
          {/* Slide 7 */}
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item
          >
            <img
              src="/technologies/7.png"
              alt="Technology 7"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
              alt="React"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
          {/* Slide 2 */}
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item
          >
            <img
              src="/technologies/typescript.png"
              alt="TypeScript"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
          {/* Slide 3 */}
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item
          >
            <img
              src="/technologies/tailwindcss.png"
              alt="Tailwind CSS"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none"
          data-carousel-prev
          aria-label="Previous"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-600/30 hover:bg-gray-800/50">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none"
          data-carousel-next
          aria-label="Next"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-600/30 hover:bg-gray-800/50">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default TechnologyShowcase;