'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronRight } from 'lucide-react'

const experiences = [
  {
    title: 'Software Engineer',
    company: 'AppsCode',
    period: 'Jul 2025 - Present',
    location: 'Dhaka, Bangladesh',
    description: 'Contributing to cloud-native observability solutions',
    highlights: [
      'Added ClickHouse plugin support to Perses (CNCF)',
      'Integrated Perses with AceCloud platform',
      'Improved cloud-native user engagement by 20%',
    ],
  },
  {
    title: 'Associate Software Engineer',
    company: 'ShellBeeHaken',
    period: 'Mar 2024 - Jun 2025',
    location: 'Dhaka, Bangladesh',
    description: 'Full-Stack Development in Agile Environment',
    highlights: [
      'Optimized API performance by 30% through pagination',
      'Reduced page load time by 27% with optimization',
      'Implemented real-time chat using Socket.IO',
      'Improved SEO by 10% and server response time by 17%',
    ],
  },
  {
    title: 'Trainee Software Engineer',
    company: 'ShellBeeHaken',
    period: 'Sep 2023 - Feb 2024',
    location: 'Dhaka, Bangladesh',
    description: 'Building foundational skills in web development',
    highlights: [
      'Developed Twitter Clone with authentication',
      'Built CRUD applications using MERN',
      'Mastered Flexbox and Grid layouts',
    ],
  },
]

export default function Experience() {
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
    <section id="experience" ref={sectionRef} className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-12">
          <div className="border-b border-border pb-4">
            <h2 className="text-3xl font-bold text-foreground">Experience</h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >
                {/* Accent bar on the left like LinkedIn cards often have in some contexts, or just a clean card */}
                <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-foreground leading-tight">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-semibold text-primary">{exp.company}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground pt-1">
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed mb-6 font-medium">
                  {exp.description}
                </p>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 flex-shrink-0 group-hover/item:bg-primary transition-colors"></div>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
