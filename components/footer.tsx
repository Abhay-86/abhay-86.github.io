import { Github, Linkedin, Twitter } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const socialLinks = [
  { icon: Github, href: "https://github.com/abhay-86", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/abhay-86", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/abhay_86", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <ScrollReveal delay={50}>
          <div className="flex gap-6 md:hidden">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={50}>
          <p className="text-muted-foreground text-sm font-mono text-center">Designed & Built by Abhay</p>
        </ScrollReveal>

        <ScrollReveal delay={50}>
          <p className="text-muted-foreground/60 text-xs font-mono">© {new Date().getFullYear()} All Rights Reserved</p>
        </ScrollReveal>
      </div>
    </footer>
  )
}
