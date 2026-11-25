import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "IoT hardware, web development, and AI engineering projects by Tu Bagus Dwi Fikri.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}

