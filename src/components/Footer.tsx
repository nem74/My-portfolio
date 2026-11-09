
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/nem74",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nehemiah-kiptoo-220518352",
    icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/n.e_m_nk/",
    icon: FaInstagram,
  },
];

export default function Footer() {
  return (
    <footer className="bg-white pt-10">
      <div className="bg-[#123F3B] text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-[1fr_1.4fr_1fr] md:gap-8">

            {/* LEFT: NAVIGATION */}
            <div className="order-2 pt-5 md:order-1 md:pt-9">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#F4B72E]">
                Explore
              </h3>

              <nav className="grid gap-2.5">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="w-fit text-xs text-white/75 transition hover:text-[#F4B72E]"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* CENTER: RAISED CARD */}
            <div className="order-1 col-span-2 md:order-2 md:col-span-1">
              <div className="-mt-10 rounded-b-[1.75rem] rounded-t-xl bg-[#D1DDB6] px-5 py-7 text-center text-[#123F3B] shadow-lg sm:px-7">

                <Link
                  to="/"
                  className="text-2xl font-black tracking-tight"
                >
                  NEHEMIAH
                  <span className="text-[#286F63]">.</span>
                </Link>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#286F63]">
                  Software Developer & Aspiring AI Engineer
                </p>

                <div className="mx-auto my-4 h-px w-16 bg-[#93A786]" />

                <h2 className="text-xl font-extrabold">
                  Let's Work Together.
                </h2>

                <p className="mx-auto mt-2 max-w-xs text-xs leading-5 text-[#416258]">
                  Have a project or opportunity?
                  I'd love to hear from you.
                </p>

                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#123F3B] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#286F63]"
                >
                  Get In Touch
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            {/* RIGHT: SOCIALS */}
            <div className="order-3 pt-5 md:pt-9">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#F4B72E]">
                Connect
              </h3>

              <div className="space-y-3">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-white/75 transition hover:text-[#F4B72E]"
                    >
                      <Icon size={16} />
                      {social.name}
                    </a>
                  );
                })}

                <a
                  href="mailto:nehemiahkiptoo7@gmail.com"
                  className="flex items-center gap-2 text-xs text-white/75 transition hover:text-[#F4B72E]"
                >
                  <Mail size={16} />
                  Email
                </a>
              </div>
            </div>

          </div>

          {/* COPYRIGHT */}
          <div className="mt-7 flex flex-col items-center justify-between gap-2 border-t border-white/15 py-4 text-center sm:flex-row">
            <p className="text-[11px] text-white/50">
              © {new Date().getFullYear()} Nehemiah Kiptoo.
              All rights reserved.
            </p>

            <p className="text-[11px] text-white/50">
              Built with React & TypeScript
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}


