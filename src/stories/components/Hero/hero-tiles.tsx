"use client";

import React, { useRef } from "react";
import { Tiles, TilesRef } from "@/components/ui/tiles";

export function HeroTiles() {
  const tilesRef = useRef<TilesRef>(null);
  
  return (
    <div 
      className="w-full h-full min-h-screen"
      onMouseMove={(e) => {
        if (!tilesRef.current) return;
        
        // Calculate the position on the grid based on mouse coordinates
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top;  // y position within the element
        
        // Convert to grid coordinates (14x14 grid)
        const gridX = Math.floor((x / rect.width) * 14);
        const gridY = Math.floor((y / rect.height) * 14);
        
        // Update hovered tile through the ref
        tilesRef.current.setHoveredTile({ row: gridY, col: gridX });
      }}
      onMouseLeave={() => {
        if (tilesRef.current) {
          tilesRef.current.setHoveredTile(null);
        }
      }}
    >
      <Tiles 
        ref={tilesRef}
        rows={14} 
        cols={14}
        className="absolute inset-0 w-full h-full"
        tileClassName="border-neutral-800/70 hover:border-primary-500/70 transition-all duration-300 hover:neon-border hover:z-10"
        animated={true}
        constructAnimation={true}
      />
    </div>
  )
} 