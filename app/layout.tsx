import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sochark Technologies — Software, AI & Cloud Studio",
    template: "%s — Sochark Technologies",
  },
  description:
    "Sochark Technologies builds web platforms, mobile apps, AI automation, and cloud infrastructure for ambitious businesses. Development, design, DevOps, training, and outsourcing under one roof.",
  keywords: [
    "software development",
    "AI automation",
    "web development",
    "mobile apps",
    "cloud devops",
    "IT outsourcing",
    "Sochark Technologies",
  ],
  openGraph: {
    title: "Sochark Technologies — Software, AI & Cloud Studio",
    description:
      "We design, build, and scale digital products that think. Web, mobile, AI, cloud, and dedicated teams.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <Cursor />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
