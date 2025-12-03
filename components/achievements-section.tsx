"use client"

import { motion } from "framer-motion"
import { Trophy, Target, Users, GitBranch } from "lucide-react"
import { useState } from "react"

const achievements = [
  {
    icon: Trophy,
    number: "5+",
    label: "Production Apps",
    description: "Flutter applications shipped to users",
  },
  {
    icon: Target,
    number: "10+",
    label: "Projects Completed",
    description: "Full stack and mobile projects delivered",
  },
  {
    icon: Users,
    number: "3+",
    label: "Developers Mentored",
    description: "Guided through clean architecture principles",
  },
  {
    icon: GitBranch,
    number: "100+",
    label: "GitHub Contributions",
    description: "Active open source participation",
  },
]

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

export default function AchievementsSection() {
  const [counts, setCounts] = useState(achievements.map(() => 0))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Achievements & Impact
          </span>
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {achievements.map((achievement, i) => {
          const Icon = achievement.icon
          return (
            <motion.div
              key={i}
              variants={statVariants}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-slate-700 p-6 rounded-xl hover:border-cyan-500/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-shadow">
                <Icon className="text-white" size={24} />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl font-bold text-white mb-1">{achievement.number}</p>
              </motion.div>
              <p className="text-cyan-400 font-semibold mb-2">{achievement.label}</p>
              <p className="text-slate-400 text-sm">{achievement.description}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
