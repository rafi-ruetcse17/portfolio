'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-12">
          <div className="border-b border-border pb-4 text-center">
            <h2 className="text-3xl font-bold text-foreground">Get In Touch</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto font-medium">
              I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <a
                  href="mailto:rafialam6610@gmail.com"
                  className="flex items-center gap-4 p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Email</p>
                    <p className="font-bold text-foreground">rafialam6610@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+8801733699065"
                  className="flex items-center gap-4 p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Phone</p>
                    <p className="font-bold text-foreground">+880 1733-699065</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-6 rounded-xl border border-border bg-card shadow-sm group">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Location</p>
                    <p className="font-bold text-foreground">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 space-y-4">
                <p className="text-sm font-bold text-foreground uppercase tracking-wider text-center md:text-left">Connect Socially</p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <a
                    href="https://github.com/rafi-ruetcse17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 shadow-sm"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/rafi6610"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 shadow-sm"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-2xl border border-border bg-card shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-200 text-foreground font-medium"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Work Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-200 text-foreground font-medium"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-200 text-foreground font-medium resize-none"
                    placeholder="How can I help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-70"
                  disabled={submitted}
                >
                  {submitted ? 'Message Sent Successfully' : 'Send Professional Inquiry'}
                </button>

                {submitted && (
                  <p className="text-center text-primary text-sm font-bold animate-pulse">Thank you! I will respond within 24 hours.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
