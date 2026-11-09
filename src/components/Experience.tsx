
import {
  Code2,
  BrainCircuit,
  GraduationCap,
} from "lucide-react";

const experiences = [
  {
    period: "2025 - Present",
    title: "Software Development",
    organization: "Personal & Academic Projects",
    description:
      "Building full-stack web applications using React, Node.js, Express, and MongoDB, with a focus on practical problem-solving.",
    icon: Code2,
  },
  {
    period: "2026 - Present",
    title: "AI Engineering Learning",
    organization: "Independent Learning",
    description:
      "Developing skills in Python, data processing, AI fundamentals, and intelligent application development.",
    icon: BrainCircuit,
  },
  {
    period: "2028 - Expected",
    title: "Bachelor of Computer Science",
    organization: "Kenya Methodist University",
    description:
      "Studying computer science fundamentals, including data structures, algorithms, databases, and software engineering.",
    icon: GraduationCap,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <h2 className="text-4xl font-extrabold">
            Experience & Journey
          </h2>
          <div className="mt-3 h-1 w-14 rounded bg-primary" />
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {experiences.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="group">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange-50 text-dark transition group-hover:bg-primary group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <div className="h-px flex-1 border-t border-dashed border-orange-200" />
                </div>

                <p className="mb-2 text-sm font-bold text-primary">
                  {item.period}
                </p>

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-primary">
                  {item.organization}
                </p>

                <p className="mt-4 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
