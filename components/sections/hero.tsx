"use client";

import { Code2, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      {/* Static background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center space-y-8 z-10">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Full Stack Developer
            </span>
          </div>
        </div>

        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-white">Hey, I&apos;m </span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Rafi Alam
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building scalable web applications with modern technologies.
            Passionate about open-source development and creating impactful
            solutions.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-shadow duration-200 cursor-pointer"
          >
            View My Work
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 font-semibold transition-colors duration-200 cursor-pointer"
          >
            Get in Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/rafi-ruetcse17"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-primary/20 hover:border-primary hover:bg-primary/10 transition-colors duration-200"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/rafi6610"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-primary/20 hover:border-primary hover:bg-primary/10 transition-colors duration-200"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:rafialam6610@gmail.com"
            className="p-3 rounded-full border border-primary/20 hover:border-primary hover:bg-primary/10 transition-colors duration-200"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
