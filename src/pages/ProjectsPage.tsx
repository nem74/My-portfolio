
import { ArrowUpRight, Code2, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import taskflowImage from "../assets/taskflow.png";
import booktrackerImage from "../assets/booktracker.png";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  status: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Task Flow System",
    category: "Full-Stack Web Application",
    description:
      "A task and project management application built using the MERN stack. It explores user authentication, project organization, and task management through a structured web interface.",
    image: taskflowImage,
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    github: "https://github.com/nem74/Task-flow-system",
    status: "In Development",
  },
  {
    number: "02",
    title: "Book Tracker",
    category: "Full-Stack Web Application",
    description:
      "A MERN-based book tracking project designed to help users organize and manage books. The project explores REST APIs, database integration, and frontend-to-backend communication.",
    image: booktrackerImage,
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "REST API",
    ],
    status: "In Development",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* PAGE HEADER */}
        <div className="mb-16 text-center">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F4B72E]" />

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#286F63]">
              My Portfolio
            </p>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-[#123F3B] sm:text-5xl lg:text-6xl">
            Featured{" "}
            <span className="text-[#286F63]">
              Projects.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#647773]">
            A selection of projects I've been working on,
            exploring full-stack development, practical
            problem-solving, and modern web technologies.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-3xl border border-[#DCE7E3] bg-[#F7F9F8] transition-all duration-300 hover:-translate-y-2 hover:border-[#286F63] hover:shadow-xl"
            >

              {/* PROJECT IMAGE */}
              <div className="relative overflow-hidden bg-[#E8F2EE]">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute left-5 top-5 rounded-full bg-[#123F3B] px-4 py-2 text-xs font-semibold text-white shadow-md">
                  {project.status}
                </span>
              </div>

              {/* PROJECT CONTENT */}
              <div className="p-7 sm:p-8">

                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#286F63]">
                    {project.category}
                  </p>

                  <span className="text-sm font-bold text-[#647773]">
                    {project.number}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-[#123F3B] sm:text-3xl">
                  {project.title}
                </h2>

                <p className="mt-4 min-h-28 leading-7 text-[#647773]">
                  {project.description}
                </p>

                {/* TECHNOLOGY TAGS */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#DCE7E3] bg-[#E8F2EE] px-4 py-2 text-xs font-semibold text-[#286F63]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* PROJECT LINKS */}
                <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[#DCE7E3] pt-6">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#123F3B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#286F63]"
                    >
                      <FaGithub size={18} />
                      View Code
                      <ArrowUpRight size={16} />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#123F3B] px-5 py-3 text-sm font-semibold text-[#123F3B] transition hover:bg-[#E8F2EE]"
                    >
                      Live Demo
                      <ArrowUpRight size={16} />
                    </a>
                  )}

                  {!project.github && !project.live && (
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[#647773]">
                      <Code2 size={18} />
                      Project details being prepared
                    </span>
                  )}

                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GITHUB CTA */}
        <div className="mt-24 rounded-[2.5rem] bg-[#123F3B] px-8 py-14 text-center sm:px-12">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#F4B72E]">
            <FolderGit2 size={32} />
          </div>

          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#F4B72E]">
            More On GitHub
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Explore My Development Journey.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-white/75">
            I'm continuously learning, experimenting,
            and building. You can follow my progress
            and explore my repositories on GitHub.
          </p>

          <a
            href="https://github.com/nem74"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#F4B72E] px-7 py-4 font-bold text-[#123F3B] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFD166]"
          >
            <FaGithub size={20} />
            Visit My GitHub
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
