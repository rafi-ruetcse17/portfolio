"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "KriyaKarak",
    description:
      "Implemented real-time chat functionality for a SaaS product using Socket.IO and REST APIs. Built comprehensive API documentation for seamless integration.",
    tech: ["Socket.IO", "React", "Node.js", "Express"],
    highlights: [
      "Real-time messaging",
      "API documentation",
      "Production deployment",
    ],
    link: "#",
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
    title: "Twitter Clone",
    description:
      "Full-featured social media application with email verification, post management, user follow system, profile editing, and direct messaging capabilities.",
    tech: ["MERN", "MongoDB", "JWT", "Email Service"],
    highlights: [
      "Email verification",
      "User authentication",
      "Real-time updates",
    ],
    link: "#",
  },
  {
    title: "Performance Monitoring System",
    description:
      "Integrated Winston logger with Node.js and customized it to monitor API interactions and track Next.js Server-Side Rendering performance across environments.",
    tech: ["Winston", "Node.js", "Next.js", "Logging"],
    highlights: [
      "Multi-environment monitoring",
      "Performance tracking",
      "Production insights",
    ],
    link: "#",
  },
  {
    title: "API Optimization Project",
    description:
      "Optimized API performance through pagination and payload filtering. Analyzed production server logs to identify bottlenecks and improve response times.",
    tech: ["Node.js", "PostgreSQL", "Optimization", "DevOps"],
    highlights: [
      "30% performance improvement",
      "Pagination implementation",
      "Query optimization",
    ],
    link: "#",
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
      className="min-h-screen flex items-center py-20 px-4"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-muted-foreground">Featured </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group h-full p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card transition-colors duration-200 flex flex-col"
              >
                <div className="flex-1 space-y-4 mb-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {project.highlights.length > 0 && (
                    <ul className="space-y-2 pt-4 border-t border-border">
                      {project.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary font-bold">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
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
