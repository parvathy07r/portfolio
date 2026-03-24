import Image from "next/image";
import { getAvatar } from "../utils";

export default function Home() {
  const name = "Parvathy Rajasekharan";
  const avatar = getAvatar(name);
  const workExperience = [
    {
      company: "TOA Software Corp.",
      logoSrc: "/images/toa_logo.jpg",
      logoAlt: "TOA Software Corp.",
      location: "Tottori, Japan",
      roles: [
        {
          title: "Software Engineer",
          from: "October 2024",
          to: "Present",
          bullets: [
            "Currently developing an internal certification management system with a focus on frontend architecture and UI implementation using React and TypeScript.",
            "Contributed to a web-based attendance management app using React.js on the frontend and Node.js to streamline staff tracking and operations.",
            "Worked on a web-based daily report and employee operations system using React.js and Ruby on Rails.",
            "Developed a full-stack reporting workflow using React.js and Node.js to simplify report submission and management.",
          ],
        },
        {
          title: "Software Engineering Intern",
          from: "February 2024",
          to: "March 2024",
          bullets: [
            "Developed the frontend and backend of a web application using ReactJS and FastAPI.",
            "Developed responsive UI screens and components aligned with design specs.",
            "Worked closely with engineers to iterate quickly and deliver production-ready features.",
          ],
        },
      ],
    },
    {
      company: "Aspire Systems",
      logoSrc: "/images/aspire_systems_logo.jpg",
      logoAlt: "Aspire Systems",
      location: "Ernakulam, Kerala, India",
      roles: [
        {
          title: "Software Engineer",
          from: "July 2021",
          to: "March 2022",
          bullets: [
            "Worked on backend services for an employee management system using Spring Boot.",
            "Built backend services and APIs with an emphasis on clean contracts and maintainability.",
            "Worked in an agile environment to deliver features, fixes, and improvements on schedule.",
          ],
        },
      ],
    },
  ];
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <main className="mx-auto max-w-5xl px-6 py-10 md:px-12 md:py-16">
        <section id="about" className="max-w-4xl space-y-8 pb-0">
          <div className="flex items-start gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-semibold">{name}</h3>
              </div>

              <p className="text-sm leading-relaxed text-zinc-400">
                I’m a software engineer based in Japan, currently building
                products at TOA Software Corp..
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                I currently do Full Stack Web Development.
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                My goal is to keep learning, keep building, and contribute to
                meaningful, well-crafted software.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">Skills</h3>
            <div className="flex justify-center">
              <div className="w-full rounded-3xl border border-zinc-800 bg-zinc-950/40 p-5 md:p-6">
                <div className="grid grid-cols-2 gap-4 text-xs text-zinc-300 md:grid-cols-4">
                  {[
                    { label: "JavaScript", src: "/skills/javascript.svg" },
                    { label: "React", src: "/skills/react.svg" },
                    { label: "Node.js", src: "/skills/node.svg" },
                    { label: "Next.js", src: "/skills/nextjs.svg" },
                    { label: "Ruby on Rails", src: "/skills/rails.svg" },
                    { label: "HTML/CSS", src: "/skills/html.svg" },
                    { label: "Python", src: "/skills/python.svg" },
                    { label: "Java", src: "/skills/java.svg" },
                    { label: "MySQL", src: "/skills/mysql.svg" },
                    { label: "PostgreSQL", src: "/skills/postgresql.svg" },
                    { label: "TypeScript", src: "/skills/typescript.svg" },
                    { label: "Git & GitHub", src: "/skills/github.svg" },
                    { label: "Figma", src: "/skills/figma.svg" },
                  ].map((skill) => (
                    <div
                      key={skill.label}
                      className="group flex flex-col items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-4 text-center transition-all duration-300 ease-out hover:border-zinc-400 hover:bg-zinc-900/80 hover:shadow-[0_18px_45px_rgba(0,0,0,0.75)] cursor-pointer"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center">
                        <Image
                          src={skill.src}
                          alt={skill.label}
                          width={40}
                          height={40}
                          className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <span className="text-[0.7rem] font-medium tracking-wide text-zinc-300 group-hover:text-zinc-50">
                        {skill.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="max-w-4xl space-y-6  border-zinc-900 pt-12"
        >
          <div className="space-y-3">
            <h2 className="text-xl font-medium">Projects</h2>
          </div>
        </section>

        <section
          id="work"
          className="max-w-4xl space-y-6  border-zinc-900 pt-12"
        >
          <div className="space-y-3">
            <h2 className="text-xl font-medium">Work Experience</h2>
          </div>

          <div className="space-y-10">
            {workExperience.map((exp) => (
              <div key={exp.company} className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border border-zinc-700 bg-zinc-900">
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
                          <article className="rounded-xl border border-zinc-800 bg-zinc-950/40 px-6 py-4 transition-all duration-300 ease-out hover:- hover:border-zinc-400 hover:bg-zinc-900/80 hover:shadow-[0_18px_45px_rgba(0,0,0,0.75)] cursor-pointer">
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
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
