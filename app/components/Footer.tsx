"use client";

import Link from "next/link";
import { useApp } from "@/app/context/AppProviders";
import { profile, uiText } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, MessageCircleIcon } from "./Icons";

export default function Footer() {
  const { lang } = useApp();

  return (
    <footer className="border-t border-zinc-200/80 bg-white/60 transition-colors dark:border-zinc-800/80 dark:bg-zinc-950/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:px-6 dark:text-zinc-400">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <p className="font-medium text-zinc-700 dark:text-zinc-300">
            © {new Date().getFullYear()} {profile.name}. {uiText.footer.rights[lang]}
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            {profile.location} · {uiText.footer.builtWith[lang]}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/about"
            className="text-xs font-medium transition hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            {uiText.nav.about[lang]}
          </Link>
          <Link
            href="/projects"
            className="text-xs font-medium transition hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            {uiText.nav.projects[lang]}
          </Link>
          <Link
            href="/blog"
            className="text-xs font-medium transition hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            {uiText.nav.blog[lang]}
          </Link>

          <span className="h-3.5 w-px bg-zinc-200 dark:bg-zinc-800" aria-hidden="true" />

          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-zinc-500 transition hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
          >
            <MessageCircleIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
