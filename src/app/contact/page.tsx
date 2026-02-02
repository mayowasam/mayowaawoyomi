import type { Metadata } from "next";
import Contact from "../_components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mayowa Awoyomi for collaborations, job opportunities, or just a friendly hello.",
  openGraph: {
    title: "Contact | Mayowa Awoyomi",
    description: "Get in touch with Mayowa Awoyomi for collaborations or opportunities.",
  },
};

export default function ContactPage() {
  return <Contact />;
}