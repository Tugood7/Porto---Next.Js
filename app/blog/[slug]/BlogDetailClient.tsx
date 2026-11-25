"use client";

import Link from "next/link";
import { useApp } from "@/app/context/AppProviders";
import { uiText } from "@/data/portfolio";
import { Post } from "@/interfaces/post";
import { ArrowLeftIcon } from "@/app/components/Icons";

interface BlogDetailClientProps {
  post: Post;
}

function formatDate(dateStr: string, lang: "id" | "en") {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat(lang === "id" ? "id-ID" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export default function BlogDetailClient({ post }: BlogDetailClientProps) {
  const { lang } = useApp();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        <span>{uiText.blogDetail.backToBlog[lang]}</span>
      </Link>

      <header className="mt-6 border-b border-zinc-200/80 pb-8 dark:border-zinc-800/80">
        <div className="flex flex-wrap items-center gap-2.5 text-xs text-zinc-500 dark:text-zinc-400">
          <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
            {post.category}
          </span>
          <span className="font-mono">{formatDate(post.date, lang)}</span>
          <span>·</span>
          <span className="font-mono">
            {post.readTimeMinutes} {uiText.sections.minRead[lang]}
          </span>
        </div>

        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
          {post.title[lang]}
        </h1>

        <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {post.excerpt[lang]}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-zinc-100 px-2.5 py-1 font-mono text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      <div className="mt-8 space-y-8">
        {post.sections.map((section, idx) => (
          <section key={idx} className="space-y-4">
            {section.heading && (
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                {section.heading[lang]}
              </h2>
            )}
            {section.paragraphs[lang].map((paragraph, pIdx) => (
              <p
                key={pIdx}
                className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300"
              >
                {paragraph}
              </p>
            ))}
            {section.code && (
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800">
                <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2 font-mono text-xs text-zinc-400">
                  <span>{section.code.language}</span>
                </div>
                <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-emerald-300 sm:text-sm">
                  <code>{section.code.snippet}</code>
                </pre>
              </div>
            )}
          </section>
        ))}
      </div>

      <div className="mt-12 border-t border-zinc-200/80 pt-8 dark:border-zinc-800/80">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 transition hover:gap-2.5 dark:text-emerald-400"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          <span>{uiText.blogDetail.backToBlog[lang]}</span>
        </Link>
      </div>
    </article>
  );
}

