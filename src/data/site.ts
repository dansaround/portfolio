export const siteUrl = "https://portfolio-dansarounds-projects.vercel.app";

export const description =
  "Full-stack developer building AI-native products in production with Next.js, TypeScript and LLMs (Claude, OpenAI), from prompt engineering to payments, analytics and automation.";

export const links = {
  linkedin: "https://www.linkedin.com/in/daniel-kcomt-frontend-developer/",
  github: "https://github.com/dansaround/",
  instagram: "https://www.instagram.com/dansaround_/",
  email: "mailto:kcomtdaniel@gmail.com",
  emailLabel: "Kcomtdaniel@gmail.com",
  messenger: "https://m.me/DanKcomt",
  messengerLabel: "Daniel Kcomt",
  whatsapp:
    "https://wa.me/51932922494/?text=Hi%20Dan.%20I%20saw%20your%20Portfolio%20and%20wanted%20to%20contact%20you",
  phone: "+51 932 922 494",
  cv: "/assets/CV_202404.pdf",
} as const;

export const dictated =
  "Full-stack developer building AI-native products in production.";

export const about = [
  "Full-stack developer building AI-native products in production.",
  "Currently I ship an AI tutoring platform used by 4 schools across Latin America, from the Claude-powered tutor to analytics and payments, and an AI WhatsApp chatbot + CRM for real estate.",
  "I have a degree in Social Communication and years of experience in audiovisual production, marketing and project management, so I care about the why behind the code.",
  "Fluent English (C2), native Spanish.",
] as const;

export const facts = [
  { label: "Experience", value: "5+ Years Developing" },
  {
    label: "Clients",
    lines: ["Moddo (EdTech)", "MCODE", "Mónica Marín"],
  },
  { label: "Projects", value: "30+ Completed" },
] as const;

export const skillGroups = [
  {
    name: "Frontend & Mobile",
    items: [
      ["React", "Experienced"],
      ["Next.js", "Experienced"],
      ["TypeScript", "Experienced"],
      ["Tailwind", "Experienced"],
      ["React Native", "Expo, in production"],
      ["Jetpack Compose", "Kotlin, Android"],
    ],
  },
  {
    name: "Backend, AI & Cloud",
    items: [
      ["Claude & OpenAI", "LLMs in production"],
      ["tRPC & Prisma", "Experienced"],
      ["Supabase", "Experienced"],
      ["Convex", "Real-time apps"],
      ["GraphQL", "Apollo Client"],
      ["Vercel, GCP & AWS", "Cloud Run, Lambda, SQS"],
      ["Rust + Tauri", "Desktop apps"],
      ["PostHog", "Product analytics"],
    ],
  },
] as const;

export const services = [
  {
    name: "AI Product Development",
    still: "/media/projects/imagegen.webp",
    stillW: 300,
    stillH: 200,
    stillAlt: "AI Image Generator",
    points: [
      "LLM-powered features with Claude and OpenAI (SSE streaming, prompt caching)",
      "System prompt engineering, prompt versioning and LLM-as-a-judge audits",
      "Behavioral analytics to improve prompts with real conversation data",
      "AI document import: Google Docs, PDF or Markdown into structured content",
    ],
  },
  {
    name: "Full-Stack Web Development",
    still: "/media/projects/t3.webp",
    stillW: 300,
    stillH: 200,
    stillAlt: "T3 Gallery",
    points: [
      "Next.js App Router + TypeScript, tRPC, Prisma and Supabase",
      "Multi-tenant SaaS with roles, tiers and observability (PostHog)",
      "Self-service payments (MercadoPago) and electronic invoicing",
      "Deploys on Vercel, Google Cloud Run and AWS Lambda/SQS",
      "Responsive UIs designed in Figma, mobile apps with React Native",
    ],
  },
  {
    name: "Automation & Content",
    still: "/media/projects/sirvalo.webp",
    stillW: 300,
    stillH: 200,
    stillAlt: "Sirvalo Games | Android App",
    points: [
      "AI WhatsApp chatbots that qualify leads (WhatsApp Cloud API)",
      "Real-time CRM dashboards with Convex and appointment scheduling",
      "Desktop tools like WhisperAround: Rust + Tauri apps with auto-updates",
      "Video scripts, editing and social media content strategy",
    ],
  },
] as const;

/** Display order is intentional: WhisperAround leads. */
export const projects = [
  {
    id: "whisperaround",
    title: "WhisperAround: Voice Dictation",
    discipline: "Rust + Tauri v2 + Svelte",
    description:
      "Open-source desktop dictation: press a shortcut, speak, and the text appears in any app. Local Whisper or cloud models, signed auto-updates. Rust + Tauri v2 + Svelte",
    github: "https://github.com/dansaround/whisperaround",
    demo: "https://github.com/dansaround/whisperaround/releases/latest",
    width: 480,
    height: 270,
    base: "/media/projects/whisperaround",
  },
  {
    id: "anime2watch",
    title: "Responsive Web | Next.js",
    discipline: "Next.js + Typescript",
    description:
      "Used SSR and SSG with Anilists GraphQL API. Next.js + Typescript",
    github: "https://github.com/dansaround/anime2watch",
    demo: "https://anime2watch.vercel.app/",
    width: 300,
    height: 200,
    base: "/media/projects/anime2watch",
  },
  {
    id: "sirvalo",
    title: "Sirvalo Games | Android App",
    discipline: "Typescript",
    description:
      "Fullstack app with Node, React Native and Firebase | Repos are Private: links will redirect to customer's site. Typescript",
    github: "https://github.com/dansaround/hf-image-generator",
    demo: "https://www.instagram.com/sirvalo.games/",
    width: 300,
    height: 200,
    base: "/media/projects/sirvalo",
  },
  {
    id: "t3",
    title: "T3 Gallery",
    discipline: "Next.js + Typescript",
    description:
      "T3 Stack with Drizzle, Clerk, UploadThing, Posthog. Next.js + Typescript",
    github: "https://github.com/dansaround/gallery-t3",
    demo: "https://gallery-t3-five.vercel.app",
    width: 300,
    height: 200,
    base: "/media/projects/t3",
  },
  {
    id: "imagegen",
    title: "AI Image Generator",
    discipline: "React + Typescript",
    description:
      "Image Generator using Huggingface.js Inference API. React + Typescript",
    github: "https://github.com/dansaround/hf-image-generator",
    demo: "https://hf-image-generator.vercel.app/",
    width: 300,
    height: 200,
    base: "/media/projects/imagegen",
  },
  {
    id: "dancearound",
    title: "Dance Around: Personal Project",
    discipline: "React + Javascript",
    description:
      "Personal video library using Youtube's API. React + Javascript",
    github: "https://github.com/dansaround/dancearound",
    demo: "https://dancearound.vercel.app/",
    width: 300,
    height: 200,
    base: "/media/projects/dancearound",
  },
] as const;

export const testimonials = [
  {
    name: "Mónica Marin",
    review:
      "Increíble trabajar contigo, eres una persona muy profesional y con mucha experiencia. Me encantó tu trabajo y tu forma de trabajar.",
  },
  {
    name: "Justin Barrero",
    review:
      "Muchas gracias por tu trabajo, me encantó tu forma de trabajar y tu profesionalidad. Sin duda volveré a trabajar contigo.",
  },
  {
    name: "Ronald Prato",
    review:
      "Hey! para el poco tiempo que llevas en esto, eres una persona muy aplicada y has ganado experiencia en muy poco tiempo",
  },
] as const;

export const footerNav = [
  ["Home", "#top"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Services", "#services"],
  ["Portfolio", "#portfolio"],
  ["Testimonials", "#testimonials"],
  ["Contact", "#contact"],
] as const;
