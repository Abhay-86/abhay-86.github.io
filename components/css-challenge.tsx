
import { ScrollReveal } from "./scroll-reveal"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
export default function CSSChallenge() {
  return (
    <>
        <section id="css-challenge" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <ScrollReveal delay={50}>
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        <span className="text-primary font-mono text-xl">02.</span> Fun with CSS
                        </h2>
                        <div className="flex-1 h-px bg-gradient-to-r from-border via-primary/50 to-transparent"></div>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={50}>
                    <p className="text-muted-foreground leading-relaxed mb-12 text-pretty">
                        For fun I recreate CSS challenge art using Tailwind CSS — check out <a href="https://cssbattle.dev/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary-foreground transition-colors">CSS Battle</a> and my live demos on <a href="https://abhay-86.github.io/css-challenges/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary-foreground transition-colors">GitHub Pages</a> and source code <a href="https://github.com/Abhay-86/css-challenges.git" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary-foreground transition-colors">Github Repo</a>
                    </p>

                </ScrollReveal>

                <ScrollReveal delay={50}>
                    <a
                        href="https://abhay-86.github.io/css-challenges/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block border border-border rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-xl"
                    >
                        <AspectRatio ratio={16 / 9} className="w-full rounded-lg bg-white relative">
                            <Image
                                src="/css-challenge1.png"
                                alt="CSS Art Challenge - opens in a new tab"
                                fill
                                className="object-contain object-center bg-white"
                                sizes="(max-width: 640px) 100vw, 800px"
                                priority
                            />
                        </AspectRatio>
                    </a>
                </ScrollReveal>
            </div>
        </section>
    </>
  )
}