'use client';

import React, { useRef } from 'react';
import { CanvasHeroTiles } from './canvas-hero-tiles';
import { CanvasTilesRef } from '@/components/ui/canvas-tiles';
import Navbar from '../Navbar';

const Hero: React.FC = () => {
  const tilesRef = useRef<CanvasTilesRef>(null);

  // Handle mouse movements at the Hero level and pass to tiles
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!tilesRef.current) return;

    // Get position relative to the container
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Pass position to tiles component
    tilesRef.current.setHoverPosition({ x, y });
  };

  const handleMouseLeave = () => {
    if (tilesRef.current) {
      tilesRef.current.setHoverPosition(null);
    }
  };

  // Handle touch events for mobile devices
  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    if (!tilesRef.current || e.touches.length === 0) return;

    // Get position relative to the container
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    // Pass position to tiles component
    tilesRef.current.setHoverPosition({ x, y });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    if (!tilesRef.current || e.touches.length === 0) return;

    // Get position relative to the container
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    // Pass position to tiles component
    tilesRef.current.setHoverPosition({ x, y });
  };

  const handleTouchEnd = () => {
    // Let the internal component handle the timeout and cleanup
  };

  return (
    <section
      className="relative min-h-[600px] sm:min-h-[650px] md:min-h-[700px] lg:h-screen overflow-hidden flex items-center justify-center py-16 sm:py-20 md:py-24"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      {/* Tiles background */}
      <div className="absolute inset-0 z-0">
        <CanvasHeroTiles ref={tilesRef} />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-[1]"></div>

      {/* Content */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mt-16 sm:mt-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
          Your Ideas, Engineered to{' '}
          <span className="inline-block bg-primary-500 px-2 sm:px-4 py-1 drop-shadow-[0_0_15px_rgba(25,25,254,0.5)]">
            Thrive Digitally
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
          Build Your MVP with Unmatched Laravel Expertise
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="bg-primary-500 hover:bg-primary-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg shadow-[0_0_15px_rgba(25,25,254,0.5)] hover:shadow-[0_0_20px_rgba(25,25,254,0.7)] transition-all duration-300"
          >
            Book a Call →
          </a>
          <a
            href="#"
            className="border border-gray-600 hover:border-primary-400 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg hover:shadow-[0_0_15px_rgba(25,25,254,0.5)] transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
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
          </a>
        </div>

        <p className="text-gray-400 mt-4 text-sm sm:text-base">
          We&apos;re on it—expect a quick response!
        </p>
      </div>
    </section>
  );
};

export default Hero;
