"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "Fastrak Shipping Management System",
    description:
      "Full-stack shipping management system with real-time analytics dashboard, hub performance monitoring, and optimized database queries using Redis caching.",
    tags: [".NET Core", "Angular 17", "SQL Server", "Redis"],
    category: "fullstack",
    link: "https://github.com/mustafamahmoud8/Fastrak",
    github: "https://github.com/mustafamahmoud8/Fastrak",
  },
  {
    title: "Smart Health Education Platform",
    description:
      "Graduation project - comprehensive education platform featuring interactive learning modules, user authentication, responsive design, and clean architecture.",
    tags: ["Full Stack", "Clean Architecture", "Responsive"],
    category: "fullstack",
    link: "https://github.com/mustafamahmoud8/Smart-Health",
    github: "https://github.com/mustafamahmoud8/Smart-Health",
  },
  {
    title: "Online Learning Platform",
    description:
      "Modern responsive education platform with dynamic animations, interactive course slider, and modular structure built with Tailwind CSS.",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "SwiperJS"],
    category: "web",
    link: "https://guileless-dodol-0eab29.netlify.app/",
    github: "https://github.com/mustafamahmoud8/online-learning-platform",
  },
  {
    title: "Cairokee Ticket Website",
    description:
      "Responsive portfolio website for Cairokee featuring albums, events, biography, smooth animations, and component-based architecture.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    category: "web",
    link: "https://finalcairokee.netlify.app/",
    github: "https://github.com/mustafamahmoud8/Cairokee",
  },
  {
    title: "Clothing Store Website",
    description:
      "Minimalist, responsive e-commerce layout with product grid, navigation, and shopping cart using mobile-first design principles.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    category: "web",
    link: "https://clothing-store0.netlify.app/",
    github: "https://github.com/mustafamahmoud8/clothing-store",
  },
  {
    title: "Concert Ticket Booking Website",
    description:
      "Responsive ticket booking interface with event listings, booking buttons, scroll animations, and scalable layout for backend integration.",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "AOS"],
    category: "web",
    link: "https://concert-ticket-booking0.netlify.app/",
    github: "https://github.com/mustafamahmoud8/concert-ticket-booking",
  },
  {
    title: "Islami App",
    description:
      "Flutter application with Quran audio, offline caching, smooth API integration using Provider state management and shared preferences.",
    tags: ["Flutter", "Dart", "Firebase", "Provider"],
    category: "flutter",
    link: "https://github.com/mustafamahmoud8/Islami-App",
    github: "https://github.com/mustafamahmoud8/Islami-App",
  },
  {
    title: "Evently App",
    description:
      "Real-time events application with Firestore integration, Google Maps geolocation, and stable state management using Provider.",
    tags: ["Flutter", "Firebase", "Maps", "Geolocation"],
    category: "flutter",
    link: "https://github.com/mustafamahmoud8/Evently-App",
    github: "https://github.com/mustafamahmoud8/Evently-App",
  },
  {
    title: "News App",
    description:
      "Category-based news application with search functionality, offline caching, and optimized BLoC/MVVM architecture.",
    tags: ["Flutter", "Dart", "BLoC", "Caching"],
    category: "flutter",
    link: "https://github.com/mustafamahmoud8/News-App",
    github: "https://github.com/mustafamahmoud8/News-App",
  },
  {
    title: "Movie App",
    description:
      "TMDb API integration with offline mode using Hive, search functionality, and modular Cubit structure.",
    tags: ["Flutter", "Cubit", "Hive", "APIs"],
    category: "flutter",
    link: "https://github.com/mustafamahmoud8/Movie-App",
    github: "https://github.com/mustafamahmoud8/Movie-App",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Diverse portfolio showcasing mobile, web, and full-stack applications built with modern technologies
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://github.com/mustafamahmoud8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-slate-800/50 border border-slate-700 text-slate-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all"
        >
          <Github size={18} />
          View All on GitHub
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-center gap-3 mb-12 flex-wrap"
      >
        {["all", "flutter", "fullstack", "web"].map((filter) => (
          <motion.button
            key={filter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeFilter === filter
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                : "bg-slate-800/50 border border-slate-700 text-slate-300 hover:border-slate-600"
            }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-xl bg-slate-800/30 backdrop-blur border border-slate-700 hover:border-cyan-500 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <div className="h-40 bg-gradient-to-br from-slate-700 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>

              <div className="p-6 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30 hover:border-cyan-500/60 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold"
                    >
                      View Project
                      <ExternalLink size={14} className="ml-2" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                      title="View on GitHub"
                    >
                      <Github size={18} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
