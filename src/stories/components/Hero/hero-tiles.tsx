"use client";

import React from "react";
import { Tiles } from "@/components/ui/tiles";

export function HeroTiles() {
  return (
    <div className="w-full h-full min-h-screen">
      <Tiles 
        rows={30} 
        cols={30}
        className="absolute inset-0 w-full h-full"
        tileClassName="border-neutral-800/30 hover:border-primary-500/70 transition-all duration-300 hover:neon-border hover:z-10"
        animated={true}
      />
    </div>
  )
} 