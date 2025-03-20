'use client';

import React, { useRef, forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import { CanvasTiles, CanvasTilesRef } from '@/components/ui/canvas-tiles';

type CanvasHeroTilesProps = object;

export const CanvasHeroTiles = forwardRef<CanvasTilesRef, CanvasHeroTilesProps>((_, ref) => {
  const internalTilesRef = useRef<CanvasTilesRef>(null);
  const [gridSize, setGridSize] = useState({ rows: 22, cols: 22 });

  // Adjust grid size based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Mobile
        setGridSize({ rows: 12, cols: 12 });
      } else if (window.innerWidth < 1024) {
        // Tablet
        setGridSize({ rows: 16, cols: 16 });
      } else {
        // Desktop
        setGridSize({ rows: 22, cols: 22 });
      }
    };

    // Set initial size
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Forward the internal ref methods to the parent component
  useImperativeHandle(
    ref,
    () => ({
      setHoverPosition: (position) => {
        if (internalTilesRef.current) {
          internalTilesRef.current.setHoverPosition(position);
        }
      },
    }),
    []
  );

  // Add mouse movement tracking to trigger hover animations
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!internalTilesRef.current) return;

    // Get position relative to the container
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Pass position to canvas tiles component
    internalTilesRef.current.setHoverPosition({ x, y });
  };

  const handleMouseLeave = () => {
    if (internalTilesRef.current) {
      internalTilesRef.current.setHoverPosition(null);
    }
  };

  // Add touch event handlers for mobile support
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!internalTilesRef.current || e.touches.length === 0) return;

    // Get position relative to the container
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    // Pass position to canvas tiles component
    internalTilesRef.current.setHoverPosition({ x, y });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!internalTilesRef.current || e.touches.length === 0) return;

    // Get position relative to the container
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    // Pass position to canvas tiles component
    internalTilesRef.current.setHoverPosition({ x, y });
  };

  const handleTouchEnd = () => {
    // Let the internal component handle the timeout and cleanup
    // No need to immediately set position to null
  };

  return (
    <div
      className="w-full h-full min-h-screen"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <CanvasTiles
        ref={internalTilesRef}
        rows={gridSize.rows}
        cols={gridSize.cols}
        className="absolute inset-0 w-full h-full"
        primaryColor="rgba(25, 25, 254, 0.6)" // Brighter blue to match the blue in screenshot
        secondaryColor="rgba(90, 90, 90, 0.05)" // Slightly more visible grid
      />
    </div>
  );
});

CanvasHeroTiles.displayName = 'CanvasHeroTiles';
