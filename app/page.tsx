'use client'

import Hero from '@/components/sections/hero'
import Navigation from '@/components/sections/navigation'
import About from '@/components/sections/about'
import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'
import CP from '@/components/sections/cp'
import Projects from '@/components/sections/projects'
import Contact from '@/components/sections/contact'

export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <CP />
      <Projects />
      <Contact />
    </main>
  )
}
