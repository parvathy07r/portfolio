"use client";

import Image from "next/image";
import { Section } from "../ui";

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
          <div key={exp.company} className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="mt-1 h-10 w-10 shrink-0 overflow-hidden rounded-full border border-zinc-700 bg-zinc-900 hover:-translate-y-1">
                <Image
                  src={exp.logoSrc}
                  alt={exp.logoAlt}
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-zinc-100">
                  {exp.company}
                </h3>
                <p className="text-xs text-zinc-500">{exp.location}</p>
              </div>
            </div>

            {exp.roles.length > 1 ? (
              <div className="relative pl-8">
                <div className="space-y-6">
                  {exp.roles.map((role, index) => (
                    <div
                      key={`${exp.company}-${role.title}-${role.from}-${role.to}`}
                      className="relative"
                    >
                      <div className="absolute left-[-1.75rem] top-[1.1rem] h-2.5 w-2.5 rounded-full border border-zinc-600 bg-zinc-950 z-10" />
                      {index < exp.roles.length - 1 && (
                        <div className="absolute left-[-1.4375rem] top-[calc(1.1rem+0.3125rem)] h-[calc(100%+1.5rem)] w-px bg-zinc-800" />
                      )}
                      <article className="rounded-xl border border-zinc-800 bg-zinc-950/40 px-6 py-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-zinc-400 hover:bg-zinc-900/80 hover:shadow-[0_18px_45px_rgba(0,0,0,0.75)] cursor-pointer">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div className="space-y-1">
                            <h4 className="text-sm font-medium text-zinc-100">
                              {role.title}
                            </h4>
                            <p className="text-xs text-zinc-400">
                              {exp.company}
                            </p>
                          </div>
                          <div className="space-y-1 text-left sm:text-right">
                            <p className="text-xs text-zinc-400">
                              {exp.location}
                            </p>
                            <p className="text-xs text-zinc-500">
                              {role.from} - {role.to}
                            </p>
                          </div>
                        </div>

                        <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-zinc-300">
                          {role.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="pl-8">
                <div className="space-y-6">
                  {exp.roles.map((role) => (
                    <article
                      key={`${exp.company}-${role.title}-${role.from}-${role.to}`}
                      className="rounded-xl border border-zinc-800 bg-zinc-950/40 px-6 py-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-zinc-400 hover:bg-zinc-900/80 hover:shadow-[0_18px_45px_rgba(0,0,0,0.75)] cursor-pointer"
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div className="space-y-1">
                          <h4 className="text-sm font-medium text-zinc-100">
                            {role.title}
                          </h4>
                          <p className="text-xs text-zinc-400">{exp.company}</p>
                        </div>
                        <div className="space-y-1 text-left sm:text-right">
                          <p className="text-xs text-zinc-400">
                            {exp.location}
                          </p>
                          <p className="text-xs text-zinc-500">
                            {role.from} - {role.to}
                          </p>
                        </div>
                      </div>

                      <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-zinc-300">
                        {role.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
