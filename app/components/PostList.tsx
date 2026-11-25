"use client";

import Link from "next/link";
import { useApp } from "@/app/context/AppProviders";
import { uiText } from "@/data/portfolio";
import { Post } from "@/interfaces/post";
import { ArrowRightIcon } from "./Icons";

interface PostListProps {
  posts: Post[];
}

function formatDate(dateStr: string, lang: "id" | "en") {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat(lang === "id" ? "id-ID" : "en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export default function PostList({ posts }: PostListProps) {
  const { lang } = useApp();

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="group flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
        >
          <div>
            <div className="mb-3 flex items-center justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                {post.category}
              </span>
              <span className="font-mono">
                {formatDate(post.date, lang)} · {post.readTimeMinutes}{" "}
                {uiText.sections.minRead[lang]}
              </span>
            </div>

            <h3 className="text-base font-semibold leading-snug tracking-tight text-zinc-900 transition-colors group-hover:text-emerald-600 dark:text-zinc-100 dark:group-hover:text-emerald-400">
              <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                {post.title[lang]}
              </Link>
            </h3>

            <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {post.excerpt[lang]}
            </p>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800/80">
            <div className="flex flex-wrap gap-1.5">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 transition group-hover:translate-x-0.5 dark:text-emerald-400"
            >
              <span>{uiText.sections.readArticle[lang]}</span>
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
