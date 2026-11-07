// Single source for the site copy. Every figure here comes from the CV or the
// GitHub profile README: do not add numbers that are not in those sources.

export const profile = {
  name: "Daniel Kcomt",
  role: "AI Engineer",
  tagline: "TypeScript / Next.js · LLM agents with tool use, evals and the infra around them",
  thesis:
    "I build AI products that real people use every day: agents that act through tools, the evaluation harnesses that keep them honest, and the payments, data and deploys that make them a business.",
  availability: "Open to remote AI Engineer roles and freelance LLM work",
  location: "Lima, Peru (UTC-5) · remote",
  cv: "/cv/Daniel-Kcomt-CV.pdf",
};

export const links = {
  email: "kcomtdaniel@gmail.com",
  linkedin: "https://www.linkedin.com/in/daniel-kcomt-ai-engineer/",
  github: "https://github.com/dansaround",
  whatsapp:
    "https://wa.me/51932922494?text=Hi%20Dan.%20I%20saw%20your%20portfolio%20and%20wanted%20to%20contact%20you",
  whatsappLabel: "+51 932 922 494",
};

export const moddo = {
  name: "Moddo",
  subtitle: "AI tutor for schools",
  url: "https://moddolearn.com",
  urlLabel: "moddolearn.com",
  stats: [
    { value: "4", label: "schools in Latin America, in production" },
    { value: "4,200+", label: "real student–tutor conversations" },
    { value: "~99%", label: "input-token savings from the second turn (prompt caching)" },
  ],
  note: "Private code, happy to walk through it in an interview.",
  areas: [
    {
      title: "Agentic tool use",
      body: "A custom tool loop on the Anthropic SDK: Zod-validated tool inputs, iteration caps and self-correction when a call is rejected. The tutor decides through 6 tools when to record evidence of understanding, update progress and signal mastery.",
    },
    {
      title: "Teacher analytics agent",
      body: "Answers questions in natural language with 7 permission-scoped data tools and up to 8 tool rounds per turn. Adversarial tests make sure a teacher never sees students outside their courses.",
    },
    {
      title: "Evals",
      body: "An E2E multi-turn harness with LLM-simulated students against the live endpoint, plus an offline harness that mixes code-based graders (expected tool calls) with LLM-as-a-judge. Prompts are versioned by SHA-256, and the harnesses decide model swaps: a cheaper model was rejected because it skipped progress tracking.",
    },
    {
      title: "Cost",
      body: "Prompt caching with separate cache blocks: ~99% input-token savings from the second turn on.",
    },
    {
      title: "Payments in LATAM",
      body: "MercadoPago checkout + Alegra electronic invoicing (DIAN), national and export.",
    },
  ],
};

export const whisperAround = {
  name: "WhisperAround",
  kind: "Open source",
  body: "Voice dictation for desktop. Press a shortcut, speak, and the text is typed into whatever app you are using. Runs Whisper models locally or in the cloud, with signed auto-updates shipped through GitHub Actions.",
  stack: "Rust · Tauri v2 · Svelte",
  repo: "https://github.com/dansaround/whisperaround",
  release: "https://github.com/dansaround/whisperaround/releases/latest",
};

export const freelance = {
  name: "WhatsApp lead qualification",
  kind: "Freelance · real estate",
  body: "An AI chatbot (OpenAI behind a provider-agnostic layer + WhatsApp Cloud API) that qualifies leads and feeds a real-time Kanban CRM.",
  stack: "Next.js · Convex · WhatsApp Cloud API · OpenAI",
};

export const earlierProjects = [
  {
    name: "T3 Gallery",
    body: "T3 Stack app with auth, uploads and rate limiting.",
    repo: "https://github.com/dansaround/gallery-t3",
  },
  {
    name: "Anime2Watch",
    body: "Next.js + GraphQL, with SSR and SSG.",
    repo: "https://github.com/dansaround/anime2watch",
  },
];

export const experience = [
  {
    role: "AI Product Developer",
    org: "Moddo (EdTech)",
    place: "Remote",
    dates: "Apr 2026 – Present",
    points: [
      "Full-stack AI tutoring platform (Next.js App Router + T3 Stack + Supabase) serving 4 schools across Latin America, with 4,200+ real student–tutor conversations.",
      "Migrated the AI engine to the native Anthropic SDK with a custom agentic tool loop and prompt caching (~99% input-token savings from the second turn).",
      "LLM evaluation workflow used to A/B models and prompts; analyzed 210 conversations across 12 prompt epochs, producing 7 actionable findings.",
      "Self-service payments with MercadoPago + Alegra electronic invoicing (DIAN), national and export for 7+ countries.",
    ],
  },
  {
    role: "AI Automation Developer",
    org: "Freelance (real estate)",
    place: "Remote",
    dates: "Feb 2026 – Present",
    points: [
      "AI WhatsApp chatbot for lead qualification (OpenAI behind a provider-agnostic abstraction + WhatsApp Cloud API) feeding a real-time Kanban CRM (Next.js + Convex).",
    ],
  },
  {
    role: "Frontend Developer",
    org: "Independent",
    place: "Remote",
    dates: "Mar 2021 – Mar 2026",
    points: [
      "MCODE (2024–2025): React/Next.js/Tailwind web apps and a Jetpack Compose native app; Figma UIs for 5+ clients, cutting prototype time 30%.",
      "Sirvalo Games (2023–2024): cross-platform card game with React Native (Expo) and PayPal in-app purchases, 500+ downloads in 3 months.",
      "Club Pyme (Mexico, 2023): scalable frontend with React + Apollo GraphQL.",
      "Jausme Startup (2023): React back office app with a REST API, reducing task completion time 15%.",
    ],
  },
  {
    role: "VR Tour Developer",
    org: "Uberflug Tech Marketing",
    place: "Bogotá, Colombia",
    dates: "Jun 2018 – Mar 2020",
    points: [
      "360° VR tours for 20+ clients; managed a project nominated for Best Marketing Initiative 2019 by FENALCO.",
    ],
  },
];

export const education = {
  degree: "Bachelor's Degree in Social Communication, Cum Laude",
  school: "Monteávila University, Caracas",
  dates: "2012 – 2017",
};

export const stack = [
  {
    group: "AI",
    items:
      "Claude SDK, OpenAI API, tool use and agent loops, evals (code graders + LLM-as-a-judge), prompt caching, structured outputs (Zod), SSE streaming",
  },
  {
    group: "Web",
    items: "TypeScript, Next.js (App Router), React, tRPC, Tailwind CSS, React Native (Expo)",
  },
  {
    group: "Data & infra",
    items: "PostgreSQL, Prisma, Supabase, Convex, Redis, AWS Lambda + SQS, Google Cloud Run, Vercel",
  },
  {
    group: "Integrations & tooling",
    items: "MercadoPago, Alegra (DIAN), WhatsApp Cloud API, PostHog, Resend, Playwright (E2E), Claude Code",
  },
];
