const Node = ({ title, detail }: { title: string; detail: string }) => (
  <div className="rounded-[0.8rem] border border-primary/40 bg-bg/70 px-4 py-3 text-center">
    <p className="font-medium text-[0.9rem]">{title}</p>
    <p className="text-[0.75rem] text-white/70">{detail}</p>
  </div>
);

const Edge = () => (
  <div className="flex items-center justify-center text-primary">
    <span aria-hidden="true" className="md:hidden">↓</span>
    <span aria-hidden="true" className="hidden md:inline">→</span>
  </div>
);

// Simplified version of the architecture diagram in the GitHub profile README.
const Architecture = () => (
  <figure className="mt-10">
    <figcaption className="mb-4 text-[0.85rem] text-white/70">
      Architecture (simplified)
    </figcaption>
    <div className="grid items-center gap-3 md:grid-cols-[1fr_auto_1.2fr_auto_1.6fr]">
      <Node title="Students & teachers" detail="web app" />
      <Edge />
      <Node title="Next.js app" detail="tRPC · Prisma" />
      <Edge />
      <div className="grid gap-3">
        <div className="grid grid-cols-[3.5rem_1fr] items-center gap-2">
          <span className="text-[0.7rem] uppercase tracking-wider text-primary text-right">SSE</span>
          <Node title="Tutor service" detail="Express on Cloud Run · Claude tool loop" />
        </div>
        <div className="grid grid-cols-[3.5rem_1fr] items-center gap-2">
          <span className="text-[0.7rem] uppercase tracking-wider text-primary text-right">SQS</span>
          <Node title="AWS Lambdas" detail="grading · explainer videos" />
        </div>
        <div className="grid grid-cols-[3.5rem_1fr] items-center gap-2">
          <span className="text-[0.7rem] uppercase tracking-wider text-primary text-right">SQL</span>
          <Node title="Postgres" detail="Supabase · shared by all services" />
        </div>
      </div>
    </div>
  </figure>
);

export default Architecture;
