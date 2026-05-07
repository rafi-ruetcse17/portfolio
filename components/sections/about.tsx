'use client'

import { useEffect, useRef, useState } from 'react'

export default function About() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="min-h-screen flex items-center py-20 px-4 relative">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl sm:text-5xl font-bold">
                <span className="text-muted-foreground">About </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a Full Stack Software Engineer based in Dhaka, Bangladesh, with a passion for building scalable web applications and contributing to open-source projects. Currently working as a Software Engineer at AppsCode, where I focus on cloud-native observability solutions.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With expertise in modern JavaScript frameworks, cloud technologies, and DevOps tools, I&apos;ve successfully optimized APIs by 30%, improved page load times by 27%, and enhanced SEO performance by 10%. I believe in writing clean, maintainable code and collaborating effectively with teams to deliver impactful solutions.
            </p>

            <div className="pt-4 space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Key Highlights</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>2000+ programming problems solved on competitive coding platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Contributed to CNCF projects including ClickHouse plugin for Perses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Built real-time features using Socket.IO and modern API patterns</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Image/Stats */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-200">
                <div className="text-4xl font-bold text-primary mb-2">2+</div>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-200">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-200">
                <div className="text-4xl font-bold text-primary mb-2">2000+</div>
                <p className="text-muted-foreground">Problems Solved</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-200">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-muted-foreground">Issues Resolved</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-200">
                <div className="text-4xl font-bold text-primary mb-2">8</div>
                <p className="text-muted-foreground">Tech Stacks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
