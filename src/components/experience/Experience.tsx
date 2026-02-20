import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
        <div
          className="bg-bg-variant px-4 py-8 rounded-[2rem] border border-transparent
                     transition-all duration-400 sm:w-4/5 sm:mx-auto sm:p-8
                     md:w-auto md:px-20 md:py-10"
        >
          <h3 className="text-center mb-8 text-primary">Frontend Development</h3>
          <div className="grid grid-cols-2 gap-y-8 p-4 md:p-0">
            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>HTML</h4>
                <small className="text-white/60">Experienced</small>
              </div>
            </article>

            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>CSS</h4>
                <small className="text-white/60">Experienced</small>
              </div>
            </article>

            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>Typescript</h4>
                <small className="text-white/60">Experienced</small>
              </div>
            </article>

            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>Next.js</h4>
                <small className="text-white/60">Experienced</small>
              </div>
            </article>

            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-white/60">Experienced</small>
              </div>
            </article>

            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>React</h4>
                <small className="text-white/60">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div
          className="bg-bg-variant px-4 py-8 rounded-[2rem] border border-transparent
                     transition-all duration-400 sm:w-4/5 sm:mx-auto sm:p-8
                     md:w-auto md:px-20 md:py-10"
        >
          <h3 className="text-center mb-8 text-primary">Other Skills</h3>
          <div className="grid grid-cols-2 gap-y-8 p-4 md:p-0">
            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>Node.js</h4>
                <small className="text-white/60">Basic</small>
              </div>
            </article>

            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>GraphQL</h4>
                <small className="text-white/60">Basic</small>
              </div>
            </article>

            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>Proactive</h4>
                <small className="text-white/60">Experienced</small>
              </div>
            </article>

            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>Team Work</h4>
                <small className="text-white/60">Makes the dream work</small>
              </div>
            </article>

            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>Problem Solving</h4>
                <small className="text-white/60">The right mindset</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
