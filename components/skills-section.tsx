"use client"

import { motion } from "framer-motion"
import { Code2, Smartphone, Database, Zap } from "lucide-react"

const skillCategories = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    skills: ["Flutter", "Dart", "Firebase", "Clean Architecture", "BLoC", "Provider", "Riverpod"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code2,
    title: "Frontend",
    skills: ["React", "Angular", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Database,
    title: "Backend & Databases",
    skills: [".NET Core", "Node.js", "Python", "SQL Server", "MongoDB", "Redis"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Zap,
    title: "Tools & Practices",
    skills: ["RESTful APIs", "Git", "Clean Code", "SOLID Principles", "Agile", "Testing"],
    color: "from-green-500 to-emerald-500",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          A comprehensive toolkit spanning mobile, web, and backend technologies
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillCategories.map((category, i) => {
          const Icon = category.icon
          return (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-xl relative z-10 h-full hover:border-slate-600 transition-colors">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full hover:bg-slate-700 transition-colors"
                    >
                      {skill}
                    </span>
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
