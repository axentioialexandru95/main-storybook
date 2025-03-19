"use client";

import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { CanvasTiles, CanvasTilesRef } from "@/components/ui/canvas-tiles";

export const CanvasHeroTiles = forwardRef<CanvasTilesRef>((_, ref) => {
  const internalTilesRef = useRef<CanvasTilesRef>(null);
  
  // Forward the internal ref methods to the parent component
  useImperativeHandle(ref, () => ({
    setHoverPosition: (position) => {
      if (internalTilesRef.current) {
        internalTilesRef.current.setHoverPosition(position);
      }
    }
  }), []);
  
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
  
  return (
    <div 
      className="w-full h-full min-h-screen"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <CanvasTiles 
        ref={internalTilesRef}
        rows={22} 
        cols={22}
        className="absolute inset-0 w-full h-full"
        primaryColor="rgba(25, 25, 254, 0.6)"     // Brighter blue to match the blue in screenshot
        secondaryColor="rgba(90, 90, 90, 0.05)"   // Slightly more visible grid
      />
    </div>
  );
});

CanvasHeroTiles.displayName = "CanvasHeroTiles"; 