"use client";

import { useState } from "react";
import { useApp } from "@/app/context/AppProviders";
import { projects, uiText } from "@/data/portfolio";
import { ProjectCategory } from "@/interfaces/post";
import ProjectCard from "@/app/components/ProjectCard";

export default function ProjectsClient() {
  const { lang } = useApp();
  const [filter, setFilter] = useState<"ALL" | ProjectCategory>("ALL");

  const filteredProjects =
    filter === "ALL"
      ? projects
      : projects.filter((project) => project.category === filter);

  const tabs: { key: "ALL" | ProjectCategory; label: string; count: number }[] = [
    { key: "ALL", label: uiText.filters.all[lang], count: projects.length },
    {
      key: "IoT",
      label: uiText.filters.iot[lang],
      count: projects.filter((p) => p.category === "IoT").length,
    },
    {
      key: "Web",
      label: uiText.filters.web[lang],
      count: projects.filter((p) => p.category === "Web").length,
    },
    {
      key: "AI",
      label: uiText.filters.ai[lang],
      count: projects.filter((p) => p.category === "AI").length,
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="max-w-2xl">
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
          {uiText.sections.projectsEyebrow[lang]}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
          {uiText.sections.projectsTitle[lang]}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
          {uiText.sections.projectsSubtitle[lang]}
        </p>
      </div>

      {/* Filter Bar */}
      <div className="mt-8 flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const active = filter === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setFilter(tab.key)}
              className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-medium transition cursor-pointer ${
                active
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950"
                  : "border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`rounded-md px-1.5 py-0.5 font-mono text-[10px] ${
                  active
                    ? "bg-white/20 text-white dark:bg-zinc-900/15 dark:text-zinc-900"
                    : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} showHighlights />
        ))}
      </div>
    </div>
  );
}

