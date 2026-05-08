'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ExternalLink, Github, Menu, X } from 'lucide-react'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'cp', label: 'CP' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150

      const sectionIds = ['home', 'about', 'experience', 'skills', 'cp', 'projects', 'contact']

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative z-50">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground font-extrabold text-lg shadow-sm border border-primary/20">
            RA
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-none">Rafi Alam</p>
            <p className="text-[10px] text-muted-foreground mt-1">Software Engineer</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1 h-full">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 h-full text-sm font-medium transition-colors duration-200 relative flex items-center cursor-pointer ${activeSection === item.id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              {item.label}
              {activeSection === item.id && (
                <div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-primary"></div>
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://drive.google.com/file/d/1YmSVRUTzr7jozLsIxBbx2l2rmQcaQEOj/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/5 transition-colors duration-200 text-sm font-semibold"
          >
            <span className="hidden sm:inline">Resume</span>
            <span> <ExternalLink className="w-4 h-4" /> </span>
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors border border-border"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-card border-b border-border shadow-xl transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
        <div className="flex flex-col p-4 gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-3 text-left text-sm font-bold rounded-lg transition-colors ${activeSection === item.id ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
