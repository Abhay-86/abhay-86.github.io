import { Github, ExternalLink, Folder } from "lucide-react"
import Image from "next/image"
import { ScrollReveal } from "./scroll-reveal"

const featuredProjects = [
  {
    id: 1,
    title: "Job Apply with Bulk Mail",
    description:
      "An automated job application platform that scrapes real-time job data from LinkedIn and filters for 24-hour fresh postings. Unlike other platforms, users can create custom email templates and get direct HR contact information for targeted outreach. Features include bulk email automation through Google integration, secure payment processing via Razorpay, and message queuing with RabbitMQ. Successfully generated ₹45k+ revenue through individual client deployments and currently being optimized for public launch.",
    image: "/JobApply.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "RabbitMQ", "LinkedIn Scraping", "Google APIs", "Razorpay", "Email Automation"],
    github: "https://github.com/abhay-86/Learning",
    live: "",
    featured: true,
  },
  {
    id: 2,
    title: "AI-powered RFP management system",
    description:
      "An AI-powered RFP management system that helps users create and manage Request for Proposal (RFP) documents using using mistral AI API. User can send RFP to multiple vendors and get their responses in a single dashboard, with scoring and analysis of responses.",
    image: "/RFP.png",
    technologies: ["Next.js", "TypeScript", "Django-REST-FrameWork", "Mistral AI API", "PostgreSQL", "RabbitMQ"],
    github: "https://github.com/Abhay-86/Google_email_service",
    live: "https://youtu.be/GwLuRXdBerw",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A real-time weather dashboard that displays current temperature, humidity, wind speed, weather conditions, and a 7-day forecast. Users can search any city worldwide, and the dashboard updates instantly using live weather and geocoding APIs.",
    image: "/weather.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Open-Meteo API"],
    github: "https://github.com/abhay-86/weather-dashboard",
    live: "https://abhay-86.github.io/weather-dashboard/",
    featured: true,
  },
]

const otherProjects = [
  {
    id: 4,
    title: "Portfolio Template",
    description: "A customizable portfolio template for developers and designers.",
    technologies: ["Next.js", "Framer Motion", "MDX"],
    github: "https://abhay-86.github.io",
    live: "https://abhay-86.github.io/",
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat app with private messaging and group channels.",
    technologies: ["Socket.io", "Express", "React"],
    github: "",
    live: "",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal delay={50}>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              <span className="text-primary font-mono text-xl">03.</span> Some Things I&apos;ve Built
            </h2>
            <div className="flex-1 h-px bg-border"></div>
          </div>
        </ScrollReveal>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={50 + index * 100} direction={index % 2 === 1 ? "left" : "right"}>
              <div
                className="relative grid md:grid-cols-12 gap-4 items-center"
              >
                {/* Project Image */}
                <div className={`md:col-span-7 ${index % 2 === 1 ? "md:col-start-6" : ""} relative group`}>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <div className="relative overflow-hidden rounded-lg">
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={450}
                        className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </a>
                </div>

                {/* Project Content */}
                <div
                  className={`md:col-span-6 ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : "md:col-start-6"
                    } relative z-20`}
                >
                  <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </h3>
                  <div className="bg-card p-6 rounded-lg shadow-xl border border-border mb-4">
                    <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>
                  </div>
                  <ul
                    className="flex flex-wrap gap-3 mb-4 font-mono text-xs text-muted-foreground"
                  >
                    {project.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Other Projects */}
        <ScrollReveal delay={50}>
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold text-foreground">Other Noteworthy Projects</h3>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={50 + index * 100}>
              <div className="group bg-card p-6 rounded-lg border border-border hover:border-primary/50 hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{project.description}</p>
                <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
