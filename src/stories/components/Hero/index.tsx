"use client";

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
  
  return (
    <section 
      className="relative h-screen overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className='absolute top-0 left-0 w-full z-50'>
        <Navbar />
      </div>
      {/* Tiles background */}
      <div className="absolute inset-0 z-0">
        <CanvasHeroTiles ref={tilesRef} />
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-[1]"></div>
      
      {/* Content */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Your Ideas, Engineered to{' '}
          <span className="bg-primary-500 px-4 py-1 drop-shadow-[0_0_15px_rgba(25,25,254,0.5)]">Thrive Digitally</span>
        </h1>

        <p className="text-xl md:text-3xl text-gray-300 mb-8 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
          Build Your MVP with Unmatched Laravel Expertise
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg text-lg shadow-[0_0_15px_rgba(25,25,254,0.5)] hover:shadow-[0_0_20px_rgba(25,25,254,0.7)] transition-all duration-300">
            Book a Call →
          </button>
          <button className="border border-gray-600 hover:border-primary-400 text-white px-8 py-3 rounded-lg text-lg hover:shadow-[0_0_15px_rgba(25,25,254,0.5)] transition-all duration-300">
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
