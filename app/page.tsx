import { getLatestPosts } from "@/app/lib/api";
import HomeClient from "@/app/components/HomeClient";

export default function HomePage() {
  const latestPosts = getLatestPosts(3);
  return <HomeClient latestPosts={latestPosts} />;
}
