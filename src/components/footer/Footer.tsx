import { FiInstagram } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 text-center text-[0.9rem] mt-28">
      <a href="#" className="text-[2.5rem] font-medium mb-8 inline-block text-bg">
        Thanks for visiting
      </a>

      <ul className="flex flex-col gap-6 flex-wrap justify-center mx-auto mb-12 sm:flex-row sm:gap-8">
        <li>
          <a href="#" className="text-bg">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-bg">
            About
          </a>
        </li>
        <li>
          <a href="#experience" className="text-bg">
            Experience
          </a>
        </li>
        <li>
          <a href="#services" className="text-bg">
            Services
          </a>
        </li>
        <li>
          <a href="#portfolio" className="text-bg">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#testimonials" className="text-bg">
            Testimonials
          </a>
        </li>
        <li>
          <a href="#contact" className="text-bg">
            Contact
          </a>
        </li>
      </ul>

      <div className="flex justify-center gap-12 mb-16">
        <a
          href="https://www.linkedin.com/in/daniel-kcomt-frontend-developer/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-bg-variant text-white p-[0.8rem] rounded-[0.7rem] flex border border-transparent text-2xl
                     hover:bg-transparent hover:text-bg-variant hover:border-bg-variant"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/dansaround/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-bg-variant text-white p-[0.8rem] rounded-[0.7rem] flex border border-transparent text-2xl
                     hover:bg-transparent hover:text-bg-variant hover:border-bg-variant"
        >
          <IoLogoGithub />
        </a>
        <a
          href="https://www.instagram.com/dansaround_/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-bg-variant text-white p-[0.8rem] rounded-[0.7rem] flex border border-transparent text-2xl
                     hover:bg-transparent hover:text-bg-variant hover:border-bg-variant"
        >
          <FiInstagram />
        </a>
      </div>

      <div className="mb-16 text-bg">
        <small>Daniel Kcomt. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
