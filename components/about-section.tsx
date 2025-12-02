"use client"

import { ScrollReveal } from "./scroll-reveal"
import { GlowingCard } from "@/components/glowing-card"
import { useState } from "react"
import { Icon } from "@iconify/react";

export function AboutSection() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const technologies = [
    { name: "Python", icon: "🐍" },
    { name: "TypeScript", icon: "TS" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "⬢" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
  ]

  const highlights = [
    { number: "2+", label: "Years Experience", iconType: "emoji", icon: "💼" },
    { number: "4⭐", label: "CodeChef Rating", iconType: "iconify", icon: "simple-icons:codechef" },
    { number: "Pupil", label: "Codeforces Rank", iconType: "iconify", icon: "simple-icons:codeforces" },
    { number: "300+", label: "LeetCode Problems", iconType: "iconify", icon: "simple-icons:leetcode" },
    { number: "2nd", label: "SIH 2023", iconType: "emoji", icon: "🏆" },
    { number: "10+", label: "Projects Built", iconType: "emoji", icon: "🚀" },
  ]

 const journeyPoints = [
  {
    icon: "🏢",
    title: "Industry Experience",
    description:
      "I've worked across an MNC, a seed-stage startup, and a pre-seed deep-tech team — experiencing the contrast between structured corporate cycles and the fast, end-to-end ownership of early-stage startups.",
  },
  {
    icon: "🔐",
    title: "Diverse Engineering Work",
    description:
      "Built microservices, WebRTC systems, scraping pipelines, LLM workflows, and cloud-native deployments while exploring AI/ML, cybersecurity, and system design.",
  },
  {
    icon: "⚡",
    title: "What Drives Me",
    description:
      "I enjoy learning new technologies, working on impactful engineering problems, and shipping production-ready systems that actually get used.",
  },
]


  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER */}
        <ScrollReveal delay={100}>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              <span className="text-primary font-mono text-xl">01.</span> About Me
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border via-primary/50 to-transparent"></div>
          </div>
        </ScrollReveal>

        {/* GRID */}
        <div className="grid lg:grid-cols-5 gap-12">

          {/* LEFT SIDE */}
          <div className="lg:col-span-3 space-y-8">

            {/* Intro Card */}
            <ScrollReveal delay={150}>
              <GlowingCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl shrink-0">
                    👋
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Hello! I&apos;m Abhay
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      A software engineer who enjoys building scalable systems, real-time apps, and clean user experiences. 
                      I work across the full stack with strong focus on backend engineering, cloud infra, and automation.
                    </p>
                  </div>
                </div>
              </GlowingCard>
            </ScrollReveal>

            {/* Journey */}
            <div className="space-y-4">
              {journeyPoints.map((point, index) => (
                <ScrollReveal key={point.title} delay={200 + index * 100} direction="left">
                  <GlowingCard className="p-5 group">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                        {point.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {point.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                      </div>
                    </div>
                  </GlowingCard>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-2 space-y-8">

            {/* HIGHLIGHTS */}
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-3 gap-3">

                {highlights.map((stat, index) => (
                  <GlowingCard key={stat.label} className="p-4 text-center group">

                    {/* ICON */}
                    <div className="mb-2 flex justify-center">
                      {stat.iconType === "iconify" ? (
                        <Icon
                          icon={stat.icon}
                          className="w-7 h-7 text-foreground group-hover:scale-125 transition-transform duration-300"
                        />
                      ) : (
                        <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                          {stat.icon}
                        </span>
                      )}
                    </div>

                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>

                  </GlowingCard>
                ))}

              </div>
            </ScrollReveal>

            {/* TECH STACK */}
            {/* <ScrollReveal delay={300}>
              <GlowingCard className="p-6">
                <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-primary">▹</span> Tech Stack
                </h4>

                <div className="grid grid-cols-4 gap-3">
                  {technologies.map((tech, index) => (
                    <div
                      key={tech.name}
                      onMouseEnter={() => setHoveredTech(tech.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                      className="relative group cursor-pointer"
                    >
                      <div
                        className={`
                          w-full aspect-square rounded-xl flex items-center justify-center text-lg
                          bg-muted/50 border border-border transition-all duration-300
                          ${
                            hoveredTech === tech.name
                              ? "scale-110 border-primary shadow-lg shadow-primary/20"
                              : "hover:border-primary/50"
                          }
                        `}
                      >
                        <span className="group-hover:scale-110 transition-transform">{tech.icon}</span>
                      </div>

                      <div
                        className={`
                          absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs
                          bg-foreground text-background whitespace-nowrap transition-all duration-200
                          ${hoveredTech === tech.name ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}
                        `}
                      >
                        {tech.name}
                      </div>
                    </div>
                  ))}
                </div>
              </GlowingCard>
            </ScrollReveal> */}

            {/* CURRENTLY */}
            <ScrollReveal delay={400}>
              <GlowingCard className="p-5 border-primary/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-sm">✨</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">Currently</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Exploring distributed systems, real-time collaboration, and building developer tools.
                </p>
              </GlowingCard>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  )
}
