"use client";

import { useState } from "react";
import { useApp } from "@/app/context/AppProviders";
import { uiText } from "@/data/portfolio";
import { Post } from "@/interfaces/post";
import PostList from "@/app/components/PostList";

interface BlogClientProps {
  posts: Post[];
}

export default function BlogClient({ posts }: BlogClientProps) {
  const { lang } = useApp();
  const [category, setCategory] = useState<"ALL" | Post["category"]>("ALL");

  const filtered =
    category === "ALL"
      ? posts
      : posts.filter((post) => post.category === category);

  const tabs: { key: "ALL" | Post["category"]; label: string }[] = [
    { key: "ALL", label: uiText.filters.all[lang] },
    { key: "IoT", label: uiText.filters.iot[lang] },
    { key: "AI", label: uiText.filters.ai[lang] },
    { key: "Education", label: uiText.filters.education[lang] },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="max-w-2xl">
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
          {uiText.sections.blogEyebrow[lang]}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
          {uiText.sections.blogTitle[lang]}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
          {uiText.sections.blogSubtitle[lang]}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const active = category === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setCategory(tab.key)}
              className={`rounded-xl px-3.5 py-2 text-xs font-medium transition cursor-pointer ${
                active
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950"
                  : "border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        <PostList posts={filtered} />
      </div>
    </div>
  );
}

