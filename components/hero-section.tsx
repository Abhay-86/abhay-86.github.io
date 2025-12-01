import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/abhay-86", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/abhay-86", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/abhay_86", label: "Twitter" },
  { icon: Mail, href: "mailto:abhay@example.com", label: "Email" },
]

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-primary font-mono text-sm">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance">Abhay</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground leading-tight text-balance">
            I build things for the web.
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed text-pretty">
            I'm a full-stack developer passionate about crafting exceptional digital experiences. Currently focused on
            building accessible, human-centered products that make a difference.
          </p>
          <div className="flex items-center gap-4 pt-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <div className="pt-4">
            <a
              href="#projects"
              className="inline-flex px-6 py-3 bg-transparent border border-primary text-primary rounded hover:bg-primary/10 transition-colors font-mono text-sm"
            >
              Check out my work
            </a>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="relative w-80 h-80 mx-auto">
            <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4"></div>
            <div className="relative w-full h-full rounded-lg overflow-hidden bg-secondary">
              <img
                src="/placeholder-user.jpg"
                alt="Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-primary/20 hover:bg-transparent transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
