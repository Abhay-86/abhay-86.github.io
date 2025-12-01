import { Github, ExternalLink, Folder } from "lucide-react"
import Image from "next/image"

const featuredProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with cart functionality, user authentication, payment processing with Stripe, and an admin dashboard for managing products and orders.",
    image: "/placeholder.svg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that helps users create blog posts, social media content, and marketing copy using OpenAI's GPT API.",
    image: "/placeholder.svg",
    technologies: ["Next.js", "OpenAI API", "Prisma", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
]

const otherProjects = [
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather dashboard with location-based forecasts and interactive maps.",
    technologies: ["React", "OpenWeather API", "Mapbox"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 5,
    title: "Portfolio Template",
    description: "A customizable portfolio template for developers and designers.",
    technologies: ["Next.js", "Framer Motion", "MDX"],
    github: "https://github.com",
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat app with private messaging and group channels.",
    technologies: ["Socket.io", "Express", "React"],
    github: "https://github.com",
    live: "https://example.com",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl">03.</span> Some Things I&apos;ve Built
          </h2>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${index % 2 === 1 ? "md:text-right" : ""}`}
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
                className={`md:col-span-6 ${
                  index % 2 === 1 ? "md:col-start-1 md:row-start-1" : "md:col-start-6"
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
                  className={`flex flex-wrap gap-3 mb-4 font-mono text-xs text-muted-foreground ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className={`flex gap-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
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
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold text-foreground">Other Noteworthy Projects</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card p-6 rounded-lg border border-border hover:border-primary/50 hover:-translate-y-2 transition-all duration-300"
            >
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
          ))}
        </div>
      </div>
    </section>
  )
}
