import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const experienceSections = [
  {
    label: "Full-Time",
    items: [
      {
        id: 1,
        period: "2025, April — Present",
        title: "Software Engineer",
        company: "AuraML (DeepTech)",
        companyUrl: "https://in.linkedin.com/company/aura-ml",
        certificateUrl:"",
        description: [
          "Hosted core services on office network using static DNS and Wi-Fi bridge deployments.",
          "Automated cloud deployments with Terraform & Ansible for scalable infra provisioning.",
          "Built microservices including authentication (email verification), storage system in Rust, and the core WebRTC service.",
          "Configured API Gateway & Nginx reverse proxy for multi-service routing and TURN server setup.",
          "Developed backend services in Django and frontend modules in Next.js with GitHub Actions CI/CD.",
          "Deployed LLM-based solutions including a Sales WhatsApp Bot and automated USDA (3D environment) generation workflows.",
          "Contributed to architecture integrating C++, Django, and Next.js for performance-critical deeptech systems."
        ],
        technologies: [
          "Terraform","Ansible","Rust","C++","Django","Next.js","Docker",
          "GitHub Actions","Nginx","WebRTC","Microservices"
        ],
        side: "right" as const,
      },
      {
        id: 2,
        period: "2024, September — 2024, March",
        title: "Software Engineer",
        company: "IVY Homes",
        companyUrl: "https://www.linkedin.com/company/ivy-homes/",
        certificateUrl:"/ivyhomes.pdf",
        description: [
          "Built and deployed large-scale real estate data scraping pipelines.",
          "Scraped property data from MagicBricks, NoBroker, etc., using crawlers with IP rotation.",
          "Deployed scraping infrastructure on GCP with monitoring & recovery workflows.",
          "Implemented real-time sync using GCP Pub/Sub and RabbitMQ.",
          "Integrated ZeptoMail and WATI via Zoho CRM for marketing automation.",
          "Designed REST APIs and optimized DB schemas.",
          "Improved microservice scalability, observability, and deployments.",
          "Gained strong knowledge of API design, networking, distributed systems & large-scale scraping."
        ],
        technologies: [
          "Django (DRF)","Next.js","GCP","Docker","PostgreSQL","Nginx",
          "Linux","RabbitMQ","CRM Automation","Scraping","IP Rotation"
        ],
        side: "left" as const,
      },
      {
        id: 3,
        period: "May — August 2024",
        title: "Software Engineer",
        company: "MAQ Software (MNC)",
        companyUrl: "https://www.linkedin.com/company/maq-software/",
        certificateUrl:"/maq.png",
        description: [
          "Worked on Azure Data Lakehouse pipelines.",
          "Offloaded large datasets from Azure Databricks into the Lakehouse.",
          "Cleaned & transformed data using PySpark.",
          "Built Power BI dashboards and custom visual components."
        ],
        technologies: ["Azure","Databricks","PySpark","Power BI","Data Lakehouse","Python"],
        side: "right" as const,
      }
    ]
  },

  {
    label: "Internships",
    items: [
      {
        id: 101,
        period: "2023 Dec — 2024 Jan",
        title: "Full Stack & Security Intern (SIH Runner-Up)",
        company: "Smart India Hackathon 2023",
        companyUrl: "https://www.sih.gov.in/",
        certificateUrl:"",
        description: [
          "Secured Runner-Up position in the Smart India Hackathon (SIH) 2023.",
          "Worked on a cybersecurity problem statement focused on assessing ransomware vulnerability for universities.",
          "Built a prototype system that performed automated vulnerability analysis using Nmap scans across university IP ranges.",
          "Developed logic to detect open or vulnerable ports and map them to potential ransomware attack vectors.",
          "Contributed to the full-stack development of the dashboard used to display vulnerability scores and risk indicators.",
          "Collaborated with a team to design workflows for scanning, reporting, and risk scoring."
        ],
        technologies: [
          "Nmap",
          "Cybersecurity",
          "React",
          "Node.js",
          "Networking",
          "Port Scanning",
          "Full Stack"
        ],
        side: "left" as const,
      },
      {
        id: 102,
        period: "2023 Summer Break",
        title: "Software Developer Intern",
        company: "Param Innovations",
        companyUrl: "https://paramscience.org/",
        certificateUrl:"/Param.pdf",
        description: [
          "Worked primarily on the frontend for the Param Innovations web platform.",
          "Designed and implemented responsive UI components and improved overall site layout and user experience.",
          "Integrated Desmos graphing tools into the website for interactive math visualizations.",
          "Developed frontend features using modern JavaScript and CSS frameworks.",
          "Collaborated with backend developers to consume APIs and align frontend behavior with platform logic."
        ],
        technologies: ["JavaScript", "HTML", "CSS", "Desmos API", "UI/UX", "Frontend"],
        side: "right" as const,
      },
      {
      id: 103,
      period: "2023 Winter Semester",
      title: "Machine Learning Trainee",
      company: "Amazon ML Summer School",
      companyUrl: "https://www.aboutamazon.in/news/innovation/amazon-ml-summer-school",
      certificateUrl:"",
      description: [
        "Completed the Amazon Machine Learning Summer School, focused on core ML foundations.",
        "Studied key ML concepts including supervised learning, KNN, linear regression, logistic regression, and classification techniques.",
        "Implemented ML algorithms using Python and practiced hands-on model building.",
        "Gained practical understanding of training, evaluation, bias–variance tradeoff, and data preprocessing.",
        "Developed a strong foundation in applied ML and its real-world use cases."
      ],
      technologies: ["Python", "Machine Learning", "KNN", "Regression", "Classification", "Amazon ML School"],
      side: "left" as const,
    },

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
              <span className="text-primary font-mono text-xl">02.</span> Where I&apos;ve Worked
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
