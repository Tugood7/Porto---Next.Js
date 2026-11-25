"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useApp } from "@/app/context/AppProviders";
import {
  achievements,
  education,
  profile,
  projects,
  skillGroups,
  uiText,
} from "@/data/portfolio";
import { Post, ProjectCategory } from "@/interfaces/post";
import ProjectCard from "./ProjectCard";
import PostList from "./PostList";
import ContactSection from "./ContactSection";
import Reveal from "./Reveal";
import {
  ArrowRightIcon,
  AwardIcon,
  GithubIcon,
  GraduationCapIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
} from "./Icons";

const LanyardCard = dynamic(() => import("./LanyardCard"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[430px] w-full items-center justify-center sm:h-[470px]">
      <div className="h-72 w-48 animate-pulse rounded-3xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900" />
    </div>
  ),
});

interface HomeClientProps {
  latestPosts: Post[];
}

export default function HomeClient({ latestPosts }: HomeClientProps) {
  const { lang } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<
    "ALL" | ProjectCategory
  >("ALL");

  const visibleProjects =
    selectedCategory === "ALL"
      ? projects.filter((p) => p.featured).slice(0, 6)
      : projects.filter((p) => p.category === selectedCategory).slice(0, 6);

  const filterTabs: { key: "ALL" | ProjectCategory; label: string }[] = [
    { key: "ALL", label: uiText.filters.all[lang] },
    { key: "IoT", label: uiText.filters.iot[lang] },
    { key: "Web", label: uiText.filters.web[lang] },
    { key: "AI", label: uiText.filters.ai[lang] },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      {/* HERO SECTION */}
      <section className="relative pt-4 pb-16 sm:pt-8 sm:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-12 left-1/2 -z-10 h-72 w-full max-w-2xl -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/12"
        />

        {/* Free-roaming Full-Width 3D Lanyard Overlay (desktop: overlaps full Hero width so card can be dragged anywhere!) */}
        <div className="relative z-20 -mx-4 -mt-4 md:pointer-events-none md:absolute md:inset-x-[-10vw] md:-top-8 md:mx-0">
          <LanyardCard
            photoSrc="/profile-cutout.png"
            name={profile.name}
            role="Software · IT · IoT Engineer"
            gravity={-22}
            desktopAnchorRatio={0.46}
          />
        </div>

        <div className="relative z-10 grid items-center gap-8 md:min-h-[500px] md:grid-cols-12">
          <div className="md:col-span-7">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availability[lang]}
            </div>

            <p className="mt-6 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {uiText.hero.greeting[lang]}
            </p>
            <h1 className="mt-1 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
              {profile.name}
            </h1>
            <p className="mt-3 font-mono text-sm font-medium text-emerald-600 sm:text-base dark:text-emerald-400">
              {profile.headline[lang]}
            </p>

            <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {profile.summary[lang]}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-emerald-600 dark:bg-white dark:text-zinc-950 dark:hover:bg-emerald-400"
              >
                <span>{uiText.hero.ctaProjects[lang]}</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-800 transition hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
              >
                {uiText.hero.ctaContact[lang]}
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
              >
                {uiText.hero.ctaAbout[lang]}
              </Link>
            </div>

            {/* Subtle location & socials */}
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPinIcon className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                {profile.location}
              </span>
              <span className="hidden h-3 w-px bg-zinc-200 sm:inline-block dark:bg-zinc-800" />
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 transition hover:text-zinc-900 dark:hover:text-white"
              >
                <MailIcon className="h-3.5 w-3.5" />
                <span>{profile.email}</span>
              </a>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition hover:text-zinc-900 dark:hover:text-white"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>{profile.githubUsername}</span>
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition hover:text-zinc-900 dark:hover:text-white"
              >
                <LinkedinIcon className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Spacer column on desktop where the 3D Lanyard naturally rests */}
          <div className="hidden md:col-span-5 md:block" aria-hidden="true" />
        </div>

        {/* Key metrics strip */}
        <Reveal delay={80} className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {profile.stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-2xl border border-zinc-200/80 bg-white px-4 py-4 transition-transform duration-200 hover:-translate-y-0.5 dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <p className="font-mono text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl dark:text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                {stat.label[lang]}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ABOUT SNAPSHOT */}
      <Reveal>
        <section className="border-t border-zinc-200/80 py-16 sm:py-20 dark:border-zinc-800/80">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <p className="font-mono text-xs font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                {uiText.sections.aboutEyebrow[lang]}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
                {uiText.sections.aboutTitle[lang]}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
                {profile.aboutExtended[lang]}
              </p>

              <div className="mt-6">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 transition hover:gap-2.5 dark:text-emerald-400"
                >
                  <span>{uiText.sections.readFullStory[lang]}</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="space-y-4 lg:col-span-2">
              {/* Education highlight */}
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 transition hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700">
                <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400">
                  <GraduationCapIcon className="h-4 w-4" />
                  <span className="font-mono text-xs font-medium uppercase tracking-wider">
                    {uiText.aboutPage.educationTitle[lang]}
                  </span>
                </div>
                <p className="mt-2.5 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {education.institution}
                </p>
                <p className="mt-0.5 text-xs text-zinc-600 dark:text-zinc-400">
                  {education.degree[lang]} · GPA {education.gpa}
                </p>
                <p className="mt-1 font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
                  {education.period[lang]}
                </p>
              </div>

              {/* Top award highlight */}
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 transition hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700">
                <div className="flex items-center gap-2.5 text-amber-600 dark:text-amber-400">
                  <AwardIcon className="h-4 w-4" />
                  <span className="font-mono text-xs font-medium uppercase tracking-wider">
                    {achievements[0].category[lang]}
                  </span>
                </div>
                <p className="mt-2.5 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {achievements[0].title[lang]}
                </p>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  {achievements[0].issuer}
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* SKILLS SECTION */}
      <Reveal>
        <section className="border-t border-zinc-200/80 py-16 sm:py-20 dark:border-zinc-800/80">
          <div className="mb-10">
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              {uiText.sections.skillsEyebrow[lang]}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
              {uiText.sections.skillsTitle[lang]}
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.id}
                className="rounded-2xl border border-zinc-200/80 bg-white p-5 transition hover:-translate-y-0.5 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
              >
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {group.title[lang]}
                </h3>
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-zinc-200/80 bg-zinc-50 px-2.5 py-1 font-mono text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* FEATURED PROJECTS SECTION */}
      <Reveal>
        <section className="border-t border-zinc-200/80 py-16 sm:py-20 dark:border-zinc-800/80">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                {uiText.sections.projectsEyebrow[lang]}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
                {uiText.sections.projectsTitle[lang]}
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {uiText.sections.projectsSubtitle[lang]}
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {filterTabs.map((tab) => {
                const active = selectedCategory === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setSelectedCategory(tab.key)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition cursor-pointer ${
                      active
                        ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950"
                        : "border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 transition hover:gap-2.5 dark:text-emerald-400"
            >
              <span>
                {uiText.sections.viewAllProjects[lang]} ({projects.length})
              </span>
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </Reveal>

      {/* LATEST BLOG / POSTS */}
      <Reveal>
        <section className="border-t border-zinc-200/80 py-16 sm:py-20 dark:border-zinc-800/80">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                {uiText.sections.blogEyebrow[lang]}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
                {uiText.sections.blogTitle[lang]}
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {uiText.sections.blogSubtitle[lang]}
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 transition hover:gap-2.5 dark:text-emerald-400"
            >
              <span>{uiText.sections.viewAllPosts[lang]}</span>
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <PostList posts={latestPosts} />
        </section>
      </Reveal>

      {/* CONTACT SECTION */}
      <Reveal>
        <div className="border-t border-zinc-200/80 dark:border-zinc-800/80">
          <ContactSection />
        </div>
      </Reveal>
    </div>
  );
}
