
import { Link } from "react-router-dom";
import type { ComponentType } from "react";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaLinux,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

import {
  BrainCircuit,
  Boxes,
  Database,
  Code2,
  Server,
  ArrowUpRight,
  Bot,
  BookOpen,
} from "lucide-react";

// Skill type supporting both Lucide and React Icons
type SkillIcon = ComponentType<{
  size?: number;
  className?: string;
}>;

type Skill = {
  name: string;
  icon: SkillIcon;
};

type SkillGroup = {
  title: string;
  description: string;
  icon: SkillIcon;
  skills: Skill[];
};

// Skill categories
const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces.",
    icon: Code2,
    skills: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
    ],
  },
  {
    title: "Backend Development",
    description:
      "Developing APIs, authentication, and server-side logic.",
    icon: Server,
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "Python", icon: FaPython },
      { name: "REST APIs", icon: Code2 },
      { name: "JWT Authentication", icon: Server },
    ],
  },
  {
    title: "Databases & Tools",
    description:
      "Managing data and maintaining development workflows.",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Linux", icon: FaLinux },
      { name: "Mongoose", icon: Database },
    ],
  },
  {
    title: "AI & Data",
    description:
      "Exploring intelligent systems and AI technologies.",
    icon: BrainCircuit,
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Neural Networks", icon: BrainCircuit },
      { name: "Digital Twins", icon: Boxes },
      { name: "LLM Fundamentals", icon: Bot },
      { name: "RAG Fundamentals", icon: BookOpen },
    ],
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* PAGE HEADER */}
        <div className="mb-16 text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F4B72E]" />

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#286F63]">
              My Tech Stack
            </p>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-[#123F3B] sm:text-5xl lg:text-6xl">
            Technologies &{" "}
            <span className="text-[#286F63]">
              Skills.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#647773]">
            The technologies I work with and the tools
            I'm learning as I grow in software development
            and artificial intelligence.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid gap-7 lg:grid-cols-2">
          {skillGroups.map((group) => {
            const CategoryIcon = group.icon;

            return (
              <div
                key={group.title}
                className="group rounded-3xl border border-[#DCE7E3] bg-[#F7F9F8] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#286F63] hover:shadow-xl sm:p-9"
              >
                {/* CATEGORY HEADER */}
                <div className="mb-7 flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#E8F2EE] text-[#286F63] transition-colors duration-300 group-hover:bg-[#123F3B] group-hover:text-white">
                    <CategoryIcon size={27} />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-[#123F3B] sm:text-2xl">
                      {group.title}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-[#647773]">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* INDIVIDUAL SKILLS */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-[#DCE7E3] bg-white p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#286F63] hover:bg-[#E8F2EE] hover:shadow-md"
                      >
                        <SkillIcon
                          size={28}
                          className="text-[#286F63]"
                        />

                        <span className="text-xs font-semibold leading-5 text-[#123F3B] sm:text-sm">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <div className="mt-24 overflow-hidden rounded-[2.5rem] bg-[#123F3B] px-8 py-14 text-center sm:px-12">

          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#F4B72E]">
            Beyond The Tools
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Putting Skills Into Practice.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-white/75">
            I believe the best way to grow as a developer
            is by building real projects, solving problems,
            and continuously learning.
          </p>

          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F4B72E] px-7 py-4 font-bold text-[#123F3B] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFD166]"
          >
            View My Projects
            <ArrowUpRight size={19} />
          </Link>

        </div>
      </div>
    </section>
  );
}
