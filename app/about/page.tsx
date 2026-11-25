import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, education, awards, and engineering experience of Tu Bagus Dwi Fikri.",
};

export default function AboutPage() {
  return <AboutClient />;
}
