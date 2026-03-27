"use client";

import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";
import { Section, Card, CardContent, Badge } from "../ui";

interface Role {
  title: string;
  from: string;
  to: string;
  bullets: string[];
}

interface WorkExperience {
  company: string;
  logoSrc: string;
  logoAlt: string;
  location: string;
  roles: Role[];
}

interface ExperienceProps {
  experiences: WorkExperience[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="My professional journey and contributions"
    >
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.company} className="relative">
            {/* Company Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 p-2">
                <Image
                  src={exp.logoSrc}
                  alt={exp.logoAlt}
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-100">
                  {exp.company}
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-zinc-500 mt-1">
                  <MapPin size={14} />
                  {exp.location}
                </div>
              </div>
            </div>

            {/* Roles Timeline */}
            <div className="relative ml-7 border-l border-zinc-800 pl-8 space-y-6">
              {exp.roles.map((role, index) => (
                <div key={`${exp.company}-${role.title}-${index}`} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[2.55rem] top-1 h-3 w-3 rounded-full border-2 border-zinc-700 bg-zinc-950" />

                  <Card className="overflow-hidden">
                    <CardContent className="pt-5">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                        <div>
                          <h4 className="text-base font-medium text-zinc-100">
                            {role.title}
                          </h4>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-zinc-500">
                          <Calendar size={14} />
                          {role.from} — {role.to}
                        </div>
                      </div>

                      <ul className="space-y-2 text-sm text-zinc-400">
                        {role.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex gap-2">
                            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-zinc-600" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
