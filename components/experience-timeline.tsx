import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    id: 1,
    period: "2023 — Present",
    title: "Senior Frontend Engineer",
    company: "Tech Company",
    companyUrl: "https://example.com",
    description:
      "Build and maintain critical components used to construct frontend. Work closely with cross-functional teams to implement and advocate for best practices in web accessibility.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    side: "right" as const,
  },
  {
    id: 2,
    period: "2021 — 2023",
    title: "Full Stack Developer",
    company: "Digital Agency",
    companyUrl: "https://example.com",
    description:
      "Developed and shipped highly interactive web applications for clients. Architected and implemented backend services using Node.js and PostgreSQL.",
    technologies: ["Node.js", "React", "PostgreSQL", "AWS"],
    side: "left" as const,
  },
  {
    id: 3,
    period: "2019 — 2021",
    title: "Frontend Developer",
    company: "Startup Inc",
    companyUrl: "https://example.com",
    description:
      "Collaborated with designers and product managers to build user interfaces for the company's flagship product. Implemented responsive designs and animations.",
    technologies: ["JavaScript", "Vue.js", "SCSS", "REST APIs"],
    side: "right" as const,
  },
  {
    id: 4,
    period: "2017 — 2019",
    title: "Junior Developer",
    company: "Web Studio",
    companyUrl: "https://example.com",
    description:
      "Started my professional journey building websites and learning modern web technologies. Contributed to various client projects and internal tools.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    side: "left" as const,
  },
]

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl">02.</span> Where I've Worked
          </h2>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block"></div>
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:hidden"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-start gap-8 ${exp.side === "left" ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-2 z-10 ring-4 ring-background"></div>

                {/* Content card */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    exp.side === "left" ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    <span className="text-sm font-mono text-primary">{exp.period}</span>
                    <h3 className="text-xl font-semibold text-foreground mt-2 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors mt-1"
                    >
                      {exp.company}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <p className="text-muted-foreground mt-4 leading-relaxed text-sm">{exp.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-0 font-mono text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
