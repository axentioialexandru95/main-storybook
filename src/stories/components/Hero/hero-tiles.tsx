"use client";

import React, { useRef, useEffect, useState } from "react";
import { Tiles, type TilesRef } from "@/components/ui/tiles";

// Throttle function to limit the rate of mousemove event handling
function throttle<T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false;
  return function(this: unknown, ...args: Parameters<T>): void {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function HeroTiles() {
  const tilesRef = useRef<TilesRef>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentHoveredTile, setCurrentHoveredTile] = useState<{ row: number, col: number } | null>(null);
  
  // Handle mouse movement with throttling to improve performance
  const handleMouseMove = throttle((e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilesRef.current || !containerRef.current) return;
    
    // Calculate the position on the grid based on mouse coordinates
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element
    
    // Ensure we're within the bounds
    if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;
    
    // Convert to grid coordinates (14x14 grid)
    const gridX = Math.floor((x / rect.width) * 14);
    const gridY = Math.floor((y / rect.height) * 14);
    
    // Only update if the hovered tile has changed
    if (!currentHoveredTile || currentHoveredTile.row !== gridY || currentHoveredTile.col !== gridX) {
      const newHoveredTile = { row: gridY, col: gridX };
      setCurrentHoveredTile(newHoveredTile);
      tilesRef.current.setHoveredTile(newHoveredTile);
    }
  }, 16); // Approximately 60fps
  
  const handleMouseLeave = () => {
    if (tilesRef.current) {
      tilesRef.current.setHoveredTile(null);
      setCurrentHoveredTile(null);
    }
  };
  
  // Debug logging to verify hover state changes
  useEffect(() => {
    if (currentHoveredTile) {
      console.log(`Hovering tile at row: ${currentHoveredTile.row}, col: ${currentHoveredTile.col}`);
    }
  }, [currentHoveredTile]);
  
  return (
    <div 
      ref={containerRef}
      className="w-full h-full min-h-screen relative z-0"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Tiles 
        ref={tilesRef}
        rows={14} 
        cols={14}
        className="absolute inset-0 w-full h-full"
        tileClassName="border-neutral-800/70 hover:border-primary-500/70 transition-all duration-300 hover:neon-border hover:z-10"
        animated={true}
        constructAnimation={false}
      />
    </div>
  )
} 