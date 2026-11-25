import type { Metadata } from "next";
import { getAllPosts } from "@/app/lib/api";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles on IoT, ESP32, Deep Learning, Web Development, and STEM mentoring by Tu Bagus Dwi Fikri.",
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  return <BlogClient posts={allPosts} />;
}

