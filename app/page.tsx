export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <main className="mx-auto max-w-5xl px-6 py-10 md:px-12 md:py-16">
        <section id="about" className="max-w-3xl space-y-8 pb-16">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">Parvathy Rajasekharan</h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              This is where your personal introduction will go – who you are, what
              you do, and what drives your work.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">Skills</h3>
            <div className="flex flex-wrap gap-2 text-xs text-zinc-300">
              {[
                { label: "JavaScript", icon: "JS" },
                { label: "React", icon: "⚛" },
                { label: "Node.js", icon: "Nd" },
                { label: "Next.js", icon: "N" },
                { label: "Ruby on Rails", icon: "Rb" },
                { label: "HTML/CSS", icon: "</>" },
                { label: "Python", icon: "Py" },
                { label: "Java", icon: "J" },
                { label: "MySQL", icon: "My" },
                { label: "PostgreSQL", icon: "Pg" },
                { label: "TypeScript", icon: "TS" },
                { label: "Git & GitHub", icon: "⧉" },
                { label: "Figma", icon: "Fg" },
                { label: "MongoDB", icon: "Mg" },
              ].map((skill) => (
                <span
                  key={skill.label}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950/40 px-3 py-1"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-600 bg-zinc-900 text-[0.6rem] text-zinc-200">
                    {skill.icon}
                  </span>
                  <span>{skill.label}</span>
                </span>
              ))}
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
