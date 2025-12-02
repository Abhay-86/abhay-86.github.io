"use client"

import { useEffect, useState } from "react"

export function CursorGradient() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Main gradient blob with blue theme */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] transition-transform duration-100 ease-out"
        style={{
          background: "radial-gradient(circle, rgb(59 130 246 / 0.15) 0%, transparent 70%)",
          left: position.x - 300,
          top: position.y - 300,
        }}
      />
      {/* Secondary accent blob with blue theme */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px] transition-transform duration-200 ease-out"
        style={{
          background: "radial-gradient(circle, rgb(37 99 235 / 0.1) 0%, transparent 70%)",
          left: position.x - 200,
          top: position.y - 200,
        }}
      />
    </div>
  )
}
