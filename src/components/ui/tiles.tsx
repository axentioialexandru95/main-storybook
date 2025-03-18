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
  cols = 10,
  tileClassName,
  tileSize = "md",
  animated = true,
  constructAnimation = true,
}: TilesProps, ref) => {
  const rowsArray = new Array(rows).fill(1)
  const colsArray = new Array(cols).fill(1)
  const [hoveredTile, setHoveredTile] = useState<{ row: number, col: number } | null>(null)
  const [randomTiles, setRandomTiles] = useState<Array<{ row: number, col: number }>>([])
  const [constructedTiles, setConstructedTiles] = useState<boolean[][]>([])
  const constructionCompleted = useRef(false)

  // Expose the setHoveredTile method to parent components
  useImperativeHandle(ref, () => ({
    setHoveredTile
  }), [])

  // Initialize construction state
  useEffect(() => {
    if (!constructAnimation || constructionCompleted.current) return

    // Initialize all tiles as not constructed
    const initialConstructedState = Array(rows).fill(null).map(() => Array(cols).fill(false))
    setConstructedTiles(initialConstructedState)

    // Start construction animation
    let completedTiles = 0
    const totalTiles = rows * cols
    
    // Create a bottom-to-top animation pattern
    // Sort tile coordinates by row (bottom to top)
    const tilesByPosition: {row: number, col: number}[] = []
    for (let j = 0; j < cols; j++) {
      for (let i = rows - 1; i >= 0; i--) {
        tilesByPosition.push({
          row: i,
          col: j
        })
      }
    }
    
    // Randomize slightly within each row group to make it less mechanical
    const tilesWithWave: {row: number, col: number, orderIndex: number}[] = tilesByPosition.map((tile, index) => {
      // Add a small random offset to make the animation more organic
      // Higher rows (lower index) get priority but with some natural randomness
      const rowWaveOffset = Math.sin((tile.col / cols) * Math.PI * 2) * 3;
      return {
        ...tile,
        orderIndex: index + rowWaveOffset
      }
    });
    
    tilesWithWave.sort((a, b) => a.orderIndex - b.orderIndex);
    
    // Determine animation duration
    const totalAnimationDuration = 1800 // milliseconds
    const tileDelay = totalAnimationDuration / (totalTiles)
    
    // Animate tiles from bottom to top with a wave pattern
    tilesWithWave.forEach((tile, index) => {
      setTimeout(() => {
        setConstructedTiles(prev => {
          const newState = [...prev.map(row => [...row])]
          if (!newState[tile.row][tile.col]) {
            newState[tile.row][tile.col] = true
            completedTiles++
            
            // When all tiles are complete
            if (completedTiles >= totalTiles) {
              constructionCompleted.current = true
            }
          }
          return newState
        })
      }, index * tileDelay)
    })
    
    return () => {
      // Animation cleanup happens automatically as the timeouts complete
      constructionCompleted.current = true
    }
  }, [rows, cols, constructAnimation])

  // Random tile animation effect
  useEffect(() => {
    if (!animated) return

    // Create a few random tiles to animate
    const createRandomTiles = () => {
      const tiles = []
      const count = Math.floor(Math.random() * 3) + 1 // 1-3 random tiles
      
      for (let i = 0; i < count; i++) {
        const randomRow = Math.floor(Math.random() * rows)
        const randomCol = Math.floor(Math.random() * cols)
        tiles.push({ row: randomRow, col: randomCol })
      }
      
      return tiles
    }

    // Update random tiles periodically
    const interval = setInterval(() => {
      setRandomTiles(createRandomTiles())
      
      setTimeout(() => {
        setRandomTiles([])
      }, 200)
    }, 3000)

    return () => clearInterval(interval)
  }, [rows, cols, animated])

  const isTileActive = (row: number, col: number) => {
    if (hoveredTile?.row === row && hoveredTile?.col === col) return true
    return randomTiles.some(tile => tile.row === row && tile.col === col)
  }

  const isTileConstructed = (row: number, col: number) => {
    if (!constructAnimation || constructionCompleted.current) return true
    return constructedTiles[row]?.[col] === true
  }

  // Create a ripple effect when hovering
  const getRelativeDistanceToHoveredTile = (row: number, col: number) => {
    if (!hoveredTile) return null;
    
    // Calculate distance from this tile to hovered tile
    const rowDist = Math.abs(row - hoveredTile.row);
    const colDist = Math.abs(col - hoveredTile.col);
    const distance = Math.sqrt(rowDist * rowDist + colDist * colDist);
    
    // Only affect tiles within 3 units of the hovered tile
    const maxDistance = 3;
    if (distance > maxDistance) return null;
    
    // Return a value from 0-1 based on distance (closer = higher value)
    return 1 - (distance / maxDistance);
  }

  return (
    <div 
      className={cn(
        "grid w-full h-full",
        className
      )}
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`
      }}
    >
      {rowsArray.map((_, i) => (
        colsArray.map((_, j) => (
          <motion.div
            key={`tile-${i}-${j}`}
            initial={constructAnimation ? { 
              opacity: 0,
              borderColor: "rgba(255, 255, 255, 0.05)",
              height: "0%"
            } : undefined}
            animate={{
              opacity: isTileConstructed(i, j) ? 1 : 0,
              height: isTileConstructed(i, j) ? "100%" : "0%",
              borderColor: isTileActive(i, j) 
                ? `rgba(25, 25, 254, 0.7)` 
                : getRelativeDistanceToHoveredTile(i, j) !== null
                  ? `rgba(25, 25, 254, ${(getRelativeDistanceToHoveredTile(i, j) || 0) * 0.5})` 
                  : "rgba(255, 255, 255, 0.05)",
              boxShadow: isTileActive(i, j) 
                ? "0 0 10px rgba(25, 25, 254, 0.4)" 
                : getRelativeDistanceToHoveredTile(i, j) !== null
                  ? `0 0 ${Math.floor((getRelativeDistanceToHoveredTile(i, j) || 0) * 8)}px rgba(25, 25, 254, ${(getRelativeDistanceToHoveredTile(i, j) || 0) * 0.3})` 
                  : "none",
              transition: { 
                duration: 0.5,
                ease: "easeOut",
                opacity: { duration: 0.6 },
                height: { duration: 0.7, ease: "easeInOut" },
                borderColor: { duration: 0.3 },
                boxShadow: { duration: 0.3 }
              }
            }}
            whileHover={{
              borderColor: `rgba(25, 25, 254, 0.7)`,
              zIndex: 10,
              boxShadow: "0 0 15px rgba(25, 25, 254, 0.5)",
              transition: { duration: 0.2 }
            }}
            className={cn(
              "border bg-transparent dark:bg-transparent relative",
              tileClassName,
              isTileActive(i, j) && "neon-border"
            )}
            onMouseEnter={() => setHoveredTile({ row: i, col: j })}
            onMouseLeave={() => setHoveredTile(null)}
          />
        ))
      )).flat()}
    </div>
  )
})

Tiles.displayName = "Tiles"