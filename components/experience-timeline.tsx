import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const experienceSections = [
  {
    label: "Full-Time",
    items: [
      {
        id: 1,
        period: "Apr 2025 — Present",
        title: "Software Engineer",
        company: "AuraML",
        companyUrl: "https://www.auraml.ai",
        certificateUrl:"",
        description: [
          "Developed asynchronous task queue for Image-to-3D processing APIs with real-time polling updates.",
          "Automated GPU instance provisioning using Terraform and Ansible for robotics simulations.",
          "Built microservices including Rust-based storage service and WebRTC communication service.",
          "Developed custom Omniverse Isaac Sim extensions using Omniverse SDK for scene and robot configuration.",
          "Integrated Isaac Sim with Text-to-3D pipelines and ROS2 communication using Zenoh routers.",
          "Designed centralized CI/CD pipeline with GitHub Actions for multi-microservice deployments.",
          "Implemented Keycloak-based OAuth 2.0 authentication and SSO via Google and GitHub."
        ],
        technologies: [
          "Terraform","Ansible","Rust","C++","Python","Django","Next.js","Docker",
          "GitHub Actions","Nginx","WebRTC","Microservices","Omniverse SDK","Isaac Sim","ROS2","Zenoh","OAuth 2.0","Keycloak"
        ],
        side: "right" as const,
      },
      {
        id: 2,
        period: "Nov 2024 — Apr 2025",
        title: "Software Engineer",
        company: "IVY Homes",
        companyUrl: "https://www.linkedin.com/company/ivy-homes/",
        certificateUrl:"/ivyhomes.pdf",
        description: [
          "Implemented Redis caching for CMS APIs, reducing data retrieval latency by 50%.",
          "Built backend APIs and automation workflows with Zoho Flow, WATI, and Zepto Mail for 70% of customer messaging.",
          "Designed and deployed data scraping pipelines on GCP for large-scale property datasets.",
          "Implemented GCP Pub/Sub messaging for real-time microservice communication.",
          "Designed scalable APIs and optimized PostgreSQL schemas for Next.js frontend modules."
        ],
        technologies: [
          "GCP","Redis","PostgreSQL","Django","Next.js","Pub/Sub","Zoho Flow","WATI","Zepto Mail","Data Pipelines","Python"
        ],
        side: "left" as const,
      },
      {
        id: 3,
        period: "May — Oct 2024",
        title: "Software Engineer",
        company: "MAQ Software",
        companyUrl: "https://www.linkedin.com/company/maq-software/",
        certificateUrl:"/maq.png",
        description: [
          "Worked on Azure Data Lakehouse for large-scale data storage and analytics.",
          "Cleaned and transformed datasets using PySpark.",
          "Developed Power BI dashboards and custom visualization cards."
        ],
        technologies: ["Azure","PySpark","Power BI","Data Lakehouse","Python","Databricks"],
        side: "right" as const,
      }
    ]
  },

  {
    label: "Internships",
    items: [
      {
        id: 101,
        period: "May — July 2023",
        title: "Web Developer Intern",
        company: "Param Innovations",
        companyUrl: "https://paramscience.org/",
        certificateUrl:"/Param.pdf",
        description: [
          "Built responsive static websites with optimization for SEO and performance.",
          "Developed frontend interfaces using Chakra UI and React hooks for accessible design.",
          "Optimized state management for faster rendering and user experience."
        ],
        technologies: ["React","Chakra UI","JavaScript","HTML/CSS","SEO Optimization"],
        side: "left" as const,
      },
      {
        id: 102,
        period: "Aug 2022",
        title: "Runner-up Developer",
        company: "Smart India Hackathon 2022 (NTRO)",
        companyUrl: "https://www.sih.gov.in/",
        certificateUrl:"",
        description: [
          "Developed end-to-end prototype for ransomware detection in university systems during 24-hour hackathon.",
          "Achieved Runner-up position in the national competition."
        ],
        technologies: ["Full Stack", "Security", "Rapid Prototyping"],
        side: "right" as const,
      },
      {
        id: 103,
        period: "Jan — Mar 2023",
        title: "Developer Intern",
        company: "Agronomist Agrotech (College Startup)",
        companyUrl: "#",
        certificateUrl:"",
        description: [
          "Worked on Raspberry Pi functionalities and enhancements.",
          "Contributed to web interface development using Next.js."
        ],
        technologies: ["Next.js","Raspberry Pi","IoT","Python"],
        side: "left" as const,
      }
    ]
  },

  {
    label: "Education",
    items: [
      {
        id: 201,
        period: "2020 — 2024",
        title: "B.Tech in Computer Science",
        company: "Indian Institute of Technology (IIT) Bhilai",
        companyUrl: "#",
        certificateUrl:"/degree.pdf",
        description: [
          "Studied CS fundamentals, algorithms, networking, OS & distributed systems.",
          "Built multiple academic and real-world projects.",
          "Active in coding, tech clubs & hackathons."
        ],
        technologies: ["C++","DSA","Python","DBMS","OS","Networks"],
        side: "right" as const,
      }
    ]
  }
]

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal delay={50}>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              <span className="text-primary font-mono text-xl">03.</span> Where I&apos;ve Worked
            </h2>
            <div className="flex-1 h-px bg-border"></div>
          </div>
        </ScrollReveal>

        <div className="space-y-24">
          {experienceSections.map((section) => (
            <div key={section.label}>
              <ScrollReveal>
                <h3 className="text-xl font-bold text-primary mb-10">{section.label}</h3>
              </ScrollReveal>

              <div className="relative">
                {/* Timeline vertical line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block"></div>
                <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:hidden"></div>

                <div className="space-y-12">
                  {section.items.map((exp, index) => (
                    <ScrollReveal
                      key={exp.id}
                      delay={200 + index * 100}
                      direction={exp.side === "left" ? "right" : "left"}
                    >
                      <div
                        className={`relative flex items-start gap-8 ${
                          exp.side === "left" ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-2 z-10 ring-4 ring-background"></div>

                        {/* Card */}
                        <div
                          className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                            exp.side === "left" ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                          }`}
                        >
                          <div className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                            <span className="text-sm font-mono text-primary">{exp.period}</span>
                            <div className="flex items-center justify-between mt-2">
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              {exp.title}
                            </h3>

                            {exp.certificateUrl && (
                              <a
                                href={exp.certificateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1 border border-primary text-primary text-xs rounded hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-105"
                              >
                                Certificate
                              </a>
                            )}
                          </div>

                          <a
                            href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors mt-1"
                            >
                              {exp.company}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                            <div className="text-muted-foreground mt-4 leading-relaxed text-sm">
                              {Array.isArray(exp.description) ? (
                                <ul className="list-disc pl-5 space-y-1">
                                  {exp.description.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                  ))}
                                </ul>
                              ) : (
                                <p>{exp.description}</p>
                              )}
                            </div>

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
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
