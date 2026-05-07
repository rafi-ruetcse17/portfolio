'use client'

import { useEffect, useRef, useState } from 'react'

const skillCategories = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C++', 'C'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'GraphQL', 'REST APIs', 'Socket.IO', 'Winston'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'CI/CD', 'Bitbucket', 'Jira', 'Confluence'],
  },
  {
    category: 'Problem Solving',
    skills: ['Algorithms', 'Data Structures', 'Dynamic Programming', 'Graph Theory'],
  },
]

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-12">
          <div className="border-b border-border pb-4">
            <h2 className="text-3xl font-bold text-foreground">Skills & Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="p-8 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-muted text-foreground/80 text-sm font-semibold border border-border hover:border-primary/40 hover:text-primary transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
