"use client"

import { Suspense } from "react"
import Hero3D from "@/components/hero-3d"
import Navigation from "@/components/navigation"
import ProjectsShowcase from "@/components/projects-showcase"
import About from "@/components/about"
import SkillsSection from "@/components/skills-section"
import ExperienceTimeline from "@/components/experience-timeline"
import AchievementsSection from "@/components/achievements-section"
import ServicesSection from "@/components/services-section"
import Contact from "@/components/contact"
import SectionDivider from "@/components/section-divider"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-foreground relative z-10">
      <Navigation />

      <Suspense fallback={<div className="h-screen bg-slate-900" />}>
        <Hero3D />
      </Suspense>

      <div className="relative z-10">
        <About />
        <SectionDivider />

        <SkillsSection />
        <SectionDivider />

        <ExperienceTimeline />
        <SectionDivider />

        <AchievementsSection />
        <SectionDivider />

        <ServicesSection />
        <SectionDivider />

        <ProjectsShowcase />
        <SectionDivider />

        <Contact />

        {/* Footer */}
        <footer className="py-8 px-4 max-w-7xl mx-auto text-center text-slate-400 border-t border-slate-700">
          <p>Crafted with passion by Mustafa Mahmoud © {new Date().getFullYear()} • All rights reserved</p>
        </footer>
      </div>
    </main>
  )
}
