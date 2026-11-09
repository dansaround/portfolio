import { stack } from "@/data/content";

const Stack = () => {
  return (
    <section id="stack">
      <p className="section-kicker">Tools I use</p>
      <h2>Stack</h2>

      <dl className="container grid gap-5 sm:grid-cols-2">
        {stack.map((s) => (
          <div key={s.group} className="rounded-[1.2rem] bg-bg-variant p-6">
            <dt className="text-primary font-medium">{s.group}</dt>
            <dd className="mt-2 text-[0.95rem] text-white/80">{s.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Stack;
