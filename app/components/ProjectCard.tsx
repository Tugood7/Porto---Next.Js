"use client";

import { useApp } from "@/app/context/AppProviders";
import { Project } from "@/interfaces/post";
import { ArrowUpRightIcon, GithubIcon } from "./Icons";

interface ProjectCardProps {
  project: Project;
  showHighlights?: boolean;
}

const categoryStyle: Record<Project["category"], string> = {
  IoT: "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/20",
  Web: "bg-sky-50 text-sky-700 ring-sky-200 dark:bg-sky-500/10 dark:text-sky-300 dark:ring-sky-500/20",
  AI: "bg-violet-50 text-violet-700 ring-violet-200 dark:bg-violet-500/10 dark:text-violet-300 dark:ring-violet-500/20",
};

export default function ProjectCard({
  project,
  showHighlights = false,
}: ProjectCardProps) {
  const { lang } = useApp();

  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700 dark:hover:bg-zinc-900">
      <div>
        {/* Meta row */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${categoryStyle[project.category]}`}
            >
              {project.category}
            </span>
            {project.badge && (
              <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                {project.badge[lang]}
              </span>
            )}
          </div>
          <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
            {project.year}
          </span>
        </div>

        {/* Title & subtitle */}
        <h3 className="text-lg font-semibold tracking-tight text-zinc-900 transition-colors group-hover:text-emerald-600 dark:text-zinc-100 dark:group-hover:text-emerald-400">
          {project.title[lang]}
        </h3>
        <p className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
          {project.subtitle[lang]}
        </p>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.description[lang]}
        </p>

        {/* Optional highlights */}
        {showHighlights && project.highlights[lang].length > 0 && (
          <ul className="mt-4 space-y-1.5 border-t border-zinc-100 pt-4 text-xs leading-relaxed text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
            {project.highlights[lang].map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer: tech stack + links */}
      <div className="mt-5 flex flex-col gap-4 border-t border-zinc-100 pt-4 dark:border-zinc-800/80">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-zinc-100 px-2 py-0.5 font-mono text-[11px] font-medium text-zinc-700 dark:bg-zinc-800/90 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.githubUrl || project.liveUrl) && (
          <div className="flex items-center gap-4 text-xs font-medium">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
              >
                <span>Live Site</span>
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

