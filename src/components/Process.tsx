
import {
  Search,
  Pencil,
  Code2,
  Rocket,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the problem, goals, and requirements before building.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Plan the structure, interface, and overall user experience.",
    icon: Pencil,
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Turn the design into a working application using clean code.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "Test the application and prepare it for real users.",
    icon: Rocket,
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Gather feedback, fix issues, and continuously improve.",
    icon: TrendingUp,
  },
];

export default function Process() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#286F63]">
            My Workflow
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[#123F3B] md:text-5xl">
            How I Bring Ideas to Life
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#647773]">
            A clear, structured process for turning
            ideas into practical digital solutions.
          </p>
        </div>

        {/* Workflow Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group rounded-3xl border border-[#DCE7E3] bg-[#F7F9F8] p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#286F63] hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8F2EE] text-[#286F63] transition group-hover:bg-[#123F3B] group-hover:text-white">
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                <p className="mt-6 text-sm font-bold text-[#286F63]">
                  {step.number}
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#123F3B]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#647773]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Decoration */}
        <div className="mx-auto mt-16 h-1 w-24 rounded-full bg-[#F4B72E]" />

      </div>
    </section>
  );
}

