"use client"

import { motion } from "framer-motion"
import { Smartphone, Globe, Zap, Code } from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Custom Flutter applications with clean architecture, optimized performance, and seamless user experiences",
    features: ["Native Performance", "Clean Architecture", "State Management", "Firebase Integration"],
  },
  {
    icon: Globe,
    title: "Full Stack Web",
    description: "End-to-end web solutions with modern frontend frameworks and robust backend systems",
    features: ["React/Next.js", ".NET Core Backend", "Database Design", "API Development"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Enhance your existing applications with optimization techniques and best practices",
    features: ["Code Profiling", "Caching Strategies", "Database Optimization", "Load Testing"],
  },
  {
    icon: Code,
    title: "Technical Consultation",
    description: "Expert guidance on architecture decisions, technology selection, and project strategy",
    features: ["Architecture Design", "Tech Stack Selection", "Code Reviews", "Team Mentoring"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Services I Offer
          </span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Comprehensive solutions tailored to your needs</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6"
      >
        {services.map((service, i) => {
          const Icon = service.icon
          return (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-xl relative z-10 h-full hover:border-cyan-500/50 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      <span className="text-sm text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
