import Image from "next/image";
import { education, profile } from "@/data/content";
import aboutPhoto from "../../../public/media/about.webp";

const facts = [
  { label: "Based in", value: profile.location },
  { label: "Languages", value: "English C2 (EF SET) · Spanish native" },
  { label: "Education", value: `${education.degree}, ${education.school}` },
];

const About = () => {
  return (
    <section id="about">
      <p className="section-kicker">Get to know me</p>
      <h2>About</h2>

      <div className="container grid items-center gap-10 md:grid-cols-[0.8fr_1.6fr] md:gap-16">
        <div className="mx-auto w-[70%] max-w-[18rem] md:w-full rounded-[2rem] bg-gradient-to-tr from-transparent via-primary to-transparent p-4">
          <Image
            src={aboutPhoto}
            alt="Daniel Kcomt working at his laptop"
            sizes="(min-width: 1024px) 18rem, 70vw"
            className="rounded-[1.5rem] rotate-[6deg] hover:rotate-0 transition-all duration-400"
          />
        </div>

        <div>
          <p className="text-white/85">
            I&apos;m an AI Engineer working in TypeScript and Next.js. Today I
            build Moddo, an AI tutor used by 4 schools in Latin America, from
            the Claude tool loop and the evals around it to payments and
            deploys. I also take freelance LLM work, like WhatsApp agents that
            qualify leads for a real estate business.
          </p>
          <p className="mt-4 text-white/85">
            Before AI, I spent five years as a frontend developer (2021–2026),
            after a degree in communications and work in marketing and VR tours.
            That background is why I care about the <em>why</em> behind the
            code: what the user needs and what the business gets out of it.
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label} className="rounded-[1rem] bg-bg-variant p-4">
                <dt className="text-[0.75rem] uppercase tracking-widest text-primary">
                  {f.label}
                </dt>
                <dd className="mt-1 text-[0.85rem] text-white/80">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;
