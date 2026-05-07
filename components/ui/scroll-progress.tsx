'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      if (scrollHeight > 0) {
        const scrollTop = window.scrollY
        const newProgress = (scrollTop / scrollHeight) * 100
        setProgress(newProgress)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-50 transition-all duration-300"
      style={{ width: `${progress}%` }}
    />
  )
}
