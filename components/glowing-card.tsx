"use client"

import type React from "react"

import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface GlowingCardProps {
  children: React.ReactNode
  className?: string
}

export function GlowingCard({ children, className }: GlowingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setGlowPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-300",
        isHovered && "border-primary/50 shadow-lg shadow-primary/10",
        className,
      )}
    >
      {/* Glow effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${glowPosition.x}px ${glowPosition.y}px, oklch(0.75 0.15 175 / 0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
