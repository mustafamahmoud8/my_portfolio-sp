"use client"

import { motion } from "framer-motion"

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="h-1 max-w-xs mx-auto my-12 bg-gradient-to-r from-transparent via-cyan-500 to-transparent origin-center"
    />
  )
}
