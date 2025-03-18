"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TilesProps {
  className?: string
  rows?: number
  cols?: number
  tileClassName?: string
  tileSize?: "sm" | "md" | "lg"
  animated?: boolean
}

const tileSizes = {
  sm: "w-8 h-8",
  md: "w-9 h-9 md:w-12 md:h-12",
  lg: "w-12 h-12 md:w-16 md:h-16",
}

export function Tiles({
  className,
  rows = 100,
  cols = 10,
  tileClassName,
  tileSize = "md",
  animated = true,
}: TilesProps) {
  const rowsArray = new Array(rows).fill(1)
  const colsArray = new Array(cols).fill(1)
  const [hoveredTile, setHoveredTile] = useState<{ row: number, col: number } | null>(null)
  const [randomTiles, setRandomTiles] = useState<Array<{ row: number, col: number }>>([])

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
      }, 800)
    }, 3000)

    return () => clearInterval(interval)
  }, [rows, cols, animated])

  const isTileActive = (row: number, col: number) => {
    if (hoveredTile?.row === row && hoveredTile?.col === col) return true
    return randomTiles.some(tile => tile.row === row && tile.col === col)
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
            whileHover={{
              borderColor: `rgba(25, 25, 254, 0.7)`,
              transition: { duration: 0 }
            }}
            animate={{
              borderColor: isTileActive(i, j) ? `rgba(25, 25, 254, 0.7)` : "rgba(255, 255, 255, 0.05)",
              transition: { duration: 0.3 }
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
} 