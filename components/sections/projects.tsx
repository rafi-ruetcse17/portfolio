"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "KriyaKarak",
    description:
      "Implemented real-time chat functionality for a SaaS product using Socket.IO and REST APIs. Built comprehensive API documentation for seamless integration.",
    tech: [
      "React",
      "Nextjs",
      "Socket.IO",
      "Redis",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
    ],
    highlights: [
      "Real-time messaging",
      "API documentation",
      "Production deployment",
    ],
    link: "https://kriyakarak.com/",
  },
  {
    title: "Perses - Cloud Native Observability",
    description:
      "Contributed to Perses, a CNCF project that serves as a Grafana alternative. Added ClickHouse plugin support and integrated with AppsCode platforms.",
    tech: ["Go", "TypeScript", "ClickHouse", "Kubernetes"],
    highlights: [
      "20% increase in cloud-native user engagement",
      "CNCF open-source contribution",
      "Enterprise integration",
    ],
    link: "https://github.com/perses",
  },
  {
    title: "Mapage Space Management",
    description:
      "Innovative platform for stylists to manage professional workspaces and for clients to discover high-quality service locations.",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "Socket.IO"],
    highlights: [
      "Resolved 20+ critical production issues",
      "Implemented real-time chat using Socket.IO",
      "Developed workspace customization features",
      "Integrated detailed location management system",
    ],
    link: "https://mapage.net/",
  },
  {
    title: "Twitter Clone",
    description:
      "Full-featured social media application with email verification, post management, user follow system, profile editing, and direct messaging capabilities.",
    tech: ["MERN", "MongoDB", "JWT", "Email Service"],
    highlights: [
      "Email verification",
      "User authentication",
      "Real-time updates",
    ],
    link: "https://github.com/rafi-ruetcse17/twitter-clone",
  },
  {
    title: "Manage Devs",
    description:
      "Modern web application for tracking developer daily check-ins, featuring a clean, reactive dashboard for real-time activity monitoring.",
    tech: ["Vue 3", "TypeScript", "Bulma CSS", "Vite", "Axios"],
    highlights: [
      "Daily check-ins dashboard",
      "Real-time data integration",
      "Responsive design with Bulma",
    ],
    link: "https://github.com/rafi-ruetcse17/manage_devs",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-4 bg-background"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-12">
          <div className="border-b border-border pb-4">
            <h2 className="text-3xl font-bold text-foreground">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group h-full p-8 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200"
                        title="View Live/Source"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  
                  <p className="text-foreground/80 leading-relaxed min-h-[3rem]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 py-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-muted text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.highlights.length > 0 && (
                    <ul className="space-y-2 pt-4 mt-2 border-t border-border">
                      {project.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <div className="w-1 h-1 rounded-full bg-primary/60 mt-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
