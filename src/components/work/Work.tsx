import { FiExternalLink, FiGithub, FiDownload } from "react-icons/fi";
import {
  earlierProjects,
  freelance,
  moddo,
  whisperAround,
} from "@/data/content";
import Architecture from "./Architecture";

const card = "bg-bg-variant rounded-[1.5rem] border border-white/5";

const Work = () => {
  return (
    <section id="work">
      <p className="section-kicker">What I build</p>
      <h2>Work</h2>

      <div className="container space-y-10">
        {/* Flagship */}
        <article className={`${card} p-6 sm:p-10`} aria-labelledby="moddo-title">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <p className="text-[0.8rem] uppercase tracking-widest text-primary">
                Flagship · in production
              </p>
              <h3 id="moddo-title" className="text-[1.8rem] leading-tight">
                {moddo.name}: {moddo.subtitle}
              </h3>
            </div>
            <a
              href={moddo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              {moddo.urlLabel} <FiExternalLink aria-hidden="true" />
            </a>
          </div>

          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {moddo.stats.map((s) => (
              <div key={s.label} className="rounded-[1rem] bg-bg/60 p-5">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block text-[2rem] font-semibold text-primary leading-none">
                    {s.value}
                  </span>
                  <span className="mt-2 block text-[0.85rem] text-white/75">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {moddo.areas.map((a) => (
              <div key={a.title}>
                <h4 className="text-primary">{a.title}</h4>
                <p className="mt-1 text-[0.95rem] text-white/80">{a.body}</p>
              </div>
            ))}
          </div>

          <Architecture />

          <p className="mt-6 text-[0.85rem] text-white/70 italic">{moddo.note}</p>
        </article>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Open source */}
          <article className={`${card} p-6 sm:p-8 flex flex-col`} aria-labelledby="wa-title">
            <video
              className="w-full rounded-[1rem] aspect-video bg-bg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/media/whisperaround-poster.webp"
              aria-label="WhisperAround demo: dictating text into an app"
            >
              <source src="/media/whisperaround.mp4" type="video/mp4" />
            </video>
            <p className="mt-6 text-[0.8rem] uppercase tracking-widest text-primary">
              {whisperAround.kind}
            </p>
            <h3 id="wa-title" className="text-[1.4rem]">{whisperAround.name}</h3>
            <p className="mt-2 text-[0.95rem] text-white/80">{whisperAround.body}</p>
            <p className="mt-3 text-[0.85rem] text-white/70">{whisperAround.stack}</p>
            <div className="mt-auto pt-6 flex flex-wrap gap-3">
              <a
                href={whisperAround.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center gap-2"
              >
                <FiGithub aria-hidden="true" /> Source
              </a>
              <a
                href={whisperAround.release}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex items-center gap-2"
              >
                <FiDownload aria-hidden="true" /> Latest release
              </a>
            </div>
          </article>

          {/* Freelance */}
          <article className={`${card} p-6 sm:p-8 flex flex-col`} aria-labelledby="fl-title">
            <p className="text-[0.8rem] uppercase tracking-widest text-primary">
              {freelance.kind}
            </p>
            <h3 id="fl-title" className="text-[1.4rem]">{freelance.name}</h3>
            <p className="mt-2 text-[0.95rem] text-white/80">{freelance.body}</p>

            <ol className="mt-6 grid gap-3 text-[0.9rem]" aria-label="How the lead flow works">
              {[
                "Lead writes on WhatsApp",
                "AI agent asks qualifying questions",
                "Qualified lead lands on the Kanban CRM in real time",
              ].map((step, i) => (
                <li key={step} className="flex items-center gap-3 rounded-[0.8rem] bg-bg/60 px-4 py-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-bg font-semibold">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>

            <p className="mt-auto pt-6 text-[0.85rem] text-white/70">{freelance.stack}</p>
          </article>
        </div>

        {/* Earlier side projects */}
        <div>
          <h3 className="text-[1.1rem] text-white/80">Earlier side projects</h3>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {earlierProjects.map((p) => (
              <li key={p.name} className={`${card} px-5 py-4 flex items-center justify-between gap-4`}>
                <div>
                  <p className="font-medium">{p.name}</p>
                  <p className="text-[0.85rem] text-white/70">{p.body}</p>
                </div>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[1.3rem] shrink-0"
                  aria-label={`${p.name} on GitHub`}
                >
                  <FiGithub />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
