export function AboutSection() {
  const technologies = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Tailwind CSS",
  ]

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl">01.</span> About Me
          </h2>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Hello! I&apos;m a developer who loves creating things that live on the internet. My interest in web development
              started back in 2015 when I decided to try editing custom Tumblr themes — turns out hacking together a
              custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I&apos;ve had the privilege of working at a startup, a large corporation, and a
              digital agency. My main focus these days is building accessible, inclusive products and digital
              experiences.
            </p>
            <p>Here are a few technologies I&apos;ve been working with recently:</p>
            <ul className="grid grid-cols-2 gap-2 pt-2">
              {technologies.map((tech) => (
                <li key={tech} className="flex items-center gap-2 text-sm">
                  <span className="text-primary">▹</span>
                  <span className="font-mono">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
