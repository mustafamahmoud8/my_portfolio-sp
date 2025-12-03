"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-4">
            I'm a Flutter Developer and Full Stack Engineer specializing in building scalable, high-performance
            applications with clean architecture. Based in Cairo, Egypt, I bring a blend of mobile expertise and
            comprehensive backend knowledge.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-4">
            With expertise in mobile development, backend systems, and modern web technologies, I transform requirements
            into measurable results. I lead features from design to deployment, ensuring code quality and user
            satisfaction through meticulous testing and optimization.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            Passionate about ownership, problem-solving, and mentoring fellow developers. When not coding, I explore
            emerging technologies and contribute to the developer community through knowledge sharing.
          </p>
          <motion.a
            whileHover={{ x: 5 }}
            href="#contact"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
          >
            Let's collaborate <ArrowRight size={20} />
          </motion.a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur border border-cyan-500/20 p-6 rounded-xl hover:border-cyan-500/50 transition-colors"
          >
            <h3 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                📱
              </span>
              Mobile
            </h3>
            <p className="text-slate-400 text-sm">
              Flutter, Dart, Firebase, Clean Architecture, BLoC, Provider, Riverpod
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur border border-blue-500/20 p-6 rounded-xl hover:border-blue-500/50 transition-colors"
          >
            <h3 className="text-blue-400 font-semibold mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                🌐
              </span>
              Frontend
            </h3>
            <p className="text-slate-400 text-sm">React, Angular, Next.js, TypeScript, Tailwind CSS, Framer Motion</p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur border border-orange-500/20 p-6 rounded-xl hover:border-orange-500/50 transition-colors"
          >
            <h3 className="text-orange-400 font-semibold mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                ⚙️
              </span>
              Backend & Databases
            </h3>
            <p className="text-slate-400 text-sm">
              .NET Core, Node.js, Python, SQL Server, MongoDB, Redis, RESTful APIs
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
