
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Code2,
  BrainCircuit,
  GraduationCap,
  MapPin,
} from "lucide-react";

import profileImage from "../assets/profile.jpg";

const highlights = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Building full-stack applications with modern web technologies.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Learning AI engineering, LLMs, and intelligent application development.",
  },
  {
    icon: GraduationCap,
    title: "Computer Science",
    description:
      "Strengthening my knowledge of algorithms, databases, and software engineering.",
  },
];

export default function About() {
  return (
    <section className="min-h-screen bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Main About Section */}
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT: Profile Image */}
          <div className="relative mx-auto w-full max-w-[460px]">

            {/* Decorative background */}
            <div className="absolute -left-5 -top-5 h-40 w-40 rounded-full bg-[#F4B72E]/20 blur-3xl" />

            <div className="absolute -bottom-6 -right-5 h-44 w-44 rounded-full bg-[#286F63]/20 blur-3xl" />

            {/* Image frame */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#DCE7E3] bg-[#E8F2EE] p-4 shadow-xl">
              <img
                src={profileImage}
                alt="Nehemiah"
                className="aspect-[4/5] w-full rounded-[2rem] object-cover object-center"
              />
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-5 right-3 rounded-2xl bg-[#123F3B] px-6 py-4 text-white shadow-xl sm:-right-5">
              <p className="text-sm font-bold">
                Software Developer
              </p>

              <p className="mt-1 text-xs text-white/70">
                Aspiring AI Engineer
              </p>
            </div>
          </div>

          {/* RIGHT: About Content */}
          <div>

            {/* Section Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F4B72E]" />

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#286F63]">
                Get To Know Me
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#123F3B] sm:text-5xl lg:text-6xl">
              Passionate About
              <br />
              <span className="text-[#286F63]">
                Technology.
              </span>
            </h1>

            {/* Introduction */}
            <p className="mt-7 text-lg leading-8 text-[#647773]">
              Hi, I'm{" "}
              <span className="font-bold text-[#123F3B]">
                Nehemiah
              </span>
              , a Computer Science student at Kenya
              Methodist University and a software developer
              passionate about building practical digital
              solutions.
            </p>

            <p className="mt-5 leading-8 text-[#647773]">
              I enjoy working with modern web technologies,
              developing full-stack applications, and
              exploring how artificial intelligence can
              solve real-world problems.
            </p>

            <p className="mt-5 leading-8 text-[#647773]">
              My goal is to grow into a skilled AI engineer
              while continuing to build software that is
              useful, reliable, and easy to use.
            </p>

            {/* Location */}
            <div className="mt-7 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F2EE] text-[#286F63]">
                <MapPin size={19} />
              </div>

              <span className="font-medium text-[#123F3B]">
                Nairobi, Kenya
              </span>
            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#123F3B] px-7 py-4 font-semibold text-white transition hover:bg-[#286F63]"
              >
                Explore My Work
                <ArrowUpRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#123F3B] px-7 py-4 font-semibold text-[#123F3B] transition hover:bg-[#123F3B] hover:text-white"
              >
                Contact Me
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-28">

          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#286F63]">
              What Drives Me
            </p>

            <h2 className="text-3xl font-bold text-[#123F3B] md:text-4xl">
              My Areas of Focus
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-[#DCE7E3] bg-[#F7F9F8] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#286F63] hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F2EE] text-[#286F63] transition group-hover:bg-[#123F3B] group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#123F3B]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#647773]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

