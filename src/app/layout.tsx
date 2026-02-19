import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/Nav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Daniel Kcomt | Frontend Developer",
  description:
    "Frontend Developer specializing in React.js and Next.js. Building responsive, performant web experiences.",
  openGraph: {
    title: "Daniel Kcomt | Frontend Developer",
    description:
      "Frontend Developer specializing in React.js and Next.js. Building responsive, performant web experiences.",
    type: "website",
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
