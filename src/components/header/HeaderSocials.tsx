import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div
      className="hidden sm:flex flex-col items-center gap-3 absolute left-0 bottom-12
                 after:content-[''] after:block after:w-px after:h-8 after:bg-primary"
    >
      <a
        href="https://www.linkedin.com/in/daniel-kcomt-frontend-developer/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/dansaround/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.instagram.com/dansaround_/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
