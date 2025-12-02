"use client"

import { Github, Linkedin, Twitter, Mail, Instagram, ArrowDown } from "lucide-react"
import Image from "next/image"
import { AnimatedText } from "./animated-text"
import { ScrollReveal } from "./scroll-reveal"
import { MagneticButton } from "./magnetic-button"

const socialLinks = [
  { icon: Github, href: "https://github.com/abhay-86", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/abhay-singh-patel-04b30b209/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/abhay__0806/", label: "Instagram" },
  { icon: Mail, href: "mailto:abhaysinghpatel690@gmail.com", label: "Email" },
]

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <ScrollReveal delay={100}>
            <p className="text-primary font-mono text-xl">Hi, my name is</p>
          </ScrollReveal>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance">
            <AnimatedText text="Abhay" delay={200} />
          </h1>

          <ScrollReveal delay={400}>
  <h3 className="text-lg md:text-xl italic text-muted-foreground leading-relaxed text-balance">
    “Most problems aren&apos;t impossible—they&apos;re just waiting for someone to take action. 
    I&apos;m someone who enjoys being that action-taker.”
  </h3>
</ScrollReveal>



          <ScrollReveal delay={500}>
            <p className="text-muted-foreground max-w-xl leading-relaxed text-pretty">
  I&apos;m Abhay, a B.Tech CSE graduate from IIT Bhilai and currently working at AuraML. I&apos;m passionate about learning new technologies and building products that can create real impact.
</p>

          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((link, i) => (
                <MagneticButton
                  key={link.label}
                  href={link.href}
                  className="group p-3 text-muted-foreground hover:text-primary rounded-lg transition-colors"
                >
                  <link.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </MagneticButton>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <div className="pt-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-primary text-primary rounded hover:bg-primary hover:text-primary-foreground transition-all font-mono text-sm"
              >
                Check out my work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300} direction="left" className="relative hidden lg:block">
          <div className="relative w-80 h-80 mx-auto group">
            {/* Animated border with blue glow */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            <div className="relative w-full h-full rounded-lg overflow-hidden bg-secondary">
              <Image
                src="/Profile.jpeg"
                alt="Profile"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300" />
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
