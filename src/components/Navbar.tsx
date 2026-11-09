
import { NavLink } from "react-router-dom";
import profileImage from "../assets/profile.jpg";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-dark">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-6 py-5">

        {/* Profile */}
        <NavLink
          to="/"
          aria-label="Home"
          className="group shrink-0"
        >
          <img
            src={profileImage}
            alt="Nehemiah"
            className="h-14 w-14 rounded-full border-[3px] border-primary object-cover transition duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(244,183,46,0.35)]"
          />
        </NavLink>

        {/* Navigation */}
        <div className="flex flex-wrap items-center gap-2">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                `rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "border-primary bg-primary text-dark"
                    : "border-white/20 bg-forest text-white hover:border-primary hover:text-primary"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
