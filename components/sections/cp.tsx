'use client'

import { useEffect, useRef, useState } from 'react'
import { Trophy, Target, Award, Code2, ExternalLink, GraduationCap } from 'lucide-react'

const achievements = [
  {
    title: "Fresher's Champion",
    event: "GyanJam-Intra RUET Coding Contest 2018",
    description: "Secured 1st place among all freshers at Rajshahi University of Engineering & Technology.",
    icon: Trophy,
  },
  {
    title: "Meta Hacker Cup",
    event: "Meta Hacker Cup 2021",
    description: "Advanced to Round 2 of the prestigious global competitive programming contest.",
    icon: Target,
  },
  {
    title: "12th Place",
    event: "VU CSE Tech Fest Programming Contest 2019",
    description: "Ranked 12th out of 41 teams in the inter-university programming contest.",
    icon: Award,
  },
  {
    title: "24th Place",
    event: "AUST Inter University Programming Contest 2022",
    description: "Ranked 24th out of 105 teams representing top universities.",
    icon: Award,
  },
  {
    title: "71st Place",
    event: "ACM-ICPC Asia Dhaka Regional 2021",
    description: "Ranked 71st out of 1747 teams in the preliminary online round.",
    icon: Award,
  },
]

const stats = [
  { label: 'Problems Solved', value: '2000+' },
  { label: 'Max Rating', value: '1541' },
  { label: 'Platform', value: 'Codeforces' },
]

export default function CP() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="cp" ref={sectionRef} className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="text-muted-foreground">Competitive </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Programming</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Passionate about algorithmic problem solving and competitive programming. Regularly participating in global contests and optimizing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Achievements List */}
            <div className="lg:col-span-2 space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary h-fit">
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-primary text-sm font-semibold">{achievement.event}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed pt-2">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar Stats & Links */}
            <div className="space-y-6">
              {/* Stats Card */}
              <div className="p-8 rounded-2xl border border-border bg-gradient-to-br from-card to-card/50 space-y-6">
                <h3 className="text-xl font-bold text-foreground">Platform Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 rounded-lg bg-background/50 border border-border">
                    <span className="text-muted-foreground">Problems Solved</span>
                    <span className="text-2xl font-bold text-primary">2000+</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-background/50 border border-border">
                    <span className="text-muted-foreground">CF Max Rating</span>
                    <span className="text-2xl font-bold text-primary">1541</span>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <p className="text-sm font-semibold text-foreground">Quick Links</p>
                  <div className="grid grid-cols-1 gap-3">
                    <a
                      href="https://codeforces.com/profile/rafi_alam?mobile=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <Code2 className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">Codeforces Profile</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                    </a>
                    <a
                      href="https://leetcode.com/u/_BOSS_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <Target className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">LeetCode Profile</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                    </a>
                    <a
                      href="https://drive.google.com/drive/folders/1zWf7iHvH4reJXFfTp2bPE9xpE_XAY4Xb?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">Certifications</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
