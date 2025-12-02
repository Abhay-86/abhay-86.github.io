import { Mail } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal delay={50}>
          <p className="font-mono text-primary text-sm mb-4">05. What&apos;s Next?</p>
        </ScrollReveal>

        <ScrollReveal delay={50}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Get In Touch</h2>
        </ScrollReveal>

        <ScrollReveal delay={50}>
          <p className="text-muted-foreground leading-relaxed mb-12 text-pretty">
            I&apos;m currently looking for new opportunities. Whether you have a question, want to collaborate on a project, or
            just want to say hi, my inbox is always open. I&apos;ll try my best to get back to you!
          </p>
        </ScrollReveal>

        <ScrollReveal delay={50}>
          <a
            href="mailto:abhaysinghpatel690@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary rounded hover:bg-primary hover:text-primary-foreground transition-all font-mono transform hover:scale-105"
          >
            <Mail className="w-4 h-4" />
            Say Hello
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
