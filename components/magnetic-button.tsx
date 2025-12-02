"use client"

import type React from "react"

import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  href?: string
}

export function MagneticButton({ children, className, href }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPosition({ x: x * 0.3, y: y * 0.3 })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <a
      ref={buttonRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden transition-transform duration-200 ease-out",
        className,
      )}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <span className="absolute inset-0 bg-primary/10 scale-0 rounded-lg group-hover:scale-100 transition-transform duration-300" />
      {children}
    </a>
  )
}
