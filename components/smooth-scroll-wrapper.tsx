"use client"

import type React from "react"

import { useEffect } from "react"

export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return <>{children}</>
}
