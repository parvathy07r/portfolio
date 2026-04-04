"use client";

import { ExternalLink, Calendar, Award } from "lucide-react";
import { Section, Card, CardHeader, CardContent, Badge } from "../ui";

interface Project {
  title: string;
  date: string;
  bullets: string[];
  tags?: string[];
  link?: string;
  featured?: boolean;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="A selection of projects I've worked on"
    >
      <div className="grid gap-6">
        {projects.map((project) => (
          <Card
            key={`${project.title}-${project.date}`}
            className="group relative overflow-hidden cursor-pointer"
          >
            {project.featured && (
              <div className="absolute top-4 right-4">
                <Badge variant="warning" className="flex items-center gap-1">
                  <Award size={12} />
                  Featured
                </Badge>
              </div>
            )}

            <CardHeader>
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors pr-20">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 transition-all"
                      aria-label={`View ${project.title}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <Calendar size={14} />
                  {project.date}
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <ul className="space-y-2 text-sm text-zinc-400">
                {project.bullets.map((bullet, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-zinc-600" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {project.tags && project.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="default">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
