"use client"

import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  const socials = [
    { icon: Mail, label: "Email", href: "mailto:mustafaelzoghby7@gmail.com" },
    { icon: Github, label: "GitHub", href: "https://github.com/mustafamahmoud8" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/mustafa-elzoghby" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="contact" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-slate-950/50 border border-slate-700 rounded-2xl p-12 text-center relative overflow-hidden"
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let's Work Together
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          I'm always interested in hearing about new projects, opportunities, and collaborations. Whether you need a
          Flutter app, full-stack solution, or technical consultation, let's build something amazing together.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          href="mailto:mustafaelzoghby7@gmail.com"
          className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-cyan-500/50 mb-12"
        >
          Get In Touch
        </motion.a>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12 py-8 border-t border-b border-slate-700"
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="flex justify-center mb-2">
              <Mail className="text-cyan-400" size={24} />
            </div>
            <p className="text-slate-400 text-sm">Email</p>
            <a
              href="mailto:mustafaelzoghby7@gmail.com"
              className="text-cyan-400 hover:text-cyan-300 font-semibold break-all"
            >
              mustafaelzoghby7@gmail.com
            </a>
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="flex justify-center mb-2">
              <Phone className="text-cyan-400" size={24} />
            </div>
            <p className="text-slate-400 text-sm">Phone</p>
            <a href="tel:+201093421310" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              +20 109 3421 310
            </a>
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="flex justify-center mb-2">
              <MapPin className="text-cyan-400" size={24} />
            </div>
            <p className="text-slate-400 text-sm">Location</p>
            <p className="text-cyan-400 font-semibold">Cairo, Egypt</p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-6 flex-wrap"
        >
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.label}
                variants={itemVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gradient-to-br from-slate-700 to-slate-800 hover:from-cyan-500 hover:to-blue-500 text-slate-300 hover:text-white transition-all rounded-xl shadow-lg hover:shadow-cyan-500/50"
                aria-label={social.label}
              >
                <Icon size={24} />
              </motion.a>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
