"use client"

import { useEffect, useRef } from "react"

export default function DynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
      size: number
      type: "bracket" | "curly" | "code" | "dot"
    }> = []

    const codeElements = ["</", "{", "}", ";", "()", "[]", "=>", "function", "const", "let"]
    const brackets = ["<", ">", "{", "}", "[", "]", "(", ")", ";"]

    const createParticle = () => {
      const type: "bracket" | "curly" | "code" | "dot" = ["bracket", "curly", "code", "dot"][
        Math.floor(Math.random() * 4)
      ] as any

      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: 0,
        maxLife: 100 + Math.random() * 200,
        size: 2 + Math.random() * 4,
        type,
      }
    }

    // Create initial particles
    for (let i = 0; i < 50; i++) {
      particles.push(createParticle())
    }

    let animationId: number

    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = "rgba(15, 23, 42, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]

        p.x += p.vx
        p.y += p.vy
        p.life += 1
        p.vy += 0.1 // gravity

        const opacity = 1 - p.life / p.maxLife

        // Draw based on type
        if (p.type === "dot") {
          ctx.fillStyle = `rgba(6, 182, 212, ${opacity * 0.8})`
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fill()
        } else if (p.type === "bracket") {
          ctx.fillStyle = `rgba(34, 197, 94, ${opacity * 0.6})`
          ctx.font = `${p.size * 2}px monospace`
          ctx.fillText(brackets[Math.floor(Math.random() * brackets.length)], p.x, p.y)
        } else if (p.type === "curly") {
          ctx.fillStyle = `rgba(59, 130, 246, ${opacity * 0.6})`
          ctx.font = `bold ${p.size * 2}px monospace`
          ctx.fillText(Math.random() > 0.5 ? "{" : "}", p.x, p.y)
        } else {
          ctx.fillStyle = `rgba(139, 92, 246, ${opacity * 0.5})`
          ctx.font = `${p.size}px monospace`
          ctx.fillText(codeElements[Math.floor(Math.random() * codeElements.length)], p.x, p.y)
        }

        // Remove dead particles and create new ones
        if (p.life >= p.maxLife) {
          particles.splice(i, 1)
          particles.push(createParticle())
        }
      }

      // Draw connecting lines between particles
      ctx.strokeStyle = "rgba(6, 182, 212, 0.1)"
      ctx.lineWidth = 1

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        background:
          "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 50%, rgba(15, 23, 42, 0.95) 100%)",
      }}
    />
  )
}
