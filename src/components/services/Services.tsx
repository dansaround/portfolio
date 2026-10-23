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
              AI Product Development
            </h3>
          </div>
          <ul className="p-10">
            <li className="flex items-start gap-4 mb-5">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">LLM-powered features with Claude and OpenAI (SSE streaming, prompt caching)</p>
            </li>
            <li className="flex items-start gap-4 mb-5">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">System prompt engineering, prompt versioning and LLM-as-a-judge audits</p>
            </li>
            <li className="flex items-start gap-4 mb-5">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">Behavioral analytics to improve prompts with real conversation data</p>
            </li>
            <li className="flex items-start gap-4">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">AI document import: Google Docs, PDF or Markdown into structured content</p>
            </li>
          </ul>
        </article>

        <article className="bg-bg-variant rounded-[0_0_2rem_2rem] border border-primary h-fit transition-all duration-400">
          <div className="bg-primary p-8 rounded-[0_0_2rem_2rem] shadow-[0_2rem_1rem_rgba(0,0,0,0.1)]">
            <h3 className="text-bg text-[1.1rem] font-medium text-center">
              Full-Stack Web Development
            </h3>
          </div>
          <ul className="p-10">
            <li className="flex items-start gap-4 mb-5">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">Next.js App Router + TypeScript, tRPC, Prisma and Supabase</p>
            </li>
            <li className="flex items-start gap-4 mb-5">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">Multi-tenant SaaS with roles, tiers and observability (PostHog)</p>
            </li>
            <li className="flex items-start gap-4 mb-5">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">Self-service payments (MercadoPago) and electronic invoicing</p>
            </li>
            <li className="flex items-start gap-4 mb-5">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">Deploys on Vercel, Google Cloud Run and AWS Lambda/SQS</p>
            </li>
            <li className="flex items-start gap-4">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">Responsive UIs designed in Figma, mobile apps with React Native</p>
            </li>
          </ul>
        </article>

        <article className="bg-bg-variant rounded-[0_0_2rem_2rem] border border-primary h-fit transition-all duration-400">
          <div className="bg-primary p-8 rounded-[0_0_2rem_2rem] shadow-[0_2rem_1rem_rgba(0,0,0,0.1)]">
            <h3 className="text-bg text-[1.1rem] font-medium text-center">
              Automation &amp; Content
            </h3>
          </div>
          <ul className="p-10">
            <li className="flex items-start gap-4 mb-5">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">AI WhatsApp chatbots that qualify leads (WhatsApp Cloud API)</p>
            </li>
            <li className="flex items-start gap-4 mb-5">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">Real-time CRM dashboards with Convex and appointment scheduling</p>
            </li>
            <li className="flex items-start gap-4 mb-5">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">Desktop tools like WhisperAround: Rust + Tauri apps with auto-updates</p>
            </li>
            <li className="flex items-start gap-4">
              <BsCheckCircleFill className="text-primary text-[1.2rem] min-w-[1.2rem] mt-[0.15rem] shrink-0" />
              <p className="text-[0.95rem] leading-[1.6]">Video scripts, editing and social media content strategy</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
