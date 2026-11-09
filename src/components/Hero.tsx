
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#123F3B] text-white">

      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#286F63]/30 blur-3xl" />

      <div className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-[#1B514A]/40 blur-3xl" />

      {/* Main Hero Container */}
      <div className="relative mx-auto grid min-h-[80vh] max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">

        {/* LEFT SIDE */}
        <div className="relative z-10">

          {/* Introduction */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F4B72E]" />

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F4B72E]">
              Hello, I'm Nehemiah
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-[66px]">
            Software
            <br />
            Developer &
            <br />
            <span className="text-[#F4B72E]">
              Aspiring AI
              <br />
              Engineer.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-lg text-lg leading-8 text-white/85">
            I build practical, user-friendly web applications
            and explore how artificial intelligence can
            solve real-world problems.
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">

            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B72E] px-7 py-4 text-sm font-bold text-[#123F3B] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFD166]"
            >
              Explore Projects
              <ArrowUpRight size={19} />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 bg-transparent px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-[#F4B72E] hover:text-[#F4B72E]"
            >
              About Me
              <ArrowUpRight size={19} />
            </Link>

          </div>

          {/* Social Link */}
          <div className="mt-10 flex items-center gap-4">
            <a
              href="https://github.com/nem74"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:border-[#F4B72E] hover:text-[#F4B72E]"
            >
              <FaGithub size={23} />
            </a>

            <span className="text-sm text-white/70">
              Explore my work on GitHub
            </span>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative mx-auto w-full max-w-[450px]">

          {/* Background accent */}
          <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-[#F4B72E]/15 blur-2xl" />

          {/* Image Container */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#1B514A] p-4 shadow-2xl">
            <img
              src={heroImage}
              alt="Software development illustration"
              className="h-auto w-full rounded-[2rem] object-contain"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-5 right-2 rounded-2xl border border-[#DCE7E3] bg-white px-5 py-4 shadow-xl sm:-right-4">
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F2EE] text-[#123F3B]">
                <ArrowUpRight size={20} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#123F3B]">
                  Full-Stack Development
                </p>

                <p className="mt-1 text-xs text-[#647773]">
                  Building & Learning
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#123F3B] via-[#F4B72E] to-[#123F3B]" />

    </section>
  );
}


