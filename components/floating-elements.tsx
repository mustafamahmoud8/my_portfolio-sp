"use client"

import { motion } from "framer-motion"

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating orb 1 */}
      <motion.div
        className="absolute w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl -top-20 -right-20"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Floating orb 2 */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-20 left-0"
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Floating orb 3 */}
      <motion.div
        className="absolute w-60 h-60 bg-purple-500/10 rounded-full blur-3xl top-1/3 -left-32"
        animate={{
          y: [0, 30, 0],
          x: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  )
}
