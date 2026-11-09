import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { links, profile } from "@/data/content";
import portrait from "../../../public/media/daniel.webp";

const Header = () => {
  return (
    <header className="pt-16 pb-8 sm:pt-24">
      <div className="container grid items-center gap-12 md:grid-cols-[1.3fr_1fr]">
        <div className="text-center md:text-left">
          <p className="text-white/70">Hello, I&apos;m</p>
          <h1 className="leading-tight">{profile.name}</h1>
          <p className="mt-1 text-[1.6rem] font-medium text-primary">
            {profile.role}
          </p>
          <p className="mt-2 text-[0.95rem] text-white/70">{profile.tagline}</p>
          <p className="mt-6 text-white/85 max-w-[38rem] mx-auto md:mx-0">
            {profile.thesis}
          </p>

          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-bg-variant/60 px-4 py-1.5 text-[0.85rem] text-white/90">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            {profile.availability}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#contact" className="btn btn-primary">
              Let&apos;s talk
            </a>
            <a href={profile.cv} download className="btn">
              Download CV
            </a>
          </div>

          <div className="mt-8 flex gap-5 justify-center md:justify-start text-[1.4rem]">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <BsLinkedin />
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <BsGithub />
            </a>
          </div>
        </div>

        <div
          className="mx-auto w-[16rem] h-[21rem] sm:w-[20rem] sm:h-[26rem] overflow-hidden
                     rounded-[12rem_12rem_0_0] bg-gradient-to-b from-primary to-transparent pt-10 px-4"
        >
          <Image
            src={portrait}
            alt="Portrait of Daniel Kcomt"
            priority
            sizes="(min-width: 600px) 20rem, 16rem"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
