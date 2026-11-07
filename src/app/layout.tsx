import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import { profile } from "@/data/content";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

const siteUrl = "https://portfolio-dansarounds-projects.vercel.app";
const title = `${profile.name} | ${profile.role}`;
const description =
  "AI Engineer building LLM agents with tool use, evals and the infra around them (TypeScript, Next.js, Claude). Open to remote AI Engineer roles and freelance LLM work.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: profile.name, url: siteUrl }],
  keywords: [
    "AI Engineer",
    "LLM agents",
    "tool use",
    "LLM evals",
    "Claude",
    "Anthropic SDK",
    "Next.js",
    "TypeScript",
    "freelance",
    "remote",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: profile.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#1f1f38",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <a
          href="#work"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-20 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <Nav />
        {children}
      </body>
    </html>
  );
}
