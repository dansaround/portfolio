import { experience } from "@/data/content";

const Experience = () => {
  return (
    <section id="experience">
      <p className="section-kicker">Where I&apos;ve worked</p>
      <h2>Experience</h2>

      <div className="container">
        <ol className="mx-auto max-w-[52rem] border-l border-primary/40 pl-6 sm:pl-10 space-y-10">
          {experience.map((job) => (
            <li key={`${job.role}-${job.org}`} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[1.85rem] sm:-left-[2.85rem] top-2 h-3 w-3 rounded-full bg-primary"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-[1.15rem]">
                  {job.role} <span className="text-primary">· {job.org}</span>
                </h3>
                <p className="text-[0.85rem] text-white/70">
                  {job.dates} · {job.place}
                </p>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-[0.95rem] text-white/80 marker:text-primary">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
