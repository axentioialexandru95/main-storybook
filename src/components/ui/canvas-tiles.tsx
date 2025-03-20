'use client';

import React, { useEffect, useRef, forwardRef, useImperativeHandle, TouchEvent } from 'react';
import { cn } from '@/lib/utils';

interface CanvasTilesProps {
  className?: string;
  rows?: number;
  cols?: number;
  primaryColor?: string;
  secondaryColor?: string;
}

export interface CanvasTilesRef {
  setHoverPosition: (position: { x: number; y: number } | null) => void;
}

export const CanvasTiles = forwardRef<CanvasTilesRef, CanvasTilesProps>(
  (
    {
      className,
      rows = 14,
      cols = 14,
      primaryColor = 'rgba(5, 5, 50, 0.8)', // Much darker blue
      secondaryColor = 'rgba(90, 90, 90, 0.012)', // Even dimmer, nearly invisible
    }: CanvasTilesProps,
    ref
  ) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const hoverPosition = useRef<{ x: number; y: number } | null>(null);
    const animationFrameId = useRef<number | null>(null);
    const tilesData = useRef<{ x: number; y: number; width: number; height: number }[][]>([]);
    const fadeInProgress = useRef<number>(0);
    const lastTimestamp = useRef<number>(0);
    const hoverAnimationProgress = useRef<number>(0);
    const previousHoverPosition = useRef<{ x: number; y: number } | null>(null);
    const isTouching = useRef<boolean>(false);
    const touchTimeout = useRef<NodeJS.Timeout | null>(null);

    // Expose method to set hover position from parent component
    useImperativeHandle(
      ref,
      () => ({
        setHoverPosition: (position) => {
          previousHoverPosition.current = hoverPosition.current;
          hoverPosition.current = position;
          if (position && !previousHoverPosition.current) {
            // Reset animation progress when hover starts
            hoverAnimationProgress.current = 0;
          }
        },
      }),
      []
    );

    // Initialize and render canvas
    useEffect(() => {
      const canvas = canvasRef.current;
      const container = containerRef.current;

      if (!canvas || !container) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Set canvas dimensions to match container
      const resizeCanvas = () => {
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        // Recalculate tile dimensions
        const tileWidth = canvas.width / cols;
        const tileHeight = canvas.height / rows;

        // Store tile data for hit detection
        tilesData.current = Array(rows)
          .fill(0)
          .map((_, i) =>
            Array(cols)
              .fill(0)
              .map((_, j) => ({
                x: j * tileWidth,
                y: i * tileHeight,
                width: tileWidth,
                height: tileHeight,
              }))
          );
      };

      // Draw all tiles
      const drawTiles = (timestamp: number) => {
        if (!ctx || !canvas) return;

        // Calculate fade progress
        if (lastTimestamp.current === 0) {
          lastTimestamp.current = timestamp;
        }

        const deltaTime = timestamp - lastTimestamp.current;
        lastTimestamp.current = timestamp;

        // Increase fade-in speed - take only 1 second to complete instead of 3
        if (fadeInProgress.current < 1) {
          fadeInProgress.current += deltaTime / 1000;
          if (fadeInProgress.current > 1) fadeInProgress.current = 1;
        }

        // Update hover animation progress (speed up to cycle every 1 second)
        if (hoverPosition.current) {
          hoverAnimationProgress.current = (hoverAnimationProgress.current + deltaTime / 1000) % 1;
        } else {
          hoverAnimationProgress.current = 0;
        }

        // Calculate hover animation value (sine wave for smooth pulsation)
        const hoverAnimationValue = hoverPosition.current
          ? 0.5 + Math.sin(hoverAnimationProgress.current * Math.PI * 2) * 0.5
          : 0;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate tile dimensions
        const tileWidth = canvas.width / cols;
        const tileHeight = canvas.height / rows;

        // Draw each tile
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            const x = j * tileWidth;
            const y = i * tileHeight;

            // Calculate distance from hover position if exists
            let distanceRatio = 0;

            if (hoverPosition.current) {
              const tileX = x + tileWidth / 2;
              const tileY = y + tileHeight / 2;
              const dx = tileX - hoverPosition.current.x;
              const dy = tileY - hoverPosition.current.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              const maxDistance = Math.max(canvas.width, canvas.height) / 5; // Range of glow effect

              distanceRatio = Math.max(0, 1 - distance / maxDistance);
            }

            // Start completely transparent and gradually fade in to the dim secondary color
            const baseColor = interpolateColor(
              'rgba(255, 255, 255, 0)', // Completely transparent
              secondaryColor, // Dim final color
              fadeInProgress.current
            );

            // Only apply hover effects after fade-in is complete
            let borderColor = baseColor;

            if (fadeInProgress.current > 0.9 && distanceRatio > 0) {
              // Adjust the color intensity based on animation value for pulsating effect
              const animatedDistanceRatio = distanceRatio * (0.3 + hoverAnimationValue * 0.2);
              borderColor = interpolateColor(baseColor, primaryColor, animatedDistanceRatio);
            }

            ctx.strokeStyle = borderColor;
            ctx.lineWidth = 1;

            // Extremely minimal glow only when fully faded in and hovering
            if (fadeInProgress.current > 0.9 && distanceRatio > 0) {
              ctx.shadowColor = primaryColor;
              // Animate the shadow blur based on the hover animation
              const animatedBlur = 3 * distanceRatio * (0.8 + hoverAnimationValue * 0.4);
              ctx.shadowBlur = animatedBlur;
            } else {
              ctx.shadowBlur = 0;
            }

            ctx.strokeRect(x, y, tileWidth, tileHeight);
            ctx.shadowBlur = 0; // Reset shadow for next tile
          }
        }

        // Draw subdued radial gradient at hover position only after fade-in is complete
        if (hoverPosition.current && fadeInProgress.current > 0.9) {
          // Animate the gradient size based on hover animation
          const baseGradientRadius = Math.min(canvas.width, canvas.height) / 5;
          const animatedRadius = baseGradientRadius * (0.9 + hoverAnimationValue * 0.2);

          const gradient = ctx.createRadialGradient(
            hoverPosition.current.x,
            hoverPosition.current.y,
            0,
            hoverPosition.current.x,
            hoverPosition.current.y,
            animatedRadius
          );

          // Animate the gradient opacity based on hover animation
          const baseOpacity = 0.03;
          const animatedOpacity = baseOpacity * (0.8 + hoverAnimationValue * 0.4);

          // Use different color for touch devices to make it more visible
          const gradientColor = isTouching.current
            ? `rgba(25, 25, 254, ${animatedOpacity * 1.5})`
            : `rgba(5, 5, 50, ${animatedOpacity})`;

          gradient.addColorStop(0, gradientColor);
          gradient.addColorStop(0.5, `rgba(5, 5, 50, ${animatedOpacity / 3})`);
          gradient.addColorStop(1, 'rgba(5, 5, 50, 0)');

          ctx.globalCompositeOperation = 'lighter';
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(hoverPosition.current.x, hoverPosition.current.y, animatedRadius, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalCompositeOperation = 'source-over';
        }
      };

      // Interpolate between two colors
      const interpolateColor = (color1: string, color2: string, factor: number) => {
        // Parse rgba values
        const parseColor = (color: string) => {
          const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.\d+|\d+))?\)/);
          if (!match) return [0, 0, 0, 1];
          return [
            parseInt(match[1], 10),
            parseInt(match[2], 10),
            parseInt(match[3], 10),
            match[4] ? parseFloat(match[4]) : 1,
          ];
        };

        const c1 = parseColor(color1);
        const c2 = parseColor(color2);

        const r = Math.round(c1[0] + factor * (c2[0] - c1[0]));
        const g = Math.round(c1[1] + factor * (c2[1] - c1[1]));
        const b = Math.round(c1[2] + factor * (c2[2] - c1[2]));
        const a = c1[3] + factor * (c2[3] - c1[3]);

        return `rgba(${r}, ${g}, ${b}, ${a})`;
      };

      // Animation loop
      const animate = (timestamp: number) => {
        drawTiles(timestamp);
        animationFrameId.current = requestAnimationFrame(animate);
      };

      // Handle window resize
      window.addEventListener('resize', resizeCanvas);

      // Initialize and start animation
      resizeCanvas();
      animationFrameId.current = requestAnimationFrame(animate);

      // Clean up
      return () => {
        window.removeEventListener('resize', resizeCanvas);
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
        if (touchTimeout.current) {
          clearTimeout(touchTimeout.current);
        }
      };
    }, [rows, cols, primaryColor, secondaryColor]);

    // Handle mouse interaction
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      hoverPosition.current = { x, y };
    };

    const handleMouseLeave = () => {
      hoverPosition.current = null;
    };

    // Handle touch interactions for mobile devices
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
      if (!containerRef.current || e.touches.length === 0) return;

      isTouching.current = true;

      const rect = containerRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      hoverPosition.current = { x, y };

      // Clear any existing timeout
      if (touchTimeout.current) {
        clearTimeout(touchTimeout.current);
      }
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
      if (!containerRef.current || e.touches.length === 0) return;

      const rect = containerRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      hoverPosition.current = { x, y };

      // Clear any existing timeout
      if (touchTimeout.current) {
        clearTimeout(touchTimeout.current);
      }
    };

    const handleTouchEnd = () => {
      // Keep the hover effect for a short while after touch ends
      // for better visual experience on mobile
      if (touchTimeout.current) {
        clearTimeout(touchTimeout.current);
      }

      touchTimeout.current = setTimeout(() => {
        hoverPosition.current = null;
        isTouching.current = false;
      }, 500); // 500ms delay before fading out
    };

    return (
      <div
        ref={containerRef}
        className={cn('relative w-full h-full overflow-hidden', className)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      </div>
    );
  }
);

CanvasTiles.displayName = 'CanvasTiles';
