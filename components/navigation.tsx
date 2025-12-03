"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = ["About", "Skills", "Experience", "Projects", "Contact"]

  const scrollToSection = (section: string) => {
    setIsOpen(false)
    const element = document.getElementById(section.toLowerCase())
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled ? "mt-6 md:mt-8" : "mt-4 md:mt-6"
        }`}
      >
        <motion.div
          animate={{ backdropFilter: isScrolled ? "blur(12px)" : "blur(6px)" }}
          className={`flex items-center justify-center gap-1 px-6 md:px-8 py-3 rounded-full border transition-all duration-300 ${
            isScrolled
              ? "bg-slate-900/80 border-slate-700/50 shadow-lg shadow-cyan-500/20"
              : "bg-slate-900/40 border-slate-700/30"
          }`}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer mr-4 hidden md:block"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            MM
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="text-slate-300 hover:text-cyan-400 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-slate-800/50 whitespace-nowrap"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-cyan-400 p-2">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 md:hidden bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-2xl overflow-hidden w-56"
          >
            <div className="p-4 space-y-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollToSection(link)}
                  className="block w-full text-left px-4 py-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors font-medium"
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </>
  )
}
