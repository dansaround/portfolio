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
  "Frontend Developer specializing in React.js and Next.js. I build responsive, performant web experiences with a strong focus on UI/UX and business impact.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Daniel Kcomt | Frontend Developer",
  description,
  openGraph: {
    title: "Daniel Kcomt | Frontend Developer",
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
        alt: "Daniel Kcomt - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Kcomt | Frontend Developer",
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
