import { Github, ExternalLink, Folder } from "lucide-react"
import Image from "next/image"
import { ScrollReveal } from "./scroll-reveal"

const featuredProjects = [
  {
    id: 1,
    title: "Atomic – Perplexity-style AI Search Platform",
    description:
      "An AI-powered search platform integrating SearXNG with LLMs for contextual answer generation and web-augmented search. Designed a scalable asynchronous task pipeline using Celery and RabbitMQ for handling long-running AI inference workloads. Implemented containerized deployment using Docker with PostgreSQL for persistent storage and CI/CD pipelines for automated deployments.",
    image: "/atomic.png",
    technologies: ["Django REST Framework", "Next.js", "PostgreSQL", "Celery", "RabbitMQ", "Docker", "CI/CD", "SearXNG", "LLM"],
    github: "https://github.com/TheAstrelix",
    live: "https://atomic.theastrelix.com/",
    featured: true,
  },
  {
    id: 2,
    title: "Clarity – RAG-based Book Understanding Platform",
    description:
      "A document understanding platform enabling users to upload books and perform contextual semantic search and Q&A using RAG pipelines. Implemented semantic chunking using semantic-chunking library and generated embeddings using self-hosted bge-small-en model with vector storage in Qdrant. Integrated Mistral API and local LLM inference using Ollama for contextual retrieval and document-based question answering.",
    image: "/clarity.png",
    technologies: ["Django REST Framework", "PostgreSQL", "Celery", "RabbitMQ", "Qdrant", "Mistral LLM", "bge-small-en", "RAG", "Docker"],
    github: "https://github.com/TheAstrelix/seekClarity_backend",
    live: "https://clarity.theastrelix.com/",
    featured: true,
  },
  {
    id: 3,
    title: "VidMentor – YouTube RAG-based Video Understanding System",
    description:
      "A video understanding platform to process YouTube transcripts and generate contextual summaries and Q&A using RAG pipelines. Implemented semantic chunking and embeddings with Qdrant for vector retrieval. Designed retrieval pipelines with query expansion and multi-stage summarization for improved response accuracy. Integrated Mistral API and Ollama with 8K token context windows for transcript summarization.",
    image: "/vidmentor.png",
    technologies: ["Django REST Framework", "PostgreSQL", "Celery", "RabbitMQ", "Qdrant", "bge-small-en", "RAG", "Docker", "Mistral"],
    github: "https://github.com/TheAstrelix/AskTube_backend",
    live: "https://vidmentor.theastrelix.com/",
    featured: true,
  },
]

const otherProjects = [
  {
    id: 4,
    title: "Job Apply with Bulk Mail",
    description: "Automated job application platform with LinkedIn scraping, custom email templates, and Razorpay integration. Generated ₹45k+ revenue.",
    technologies: ["Next.js", "PostgreSQL", "RabbitMQ", "LinkedIn Scraping", "Razorpay"],
    github: "https://github.com/abhay-86/Learning",
    live: "",
  },
  {
    id: 5,
    title: "AI-powered RFP Management System",
    description: "RFP management system using Mistral AI for document creation and response analysis with scoring dashboard.",
    technologies: ["Next.js", "Django REST Framework", "Mistral AI", "PostgreSQL"],
    github: "https://github.com/Abhay-86/Google_email_service",
    live: "https://youtu.be/GwLuRXdBerw",
  },
  {
    id: 6,
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with 7-day forecast, city search, and live weather APIs.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Open-Meteo API"],
    github: "https://github.com/abhay-86/weather-dashboard",
    live: "https://abhay-86.github.io/weather-dashboard/",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal delay={50}>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              <span className="text-primary font-mono text-xl">04.</span> Some Things I&apos;ve Built
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
