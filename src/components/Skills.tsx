
import {
  Code2,
  Server,
  Database,
  BrainCircuit,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Python"],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: ["MongoDB", "Mongoose", "Git", "GitHub", "VS Code"],
  },
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    skills: ["Python", "Neural Networks", "Digital Twins", "RAG", "AI Fundamentals"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
            My Expertise
          </p>

          <h2 className="text-4xl font-extrabold md:text-5xl">
            Skills & <span className="text-primary">Technologies</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-muted">
            Technologies and tools I use to build modern
            applications, along with the AI skills I'm developing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="rounded-2xl border border-orange-100 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-primary">
                  <Icon size={28} />
                </div>

                <h3 className="mb-5 text-xl font-bold">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-dark"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
