"use client";

import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/app/context/AppProviders";
import {
  achievements,
  education,
  experiences,
  languagesSpoken,
  organizations,
  profile,
  softSkills,
  uiText,
} from "@/data/portfolio";
import {
  ArrowRightIcon,
  AwardIcon,
  BriefcaseIcon,
  GlobeIcon,
  GraduationCapIcon,
  MapPinIcon,
} from "@/app/components/Icons";

export default function AboutClient() {
  const { lang } = useApp();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Intro Header */}
      <section className="flex flex-col justify-between gap-8 border-b border-zinc-200/80 pb-12 md:flex-row md:items-center dark:border-zinc-800/80">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            {uiText.aboutPage.title[lang]}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
            {profile.name}
          </h1>
          <p className="mt-2 font-mono text-sm text-emerald-600 dark:text-emerald-400">
            {profile.headline[lang]}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
            {profile.summary[lang]}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
            {profile.aboutExtended[lang]}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
            <span className="inline-flex items-center gap-1.5">
              <MapPinIcon className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              {profile.location}
            </span>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1 font-medium text-emerald-600 hover:underline dark:text-emerald-400"
            >
              <span>{uiText.hero.ctaContact[lang]}</span>
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="shrink-0">
          <div className="h-32 w-32 overflow-hidden rounded-3xl border border-zinc-200 bg-white p-1.5 shadow-sm sm:h-40 sm:w-40 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/logo.jpg"
              alt={profile.name}
              width={160}
              height={160}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="border-b border-zinc-200/80 py-12 dark:border-zinc-800/80">
        <div className="mb-6 flex items-center gap-2.5">
          <GraduationCapIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {uiText.aboutPage.educationTitle[lang]}
          </h2>
        </div>

        <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {education.institution}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {education.degree[lang]} ·{" "}
                <span className="font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                  GPA {education.gpa}
                </span>
              </p>
            </div>
            <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
              {education.period[lang]}
            </span>
          </div>

          <div className="mt-4 rounded-xl bg-zinc-50 p-4 text-sm dark:bg-zinc-950/70">
            <p className="font-mono text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {uiText.aboutPage.finalProjectLabel[lang]}
            </p>
            <p className="mt-1 font-medium text-zinc-800 dark:text-zinc-200">
              &ldquo;{education.finalProject[lang]}&rdquo;
            </p>
            <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
              {education.mediaNote[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section className="border-b border-zinc-200/80 py-12 dark:border-zinc-800/80">
        <div className="mb-6 flex items-center gap-2.5">
          <AwardIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {uiText.aboutPage.achievementsTitle[lang]}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                  {item.category[lang]}
                </span>
                <span className="font-mono text-xs text-zinc-400">
                  {item.year}
                </span>
              </div>
              <h3 className="mt-3 text-sm font-semibold leading-snug text-zinc-900 dark:text-zinc-100">
                {item.title[lang]}
              </h3>
              <p className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                {item.issuer}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.description[lang]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Professional & Teaching Experience */}
      <section className="border-b border-zinc-200/80 py-12 dark:border-zinc-800/80">
        <div className="mb-8 flex items-center gap-2.5">
          <BriefcaseIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {uiText.aboutPage.experienceTitle[lang]}
          </h2>
        </div>

        <div className="space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="rounded-2xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                      {exp.role[lang]}
                    </h3>
                    {exp.current && (
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                        {uiText.aboutPage.currentBadge[lang]}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
                    {exp.organization} ·{" "}
                    <span className="text-zinc-500">{exp.type[lang]}</span>
                  </p>
                </div>
                <span className="shrink-0 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                  {exp.period[lang]}
                </span>
              </div>

              <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {exp.points[lang].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/80" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Organization & Leadership */}
      <section className="border-b border-zinc-200/80 py-12 dark:border-zinc-800/80">
        <h2 className="mb-6 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {uiText.aboutPage.organizationTitle[lang]}
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {organizations.map((org) => (
            <div
              key={org.id}
              className="rounded-2xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  {org.type[lang]}
                </span>
                <span className="font-mono text-xs text-zinc-400">
                  {org.period[lang]}
                </span>
              </div>
              <h3 className="mt-3 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {org.role[lang]}
              </h3>
              <p className="mt-0.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                {org.organization}
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                {org.points[lang].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/80" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Soft Skills & Languages */}
      <section className="pt-12">
        <div className="mb-6 flex items-center gap-2.5">
          <GlobeIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {uiText.aboutPage.softSkillsTitle[lang]}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Soft Skills
            </h3>
            <div className="mt-3.5 flex flex-wrap gap-2">
              {softSkills[lang].map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {lang === "id" ? "Bahasa" : "Languages"}
            </h3>
            <div className="mt-3.5 space-y-3">
              {languagesSpoken.map((item) => (
                <div
                  key={item.name.en}
                  className="flex items-center justify-between rounded-xl bg-zinc-50 px-3.5 py-2.5 text-sm dark:bg-zinc-950/70"
                >
                  <span className="font-medium text-zinc-900 dark:text-zinc-100">
                    {item.name[lang]}
                  </span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {item.level[lang]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

