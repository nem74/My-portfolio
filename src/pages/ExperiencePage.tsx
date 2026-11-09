
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Code2,
  BrainCircuit,
  GraduationCap,
  BriefcaseBusiness,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

const experiences = [
  {
    number: "01",
    title: "Independent Software Development",
    organization: "Personal Projects",
    period: "2025 – Present",
    icon: Code2,
    description:
      "Building and experimenting with full-stack web applications to strengthen my practical software engineering skills.",
    highlights: [
      "Developing applications using React, Node.js, Express, and MongoDB.",
      "Working with REST APIs, authentication, and database integration.",
      "Practicing version control and collaborative development workflows with Git and GitHub.",
    ],
  },
  {
    number: "02",
    title: "AI Engineering Learning",
    organization: "Independent Study & Technical Training",
    period: "2026 – Present",
    icon: BrainCircuit,
    description:
      "Developing foundational knowledge in artificial intelligence and exploring how modern AI technologies can be integrated into software applications.",
    highlights: [
      "Studying large language models, tokenization, and Transformer fundamentals.",
      "Learning retrieval-augmented generation and vector search concepts.",
      "Exploring neural networks, Python, and AI application development.",
    ],
  },
  {
    number: "03",
    title: "Bachelor of Computer Science",
    organization: "Kenya Methodist University",
    period: "Expected Graduation: 2028",
    icon: GraduationCap,
    description:
      "Pursuing a Bachelor of Computer Science degree while building a strong foundation in programming, algorithms, and computer systems.",
    highlights: [
      "Studying data structures, algorithms, and object-oriented programming.",
      "Developing knowledge of databases, operating systems, and networking.",
      "Applying classroom concepts through practical programming projects.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="min-h-screen bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* PAGE HEADER */}
        <div className="mb-20 text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F4B72E]" />

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#286F63]">
              My Journey
            </p>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-[#123F3B] sm:text-5xl lg:text-6xl">
            Experience &{" "}
            <span className="text-[#286F63]">
              Growth.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#647773]">
            My journey through software development,
            technical learning, and computer science.
            Every project and learning experience helps
            me become a better engineer.
          </p>
        </div>

        {/* EXPERIENCE TIMELINE */}
        <div className="relative mx-auto max-w-4xl">

          {/* Timeline Line */}
          <div className="absolute bottom-0 left-[19px] top-0 w-[2px] bg-[#DCE7E3] sm:left-[27px]" />

          <div className="space-y-12">
            {experiences.map((experience) => {
              const Icon = experience.icon;

              return (
                <div
                  key={experience.number}
                  className="relative pl-14 sm:pl-20"
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[#123F3B] text-[#F4B72E] shadow-md sm:h-14 sm:w-14">
                    <Icon size={22} />
                  </div>

                  {/* Experience Card */}
                  <article className="group rounded-3xl border border-[#DCE7E3] bg-[#F7F9F8] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#286F63] hover:shadow-xl sm:p-9">

                    {/* Period */}
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                      <span className="inline-flex rounded-full bg-[#E8F2EE] px-4 py-2 text-xs font-bold text-[#286F63]">
                        {experience.period}
                      </span>

                      <span className="text-sm font-bold text-[#647773]">
                        {experience.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-[#123F3B] sm:text-3xl">
                      {experience.title}
                    </h2>

                    <p className="mt-2 font-semibold text-[#286F63]">
                      {experience.organization}
                    </p>

                    {/* Description */}
                    <p className="mt-6 leading-8 text-[#647773]">
                      {experience.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-7 space-y-4 border-t border-[#DCE7E3] pt-6">
                      {experience.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            size={20}
                            className="mt-1 shrink-0 text-[#286F63]"
                          />

                          <p className="leading-7 text-[#647773]">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* PROFESSIONAL DEVELOPMENT SECTION */}
        <div className="mt-24 grid gap-6 md:grid-cols-2">

          <div className="rounded-3xl border border-[#DCE7E3] bg-[#F7F9F8] p-8">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F2EE] text-[#286F63]">
              <BookOpen size={27} />
            </div>

            <h3 className="text-2xl font-bold text-[#123F3B]">
              Continuous Learning
            </h3>

            <p className="mt-4 leading-8 text-[#647773]">
              I actively improve my technical skills
              through hands-on practice, independent
              study, and exploring new technologies
              in software development and AI.
            </p>
          </div>

          <div className="rounded-3xl border border-[#DCE7E3] bg-[#F7F9F8] p-8">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F2EE] text-[#286F63]">
              <BriefcaseBusiness size={27} />
            </div>

            <h3 className="text-2xl font-bold text-[#123F3B]">
              Career Direction
            </h3>

            <p className="mt-4 leading-8 text-[#647773]">
              My long-term goal is to work as an AI
              engineer, combining strong software
              engineering fundamentals with practical
              experience in intelligent applications.
            </p>
          </div>

        </div>

        {/* BOTTOM CTA */}
        <div className="mt-24 rounded-[2.5rem] bg-[#123F3B] px-8 py-14 text-center sm:px-12">

          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#F4B72E]">
            Let's Connect
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Interested in Working Together?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-white/75">
            I'm open to learning opportunities,
            collaborations, internships, and projects
            that help me grow as a software developer.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F4B72E] px-7 py-4 font-bold text-[#123F3B] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFD166]"
          >
            Get In Touch
            <ArrowUpRight size={19} />
          </Link>

        </div>

      </div>
    </section>
  );
}

