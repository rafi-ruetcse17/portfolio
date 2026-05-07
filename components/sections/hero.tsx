"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Code2, Github, Linkedin, Mail } from "lucide-react";

const titles = [
  "Full Stack Developer",
  "Next.js Expert",
  "SEO Optimizer",
  "Cloud Native Enthusiast",
  "Open Source Contributor",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[80vh] flex items-center justify-center pt-32 pb-20 px-4 bg-card border-b border-border"
    >
      <div className="relative max-w-6xl mx-auto text-center space-y-8 z-10">
        {/* Profile Image (Optional but good for professional look) */}
        <div className="flex justify-center mb-4">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-background shadow-xl ring-1 ring-border">
            <Image
              src="/profile.jpeg"
              alt="Rafi Alam"
              fill
              priority
            />
          </div>
        </div>

        {/* Badge */}
        <div className="flex justify-center h-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 min-w-[180px] justify-center transition-all duration-300">
            <Code2 className="w-4 h-4 text-primary" />
            <span className={`text-xs text-primary font-bold uppercase tracking-wider transition-all duration-500 ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
              {titles[titleIndex]}
            </span>
          </div>
        </div>

        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            Hey, I&apos;m <span className="text-primary">Rafi Alam</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I build scalable, high-performance web applications. Currently a <span className="text-foreground font-semibold">Software Engineer at AppsCode</span>, focusing on cloud-native observability and open-source solutions.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer min-w-[160px]"
          >
            View Projects
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 rounded-full border border-border text-foreground hover:bg-muted font-bold transition-all duration-200 cursor-pointer min-w-[160px]"
          >
            Get in Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 pt-6">
          <a
            href="https://github.com/rafi-ruetcse17"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/rafi6610"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:rafialam6610@gmail.com"
            className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-200"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
