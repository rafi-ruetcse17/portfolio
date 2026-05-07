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
    <section id="skills" ref={sectionRef} className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-muted-foreground">Technical </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 group transition-colors duration-200 h-full"
              >
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
            ))}
          </div>

          {/* Competitive Programming Stats */}
          <div className="mt-12">
            <div className="p-8 rounded-xl border border-border bg-gradient-to-br from-card/50 to-card/25 hover:border-primary/50 transition-colors duration-200">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Competitive Programming</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-lg bg-card/50">
                  <p className="text-muted-foreground text-sm mb-1">Problems Solved</p>
                  <p className="text-3xl font-bold text-primary">2000+</p>
                </div>
                <div className="p-4 rounded-lg bg-card/50">
                  <p className="text-muted-foreground text-sm mb-1">Max Codeforces Rating</p>
                  <p className="text-3xl font-bold text-primary">1541</p>
                </div>
                <div className="p-4 rounded-lg bg-card/50">
                  <p className="text-muted-foreground text-sm mb-1">ICPC Asia 2021</p>
                  <p className="text-3xl font-bold text-primary">71st</p>
                </div>
                <div className="p-4 rounded-lg bg-card/50">
                  <p className="text-muted-foreground text-sm mb-1">Meta Hacker Cup</p>
                  <p className="text-3xl font-bold text-primary">Round 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
