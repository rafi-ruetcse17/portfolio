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
    <section id="cp" ref={sectionRef} className="py-24 px-4 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-12">
          <div className="border-b border-border pb-4">
            <h2 className="text-3xl font-bold text-foreground">Competitive Programming</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl border border-border bg-background shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary h-fit group-hover:scale-110 transition-transform">
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-primary text-sm font-semibold tracking-wide uppercase">{achievement.event}</p>
                      <p className="text-foreground/70 text-sm leading-relaxed pt-2">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="p-8 rounded-2xl border border-border bg-background shadow-sm space-y-8 sticky top-24">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-foreground uppercase tracking-wider text-center border-b border-border pb-4">Stats</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-4 rounded-lg bg-muted/30 border border-border text-center">
                      <p className="text-3xl font-bold text-primary">2000+</p>
                      <p className="text-xs font-bold text-muted-foreground uppercase mt-1">Problems Solved</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30 border border-border text-center">
                      <p className="text-3xl font-bold text-primary">1541</p>
                      <p className="text-xs font-bold text-muted-foreground uppercase mt-1">CF Max Rating</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Profiles</h3>
                  <div className="grid grid-cols-1 gap-3">
                    <a
                      href="https://codeforces.com/profile/rafi_alam?mobile=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <Code2 className="w-5 h-5 text-primary" />
                        <span className="text-sm font-bold text-foreground/80 group-hover:text-primary transition-colors">Codeforces</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                    <a
                      href="https://leetcode.com/u/_BOSS_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <Target className="w-5 h-5 text-primary" />
                        <span className="text-sm font-bold text-foreground/80 group-hover:text-primary transition-colors">LeetCode</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                    <a
                      href="https://drive.google.com/drive/folders/1zWf7iHvH4reJXFfTp2bPE9xpE_XAY4Xb?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <span className="text-sm font-bold text-foreground/80 group-hover:text-primary transition-colors">Certifications</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
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
