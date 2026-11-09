
import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  BriefcaseBusiness,
  Code2,
} from "lucide-react";

import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const CONTACT_EMAIL = "nehemiahkiptoo7@gmail.com";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailSubject = encodeURIComponent(
      subject.trim() || `Portfolio inquiry from ${name}`
    );

    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <section className="min-h-screen bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* PAGE HEADER */}
        <div className="mb-16 text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F4B72E]" />

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#286F63]">
              Get In Touch
            </p>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-[#123F3B] sm:text-5xl lg:text-6xl">
            Let's{" "}
            <span className="text-[#286F63]">
              Connect.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#647773]">
            Have a project in mind, an opportunity to share,
            or simply want to connect? I'd be happy to
            hear from you.
          </p>
        </div>

        {/* CONTACT CONTENT */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="space-y-7">

            {/* LET'S TALK CARD */}
            <div className="rounded-3xl border border-[#DCE7E3] bg-[#F7F9F8] p-8 sm:p-10">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F2EE] text-[#286F63]">
                <MessageSquare size={27} />
              </div>

              <h2 className="text-3xl font-bold text-[#123F3B]">
                Let's Talk.
              </h2>

              <p className="mt-5 leading-8 text-[#647773]">
                I'm a software developer and aspiring AI
                engineer interested in creating practical
                digital solutions.
              </p>

              <p className="mt-4 leading-8 text-[#647773]">
                I'm open to internships, freelance
                opportunities, collaborations, and
                connecting with other developers.
              </p>

              {/* CONTACT DETAILS */}
              <div className="mt-9 space-y-6">

                {/* EMAIL */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8F2EE] text-[#286F63]">
                    <Mail size={22} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-[#647773]">
                      Email
                    </p>

                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="break-all font-semibold text-[#123F3B] transition hover:text-[#286F63]"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                {/* GITHUB */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8F2EE] text-[#286F63]">
                    <FaGithub size={23} />
                  </div>

                  <div>
                    <p className="text-sm text-[#647773]">
                      GitHub
                    </p>

                    <a
                      href="https://github.com/nem74"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#123F3B] transition hover:text-[#286F63]"
                    >
                      github.com/nem74
                    </a>
                  </div>
                </div>

                {/* INSTAGRAM */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8F2EE] text-[#286F63]">
                    <FaInstagram size={23} />
                  </div>

                  <div>
                    <p className="text-sm text-[#647773]">
                      Instagram
                    </p>

                    <a
                      href="https://www.instagram.com/n.e_m_nk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#123F3B] transition hover:text-[#286F63]"
                    >
                      @n.e_m_nk
                    </a>
                  </div>
                </div>

                {/* LINKEDIN */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8F2EE] text-[#286F63]">
                    <FaLinkedinIn size={23} />
                  </div>

                  <div>
                    <p className="text-sm text-[#647773]">
                      LinkedIn
                    </p>

                    <a
                      href="https://www.linkedin.com/in/nehemiah-kiptoo-220518352"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#123F3B] transition hover:text-[#286F63]"
                    >
                      Nehemiah Kiptoo
                    </a>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8F2EE] text-[#286F63]">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-[#647773]">
                      Location
                    </p>

                    <p className="font-semibold text-[#123F3B]">
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* OPPORTUNITIES CARD */}
            <div className="rounded-3xl bg-[#E8F2EE] p-8">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#286F63]">
                <BriefcaseBusiness size={24} />
              </div>

              <h3 className="text-xl font-bold text-[#123F3B]">
                Open to Opportunities
              </h3>

              <p className="mt-4 leading-7 text-[#647773]">
                I'm interested in opportunities that allow
                me to contribute, solve problems, and grow
                as a software developer and aspiring AI
                engineer.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Internships",
                  "Freelance",
                  "Collaboration",
                  "Open Source",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#286F63]"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: CONTACT FORM */}
          <div className="rounded-3xl border border-[#DCE7E3] bg-[#F7F9F8] p-8 sm:p-10">

            <div className="mb-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F2EE] text-[#286F63]">
                <Send size={25} />
              </div>

              <h2 className="text-3xl font-bold text-[#123F3B]">
                Send a Message
              </h2>

              <p className="mt-4 leading-7 text-[#647773]">
                Fill in the details below to prepare
                an email to me.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[#123F3B]"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full rounded-2xl border border-[#DCE7E3] bg-white px-5 py-4 text-[#123F3B] outline-none transition focus:border-[#286F63] focus:ring-2 focus:ring-[#286F63]/10"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#123F3B]"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-[#DCE7E3] bg-white px-5 py-4 text-[#123F3B] outline-none transition focus:border-[#286F63] focus:ring-2 focus:ring-[#286F63]/10"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-[#123F3B]"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="What's this about?"
                  className="w-full rounded-2xl border border-[#DCE7E3] bg-white px-5 py-4 text-[#123F3B] outline-none transition focus:border-[#286F63] focus:ring-2 focus:ring-[#286F63]/10"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#123F3B]"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full resize-none rounded-2xl border border-[#DCE7E3] bg-white px-5 py-4 text-[#123F3B] outline-none transition focus:border-[#286F63] focus:ring-2 focus:ring-[#286F63]/10"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-[#123F3B] px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#286F63] hover:shadow-lg"
              >
                Send Message
                <ArrowUpRight size={19} />
              </button>

              <p className="text-center text-xs leading-6 text-[#647773]">
                This opens your email application.
                Your message is sent only after you
                confirm it there.
              </p>

            </form>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-24 rounded-[2.5rem] bg-[#123F3B] px-8 py-14 text-center sm:px-12">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#F4B72E]">
            <Code2 size={30} />
          </div>

          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#F4B72E]">
            Keep Exploring
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            See What I've Been Building.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-white/75">
            Explore my development projects, technical
            interests, and the work I'm doing as I
            continue growing in software engineering.
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
