import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/Nav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

const siteUrl = "https://portfolio-dansarounds-projects.vercel.app";
const description =
  "Full-stack developer building AI-native products in production with Next.js, TypeScript and LLMs (Claude, OpenAI), from prompt engineering to payments, analytics and automation.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Daniel Kcomt | Full-Stack Developer",
  description,
  openGraph: {
    title: "Daniel Kcomt | Full-Stack Developer",
    description,
    url: siteUrl,
    siteName: "Daniel Kcomt",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/about.png",
        width: 1200,
        height: 630,
        alt: "Daniel Kcomt - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Kcomt | Full-Stack Developer",
    description,
    images: ["/assets/about.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
