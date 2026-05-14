"use client"

import { ExternalLink, Github } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { Button } from "./ui/button"

export function OpenSourceContributions() {
  const contributions = [
    {
      id: "twenty-16455",
      title: "Navigation Overflow Handling & Tooltip Accessibility",
      repo: "twentyhq/twenty",
      pr: "https://github.com/twentyhq/twenty/pull/16455",
      period: "2024",
      description:
        "Contributed UI improvements for navigation overflow handling and tooltip-based accessibility enhancements. Collaborated with maintainers through code reviews and CI validation workflows.",
      tech: ["TypeScript", "React", "NestJS", "PostgreSQL", "Redis"],
    },
  ]

  return (
    <section id="oss" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">

        <ScrollReveal delay={100}>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              <span className="text-primary font-mono text-xl">OSS</span> Open Source Contributions
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border via-primary/50 to-transparent"></div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* LEFT: contributions list */}
          <div className="lg:col-span-3 space-y-6">
            {contributions.map((c) => (
              <ScrollReveal key={c.id}>
                <article className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{c.title}</h3>
                      <a
                        href={`https://github.com/${c.repo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mt-1"
                      >
                        <Github className="w-4 h-4" />
                        {c.repo}
                      </a>
                      <p className="text-sm text-muted-foreground mt-3">{c.description}</p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {c.tech.map((t) => (
                          <span key={t} className="text-xs font-mono text-primary/80 bg-primary/5 px-2 py-1 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                      <span className="text-xs text-muted-foreground">{c.period}</span>
                      <Button asChild>
                        <a href={c.pr} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                          View PR
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal delay={200}>
              <div className="p-5 bg-card rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-sm">★</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">Twenty CRM Contributor</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Contributed to the open-source Twenty CRM platform built with TypeScript, React, NestJS, PostgreSQL, and Redis. Focused on UI improvements and accessibility enhancements. Actively collaborated with maintainers through code reviews and CI workflows.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="p-5 bg-card rounded-lg border border-border">
                <h4 className="text-sm font-semibold text-foreground mb-2">Want to view more?</h4>
                <p className="text-sm text-muted-foreground mb-4">Check my GitHub for a complete list of PRs and contributions.</p>
                <a href="https://github.com/abhay-86" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-mono">
                  View GitHub
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
