"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/app/context/AppProviders";
import { projects } from "@/data/portfolio";
import { StatItem } from "@/interfaces/post";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  AwardIcon,
  CloseIcon,
  CpuIcon,
  GraduationCapIcon,
} from "./Icons";

interface StatModalProps {
  stat: StatItem | null;
  onClose: () => void;
}

const accentStyles: Record<
  StatItem["accent"],
  {
    badge: string;
    banner: string;
    iconBg: string;
    dot: string;
  }
> = {
  emerald: {
    badge:
      "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:ring-emerald-500/30",
    banner:
      "from-emerald-500/15 via-teal-500/5 to-transparent border-emerald-200/70 dark:border-emerald-500/20",
    iconBg:
      "bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300",
    dot: "bg-emerald-500",
  },
  amber: {
    badge:
      "bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-500/15 dark:text-amber-300 dark:ring-amber-500/30",
    banner:
      "from-amber-500/15 via-yellow-500/5 to-transparent border-amber-200/70 dark:border-amber-500/20",
    iconBg:
      "bg-amber-500/15 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300",
    dot: "bg-amber-500",
  },
  violet: {
    badge:
      "bg-violet-50 text-violet-700 ring-violet-200 dark:bg-violet-500/15 dark:text-violet-300 dark:ring-violet-500/30",
    banner:
      "from-violet-500/15 via-purple-500/5 to-transparent border-violet-200/70 dark:border-violet-500/20",
    iconBg:
      "bg-violet-500/15 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300",
    dot: "bg-violet-500",
  },
  sky: {
    badge:
      "bg-sky-50 text-sky-700 ring-sky-200 dark:bg-sky-500/15 dark:text-sky-300 dark:ring-sky-500/30",
    banner:
      "from-sky-500/15 via-cyan-500/5 to-transparent border-sky-200/70 dark:border-sky-500/20",
    iconBg: "bg-sky-500/15 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300",
    dot: "bg-sky-500",
  },
};

export default function StatModal({ stat, onClose }: StatModalProps) {
  const { lang } = useApp();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!stat) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [stat, onClose]);

  if (!stat) return null;

  const style = accentStyles[stat.accent];
  const iotCount = projects.filter((p) => p.category === "IoT").length;
  const webCount = projects.filter((p) => p.category === "Web").length;
  const aiCount = projects.filter((p) => p.category === "AI").length;

  const gallery =
    stat.certificateImages && stat.certificateImages.length > 0
      ? stat.certificateImages
      : stat.certificateImage
        ? [{ src: stat.certificateImage, label: stat.badge }]
        : [];
  const safeIndex = selectedIndex < gallery.length ? selectedIndex : 0;
  const activeCert = gallery[safeIndex];

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="stat-modal-title"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-zinc-950/70 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Panel */}
      <div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-zinc-200/90 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950">
        {/* Top Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label={lang === "id" ? "Tutup pop up" : "Close popup"}
          className="absolute top-4 right-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/80 bg-white/90 text-zinc-600 backdrop-blur-xs transition hover:bg-zinc-100 hover:text-zinc-950 cursor-pointer dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
        >
          <CloseIcon className="h-4 w-4" />
        </button>

        {/* Visual Certificate / Credential Header */}
        <div
          className={`border-b bg-gradient-to-br p-6 pb-5 ${style.banner}`}
        >
          <div className="flex flex-wrap items-center gap-2 pr-10">
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${style.badge}`}
            >
              {stat.badge[lang]}
            </span>
            <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
              {stat.period}
            </span>
          </div>

          {/* Certificate Gallery Viewer OR Project Breakdown OR Stylized Credential */}
          {activeCert ? (
            <div className="mt-4">
              {gallery.length > 1 && (
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {gallery.map((item, idx) => (
                    <button
                      key={item.src}
                      type="button"
                      onClick={() => setSelectedIndex(idx)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-medium transition cursor-pointer ${
                        safeIndex === idx
                          ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950"
                          : "border border-zinc-200 bg-white/80 text-zinc-600 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-300"
                      }`}
                    >
                      {item.label[lang]}
                    </button>
                  ))}
                </div>
              )}

              <a
                href={activeCert.src}
                target="_blank"
                rel="noopener noreferrer"
                title={
                  lang === "id"
                    ? "Klik untuk memperbesar sertifikat"
                    : "Click to view full-size certificate"
                }
                className="group relative block overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-2 shadow-sm transition hover:border-emerald-400 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="relative mx-auto h-[340px] w-full sm:h-[420px]">
                  <Image
                    src={activeCert.src}
                    alt={`${stat.title[lang]} — ${activeCert.label[lang]}`}
                    fill
                    sizes="(max-width: 768px) 92vw, 600px"
                    className="object-contain transition-transform duration-300 group-hover:scale-[1.015]"
                  />
                </div>
                <span className="absolute right-3 bottom-3 inline-flex items-center gap-1 rounded-full bg-zinc-950/75 px-2.5 py-1 font-mono text-[10px] font-medium text-white backdrop-blur-xs">
                  <span>{lang === "id" ? "Perbesar" : "Zoom"}</span>
                  <ArrowUpRightIcon className="h-3 w-3" />
                </span>
              </a>
            </div>
          ) : stat.id === "projects-count" ? (
            <div className="mt-4 grid grid-cols-3 gap-2.5">
              <div className="rounded-2xl border border-emerald-200/70 bg-white/85 p-3.5 text-center dark:border-emerald-500/20 dark:bg-zinc-900/80">
                <p className="font-mono text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  {iotCount}
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-zinc-600 dark:text-zinc-400">
                  IoT & Robotics
                </p>
              </div>
              <div className="rounded-2xl border border-sky-200/70 bg-white/85 p-3.5 text-center dark:border-sky-500/20 dark:bg-zinc-900/80">
                <p className="font-mono text-2xl font-bold text-sky-600 dark:text-sky-400">
                  {webCount}
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-zinc-600 dark:text-zinc-400">
                  Full-Stack Web
                </p>
              </div>
              <div className="rounded-2xl border border-violet-200/70 bg-white/85 p-3.5 text-center dark:border-violet-500/20 dark:bg-zinc-900/80">
                <p className="font-mono text-2xl font-bold text-violet-600 dark:text-violet-400">
                  {aiCount}
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-zinc-600 dark:text-zinc-400">
                  AI & Fuzzy
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-4 flex items-center gap-4 rounded-2xl border border-zinc-200/80 bg-white/90 p-4 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/80">
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${style.iconBg}`}
              >
                {stat.id === "gpa-uir" ? (
                  <GraduationCapIcon className="h-7 w-7" />
                ) : stat.id === "hki-ai" ? (
                  <CpuIcon className="h-7 w-7" />
                ) : (
                  <AwardIcon className="h-7 w-7" />
                )}
              </div>
              <div className="min-w-0">
                <p className="font-mono text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
                  {stat.value}
                </p>
                <p className="truncate text-xs font-medium text-zinc-600 dark:text-zinc-300">
                  {stat.certificateNote
                    ? stat.certificateNote[lang]
                    : stat.issuer}
                </p>
              </div>
            </div>
          )}

          <h3
            id="stat-modal-title"
            className="mt-4 text-lg font-bold leading-snug tracking-tight text-zinc-950 sm:text-xl dark:text-white"
          >
            {stat.title[lang]}
          </h3>
          <p className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
            {stat.issuer}
          </p>
        </div>

        {/* Body Content */}
        <div className="p-6">
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            {stat.description[lang]}
          </p>

          {stat.highlights[lang].length > 0 && (
            <div className="mt-5">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                {lang === "id" ? "Rincian & Pencapaian" : "Key Details"}
              </p>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {stat.highlights[lang].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span
                      className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${style.dot}`}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Footer Actions */}
          <div className="mt-6 flex flex-wrap items-center justify-end gap-2.5 border-t border-zinc-100 pt-5 dark:border-zinc-800/80">
            {stat.certificateUrl && (
              <a
                href={stat.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-xs font-medium text-zinc-800 transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
              >
                <span>
                  {lang === "id" ? "Buka PDF Asli" : "Open Original PDF"}
                </span>
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>
            )}
            {stat.actionHref && stat.actionLabel && (
              <Link
                href={stat.actionHref}
                onClick={onClose}
                className="inline-flex items-center gap-1.5 rounded-xl bg-zinc-900 px-4 py-2 text-xs font-medium text-white transition hover:bg-emerald-600 dark:bg-emerald-500 dark:text-zinc-950 dark:hover:bg-emerald-400"
              >
                <span>{stat.actionLabel[lang]}</span>
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            )}
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl px-3.5 py-2 text-xs font-medium text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
            >
              {lang === "id" ? "Tutup" : "Close"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
