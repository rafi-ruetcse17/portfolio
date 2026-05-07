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
    <section id="about" ref={sectionRef} className="py-24 px-4 bg-card border-b border-border">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-12">
          <div className="border-b border-border pb-4">
            <h2 className="text-3xl font-bold text-foreground">About Me</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                I am a Full Stack Software Engineer based in Dhaka, Bangladesh, with a deep interest in building scalable web applications and contributing to the open-source ecosystem.
              </p>

              <p className="text-foreground/70 leading-relaxed">
                Currently, I am working at <span className="text-primary font-bold">AppsCode</span>, where I focus on cloud-native observability. My work involves enhancing user engagement through performance optimization and integrating modern tools like Perses and ClickHouse into enterprise platforms.
              </p>

              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold text-foreground">Key Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                    <span>2000+ programming problems solved on competitive platforms</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                    <span>Contributor to CNCF projects (Perses, ClickHouse)</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                    <span>Specialized in MERN, Vue.js, and Cloud Native solutions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 gap-4">
              <div className="p-6 rounded-xl bg-background border border-border shadow-sm">
                <div className="text-3xl font-bold text-primary mb-1">2+</div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Years Exp.</p>
              </div>
              <div className="p-6 rounded-xl bg-background border border-border shadow-sm">
                <div className="text-3xl font-bold text-primary mb-1">2000+</div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Problems Solved</p>
              </div>
              <div className="p-6 rounded-xl bg-background border border-border shadow-sm">
                <div className="text-3xl font-bold text-primary mb-1">20+</div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
