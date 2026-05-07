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
    <section id="experience" ref={sectionRef} className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-muted-foreground">Work </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card transition-colors duration-200"
              >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground whitespace-nowrap">
                      <p className="font-medium">{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
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
