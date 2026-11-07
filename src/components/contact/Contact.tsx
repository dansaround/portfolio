import type { ReactNode } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { links, profile } from "@/data/content";

const channels: { icon: ReactNode; title: string; detail: string; href: string; cta: string }[] = [
  {
    icon: <MdOutlineEmail />,
    title: "Email",
    detail: links.email,
    href: `mailto:${links.email}`,
    cta: "Send an email",
  },
  {
    icon: <BsLinkedin />,
    title: "LinkedIn",
    detail: "daniel-kcomt-ai-engineer",
    href: links.linkedin,
    cta: "Connect",
  },
  {
    icon: <BsGithub />,
    title: "GitHub",
    detail: "dansaround",
    href: links.github,
    cta: "See my code",
  },
  {
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    detail: links.whatsappLabel,
    href: links.whatsapp,
    cta: "Send a message",
  },
];

const Contact = () => {
  return (
    <section id="contact">
      <p className="section-kicker">Get in touch</p>
      <h2>Contact</h2>

      <div className="container text-center">
        <p className="text-white/85">{profile.availability}.</p>
        <p className="mt-1 text-[0.9rem] text-white/70">{profile.location}</p>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {channels.map((c) => (
            <li key={c.title} className="bg-bg-variant p-5 rounded-[1.2rem]">
              <span className="text-[1.5rem] text-primary inline-block" aria-hidden="true">
                {c.icon}
              </span>
              <h3 className="text-[1rem]">{c.title}</h3>
              <p className="text-[0.85rem] text-white/70 break-all">{c.detail}</p>
              <a
                href={c.href}
                {...(c.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="mt-3 inline-block text-[0.85rem]"
              >
                {c.cta}
              </a>
            </li>
          ))}
        </ul>

        <a href={profile.cv} download className="btn btn-primary mt-10 inline-flex items-center gap-2">
          <FiDownload aria-hidden="true" /> Download CV (PDF)
        </a>
      </div>
    </section>
  );
};

export default Contact;
