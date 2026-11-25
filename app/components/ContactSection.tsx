"use client";

import { FormEvent, useState } from "react";
import { useApp } from "@/app/context/AppProviders";
import { profile, uiText } from "@/data/portfolio";
import {
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
} from "./Icons";

export default function ContactSection() {
  const { lang } = useApp();
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  const buildFormattedMessage = () => {
    const greeting =
      lang === "id"
        ? `Halo Tu Bagus, saya ${name || "pengunjung portofolio"}.`
        : `Hi Tu Bagus, I'm ${name || "a visitor from your portfolio"}.`;
    const subjectLine = topic ? `\n${lang === "id" ? "Topik" : "Topic"}: ${topic}` : "";
    const bodyLine = message ? `\n\n${message}` : "";
    return `${greeting}${subjectLine}${bodyLine}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(buildFormattedMessage());
    window.open(`${profile.whatsappUrl}?text=${encoded}`, "_blank", "noopener,noreferrer");
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent(
      topic ||
        (lang === "id"
          ? `Pesan dari ${name || "Portofolio"}`
          : `Message from ${name || "Portfolio"}`)
    );
    const body = encodeURIComponent(buildFormattedMessage());
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mb-10 max-w-2xl">
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
          {uiText.sections.contactEyebrow[lang]}
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
          {uiText.sections.contactTitle[lang]}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
          {uiText.sections.contactSubtitle[lang]}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Direct contact cards */}
        <div className="flex flex-col justify-between gap-4 rounded-2xl border border-zinc-200/80 bg-white p-6 lg:col-span-2 dark:border-zinc-800 dark:bg-zinc-900/60">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {uiText.contactForm.directChannels[lang]}
            </h3>
            <div className="mt-4 space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center justify-between rounded-xl border border-zinc-200/80 p-3.5 transition hover:border-amber-300 hover:bg-amber-50/40 dark:border-zinc-800 dark:hover:border-amber-500/40 dark:hover:bg-amber-500/5"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
                    <MailIcon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      Email
                    </p>
                    <p className="truncate font-mono text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {profile.email}
                    </p>
                  </div>
                </div>
                <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-zinc-400 transition group-hover:text-amber-600 dark:group-hover:text-amber-400" />
              </a>

              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-zinc-200/80 p-3.5 transition hover:border-emerald-300 hover:bg-emerald-50/40 dark:border-zinc-800 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-500/5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                    <MessageCircleIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      WhatsApp / Phone
                    </p>
                    <p className="font-mono text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {profile.phone}
                    </p>
                  </div>
                </div>
                <ArrowUpRightIcon className="h-4 w-4 text-zinc-400 transition group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
              </a>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-zinc-200/80 p-3.5 transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    <GithubIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      GitHub
                    </p>
                    <p className="font-mono text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      @{profile.githubUsername}
                    </p>
                  </div>
                </div>
                <ArrowUpRightIcon className="h-4 w-4 text-zinc-400 transition group-hover:text-zinc-900 dark:group-hover:text-white" />
              </a>

              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-zinc-200/80 p-3.5 transition hover:border-sky-300 hover:bg-sky-50/40 dark:border-zinc-800 dark:hover:border-sky-500/40 dark:hover:bg-sky-500/5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-400">
                    <LinkedinIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      LinkedIn
                    </p>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {profile.linkedinName}
                    </p>
                  </div>
                </div>
                <ArrowUpRightIcon className="h-4 w-4 text-zinc-400 transition group-hover:text-sky-600 dark:group-hover:text-sky-400" />
              </a>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2.5 border-t border-zinc-100 pt-4 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
            <MapPinIcon className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
            <span>
              {uiText.contactForm.locationLabel[lang]}:{" "}
              <strong className="font-medium text-zinc-800 dark:text-zinc-200">
                {profile.location}
              </strong>
            </span>
          </div>
        </div>

        {/* Quick WhatsApp Message Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-zinc-200/80 bg-white p-6 lg:col-span-3 dark:border-zinc-800 dark:bg-zinc-900/60"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-1.5 block text-xs font-medium text-zinc-700 dark:text-zinc-300"
              >
                {uiText.contactForm.nameLabel[lang]}
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={uiText.contactForm.namePlaceholder[lang]}
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-emerald-400"
              />
            </div>

            <div>
              <label
                htmlFor="contact-topic"
                className="mb-1.5 block text-xs font-medium text-zinc-700 dark:text-zinc-300"
              >
                {uiText.contactForm.topicLabel[lang]}
              </label>
              <input
                id="contact-topic"
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder={uiText.contactForm.topicPlaceholder[lang]}
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-emerald-400"
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="contact-message"
              className="mb-1.5 block text-xs font-medium text-zinc-700 dark:text-zinc-300"
            >
              {uiText.contactForm.messageLabel[lang]}
            </label>
            <textarea
              id="contact-message"
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={uiText.contactForm.messagePlaceholder[lang]}
              className="w-full resize-none rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-emerald-400"
            />
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-end gap-3">
            <button
              type="button"
              onClick={handleEmailClick}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 transition hover:border-zinc-300 hover:bg-zinc-50 cursor-pointer dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
            >
              <MailIcon className="h-4 w-4" />
              <span>{uiText.contactForm.sendEmail[lang]}</span>
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-600 cursor-pointer dark:bg-emerald-500 dark:text-zinc-950 dark:hover:bg-emerald-400"
            >
              <MessageCircleIcon className="h-4 w-4" />
              <span>{uiText.contactForm.sendWhatsapp[lang]}</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

