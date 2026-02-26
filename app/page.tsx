import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <main className="mx-auto max-w-5xl px-6 py-10 md:px-12 md:py-16">
        <section id="about" className="max-w-3xl space-y-8 pb-16">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">Parvathy Rajasekharan</h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              I’m a software engineer based in Japan, currently building products at TOA Software Corp.. I currently do Full Stack Web Development.
              My goal is to keep learning, keep building, and contribute to meaningful, well-crafted software.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">Skills</h3>
            <div className="flex justify-center">
              <div className="w-full max-w-4xl rounded-3xl border border-zinc-800 bg-zinc-950/40 p-5 md:p-6">
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
                      className="group flex flex-col items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-4 text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:border-zinc-400 hover:bg-zinc-900/80 hover:shadow-[0_18px_45px_rgba(0,0,0,0.75)]"
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
          id="work"
          className="max-w-4xl space-y-6 border-t border-zinc-900 pt-12"
        >
          <div className="space-y-3">
            <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
              Work
            </h2>
            <h3 className="text-2xl font-semibold">Selected work</h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              A snapshot of projects that highlight your experience and craft.
            </p>
          </div>

          <div className="space-y-3">
            <article className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/40 px-6 py-4 transition-colors hover:border-zinc-500">
              <div className="space-y-1">
                <h4 className="text-sm font-medium">TOA Software Corp.</h4>
                <p className="text-xs text-zinc-400">Software Engineer</p>
              </div>
               <div className="space-y-1">
                <p className="text-xs text-zinc-500">October 2024 - Present</p>
                <p className="text-xs text-zinc-500 text-end">Tottori, Japan</p>
               </div>
            </article>

            <article className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/40 px-6 py-4 transition-colors hover:border-zinc-500">
              <div className="space-y-1">
                <h4 className="text-sm font-medium">TOA Software Corp.</h4>
                <p className="text-xs text-zinc-400">Software Engineering Intern</p>
              </div>
               <div className="space-y-1">
                <p className="text-xs text-zinc-500">February 2024 - March 2024</p>
                <p className="text-xs text-zinc-500 text-end">Tottori, Japan</p>
               </div>
              
            </article>

            <article className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/40 px-6 py-4 transition-colors hover:border-zinc-500">
              <div className="space-y-1">
                <h4 className="text-sm font-medium">Aspire Systems</h4>
                <p className="text-xs text-zinc-400">Software Engineer</p>
              </div>
               <div className="space-y-1">
                <p className="text-xs text-zinc-500">July 2021 - March 2022</p>
                <p className="text-xs text-zinc-500 text-end">Ernakulam, Kerala, India</p>
               </div>
              
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
