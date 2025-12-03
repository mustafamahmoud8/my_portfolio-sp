"use client"

import { motion } from "framer-motion"

export default function FloatingCodeElements() {
  const floatingItems = [
    { symbol: "</>", position: "top-20 left-10", delay: 0 },
    { symbol: "{", position: "top-1/3 right-20", delay: 0.5 },
    { symbol: "}", position: "bottom-1/3 left-1/4", delay: 1 },
    { symbol: "()", position: "top-1/2 right-1/4", delay: 1.5 },
    { symbol: "[];", position: "bottom-20 right-10", delay: 2 },
    { symbol: "=>", position: "top-2/3 left-1/3", delay: 0.3 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none -z-5 overflow-hidden">
      {floatingItems.map((item, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${item.position} text-3xl font-mono font-bold`}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            delay: item.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <span className="text-cyan-400/30">{item.symbol}</span>
        </motion.div>
      ))}
    </div>
  )
}
