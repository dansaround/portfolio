import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { links, profile } from "@/data/content";

const sections = [
  { href: "#", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const social =
  "bg-bg-variant text-white p-[0.8rem] rounded-[0.7rem] flex border border-transparent text-2xl hover:bg-transparent hover:text-bg-variant hover:border-bg-variant";

const Footer = () => {
  return (
    <footer className="bg-primary pt-12 pb-28 text-center text-[0.9rem] mt-28 text-bg">
      <p className="text-[2rem] font-medium">{profile.name}</p>
      <p className="mb-8">{profile.role}</p>

      <ul className="flex flex-wrap gap-x-8 gap-y-3 justify-center mx-auto mb-10 px-6">
        {sections.map((s) => (
          <li key={s.href}>
            <a href={s.href} className="text-bg hover:text-white">
              {s.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex justify-center gap-8 mb-10">
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className={social}>
          <FaLinkedinIn />
        </a>
        <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className={social}>
          <IoLogoGithub />
        </a>
      </div>

      <small>© {new Date().getFullYear()} Daniel Kcomt</small>
    </footer>
  );
};

export default Footer;
