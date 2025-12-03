"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { PerspectiveCamera, Environment, Html } from "@react-three/drei"
import { motion } from "framer-motion"
import type * as THREE from "three"
import DynamicBackground from "./dynamic-bg"
import FloatingCodeElements from "./floating-code-elements"

function FloatingCube() {
  const meshRef = useRef<THREE.Mesh>(null)
  const rotationRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientY / window.innerHeight) * 0.3 - 0.15
      const y = (e.clientX / window.innerWidth) * 0.3 - 0.15
      rotationRef.current = { x, y }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += (rotationRef.current.x - meshRef.current.rotation.x) * 0.1
        meshRef.current.rotation.y += (rotationRef.current.y - meshRef.current.rotation.y) * 0.1
        meshRef.current.rotation.z += 0.001
      }
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhongMaterial color="#06b6d4" emissive="#0891b2" shininess={100} wireframe={false} />
    </mesh>
  )
}

function FloatingIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null)

  useEffect(() => {
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.002
        meshRef.current.rotation.y += 0.003
        meshRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.5
      }
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <mesh ref={meshRef} position={[-4, 2, -2]}>
      <icosahedronGeometry args={[1.2, 4]} />
      <meshPhongMaterial color="#3b82f6" emissive="#1e40af" shininess={80} />
    </mesh>
  )
}

function FloatingOctahedron() {
  const meshRef = useRef<THREE.Mesh>(null)

  useEffect(() => {
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.003
        meshRef.current.rotation.y += 0.002
        meshRef.current.position.y = Math.cos(Date.now() * 0.0008) * 0.5
      }
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <mesh ref={meshRef} position={[4, -1, -2]}>
      <octahedronGeometry args={[1.4, 2]} />
      <meshPhongMaterial color="#0ea5e9" emissive="#0369a1" shininess={80} />
    </mesh>
  )
}

function SceneContent() {
  return (
    <>
      <PerspectiveCamera position={[0, 0, 8]} fov={60} makeDefault />
      <Environment preset="dawn" />

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0ea5e9" />

      <FloatingCube />
      <FloatingIcosahedron />
      <FloatingOctahedron />

      <Html position={[0, -4, 0]}>
        <div className="text-center pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
          >
            Mustafa Mahmoud
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 mb-2"
          >
            Flutter Developer & Full Stack Engineer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg text-cyan-400 mb-8"
          >
            Crafting scalable apps with clean architecture and modern tech
          </motion.p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex justify-center items-center gap-2 mt-12 pointer-events-auto"
          >
            <div className="w-8 h-12 border-2 border-cyan-400 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 8] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-1 h-2 bg-cyan-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </Html>
    </>
  )
}

export default function Hero3D() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className="min-h-screen w-full relative overflow-hidden flex items-center justify-center py-12 md:py-0">
      <DynamicBackground />
      <FloatingCodeElements />

      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isMounted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex-1 text-white text-center md:text-left w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-cyan-400 font-semibold mb-2 text-base md:text-lg">Welcome to my portfolio</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-balance">
              Mustafa
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Mahmoud</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-base md:text-lg text-slate-300 mb-2">Flutter Developer & Full Stack Engineer</p>
            <p className="text-sm md:text-base text-slate-400 mb-8">
              Building scalable mobile apps and web applications with clean architecture, modern tech, and a passion for
              solving complex problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 md:px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-sm md:text-base"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "rgb(6, 182, 212)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "mailto:mustafaelzoghby7@gmail.com")}
              className="px-6 md:px-8 py-3 border-2 border-slate-600 text-white font-semibold rounded-lg hover:border-cyan-400 transition-all text-sm md:text-base"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isMounted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center items-center w-full"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(6, 182, 212, 0.3)",
                  "0 0 40px rgba(6, 182, 212, 0.5)",
                  "0 0 20px rgba(6, 182, 212, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full p-1"
            >
              <div className="w-full h-full bg-slate-900 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/1.jpg"
                  alt="Mustafa Mahmoud"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-cyan-400 rounded-full"
            animate={{ y: [0, 6] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  )
}
