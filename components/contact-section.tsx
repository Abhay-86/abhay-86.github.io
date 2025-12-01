import { Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-primary text-sm mb-4">05. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Get In Touch</h2>
        <p className="text-muted-foreground leading-relaxed mb-12 text-pretty">
          I'm currently looking for new opportunities. Whether you have a question, want to collaborate on a project, or
          just want to say hi, my inbox is always open. I'll try my best to get back to you!
        </p>
        <a
          href="mailto:abhay@example.com"
          className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary rounded hover:bg-primary/10 transition-colors font-mono"
        >
          <Mail className="w-4 h-4" />
          Say Hello
        </a>
      </div>
    </section>
  )
}
