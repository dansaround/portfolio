import { BsCheckCircleFill } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-10">
        <article className="bg-bg-variant rounded-[0_0_2rem_2rem] border border-primary h-fit transition-all duration-400">
          <div className="bg-primary p-8 rounded-[0_0_2rem_2rem] shadow-[0_2rem_1rem_rgba(0,0,0,0.1)]">
            <h3 className="text-bg text-[1.1rem] font-medium text-center">
              UI/UX Design
            </h3>
          </div>
          <ul className="p-10">
            <li className="flex items-start gap-4 mb-5">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">Logo Design</p>
            </li>
            <li className="flex items-start gap-4 mb-5">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">Branding Brief</p>
            </li>
            <li className="flex items-start gap-4 mb-5">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">Post&apos;s templates</p>
            </li>
            <li className="flex items-start gap-4">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">
                Unleash your brand&apos;s unique identity with our team of
                exceptional designers spanning Latin America.
              </p>
            </li>
          </ul>
        </article>

        <article className="bg-bg-variant rounded-[0_0_2rem_2rem] border border-primary h-fit transition-all duration-400">
          <div className="bg-primary p-8 rounded-[0_0_2rem_2rem] shadow-[0_2rem_1rem_rgba(0,0,0,0.1)]">
            <h3 className="text-bg text-[1.1rem] font-medium text-center">
              Web Development
            </h3>
          </div>
          <ul className="p-10">
            <li className="flex items-start gap-4 mb-5">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">
                This responsive website is an example of using HTML/CSS/JS with
                React.js Project.
              </p>
            </li>
            <li className="flex items-start gap-4 mb-5">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">
                Fully responsive websites
              </p>
            </li>
            <li className="flex items-start gap-4 mb-5">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">Backend approachable</p>
            </li>
            <li className="flex items-start gap-4 mb-5">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">E-Commerce is possible</p>
            </li>
            <li className="flex items-start gap-4">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">
                Search Engine Optimization
              </p>
            </li>
          </ul>
        </article>

        <article className="bg-bg-variant rounded-[0_0_2rem_2rem] border border-primary h-fit transition-all duration-400">
          <div className="bg-primary p-8 rounded-[0_0_2rem_2rem] shadow-[0_2rem_1rem_rgba(0,0,0,0.1)]">
            <h3 className="text-bg text-[1.1rem] font-medium text-center">
              Content Creation
            </h3>
          </div>
          <ul className="p-10">
            <li className="flex items-start gap-4 mb-5">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">Product Photography</p>
            </li>
            <li className="flex items-start gap-4 mb-5">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">Event Photography</p>
            </li>
            <li className="flex items-start gap-4 mb-5">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">Video Editing</p>
            </li>
            <li className="flex items-start gap-4">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">
                Social Media Content Creation
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
