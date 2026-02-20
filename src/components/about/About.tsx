import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container grid grid-cols-1 place-items-center md:grid-cols-[20%_60%] md:gap-[8%] md:justify-center">
        <div
          className="w-[65%] mx-auto mb-12 sm:w-1/2 sm:mt-8 sm:mb-16 md:w-[120%] md:mx-0 md:my-0
                     aspect-square rounded-[2rem]
                     bg-gradient-to-tr from-transparent via-primary to-transparent
                     grid place-items-center"
        >
          <div className="rounded-[2rem] overflow-hidden rotate-[10deg] hover:rotate-0 transition-all duration-400">
            <img src="/assets/about.png" alt="Daniel Kcomt" />
          </div>
        </div>

        <div className="text-center sm:text-left">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
            <article className="bg-bg-variant border border-transparent rounded-[1rem] p-8 text-center transition-all duration-400">
              <FaAward className="text-primary text-[1.4rem] mb-4 mx-auto" />
              <h5 className="text-[0.95rem] text-white/60">Experience</h5>
              <small className="text-[0.7rem] text-white/60">
                2 Years Developing
              </small>
            </article>

            <article className="bg-bg-variant border border-transparent rounded-[1rem] p-8 text-center transition-all duration-400">
              <FiUsers className="text-primary text-[1.4rem] mb-4 mx-auto" />
              <h5 className="text-[0.95rem] text-white/60">Clients</h5>
              <div className="flex flex-col">
                <small className="text-[0.7rem] text-white/60">Jausme App</small>
                <small className="text-[0.7rem] text-white/60">
                  CoDev Agency
                </small>
                <small className="text-[0.7rem] text-white/60">
                  Mónica Marín
                </small>
              </div>
            </article>

            <article className="bg-bg-variant border border-transparent rounded-[1rem] p-8 text-center transition-all duration-400">
              <VscFolderLibrary className="text-primary text-[1.4rem] mb-4 mx-auto" />
              <h5 className="text-[0.95rem] text-white/60">Projects</h5>
              <small className="text-[0.7rem] text-white/60">30+ Completed</small>
            </article>
          </div>

          <p className="text-white/60 my-6 sm:mt-4 sm:mb-6 md:mt-8 md:mb-[2.6rem]">
            I am a 28-year-old Frontend Developer specializing in React.js. I
            have a degree in Social Communication and a wealth of experience in
            radio production, communication strategy, marketing analysis, and
            project management.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
