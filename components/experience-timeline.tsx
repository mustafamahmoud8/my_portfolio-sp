"use client"

import { motion } from "framer-motion"
import { Briefcase, MapPin } from "lucide-react"

const experiences = [
  {
    role: "Flutter Developer & Full Stack Engineer",
    company: "Freelance",
    location: "Cairo, Egypt",
    period: "2023 - Present",
    description: "Building scalable mobile and web applications with clean architecture and modern technologies",
    achievements: [
      "Developed 5+ production-ready Flutter applications",
      "Full stack project implementation with .NET Core and React",
      "Mentored junior developers on clean architecture principles",
    ],
    technologies: ["Flutter", "React", ".NET Core", "Firebase", "SQL Server"],
  },
  {
    role: "Graduate Project - Smart Health Platform",
    company: "University",
    location: "Cairo, Egypt",
    period: "2023",
    description: "Comprehensive education platform with interactive learning modules and responsive design",
    achievements: [
      "Built full-stack education platform",
      "Implemented real-time user authentication",
      "Created responsive UI for all devices",
    ],
    technologies: ["Full Stack", "Clean Architecture", "Responsive Design"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
}

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience & Journey
          </span>
        </h2>
        <p className="text-slate-400 text-lg">My professional growth and key milestones</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative"
      >
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`flex flex-col md:flex-row gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex md:w-1/2 justify-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900 mt-6" />
              </div>

              {/* Content */}
              <div className={`md:w-1/2 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-xl hover:border-cyan-500/50 transition-colors"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Briefcase className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">
                        <span>{exp.company}</span>
                        <span>•</span>
                        <MapPin size={14} className="inline" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-500 text-sm mb-3">{exp.period}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">{exp.description}</p>

                  <div className="mb-3">
                    <p className="text-xs text-slate-500 font-semibold mb-2">Key Achievements:</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((ach, j) => (
                        <li key={j} className="text-sm text-slate-400">
                          <span className="text-cyan-400 mr-2">▸</span>
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, j) => (
                      <span
                        key={j}
                        className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-300 rounded border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
