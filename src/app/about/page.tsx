import type { Metadata } from "next";
import About from "../_components/About";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Mayowa Awoyomi - Software Engineer with 5+ years of experience building scalable systems and digital experiences.",
  openGraph: {
    title: "About | Mayowa Awoyomi",
    description: "Learn more about Mayowa Awoyomi - Software Engineer with 5+ years of experience.",
  },
};

export default function AboutPage() {
  return <About />;
}