
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Task Flow System",
    description:
      "A full-stack task management application with user authentication, project organization, and task management features.",
    image: "/projects/taskflow.png",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/nem74/Task-flow-system",
    live: "",
  },
  {
    title: "Book Tracker",
    description:
      "A MERN stack application for organizing and managing a personal collection of books.",
    image: "/projects/booktracker.png",
    technologies: ["React", "Express", "MongoDB", "JavaScript"],
    github: "",
    live: "",
  },
];

export default function Projects() {
  return (
    <section id="work" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
            My Portfolio
          </p>

          <h2 className="text-4xl font-extrabold md:text-5xl">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-muted">
            A selection of applications I've built while
            developing my software engineering skills.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-video overflow-hidden bg-orange-50">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-muted">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-semibold hover:text-primary"
                    >
                      <FaGithub size={18} />
                      Source Code
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-semibold text-primary"
                    >
                      Live Demo
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
