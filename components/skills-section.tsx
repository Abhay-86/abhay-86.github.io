const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Figma", "CI/CD"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl">04.</span> Skills & Technologies
          </h2>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-muted-foreground group">
                    <span className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform"></span>
                    <span className="group-hover:text-foreground transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
