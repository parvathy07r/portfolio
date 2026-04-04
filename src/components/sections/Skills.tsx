"use client";

import Image from "next/image";
import { Section, Card } from "../ui";

interface Skill {
  label: string;
  src: string;
  category?: string;
}

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <Section
      id="skills"
      title="Skills & Technologies"
      subtitle="Technologies I work with to build modern web applications"
    >
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4">
        {skills.map((skill) => (
          <Card
            key={skill.label}
            className="group p-4 md:p-5 flex flex-col items-center justify-center text-center cursor-pointer"
          >
            <div className="mb-3 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center">
              <Image
                src={skill.src}
                alt={skill.label}
                width={48}
                height={48}
                className="h-8 w-8 md:h-10 md:w-10 object-contain duration-300 group-hover:scale-110"
              />
            </div>
            <span className="text-xs md:text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
              {skill.label}
            </span>
          </Card>
        ))}
      </div>
    </Section>
  );
}
