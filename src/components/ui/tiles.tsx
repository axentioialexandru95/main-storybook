"use client"

import React, { useEffect, useState, useRef, forwardRef, useImperativeHandle } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TilesProps {
  className?: string
  rows?: number
  cols?: number
  tileClassName?: string
  tileSize?: "sm" | "md" | "lg"
  animated?: boolean
  constructAnimation?: boolean
}

export interface TilesRef {
  setHoveredTile: (position: { row: number, col: number } | null) => void
}

const tileSizes = {
  sm: "w-8 h-8",
  md: "w-9 h-9 md:w-12 md:h-12",
  lg: "w-12 h-12 md:w-16 md:h-16",
}

export const Tiles = forwardRef<TilesRef, TilesProps>(({
  className,
  rows = 100,
  cols = 100,
  tileClassName,
  tileSize = "md",
  animated = true,
  constructAnimation = true,
}: TilesProps, ref) => {
  const rowsArray = new Array(rows).fill(1)
  const colsArray = new Array(cols).fill(1)
  const [hoveredTile, setHoveredTile] = useState<{ row: number, col: number } | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Expose the setHoveredTile method to parent components
  useImperativeHandle(ref, () => ({
    setHoveredTile
  }), [])

  // Create a ripple effect when hovering
  const getRelativeDistanceToHoveredTile = (row: number, col: number) => {
    if (!hoveredTile) return null;
    
    // Calculate distance from this tile to hovered tile
    const rowDist = Math.abs(row - hoveredTile.row);
    const colDist = Math.abs(col - hoveredTile.col);
    const distance = Math.sqrt(rowDist * rowDist + colDist * colDist);
    
    // Only affect tiles within 7 units of the hovered tile for a wider glow
    const maxDistance = 7;
    if (distance > maxDistance) return null;
    
    // Return a value from 0-1 based on distance (closer = higher value)
    return 1 - (distance / maxDistance);
  }

  return (
    <div 
      ref={containerRef}
      className={cn(
        "grid w-full h-full relative",
        className
      )}
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`
      }}
    >
      {/* Global radial gradient that follows the hover */}
      {hoveredTile && (
        <motion.div 
          className="absolute pointer-events-none z-[1]"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(25,25,254,0.15) 0%, rgba(25,25,254,0.05) 50%, transparent 70%)",
            boxShadow: "0 0 30px 10px rgba(25,25,254,0.2)",
            transform: "translate(-50%, -50%)",
            top: `calc(${hoveredTile.row / rows * 100}% + ${100 / rows / 2}%)`,
            left: `calc(${hoveredTile.col / cols * 100}% + ${100 / cols / 2}%)`,
            filter: "blur(8px)"
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { duration: 0.2 }
          }}
          exit={{ opacity: 0 }}
        />
      )}

      {rowsArray.map((_, i) => (
        colsArray.map((_, j) => {
          const distanceValue = getRelativeDistanceToHoveredTile(i, j)
          const isHovered = hoveredTile?.row === i && hoveredTile?.col === j
          
          return (
            <motion.div
              key={`tile-${i}-${j}`}
              initial={{ opacity: 1 }}
              animate={{
                scale: isHovered ? 1.05 : 1,
                borderColor: distanceValue !== null
                  ? `rgba(25, 25, 254, ${Math.max(0.1, distanceValue * 0.8)})`
                  : "rgba(255, 255, 255, 0.05)",
                boxShadow: distanceValue !== null
                  ? `0 0 ${Math.floor(distanceValue * 15)}px rgba(25, 25, 254, ${distanceValue * 0.5})`
                  : "none",
                transition: { 
                  duration: 0.2,
                  ease: "easeOut"
                }
              }}
              whileHover={{
                scale: 1.1,
                zIndex: 30,
                transition: { 
                  duration: 0.2
                }
              }}
              className={cn(
                "border dark:bg-transparent relative overflow-visible",
                tileClassName,
                isHovered && "border-primary-500"
              )}
              onMouseEnter={() => setHoveredTile({ row: i, col: j })}
            />
          )
        })
      )).flat()}
    </div>
  )
})

Tiles.displayName = "Tiles" 