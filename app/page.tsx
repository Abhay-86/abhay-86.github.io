import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/about-section"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { CursorGradient } from "@/components/cursor-gradient"
import { FloatingParticles } from "@/components/floating-particles"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <FloatingParticles />
      <CursorGradient />
      
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceTimeline />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}